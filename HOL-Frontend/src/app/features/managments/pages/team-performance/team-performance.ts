import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { AuthService } from '../../../../core/services/auth';
import { UserService, UserDto } from '../../../../services/user.service';
import { DelegatePermissionModal } from '../managments-dashboard/components/delegate-permission-modal';

@Component({
    selector: 'app-team-performance',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        TableModule,
        InputTextModule,
        DelegatePermissionModal
    ],
    templateUrl: './team-performance.html'
})
export class TeamPerformancePage implements OnInit {
    @ViewChild('delModal') delModal!: DelegatePermissionModal;

    users: UserDto[] = [];
    loading = false;
    isSupervisor = false;
    isAdmin = false;

    constructor(
        public authService: AuthService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.isSupervisor = this.authService.isSupervisor();
        this.isAdmin = this.authService.isAdmin();
        this.loadUsers();
    }

    loadUsers() {
        this.loading = true;
        const dept = this.authService.getUserDepartment();

        // Dept aliases mapping (reused for consistency)
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

        this.userService.getUsers().subscribe({
            next: (allUsers) => {
                if (this.isAdmin) {
                    // Admin sees ALL Employees and Supervisors
                    this.users = allUsers;
                } else if (this.isSupervisor) {
                    // Supervisor sees THEIR Employees
                    this.users = allUsers.filter(u => {
                        const uDep = (u.department || '').toLowerCase().trim();
                        const normalizedUDep = depAliases[uDep] || uDep;
                        return normalizedUDep === normalizedSupervisorDept &&
                            u.id !== this.authService.getUser()?.id &&
                            (u.role || '').toLowerCase() !== 'admin';
                    });
                }
                this.loading = false;
            },
            error: (err) => {
                console.error('Failed to load users', err);
                this.loading = false;
            }
        });
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
