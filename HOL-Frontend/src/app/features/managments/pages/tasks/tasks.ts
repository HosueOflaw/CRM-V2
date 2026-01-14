import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TaskService, EmployeeTaskDto, TaskStatus, TaskPriority, TaskFilterParams } from '../../../../services/task.service';
import { AuthService } from '../../../../core/services/auth';
import { CreateTaskModal } from './components/create-task-modal';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { FormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { SelectModule } from 'primeng/select';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Signalr } from '../../../../services/signalr';
import { Subject, takeUntil, filter, debounceTime } from 'rxjs';

@Component({
    selector: 'app-tasks-page',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        TagModule,
        TooltipModule,
        InputTextModule,
        ConfirmDialogModule,
        CreateTaskModal,
        FormsModule,
        SelectModule,
        RouterModule,
        SkeletonModule
    ],
    providers: [ConfirmationService],
    templateUrl: './tasks.html',
    styles: [`
        :host ::ng-deep .p-tag {
            font-weight: 500;
        }
        .task-card-hover:hover {
            background-color: var(--surface-hover);
        }
    `]
})
export class TasksPage implements OnInit, OnDestroy {
    @ViewChild('createModal') createModal!: CreateTaskModal;

    tasks: EmployeeTaskDto[] = [];
    loading = true;
    viewMode: 'personal' | 'management' = 'personal';
    private destroy$ = new Subject<void>();

    // Expose enum to template
    TaskStatus = TaskStatus;

    // Status Options for filtering or logic
    statuses = [
        { label: 'الكل', value: null },
        { label: 'قيد الانتظار', value: TaskStatus.Pending },
        { label: 'جاري التنفيذ', value: TaskStatus.InProgress },
        { label: 'مكتملة', value: TaskStatus.Completed },
        { label: 'ملغاة', value: TaskStatus.Cancelled }
    ];

    priorities = [
        { label: 'الكل', value: null },
        { label: 'عالي', value: TaskPriority.High },
        { label: 'متوسط', value: TaskPriority.Medium },
        { label: 'منخفض', value: TaskPriority.Low }
    ];

    // View period filter
    viewPeriod: 'all' | 'today' = 'today'; // Default to today's tasks

    viewPeriodOptions = [
        { label: 'جميع المهام', value: 'all' },
        { label: 'مهام اليوم', value: 'today' }
    ];

    filterParams: TaskFilterParams = {
        status: undefined,
        priority: undefined,
        startDate: undefined,
        endDate: undefined
    };

    constructor(
        private taskService: TaskService,
        public authService: AuthService,
        private swal: SweetAlertService,
        private confirmationService: ConfirmationService,
        private signalr: Signalr,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.viewMode = this.route.snapshot.data['mode'] || 'personal';

        // Apply daily filter by default
        this.applyViewPeriodFilter();

        this.loadTasks();

        // Listen for real-time task updates (with debounce to avoid multiple reloads)
        const taskEvents = ['new_task_assigned', 'task_updated', 'task_status_updated', 'task_deleted'];
        this.signalr.message$.pipe(
            filter(msg => taskEvents.includes(msg.type)),
            debounceTime(400),
            takeUntil(this.destroy$)
        ).subscribe(message => {
            console.log('🔄 Reloading tasks due to events:', message.type);
            this.loadTasks();
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadTasks() {
        this.loading = true;
        this.taskService.getTasks(this.filterParams).subscribe({
            next: (data) => {
                const currentUser = this.authService.getUser();

                if (this.viewMode === 'personal') {
                    // Show only tasks assigned TO the user
                    this.tasks = data.filter(t => t.assignedToId === currentUser?.id);
                } else {
                    // Management Mode
                    if (this.authService.isAdmin()) {
                        // Admin sees everything in management
                        this.tasks = data;
                    } else if (this.authService.isSupervisor()) {
                        // Supervisor sees only tasks they created (assigned by them)
                        this.tasks = data.filter(t => t.createdById === currentUser?.id);
                    }
                }

                this.loading = false;
            },
            error: (err) => {
                this.loading = false;
                console.error('Failed to load tasks', err);
            }
        });
    }

    onFilterChange() {
        this.loadTasks();
    }

    clearFilters() {
        this.filterParams = {
            status: undefined,
            priority: undefined,
            startDate: undefined,
            endDate: undefined
        };
        this.loadTasks();
    }

    onViewPeriodChange() {
        this.applyViewPeriodFilter();
        this.loadTasks();
    }

    applyViewPeriodFilter() {
        if (this.viewPeriod === 'today') {
            // Set filter to today's date range
            const today = new Date();
            const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

            this.filterParams.startDate = startOfDay.toISOString();
            this.filterParams.endDate = endOfDay.toISOString();
        } else {
            // Clear date filters to show all tasks
            this.filterParams.startDate = undefined;
            this.filterParams.endDate = undefined;
        }
    }

    isOverdue(task: EmployeeTaskDto): boolean {
        // Backend might calculate, but frontend check is good visual aid
        if (task.status === TaskStatus.Completed || task.status === TaskStatus.Cancelled) return false;
        return new Date(task.dueDate) < new Date();
    }

    getPrioritySeverity(priority: string) {
        return this.taskService.getPriorityColor(priority);
    }

    getStatusSeverity(status: string) {
        return this.taskService.getStatusColor(status);
    }

    getStatusLabel(status: TaskStatus): string {
        if (!status) return 'غير محدد';
        return this.taskService.getStatusLabel(status);
    }

    getPriorityLabel(priority: TaskPriority): string {
        return this.taskService.getPriorityLabel(priority);
    }

    // --- Actions ---

    openCreateModal() {
        this.createModal.open();
    }

    editTask(task: EmployeeTaskDto) {
        this.createModal.open(task);
    }

    updateStatus(task: EmployeeTaskDto, newStatus: TaskStatus) {
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
                this.executeStatusUpdate(task, newStatus, result.value);
            }
        });
    }

    private executeStatusUpdate(task: EmployeeTaskDto, status: TaskStatus, comment?: string) {
        const isSupervisorOrAdmin = this.authService.isAdmin() || this.authService.isSupervisor();
        this.taskService.updateStatus(task.id, status, comment, isSupervisorOrAdmin).subscribe({
            next: () => {
                // Update local state locally to feel snappy
                task.status = status;
                if (isSupervisorOrAdmin) {
                    task.supervisorComment = comment;
                } else {
                    task.employeeComment = comment;
                }

                this.swal.toast({
                    icon: 'success',
                    title: 'تم تحديث الحالة بنجاح'
                });
            },
            error: (err) => {
                this.swal.error({ title: 'خطأ', text: 'فشل تحديث الحالة' });
            }
        });
    }

    deleteTask(task: EmployeeTaskDto) {
        this.confirmationService.confirm({
            message: 'هل أنت متأكد من حذف هذه المهمة نهائياً؟',
            header: 'حذف مهمة',
            icon: 'pi pi-trash',
            acceptLabel: 'نعم، احذف',
            rejectLabel: 'تراجع',
            acceptButtonStyleClass: 'p-button-danger',
            accept: () => {
                this.taskService.deleteTask(task.id).subscribe({
                    next: () => {
                        this.tasks = this.tasks.filter(t => t.id !== task.id);
                        this.swal.success({ title: 'تم الحذف', text: 'تم حذف المهمة بنجاح' });
                    },
                    error: () => this.swal.error({ title: 'خطأ', text: 'فشل الحذف' })
                });
            }
        });
    }

    // Role helpers
    canManage(): boolean {
        return this.authService.isAdmin() || this.authService.isSupervisor();
    }
}
