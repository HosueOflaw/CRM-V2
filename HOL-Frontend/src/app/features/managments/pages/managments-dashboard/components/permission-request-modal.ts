import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import { PermissionService, PermissionRequest } from '../../../../../core/services/permission.service';
import { SweetAlertService } from '../../../../../shared/services/sweet-alert.service';

@Component({
    selector: 'app-permission-request-modal',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        TextareaModule,
        SelectButtonModule,
        SelectModule
    ],
    template: `
    <p-dialog 
        header="طلب صلاحية جديدة" 
        [(visible)]="visible" 
        [modal]="true" 
        [style]="{ width: '450px' }" 
        [draggable]="false" 
        [resizable]="false"
        (onHide)="close()"
    >
        <div class="flex flex-col gap-4 py-2">
            <!-- نوع الطلب -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">نوع الصلاحية المطلوبة</label>
                <p-selectButton 
                    [options]="typeOptions" 
                    [(ngModel)]="request.requestType" 
                    optionLabel="label" 
                    optionValue="value"
                    class="w-full"
                ></p-selectButton>
            </div>

            <!-- القيمة المطلوبة -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">
                    {{ request.requestType === 'Department' ? 'اختر القسم المطلوب' : 'كود الصلاحية (مثلاً: edit_salary)' }}
                </label>
                
                <p-select 
                    *ngIf="request.requestType === 'Department'"
                    [options]="departments" 
                    [(ngModel)]="request.requestedValue" 
                    optionLabel="label" 
                    optionValue="value"
                    placeholder="اختر القسم"
                    class="w-full"
                ></p-select>

                <input 
                    *ngIf="request.requestType === 'Feature'"
                    pInputText 
                    [(ngModel)]="request.requestedValue" 
                    placeholder="ادخل كود الصلاحية هنا..." 
                    class="w-full"
                />
            </div>

            <!-- السبب -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">سبب الطلب</label>
                <textarea 
                    pInputTextarea 
                    [(ngModel)]="request.reason" 
                    rows="4" 
                    placeholder="اشرح لماذا تحتاج هذه الصلاحية..."
                    class="w-full"
                ></textarea>
            </div>
        </div>

        <ng-template pTemplate="footer">
            <p-button 
                label="إلغاء" 
                icon="pi pi-times" 
                (click)="close()" 
                [text]="true" 
                severity="secondary"
            ></p-button>
            <p-button 
                label="إرسال الطلب" 
                icon="pi pi-check" 
                (click)="submit()" 
                [loading]="loading"
                [disabled]="!isValid()"
            ></p-button>
        </ng-template>
    </p-dialog>
  `
})
export class PermissionRequestModal {
    @Output() onComplete = new EventEmitter<void>();

    visible = false;
    loading = false;

    request: any = {
        requestType: 'Feature',
        requestedValue: '',
        reason: ''
    };

    typeOptions = [
        { label: 'صلاحية محددة', value: 'Feature' },
        { label: 'دخول على قسم', value: 'Department' }
    ];

    departments = [
        { label: 'المفاوضات', value: 'negotiations' },
        { label: 'السكرتارية', value: 'secretariat' },
        { label: 'التنفيذ', value: 'execution' },
        { label: 'الإدارة المالية', value: 'finance' },
        { label: 'المداولات', value: 'discussions' },
        { label: 'التقارير', value: 'reports' },
        { label: 'السيارات', value: 'car-management' },
        { label: 'شؤون إدارية', value: 'management' }
    ];

    constructor(
        private permissionService: PermissionService,
        private swal: SweetAlertService
    ) { }

    open() {
        this.visible = true;
        this.request = {
            requestType: 'Feature',
            requestedValue: '',
            reason: ''
        };
    }

    close() {
        this.visible = false;
    }

    isValid() {
        return (this.request.requestedValue ?? '').trim() !== '' && (this.request.reason ?? '').trim() !== '';
    }

    submit() {
        if (!this.isValid()) return;

        this.loading = true;
        this.permissionService.sendRequest(this.request).subscribe({
            next: () => {
                this.loading = false;
                this.swal.success({
                    title: 'تم الإرسال!',
                    text: 'تم إرسال طلبك بنجاح للأدمن، سيصلك إشعار عند الموافقة.',
                    confirmButtonText: 'حسناً'
                });
                this.visible = false;
                this.onComplete.emit();
            },
            error: (err: any) => {
                this.loading = false;
                this.swal.error({
                    title: 'خطأ',
                    text: 'فشل إرسال الطلب. يرجى المحاولة مرة أخرى.',
                    confirmButtonText: 'حسناً'
                });
            }
        });
    }
}
