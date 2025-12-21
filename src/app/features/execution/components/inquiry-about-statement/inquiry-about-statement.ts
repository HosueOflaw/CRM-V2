import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inquiry-about-statement',
  imports: [FormsModule,CommonModule],
  templateUrl: './inquiry-about-statement.html',
  styleUrl: './inquiry-about-statement.css'
})
export class InquiryAboutStatement {

  reportNumber: string = '';
  reportData: any = null;

  // داتا افتراضية مؤقتة كمثال
  mockReports = [
    {
      reportNumber: 'R001',
      name: 'محمد العتيبي',
      caseNumber: 'C-2345',
      amount: '12,000 ر.س',
      court: 'محكمة الرياض',
      date: '2025-10-15'
    },
    {
      reportNumber: 'R002',
      name: 'سارة الخالدي',
      caseNumber: 'C-7890',
      amount: '8,500 ر.س',
      court: 'محكمة جدة',
      date: '2025-09-28'
    },
    {
      reportNumber: 'R003',
      name: 'عبدالله القحطاني',
      caseNumber: 'C-1123',
      amount: '5,200 ر.س',
      court: 'محكمة الدمام',
      date: '2025-08-09'
    }
  ];

  // وظيفة البحث عن الكشف
  search(): void {
    if (!this.reportNumber.trim()) {
      alert('الرجاء إدخال رقم الكشف');
      return;
    }

    const found = this.mockReports.find(
      (r) => r.reportNumber.toLowerCase() === this.reportNumber.toLowerCase()
    );

    if (found) {
      this.reportData = found;
    } else {
      this.reportData = null;
      alert('لم يتم العثور على الكشف المطلوب');
    }
  }

  // وظيفة الطباعة
  print(): void {
    if (!this.reportData) {
      alert('لا يوجد بيانات للطباعة');
      return;
    }

    window.print();
  }
}
