import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { AuthService } from '../../core/services/auth';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator],
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

                <!-- Logout Button -->
                <button type="button" class="layout-topbar-action logout-btn" (click)="logout()" title="تسجيل الخروج" *ngIf="authService.isLoggedIn()">
                    <i class="pi pi-sign-out"></i>
                </button>
            </div>
        </div>
    </div>`,
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
    `]
})
export class AppTopbar {
    items!: MenuItem[];

    constructor(
        public layoutService: LayoutService,
        public authService: AuthService,
        private router: Router
    ) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state: any) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
