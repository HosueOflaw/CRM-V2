import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import * as XLSX from 'xlsx';
import { FormsModule } from '@angular/forms';

type SessionRow = {
  id: number;
  template: string;
  court: string;
  sessionDate: string;
  client: string;
  session: string;
  decision: string;
  fileStatus: string;
  autoNum: string;
  subject: string;
  decisionNotes: string;
  level: string;
  legalPlaintiff: string;
  opponent: string;
  attendance: string;
  expert: string;
  department: string;
};

@Component({
  selector: 'app-not-transferred-cases',
  imports: [CommonModule,LookupModal,FormsModule],
  templateUrl: './not-transferred-cases.html',
  styleUrl: './not-transferred-cases.css'
})
export class NotTransferredCases {
  @ViewChild(LookupModal) lookupModal!: LookupModal;

  selectedCourt: string = '';
  activeTab: string = 'all';
  errorMessage = '';
  isLoading = false;

  allRecords: SessionRow[] = [];
  displayedRecords: SessionRow[] = [];
  paginatedRecords: SessionRow[] = [];

  pageSize = 10;
  currentPage = 1;
  totalPages = 1;

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  courts = [
    { name: 'محكمة العاصمة' },
    { name: 'محكمة الجهراء' },
    { name: 'محكمة الأحمدي' },
    { name: 'محكمة حولي' },
    { name: 'محكمة الفروانية' }
  ];

  tabs = [
    { key: 'pending', label: 'الجلسات المعلقة' },
    { key: 'all', label: 'بحث عن الكل' },
    { key: 'court', label: 'جلسات المحكمة' },
    { key: 'court-save', label: 'مطلوب الحفظ - جلسات المحكمة' },
    { key: 'experts', label: 'جلسات الخبراء' },
    { key: 'experts-save', label: 'مطلوب الحفظ - جلسات الخبراء' }
  ];

  tableHeaders = [
    { key: 'id', label: 'المسلسل' },
    { key: 'template', label: 'الشبلونة' },
    { key: 'court', label: 'المحكمة' },
    { key: 'sessionDate', label: 'تاريخ الجلسة' },
    { key: 'client', label: 'الموكل' },
    { key: 'session', label: 'الجلسة' },
    { key: 'decision', label: 'القرار' },
    { key: 'fileStatus', label: 'حالة الملف' },
    { key: 'autoNum', label: 'الرقم الآلي' },
    { key: 'subject', label: 'الموضوع' },
    { key: 'decisionNotes', label: 'ملاحظات القرار' },
    { key: 'level', label: 'الدرجة' },
    { key: 'legalPlaintiff', label: 'المدعي القانوني' },
    { key: 'opponent', label: 'الخصم' },
    { key: 'attendance', label: 'الظهور' },
    { key: 'expert', label: 'الخبراء' },
    { key: 'department', label: 'الدائرة' },
  ];

  constructor() {
    // Dummy data
    this.allRecords = [
      {
        id: 1, template: '29', court: 'محكمة العاصمة', sessionDate: '2025-11-06',
        client: 'بيت التمويل الكويتي', session: 'جلسة أولى', decision: 'تأجيل',
        fileStatus: 'مدخول', autoNum: '124567890', subject: 'قرض متعثر',
        decisionNotes: 'متابعة لاحقة', level: 'استئناف', legalPlaintiff: 'محمد فؤاد',
        opponent: 'سارة ناصر', attendance: 'حاضر', expert: 'خالد محمود', department: 'الدائرة 3'
      },
      {
        id: 2, template: '29', court: 'محكمة الجهراء', sessionDate: '2025-10-25',
        client: 'شركة الخليج', session: 'جلسة استئناف', decision: 'حكم',
        fileStatus: 'منتهي', autoNum: '223344556', subject: 'مطالبة مالية',
        decisionNotes: 'حكم نهائي', level: 'نهائي', legalPlaintiff: 'عبد الله صالح',
        opponent: 'مؤسسة الشروق', attendance: 'غياب', expert: 'لا يوجد', department: 'الدائرة 1'
      },
    ];
  }

  openCourtsModal() {
    this.errorMessage = '';
    this.lookupModal.title = 'اختيار المحكمة';
    this.lookupModal.columns = ['name'];
    this.lookupModal.data = this.courts;
    this.lookupModal.open();
  }

  onCourtSelected(item: any) {
    this.selectedCourt = item?.name || '';
    this.filterSessions(this.activeTab);
  }

  async filterSessions(type: string) {
    this.errorMessage = '';
    if (!this.selectedCourt) {
      this.errorMessage = 'اختر المحكمة أولاً من الزر (...) ثم حاول مجدداً.';
      this.openCourtsModal();
      return;
    }

    this.activeTab = type;
    this.isLoading = true;

    // Simulate API delay
    await new Promise(res => setTimeout(res, 700));

    const byCourt = this.allRecords.filter(r => r.court === this.selectedCourt);

    switch (type) {
      case 'pending':
        this.displayedRecords = byCourt.filter(r => r.fileStatus === 'مدخول');
        break;
      case 'court-save':
        this.displayedRecords = byCourt.filter(r => r.level === 'نهائي');
        break;
      case 'experts':
        this.displayedRecords = byCourt.filter(r => r.expert && r.expert !== 'لا يوجد');
        break;
      case 'experts-save':
        this.displayedRecords = byCourt.filter(r => r.expert && r.fileStatus === 'منتهي');
        break;
      default:
        this.displayedRecords = byCourt;
    }

    this.currentPage = 1;
    this.updatePagination();
    this.isLoading = false;
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.displayedRecords.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedRecords = this.displayedRecords.slice(start, end);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.displayedRecords.sort((a: any, b: any) => {
      if (a[column] < b[column]) return this.sortDirection === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
    this.updatePagination();
  }

  printTable() {
    if (!this.selectedCourt) {
      this.errorMessage = 'اختر المحكمة أولاً ثم اطبع.';
      return;
    }
    const tableHtml = document.querySelector('table')?.outerHTML;
    if (!tableHtml) return;
    const w = window.open('', '', 'width=1000,height=700');
    if (!w) return;
    w.document.write(`
      <html><head><title>طباعة الجلسات - ${this.selectedCourt}</title>
      <style>
        table{width:100%;border-collapse:collapse}
        th,td{border:1px solid #ccc;padding:6px;text-align:center}
        th{background:#eee}
      </style>
      </head><body dir="rtl">${tableHtml}</body></html>
    `);
    w.document.close();
    w.print();
  }

  onFileSelected(event: any) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      this.displayedRecords = json as any[];
      this.updatePagination();
    };
    reader.readAsArrayBuffer(file);
  }
}
