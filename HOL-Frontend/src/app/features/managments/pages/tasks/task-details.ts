import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService, EmployeeTaskDto, TaskStatus, TaskPriority } from '../../../../services/task.service';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { AuthService } from '../../../../core/services/auth';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-task-details',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        TagModule,
        CardModule,
        ProgressBarModule,
        SelectModule,
        FormsModule
    ],
    templateUrl: './task-details.html',
    styles: [`
        .detail-item {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
            padding: 1rem;
            background: rgba(249, 250, 251, 0.5);
            border-radius: 0.75rem;
            border: 1px solid #f3f4f6;
        }
        :host ::ng-deep .dark .detail-item {
            background: rgba(31, 41, 55, 0.5);
            border-color: #374151;
        }
    `]
})
export class TaskDetailsPage implements OnInit {
    task: EmployeeTaskDto | null = null;
    loading = true;
    updatingStatus = false;

    // Expose enum to template
    TaskStatus = TaskStatus;

    statuses = [
        { label: 'قيد الانتظار', value: TaskStatus.Pending },
        { label: 'جاري التنفيذ', value: TaskStatus.InProgress },
        { label: 'مكتملة', value: TaskStatus.Completed },
        { label: 'ملغاة', value: TaskStatus.Cancelled }
    ];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private taskService: TaskService,
        private authService: AuthService,
        private swal: SweetAlertService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        if (id) {
            this.loadTask(Number(id));
        }
    }

    loadTask(id: number) {
        this.loading = true;
        this.taskService.getTaskById(id).subscribe({
            next: (data) => {
                this.task = data;
                this.loading = false;
            },
            error: (err) => {
                this.swal.error({ title: 'خطأ', text: 'فشل تحميل تفاصيل المهمة' });
                this.router.navigate(['/management/tasks']);
            }
        });
    }

    updateStatus(newStatus: TaskStatus) {
        if (!this.task) return;

        this.swal.fire({
            title: 'تحديث حالة المهمة',
            text: `هل تود إضافة ملاحظات عند تغيير الحالة إلى: ${this.getStatusLabel(newStatus)}؟`,
            input: 'textarea',
            inputPlaceholder: 'اكتب ملاحظاتك هنا (اختياري)...',
            showCancelButton: true,
            confirmButtonText: 'تحديث',
            cancelButtonText: 'إلغاء',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.executeStatusUpdate(newStatus, result.value);
            }
        });
    }

    private executeStatusUpdate(newStatus: TaskStatus, comment?: string) {
        if (!this.task) return;

        const isSupervisorOrAdmin = this.canManage();
        this.updatingStatus = true;
        this.taskService.updateStatus(this.task.id, newStatus, comment, isSupervisorOrAdmin).subscribe({
            next: () => {
                this.updatingStatus = false;
                if (this.task) {
                    this.task.status = newStatus;
                    if (isSupervisorOrAdmin) {
                        this.task.supervisorComment = comment;
                    } else {
                        this.task.employeeComment = comment;
                    }
                }
                this.swal.toast({ icon: 'success', title: 'تم تحديث الحالة بنجاح' });
            },
            error: (err) => {
                this.updatingStatus = false;
                this.swal.error({ title: 'خطأ', text: 'فشل تحديث الحالة' });
            }
        });
    }

    getStatusSeverity(status: string) {
        return this.taskService.getStatusColor(status);
    }

    getStatusLabel(status: TaskStatus) {
        return this.taskService.getStatusLabel(status);
    }

    getPriorityLabel(priority: TaskPriority) {
        return this.taskService.getPriorityLabel(priority);
    }

    getPrioritySeverity(priority: string) {
        return this.taskService.getPriorityColor(priority);
    }

    isEmployee(): boolean {
        return this.authService.isEmployee();
    }

    canManage(): boolean {
        return this.authService.isAdmin() || this.authService.isSupervisor();
    }

    getProgress(): number {
        if (!this.task) return 0;
        switch (this.task.status) {
            case TaskStatus.Pending: return 10;
            case TaskStatus.InProgress: return 50;
            case TaskStatus.Completed: return 100;
            default: return 0;
        }
    }
}
