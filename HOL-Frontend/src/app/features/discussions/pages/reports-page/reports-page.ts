import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './reports-page.html',
  styleUrl: './reports-page.css'
})
export class ReportsPage {
  filters = {
    fromDate: '',
    toDate: '',
  };

  tabs = [
    { key: 'migration', label: 'تقرير الترحيل' },
    { key: 'files', label: 'الملفات' },
    { key: 'judgments', label: 'الأحكام' },
  ];

  activeTab = 'migration';

  columns: Record<string, string[]> = {
    migration: [
      'تقرير الترحيل', 'الكود', 'الشبلونة', 'المحكمة', 'تاريخ الجلسة', 'رقم الجلسة',
      'الجلسة', 'رقم القرار', 'القرار', 'اول درجة', 'موضوع الدعوي', 'الدائرة',
      'الدائرة السابقة', 'رقم اول درجة', 'رقم الاستئناف', 'رقم التميز', 'الدور',
      'القاعة', 'الموظف', 'الملاحظات', 'الجلسة القادمة', 'ملاحظات', 'الرقم الالي',
      'الموكل', 'name'
    ],

    files: [
      'المسلسل', 'الشبلونة', 'المحكمة', 'حالة الملف', 'اول درجة', 'موضوع الدعوي',
      'الدائرة', 'الدائرة السابقة', 'رقم اول درجة', 'رقم الاستئناف', 'رقم التميز',
      'الدور', 'الطابق', 'الموظف', 'ملاحظات الملف', 'الرقم الالي', 'الموكل',
      'صفة الموكل', 'الخبراء', 'المستشار', 'الخصم', 'تاريخ الاجراء القادم',
      'القطاع', 'لصالحنا', 'ضدنا', 'لا باس به'
    ],

    judgments: [
      'id', 'المسلسل', 'الكود', 'الخصم', 'الموكل', 'تصنيف الحكم', 'نتيجة الحكم',
      'منطوق الحكم', 'تاريخ الحكم', 'تاريخ الطعن', 'تاريخ التنبيه', 'الشبلونة',
      'المحكمة', 'الرقم الالي', 'اول درجة', 'الاستئناف', 'التمييز'
    ]
  };

  tableData: Record<string, any[]> = {
    migration: [],
    files: [],
    judgments: [],
  };

  get activeTabData() {
    return this.tableData[this.activeTab];
  }

  search(tabKey: string) {
    this.activeTab = tabKey;

    // ⚙️ Dummy data temporarily
    if (tabKey === 'migration') {
      this.tableData['migration'] = Array.from({ length: 3 }).map((_, i) => ({
        'تقرير الترحيل': `ترحيل ${i + 1}`,
        الكود: `C-${1000 + i}`,
        المحكمة: 'محكمة العاصمة',
        الجلسة: 'جلسة مرافعة',
        القرار: 'تأجيل',
        الموظف: 'أحمد',
      }));
      
    } else if (tabKey === 'files') {
       this.tableData['files']= Array.from({ length: 4 }).map((_, i) => ({
        المسلسل: i + 1,
        المحكمة: 'محكمة حولي',
        'موضوع الدعوي': 'نزاع تجاري',
        الموظف: 'خالد',
        'صفة الموكل': 'مدعي',
      }));
    } else if (tabKey === 'judgments') {
      this.tableData['judgments'] = Array.from({ length: 2 }).map((_, i) => ({
        id: i + 1,
        الكود: `H-${3000 + i}`,
        'تصنيف الحكم': 'مدني',
        'نتيجة الحكم': 'مقبول جزئياً',
        'تاريخ الحكم': '2025-11-08',
      }));
    }
  }
}
