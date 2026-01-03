import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-costs-print',
  imports: [CommonModule, FormsModule],
  templateUrl: './costs-print.html',
  styleUrl: './costs-print.css'
})
export class CostsPrint {

  // 
  selectedDate: string = new Date().toISOString().split('T')[0]; 
  searchText: string = '';

  exportExcel() {
    console.log('Exporting Excel for date:', this.selectedDate);
  }

  showCosts() {
    console.log('Calculating costs...');
  }
}
