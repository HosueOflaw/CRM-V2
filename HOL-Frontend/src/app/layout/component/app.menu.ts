import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { AuthService } from '../../core/services/auth';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `
        <ul class="layout-menu">
            <!-- Home is always visible -->
            <li app-menuitem [item]="homeItem" [index]="0"></li>
            
            <!-- Performance Dashboard for Admin/Supervisor -->
            <li *ngIf="isAdminOrSupervisor" app-menuitem [item]="performanceItem" [index]="1"></li>

            <!-- Dropdown sections -->
            <ng-container *ngFor="let item of menuSections; let i = index">
                <li app-menuitem [item]="item" [index]="i + 2"></li>
            </ng-container>
        </ul>
    `
})
export class AppMenu implements OnInit, OnDestroy {
    homeItem: MenuItem = {
        label: 'الصفحة الرئيسية',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
    };

    performanceItem: MenuItem = {
        label: 'أداء الموظفين',
        icon: 'pi pi-fw pi-users',
        routerLink: ['/management/team-performance'],
        styleClass: 'dashboard-menu-item'
    };

    isAdminOrSupervisor = false;
    menuSections: MenuItem[] = [];
    private userSub?: Subscription;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.updateAuthFlags();
        this.buildMenu();

        // Watch for user profile updates (e.g. after approval)
        this.userSub = this.authService.userUpdated$.subscribe(() => {
            console.log('--- Sidebar: Rebuilding menu due to user update ---');
            this.updateAuthFlags();
            this.buildMenu();
        });
    }

    ngOnDestroy() {
        this.userSub?.unsubscribe();
    }

    private updateAuthFlags() {
        this.isAdminOrSupervisor = this.authService.isAdmin() || this.authService.isSupervisor();
    }

    private buildMenu() {
        const allSections: MenuItem[] = [
            {
                label: 'المفاوضات',
                icon: 'pi pi-fw pi-comments',
                items: [
                    { label: 'لوحة التحكم', icon: 'pi pi-fw pi-th-large', routerLink: ['/negotiations'] },
                    { label: 'متابعة العملاء', icon: 'pi pi-fw pi-users', routerLink: ['/negotiations/client-follow-up'] }
                ]
            },
            {
                label: 'الشؤون الإدارية',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    { label: 'لوحة التحكم', icon: 'pi pi-fw pi-th-large', routerLink: ['/management'] },
                    { label: 'الحضور والانصراف', icon: 'pi pi-fw pi-calendar-times', routerLink: ['/management/attendance'] },
                    { label: 'سجل تسجيلات الدخول', icon: 'pi pi-fw pi-sign-in', routerLink: ['/management/logins-admin'] }
                ]
            },
            {
                label: 'السكرتارية',
                icon: 'pi pi-fw pi-file',
                items: [
                    { label: 'لوحة التحكم', icon: 'pi pi-fw pi-th-large', routerLink: ['/secretariat'] },
                    { label: 'رفع أكسيل', icon: 'pi pi-fw pi-upload', routerLink: ['/secretariat/upload-excel'] },
                    { label: 'رفع الملفات', icon: 'pi pi-fw pi-file-upload', routerLink: ['/secretariat/upload-files'] },
                    { label: 'انتظار العملاء', icon: 'pi pi-fw pi-clock', routerLink: ['/secretariat/waiting-clients'] },
                    { label: 'أرقام الصادر والوارد', icon: 'pi pi-fw pi-sort-numeric-up', routerLink: ['/secretariat/export-and-import-num'] },
                    { label: 'طباعة تكاليف بالوفاء', icon: 'pi pi-fw pi-print', routerLink: ['/secretariat/costs-print'] },
                    { label: 'أرقام الكشوف', icon: 'pi pi-fw pi-list', routerLink: ['/secretariat/batch-numbers'] },
                    { label: 'استلام الملفات من الموكلين', icon: 'pi pi-fw pi-inbox', routerLink: ['/secretariat/client-file-receipt'] },
                    { label: 'طباعة ملفات زين', icon: 'pi pi-fw pi-file-pdf', routerLink: ['/secretariat/files-zein-export'] },
                    { label: 'طباعة ملفات اوريدو', icon: 'pi pi-fw pi-file-pdf', routerLink: ['/secretariat/files-Ooredoo-export'] },
                    { label: 'طباعة ملفات فيفا', icon: 'pi pi-fw pi-file-pdf', routerLink: ['/secretariat/files-fifa-export'] },
                    { label: 'رفع افادات AutoDailer', icon: 'pi pi-fw pi-cloud-upload', routerLink: ['/secretariat/upload-page'] },
                    { label: 'رفع الاجراءات', icon: 'pi pi-fw pi-arrow-up', routerLink: ['/secretariat/procedures'] },
                    { label: 'تنظيم دخول العملاء', icon: 'pi pi-fw pi-calendar', routerLink: ['/secretariat/organizing-clients'] },
                    { label: 'تجميع ملفات الأقساط', icon: 'pi pi-fw pi-folder', routerLink: ['/secretariat/installment-collection'] },
                    { label: 'الأستمارات', icon: 'pi pi-fw pi-file-edit', routerLink: ['/secretariat/formslist'] },
                    { label: 'طباعة ملفات من أكسيل', icon: 'pi pi-fw pi-file-excel', routerLink: ['/secretariat/print-page'] }
                ]
            },
            {
                label: 'التنفيذ',
                icon: 'pi pi-fw pi-cog',
                items: [
                    { label: 'لوحة التحكم', icon: 'pi pi-fw pi-th-large', routerLink: ['/execution'] },
                    { label: 'الرئيسية', icon: 'pi pi-fw pi-home', routerLink: ['/execution/main'] },
                    { label: 'العملاء', icon: 'pi pi-fw pi-users', routerLink: ['/execution/main/clients'] },
                    { label: 'المراجعة', icon: 'pi pi-fw pi-eye', routerLink: ['/execution/main/review'] },
                    { label: 'رفع الإجراءات', icon: 'pi pi-fw pi-arrow-up', routerLink: ['/execution/main/actions'] },
                    { label: 'منطوق الحكم', icon: 'pi pi-fw pi-file', routerLink: ['/execution/main/judgment'] },
                    { label: 'الجلسات', icon: 'pi pi-fw pi-calendar', routerLink: ['/execution/main/sessions'] },
                    { label: 'طلب العهدة', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/execution/main/requests'] },
                    { label: 'استلام الأحكام', icon: 'pi pi-fw pi-download', routerLink: ['/execution/main/receive'] },
                    { label: 'الملفات الجديدة', icon: 'pi pi-fw pi-folder-open', routerLink: ['/execution/main/files'] },
                    { label: 'كشف الطعون', icon: 'pi pi-fw pi-list', routerLink: ['/execution/appeals'] },
                    { label: 'ادخال العهدة', icon: 'pi pi-fw pi-plus-circle', routerLink: ['/execution/custody'] },
                    { label: 'استلام الاحكام', icon: 'pi pi-fw pi-inbox', routerLink: ['/execution/judgments'] },
                    { label: 'ملفات التنفيذ', icon: 'pi pi-fw pi-file', routerLink: ['/execution/execution-statements'] },
                    { label: 'استلام و اعلان الصيغ', icon: 'pi pi-fw pi-bell', routerLink: ['/execution/announcing-formulas'] },
                    { label: 'الوكالات', icon: 'pi pi-fw pi-id-card', routerLink: ['/execution/agencies'] }
                ]
            },
            {
                label: 'السيارات',
                icon: 'pi pi-fw pi-car',
                items: [
                    { label: 'لوحة التحكم', icon: 'pi pi-fw pi-th-large', routerLink: ['/car-management'] },
                    { label: 'الرئيسية', icon: 'pi pi-fw pi-home', routerLink: ['/car-management/car-management-main'] }
                ]
            },
            {
                label: 'التقارير',
                icon: 'pi pi-fw pi-chart-bar',
                items: [
                    { label: 'لوحة التحكم', icon: 'pi pi-fw pi-th-large', routerLink: ['/reports'] },
                    { label: 'الرئيسية', icon: 'pi pi-fw pi-home', routerLink: ['/reports/reports-main'] },
                    { label: 'سندات القبض', icon: 'pi pi-fw pi-money-bill', routerLink: ['/reports/reports-salary'] },
                    { label: 'تقارير المتابعة', icon: 'pi pi-fw pi-chart-line', routerLink: ['/reports/reports-follow-up'] },
                    { label: 'عدد الافادات', icon: 'pi pi-fw pi-list', routerLink: ['/reports/num-of-statement'] },
                    { label: 'باتشات زين 6 شهور', icon: 'pi pi-fw pi-calendar', routerLink: ['/reports/zain-six-months'] },
                    { label: 'باتشات زين 20 شهور', icon: 'pi pi-fw pi-calendar', routerLink: ['/reports/reports-zain-twenty-months'] },
                    { label: 'تقرير اداء الشركة', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/reports/report-companies-performance'] }
                ]
            },
            {
                label: 'الإدارة المالية',
                icon: 'pi pi-fw pi-money-bill',
                items: [
                    { label: 'لوحة التحكم', icon: 'pi pi-fw pi-th-large', routerLink: ['/finance'] },
                    { label: 'سندات القبض', icon: 'pi pi-fw pi-file', routerLink: ['/finance/salary-document'] },
                    { label: 'سند القبض', icon: 'pi pi-fw pi-file-edit', routerLink: ['/finance/receipt-voucher'] },
                    { label: 'القيود اليومية', icon: 'pi pi-fw pi-calendar', routerLink: ['/finance/daily-restrictions'] },
                    { label: 'حسابات الأرصدة', icon: 'pi pi-fw pi-wallet', routerLink: ['/finance/accounts-balances'] },
                    { label: 'الاستعلام عن كشف التصفية', icon: 'pi pi-fw pi-search', routerLink: ['/finance/filter-detection'] },
                    { label: 'استعلام عن كشوف الموظفين', icon: 'pi pi-fw pi-users', routerLink: ['/finance/employee-disclosure'] },
                    { label: 'استعلام عن الكشوف المستلمة', icon: 'pi pi-fw pi-inbox', routerLink: ['/finance/daily-custody'] },
                    { label: 'عمولات السداد', icon: 'pi pi-fw pi-percentage', routerLink: ['/finance/file-commissions'] },
                    { label: 'استعلام عن الكشوف برقم قيد', icon: 'pi pi-fw pi-id-card', routerLink: ['/finance/kashf'] },
                    { label: 'ما يتحمله المكتب', icon: 'pi pi-fw pi-building', routerLink: ['/finance/office-not-load'] },
                    { label: 'السيارات', icon: 'pi pi-fw pi-car', routerLink: ['/finance/cars'] },
                    { label: 'مقدم و مؤخر العقارات', icon: 'pi pi-fw pi-home', routerLink: ['/finance/real-estate'] },
                    { label: 'كل العهد الموجودة', icon: 'pi pi-fw pi-list', routerLink: ['/finance/custody-search'] },
                    { label: 'مراجعة العهد', icon: 'pi pi-fw pi-eye', routerLink: ['/finance/covenant-review'] },
                    { label: 'التحويل الي الشركات', icon: 'pi pi-fw pi-arrow-right', routerLink: ['/finance/transfer-search'] }
                ]
            },
            {
                label: 'المداولات',
                icon: 'pi pi-fw pi-book',
                items: [
                    { label: 'لوحة التحكم', icon: 'pi pi-fw pi-th-large', routerLink: ['/discussions'] },
                    { label: 'إضافة قضية جديدة', icon: 'pi pi-fw pi-plus', routerLink: ['/discussions/add-case'] },
                    { label: 'قضايا لم ترحل', icon: 'pi pi-fw pi-exclamation-triangle', routerLink: ['/discussions/not-transferred-cases'] },
                    { label: 'طباعة رول الجلسات', icon: 'pi pi-fw pi-print', routerLink: ['/discussions/rolls'] },
                    { label: 'التقارير', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/discussions/reports'] },
                    { label: 'قيد الرفع', icon: 'pi pi-fw pi-clock', routerLink: ['/discussions/upload-status'] },
                    { label: 'كشف الطعون', icon: 'pi pi-fw pi-list', routerLink: ['/discussions/appeals-overview'] },
                    { label: 'التقارير العامة', icon: 'pi pi-fw pi-file', routerLink: ['/discussions/general-reports'] }
                ]
            }
        ];

        if (this.authService.isAdmin()) {
            this.menuSections = allSections;
            return;
        }

        const isSupervisor = this.authService.isSupervisor();
        const user = this.authService.getUser();
        if (!user) return;

        // Collect all target departments
        const primaryDep = (this.authService.getUserDepartment() || '').toLowerCase().trim();
        const additionalDeps = (user.accessibleDepartments || user.AccessibleDepartments || []) as string[];
        const uniqueDeps = Array.from(new Set([primaryDep, ...additionalDeps.map(d => d.toLowerCase().trim())])).filter(d => !!d);
        console.log('--- Sidebar Debug ---');
        console.log('Primary Dept:', primaryDep);
        console.log('Additional Depts:', additionalDeps);
        console.log('Unique Depts for lookup:', uniqueDeps);

        const mapping: { [key: string]: string } = {
            'negotiations': 'المفاوضات', 'المفاوضات': 'المفاوضات',
            'secretariat': 'السكرتارية', 'السكرتارية': 'السكرتارية', 'secrtrya': 'السكرتارية', 'sec': 'السكرتارية',
            'execution': 'التنفيذ', 'التنفيذ': 'التنفيذ',
            'finance': 'الإدارة المالية', 'الإدارة المالية': 'الإدارة المالية', 'المالية': 'الإدارة المالية',
            'discussions': 'المداولات', 'المداولات': 'المداولات',
            'reports': 'التقارير', 'التقارير': 'التقارير',
            'car-management': 'السيارات', 'السيارات': 'السيارات',
            'management': 'الشؤون الإدارية', 'الشؤون الإدارية': 'الشؤون الإدارية', 'managment': 'الشؤون الإدارية'
        };

        let resultSections: MenuItem[] = [];

        uniqueDeps.forEach(dep => {
            const targetLabel = mapping[dep] || mapping[Object.keys(mapping).find(k => k.length > 0 && (dep.includes(k) || k.includes(dep))) || ''];
            console.log(`Mapping [${dep}] -> [${targetLabel}]`);

            if (targetLabel) {
                const section = allSections.find(s => s.label === targetLabel);
                if (section && section.items) {
                    if (!resultSections.find(i => i.label === section.label)) {
                        resultSections.push({
                            label: section.label,
                            icon: section.icon,
                            items: [...section.items]
                        });
                    }
                }
            }
        });

        // Add special items for Supervisor
        if (isSupervisor && resultSections.length > 0) {
            // Add break stats to the FIRST section's items OR as a top level item if we flatten
            const breakStatsItem = {
                label: 'إحصائيات الاستراحة',
                icon: 'pi pi-fw pi-chart-line',
                routerLink: ['/reports/daily-breaks'],
                styleClass: '!bg-purple-50/50 dark:!bg-purple-900/10'
            };

            // Prepend to the first department's items
            resultSections[0].items?.unshift(breakStatsItem);
        }

        // --- FLATTENING LOGIC ---
        // If only 1 department, show its items directly (Flattened look)
        // If multiple departments, show them as Folders (Grouped look)
        if (resultSections.length === 1 && resultSections[0].items) {
            this.menuSections = resultSections[0].items;
            console.log('Flattened view enabled for single department:', resultSections[0].label);
        } else {
            this.menuSections = resultSections;
            console.log('Grouped view enabled for multiple departments:', resultSections.length);
        }
        console.log('--- Sidebar Debug End ---');
    }
}

