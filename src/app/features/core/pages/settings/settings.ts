import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoBack } from '../../../../shared/components/go-back/go-back';
import { LayoutService, layoutConfig } from '../../../../layout/service/layout.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

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
  ],
  templateUrl: './settings.html',
})
export class SettingsComponent implements OnInit {
  // 🧩 النماذج
  form: FormGroup;
  newUserForm: FormGroup;
  editUserForm: FormGroup;

  // 💾 متغيرات عامة
  savedAt: string | null = null;
  showNewUserForm = false;
  showEditUserForm = false;
  uploadedFileName: string | null = null;

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
    { label: 'English', value: 'en' }
  ];

  togglePermissions() {
    this.showPermissions = !this.showPermissions;
  }

  constructor(private fb: FormBuilder, private layoutService: LayoutService) {
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
      latinName: ['', Validators.required],
      arabicName: ['', Validators.required],
      password: ['', Validators.required],
      group: ['', Validators.required],
      active: ['active'],
      phone: [''],
      hireDate: [''],
    });

    // ✏️ نموذج تعديل المستخدم
    this.editUserForm = this.fb.group({
      arabicName: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone: [''],
      internal: [''],
      active: ['active'],
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
  }

  // 🔄 عرض/إخفاء فورم تعديل المستخدم
  toggleEditUserForm() {
    this.showEditUserForm = !this.showEditUserForm;
    this.showNewUserForm = false;
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
      alert('⚠️ من فضلك أكمل جميع الحقول المطلوبة');
      return;
    }

    const userData = this.newUserForm.value;
    console.log('✅ بيانات المستخدم الجديد:', userData);

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    alert('✅ تم حفظ المستخدم الجديد بنجاح');
    this.newUserForm.reset();
    this.showNewUserForm = false;
  }

  // ✏️ حفظ تعديل المستخدم
  saveEditUser() {
    if (this.editUserForm.invalid) {
      alert('⚠️ من فضلك أكمل جميع الحقول');
      return;
    }

    const { newPassword, confirmPassword } = this.editUserForm.value;

    if (newPassword !== confirmPassword) {
      alert('❌ كلمة المرور الجديدة غير متطابقة');
      return;
    }

    const editedData = {
      ...this.editUserForm.value,
      uploadedFileName: this.uploadedFileName,
    };

    console.log('✏️ بيانات المستخدم المعدلة:', editedData);

    alert('✅ تم تعديل بيانات المستخدم بنجاح');
    this.editUserForm.reset();
    this.uploadedFileName = null;
    this.showEditUserForm = false;
  }
}
