import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ChartModule } from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import { AuthService } from '../../../../core/services/auth';
import { UserService, UserDto } from '../../../../services/user.service';
import { TaskService, TaskStatus, EmployeeTaskDto } from '../../../../services/task.service';
import { BreakService, ActiveBreak } from '../../../../services/break.service';
import { DelegatePermissionModal } from '../managments-dashboard/components/delegate-permission-modal';
import { forkJoin } from 'rxjs';
import { RouterModule } from '@angular/router';

interface UserPerformance extends UserDto {
    pendingTasks: number;
    inProgressTasks: number;
    completedTasks: number;
    highPriorityTasks: number;
    isOnBreak: boolean;
    efficiency: number; // percentage
}

@Component({
    selector: 'app-team-performance',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        TableModule,
        InputTextModule,
        CardModule,
        TagModule,
        ChartModule,
        RouterModule,
        DelegatePermissionModal,
        SkeletonModule
    ],
    templateUrl: './team-performance.html'
})
export class TeamPerformancePage implements OnInit {
    @ViewChild('delModal') delModal!: DelegatePermissionModal;

    users: UserPerformance[] = [];
    loading = false;
    isSupervisor = false;
    isAdmin = false;

    // Stats
    totalEmployees = 0;
    activeOnTasks = 0;
    onBreakCount = 0;
    completedToday = 0;
    teamEfficiency = 0;
    criticalTasksCount = 0;

    // Charts
    workloadChartData: any;
    priorityChartData: any;
    permissionChartData: any;
    chartOptions: any;
    doughnutOptions: any;

    constructor(
        public authService: AuthService,
        private userService: UserService,
        private taskService: TaskService,
        private breakService: BreakService
    ) { }

    ngOnInit() {
        this.isSupervisor = this.authService.isSupervisor();
        this.isAdmin = this.authService.isAdmin();
        this.initChartOptions();
        this.loadTeamData();
    }

    initChartOptions() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
        const surfaceBorder = documentStyle.getPropertyValue('--content-border-color') || '#dfe7ef';

        this.chartOptions = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        font: { family: 'inherit', size: 12 }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: textColor },
                    grid: { color: surfaceBorder, drawBorder: false }
                },
                y: {
                    ticks: { color: textColor },
                    grid: { color: surfaceBorder, drawBorder: false }
                }
            }
        };

        this.doughnutOptions = {
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: textColor, usePointStyle: true }
                }
            }
        };
    }

    loadTeamData() {
        this.loading = true;
        const dept = this.authService.getUserDepartment();

        const depAliases: { [key: string]: string } = {
            'negotiations': 'negotiations', 'المفاوضات': 'negotiations',
            'execution': 'execution', 'التنفيذ': 'execution',
            'finance': 'finance', 'المالية': 'finance', 'الإدارة المالية': 'finance',
            'discussions': 'discussions', 'المداولات': 'discussions',
            'reports': 'reports', 'التقارير': 'reports', 'report': 'reports',
            'car-management': 'car-management', 'السيارات': 'car-management',
            'secretariat': 'secretariat', 'السكرتارية': 'secretariat',
            'management': 'management', 'الشؤون الإدارية': 'management', 'managment': 'management'
        };
        const normalizedSupervisorDept = (dept ? (depAliases[dept.toLowerCase().trim()] || dept.toLowerCase().trim()) : '').toLowerCase();

        forkJoin({
            users: this.userService.getUsers(),
            allTasks: this.taskService.getTasks({}),
            activeBreaks: this.breakService.getActiveBreaks()
        }).subscribe({
            next: (data: { users: UserDto[], allTasks: EmployeeTaskDto[], activeBreaks: ActiveBreak[] }) => {
                let filteredUsers: UserDto[] = [];
                if (this.isAdmin) {
                    filteredUsers = data.users;
                } else if (this.isSupervisor) {
                    filteredUsers = data.users.filter(u => {
                        const uDep = (u.department || '').toLowerCase().trim();
                        const normalizedUDep = depAliases[uDep] || uDep;
                        return normalizedUDep === normalizedSupervisorDept &&
                            u.id !== this.authService.getUser()?.id &&
                            (u.role || '').toLowerCase() !== 'admin';
                    });
                }

                this.users = filteredUsers.map(user => {
                    const userTasks = data.allTasks.filter(t => t.assignedToId === user.id);
                    const total = userTasks.length;
                    const completed = userTasks.filter(t => t.status === TaskStatus.Completed).length;

                    return {
                        ...user,
                        pendingTasks: userTasks.filter(t => t.status === TaskStatus.Pending).length,
                        inProgressTasks: userTasks.filter(t => t.status === TaskStatus.InProgress).length,
                        completedTasks: completed,
                        highPriorityTasks: userTasks.filter(t => t.priority === 'High').length,
                        isOnBreak: data.activeBreaks.some(b => b.userId === user.id),
                        efficiency: total > 0 ? Math.round((completed / total) * 100) : 0
                    };
                });

                this.processCharts(data.allTasks);
                this.updateStats();
                this.loading = false;
            },
            error: (err) => {
                console.error('Failed to load team data', err);
                this.loading = false;
            }
        });
    }

    processCharts(allTasks: any[]) {
        // 1. Workload Chart (Top 5 busiest employees)
        const sortedUsers = [...this.users].sort((a, b) => (b.pendingTasks + b.inProgressTasks) - (a.pendingTasks + a.inProgressTasks)).slice(0, 5);
        this.workloadChartData = {
            labels: sortedUsers.map(u => u.fullName || u.username),
            datasets: [{
                label: 'المهام النشطة',
                data: sortedUsers.map(u => u.pendingTasks + u.inProgressTasks),
                backgroundColor: ['#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'],
                borderRadius: 8
            }]
        };

        // 2. Priority Distribution (Team-wide)
        const high = allTasks.filter(t => t.priority === 'High').length;
        const medium = allTasks.filter(t => t.priority === 'Medium').length;
        const low = allTasks.filter(t => t.priority === 'Low').length;

        this.priorityChartData = {
            labels: ['عالية', 'متوسطة', 'منخفضة'],
            datasets: [{
                data: [high, medium, low],
                backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
                hoverBackgroundColor: ['#dc2626', '#d97706', '#059669']
            }]
        };

        // 3. Permissions Heatmap (By department)
        const deptCounts: { [key: string]: number } = {};
        this.users.forEach(u => {
            const perms = Array.isArray(u.accessibleDepartments) ? u.accessibleDepartments : [];
            perms.forEach(p => {
                deptCounts[p] = (deptCounts[p] || 0) + 1;
            });
        });

        this.permissionChartData = {
            labels: Object.keys(deptCounts),
            datasets: [{
                label: 'عدد الموظفين المصرح لهم',
                data: Object.values(deptCounts),
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                borderColor: '#6366f1',
                pointBackgroundColor: '#6366f1',
                pointBorderColor: '#fff'
            }]
        };
    }

    updateStats() {
        this.totalEmployees = this.users.length;
        this.onBreakCount = this.users.filter(u => u.isOnBreak).length;
        this.activeOnTasks = this.users.filter(u => u.inProgressTasks > 0).length;
        this.completedToday = this.users.reduce((acc, u) => acc + u.completedTasks, 0);
        this.criticalTasksCount = this.users.reduce((acc, u) => acc + u.highPriorityTasks, 0);

        const totalEff = this.users.reduce((acc, u) => acc + u.efficiency, 0);
        this.teamEfficiency = this.users.length > 0 ? Math.round(totalEff / this.users.length) : 0;
    }

    getPermissionsDisplay(user: UserDto): string {
        const perms = user.accessibleDepartments;
        if (Array.isArray(perms)) {
            return perms.join('، ');
        } else if (typeof perms === 'string') {
            return perms;
        }
        return 'لا توجد صلاحيات إضافية';
    }

    openDelegateModal(userId: number) {
        this.delModal.open(userId);
    }
}
