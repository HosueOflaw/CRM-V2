import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { PermissionRequest, PermissionService } from '../../../../core/services/permission.service';
import { Signalr } from '../../../../services/signalr';
import { Subject, takeUntil } from 'rxjs';
import { BadgeModule } from 'primeng/badge';
import { AuthService } from '../../../../core/services/auth';

@Component({
    selector: 'app-my-permissions',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        TagModule,
        ButtonModule,
        CardModule,
        TooltipModule,
        BadgeModule,
        SkeletonModule
    ],
    template: `
    <div class="animate-fadein p-4 md:p-6">
        <!-- Header Section -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
                <h1 class="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                    <i class="pi pi-shield text-primary text-3xl"></i>
                    صلاحياتي والوصول الخاص بي
                </h1>
                <p class="text-gray-500 mt-1">عرض الأقسام والميزات المتاحة لك ومتابعة طلباتك</p>
            </div>
            <p-button icon="pi pi-refresh" (click)="loadAll()" [loading]="loading" 
                      label="تحديث البيانات" severity="secondary" [outlined]="true"></p-button>
        </div>

        <!-- Skeleton Loading State -->
        <div *ngIf="loading" class="animate-pulse">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <p-card styleClass="h-full border-0 shadow-sm overflow-hidden">
                    <p-skeleton width="10rem" height="1.5rem" styleClass="mb-4"></p-skeleton>
                    <div class="flex flex-wrap gap-2 py-2">
                        <p-skeleton width="6rem" height="2rem" borderRadius="1rem"></p-skeleton>
                        <p-skeleton width="8rem" height="2rem" borderRadius="1rem"></p-skeleton>
                        <p-skeleton width="5rem" height="2rem" borderRadius="1rem"></p-skeleton>
                    </div>
                </p-card>
                <p-card styleClass="h-full border-0 shadow-sm overflow-hidden">
                    <p-skeleton width="10rem" height="1.5rem" styleClass="mb-4"></p-skeleton>
                    <div class="flex flex-wrap gap-2 py-2">
                        <p-skeleton width="7rem" height="2rem" borderRadius="1rem"></p-skeleton>
                        <p-skeleton width="5rem" height="2rem" borderRadius="1rem"></p-skeleton>
                    </div>
                </p-card>
            </div>
            <p-skeleton width="12rem" height="2rem" styleClass="mb-4"></p-skeleton>
            <p-card styleClass="shadow-sm border-0 overflow-hidden">
                <p-table [value]="[1,2,3]" styleClass="p-datatable-sm">
                    <ng-template pTemplate="body">
                        <tr>
                            <td><p-skeleton width="6rem" height="1.5rem"></p-skeleton></td>
                            <td><p-skeleton width="5rem"></p-skeleton></td>
                            <td><p-skeleton width="10rem"></p-skeleton></td>
                            <td><p-skeleton width="4rem" height="1.5rem" borderRadius="1rem"></p-skeleton></td>
                            <td><p-skeleton width="8rem"></p-skeleton></td>
                            <td><p-skeleton width="6rem"></p-skeleton></td>
                        </tr>
                    </ng-template>
                </p-table>
            </p-card>
        </div>

        <ng-container *ngIf="!loading">
            <!-- Active Permissions Summary -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <!-- Accessible Departments -->
                <p-card styleClass="h-full border-0 shadow-sm overflow-hidden" header="الأقسام المتاحة لي 🏘️">
                    <div class="flex flex-wrap gap-2 py-2">
                        <ng-container *ngIf="accessibleDepartments.length > 0; else noDeps">
                            <span *ngFor="let dep of accessibleDepartments" 
                                class="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-bold border border-blue-100 dark:border-blue-800/30 flex items-center gap-2">
                                <i class="pi pi-building"></i>
                                {{ getDeptLabel(dep) }}
                            </span>
                        </ng-container>
                        <ng-template #noDeps>
                            <span class="text-gray-400 italic text-sm">لا توجد أقسام إضافية مفوضة لك حالياً</span>
                        </ng-template>
                    </div>
                    <div class="mt-4 p-3 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg text-xs text-gray-500 border border-dashed border-gray-200 dark:border-gray-700">
                        <i class="pi pi-info-circle mr-1"></i>
                        قسمك الأساسي: <span class="font-bold text-gray-700 dark:text-gray-300">{{ getDeptLabel(currentUser?.department) }}</span>
                    </div>
                </p-card>

                <!-- Accessible Features -->
                <p-card styleClass="h-full border-0 shadow-sm overflow-hidden" header="الميزات المفوضة لي 🛡️">
                    <div class="flex flex-wrap gap-2 py-2">
                        <ng-container *ngIf="accessibleFeatures.length > 0; else noFeatures">
                            <span *ngFor="let feature of accessibleFeatures" 
                                class="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-xl text-sm font-bold border border-orange-100 dark:border-orange-800/30 flex items-center gap-2">
                                <i class="pi pi-star-fill"></i>
                                {{ feature }}
                            </span>
                        </ng-container>
                        <ng-template #noFeatures>
                            <span class="text-gray-400 italic text-sm">لم يتم تفويض ميزات محددة لك حالياً</span>
                        </ng-template>
                    </div>
                </p-card>
            </div>

            <!-- Request History Table (Hidden for employees) -->
            <ng-container *ngIf="!isBasicEmployee">
                <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-4">سجل الطلبات السابقة</h3>
                
                <p-card styleClass="shadow-sm border-0 overflow-hidden">
                    <p-table [value]="requests" [rowHover]="true" 
                            [responsiveLayout]="'scroll'" styleClass="p-datatable-sm">
                        <ng-template pTemplate="header">
                            <tr>
                                <th class="bg-gray-50/50 dark:bg-gray-800/50">نوع الطلب</th>
                                <th class="bg-gray-50/50 dark:bg-gray-800/50">القيمة المطلوبة</th>
                                <th class="bg-gray-50/50 dark:bg-gray-800/50">السبب</th>
                                <th class="bg-gray-50/50 dark:bg-gray-800/50">الحالة</th>
                                <th class="bg-gray-50/50 dark:bg-gray-800/50">ملاحظة الأدمن</th>
                                <th class="bg-gray-50/50 dark:bg-gray-800/50">تاريخ الطلب</th>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="body" let-req>
                            <tr class="transition-colors hover:bg-gray-50/50 dark:hover:bg-gray-800/50">
                                <td>
                                    <p-tag [severity]="req.requestType === 'Department' ? 'info' : 'warn'" 
                                        [value]="req.requestType === 'Department' ? 'دخول قسم' : 'صلاحية ميزة'"
                                        [rounded]="true"></p-tag>
                                </td>
                                <td>
                                    <span class="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm text-primary">
                                        {{ req.requestedValue }}
                                    </span>
                                </td>
                                <td>
                                    <span class="text-sm text-gray-600 dark:text-gray-400 truncate max-w-[200px] block" [pTooltip]="req.reason">
                                        {{ req.reason }}
                                    </span>
                                </td>
                                <td>
                                    <p-tag [severity]="getStatusSeverity(req.status)" [value]="getStatusLabel(req.status)"
                                        [rounded]="true" icon="pi {{ getStatusIcon(req.status) }}"></p-tag>
                                </td>
                                <td>
                                    <div *ngIf="req.adminComment" class="text-xs italic text-orange-600 dark:text-orange-400 bg-orange-50/50 dark:bg-orange-900/20 p-2 rounded-lg border border-orange-100 dark:border-orange-900/30">
                                        {{ req.adminComment }}
                                    </div>
                                    <span *ngIf="!req.adminComment" class="text-gray-300">---</span>
                                </td>
                                <td class="text-xs text-gray-500 font-medium">
                                    {{ req.createdAt | date:'medium' }}
                                </td>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="emptymessage">
                            <tr>
                                <td colspan="6" class="text-center py-12">
                                    <i class="pi pi-inbox text-4xl text-gray-200 mb-3 block"></i>
                                    <p class="text-gray-400 font-medium">لم تقم بإرسال أي طلبات صلاحيات بعد</p>
                                </td>
                            </tr>
                        </ng-template>
                    </p-table>
                </p-card>
            </ng-container>
        </ng-container>
    </div>
    `
})
export class MyPermissionsPage implements OnInit, OnDestroy {
    requests: PermissionRequest[] = [];
    loading = false;
    currentUser: any = null;
    accessibleDepartments: string[] = [];
    accessibleFeatures: string[] = [];

    private destroy$ = new Subject<void>();

    constructor(
        private permissionService: PermissionService,
        private authService: AuthService,
        private signalr: Signalr
    ) { }

    ngOnInit() {
        this.loadAll();

        // Listen for real-time updates
        this.signalr.message$.pipe(takeUntil(this.destroy$)).subscribe(msg => {
            const types = ['permission_request_processed', 'new_permission_request', 'permissions_delegated', 'permissions_updated'];
            if (types.includes(msg.type)) {
                this.loadAll();
            }
        });

        this.authService.userUpdated$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.refreshLocalData();
        });
    }

    loadAll() {
        this.refreshLocalData();
        this.loadRequests();
    }

    private refreshLocalData() {
        this.currentUser = this.authService.getUser();
        if (this.currentUser) {
            this.accessibleDepartments = this.currentUser.accessibleDepartments || [];
            this.accessibleFeatures = this.currentUser.accessibleFeatures || [];
        }
    }

    get isBasicEmployee(): boolean {
        return (this.currentUser?.role || '').toLowerCase() === 'employee';
    }

    ngOnDestroy() {
        this.destroy$?.next();
        this.destroy$?.complete();
    }

    loadRequests() {
        this.loading = true;
        this.authService.refreshCurrentUser().subscribe(() => {
            this.permissionService.getMyRequests().subscribe({
                next: (data) => {
                    this.requests = data;
                    this.loading = false;
                },
                error: () => this.loading = false
            });
        });
    }

    getDeptLabel(dep: string): string {
        const labels: { [key: string]: string } = {
            'negotiations': 'المفاوضات',
            'execution': 'التنفيذ',
            'finance': 'المالية',
            'discussions': 'المداولات',
            'reports': 'التقارير',
            'car-management': 'السيارات',
            'secretariat': 'السكرتارية',
            'management': 'الشؤون الإدارية'
        };
        return labels[(dep || '').toLowerCase().trim()] || dep;
    }

    getStatusSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' | undefined {
        switch (status) {
            case 'Approved': return 'success';
            case 'Pending': return 'info';
            case 'Rejected': return 'danger';
            default: return 'secondary';
        }
    }

    getStatusLabel(status: string): string {
        switch (status) {
            case 'Approved': return 'تمت الموافقة';
            case 'Pending': return 'قيد المراجعة';
            case 'Rejected': return 'تم الرفض';
            default: return status;
        }
    }

    getStatusIcon(status: string): string {
        switch (status) {
            case 'Approved': return 'pi-check-circle';
            case 'Pending': return 'pi-clock';
            case 'Rejected': return 'pi-times-circle';
            default: return 'pi-question-circle';
        }
    }
}
