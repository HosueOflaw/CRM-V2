import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-daily-restrictions',
  imports: [CommonModule,FormsModule],
  templateUrl: './daily-restrictions.html',
  styleUrl: './daily-restrictions.css'
})
export class DailyRestrictions {
  today = new Date().toISOString().split('T')[0];

  rows = Array.from({ length: 20 }, () => ({
    accountNo: '',
    accountName: '',
    debit: '',
    credit: '',
    description: '',
    costCenter: ''
  }));
 selectedCostCenter: string = '';
  showCostCenterForm = false;

  costCenters = [
    'مركز 101 – المشاريع',
    'مركز 102 – التشغيل',
    'مركز 103 – الصيانة',
  ];

  openCostCenterForm() {
    this.showCostCenterForm = true;
  }

  closeCostCenterForm() {
    this.showCostCenterForm = false;
  }

  selectCostCenter(center: string) {
    this.selectedCostCenter = center;
    this.showCostCenterForm = false; // إغلاق المودال بعد الاختيار
  }
  newRecord() {}
  saveRecord() {}
  printRecord() {}
  editRecord() {}
}
