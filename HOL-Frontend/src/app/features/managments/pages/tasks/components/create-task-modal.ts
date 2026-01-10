import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TaskService, CreateTaskDto, UpdateTaskDto, TaskPriority, EmployeeTaskDto } from '../../../../../services/task.service';
import { UserService, UserDto } from '../../../../../services/user.service';
import { SweetAlertService } from '../../../../../shared/services/sweet-alert.service';
import { AuthService } from '../../../../../core/services/auth';

@Component({
    selector: 'app-create-task-modal',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        SelectModule
    ],
    template: `
    <p-dialog 
        header="إسناد مهمة جديدة" 
        [(visible)]="visible" 
        [modal]="true" 
        [style]="{ width: '500px' }" 
        [draggable]="false" 
        [resizable]="false"
    >
        <form [formGroup]="taskForm" class="flex flex-col gap-4 py-2">
            
            <!-- Employee Selection -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">الموظف المسؤول</label>
                <p-select 
                    [options]="employees" 
                    formControlName="assignedToId" 
                    optionLabel="fullName" 
                    optionValue="id"
                    placeholder="اختر موظفاً..."
                    [filter]="true"
                    filterBy="fullName"
                    class="w-full"
                    appendTo="body"
                ></p-select>
                <small *ngIf="isFieldInvalid('assignedToId')" class="text-red-500">مطلوب اختيار الموظف</small>
            </div>

            <!-- Title -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">عنوان المهمة</label>
                <input pInputText formControlName="title" placeholder="عنوان مختصر للمهمة" />
                <small *ngIf="isFieldInvalid('title')" class="text-red-500">العنوان مطلوب</small>
            </div>

            <!-- Description -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">التفاصيل</label>
                <textarea pInputText formControlName="description" rows="3" placeholder="شرح تفصيلي للمهمة..." class="w-full border rounded p-2"></textarea>
            </div>

            <!-- Priority -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">الأولوية</label>
                <p-select 
                    [options]="priorities" 
                    formControlName="priority" 
                    optionLabel="label" 
                    optionValue="value"
                    placeholder="درجة الأهمية"
                    class="w-full"
                    appendTo="body"
                ></p-select>
            </div>

            <!-- Due Date (Native HTML5) -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">تاريخ التسليم</label>
                <input 
                    type="datetime-local" 
                    pInputText 
                    formControlName="dueDate" 
                    class="w-full"
                />
                <small *ngIf="isFieldInvalid('dueDate')" class="text-red-500">التاريخ مطلوب</small>
            </div>

        </form>

        <ng-template pTemplate="footer">
            <p-button 
                label="إلغاء" 
                icon="pi pi-times" 
                (click)="close()" 
                [text]="true" 
                severity="secondary"
            ></p-button>
            <p-button 
                [label]="taskToEdit ? 'تحديث المهمة' : 'إنشاء المهمة'" 
                icon="pi pi-check" 
                (click)="submit()" 
                [loading]="loading"
                [disabled]="taskForm.invalid"
            ></p-button>
        </ng-template>
    </p-dialog>
    `
})
export class CreateTaskModal implements OnInit {
    @Output() onComplete = new EventEmitter<void>();

    visible = false;
    loading = false;
    taskForm: FormGroup;
    employees: UserDto[] = [];
    taskToEdit: EmployeeTaskDto | null = null;

    priorities = [
        { label: '🔥 عاجل جداً (High)', value: TaskPriority.High },
        { label: '⚠️ متوسط (Medium)', value: TaskPriority.Medium },
        { label: '☕ عادي (Low)', value: TaskPriority.Low }
    ];

    constructor(
        private fb: FormBuilder,
        private taskService: TaskService,
        private userService: UserService,
        private authService: AuthService,
        private swal: SweetAlertService
    ) {
        this.taskForm = this.fb.group({
            title: ['', Validators.required],
            description: [''],
            assignedToId: [null, Validators.required],
            priority: [TaskPriority.Medium, Validators.required],
            dueDate: [null, Validators.required]
        });
    }

    ngOnInit() {
        // Load employees for dropdown
        // Assuming supervisor can only assign to their dept.
        // The backend filters, but frontend should also just list relevant employees.
        this.loadEmployees();
    }

    loadEmployees() {
        // If Admin, get all. If Supervisor, get dept employees.
        // We reuse logic similar to delegation modal or just fetch all and filter.
        // Assuming UserService.getUsers() returns relevant users or all.
        // For efficiency, just fetch all and filter by current user dept if supervisor.
        const currentUser = this.authService.getUser();

        this.userService.getUsers().subscribe(users => {
            if (this.authService.isAdmin()) {
                this.employees = users;
            } else {
                // strict case-insensitive match for supervisor
                const dept = (currentUser?.department || '').toLowerCase();
                this.employees = users.filter(u => (u.department || '').toLowerCase() === dept && u.id !== currentUser?.id);
            }
        });
    }

    open(task?: EmployeeTaskDto) {
        this.visible = true;
        this.taskToEdit = task || null;

        if (task) {
            // Format ISO date to YYYY-MM-DDTHH:mm for datetime-local
            let formattedDate = '';
            if (task.dueDate) {
                const date = new Date(task.dueDate);
                formattedDate = date.toISOString().slice(0, 16);
            }

            this.taskForm.patchValue({
                title: task.title,
                description: task.description,
                assignedToId: task.assignedToId,
                priority: task.priority,
                dueDate: formattedDate
            });
        } else {
            this.taskForm.reset({
                priority: TaskPriority.Medium,
                assignedToId: null,
                title: '',
                description: '',
                dueDate: null
            });
        }
    }

    close() {
        this.visible = false;
    }

    submit() {
        if (this.taskForm.invalid) return;

        this.loading = true;
        const val = this.taskForm.value;

        // Convert datetime-local string to proper ISO format
        let dueDateISO: string;
        if (val.dueDate) {
            const dateObj = new Date(val.dueDate);
            dueDateISO = dateObj.toISOString();
        } else {
            dueDateISO = new Date().toISOString();
        }

        if (this.taskToEdit) {
            // Update Mode
            const payload: UpdateTaskDto = {
                title: val.title,
                description: val.description || '',
                assignedToId: val.assignedToId,
                priority: val.priority,
                dueDate: dueDateISO
            };

            this.taskService.updateTask(this.taskToEdit.id, payload).subscribe({
                next: () => {
                    this.loading = false;
                    this.swal.success({ title: 'تم التحديث', text: 'تم تحديث المهمة بنجاح' });
                    this.visible = false;
                    this.onComplete.emit();
                },
                error: (err) => {
                    this.loading = false;
                    this.swal.error({ title: 'خطأ', text: err.error?.message || 'فشل تحديث المهمة' });
                }
            });
        } else {
            // Create Mode
            const payload: CreateTaskDto = {
                title: val.title,
                description: val.description || '',
                assignedToId: val.assignedToId,
                priority: val.priority,
                dueDate: dueDateISO
            };

            this.taskService.createTask(payload).subscribe({
                next: () => {
                    this.loading = false;
                    this.swal.success({ title: 'تمت المهمة!', text: 'تم إسناد المهمة للموظف بنجاح' });
                    this.visible = false;
                    this.onComplete.emit();
                },
                error: (err) => {
                    this.loading = false;
                    this.swal.error({ title: 'خطأ', text: err.error?.message || 'فشل إنشاء المهمة' });
                }
            });
        }
    }

    isFieldInvalid(field: string): boolean {
        const control = this.taskForm.get(field);
        return !!(control && control.invalid && (control.dirty || control.touched));
    }
}
