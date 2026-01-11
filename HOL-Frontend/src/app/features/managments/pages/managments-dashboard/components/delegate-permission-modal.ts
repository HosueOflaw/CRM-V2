import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { PermissionService } from '../../../../../core/services/permission.service';
import { UserService, UserDto } from '../../../../../services/user.service';
import { SweetAlertService } from '../../../../../shared/services/sweet-alert.service';
import { AuthService } from '../../../../../core/services/auth';

@Component({
    selector: 'app-delegate-permission-modal',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        SelectModule,
        InputTextModule
    ],
    template: `
    <p-dialog 
        header="تفويض صلاحية لموظف" 
        [(visible)]="visible" 
        [modal]="true" 
        [style]="{ width: '450px' }" 
        [draggable]="false" 
        [resizable]="false"
    >
        <div class="flex flex-col gap-4 py-2">
            <p class="text-sm text-gray-500 mb-2">
                بصفتك مشرفاً، يمكنك منح صلاحيات محددة للموظفين التابعين لقسمك فقط.
            </p>

            <!-- اختيار الموظف -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">الموظف المستهدف</label>
                <p-select 
                    [options]="myEmployees" 
                    [(ngModel)]="selectedEmployeeId" 
                    optionLabel="fullName" 
                    optionValue="id"
                    placeholder="اختر موظفاً..."
                    [filter]="true"
                    filterBy="fullName"
                    class="w-full"
                ></p-select>
            </div>

            <!-- تفويض قسم -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">تفويض قسم كامل (اختياري)</label>
                <p-select 
                    [options]="visibleDepartments" 
                    [(ngModel)]="selectedDep" 
                    optionLabel="label" 
                    optionValue="value"
                    placeholder="اختر قسماً..."
                    class="w-full"
                    [showClear]="true"
                ></p-select>
            </div>

            <!-- كود الصلاحية -->
            <div class="flex flex-col gap-2">
                <label class="font-bold text-gray-700">كود صلاحية محددة (اختياري)</label>
                <input pInputText [(ngModel)]="featureCode" placeholder="مثلاً: edit_client_details" />
                <small class="text-gray-400">يمكنك منح صلاحية محددة بدلاً من قسم كامل.</small>
            </div>
        </div>

        <ng-template pTemplate="footer">
            <p-button 
                label="إلغاء" 
                icon="pi pi-times" 
                (click)="visible = false" 
                [text]="true" 
                severity="secondary"
            ></p-button>
            <p-button 
                label="تأكيد التفويض" 
                icon="pi pi-user-plus" 
                (click)="submit()" 
                [loading]="loading"
                [disabled]="!isValid()"
            ></p-button>
        </ng-template>
    </p-dialog>
  `
})
export class DelegatePermissionModal implements OnInit {
    @Output() onComplete = new EventEmitter<void>();

    visible = false;
    loading = false;

    myEmployees: UserDto[] = [];
    selectedEmployeeId: number | null = null;
    featureCode = '';
    selectedDep = '';

    // Static list for Labels and Normalization. Values here should likely match Backend DB (PascalCase).
    private departmentLabels = [
        { label: 'المفاوضات', value: 'Negotiations' },
        { label: 'السكرتارية', value: 'Secretariat' },
        { label: 'التنفيذ', value: 'Execution' },
        { label: 'الإدارة المالية', value: 'Finance' },
        { label: 'المداولات', value: 'Discussions' },
        { label: 'التقارير', value: 'Reports' },
        { label: 'السيارات', value: 'Car-Management' },
        { label: 'الشؤون الإدارية', value: 'Management' }
    ];

    private depAliases: { [key: string]: string } = {
        'negotiations': 'negotiations', 'المفاوضات': 'negotiations',
        'execution': 'execution', 'التنفيذ': 'execution',
        'finance': 'finance', 'المالية': 'finance', 'الإدارة المالية': 'finance',
        'discussions': 'discussions', 'المداولات': 'discussions',
        'reports': 'reports', 'التقارير': 'reports', 'report': 'reports',
        'car-management': 'car-management', 'السيارات': 'car-management',
        'secretariat': 'secretariat', 'السكرتارية': 'secretariat', 'sec': 'secretariat',
        'management': 'management', 'الشؤون الإدارية': 'management', 'managment': 'management'
    };

    constructor(
        private permissionService: PermissionService,
        private userService: UserService,
        private authService: AuthService,
        private swal: SweetAlertService
    ) { }

    visibleDepartments: any[] = [];

    ngOnInit() {
    }

    open(employeeId?: number) {
        this.visible = true;
        this.selectedEmployeeId = employeeId || null;
        this.featureCode = '';
        this.selectedDep = '';
        console.log('--- Current User State ---', this.authService.getUser());
        this.buildAvailableDepartments(); // Dynamic build
        this.loadMyEmployees();
    }

    buildAvailableDepartments() {
        this.visibleDepartments = []; // Clear previous departments

        if (this.authService.isAdmin()) {
            // Admin can see/delegate ALL system departments
            this.visibleDepartments = this.departmentLabels.map(d => ({ label: d.label, value: d.value }));
            // Note: Admin should send standard values. Ideally matching backend expectations.
            // Assuming backend expects standard English keys for Admins who might not have 'department' set.
            // If Admin fails, we might need to know what backend expects. But usually Admin has global rights.
            return;
        }

        const user = this.authService.getUser();
        if (!user) {
            this.visibleDepartments = [];
            return;
        }

        const myDeps = new Set<string>();

        // 1. Primary Department
        if (user.department) myDeps.add(user.department);

        // 2. Accessible Departments
        const accessible = user.accessibleDepartments || [];
        if (Array.isArray(accessible)) {
            accessible.forEach(d => myDeps.add(d));
        } else if (typeof accessible === 'string') {
            accessible.split(',').forEach(d => myDeps.add(d.trim()));
        }

        // Build dropdown options ensuring we strictly normalize to PascalCase if known
        this.visibleDepartments = Array.from(myDeps).map(depValue => {
            const normalized = depValue.trim().toLowerCase();
            const alias = this.depAliases[normalized] || normalized;

            // Find valid system definition
            const labelObj = this.departmentLabels.find(l => l.value.toLowerCase() === alias)
                || this.departmentLabels.find(l => l.value.toLowerCase() === normalized);

            return {
                label: labelObj ? labelObj.label : depValue,
                // CRITICAL: Send exactly what the user holds. Now that AuthService preserves case, 
                // this ensures we pass the Backend 'Contains' check regardless of casing convention.
                value: depValue
            };
        });

        console.log('--- Delegate Modal: Built User Departments (Normalized) ---', this.visibleDepartments);
    }

    loadMyEmployees() {
        const currentUser = this.authService.getUser();
        if (!currentUser) return;

        // Backend enforces: employee.Department == supervisor.SupervisedDepartment
        // We must enforce strict matching (ignoring case) to ensure delegation succeeds.
        const supervisorDept = (currentUser.department || '').trim();

        this.userService.getUsers().subscribe({
            next: (users) => {
                // If Admin, show ALL users.
                if (this.authService.isAdmin()) {
                    this.myEmployees = users;
                    return;
                }

                // If Supervisor, filter strictly by department name match
                console.log(`--- Filtering Employees for Supervisor Dept: '${supervisorDept}' ---`);

                this.myEmployees = users.filter(u => {
                    const empDept = (u.department || '').trim();
                    const isDeptMatch = empDept.toLowerCase() === supervisorDept.toLowerCase();
                    const isSelf = u.id === currentUser.id;
                    const isAdminUser = (u.role || '').toLowerCase().includes('admin');

                    if (!isDeptMatch && (empDept || supervisorDept)) {
                        // Log mismatches that might have been caught by aliases before
                        // console.log(`Excluding ${u.fullName}: '${empDept}' != '${supervisorDept}'`);
                    }

                    return isDeptMatch && !isSelf && !isAdminUser;
                });
                console.log(`--- Found ${this.myEmployees.length} employees strictly matching '${supervisorDept}' ---`);
            }
        });
    }

    isValid() {
        return !!this.selectedEmployeeId && ((this.featureCode || '').trim().length > 0 || (this.selectedDep || '').length > 0);
    }

    submit() {
        if (!this.isValid() || !this.selectedEmployeeId) return;

        this.loading = true;

        // 1. Fetch target user's current permissions first to avoid overwriting
        this.userService.getUserById(this.selectedEmployeeId).subscribe({
            next: (targetUser: any) => {
                let currentDeps = targetUser.accessibleDepartments || [];
                let currentFeatures = targetUser.accessibleFeatures || [];

                // Convert to array if string
                if (typeof currentDeps === 'string') currentDeps = (currentDeps as string).split(',').filter(x => !!x);
                if (typeof currentFeatures === 'string') currentFeatures = (currentFeatures as string).split(',').filter(x => !!x);

                // 2. Add new selections if not already present
                if (this.selectedDep && !currentDeps.includes(this.selectedDep)) {
                    currentDeps.push(this.selectedDep);
                }

                if (this.featureCode.trim() && !currentFeatures.includes(this.featureCode.trim())) {
                    currentFeatures.push(this.featureCode.trim());
                }

                // 3. Send combined permissions to backend
                this.permissionService.delegatePermission(
                    this.selectedEmployeeId!,
                    currentDeps.join(','),
                    currentFeatures.join(',')
                ).subscribe({
                    next: () => {
                        this.loading = false;
                        this.swal.success({
                            title: 'تم التفويض بنجاح',
                            text: 'تم منح الصلاحيات مع الحفاظ على الصلاحيات السابقة للموظف.',
                            confirmButtonText: 'ممتاز'
                        });
                        this.visible = false;
                        this.onComplete.emit();
                    },
                    error: (err: any) => {
                        this.loading = false;
                        this.swal.error({
                            title: 'فشل التفويض',
                            text: err.error?.message || 'حدث خطأ أثناء عملية التفويض.',
                            confirmButtonText: 'حسناً'
                        });
                    }
                });
            },
            error: (err) => {
                this.loading = false;
                this.swal.error({ title: 'خطأ', text: 'فشل استرجاع بيانات الموظف لتحديث صلاحياته.' });
            }
        });
    }
}
