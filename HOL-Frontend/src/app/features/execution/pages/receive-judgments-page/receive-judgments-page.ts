import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { GoBack } from '../../../../shared/components/go-back/go-back';

@Component({
  selector: 'app-receive-judgments-page',
  imports: [CommonModule, ReactiveFormsModule,FormsModule,GoBack],
  templateUrl: './receive-judgments-page.html',
  styleUrl: './receive-judgments-page.css'
})
export class ReceiveJudgmentsPage {
  filterForm!: FormGroup;
  query: string = '';
  searchText: string = '';

  results = [
    {
      code: 'J001',
      client: 'شركة القانون',
      name: 'أحمد علي',
      court: 'محكمة الكويت',
      autoNumber: '45678',
      firstDegree: 'قبول الدعوى',
      appeal: 'رفض الاستئناف',
      cassation: '-',
      circle: 'دائرة 3',
      judgmentDate: '2025-10-10',
      judgmentText: 'الحكم لصالح المدعي',
      claimValue: 15000,
      degree: 'أول درجة',
      attendance: 'حضوري',
      employee: 'محمد حسين',
      batchNumber: 'B-1234',
      status: 'تم الاستلام'
    },
    {
      code: 'J002',
      client: 'مكتب العدالة',
      name: 'فاطمة ناصر',
      court: 'محكمة الجهراء',
      autoNumber: '78965',
      firstDegree: 'رفض الدعوى',
      appeal: 'قبول الاستئناف',
      cassation: '-',
      circle: 'دائرة 2',
      judgmentDate: '2025-10-15',
      judgmentText: 'إلغاء الحكم السابق',
      claimValue: 8000,
      degree: 'استئناف',
      attendance: 'غيابي',
      employee: 'منى خالد',
      batchNumber: 'B-1235',
      status: 'جديد'
    }
  ];

  filteredResults = [...this.results];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      fromDate: [''],
      toDate: ['']
    });
  }

  search() {
  const { fromDate, toDate } = this.filterForm.value;

  this.filteredResults = this.results.filter(r => {
    const date = new Date(r.judgmentDate);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    return (!from || date >= from) && (!to || date <= to);
  });
  }
   autoSearch() {
    const term = this.searchText.trim().toLowerCase();
    this.filteredResults = this.results.filter(item =>
      Object.values(item).some(val => String(val).toLowerCase().includes(term))
    );
  }

  reset() {
    this.filterForm.reset();
    this.query = '';
    this.filteredResults = [...this.results];
  }

  exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(this.filteredResults);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'أحكام');
    XLSX.writeFile(workbook, 'استلام_الأحكام.xlsx');
  }
}
