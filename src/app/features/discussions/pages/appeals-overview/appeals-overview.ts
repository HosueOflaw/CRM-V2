import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TabKey = 'appeals' | 'finished' | 'expired';

type DateKeys = 'تاريخ_الحكم' | 'موعد_التنبيه' | 'اخر_موعد_للاستئناف';

@Component({
  selector: 'app-appeals-overview',
  imports: [CommonModule,FormsModule],
  templateUrl: './appeals-overview.html',
  styleUrl: './appeals-overview.css'
})
export class AppealsOverview {
filters = {
    fromDate: '',
    toDate: '',
  };

  
  tabs: { key: TabKey; label: string }[] = [
    { key: 'appeals', label: 'كشف الطعون' },
    { key: 'finished', label: 'الطعون المنتهية' },
    { key: 'expired', label: 'مواعيد انقضت / التنبيهات' },
  ];
  
  activeTab: TabKey = 'appeals';

  columns: Record<TabKey, string[]> = {
    appeals: [
      'الكود','المسلسل','الشبلونة','الموكل','الخصم','المحكمة','الرقم الالي','موضوع الدعوي',
      'نوع الحكم','الدائرة','تاريخ الحكم','اخر موعد للاستئناف','موعد التنبيه',
      'منطوق الحكم','الدرجة','الحضور','رقم اول درجة','رقم الاستئناف','رقم التمييز',
      'النتيجة','check'
    ],
    finished: [
      'id','المسلسل','الشبلونة','الموكل','الخصم','موضوع الدعوي','نوع الحكم','الدائرة',
      'تاريخ الحكم','اخر موعد للاستئناف','موعد التنبيه','منطوق الحكم','الدرجة','الحضور','check'
    ],
    expired: [
      'الكود','المسلسل','الشبلونة','الموكل','الخصم','المحكمة','الرقم الالي','موضوع الدعوي',
      'نوع الحكم','الدائرة','تاريخ الحكم','اخر موعد للاستئناف','موعد التنبيه',
      'منطوق الحكم','الدرجة','الحضور','رقم اول درجة','رقم الاستئناف','رقم التمييز',
      'النتيجة','check'
    ]
  };



  tableData: Record<TabKey, any[]> = { appeals: [], finished: [], expired: [] };

  get activeTableData() {
    return this.tableData[this.activeTab];
  }
   searchBy(type: 'judgmentDate' | 'alertDate' | 'appealDate') {
    const from = new Date(this.filters.fromDate);
    const to = new Date(this.filters.toDate);

    // هنا فقط Dummy Data كمثال
    const allData = [
      {
        الكود: 'C-1001',
        المسلسل: 1,
        الشبلونة: 'شبلونة 1',
        الموكل: 'أحمد',
        الخصم: 'خالد',
        المحكمة: 'محكمة العاصمة',
        الرقم_الي: 'R-2001',
        موضوع_الدعوي: 'نزاع تجاري',
        نوع_الحكم: 'مدني',
        الدائرة: 'الدائرة 1',
        تاريخ_الحكم: '2025-11-08',
        اخر_موعد_للاستئناف: '2025-11-15',
        موعد_التنبيه: '2025-11-14',
        منطوق_الحكم: 'مقبول جزئياً',
        الدرجة: 'اول درجة',
        الحضور: 'متواجد',
        رقم_اول_درجة: 10,
        رقم_الاستئناف: 20,
        رقم_التمييز: 30,
        النتيجة: 'نجاح',
        check: false
      },
    ];

   
      let key: DateKeys;
      if (type === 'judgmentDate') key = 'تاريخ_الحكم';
      else if (type === 'alertDate') key = 'موعد_التنبيه';
      else key = 'اخر_موعد_للاستئناف';

   this.tableData[this.activeTab] = allData.filter(item => {
    const itemDate = new Date(item[key]); // الآن TypeScript لا يشكو
    return itemDate >= from && itemDate <= to;
  });
  }
}
