import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GoBack } from '../../../../shared/components/go-back/go-back';
interface AccountingEntry {
  id: number;
  name: string;
  date: string;
  bank: string;
  amount: number;
  code: string;
}

@Component({
  selector: 'app-reports-salary',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, FormsModule, CommonModule, GoBack],
  templateUrl: './reports-salary.html',
  styleUrls: ['./reports-salary.css']
})
export class ReportsSalary {
  entries: AccountingEntry[] = [];

  // Form fields
  name: string = '';
  date: string = '';
  bank: string = '';
  amount: number = 0;
  code: string = '';

  // File upload & dialog
  uploadedFileName: string = '';
  showDialog: boolean = false;

  ngOnInit(): void {
    this.setDefaultDate();
  }

  // ✅ ضبط التاريخ الافتراضي
  setDefaultDate(): void {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    this.date = `${year}-${month}-${day}`;
  }

  // ✅ إضافة إدخال جديد للجدول
  addEntry(): void {
    if (this.name && this.date && this.bank) {
      const newEntry: AccountingEntry = {
        id: this.entries.length + 1,
        name: this.name,
        date: this.date,
        bank: this.bank,
        amount: this.amount,
        code: this.code
      };
      this.entries.push(newEntry);
      this.clearForm();
    }
  }

  // ✅ دالة التحكم في الديالوج
  handleDialogChoice(choice: 'view' | 'print') {
    this.showDialog = false;
    if (choice === 'view') {
      console.log('👁️ عرض فقط');
      // من هنا تقدر تفتح نافذة عرض فقط
    } else if (choice === 'print') {
      console.log('🖨️ عرض مع الطباعة');
      // من هنا تقدر تفتح نافذة عرض مع أمر الطباعة
    }
  }

  // ✅ عرض الديالوج عند الضغط على زر "عرض السند"
  showReceipt(entry: AccountingEntry | null): void {
    console.log('عرض السند:', entry);
    this.showDialog = true;
  }

  // ✅ باقي الأحداث
  reviewEntry(entry: AccountingEntry | null): void {
    console.log('Reviewing entry:', entry);
  }

  showCheckVoucher(entry: AccountingEntry | null): void {
    console.log('Show check voucher:', entry);
  }

  showBondStatement(entry: AccountingEntry | null): void {
    console.log('Show bond statement:', entry);
  }

  showCurrentManagement(): void {
    console.log('Show current management');
  }

  // ✅ رفع ملف Excel
  triggerFileInput() {
    const input = document.getElementById('excelInput') as HTMLInputElement;
    if (input) input.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadedFileName = file.name;
      console.log('📂 الملف المختار:', file);
    }
  }

  // ✅ مسح النموذج
  clearForm(): void {
    this.name = '';
    this.bank = '';
    this.amount = 0;
    this.code = '';
    this.setDefaultDate();
  }

  // ✅ حذف صف
  deleteEntry(entry: AccountingEntry): void {
    this.entries = this.entries.filter(e => e.id !== entry.id);
  }
}
