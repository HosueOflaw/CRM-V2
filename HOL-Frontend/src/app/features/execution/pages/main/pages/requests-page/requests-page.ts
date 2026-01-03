import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-requests-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './requests-page.html',
  styleUrl: './requests-page.css'
})
export class RequestsPage {
 @ViewChild('lookupModal') lookupModal!: ElementRef<HTMLDialogElement>;

  fromDate = '';
  toDate = '';
  selectedCourt = '';
  search = '';
  title = 'اختيار المحكمة';

  columns = ['id', 'courtName'];
  courts = [
    { id: 1, courtName: 'محكمة الجنايات' },
    { id: 2, courtName: 'محكمة الأسرة' },
    { id: 3, courtName: 'محكمة التمييز' },
    { id: 4, courtName: 'محكمة الاستئناف' },
  ];
  filteredData:any = [...this.courts];

  requests = [
    { id: 1, number: 'RQ-001', court: 'محكمة الجنايات', date: '2025-11-01', status: 'مقبول' },
    { id: 2, number: 'RQ-002', court: 'محكمة الأسرة', date: '2025-11-02', status: 'معلق' },
    { id: 3, number: 'RQ-003', court: 'محكمة التمييز', date: '2025-10-30', status: 'مرفوض' },
    { id: 4, number: 'RQ-004', court: 'محكمة الاستئناف', date: '2025-11-01', status: 'مقبول' },
  ];

  filteredRequests = [...this.requests];

  // 🔹 Modal Logic
  openCourtModal() {
    this.lookupModal.nativeElement.showModal();
    this.filteredData = [...this.courts];
    this.search = '';
  }

  closeModal() {
    this.lookupModal.nativeElement.close();
  }

  filterData() {
    const term = this.search.trim();
    this.filteredData = this.courts.filter((c) => c.courtName.includes(term));
  }

  selectItem(row: any) {
    this.selectedCourt = row.courtName;
    this.lookupModal.nativeElement.close();
  }

  // 🔹 Search Logic
  searchRequests() {
    this.filteredRequests = this.requests.filter((req) => {
      const inDateRange =
        (!this.fromDate || req.date >= this.fromDate) &&
        (!this.toDate || req.date <= this.toDate);
      const matchesCourt = !this.selectedCourt || req.court === this.selectedCourt;
      return inDateRange && matchesCourt;
    });
  }
}
