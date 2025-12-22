import { Component, signal, ViewChild } from '@angular/core';
import { DashboardAction } from '../../../../models/DashboardAction';
import { DashboardLayout } from '../../../core/dashboard-layout/dashboard-layout';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DailyRestrictions } from '../../components/daily-restrictions/daily-restrictions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LookupModal } from "../../../../shared/components/lookup-modal/lookup-modal";
import { AddClientForm } from "../../components/add-client-form/add-client-form";
import { ExpenseForm } from "../../components/expense-form/expense-form";
import { VoucherForm } from "../../components/voucher-form/voucher-form";
import { ReceiptVoucher } from "../../components/receipt-voucher/receipt-voucher";


@Component({
  selector: 'app-finance-dashboard',
  standalone: true,
  imports: [DashboardLayout, CommonModule, FormsModule, AddClientForm],
  templateUrl: './finance-dashboard.html',
  styleUrl: './finance-dashboard.css',
  providers: [DialogService]
})
export class FinanceDashboard {
  selectedFile: File | null = null;
   activeTab: string = 'basic'; // التاب الافتراضي عند فتح الفورم
   
  showModal = signal(false);
  showExpenseModal = signal(false);
  showVoucherModal = signal(false);
  showReceiptModal = signal(false);
  isSaving = signal(false);
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {}

  actions:DashboardAction[ ] = [
   {title:'سندات الفبض للرابط',type:"navigate",value:"/finance/salary-document"},
   {title:'قيود اليومية ',type:"form",onClick: (dialog) => this.openDailyRestrictions(dialog)},
   {title:'القيود اليومية',type:"navigate",value:"/finance/daily-restrictions"},
   {title:'مراجعة العهد ',type:"navigate",value:"/finance/covenant-review"},
   {title:'التحويل إلي الشركة ',type:"navigate",value:"/finance/transfer-search"},
   {title:'إضافة موكل ',type:"form",onClick: ()=> this.showModal.set(true)},
   {title:'إضافة نوع مصروف',type:"form",onClick: (dialog) => this.openExpenseForm(dialog)},
   {title:'سند صرف',type:"form",onClick: (dialog) => this.openVoucherForm(dialog)},
   {title:'سند قبض',type:"form",onClick: (dialog) => this.openReceiptVoucher(dialog)},
   {title:'حسابات الأرصدة',type:"navigate",value:"/finance/accounts-balances"},
   {title:'الاستعلام عن كشف التصفية',type:"navigate",value:"/finance/filter-detection"},
   {title:'استعلام عن كشوف الموظفين',type:"navigate",value:"/finance/employee-disclosure"},
   {title:'استعلام عن الكشوف المستلمة',type:"navigate",value:"/finance/daily-custody"},
   {title:'عمولات السداد',type:"navigate",value:"/finance/file-commissions"},
   {title:'استعلام عن الكشوف برقم قيد',type:"navigate",value:"/finance/kashf"},
   {title:'ما يتحمله المكتب',type:"navigate",value:"/finance/office-not-load"},
   {title:'السيارات',type:"navigate",value:"/finance/cars"},
   {title:'مقدم و مؤخر العقارات',type:"navigate",value:"/finance/real-estate"},
   {title:'كل العهد الموجودة علي السيستم',type:"navigate",value:"/finance/custody-search"},
   {title:'سند القبض',type:"navigate",value:"/finance/receipt-voucher"},
  ];

 openDailyRestrictions(dialog?: DialogService) {
    if (!dialog) return;
    const ref = dialog.open(DailyRestrictions, {
      header: 'قيود اليومية',
      width: '500px',
      styleClass: 'rounded-lg',
      modal: true
    });
    if (ref) {
      this.ref = ref;
    }
  }

  openExpenseForm(dialog?: DialogService) {
    if (!dialog) return;
    const ref = dialog.open(ExpenseForm, {
      header: 'إضافة نوع مصروف',
      width: '600px',
      styleClass: 'rounded-lg',
      modal: true
    });
    if (ref) {
      this.ref = ref;
    }
  }

  openVoucherForm(dialog?: DialogService) {
    if (!dialog) return;
    const ref = dialog.open(VoucherForm, {
      header: 'سند صرف',
      width: '600px',
      styleClass: 'rounded-lg',
      modal: true,
      data: { isReceipt: false }
    });
    if (ref) {
      this.ref = ref;
    }
  }

  openReceiptVoucher(dialog?: DialogService) {
    if (!dialog) return;
    const ref = dialog.open(ReceiptVoucher, {
      header: 'سند قبض',
      width: '600px',
      styleClass: 'rounded-lg',
      modal: true
    });
    if (ref) {
      this.ref = ref;
    }
  }
}       
