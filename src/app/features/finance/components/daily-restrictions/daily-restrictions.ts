import { Component, signal } from '@angular/core';
import { VoucherForm } from '../voucher-form/voucher-form';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExpenseForm } from '../expense-form/expense-form';
import { ReceiptVoucher } from "../receipt-voucher/receipt-voucher";

@Component({
  selector: 'app-daily-restrictions',
  imports: [VoucherForm, CommonModule, ExpenseForm, ReceiptVoucher],
    standalone: true,
  templateUrl: './daily-restrictions.html',
  styleUrl: './daily-restrictions.css'
})
export class DailyRestrictions {

  constructor(private router: Router, public ref: DynamicDialogRef) {}
  
 // الحالة
  showMainForm = true;
  showVoucherForm = false;
  showExpenseTypeForm = false;
  showReceiptVoucherModal = false;
  formType: 'receipt' | 'payment' = 'receipt';

  // فتح فورم سند
  openVoucherForm(type: 'receipt' | 'payment') {
    this.formType = type;
    this.showMainForm = false;
    this.showVoucherForm = true;
  }

  // رجوع إلى الشاشة الأصلية
  backToMainForm() {
    this.showMainForm = true;
    this.showVoucherForm = false;
  }

  // إغلاق كامل
  closeMainForm() {
    this.showMainForm = false;
    this.showVoucherForm = false;
    this.ref.close();
  }

  openExpenseTypeForm() {
  this.showExpenseTypeForm = true;
  this.showMainForm = false;
  }

  closeExpenseTypeForm() {
    this.showExpenseTypeForm = false;
    this.showMainForm = true;
  }

  openReceiptVoucherForm() {
    this.showReceiptVoucherModal = true;
    this.showMainForm = false;
  }

  closeReceiptVoucherForm() {
    this.showReceiptVoucherModal = false;
    this.showMainForm = true;
  }

  onButtonClick(action: string) {
    switch (action) {
      // الصف الأول
      case 'سند قبض':
        this.openVoucherForm('receipt');
        break;
      case 'سند صرف':
        this.openVoucherForm('payment');
        break;
      case 'قيود اليومية':
        this.closeMainForm();
        this.router.navigate(['finance/daily-restrictions']);
        break;

      case 'شجرة الترميز':
        alert('فتح شاشة شجرة الترميز');
        break;

      // الصف الثاني
      case 'عمولات الملفات':
        this.closeMainForm();
        this.router.navigate(['finance/file-commissions']);
        break;
      case 'إضافة نوع مصروف':
        this.openExpenseTypeForm();
        break;

      // الصف الثالث
      case 'أرصدة الحسابات':
        this.closeMainForm();
        this.router.navigate(['finance/accounts-balances']);
        break;
        
      case 'الميزانية العمومية':
        alert('فتح شاشة الميزانية العمومية');
        break;

      // الصف الرابع
      case 'استعلام عن كشف التصفية':
        this.closeMainForm();
        this.router.navigate(['finance/filter-detection']);
        break;

      case 'استعلام عن كشف عهد الموظفين':
        this.closeMainForm();
        this.router.navigate(['finance/employee-disclosure']);
        break;

      // الصف الخامس
      case 'استعلام عن كشف العهد المستلمة':
        this.closeMainForm();
        this.router.navigate(['finance/daily-custody']);
        break;

      case 'استعلام عن الكشوف برقم القيد':
         this.closeMainForm();
         this.router.navigate(['finance/kashf']);
        break;

      // الصف السادس
      case 'مصروفات يتحملها المكتب':
        this.closeMainForm();
        this.router.navigate(['finance/office-not-load']);
        break;

      case 'تصفية السيارات':
          this.closeMainForm();
         this.router.navigate(['finance/cars']);
        break;

      // الصف السابع
      case 'مقدم ومؤخر إيجار العقارات':
            this.closeMainForm();
         this.router.navigate(['finance/real-estate']);
        break;
      case 'كل العهد على السيستم':
                    this.closeMainForm();
          this.router.navigate(['finance/custody-search']);
        break;

      // الصف الثامن
      case 'سند قبض - جديد':
        this.openReceiptVoucherForm();
        break;

      case 'سند صرف - جديد':
        alert('فتح سند صرف جديد');
        break;
      case 'رابط المكتب باكسل':
        alert('تحميل رابط المكتب باكسل');
        break;

      // الصف الأخير
      case 'Cancel':
        break;
    }
}
}