import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-receipt-voucher',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './receipt-voucher.html',
  styleUrl: './receipt-voucher.css'
})
export class ReceiptVoucher {
  ref = inject(DynamicDialogRef, { optional: true });

  @Output() cancel = new EventEmitter<void>();
  voucherForm = {
    receiptNumber: 0,
    voucherNumber: 0,
    voucherDate: '2025-03-12',
    voucherType: '', 
    paymentMethod: '', 
    account: '',
    amount: 0,
    discount: 0,
    notes: ''
  };

  // بيانات وهمية للقوائم المنسدلة
  voucherTypes = ['نقدي', 'شيك', 'تحويل بنكي'];
  paymentMethods = ['تحصيل أقساط', 'رسوم قضائية', 'رسوم متابعة'];
  
  saveVoucher() {
    console.log('Voucher Saved:', this.voucherForm);
    // منطق الحفظ إلى SQL Server API هنا
    this.closeVoucherFormModal();
  }

  editVoucher() {
    console.log('Voucher Updated:', this.voucherForm);
    // منطق التعديل
    this.closeVoucherFormModal();
  }

  closeVoucherFormModal() {
    if (this.ref) {
      this.ref.close();
    } else {
      this.cancel.emit();
    }
  }
}
