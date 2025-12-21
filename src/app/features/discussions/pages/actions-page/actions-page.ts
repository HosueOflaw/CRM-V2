import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-actions-page',
  imports:[CommonModule,FormsModule],
  templateUrl: './actions-page.html',
})
export class ActionsPageComponent {
   formData = {
    court: '',
    role: '',
    decision: '',
    sessionType: '',
    fromDate: '',
    toDate: '',
  };

  courts = [
    { id: 1, name: 'محكمة العاصمة' },
    { id: 2, name: 'محكمة الجهراء' },
  ];

  roles = [
    { id: 1, name: 'مدعي' },
    { id: 2, name: 'مدعى عليه' },
  ];

  decisions = [
    { id: 1, name: 'تأجيل' },
    { id: 2, name: 'إحالة' },
  ];

  sessionTypes = [
    { id: 1, name: 'جلسة مرافعة' },
    { id: 2, name: 'جلسة نطق بالحكم' },
  ];

  tabs = [
    { key: 'محكمة', label: 'جلسات المحكمة' },
    { key: 'خبراء', label: 'جلسات الخبراء' },
    { key: 'إدارية', label: 'الأعمال الإدارية' },
    { key: 'نيابة', label: 'رول النيابة العامة' },
    { key: 'مخافر', label: 'رول المخافر' },
  ];

  activeTab = 'محكمة';

  columns = [
    'المسلسل', 'الشبلونة', 'المحكمة', 'الجلسة', 'حالة الملف', 'تاريخ الافادة',
    'القرار', 'اول درجة', 'موضوع الدعوي', 'الدائرة', 'الدائرة السابقة',
    'رقم اول درجة', 'رقم الاستئناف', 'رقم التميز', 'الدور', 'الطابق',
    'الموظف', 'ملاحظات الملف', 'ملاحظات القرار', 'الجلسة القادمة', 'الصفة',
    'الرقم الالي', 'الموكل', 'صفة الموكل', 'التوقيت', 'الخبراء', 'المستشار'
  ];

  tabData: Record<string, any[]> = {
    محكمة: [],
    خبراء: [],
    إدارية: [],
    نيابة: [],
    مخافر: [],
  };

  get activeTabData() {
    return this.tabData[this.activeTab];
  }

  search(type: string) {
    this.activeTab = type;

    // Dummy Data مؤقتًا
    this.tabData[type] = Array.from({ length: 5 }).map((_, i) => ({
      المسلسل: i + 1,
      المحكمة: 'محكمة العاصمة',
      الجلسة: 'جلسة مرافعة',
      القرار: 'تأجيل',
      الموظف: 'أحمد',
      الصفة: 'مدعي',
    }));
  }
}
