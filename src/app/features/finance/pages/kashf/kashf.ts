import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-kashf',
  imports: [CommonModule,FormsModule],
  templateUrl: './kashf.html',
  styleUrl: './kashf.css'
})
export class Kashf {
searchValue: string = '';
  data = [
    { code: '001', name: 'أحمد', date: '2025-11-16', amount: 500 },
    { code: '002', name: 'محمود', date: '2025-11-15', amount: 300 },
    { code: '003', name: 'سارة', date: '2025-11-14', amount: 450 },
  ];
  filteredData: any[] = [];

  search() {
    if (!this.searchValue) {
      this.filteredData = [];
      return;
    }
    this.filteredData = this.data.filter(d =>
      d.code.includes(this.searchValue)
    );
  }
}
