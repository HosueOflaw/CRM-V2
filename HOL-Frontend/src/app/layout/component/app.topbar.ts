import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ToastModule } from 'primeng/toast';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { AuthService } from '../../core/services/auth';
import { PrimeToastService } from '../../shared/services/prime-toast.service';
import { BreakService, BreakStatus } from '../../services/break.service';
import { Subscription, interval } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, ToastModule],
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
            <div class="user-info" *ngIf="authService.isLoggedIn()">
                <span class="user-name">{{ authService.getCurrentUserName() }}</span>
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
            padding: 8px 18px;
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
    `]
})
export class AppTopbar implements OnInit, OnDestroy {
    items!: MenuItem[];

    isOnBreak = false;
    breakStartTime: Date | null = null;
    displayTimer = '00:00';
    isBreakLate = false;
    private timerSubscription?: Subscription;

    constructor(
        public layoutService: LayoutService,
        public authService: AuthService,
        private router: Router,
        private toast: PrimeToastService,
        private breakService: BreakService
    ) { }

    ngOnInit() {
        if (this.authService.isLoggedIn()) {
            this.checkBreakStatus();
        }
    }

    ngOnDestroy() {
        this.stopTimer();
    }

    checkBreakStatus() {
        this.breakService.getStatus().subscribe({
            next: (status) => {
                if (status.isOnBreak && status.startTime) {
                    this.isOnBreak = true;
                    this.breakStartTime = new Date(status.startTime);
                    this.startTimer();
                }
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
}
