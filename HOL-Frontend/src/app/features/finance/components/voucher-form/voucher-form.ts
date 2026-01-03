import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-voucher-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './voucher-form.html',
  styleUrl: './voucher-form.css'
})
export class VoucherForm implements OnInit {
  ref = inject(DynamicDialogRef, { optional: true });
  config = inject(DynamicDialogConfig, { optional: true });

  @Input() isReceipt = true;
  @Output() cancel = new EventEmitter<void>();

  formData: any = {};

  ngOnInit() {
    // Get data from dialog config if available
    if (this.config?.data) {
      this.isReceipt = this.config.data.isReceipt !== false;
    }
  }

  closeForm() {
    if (this.ref) {
      this.ref.close();
    } else {
      this.cancel.emit();
    }
  }
}
