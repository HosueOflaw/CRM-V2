import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface FileRecord {
  code: string;
  name: string;
  status: string;
  debtReason: string;
  civilId: string;
  systemNo: string;
  nationality: string;
  batchNo: string;
  agent: string;
  date: string;
  actionDate: string;
  reviewDate: string;
  notes: string;
  id: string;
  action: string;
  nextAction: string;
  fileLocation: string;
  court: string;
}
@Component({
  selector: 'app-review-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './review-page.html',
  styleUrl: './review-page.css'
})
export class ReviewPage {
startDate = '';
  endDate = '';
  reviewDate = '';
  searchTerm = '';

  allRecords: FileRecord[] = [];
  filteredRecords: FileRecord[] = [];

  // Pagination
  currentPage = 1;
  pageSize = 5;

  ngOnInit() {
    // Dummy Data
    this.allRecords = [
      {
        code: '812686',
        name: 'أمنه رجاء عبد الله',
        status: 'قيد المراجعة',
        debtReason: 'مديونية قسط سيارة',
        civilId: '299042401549',
        systemNo: '230149720',
        nationality: 'كويتية',
        batchNo: 'Batch-01',
        agent: 'Cars Oct 2021',
        date: '2025-08-19',
        actionDate: '2025-08-19',
        reviewDate: '2025-08-20',
        notes: 'تم حفظ الملف...',
        id: '2423909',
        action: 'قسم المتابعة',
        nextAction: 'تنفيذ عادي',
        fileLocation: 'حولى',
        court: 'محكمة حولي',
      },
      {
        code: '621502',
        name: 'محمد مصطفى',
        status: 'تم الحفظ',
        debtReason: 'تأخر في السداد',
        civilId: '287122005775',
        systemNo: '151136520',
        nationality: 'لبناني',
        batchNo: 'Batch-02',
        agent: 'عبد جريد موتورز',
        date: '2025-08-24',
        actionDate: '2025-08-24',
        reviewDate: '2025-08-25',
        notes: 'الملف مكتمل...',
        id: '2428462',
        action: 'قسم المتابعة',
        nextAction: 'تنفيذ عادي',
        fileLocation: 'مبارك الكبير',
        court: 'محكمة العاصمة',
      },
      {
        code: '60203',
        name: 'عبدالعزيز عيد',
        status: 'حفظ',
        debtReason: 'شهادة عدم حضور',
        civilId: '284090605016',
        systemNo: '123456',
        nationality: 'كويتي',
        batchNo: 'Batch-03',
        agent: 'Ooredoo Telecom',
        date: '2025-10-23',
        actionDate: '2025-10-23',
        reviewDate: '2025-10-25',
        notes: 'تمت مراجعة الملف',
        id: '2438474',
        action: 'قسم المراجعة',
        nextAction: 'حفظ نهائي',
        fileLocation: 'الأحمدي',
        court: 'محكمة الأحمدي',
      },
    ];

    this.applyFilters();
  }

  applyFilters() {
    const search = this.searchTerm.toLowerCase();
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;

    this.filteredRecords = this.allRecords.filter((r) => {
      const recordDate = new Date(r.date);
      let matchesSearch =
        r.name.toLowerCase().includes(search) ||
        r.code.includes(search) ||
        r.agent.toLowerCase().includes(search) ||
        r.civilId.includes(search);

      let dateMatch = true;
      if (start && recordDate < start) dateMatch = false;
      if (end && recordDate > end) dateMatch = false;

      return matchesSearch && dateMatch;
    });

    this.currentPage = 1;
  }

  get paginatedRecords() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredRecords.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.filteredRecords.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
