import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-detection',
  imports: [CommonModule,FormsModule],
  templateUrl: './filter-detection.html',
  styleUrl: './filter-detection.css'
})
export class FilterDetection {
 searchValue: string = '';
  data = [
    { code: '001', name: 'أحمد', date: '2025-11-16', amount: 500 },
    { code: '002', name: 'محمود', date: '2025-11-15', amount: 300 },
    { code: '003', name: 'سارة', date: '2025-11-14', amount: 450 },
  ];
  filteredData = [...this.data];

  search() {
    if (!this.searchValue) return;
    this.filteredData = this.data.filter(d =>
      d.code.includes(this.searchValue)
    );
  }

  getAll() {
    this.filteredData = [...this.data];
  }

  printTable() {
    let printContent = document.querySelector('table')?.outerHTML;
    let newWin = window.open('', '', 'width=800,height=600');
    newWin?.document.write(printContent || '');
    newWin?.document.close();
    newWin?.print();
  }
}
