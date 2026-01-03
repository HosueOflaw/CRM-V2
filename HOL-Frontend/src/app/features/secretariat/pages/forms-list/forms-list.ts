import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface TableRow {
  code: string;
  name: string;
  batchNo: string;
  debtReason: string;
  client: string;
  employeeName: string;
  status: string;
  claimValue: number;
  paid: number;
  remaining: number;
  nationality: string;
  civilId: string;
  employeeId: string;
  clientCode: string;
}
@Component({
  selector: 'app-forms-list',
  imports: [FormsModule,CommonModule],
  templateUrl: './forms-list.html',
  styleUrl: './forms-list.css'
})
export class FormsList {
// متغيرات الفلترة

  currentPage: number = 1;
  pageSize: number = 10; // عدد الصفوف في كل صفحة
  fromDate: string = '2025-04-08';
  toDate: string = '2025-11-27';

  // بيانات وهمية مشابهة للصورة
  rows: TableRow[] = [
    {
      code: '1237036',
      name: 'أسماء عبد القادر عبد الله...',
      batchNo: 'Cars Feb 2025',
      debtReason: 'رسوم اعيان',
      client: 'شركة اعيان الكويت للسيارات',
      employeeName: 'Free',
      status: 'ودي فقط',
      claimValue: 47.36,
      paid: 0,
      remaining: 47.36,
      nationality: 'كويتي',
      civilId: '285040201474',
      employeeId: '7',
      clientCode: '12100325'
    },
    {
      code: '1187585',
      name: 'فراس حسين سلطان نجم',
      batchNo: 'باك سبتمبر 2024',
      debtReason: 'رسوم اعيان',
      client: 'شركة اعيان الكويت للسيارات',
      employeeName: 'Free',
      status: 'ودي فقط',
      claimValue: 299.1,
      paid: 0,
      remaining: 299.1,
      nationality: 'كويتي',
      civilId: '284062901354',
      employeeId: '7',
      clientCode: '12100325'
    },
    {
      code: '885643',
      name: 'أحمد شعبان محمد فرغلي',
      batchNo: 'R 158',
      debtReason: '50696004',
      client: 'شركة الاتصالات الكويتية',
      employeeName: 'Nesting',
      status: 'مغادرة نهائي',
      claimValue: 450.194,
      paid: 0,
      remaining: 450.194,
      nationality: 'مصري',
      civilId: '290092703472',
      employeeId: '13',
      clientCode: '12100001'
    },
  ];
  get paginatedRows() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.rows.slice(startIndex, startIndex + this.pageSize);
  }
  get totalPages() {
    return Math.ceil(this.rows.length / this.pageSize);
  }

  get pagesArray() {
    return Array(this.totalPages).fill(0).map((x, i) => i + 1);
  }

  // 5. دالة تغيير الصفحة
  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
