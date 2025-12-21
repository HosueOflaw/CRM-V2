import { CommonModule } from '@angular/common';
import { Component,  ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTable } from '../../components/shared/data-table/data-table';

@Component({
  selector: 'app-execution-statements-page',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,DataTable],
  templateUrl: './execution-statements-page.html',
  styleUrl: './execution-statements-page.css'
})
export class ExecutionStatementsPage {
   columns = [
    { header: 'الكود', field: 'code' },
    { header: 'الموكل', field: 'client' },
    { header: 'الاسم', field: 'name' },
    { header: 'المحكمة', field: 'court' },
    { header: 'منطوق الحكم', field: 'judgmentText' },
    { header: 'قيمة المطالبة', field: 'claimValue' },
    { header: 'الموظف', field: 'employee' },
    { header: 'الحالة', field: 'status' },
  ];

  results = [
    { code: 'A101', client: 'أحمد علي', name: 'دعوى 123', court: 'محكمة التنفيذ', judgmentText: 'قبول الدعوى', claimValue: 1000, employee: 'سعاد', status: 'مستلم' },
    { code: 'A102', client: 'سارة محمد', name: 'دعوى 456', court: 'محكمة الأسرة', judgmentText: 'رفض الدعوى', claimValue: 2000, employee: 'علي', status: 'قيد النظر' },
  ];

  lookupConfig = {
    title: '🏛️ اختر المحكمة',
    columns: ['name', 'city', 'type'],
    data: [
      { name: 'محكمة التنفيذ', city: 'الرياض', type: 'عامة' },
      { name: 'محكمة الأسرة', city: 'جدة', type: 'خاصة' },
    ],
    targetField: 'name',
  };
}
