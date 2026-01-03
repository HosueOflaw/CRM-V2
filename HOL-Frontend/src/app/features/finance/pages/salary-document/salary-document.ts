import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface Receipt {
  code: string;
  name: string;
  reason_due: string;
  civil_id: string;
  contract_num: string;
  claim_value: number;
  batch_no: string;
  sub_client: string;
  fees: number;
  total: number;
  case_status: string;
  paid: number;
  legal_claimant: string;
  remaining: number;
  auto_num: string;
}

interface Transaction {
  code: string;
  name: string;
  reason_due: string;
  batch_no: string;
  client: string;
  contract_num: string;
  _case: string;
  _national: string;
  civil_id: string;
  sub_customer: string;
  total: number;
  total_pay: number;
  code_client: string;
  employee: string;
  expr1: string;
  auto_num: string;
}

@Component({
  selector: 'app-salary-document',
  imports: [CommonModule,ReactiveFormsModule,FormsModule], 
  templateUrl: './salary-document.html',
  styleUrl: './salary-document.css'
})
export class SalaryDocument {
 searchCode: string = '';
  receiptData: Receipt | null = null;
  receiptTransactions: Transaction[] = [];
  selectedRecord: any = null; // ← أضف السطر ده

  constructor(    private router: Router,) {}

  // دالة البحث عن السند بالـ code
  searchReceipt() {
    // ⚙️ Dummy data مؤقت
    this.receiptData = {
      code: this.searchCode,
      name: 'أحمد علي',
      reason_due: 'فاتورة خدمات',
      civil_id: '123456789',
      contract_num: 'C-1001',
      claim_value: 5000,
      batch_no: 'B-001',
      sub_client: 'موكل فرعي 1',
      fees: 100,
      total: 5100,
      case_status: 'قيد التنفيذ',
      paid: 3000,
      legal_claimant: 'شركة القانون',
      remaining: 2100,
      auto_num: 'A-1001'
    };

    // Dummy transactions
    this.receiptTransactions = Array.from({ length: 5 }).map((_, i) => ({
      code: `R-${i+1}`,
      name: 'أحمد علي',
      reason_due: 'فاتورة خدمات',
      batch_no: `B-00${i+1}`,
      client: 'العميل 1',
      contract_num: `C-100${i}`,
      _case: 'Case 1',
      _national: 'National 1',
      civil_id: '123456789',
      sub_customer: 'موكل فرعي',
      total: 5100,
      total_pay: 3000,
      code_client: `CL-${i}`,
      employee: 'موظف 1',
      expr1: 'Expr',
      auto_num: `A-${i+100}`
    }));
  this.selectedRecord = this.receiptData;
  }

  // الدوال الخاصة بالأزرار
onButtonClick(btn: string) {
  switch (btn) {
    case 'سند قبض':
     this.router.navigate(['finance/receipt-voucher'], {
        state: { receipt: this.receiptData } // ← هنا تمرر البيانات
      });
      break;
  }
}

}
