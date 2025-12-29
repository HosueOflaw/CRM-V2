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
import { UserService } from '../../../../services/user.service';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';

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
    DatePipe,
  ],
  templateUrl: './settings.html',
  styleUrls: ['./settings.css'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  // 🧩 النماذج
  form: FormGroup;
  newUserForm: FormGroup;
  editUserForm: FormGroup;

  // 💾 متغيرات عامة
  savedAt: string | null = null;
  showNewUserForm = false;
  showEditUserForm = false;
  uploadedFileName: string | null = null;
  
  // 👥 متغيرات المستخدمين
  users: any[] = [];
  filteredUsers: any[] = [];
  showUsersTable = false;
  loadingUsers = false;
  searchText = '';
  editingUserId: number | null = null; // ID المستخدم الذي يتم تعديله

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

  // ✅ عرّف نوع العناصر هنا
  permissions: { department: string; role: string }[] = [
    { department: 'الإدارة المالية', role: 'قراءة فقط' },
    { department: 'الاتصالات', role: 'تحكم كامل' }
  ];

  // Language options
  languageOptions = [
    { label: 'العربية', value: 'ar' },
  ];

  togglePermissions() {
    this.showPermissions = !this.showPermissions;
    this.updateSidebarBlur();
  }

  constructor(
    private fb: FormBuilder, 
    private layoutService: LayoutService,
    private userService: UserService,
    private swal: SweetAlertService,
    private renderer: Renderer2
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
      code: [''],
      username: ['', [Validators.required, Validators.minLength(3)]],
      latinName: [''],
      arabicName: [''],
      fullName: ['', Validators.required],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['User', Validators.required],
      group: [''],
      active: ['active'],
      phone: [''],
      hireDate: [''],
    });

    // ✏️ نموذج تعديل المستخدم
    this.editUserForm = this.fb.group({
      code: [''],
      username: ['', [Validators.required, Validators.minLength(3)]],
      fullName: ['', Validators.required],
      email: ['', [Validators.email]],
      role: ['User', Validators.required],
      oldPassword: [''], // اختياري - فقط إذا أراد تغيير كلمة المرور
      newPassword: [''],
      confirmPassword: [''],
    });

    this.load();
  }

  ngOnInit() {
    // Sync dark mode with LayoutService
    const currentDarkMode = this.layoutService.isDarkTheme();
    this.form.patchValue({ darkMode: currentDarkMode });

    // Watch for dark mode changes
    this.form.get('darkMode')?.valueChanges.subscribe((value) => {
      this.layoutService.layoutConfig.update((state: layoutConfig) => ({
        ...state,
        darkTheme: value,
      }));
    });
  }

  // 🔄 عرض/إخفاء فورم المستخدم الجديد
  toggleNewUserForm() {
    this.showNewUserForm = !this.showNewUserForm;
    this.updateSidebarBlur();
  }

  // 🔄 عرض/إخفاء فورم تعديل المستخدم
  toggleEditUserForm() {
    this.showEditUserForm = !this.showEditUserForm;
    this.showNewUserForm = false;
    this.updateSidebarBlur();
  }

  // 🎨 تطبيق/إزالة blur على الـ sidebar
  updateSidebarBlur() {
    const isAnyModalOpen = this.showNewUserForm || this.showEditUserForm || this.showPermissions;
    if (isAnyModalOpen) {
      this.renderer.addClass(document.body, 'modal-open-sidebar-blur');
    } else {
      this.renderer.removeClass(document.body, 'modal-open-sidebar-blur');
    }
  }

  ngOnDestroy() {
    // إزالة blur class عند تدمير الـ component
    this.renderer.removeClass(document.body, 'modal-open-sidebar-blur');
  }

  // 💾 حفظ الإعدادات العامة
  save() {
    localStorage.setItem('app_settings', JSON.stringify(this.form.value));
    this.savedAt = new Date().toLocaleString();
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
    this.savedAt = null;
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

  // 👨‍💼 حفظ مستخدم جديد
  saveNewUser() {
    if (this.newUserForm.invalid) {
      this.swal.warning({
        title: 'تحذير',
        text: 'من فضلك أكمل جميع الحقول المطلوبة',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    const formValue = this.newUserForm.value;
    
    // تحضير البيانات للباك إند
    const userData: any = {
      username: formValue.username,
      fullName: formValue.fullName || formValue.arabicName || formValue.latinName,
      email: formValue.email || '',
      role: formValue.role || 'User',
      password: formValue.password
    };

    // إضافة CODE إذا كان موجود
    if (formValue.code && formValue.code !== '' && formValue.code !== null) {
      const codeValue = parseInt(formValue.code);
      if (!isNaN(codeValue)) {
        userData.code = codeValue;
      }
    }

    // إرسال للباك إند
    this.userService.createUser(userData).subscribe({
      next: (response) => {
        this.swal.success({
          title: 'نجح!',
          text: 'تم حفظ المستخدم الجديد بنجاح',
          timer: 2000,
          showConfirmButton: false
        });
    this.newUserForm.reset();
    this.showNewUserForm = false;
        this.updateSidebarBlur();
      },
      error: (error) => {
        const errorMsg = error.error?.error || error.error?.message || 'حدث خطأ أثناء حفظ المستخدم';
        this.swal.error({
          title: 'خطأ',
          text: errorMsg,
          confirmButtonText: 'حسناً'
        });
      }
    });
  }

  // ✏️ حفظ تعديل المستخدم
  saveEditUser() {
    if (!this.editingUserId) {
      this.swal.error({
        title: 'خطأ',
        text: 'لم يتم تحديد المستخدم للتعديل',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    if (this.editUserForm.invalid) {
      this.swal.warning({
        title: 'تحذير',
        text: 'من فضلك أكمل جميع الحقول المطلوبة',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    const formValue = this.editUserForm.value;
    const { newPassword, confirmPassword, oldPassword } = formValue;

    // التحقق من كلمة المرور إذا تم إدخالها
    if (newPassword || confirmPassword || oldPassword) {
      if (!oldPassword || !newPassword || !confirmPassword) {
        this.swal.warning({
          title: 'تحذير',
          text: 'يجب إدخال كلمة المرور القديمة والجديدة وتأكيدها',
          confirmButtonText: 'حسناً'
        });
        return;
      }

    if (newPassword !== confirmPassword) {
        this.swal.error({
          title: 'خطأ',
          text: 'كلمة المرور الجديدة غير متطابقة',
          confirmButtonText: 'حسناً'
        });
      return;
    }

      if (newPassword.length < 6) {
        this.swal.warning({
          title: 'تحذير',
          text: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل',
          confirmButtonText: 'حسناً'
        });
        return;
      }
    }

    // تحضير بيانات التعديل
    const updateData: any = {
      username: formValue.username,
      fullName: formValue.fullName,
      email: formValue.email || '',
      role: formValue.role || 'User',
    };

    // إضافة CODE إذا كان موجود
    if (formValue.code && formValue.code !== '' && formValue.code !== null) {
      const codeValue = parseInt(formValue.code);
      if (!isNaN(codeValue)) {
        updateData.code = codeValue;
      }
    }

    // تحديث بيانات المستخدم
    const userId = this.editingUserId; // حفظ القيمة في متغير محلي
    if (!userId) {
      this.swal.error({
        title: 'خطأ',
        text: 'لم يتم تحديد المستخدم للتعديل',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    this.userService.updateUser(userId, updateData).subscribe({
      next: () => {
        // إذا تم إدخال كلمة مرور جديدة، قم بتغييرها
        if (newPassword && oldPassword && userId) {
          this.userService.changePassword(userId, oldPassword, newPassword).subscribe({
            next: () => {
              this.swal.success({
                title: 'نجح!',
                text: 'تم تحديث بيانات المستخدم وكلمة المرور بنجاح',
                timer: 2000,
                showConfirmButton: false
              });
              this.editUserForm.reset();
              this.editingUserId = null;
              this.showEditUserForm = false;
              this.updateSidebarBlur();
              this.loadUsers(); // إعادة تحميل المستخدمين
            },
            error: (error) => {
              const errorMsg = error.error?.error || error.error?.message || 'حدث خطأ أثناء تغيير كلمة المرور';
              this.swal.error({
                title: 'خطأ',
                text: errorMsg,
                confirmButtonText: 'حسناً'
              });
            }
          });
        } else {
          this.swal.success({
            title: 'نجح!',
            text: 'تم تحديث بيانات المستخدم بنجاح',
            timer: 2000,
            showConfirmButton: false
          });
    this.editUserForm.reset();
          this.editingUserId = null;
    this.showEditUserForm = false;
          this.updateSidebarBlur();
          this.loadUsers(); // إعادة تحميل المستخدمين
        }
      },
      error: (error) => {
        const errorMsg = error.error?.error || error.error?.message || 'حدث خطأ أثناء تحديث المستخدم';
        this.swal.error({
          title: 'خطأ',
          text: errorMsg,
          confirmButtonText: 'حسناً'
        });
      }
    });
  }

  // 👥 جلب جميع المستخدمين
  loadUsers() {
    this.loadingUsers = true;
    this.showUsersTable = true;

    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.filteredUsers = users;
        this.loadingUsers = false;
        this.swal.success({
          title: 'نجح!',
          text: `تم جلب ${users.length} مستخدم بنجاح`,
          timer: 1500,
          showConfirmButton: false
        });
      },
      error: (error) => {
        this.loadingUsers = false;
        const errorMsg = error.error?.error || error.error?.message || 'حدث خطأ أثناء جلب المستخدمين';
        this.swal.error({
          title: 'خطأ',
          text: errorMsg,
          confirmButtonText: 'حسناً'
        });
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

  // ✏️ تعديل مستخدم
  editUser(user: any) {
    this.editingUserId = user.id;
    
    // جلب بيانات المستخدم الكاملة من الباك إند
    this.userService.getUserById(user.id).subscribe({
      next: (userData) => {
        this.editUserForm.patchValue({
          code: userData.code || '',
          username: userData.username || '',
          fullName: userData.fullName || '',
          email: userData.email || '',
          role: userData.role || 'User',
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
        this.showEditUserForm = true;
        this.showUsersTable = false;
        this.updateSidebarBlur();
      },
      error: (error) => {
        const errorMsg = error.error?.error || error.error?.message || 'حدث خطأ أثناء جلب بيانات المستخدم';
        this.swal.error({
          title: 'خطأ',
          text: errorMsg,
          confirmButtonText: 'حسناً'
        });
      }
    });
  }

  // 🗑️ حذف مستخدم
  deleteUser(userId: number) {
    this.swal.question({
      title: 'تأكيد الحذف',
      text: 'هل أنت متأكد من حذف هذا المستخدم؟',
      confirmButtonText: 'نعم، احذف',
      cancelButtonText: 'إلغاء',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(userId).subscribe({
          next: () => {
            this.swal.success({
              title: 'نجح!',
              text: 'تم حذف المستخدم بنجاح',
              timer: 2000,
              showConfirmButton: false
            });
            // إعادة تحميل المستخدمين
            this.loadUsers();
          },
          error: (error) => {
            const errorMsg = error.error?.error || error.error?.message || 'حدث خطأ أثناء حذف المستخدم';
            this.swal.error({
              title: 'خطأ',
              text: errorMsg,
              confirmButtonText: 'حسناً'
            });
          }
        });
      }
    });
  }
}
