import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  cases: any[] = [];
  filteredCases: any[] = [];
  filters: { [key: string]: string } = {};

  columns = [
    'name', 'court', 'civil', 'legalClaim', 'debtReason', 'nationality', 'status',
    'contractNumber', 'claimValue', 'paid', 'code', 'remaining', 'requiredAction',
    'clientStatus', 'section', 'repetition', 'actionDate', 'filePlace', 'lawyer',
    'nationality', 'judgmentDate', 'batchNumber', 'announcementDate', 'date',
    'lastAction', 'lastActionDate', 'nextAction', 'nextActionDate', 'sector'
  ];

  ngOnInit() {
    // 🧪 Dummy data
    this.cases = [
      {
        name: 'أحمد محمد',
        court: 'محكمة الكويت',
        civil: '123',
        legalClaim: 'قرض شخصي',
        debtReason: 'تأخر سداد',
        nationality: 'كويتي',
        status: 'جارية',
        contractNumber: 'CN-2024-10',
        claimValue: 2000,
        paid: 500,
        code: 'A12',
        remaining: 1500,
        requiredAction: 'مراجعة محامي',
        clientStatus: 'نشط',
        section: 'القانوني',
        repetition: 'لا يوجد',
        actionDate: '2025-11-01',
        filePlace: 'الارشيف',
        lawyer: 'سارة ناصر',
        judgmentDate: '2025-10-15',
        batchNumber: 'B-22',
        announcementDate: '2025-10-18',
        date: '2025-11-03',
        lastAction: 'تقديم مذكرة',
        lastActionDate: '2025-10-28',
        nextAction: 'جلسة',
        nextActionDate: '2025-11-10',
        sector: 'المدني',
      },
    ];

    this.filteredCases = [...this.cases];
  }

  applyFilters() {
    this.filteredCases = this.cases.filter((item) =>
      Object.keys(this.filters).every((key) => {
        const filterValue = this.filters[key]?.toLowerCase() || '';
        return item[key]?.toString().toLowerCase().includes(filterValue);
      })
    );}
}
