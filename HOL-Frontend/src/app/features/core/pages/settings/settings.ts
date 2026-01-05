import { Component, OnInit, ViewChild, Renderer2, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoBack } from '../../../../shared/components/go-back/go-back';
import { LayoutService, layoutConfig } from '../../../../layout/service/layout.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { UserService } from '../../../../services/user.service';
import { PrimeToastService } from '../../../../shared/services/prime-toast.service';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    GoBack,
    InputTextModule,
    ButtonModule,
    FormsModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    DatePipe,
  ],
  providers: [ConfirmationService],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  // 🧩 النماذج
  form: FormGroup;
  newUserForm: FormGroup;

  // 💾 متغيرات عامة
  showNewUserForm = false;
  isEditUser = false;
  selectedUser: any = null;
  uploadedFileName: string | null = null;

  // 👤 بيانات المستخدم الحالي
  currentUser: any = null;

  // 👥 متغيرات المستخدمين
  users: any[] = [];
  filteredUsers: any[] = [];
  showUsersTable = false;
  loadingUsers = false;
  searchText = '';

  // 📚 بيانات المجموعات
  groups = [
    'ACC',
    'CAIRO',
    'ADVISER',
    'ALEX',
    'CAIRO 2',
    'GROUP 0',
    'MSO',
    'NESTING',
    'NON',
    'REP',
    'SEC',
    'THE FUTURE',
    'WAIVER',
    'البدالة',
  ];

  // الصلاحيات
  showPermissions = false;
  permissionForm: FormGroup;
  selectedUserForPermissions: any = null;

  // 🏢 الأقسام
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

  togglePermissions() {
    this.showPermissions = !this.showPermissions;
    if (this.showPermissions && this.users.length === 0) {
      // Fetch users silently without showing the table
      this.loadUsers(false, false, false);
    }
    this.updateSidebarBlur();
  }

  onUserSelect(event: any) {
    const userId = event.target.value;
    this.selectedUserForPermissions = this.users.find(u => u.id == userId);

    if (this.selectedUserForPermissions) {
      this.permissionForm.patchValue({
        userId: this.selectedUserForPermissions.id,
        role: this.selectedUserForPermissions.role,
        department: this.selectedUserForPermissions.department || ''
      });
    }
  }

  saveUserPermissions() {
    if (this.permissionForm.invalid) {
      this.toast.error('يرجى اختيار موظف', 'خطأ');
      return;
    }

    const { userId, role, department } = this.permissionForm.value;

    this.userService.updateUser(userId, { role, department }).subscribe({
      next: () => {
        this.toast.success('تم تحديث الصلاحيات بنجاح', 'نجاح');
        this.loadUsers(false, true, false); // Refresh users list silently
        this.togglePermissions();
      },
      error: (err) => {
        const msg = err.error?.message || 'حدث خطأ أثناء تحديث الصلاحيات';
        this.toast.error(msg, 'خطأ');
      }
    });
  }

  get employeeUsers() {
    return this.users.filter(u => u.role?.toLowerCase() === 'employee');
  }

  constructor(
    private fb: FormBuilder,
    private layoutService: LayoutService,
    private userService: UserService,
    private toast: PrimeToastService,
    private confirmationService: ConfirmationService,
    private renderer: Renderer2,
    public authService: AuthService
  ) {
    // ⚙️ نموذج الإعدادات العامة
    this.form = this.fb.group({
      displayName: [''],
      email: ['', [Validators.email]],
      language: ['ar'],
      darkMode: [false],
      notifications: [true],
    });

    // 👤 نموذج المستخدم الجديد
    this.newUserForm = this.fb.group({
      code: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      fullName: ['', Validators.required],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['User', Validators.required],
      department: [''],
      group: [''],
      active: ['active'],
      phone: [''],
      hireDate: [''],
    });

    // 🔒 نموذج تغيير كلمة المرور
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    // 🔐 نموذج الصلاحيات
    this.permissionForm = this.fb.group({
      userId: ['', Validators.required],
      role: [''],
      department: ['']
    });

    this.load();
    this.loadCurrentUser();
  }

  ngOnInit() {
    // Sync dark mode with LayoutService
    const currentDarkMode = this.layoutService.isDarkTheme();
    this.form.patchValue({ darkMode: currentDarkMode });

    // Watch for dark mode changes - Auto save
    this.form.get('darkMode')?.valueChanges.subscribe((value) => {
      this.layoutService.layoutConfig.update((state: layoutConfig) => ({
        ...state,
        darkTheme: value,
      }));
      this.saveSettings(); // Auto save
    });

    // Watch for notifications changes - Auto save
    this.form.get('notifications')?.valueChanges.subscribe(() => {
      this.saveSettings(); // Auto save
    });

    // Watch for display name changes - Auto save
    this.form.get('displayName')?.valueChanges.subscribe(() => {
      this.saveSettings(); // Auto save
    });

    // Watch for email changes - Auto save
    this.form.get('email')?.valueChanges.subscribe(() => {
      this.saveSettings(); // Auto save
    });
  }

  // 🔄 عرض/إخفاء فورم المستخدم الجديد
  toggleNewUserForm() {
    const wasEditing = this.isEditUser;
    this.showNewUserForm = !this.showNewUserForm;
    if (!this.showNewUserForm) {
      this.isEditUser = false;
      this.selectedUser = null;
      this.newUserForm.reset({
        role: 'User',
        active: 'active'
      });
      // Ensure password validator is present when not editing
      this.newUserForm.get('password')?.setValidators([Validators.required, Validators.minLength(6)]);

      // If we were editing, return to the table
      if (wasEditing) {
        this.showUsersTable = true;
      }
    }
    this.updateSidebarBlur();
  }

  // 👤 جلب بيانات المستخدم الحالي
  loadCurrentUser() {
    this.currentUser = this.authService.getUser();
  }

  // 🔒 تغيير كلمة المرور
  showChangePasswordPopup = false;
  changePasswordForm: FormGroup;

  // ... (previous code)



  // ✅ التحقق من تطابق كلمتي المرور
  passwordMatchValidator(g: FormGroup) {
    return g.get('newPassword')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  // 🔄 عرض/إخفاء نافذة تغيير كلمة المرور
  toggleChangePasswordPopup() {
    this.showChangePasswordPopup = !this.showChangePasswordPopup;
    if (!this.showChangePasswordPopup) {
      this.changePasswordForm.reset();
    }
    this.updateSidebarBlur();
  }

  // 💾 حفظ كلمة المرور الجديدة
  saveChangePassword() {
    if (this.changePasswordForm.invalid) {
      this.changePasswordForm.markAllAsTouched();
      return;
    }

    const { oldPassword, newPassword } = this.changePasswordForm.value;

    // Create the DTO object
    const changePasswordDto = {
      userId: this.currentUser?.id,
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmNewPassword: newPassword
    };

    if (!changePasswordDto.userId) {
      this.toast.error('لم يتم العثور على معرف المستخدم', 'خطأ');
      return;
    }

    this.userService.changePassword(changePasswordDto).subscribe({
      next: (res: any) => {
        this.toast.success('تم تغيير كلمة المرور بنجاح', 'نجح');
        this.toggleChangePasswordPopup();
      },
      error: (err) => {
        const msg = err.error?.message || 'حدث خطأ أثناء تغيير كلمة المرور';
        this.toast.error(msg, 'خطأ');
      }
    });
  }

  // 🎨 تطبيق/إزالة blur على الـ sidebar
  updateSidebarBlur() {
    const isAnyModalOpen = this.showNewUserForm || this.showPermissions || this.showChangePasswordPopup;
    if (isAnyModalOpen) {
      this.renderer.addClass(document.body, 'modal-open-sidebar-blur');
    } else {
      this.renderer.removeClass(document.body, 'modal-open-sidebar-blur');
    }
  }

  // ... (rest of the component)


  ngOnDestroy() {
    // إزالة blur class عند تدمير الـ component
    this.renderer.removeClass(document.body, 'modal-open-sidebar-blur');
  }

  // 💾 حفظ الإعدادات العامة تلقائياً
  private saveSettings() {
    localStorage.setItem('app_settings', JSON.stringify(this.form.value));
  }

  // ♻️ إعادة الإعدادات الافتراضية
  reset() {
    this.form.reset({
      displayName: '',
      email: '',
      language: 'ar',
      darkMode: false,
      notifications: true,
    });
    localStorage.removeItem('app_settings');
    // this.savedAt = null;
  }

  // 📥 تحميل الإعدادات من LocalStorage
  load() {
    const data = localStorage.getItem('app_settings');
    if (data) {
      try {
        const settings = JSON.parse(data);
        this.form.patchValue(settings);
        // Sync dark mode with LayoutService
        if (settings.darkMode !== undefined) {
          this.layoutService.layoutConfig.update((state: layoutConfig) => ({
            ...state,
            darkTheme: settings.darkMode,
          }));
        }
      } catch (e) {
        console.error('❌ خطأ في قراءة الإعدادات:', e);
      }
    }
  }

  // 📂 اختيار ملف PDF
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        this.uploadedFileName = file.name;
        console.log('📄 تم اختيار الملف:', file);
      } else {
        alert('⚠️ من فضلك اختر ملف PDF فقط');
      }
    }
  }

  // 👨‍💼 حفظ بيانات المستخدم (إضافة أو تعديل)
  saveNewUser() {
    // تعليم جميع الحقول كـ touched لعرض أخطاء validation
    if (this.newUserForm.invalid) {
      Object.keys(this.newUserForm.controls).forEach(key => {
        const control = this.newUserForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
      this.toast.warning('من فضلك أكمل جميع الحقول المطلوبة', 'تحذير');
      return;
    }

    const formValue = this.newUserForm.value;

    // تحضير البيانات
    const userData: any = {
      username: formValue.username,
      fullName: formValue.fullName,
      email: formValue.email || '',
      role: formValue.role || 'User',
      department: formValue.department,
      active: formValue.active,
      phone: formValue.phone,
      hireDate: formValue.hireDate,
      group: formValue.group
    };

    if (formValue.code) userData.code = parseInt(formValue.code);
    if (formValue.password) userData.password = formValue.password;

    if (this.isEditUser && this.selectedUser) {
      // ✏️ تحديث مستخدم موجود
      this.userService.updateUser(this.selectedUser.id, userData).subscribe({
        next: () => {
          this.toast.success('تم تحديث بيانات المستخدم بنجاح', 'نجح!');
          this.finishUserForm();
        },
        error: (error) => {
          this.toast.error(error.error?.message || 'خطأ أثناء التحديث', 'خطأ');
        }
      });
    } else {
      // ➕ إضافة مستخدم جديد
      this.userService.createUser(userData).subscribe({
        next: () => {
          this.toast.success('تم إضافة المستخدم بنجاح', 'نجح!');
          this.finishUserForm();
        },
        error: (error) => {
          this.toast.error(error.error?.message || 'خطأ أثناء الإضافة', 'خطأ');
        }
      });
    }
  }

  private finishUserForm() {
    const shouldReopenTable = this.isEditUser;
    this.newUserForm.reset();
    this.showNewUserForm = false;
    this.isEditUser = false;
    this.selectedUser = null;
    this.updateSidebarBlur();
    this.loadUsers(false, true, shouldReopenTable); // Re-open table if we were editing
  }


  // 👥 جلب جميع المستخدمين (مع Cache تلقائي)
  loadUsers(showToast: boolean = true, forceRefresh: boolean = false, showTable: boolean = true) {
    this.loadingUsers = true;
    if (showTable) {
      this.showUsersTable = true;
    }

    // استخدام Cache Service - سيستخدم Cache إذا موجود، أو يعمل request جديد
    this.userService.getUsers(forceRefresh).subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = users;
        this.loadingUsers = false;
        if (showToast) {
          const cacheStatus = forceRefresh ? ' (تم التحديث من السيرفر)' : ' (من الـ Cache)';
          this.toast.success(`تم جلب ${users.length} مستخدم بنجاح${!forceRefresh ? cacheStatus : ''}`, 'نجح!', {
            life: 1500
          });
        }
      },
      error: (error) => {
        this.loadingUsers = false;
        const errorMsg = error.error?.error || error.error?.message || 'حدث خطأ أثناء جلب المستخدمين';
        this.toast.error(errorMsg, 'خطأ');
      }
    });
  }

  // 🔍 فلترة المستخدمين
  filterUsers() {
    if (!this.searchText || this.searchText.trim() === '') {
      this.filteredUsers = [...this.users];
      return;
    }

    const searchLower = this.searchText.toLowerCase().trim();
    this.filteredUsers = this.users.filter(user =>
      (user.username?.toLowerCase().includes(searchLower)) ||
      (user.fullName?.toLowerCase().includes(searchLower)) ||
      (user.email?.toLowerCase().includes(searchLower)) ||
      (user.role?.toLowerCase().includes(searchLower)) ||
      (user.id?.toString().includes(searchLower))
    );
  }

  // 🎨 الحصول على لون الدور
  getRoleColor(role: string | undefined): string {
    if (!role) return '#6b7280';
    const roleColors: { [key: string]: string } = {
      'admin': '#ef4444',
      'Admin': '#ef4444',
      'employee': '#3b82f6',
      'Employee': '#3b82f6',
      'user': '#10b981',
      'User': '#10b981',
    };
    return roleColors[role] || '#6b7280';
  }

  // 🏷️ الحصول على اسم القسم
  getDepartmentLabel(value: string | undefined): string {
    if (!value) return '-';
    // البحث في مصفوفة الكائنات
    const dept = this.departments.find(d => d.value === value);
    return dept ? dept.label : value;
  }

  // ✏️ تعديل بيانات الموظف (البيانات الشخصية)
  editUser(user: any) {
    this.isEditUser = true;
    this.selectedUser = user;
    this.showUsersTable = false; // Close users table dialog

    this.newUserForm.patchValue({
      code: user.code,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      department: user.department,
      group: user.group,
      active: user.active || 'active',
      phone: user.phone,
      hireDate: user.hireDate ? new Date(user.hireDate).toISOString().substring(0, 10) : ''
    });

    // Password is not required when editing unless the user wants to change it
    this.newUserForm.get('password')?.clearValidators();
    this.newUserForm.get('password')?.updateValueAndValidity();

    this.showNewUserForm = true;
    this.updateSidebarBlur();
  }

  // 🗑️ حذف مستخدم
  deleteUser(userId: number) {
    this.confirmationService.confirm({
      message: 'هل أنت متأكد من حذف هذا المستخدم؟',
      header: 'تأكيد الحذف',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      acceptLabel: 'نعم، احذف',
      rejectLabel: 'إلغاء',
      accept: () => {
        this.userService.deleteUser(userId).subscribe({
          next: () => {
            this.toast.success('تم حذف المستخدم بنجاح', 'نجاح!', {
              life: 2000
            });
            // إعادة تحميل المستخدمين مع forceRefresh لأن البيانات تغيرت
            this.loadUsers(false, true, this.showUsersTable);
          },
          error: (error) => {
            const errorMsg = error.error?.error || error.error?.message || 'حدث خطأ أثناء حذف المستخدم';
            this.toast.error(errorMsg, 'خطأ');
          }
        });
      }
    });
  }
}
