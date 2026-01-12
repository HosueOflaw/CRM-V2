import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { AuthService } from '../../../../core/services/auth';
import { TaskService, EmployeeTaskDto, TaskStatus } from '../../../../services/task.service';
import { BreakService, BreakStatus, ActiveBreak, DailyBreakReport } from '../../../../services/break.service';
import { UserService, UserDto } from '../../../../services/user.service';
import { PermissionService } from '../../../../core/services/permission.service';

interface DashboardStats {
  todayTasks: number;
  pendingTasks: number;
  completedThisWeek: number;
  inProgressTasks: number;
}

interface TeamStats {
  activeEmployees: number;
  employeesOnBreak: number;
  activeTasks: number;
  pendingRequests: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [RouterModule, CommonModule, InputTextModule, ButtonModule, CardModule, TagModule],
})
export class HomePage implements OnInit {
  currentUser: any;
  loading = true;

  // Employee Stats
  dashboardStats: DashboardStats = {
    todayTasks: 0,
    pendingTasks: 0,
    completedThisWeek: 0,
    inProgressTasks: 0
  };

  todayTasks: EmployeeTaskDto[] = [];
  isOnBreak = false;
  todayBreakCompleted = false;
  breakTimeRemaining = '';

  // Supervisor Stats
  teamStats: TeamStats = {
    activeEmployees: 0,
    employeesOnBreak: 0,
    activeTasks: 0,
    pendingRequests: 0
  };

  // Keep navigation for quick access
  filteredDepartments: any[] = [];
  departments = [
    { name: 'المفاوضات', icon: '📞', route: '/negotiations', color: 'primary', key: 'negotiations' },
    { name: 'الشؤون الإدارية', icon: '👥', route: '/management', color: 'secondary', key: 'management' },
    { name: 'المالية', icon: '💰', route: '/finance', color: 'accent', key: 'finance' },
    { name: 'التقارير', icon: '📊', route: '/reports', color: 'info', key: 'reports' },
    { name: 'السيارات', icon: '🚗', route: '/car-management', color: 'warning', key: 'car-management' },
    { name: 'السكرتارية', icon: '📝', route: '/secretariat', color: 'success', key: 'secretariat' },
    { name: 'التنفيذ', icon: '⚙️', route: '/execution', color: 'error', key: 'execution' },
    { name: 'المداولات', icon: '⚖️', route: '/discussions', color: 'help', key: 'discussions' },
  ];

  constructor(
    public authService: AuthService,
    private taskService: TaskService,
    private breakService: BreakService,
    private userService: UserService,
    private permissionService: PermissionService
  ) {
    this.currentUser = this.authService.getUser();
  }

  ngOnInit() {
    this.filterDepartments();
    this.loadDashboardData();
  }

  filterDepartments() {
    const isAdmin = this.authService.isAdmin();
    const isEmployee = this.authService.isEmployee();
    const userDep = (this.authService.getUserDepartment() || '').toLowerCase().trim();

    if (isAdmin) {
      this.filteredDepartments = this.departments;
    } else if (isEmployee) {
      // Basic filtering based on user department
      this.filteredDepartments = this.departments.filter(d =>
        userDep.includes(d.key) || d.name.includes(userDep)
      );
    }
  }

  loadDashboardData() {
    this.loading = true;

    // Always load personal stats if applicable
    this.loadTaskStats();
    this.loadBreakStatus();

    // Load team stats for supervisors/admins
    if (this.authService.isSupervisor() || this.authService.isAdmin()) {
      this.loadTeamStats();
    }

    this.loading = false;
  }

  loadTaskStats() {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

    // Get today's tasks
    this.taskService.getTasks({
      startDate: startOfDay.toISOString(),
      endDate: endOfDay.toISOString()
    }).subscribe({
      next: (tasks) => {
        const myTasks = tasks.filter(t => t.assignedToId === this.currentUser?.id);
        this.todayTasks = myTasks.slice(0, 5);
        this.dashboardStats.todayTasks = myTasks.length;
        this.dashboardStats.pendingTasks = myTasks.filter(t => t.status === TaskStatus.Pending).length;
        this.dashboardStats.inProgressTasks = myTasks.filter(t => t.status === TaskStatus.InProgress).length;
      }
    });

    // Get completed tasks this week
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    this.taskService.getTasks({
      startDate: startOfWeek.toISOString(),
      status: TaskStatus.Completed
    }).subscribe({
      next: (tasks) => {
        this.dashboardStats.completedThisWeek = tasks.filter(t => t.assignedToId === this.currentUser?.id).length;
      }
    });
  }

  loadBreakStatus() {
    this.breakService.getStatus().subscribe({
      next: (status: BreakStatus) => {
        this.isOnBreak = status.isOnBreak;
        if (this.isOnBreak && status.startTime && status.durationMinutes) {
          const startTime = new Date(status.startTime);
          const now = new Date();
          const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
          const totalSeconds = (status.durationMinutes || 0) * 60;
          const remaining = Math.max(0, totalSeconds - elapsed);

          const minutes = Math.floor(remaining / 60);
          const seconds = remaining % 60;
          this.breakTimeRemaining = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        // If not on break, check if it was completed today
        if (!this.isOnBreak) {
          const today = new Date().toISOString().split('T')[0];
          this.breakService.getDailyReport(today).subscribe((reports: DailyBreakReport[]) => {
            const currentId = this.currentUser?.id || this.currentUser?.userId;

            const myReport = reports.find((r: DailyBreakReport) => {
              const rAny = r as any;
              const rId = rAny.userId || rAny.UserId || rAny.id || rAny.Id;
              return String(rId) === String(currentId);
            });

            if (myReport) {
              const myReportAny = myReport as any;
              const isCompFlag = myReportAny.isCompleted === true || myReportAny.IsCompleted === true ||
                String(myReportAny.isCompleted) === 'True' || String(myReportAny.IsCompleted) === 'True' ||
                String(myReportAny.isCompleted) === 'true' || String(myReportAny.IsCompleted) === 'true';

              const endTime = myReportAny.endTime || myReportAny.EndTime;
              const hasEndTime = endTime && String(endTime) !== '0001-01-01T00:00:00' && String(endTime) !== '0001-01-01 00:00:00';

              if (isCompFlag || hasEndTime) {
                this.todayBreakCompleted = true;
                console.log('✅ Home: Daily break confirmed as completed.', { currentId, report: myReport });
              }
            }
          });
        }
      },
      error: (err: any) => {
        console.error('Failed to load break status', err);
        this.isOnBreak = false;
      }
    });
  }

  loadTeamStats() {
    // Active Employees
    this.userService.getUsers().subscribe((users: UserDto[]) => {
      this.teamStats.activeEmployees = users.length;
    });

    // Employees on Break
    this.breakService.getActiveBreaks().subscribe((breaks: ActiveBreak[]) => {
      this.teamStats.employeesOnBreak = breaks.length;
    });

    // Active Tasks
    this.taskService.getTasks({ status: TaskStatus.InProgress }).subscribe((tasks: EmployeeTaskDto[]) => {
      this.teamStats.activeTasks = tasks.length;
    });

    // Pending Requests
    if (this.authService.isAdmin()) {
      this.permissionService.getPendingRequests().subscribe(requests => {
        this.teamStats.pendingRequests = requests.length;
      });
    }
  }

  getStatusSeverity(status: TaskStatus): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
    return this.taskService.getStatusColor(status);
  }

  getStatusLabel(status: TaskStatus): string {
    return this.taskService.getStatusLabel(status);
  }

  getPrioritySeverity(priority: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
    return this.taskService.getPriorityColor(priority);
  }

  startBreak() {
    this.breakService.startBreak().subscribe(() => this.loadBreakStatus());
  }

  endBreak() {
    this.breakService.endBreak().subscribe(() => this.loadBreakStatus());
  }
}
