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
import { BreakService, BreakStatus, DailyBreakReport, ActiveBreak } from '../../services/break.service';
import { PermissionRequestModal } from '../../features/managments/pages/managments-dashboard/components/permission-request-modal';
import { NotificationService, Notification } from '../../services/notification.service';
import { PopoverModule } from 'primeng/popover';
import { BadgeModule } from 'primeng/badge';
import { Subscription, interval } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, ToastModule, PermissionRequestModal, PopoverModule, BadgeModule],
    template: ` <div class="layout-topbar" #topbarRef>
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <span>⚖️ بيت القانون</span>
            </a>
        </div>

        <!-- Global Search Trigger (Desktop) -->
        <div class="hidden md:flex items-center mx-6 cursor-pointer group" (click)="layoutService.showCommandPalette()">
            <div class="relative flex items-center bg-gray-50 dark:bg-gray-800 rounded-xl px-4 py-2.5 border border-gray-200 dark:border-gray-700 group-hover:border-primary-500/50 group-hover:shadow-[0_0_0_4px_rgba(var(--primary-color-rgb),0.1)] transition-all duration-300 w-64 text-gray-400 dark:text-gray-500">
                <i class="pi pi-search text-lg group-hover:text-primary-500 transition-colors"></i>
                <span class="ml-3 text-sm font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">بحث سريع...</span>
                <span class="ml-auto text-[10px] font-bold bg-white dark:bg-gray-700 px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600 shadow-sm text-gray-500 font-mono group-hover:border-primary-200 dark:group-hover:border-primary-900/50 transition-colors">Ctrl+K</span>
            </div>
        </div>

        <div class="layout-topbar-actions">
            <!-- Mobile Search Icon (Only visible on mobile via CSS) -->
            <button class="layout-topbar-action mobile-search-btn" (click)="layoutService.showCommandPalette()">
                <i class="pi pi-search"></i>
            </button>

            <!-- User Info (Hidden on Mobile) -->
            <div class="user-info flex items-center gap-2 hidden md:flex" *ngIf="authService.isLoggedIn()">
                <span class="user-name font-bold">{{ authService.getCurrentUserName() }}</span>
                <span class="px-2 py-1 rounded text-xs font-bold border" [ngClass]="getUserRoleSeverity()">
                    {{ getUserRoleLabel() }}
                </span>
            </div>

            <!-- Advanced Global Notification Center -->
            <div class="notification-container relative flex items-center" *ngIf="authService.isLoggedIn()">
                <button type="button" class="layout-topbar-action relative !bg-transparent !border-none" (click)="notifPanel.toggle($event)">
                    <i class="pi pi-bell text-xl"></i>
                    <span *ngIf="(notifService.unreadCount$ | async) || 0 > 0" class="topbar-badge !bg-red-500">
                        {{ notifService.unreadCount$ | async }}
                    </span>
                </button>

                <p-popover #notifPanel styleClass="notif-overlay-panel" [appendTo]="topbarRef">
                    <div class="notif-wrapper custom-scrollbar">
                        <div class="notif-header flex justify-between items-center p-3 border-b border-gray-100 dark:border-gray-800">
                            <span class="font-bold text-lg">الإشعارات 🔔</span>
                            <div class="flex gap-2">
                                <button (click)="notifService.markAllAsRead()" class="text-xs text-blue-500 hover:text-blue-600 transition-colors">تحديد الكل كمقروء</button>
                                <button (click)="notifService.clearAll()" class="text-xs text-gray-400 hover:text-red-500 transition-colors">مسح الكل</button>
                            </div>
                        </div>
                        
                        <div class="notif-list max-h-[400px] overflow-y-auto">
                            <ng-container *ngIf="(notifService.notifications$ | async)?.length; else emptyNotifs">
                                <div *ngFor="let n of (notifService.notifications$ | async)" 
                                     class="notif-item p-3 border-b border-gray-50 dark:border-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/20 transition-all cursor-pointer relative"
                                     [class.unread]="!n.isRead"
                                     (click)="handleNotifClick(n, notifPanel)">
                                    
                                    <div class="flex gap-3">
                                        <div class="notif-icon shrink-0 w-10 h-10 rounded-full flex items-center justify-center" [ngClass]="getNotifTypeClass(n.type)">
                                            <i [class]="getNotifIcon(n.type)"></i>
                                        </div>
                                        <div class="notif-content flex-1 min-w-0">
                                            <h4 class="text-sm font-bold mb-1 truncate">{{ n.title }}</h4>
                                            <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">{{ n.message }}</p>
                                            <span class="text-[10px] text-gray-400 mt-2 block">{{ notifService.getRelativeTime(n.timestamp) }}</span>
                                        </div>
                                        <div *ngIf="!n.isRead" class="unread-dot w-2 h-2 bg-blue-500 rounded-full absolute left-3 top-1/2 -translate-y-1/2"></div>
                                    </div>
                                </div>
                            </ng-container>
                            <ng-template #emptyNotifs>
                                <div class="p-8 text-center bg-gray-50/50 dark:bg-gray-800/20 rounded-xl m-2 border border-dashed border-gray-200 dark:border-gray-700/50">
                                    <p class="text-gray-500 dark:text-gray-400 font-medium">لا توجد إشعارات حالياً</p>
                                </div>
                            </ng-template>
                        </div>
                    </div>
                </p-popover>
            </div>

            <!-- Permission System Actions -->
            <div class="permission-actions flex items-center gap-2" *ngIf="authService.isLoggedIn()">
                <!-- Break Stats (Supervisor) -->
                <button type="button" class="layout-topbar-action purple-btn !bg-purple-50 dark:!bg-purple-900/20 !text-purple-600 dark:!text-purple-400 border !border-purple-100 dark:!border-purple-800/30 rounded-xl relative" 
                    *ngIf="authService.isSupervisor()" routerLink="/reports/daily-breaks" routerLinkActive="topbar-item-active" title="إحصائيات استراحات القسم">
                    <i class="pi pi-chart-line"></i>
                    <!-- Active Breaks Badge -->
                    <span *ngIf="activeBreaksCount > 0" class="topbar-badge !bg-purple-500">
                        {{activeBreaksCount}}
                    </span>
                </button>

                <!-- Request Permission -->
                <button type="button" class="layout-topbar-action !bg-blue-50 dark:!bg-blue-900/20 !text-blue-600 dark:!text-blue-400 border !border-blue-100 dark:!border-blue-800/30 rounded-xl" 
                    *ngIf="authService.isSupervisor()" (click)="permModal.open()" title="طلب صلاحية">
                    <i class="pi pi-shield"></i>
                </button>

              
                 <!-- Pending Requests Admin View -->
                <a routerLink="/management/pending-permissions" routerLinkActive="topbar-item-active"
                   *ngIf="authService.isAdmin()"
                   class="layout-topbar-action relative hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                   pTooltip="طلبات الصلاحيات المعلقة" tooltipPosition="bottom">
                    <i class="pi pi-inbox text-xl text-orange-500"></i>
                    <!-- Notification Badge -->
                    <span *ngIf="pendingRequestsCount" class="topbar-badge !bg-orange-500 animate-bounce">
                        {{pendingRequestsCount}}
                    </span>
                </a>

                
            </div>

            <!-- Break System -->
            <div class="break-container flex items-center" *ngIf="authService.isEmployee()">
                <!-- Start Break -->
                <button type="button" class="break-btn-pulse flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-full transition-all hover:bg-green-600 shadow-md" 
                    *ngIf="!isOnBreak && !todayBreakCompleted" (click)="startBreak()" title="بدء ساعة الراحة">
                    <i class="pi pi-clock"></i>
                    <span class="text-xs font-bold whitespace-nowrap break-text">بداية الراحة</span>
                </button>

                <!-- Break Completed -->
                <button type="button" class="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-500 rounded-full cursor-not-allowed border border-gray-200 dark:border-gray-700" 
                    *ngIf="!isOnBreak && todayBreakCompleted" disabled title="تم أخذ الاستراحة اليوم">
                    <i class="pi pi-check-circle text-green-500"></i>
                    <span class="text-xs font-bold whitespace-nowrap break-text">تم أخذ استراحة اليوم</span>
                </button>

                <!-- Active Break -->
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
                <button type="button" class="layout-topbar-action" routerLink="/settings" routerLinkActive="topbar-item-active" title="الإعدادات">
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

                <!-- Break Reports Admin -->
                <button type="button" class="layout-topbar-action" 
                    *ngIf="authService.isAdmin()" routerLink="/reports/daily-breaks" routerLinkActive="topbar-item-active" title="تقارير الاستراحة اليومية">
                    <i class="pi pi-list"></i>
                </button>

                <!-- Logout -->
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

        /* Notification Styles */
        :host ::ng-deep .notif-overlay-panel {
            width: 380px;
            padding: 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-radius: 16px;
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            margin-top: 10px;
        }

        :host-context(.dark) ::ng-deep .notif-overlay-panel {
            background: rgba(30, 41, 59, 0.95);
            border-color: rgba(255, 255, 255, 0.05);
        }

        /* Active State for Topbar Icons - Stronger Visibility */
        .topbar-item-active {
            background-color: var(--primary-100) !important;
            color: var(--primary-700) !important;
            border: 2px solid var(--primary-500) !important; /* Clearly visible border */
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.2);
            font-weight: bold;
        }
        
        :host-context(.dark) .topbar-item-active {
            background-color: rgba(var(--primary-color-rgb), 0.3) !important;
            color: var(--primary-200) !important;
            border-color: var(--primary-400) !important;
        }

        /* Specific Active Overrides for Colored Buttons */
        .topbar-item-active.purple-btn {
            background-color: #f3e8ff !important;
            border-color: #9333ea !important; /* Stronger purple */
            color: #6b21a8 !important;
        }
        :host-context(.dark) .topbar-item-active.purple-btn {
            background-color: rgba(147, 51, 234, 0.2) !important;
            border-color: #c084fc !important;
            color: #f3e8ff !important;
        }

        /* Mobile Search Visibility Control */
        .mobile-search-btn {
            display: none; /* Default hidden */
        }

        /* Responsive Adjustments */
        @media screen and (max-width: 960px) {
            .user-info { display: none !important; }
            .break-text { display: none !important; }
            .break-btn-pulse { padding: 8px !important; border-radius: 50% !important; width: 40px; height: 40px; justify-content: center; }
            .layout-topbar-action { margin-left: 0.2rem; }
            .break-container { margin: 0 0.5rem; }
            
            /* Show mobile search only on small screens */
            .mobile-search-btn {
                display: flex !important;
            }
        }

        .notif-item.unread { background: rgba(59, 130, 246, 0.03); }
        .notif-item { border-left: 3px solid transparent; }
        .notif-item.unread { border-left-color: #3b82f6; }

        .notif-wrapper.custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .notif-wrapper.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
    `]
})
export class AppTopbar implements OnInit, OnDestroy {
    items!: MenuItem[];

    isOnBreak = false;
    todayBreakCompleted = false;
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
        private signalr: Signalr,
        public notifService: NotificationService
    ) { }

    ngOnInit() {
        this.checkBreakStatus();

        // Subscribe to reactive break refreshes
        this.destroy$.add(
            this.breakService.refresh$.subscribe(() => {
                this.checkBreakStatus();
            })
        );

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
            next: (activeBreaks: ActiveBreak[]) => {
                this.activeBreaksCount = activeBreaks.length;
                console.log('📊 Active Breaks Count Updated:', this.activeBreaksCount);
            },
            error: (err: any) => console.error('Failed to fetch active breaks', err)
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
            error: (err: any) => {
                console.error('Failed to fetch break status', err);
                // Also try fallback on error
                this.verifyActiveBreakFromReport();
            }
        });
    }

    private verifyActiveBreakFromReport() {
        // Get today's report
        const today = new Date().toISOString().split('T')[0];
        const currentUser = this.authService.getUser();
        const currentUserId = currentUser?.id || currentUser?.userId;
        const storageKey = `break_completed_${currentUserId}_${today}`;

        // Fast local check
        if (localStorage.getItem(storageKey) === 'true') {
            this.todayBreakCompleted = true;
            this.isOnBreak = false;
            this.stopTimer();
            console.log('✅ Topbar: Daily break confirmed from local storage.');
            return;
        }

        this.breakService.getDailyReport(today).subscribe({
            next: (reports: DailyBreakReport[]) => {
                // Look for any report without an EndTime
                const active = reports.find(r => {
                    const rAny = r as any;
                    const isCompleted = rAny.isCompleted === true || rAny.IsCompleted === true || rAny.is_completed === true;
                    // It is active if NOT completed AND has no end time
                    return !isCompleted && !rAny.endTime && !rAny.EndTime;
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

                    // If not on break, check if it was completed today
                    const myReport = reports.find(r => {
                        const rAny = r as any;
                        const rId = rAny.userId || rAny.UserId || rAny.id || rAny.Id;
                        return String(rId) === String(currentUserId);
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
                            localStorage.setItem(storageKey, 'true'); // Sync to local storage
                            console.log('✅ Topbar: Daily break confirmed as completed.', { currentUserId, report: myReport });
                        }
                    }
                }
            },
            error: (err: any) => {
                console.warn('⚠️ Topbar: Failed to fetch daily report (likely permission restricted). Using local state.', err);
                this.isOnBreak = false;
                this.stopTimer();
                // If local check failed above, we stay as false
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
                    next: (res: any) => {
                        this.isOnBreak = true;
                        this.breakStartTime = new Date();
                        this.startTimer();
                        this.toast.success('بدأت ساعة الراحة الآن', 'موفق');
                    },
                    error: (err: any) => {
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
                        const today = new Date().toISOString().split('T')[0];
                        const currentUser = this.authService.getUser();
                        const userId = currentUser?.id || currentUser?.userId;
                        localStorage.setItem(`break_completed_${userId}_${today}`, 'true');
                        this.todayBreakCompleted = true;

                        this.stopTimer();
                        this.isOnBreak = false;
                        this.breakStartTime = null;
                        this.displayTimer = '00:00';
                        this.toast.success('تم إنهاء الاستراحة بنجاح', 'عودة محفزة للعمل!');
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

    getNotifIcon(type: string): string {
        switch (type) {
            case 'task': return 'pi pi-check-square';
            case 'permission': return 'pi pi-shield';
            case 'success': return 'pi pi-check-circle';
            case 'warn': return 'pi pi-exclamation-triangle';
            case 'error': return 'pi pi-times-circle';
            default: return 'pi pi-info-circle';
        }
    }

    getNotifTypeClass(type: string): string {
        switch (type) {
            case 'task': return 'bg-blue-50 text-blue-500 dark:bg-blue-900/40';
            case 'permission': return 'bg-orange-50 text-orange-500 dark:bg-orange-900/40';
            case 'success': return 'bg-green-50 text-green-500 dark:bg-green-900/40';
            case 'warn': return 'bg-yellow-50 text-yellow-600 dark:bg-yellow-900/40';
            case 'error': return 'bg-red-50 text-red-500 dark:bg-red-900/40';
            default: return 'bg-gray-50 text-gray-500 dark:bg-gray-800';
        }
    }

    handleNotifClick(n: Notification, panel: any) {
        this.notifService.markAsRead(n.id);
        panel.hide();
        if (n.route) {
            this.router.navigate([n.route]);
        }
    }
}
