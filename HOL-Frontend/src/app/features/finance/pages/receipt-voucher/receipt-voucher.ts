import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt-voucher',
  imports: [CommonModule, FormsModule],
  templateUrl: './receipt-voucher.html',
  styleUrl: './receipt-voucher.css'
})
export class ReceiptVoucher {
 receiptData: any = {
    code: '',
    name: '',
    civil: '',
    client: '',
    lawyer: '',
    batch_no: '',
    contract_no: '',
    reason: '',
    claim_value: 0,
    paid: 0,
    remaining: 0,
    discount: 0,
    current: 0,
    status: '',
    auto_no: ''
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const stateData = navigation?.extras.state?.['receipt'];
    if (stateData) {
      this.receiptData = { ...this.receiptData, ...stateData };
    }
  }

  save() {
    console.log('✅ تم حفظ السند:', this.receiptData);
  }

  back() {
    this.router.navigate(['/finance/salary-document']);
  }
}
