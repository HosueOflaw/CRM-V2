import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-judgment',
  imports: [CommonModule, FormsModule],
  templateUrl: './judgment.html',
  styleUrl: './judgment.css'
})
export class Judgment {
  startDate?: string;
  endDate?: string;
  selectedDegree: string = '';

  cases = [
    { caseNumber: 'C-001', opponent: 'أحمد علي', degree: 'أول درجة', date: '2025-11-01', court: 'محكمة العاصمة' },
    { caseNumber: 'C-002', opponent: 'سارة محمد', degree: 'استئناف', date: '2025-11-03', court: 'محكمة الفروانية' },
    { caseNumber: 'C-003', opponent: 'عبدالله سالم', degree: 'تمييز', date: '2025-11-05', court: 'محكمة الجهراء' },
    { caseNumber: 'C-004', opponent: 'فهد ناصر', degree: 'أول درجة', date: '2025-10-30', court: 'محكمة الأحمدي' },
  ];

  filteredCases = [...this.cases];

  applyFilters() {
    this.filteredCases = this.cases.filter((c) => {
      const matchesDegree = !this.selectedDegree || c.degree === this.selectedDegree;
      const matchesDate =
        (!this.startDate || new Date(c.date) >= new Date(this.startDate)) &&
        (!this.endDate || new Date(c.date) <= new Date(this.endDate));
      return matchesDegree && matchesDate;
    });
  }
}
