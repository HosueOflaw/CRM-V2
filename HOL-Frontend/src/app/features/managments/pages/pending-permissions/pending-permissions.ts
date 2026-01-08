import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { PermissionRequest, PermissionService } from '../../../../core/services/permission.service';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { AuthService } from '../../../../core/services/auth';

@Component({
    selector: 'app-pending-permissions',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        BadgeModule,
        TagModule,
        DialogModule,
        TextareaModule,
        FormsModule
    ],
    template: `
    <div class="card p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-800">طلبات الصلاحيات المعلقة 🛡️</h2>
            <p-button icon="pi pi-refresh" (click)="loadRequests()" [text]="true" severity="secondary"></p-button>
        </div>

        <p-table [value]="requests" [loading]="loading" [responsiveLayout]="'scroll'" styleClass="p-datatable-sm">
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
                        <button pButton icon="pi pi-check" severity="success" class="p-button-sm rounded-lg" (click)="openProcess(req, 'Approved')" label="موافقة"></button>
                        <button pButton icon="pi pi-times" severity="danger" class="p-button-sm rounded-lg" (click)="openProcess(req, 'Rejected')" label="رفض"></button>
                    </td>
                </tr>
            </ng-template>
            <ng-template pTemplate="emptymessage">
                <tr>
                    <td colspan="6" class="text-center p-8 text-gray-400">لا توجد طلبات معلقة حالياً</td>
                </tr>
            </ng-template>
        </p-table>
    </div>

    <!-- نافذة معالجة الطلب (التعليق) -->
    <p-dialog [(visible)]="displayModal" [header]="modalAction === 'Approved' ? 'تأكيد الموافقة' : 'تأكيد الرفض'" [modal]="true" [style]="{width: '400px'}">
        <div class="flex flex-col gap-3 py-3">
            <label class="font-medium">أضف تعليقك (اختياري)</label>
            <textarea pInputTextarea [(ngModel)]="adminComment" rows="3" placeholder="اكتب سبباً أو ملاحظة..."></textarea>
        </div>
        <ng-template pTemplate="footer">
            <p-button label="إلغاء" (click)="displayModal = false" [text]="true" severity="secondary"></p-button>
            <p-button [label]="modalAction === 'Approved' ? 'تأكيد الموافقة' : 'تأكيد الرفض'" 
                      [severity]="modalAction === 'Approved' ? 'success' : 'danger'" 
                      (click)="process()" 
                      [loading]="processing"></p-button>
        </ng-template>
    </p-dialog>
  `
})
export class PendingPermissionsPage implements OnInit {
    requests: PermissionRequest[] = [];
    loading = false;
    processing = false;

    displayModal = false;
    selectedRequest?: PermissionRequest;
    modalAction: 'Approved' | 'Rejected' = 'Approved';
    adminComment = '';

    constructor(
        private permissionService: PermissionService,
        private swal: SweetAlertService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.loadRequests();
    }

    loadRequests() {
        this.loading = true;
        this.permissionService.getPendingRequests().subscribe({
            next: (data: any) => {
                this.requests = data;
                this.loading = false;
            },
            error: () => this.loading = false
        });
    }

    openProcess(req: PermissionRequest, action: 'Approved' | 'Rejected') {
        this.selectedRequest = req;
        this.modalAction = action;
        this.adminComment = '';
        this.displayModal = true;
    }

    process() {
        if (!this.selectedRequest?.id) return;

        this.processing = true;
        this.permissionService.processRequest(this.selectedRequest.id, this.modalAction, this.adminComment).subscribe({
            next: () => {
                this.processing = false;
                this.displayModal = false;

                // Refresh local user data if Admin is testing or same user
                if (this.modalAction === 'Approved') {
                    this.authService.refreshCurrentUser().subscribe();
                }

                this.swal.success({
                    title: 'تمت العملية',
                    text: `تم ${this.modalAction === 'Approved' ? 'الموافقة على' : 'رفض'} الطلب بنجاح.`,
                    timer: 2000
                });
                this.loadRequests();
            },
            error: () => {
                this.processing = false;
                this.swal.error({ title: 'خطأ', text: 'فشل إتمام العملية.' });
            }
        });
    }
}
