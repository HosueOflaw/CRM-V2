import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-form.html',
  styleUrl: './expense-form.css'
})
export class ExpenseForm {
  ref = inject(DynamicDialogRef, { optional: true });

  @Output() cancel = new EventEmitter<void>();

  // فتح واختيار النوافذ الصغيرة
  showExpenseTypePicker = false;
  showExpenseAccountPicker = false;
  showIncomeTypePicker = false;
  showIncomeAccountPicker = false;

  // القيم المختارة
  selectedExpenseType = '';
  selectedExpenseAccount = '';
  selectedIncomeType = '';
  selectedIncomeAccount = '';

  expenseTypes = ['مواصلات', 'صيانة', 'إيجار', 'وقود'];
  accounts = ['1001 - البنك', '2001 - الصندوق', '3100 - مصروفات تشغيل'];
  incomeTypes = ['رسوم', 'عمولة', 'دخل إضافي'];

  // إغلاق الصفحة
  closeForm() {
    if (this.ref) {
      this.ref.close();
    } else {
      this.cancel.emit();
    }
  }

  selectExpenseType(type: string) {
    this.selectedExpenseType = type;
    this.showExpenseTypePicker = false;
  }

  selectExpenseAccount(acc: string) {
    this.selectedExpenseAccount = acc;
    this.showExpenseAccountPicker = false;
  }

  selectIncomeType(type: string) {
    this.selectedIncomeType = type;
    this.showIncomeTypePicker = false;
  }

  selectIncomeAccount(acc: string) {
    this.selectedIncomeAccount = acc;
    this.showIncomeAccountPicker = false;
  }
}
