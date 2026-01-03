import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-installment-collection',
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './installment-collection.html',
  styleUrl: './installment-collection.css'
})
export class InstallmentCollection {
  installments: any[] = [];
  columns: string[] = [];
  currentPage = 1;

  onExcelUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        this.installments = XLSX.utils.sheet_to_json(worksheet, { defval: '' });

        // استخراج الأعمدة تلقائيًا
        if (this.installments.length > 0) {
          this.columns = Object.keys(this.installments[0]);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  }

  collectOnlineFiles() {
    console.log('تجميع ملفات الاونلاين');
  }

  collectPrintFiles() {
    console.log('تجميع ملفات الطباعة');
  }
}
