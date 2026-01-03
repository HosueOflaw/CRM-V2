import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';

@Component({
  selector: 'app-covenant-review',
  imports: [CommonModule, FormsModule, LookupModal],
  templateUrl: './covenant-review.html',
  styleUrl: './covenant-review.css'
})

export class CovenantReview {
employeeSearch = '';
 @ViewChild('lookup') lookup!: LookupModal;
   filterForm!: FormGroup;

  lookupConfig: {
    title: string;
    columns: string[];
    data: any[];
    targetField: string;
  } = { title: '', columns: [], data: [], targetField: '' };

  
  openModal() {
    this.lookup.open();
  }

  rows = [
    {
      company: 'شركة A',
      sheetNumber: '123',
      amount: 500,
      date: '2025-11-10',
      companyPay: 200,
      officePay: 300
    }
  ];

    handleSelect(item: any) {
    this.filterForm.patchValue({
      court: item[this.lookupConfig.targetField]
    });}
    
  get totalAmount() {
    return this.rows.reduce((sum, r) => sum + r.amount, 0);
  }
}
