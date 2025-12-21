import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voucher-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './voucher-form.html',
  styleUrl: './voucher-form.css'
})
export class VoucherForm {
  @Input() isReceipt = true;
  @Output() cancel = new EventEmitter<void>();

  formData: any = {};

  closeForm() {
    this.cancel.emit();
  }
}
