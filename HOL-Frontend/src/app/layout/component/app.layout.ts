import { Component, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription, interval } from 'rxjs';
import { AppTopbar } from './app.topbar';
import { AppSidebar } from './app.sidebar';
import { AppFooter } from './app.footer';
import { LayoutService } from '../service/layout.service';
import { BreakService, BreakStatus } from '../../services/break.service';
import { AuthService } from '../../core/services/auth';
import { CommandPaletteComponent } from './command-palette';
import { AiAssistantComponent } from './ai-assistant';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, AppTopbar, AppSidebar, RouterModule, AppFooter, CommandPaletteComponent, AiAssistantComponent],
    template: `
    <div class="layout-wrapper" [ngClass]="containerClass" [class.app-dark]="layoutService.isDarkTheme()">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <div class="layout-main-container">
            <div class="layout-main" [class.app-dark]="layoutService.isDarkTheme()">
                <router-outlet></router-outlet>
            </div>
            <app-footer></app-footer>
        </div>
        <div class="layout-mask animate-fadein"></div>

        <!-- Global Break Overlay (CRM Freeze) -->
        <div *ngIf="isOnBreak && !authService.isAdmin()" 
             class="fixed inset-0 z-[1000] flex flex-col items-center justify-center backdrop-blur-md bg-white/30 dark:bg-gray-900/40 transition-all duration-500 animate-fadein">
            <div class="glass-card p-10 rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center gap-6 max-w-lg w-full text-center mx-4">
                <div class="relative">
                    <div class="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full animate-pulse"></div>
                    <i class="pi pi-coffee text-7xl text-orange-500 relative"></i>
                </div>
                
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-4">أنت في استراحة حالياً ☕</h2>
                <p class="text-gray-600 dark:text-gray-400 text-lg">النظام متوقف مؤقتاً لضمان راحتك. يمكنك العودة فور إنهاء الاستراحة.</p>
                
                <div class="bg-gray-100/50 dark:bg-gray-800/50 px-8 py-4 rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
                    <span class="text-5xl font-mono font-bold text-orange-600 dark:text-orange-400">
                        {{ breakTimer }}
                    </span>
                </div>

                <button (click)="endBreak()" 
                        class="mt-4 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-500/30 transition-all active:scale-95 flex items-center gap-3">
                    <i class="pi pi-play"></i>
                    إنهاء الاستراحة والعودة للعمل
                </button>
            </div>
        </div>

        <!-- Global Command Palette (Ctrl+K) -->
        <!-- Global Command Palette (Ctrl+K) -->
        <app-command-palette></app-command-palette>

        <!-- AI Assistant Widget -->
        <app-ai-assistant></app-ai-assistant>
    </div> `
})
export class AppLayout implements OnDestroy {
    isElectron = !!(window as any).appWindow;
    overlayMenuOpenSubscription: Subscription;
    breakSubscription?: Subscription;
    timerSubscription?: Subscription;

    isOnBreak = false;
    breakTimer = '00:00';

    menuOutsideClickListener: any;

    @ViewChild(AppSidebar) appSidebar!: AppSidebar;

    @ViewChild(AppTopbar) appTopBar!: AppTopbar;

    constructor(
        public layoutService: LayoutService,
        public renderer: Renderer2,
        public router: Router,
        public breakService: BreakService,
        public authService: AuthService
    ) {
        this.checkBreakStatus();

        // Listen for global break refreshes
        this.breakSubscription = this.breakService.refresh$.subscribe(() => {
            this.checkBreakStatus();
        });

        this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', (event) => {
                    if (this.isOutsideClicked(event)) {
                        this.hideMenu();
                    }
                });
            }

            if (this.layoutService.layoutState().staticMenuMobileActive) {
                this.blockBodyScroll();
            }
        });

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            this.hideMenu();
        });
    }

    isOutsideClicked(event: MouseEvent) {
        const sidebarEl = document.querySelector('.layout-sidebar');
        const topbarEl = document.querySelector('.layout-menu-button');
        const eventTarget = event.target as Node;

        return !(sidebarEl?.isSameNode(eventTarget) || sidebarEl?.contains(eventTarget) || topbarEl?.isSameNode(eventTarget) || topbarEl?.contains(eventTarget));
    }

    hideMenu() {
        this.layoutService.layoutState.update((prev: any) => ({ ...prev, overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
        this.unblockBodyScroll();
    }

    blockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    get containerClass() {
        return {
            'layout-overlay': this.layoutService.layoutConfig().menuMode === 'overlay',
            'layout-static': this.layoutService.layoutConfig().menuMode === 'static',
            'layout-static-inactive': this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === 'static',
            'layout-overlay-active': this.layoutService.layoutState().overlayMenuActive,
            'layout-mobile-active': this.layoutService.layoutState().staticMenuMobileActive
        };
    }

    checkBreakStatus() {
        this.breakService.getStatus().subscribe({
            next: (status: BreakStatus | any) => {
                // Handle both CamelCase and PascalCase
                this.isOnBreak = status.isOnBreak || status.IsOnBreak || status.isInBreak || status.IsInBreak;

                if (this.isOnBreak) {
                    this.startTimer(status.startTime || status.StartTime);
                } else {
                    this.stopTimer();
                }
            },
            error: () => this.isOnBreak = false
        });
    }

    startTimer(startTimeStr: string) {
        this.stopTimer();
        if (!startTimeStr) return;

        const startTime = new Date(startTimeStr);
        this.timerSubscription = interval(1000).subscribe(() => {
            const now = new Date();
            const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            this.breakTimer = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        });
    }

    stopTimer() {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
            this.timerSubscription = undefined;
        }
        this.breakTimer = '00:00';
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
                    next: () => {
                        this.isOnBreak = false;
                        this.stopTimer();

                        // Set local persistence for Home page
                        const today = new Date().toISOString().split('T')[0];
                        const userId = this.authService.getUser()?.id || this.authService.getUser()?.userId;
                        localStorage.setItem(`break_completed_${userId}_${today}`, 'true');

                        Swal.fire({
                            title: 'تمت العودة!',
                            text: 'نتمنى لك عملاً ممتعاً ومميزاً.',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    },
                    error: (err: any) => {
                        Swal.fire('خطأ', err.error?.message || 'فشل إنهاء الاستراحة', 'error');
                    }
                });
            }
        });
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}

