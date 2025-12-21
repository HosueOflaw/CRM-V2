import { Component, ViewChild } from '@angular/core';
import { LookupModal } from '../../../../../../shared/components/lookup-modal/lookup-modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-actions-page',
  imports: [LookupModal,CommonModule,FormsModule],
  templateUrl: './actions-page.html',
  styleUrl: './actions-page.css'
})
export class ActionsPage {
 @ViewChild(LookupModal) lookupModal!: LookupModal;
  Math = Math;

  selectedCourt: string = '';
  searchTerm: string = '';
  startDate?: string;
  endDate?: string;
  pageSize = 10;
  currentPage = 1;

  records = [
    {
      code: 'A123',
      name: 'أحمد علي',
      status: 'مفتوح',
      debtReason: 'شيك مرتجع',
      civilId: '289011234567',
      autoId: 'AUTO-0091',
      nationality: 'كويتي',
      batchNumber: 'B-001',
      agent: 'مكتب العدالة',
      date: '2025-11-01',
      actionDate: '2025-11-02',
      reviewDate: '2025-11-03',
      notes: 'تمت المراجعة بنجاح',
      id: 1,
      action: 'تحويل للقسم القانوني',
      nextAction: 'مراجعة المحكمة',
      location: 'الأرشيف',
      court: 'محكمة العاصمة',
      uploaded: true
    },
    {
      code: 'B456',
      name: 'سارة محمد',
      status: 'قيد المتابعة',
      debtReason: 'قرض متأخر',
      civilId: '290022233344',
      autoId: 'AUTO-0123',
      nationality: 'كويتية',
      batchNumber: 'B-002',
      agent: 'مكتب السلام',
      date: '2025-11-02',
      actionDate: '2025-11-03',
      reviewDate: '2025-11-04',
      notes: 'بانتظار رد المحكمة',
      id: 2,
      action: 'متابعة المستندات',
      nextAction: 'رفع الدعوى',
      location: 'الأرشيف',
      court: 'محكمة الجهراء',
      uploaded: false
    }
  ];

  filteredRecords = [...this.records];

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredRecords = this.records.filter((r) => {
      const matchesSearch =
        !this.searchTerm ||
        r.name.includes(this.searchTerm) ||
        r.code.includes(this.searchTerm) ||
        r.court.includes(this.searchTerm);

      const matchesCourt = !this.selectedCourt || r.court === this.selectedCourt;

      const matchesDate =
        (!this.startDate || new Date(r.date) >= new Date(this.startDate)) &&
        (!this.endDate || new Date(r.date) <= new Date(this.endDate));

      return matchesSearch && matchesCourt && matchesDate;
    });

    this.currentPage = 1; // رجع الصفحة للأولى بعد الفلترة
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

  // 🔹 فتح مودال المحاكم
  openCourtsModal() {
    const dummyCourts = [
      { المحكمة: 'محكمة العاصمة' },
      { المحكمة: 'محكمة الجهراء' },
      { المحكمة: 'محكمة حولي' },
      { المحكمة: 'محكمة الفروانية' },
      { المحكمة: 'محكمة الأحمدي' }
    ];
    this.lookupModal.title = 'اختيار المحكمة';
    this.lookupModal.columns = ['المحكمة'];
    this.lookupModal.data = dummyCourts;
    this.lookupModal.open();
  }

  // 🔹 لما المستخدم يختار من المودال
  onCourtSelected(selected: any) {
    this.selectedCourt = selected?.المحكمة || '';
    this.applyFilters(); // يحدث النتائج مباشرة
  }

  // 🔹 فلترة غير المرفوع
  filterUnuploaded() {
    this.filteredRecords = this.records.filter((r) => !r.uploaded);
    this.currentPage = 1;
  }

  // 🔹 طباعة الجدول
  printTable() {
    const printContents = document.querySelector('table')?.outerHTML;
    const printWindow = window.open('', '', 'width=1000,height=700');
    if (printWindow && printContents) {
      printWindow.document.write(`
        <html><head><title>طباعة الجدول</title>
        <style>
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #ddd; padding: 6px; text-align: center; }
          th { background-color: #eee; }
        </style></head>
        <body dir="rtl">${printContents}</body></html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }

  // 🔹 تصدير إلى Excel
  exportToExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredRecords);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Actions');
    XLSX.writeFile(wb, 'Actions.xlsx');
  }
}
