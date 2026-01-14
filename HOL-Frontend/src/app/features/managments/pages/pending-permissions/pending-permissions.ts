import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { PermissionRequest, PermissionService } from '../../../../core/services/permission.service';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { AuthService } from '../../../../core/services/auth';

@Component({
    selector: 'app-pending-permissions',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        TagModule,
        ButtonModule,
        DialogModule,
        TextareaModule,
        FormsModule,
        SkeletonModule
    ],
    template: `
    <div class="card p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <i class="pi pi-shield text-primary text-3xl"></i>
                طلبات الصلاحيات المعلقة
            </h1>
            <p-button icon="pi pi-refresh" (click)="loadRequests()" [loading]="loading" [rounded]="true" [text]="true"></p-button>
        </div>

        <div *ngIf="loading" class="border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden">
            <p-table [value]="[1,2,3,4,5]" styleClass="p-datatable-sm">
                <ng-template pTemplate="header">
                    <tr>
                        <th>الموظف</th>
                        <th>القسم</th>
                        <th>نوع الطلب</th>
                        <th>القيمة</th>
                        <th>السبب</th>
                        <th>التاريخ</th>
                        <th class="text-center">الإجراءات</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body">
                    <tr>
                        <td><div class="flex items-center gap-2"><p-skeleton shape="circle" size="1.5rem"></p-skeleton><p-skeleton width="6rem"></p-skeleton></div></td>
                        <td><p-skeleton width="5rem"></p-skeleton></td>
                        <td><p-skeleton width="4rem" height="1.5rem" borderRadius="1rem"></p-skeleton></td>
                        <td><p-skeleton width="4rem"></p-skeleton></td>
                        <td><p-skeleton width="8rem"></p-skeleton></td>
                        <td><p-skeleton width="6rem"></p-skeleton></td>
                        <td class="flex gap-2 justify-center"><p-skeleton width="4rem" height="2rem"></p-skeleton><p-skeleton width="4rem" height="2rem"></p-skeleton></td>
                    </tr>
                </ng-template>
            </p-table>
        </div>

        <p-table *ngIf="!loading" [value]="requests" [responsiveLayout]="'scroll'" styleClass="p-datatable-sm">
            <ng-template pTemplate="header">
                <tr>
                    <th>الموظف</th>
                    <th>القسم</th>
                    <th>نوع الطلب</th>
                    <th>القيمة</th>
                    <th>السبب</th>
                    <th>التاريخ</th>
                    <th class="text-center">الإجراءات</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-req>
                <tr>
                    <td class="font-bold">{{ req.fullName || req.userName }}</td>
                    <td class="text-sm">{{ req.department }}</td>
                    <td>
                        <p-tag [severity]="(req.requestType === 'Department' || req.requestType === 'Sec') ? 'info' : 'warn'" 
                               [value]="(req.requestType === 'Department' || req.requestType === 'Sec') ? 'دخول قسم' : 'صلاحية ميزة'"></p-tag>
                    </td>
                    <td><code class="bg-gray-100 p-1 rounded">{{ req.requestedValue || req.requestValue }}</code></td>
                    <td class="text-sm truncate max-w-[200px]" [title]="req.reason">{{ req.reason }}</td>
                    <td class="text-xs text-gray-500">{{ req.createdAt | date:'short' }}</td>
                    <td class="flex gap-2 justify-center">
                        <p-button icon="pi pi-check" severity="success" class="p-button-sm rounded-lg" (click)="openProcess(req, 'Approved')" label="موافقة"></p-button>
                        <p-button icon="pi pi-times" severity="danger" class="p-button-sm rounded-lg" (click)="openProcess(req, 'Rejected')" label="رفض"></p-button>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="7" class="p-0">
                        <div class="flex flex-col items-center justify-center py-16 bg-gray-50/30 dark:bg-gray-800/30 rounded-b-2xl">
                            <h3 class="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">الهدوء يعم المكان.. 🕊️</h3>
                            <p class="text-gray-500 dark:text-gray-400">لا توجد طلبات صلاحيات معلقة بانتظار مراجعتك حالياً.</p>
                        </div>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    </div>

    <!-- Process Dialog -->
    <p-dialog [(visible)]="displayModal" [header]="modalAction === 'Approved' ? 'الموافقة على الطلب' : 'رفض الطلب'" 
              [modal]="true" [style]="{width: '450px'}" class="p-fluid">
        <div class="field mt-4">
            <label class="font-bold mb-2 block">ملاحظات (اختياري)</label>
            <textarea pTextarea [(ngModel)]="processComment" rows="4" placeholder="اكتب مبررات القرار هنا..."></textarea>
        </div>
        <ng-template pTemplate="footer">
            <p-button label="إلغاء" icon="pi pi-times" [text]="true" (click)="displayModal=false"></p-button>
            <p-button [label]="modalAction === 'Approved' ? 'تأكيد الموافقة' : 'تأكيد الرفض'" 
                      [icon]="modalAction === 'Approved' ? 'pi pi-check' : 'pi pi-times'" 
                      [severity]="modalAction === 'Approved' ? 'success' : 'danger'"
                      (click)="confirmProcess()"></p-button>
        </ng-template>
    </p-dialog>
    `
})
export class PendingPermissionsPage implements OnInit {
    requests: PermissionRequest[] = [];
    loading = true;

    displayModal = false;
    modalAction: 'Approved' | 'Rejected' = 'Approved';
    selectedRequest: PermissionRequest | null = null;
    processComment = '';

    constructor(
        private permissionService: PermissionService,
        private swal: SweetAlertService,
        private auth: AuthService
    ) { }

    ngOnInit() {
        this.loadRequests();
    }

    loadRequests() {
        this.loading = true;
        this.permissionService.getPendingRequests().subscribe({
            next: (data) => {
                this.requests = data;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                this.swal.error({ title: 'خطأ', text: 'فشل تحميل الطلبات' });
            }
        });
    }

    openProcess(req: PermissionRequest, action: 'Approved' | 'Rejected') {
        this.selectedRequest = req;
        this.modalAction = action;
        this.processComment = '';
        this.displayModal = true;
    }

    confirmProcess() {
        if (!this.selectedRequest || this.selectedRequest.id === undefined) return;

        this.permissionService.processRequest(
            this.selectedRequest.id,
            this.modalAction,
            this.processComment
        ).subscribe({
            next: () => {
                this.swal.toast({ icon: 'success', title: 'تمت العملية بنجاح' });
                this.displayModal = false;
                this.loadRequests(); // Refresh
            },
            error: () => this.swal.error({ title: 'خطأ', text: 'فشل في إتمام العملية' })
        });
    }
}
