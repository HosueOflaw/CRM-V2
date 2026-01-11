import { Component, HostBinding, Input, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../service/layout.service';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[app-menuitem]',
    standalone: true,
    imports: [CommonModule, RouterModule, RippleModule],
    template: `
        <ng-container>
            <!-- Parent menu item with children (dropdown) -->
            <a *ngIf="item.items && item.visible !== false" 
               (click)="itemClick($event)" 
               [ngClass]="item.styleClass" 
               class="menu-dropdown-toggle"
               [class.menu-dropdown-active]="active"
               tabindex="0" 
               pRipple>
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <span class="layout-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{item.badge}}</span>
                <i class="pi pi-fw layout-submenu-toggler" 
                   [ngClass]="{'pi-angle-down': !active, 'pi-angle-up': active}"></i>
            </a>

            <!-- Single menu item (no children) -->
            <a *ngIf="item.routerLink && !item.items && item.visible !== false"
                (click)="itemClick($event)"
                [ngClass]="item.styleClass"
                [routerLink]="item.routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [queryParams]="item.queryParams"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <span class="layout-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{item.badge}}</span>
            </a>

            <!-- External link -->
            <a *ngIf="item.url && !item.routerLink && !item.items && item.visible !== false" 
               [attr.href]="item.url" 
               (click)="itemClick($event)" 
               [ngClass]="item.styleClass" 
               [attr.target]="item.target" 
               tabindex="0" 
               pRipple>
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <span class="layout-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{item.badge}}</span>
            </a>

            <!-- Children submenu -->
            <ul *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation" class="layout-submenu">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child['badgeClass']"></li>
                </ng-template>
            </ul>
        </ng-container>
    `,
    styles: [`
        :host {
            display: block;
        }

        .menu-dropdown-toggle {
            display: flex;
            align-items: center;
            padding: 0.75rem 1rem;
            cursor: pointer;
            border-radius: var(--content-border-radius, 8px);
            color: var(--text-color);
            transition: background-color 0.2s, color 0.2s;
            margin-bottom: 0.25rem;
            font-weight: 600;
        }

        .menu-dropdown-toggle:hover {
            background-color: var(--surface-hover);
        }

        .menu-dropdown-toggle.menu-dropdown-active {
            background-color: var(--primary-color);
            color: var(--primary-contrast-color, #ffffff);
        }

        .menu-dropdown-toggle .layout-menuitem-icon {
            margin-left: 0.5rem;
            font-size: 1.1rem;
        }

        .menu-dropdown-toggle .layout-menuitem-text {
            flex: 1;
        }

        .menu-dropdown-toggle .layout-submenu-toggler {
            transition: transform 0.3s;
        }

        .layout-submenu {
            list-style: none;
            padding: 0;
            margin: 0;
            overflow: hidden;
        }

        .layout-submenu li {
            margin: 0.125rem 0;
        }

        :host ::ng-deep .layout-submenu a {
            padding: 0.625rem 1rem;
            padding-right: 2.5rem;
            display: flex;
            align-items: center;
            color: var(--text-color);
            border-radius: var(--content-border-radius, 8px);
            transition: background-color 0.2s;
            font-size: 0.9rem;
        }

        :host ::ng-deep .layout-submenu a:hover {
            background-color: var(--surface-hover);
        }

        :host ::ng-deep .layout-submenu a.active-route {
            background-color: rgba(var(--primary-color-rgb, 59, 130, 246), 0.1);
            color: var(--primary-color);
            font-weight: 600;
        }

        :host ::ng-deep .layout-submenu a .layout-menuitem-text {
            flex: 1;
        }

        :host ::ng-deep .layout-submenu .layout-menuitem-icon {
            margin-left: 0.5rem;
            font-size: 0.9rem;
            opacity: 0.7;
        }

        .layout-menuitem-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #ef4444 !important;
            color: #ffffff !important;
            font-size: 0.7rem;
            font-weight: 800;
            padding: 2px 6px;
            border-radius: 12px;
            margin-right: auto;
            margin-left: 0.5rem;
            min-width: 1.4rem;
            height: 1.2rem;
            text-align: center;
            z-index: 100;
            line-height: 1;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
    `],
    animations: [
        trigger('children', [
            state(
                'collapsed',
                style({
                    height: '0',
                    opacity: '0'
                })
            ),
            state(
                'expanded',
                style({
                    height: '*',
                    opacity: '1'
                })
            ),
            transition('collapsed <=> expanded', animate('300ms cubic-bezier(0.4, 0, 0.2, 1)'))
        ])
    ],
    providers: [LayoutService]
})
export class AppMenuitem implements OnInit, OnDestroy {
    @Input() item!: MenuItem;

    @Input() index!: number;

    @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;

    @Input() parentKey!: string;

    active = false;

    menuSourceSubscription: Subscription;

    menuResetSubscription: Subscription;

    key: string = '';

    constructor(
        public router: Router,
        private layoutService: LayoutService
    ) {
        this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
            Promise.resolve(null).then(() => {
                if (value.routeEvent) {
                    this.active = value.key === this.key || value.key.startsWith(this.key + '-') ? true : false;
                } else {
                    if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
                        this.active = false;
                    }
                }
            });
        });

        this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
            this.active = false;
        });

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
            if (this.item.routerLink) {
                this.updateActiveStateFromRoute();
            }
        });
    }

    ngOnInit() {
        this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);

        if (this.item.routerLink) {
            this.updateActiveStateFromRoute();
        }
    }

    updateActiveStateFromRoute() {
        let activeRoute = this.router.isActive(this.item.routerLink![0], { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });

        if (activeRoute) {
            this.layoutService.onMenuStateChange({ key: this.key, routeEvent: true });
        }
    }

    itemClick(event: Event) {
        // avoid processing disabled items
        if (this.item.disabled) {
            event.preventDefault();
            return;
        }

        // execute command
        if (this.item.command) {
            this.item.command({ originalEvent: event, item: this.item });
        }

        // toggle active state
        if (this.item.items) {
            this.active = !this.active;
        }

        this.layoutService.onMenuStateChange({ key: this.key });
    }

    get submenuAnimation() {
        return this.active ? 'expanded' : 'collapsed';
    }

    @HostBinding('class.active-menuitem')
    get activeClass() {
        return this.active;
    }

    ngOnDestroy() {
        if (this.menuSourceSubscription) {
            this.menuSourceSubscription.unsubscribe();
        }

        if (this.menuResetSubscription) {
            this.menuResetSubscription.unsubscribe();
        }
    }
}
