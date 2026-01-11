import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { AuthService } from '../../core/services/auth';
import { PermissionRequest, PermissionService } from '../../core/services/permission.service';
import { Signalr } from '../../services/signalr';
import { PrimeToastService } from '../../shared/services/prime-toast.service';
import { BreakService, BreakStatus, DailyBreakReport } from '../../services/break.service';
import { PermissionRequestModal } from '../../features/managments/pages/managments-dashboard/components/permission-request-modal';
import { Subscription, interval } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, ToastModule, PermissionRequestModal],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <span>⚖️ بيت القانون</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <!-- User Info -->
            <div class="user-info flex items-center gap-2" *ngIf="authService.isLoggedIn()">
                <span class="user-name font-bold">{{ authService.getCurrentUserName() }}</span>
                <span class="px-2 py-1 rounded text-xs font-bold border" [ngClass]="getUserRoleSeverity()">
                    {{ getUserRoleLabel() }}
                </span>
            </div>

            <!-- Permission System Actions -->
            <div class="permission-actions flex items-center gap-2" *ngIf="authService.isLoggedIn()">
                <!-- Break Stats (Supervisor only) -->
                <button type="button" class="layout-topbar-action !bg-purple-50 dark:!bg-purple-900/20 !text-purple-600 dark:!text-purple-400 border !border-purple-100 dark:!border-purple-800/30 rounded-xl relative" 
                    *ngIf="authService.isSupervisor()" routerLink="/reports/daily-breaks" title="إحصائيات استراحات القسم">
                    <i class="pi pi-chart-line"></i>
                    <!-- Active Breaks Badge -->
                    <span *ngIf="activeBreaksCount > 0" class="topbar-badge !bg-purple-500">
                        {{activeBreaksCount}}
                    </span>
                </button>

                <!-- Request Permission (Supervisor only) -->
                <button type="button" class="layout-topbar-action !bg-blue-50 dark:!bg-blue-900/20 !text-blue-600 dark:!text-blue-400 border !border-blue-100 dark:!border-blue-800/30 rounded-xl" 
                    *ngIf="authService.isSupervisor()" (click)="permModal.open()" title="طلب صلاحية">
                    <i class="pi pi-shield"></i>
                </button>

              
                <!-- Pending Requests Admin View -->
                <div class="relative flex items-center" *ngIf="authService.isAdmin()">
                    <a routerLink="/management/pending-permissions" 
                       class="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
                       pTooltip="طلبات الصلاحيات المعلقة" tooltipPosition="bottom">
                        <i class="pi pi-bell text-xl text-orange-500"></i>
                        <!-- Red Dot Badge for Navbar -->
                        <span *ngIf="pendingRequestsCount" 
                              class="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-gray-900 animate-bounce">
                            {{pendingRequestsCount}}
                        </span>
                    </a>
                </div>
            </div>

            <!-- Break System for Employees ONLY (Higher visibility) -->
            <div class="break-container flex items-center" *ngIf="authService.isEmployee()">
                <!-- Start Break Button -->
                <button type="button" class="break-btn-pulse flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-full transition-all hover:bg-green-600 shadow-md" 
                    *ngIf="!isOnBreak" (click)="startBreak()" title="بدء ساعة الراحة">
                    <i class="pi pi-clock"></i>
                    <span class="text-xs font-bold whitespace-nowrap">بداية الراحة</span>
                </button>

                <!-- End Break Button & Timer -->
                <div class="active-break flex items-center gap-2" *ngIf="isOnBreak">
                    <span class="break-timer" [ngClass]="{'text-red-500': isBreakLate}">
                        {{ displayTimer }}
                    </span>
                    <button type="button" class="layout-topbar-action break-btn-end" 
                        (click)="endBreak()" title="العودة من الراحة">
                        <i class="pi pi-play"></i>
                    </button>
                </div>
            </div>

            <div class="layout-config-menu">
                <!-- Settings Button -->
                <button type="button" class="layout-topbar-action" routerLink="/settings" title="الإعدادات">
                    <i class="pi pi-cog"></i>
                </button>

                <!-- Dark Mode Toggle -->
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()" title="تبديل الوضع">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>

                <!-- Theme Configurator -->
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                        title="تخصيص المظهر"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>

                <!-- Break Reports for Admin -->
                <button type="button" class="layout-topbar-action" 
                    *ngIf="authService.isAdmin()" routerLink="/reports/daily-breaks" title="تقارير الاستراحة اليومية">
                    <i class="pi pi-list"></i>
                </button>

                <!-- Logout Button -->
                <button type="button" class="layout-topbar-action logout-btn" (click)="logout()" title="تسجيل الخروج" *ngIf="authService.isLoggedIn()">
                    <i class="pi pi-sign-out"></i>
                </button>
            </div>
        </div>
    </div>
    <app-permission-request-modal #permModal></app-permission-request-modal>
    <p-toast position="top-center"></p-toast>`,
    styles: [`
        .user-info {
            display: flex;
            align-items: center;
            margin-left: 1rem;
            padding: 0.5rem 1rem;
            background: var(--surface-hover);
            border-radius: 8px;
        }

        .user-name {
            font-size: 0.875rem;
            color: var(--text-color);
            font-weight: 500;
        }

        .logout-btn {
            color: var(--red-500) !important;
        }

        .logout-btn:hover {
            background: rgba(239, 68, 68, 0.1) !important;
        }

        .break-container {
            display: flex;
            align-items: center;
            margin: 0 1.25rem;
            z-index: 100;
        }

        .break-btn-pulse {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
            color: white !important;
            padding: 10px 20px !important;
            border-radius: 50px !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.3px;
            box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.2), 0 4px 6px -2px rgba(16, 185, 129, 0.1);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            animation: pulse-premium 2.5s infinite;
        }

        .break-btn-pulse:hover {
            background: linear-gradient(135deg, #059669 0%, #047857 100%) !important;
            transform: translateY(-2px);
            box-shadow: 0 20px 25px -5px rgba(16, 185, 129, 0.25), 0 10px 10px -5px rgba(16, 185, 129, 0.15);
        }

        .break-btn-pulse:active {
            transform: scale(0.96);
        }

        @keyframes pulse-premium {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
            70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .active-break {
            background: rgba(var(--primary-color-rgb), 0.05) !important;
            border-radius: 50px;
            border: 2px solid var(--primary-color) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .break-timer {
            font-family: 'Outfit', 'Inter', 'Courier New', monospace !important;
            font-weight: 700;
            font-size: 1.25rem;
            min-width: 70px;
            text-align: center;
            color: var(--primary-color);
            direction: ltr;
            letter-spacing: 1px;
        }

        .break-btn-end {
            color: var(--orange-500) !important;
            width: 40px !important;
            height: 40px !important;
            border-radius: 50% !important;
        }

        .break-btn-end:hover {
            background: rgba(245, 158, 11, 0.1) !important;
        }

        .topbar-badge {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #ef4444;
            color: #ffffff;
            font-size: 0.65rem;
            font-weight: 800;
            min-width: 1.25rem;
            height: 1.25rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            z-index: 10;
        }
        :host-context(.dark) .topbar-badge {
            border-color: #1e1e1e;
        }
    `]
})
export class AppTopbar implements OnInit, OnDestroy {
    items!: MenuItem[];

    isOnBreak = false;
    breakStartTime: Date | null = null;
    displayTimer = '00:00';
    isBreakLate = false;
    pendingRequestsCount: string | undefined = undefined;
    activeBreaksCount: number = 0;
    private timerSubscription?: Subscription;
    private destroy$ = new Subscription();

    constructor(
        public layoutService: LayoutService,
        public authService: AuthService,
        private router: Router,
        private toast: PrimeToastService,
        private breakService: BreakService,
        private permissionService: PermissionService,
        private signalr: Signalr
    ) { }

    ngOnInit() {
        this.checkBreakStatus();

        // Admin specific logic
        if (this.authService.isAdmin()) {
            this.fetchPendingCount();
        }

        // Supervisor specific logic
        if (this.authService.isSupervisor()) {
            this.fetchActiveBreaksCount();
        }

        // Listen for SignalR updates (Shared for Admin / Supervisor)
        this.destroy$.add(
            this.signalr.message$.subscribe((msg: any) => {
                const type = (msg.type || '').toLowerCase();

                // Permission updates (Admin)
                if (this.authService.isAdmin() && (type === 'new_permission_request' || type === 'permission_request_processed')) {
                    this.fetchPendingCount();
                }

                // Break updates (Supervisor)
                if (this.authService.isSupervisor() && (type === 'break_started' || type === 'break_ended' || type === 'startbreak' || type === 'endbreak')) {
                    this.fetchActiveBreaksCount();
                }
            })
        );

        // Listen for global user updates
        this.destroy$.add(
            this.authService.userUpdated$.subscribe(() => {
                if (this.authService.isAdmin()) this.fetchPendingCount();
                if (this.authService.isSupervisor()) this.fetchActiveBreaksCount();
            })
        );

        // Listen for internal processed event
        this.destroy$.add(
            this.permissionService.requestProcessed$.subscribe(() => {
                if (this.authService.isAdmin()) this.fetchPendingCount();
            })
        );
    }

    private fetchActiveBreaksCount() {
        this.breakService.getActiveBreaks().subscribe({
            next: (activeBreaks) => {
                this.activeBreaksCount = activeBreaks.length;
                console.log('📊 Active Breaks Count Updated:', this.activeBreaksCount);
            },
            error: (err) => console.error('Failed to fetch active breaks', err)
        });
    }

    private fetchPendingCount() {
        // Use the same localStorage cache as Sidebar for consistency
        const cached = localStorage.getItem('pending_permissions_count');
        if (cached && !this.pendingRequestsCount) {
            this.pendingRequestsCount = cached;
        }

        this.permissionService.getPendingRequests().subscribe((reqs: PermissionRequest[]) => {
            const count = reqs.length > 0 ? reqs.length.toString() : undefined;
            if (this.pendingRequestsCount !== count) {
                this.pendingRequestsCount = count;
                if (count) {
                    localStorage.setItem('pending_permissions_count', count);
                } else {
                    localStorage.removeItem('pending_permissions_count');
                }
            }
        });
    }

    ngOnDestroy() {
        this.stopTimer();
        this.destroy$.unsubscribe();
    }

    checkBreakStatus() {
        this.breakService.getStatus().subscribe({
            next: (status: any) => {
                console.log('--- Break Status Fetched ---', status);

                // Handle potentially PascalCase properties from Backend (C# default) or mismatched names (isInBreak vs isOnBreak)
                const isOnBreak = status.isInBreak || status.IsInBreak || status.isOnBreak || status.IsOnBreak;
                const startTimeStr = status.startTime || status.StartTime;

                if (status && isOnBreak) {
                    this.isOnBreak = true;
                    // If backend sends startTime, use it. Otherwise use current time as fallback
                    this.breakStartTime = startTimeStr ? new Date(startTimeStr) : new Date();
                    this.startTimer();
                } else {
                    // Fallback: Check Daily Report for any active break (missing endTime)
                    // This handles cases where /status might be inconsistent
                    this.verifyActiveBreakFromReport();
                }
            },
            error: (err) => {
                console.error('Failed to fetch break status', err);
                // Also try fallback on error
                this.verifyActiveBreakFromReport();
            }
        });
    }

    private verifyActiveBreakFromReport() {
        // Get today's report
        const today = new Date().toISOString().split('T')[0];

        this.breakService.getDailyReport(today).subscribe({
            next: (reports: any[]) => {
                // Look for any report without an EndTime
                // Handle casing for endTime/EndTime
                // User requested checking is_completed column specifically
                const active = reports.find(r => {
                    const isCompleted = r.isCompleted === true || r.IsCompleted === true || r.is_completed === true;
                    // It is active if NOT completed AND has no end time
                    return !isCompleted && !r.endTime && !(r as any).EndTime;
                });


                if (active) {
                    console.log('--- Found Active Break via Report Fallback ---', active);
                    this.isOnBreak = true;
                    // Handle casing for startTime/StartTime
                    const activeStart = active.startTime || (active as any).StartTime;
                    this.breakStartTime = activeStart ? new Date(activeStart) : new Date();
                    this.startTimer();
                } else {
                    this.isOnBreak = false;
                    this.stopTimer();
                }
            },
            error: (err) => {
                console.error('Failed to fetch daily report fallback', err);
                this.isOnBreak = false;
                this.stopTimer();
            }
        });
    }

    startBreak() {
        Swal.fire({
            title: 'بدء ساعة الراحة؟',
            text: 'هل أنت متأكد من رغبتك في بدء وقت الاستراحة الآن؟',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'نعم، ابدأ',
            cancelButtonText: 'إلغاء',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.breakService.startBreak().subscribe({
                    next: (res) => {
                        this.isOnBreak = true;
                        this.breakStartTime = new Date();
                        this.startTimer();
                        this.toast.success('بدأت ساعة الراحة الآن', 'موفق');
                    },
                    error: (err) => {
                        this.toast.error(err.error?.message || 'فشل بدء الراحة', 'خطأ');
                    }
                });
            }
        });
    }

    endBreak() {
        Swal.fire({
            title: 'إنهاء الاستراحة؟',
            text: 'هل أنت متأكد من العودة للعمل الآن؟',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#f59e0b',
            cancelButtonColor: '#6b7280',
            confirmButtonText: 'نعم، عودة للعمل',
            cancelButtonText: 'إلغاء',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.breakService.endBreak().subscribe({
                    next: (res) => {
                        this.stopTimer();
                        this.isOnBreak = false;
                        this.breakStartTime = null;
                        this.displayTimer = '00:00';
                        this.toast.success(res.message || 'تمت العودة من الراحة بنجاح', 'الحمد لله على السلامة');
                    },
                    error: (err) => {
                        this.toast.error(err.error?.message || 'فشل إنهاء الراحة', 'خطأ');
                    }
                });
            }
        });
    }

    private startTimer() {
        this.stopTimer();
        this.timerSubscription = interval(1000).subscribe(() => {
            if (this.breakStartTime) {
                const now = new Date();
                const diffMs = now.getTime() - this.breakStartTime.getTime();
                const diffMins = Math.floor(diffMs / 60000);
                const diffSecs = Math.floor((diffMs % 60000) / 1000);

                this.displayTimer = `${diffMins.toString().padStart(2, '0')}:${diffSecs.toString().padStart(2, '0')}`;
                this.isBreakLate = diffMins >= 60;
            }
        });
    }

    private stopTimer() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
            this.timerSubscription = undefined;
        }
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state: any) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    logout() {
        this.authService.logout().subscribe({
            next: (response) => {
                // Show success message
                this.toast.success(
                    response?.message || 'تم تسجيل الخروج بنجاح',
                    'تم تسجيل الخروج',
                    { life: 2000 }
                );

                // Navigate to login after a short delay to show the toast
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 500);
            },
            error: (err) => {
                // Even if backend logout fails, show message and navigate to login (local data already cleared)
                this.toast.info(
                    'تم تسجيل الخروج محلياً',
                    'تسجيل الخروج',
                    { life: 2000 }
                );

                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 500);
            }
        });
    }

    getUserRoleLabel(): string {
        const user = this.authService.getUser();
        const role = (user?.role || '').toLowerCase();

        switch (role) {
            case 'admin':
            case 'administrator':
                return 'مدير النظام'; // Admin
            case 'supervisor':
                return 'مشرف قسم'; // Supervisor
            case 'employee':
            case 'user':
                return 'موظف'; // Employee
            default:
                return role || 'مستخدم';
        }
    }

    getUserRoleSeverity(): string {
        const user = this.authService.getUser();
        const role = (user?.role || '').toLowerCase();

        switch (role) {
            case 'admin':
            case 'administrator':
                return 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800/30';
            case 'supervisor':
                return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800/30';
            case 'employee':
            case 'user':
                return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800/30';
            default:
                return 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700';
        }
    }
}
