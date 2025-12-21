import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-statement-form',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './statement-form.html',
  styleUrl: './statement-form.css'
})
export class StatementForm {
  @Input() mode: 'add' | 'inquiry' = 'add'; 
  @Input() statements: any[] = [];
  @Output() statementsChange = new EventEmitter<any[]>();

  statementForm: FormGroup;
  selectedIndex: number | null = null;
  query = '';


  // ✅ الحقول الأساسية
  fieldList = [
    'reportNumber','company','name','civilId','contractNumber',
    'status','lineNumber','autoNumber','expense','amount',
    'attachments','batchNumber','date'
  ];

  // ✅ التسميات بالعربي
  labels: any = {
    reportNumber: 'رقم الكشف',
    company: 'الشركة',
    name: 'الاسم',
    civilId: 'الرقم المدني',
    contractNumber: 'رقم العقد',
    status: 'الحالة',
    lineNumber: 'رقم الخط',
    autoNumber: 'الرقم الآلي',
    expense: 'المصروف',
    amount: 'المبلغ',
    attachments: 'المرفقات',
    batchNumber: 'رقم الباتش',
    date: 'التاريخ',
    court: 'المحكمة',
    notes: 'ملاحظات'
  };

  courts = ['محكمة العاصمة', 'محكمة الفروانية', 'محكمة حولي', 'محكمة الجهراء', 'محكمة مبارك الكبير'];

  constructor(private fb: FormBuilder) {
    this.statementForm = this.fb.group({
      code: [''],
      reportNumber: [''],
      company: [''],
      name: [''],
      civilId: [''],
      contractNumber: [''],
      status: [''],
      lineNumber: [''],
      autoNumber: [''],
      expense: [''],
      amount: [''],
      attachments: [''],
      batchNumber: [''],
      date: [''],
      court: [''],
      notes: ['']
    });
  }

  // ✅ البحث بالكود
  searchByCode() {
    const code = this.statementForm.get('code')?.value;
    if (!code) return alert('يرجى إدخال الكود للبحث.');
    const found = this.statements.find(s => s.code === code);
    if (found) {
      this.statementForm.patchValue(found);
      this.selectedIndex = this.statements.indexOf(found);
    } else {
      alert('لم يتم العثور على بيانات بهذا الكود.');
    }
  }

  // ✅ حفظ
  save() {
    if (this.statementForm.valid) {
      this.statements.push(this.statementForm.value);
      this.statementsChange.emit(this.statements);
      this.statementForm.reset();
    }
  }

  // ✅ تعديل
  edit() {
    if (this.selectedIndex !== null) {
      this.statements[this.selectedIndex] = this.statementForm.value;
      this.statementsChange.emit(this.statements);
      this.statementForm.reset();
      this.selectedIndex = null;
    } else {
      alert('يرجى البحث عن سجل لتعديله.');
    }
  }

  // ✅ حذف
  delete() {
    if (this.selectedIndex !== null) {
      this.statements.splice(this.selectedIndex, 1);
      this.statementsChange.emit(this.statements);
      this.statementForm.reset();
      this.selectedIndex = null;
    } else {
      alert('لا يوجد سجل محدد للحذف.');
    }
  }

  // ✅ طباعة
  print() {
    window.print();
  }

  // ✅ إعادة تعيين
  reset() {
    this.statementForm.reset();
    this.selectedIndex = null;
  }
  // ✅ حذف عنصر من الجدول
  deleteStatement(i: number) {
    this.statements.splice(i, 1);
  }

  // ✅ حذف السجل المحدد بعد البحث
  deleteSelected() {
    if (this.selectedIndex !== null) {
      this.statements.splice(this.selectedIndex, 1);
      this.statementForm.reset();
      this.selectedIndex = null;
    } else {
      alert('لا يوجد سجل محدد للحذف.');
    }
  }

  // ✅ بحث عام
  search() {
    const q = this.query.trim();
    if (q) {
      this.statements = this.statements.filter(
        s => s.name.includes(q) || s.code.includes(q)
      );
    }
  }

  // ✅ تراجع / إلغاء
  cancel() {
    this.statementForm.reset();
    this.selectedIndex = null;
  }
}
