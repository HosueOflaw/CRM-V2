import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-general-reports',
  imports: [CommonModule,FormsModule],
  templateUrl: './general-reports.html',
  styleUrl: './general-reports.css'
})
export class GeneralReports {
 fromDate: string = '';
  toDate: string = '';
  reportData: any[] = [];

  getReport(type: string) {
    console.log(`تحميل تقرير: ${type}`);
    this.reportData = [
      {
        code: 'C001',
        serial: 1,
        template: 'A-12',
        client: 'شركة النور',
        opponent: 'شركة الظل',
        court: 'محكمة الكويت',
        autoNumber: '12345',
        caseSubject: 'نزاع تجاري',
        judgmentType: 'ابتدائي',
        department: 'الدائرة 2',
        judgmentDate: '2025-10-15',
        appealDeadline: '2025-11-15',
        reminderDate: '2025-11-10',
        judgmentText: 'الحكم لصالح المدعي',
        level: 'أولى',
        attendance: 'نعم',
        firstInstanceNumber: '1001',
        appealNumber: '2001',
        cassationNumber: '3001',
        result: 'تم التنفيذ',
        check: false,
      },
    ];
  }

  downloadExcel() {
    console.log('تحميل البيانات كملف Excel');
  }
}
