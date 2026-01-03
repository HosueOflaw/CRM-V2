import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-direct-print',
  imports: [CommonModule, FormsModule],
  templateUrl: './direct-print.html',
  styleUrl: './direct-print.css'
})
export class DirectPrint {
// المتغيرات
  selectedPrinter: string = 'UTAX_TA P-5030DN';
  searchQuery: string = '';

  // قائمة الطابعات (مطابقة للصورة)
  printers: string[] = [
    'UTAX_TA P-5030DN',
    'OneNote for Windows 10',
    'RICOH MP C3003',
    'Microsoft XPS Document Writer',
    'Microsoft Print to PDF',
    'Fax'
  ];

  // دالة الطباعة
  print() {
    console.log(`Printing using: ${this.selectedPrinter}`);
    window.print(); // أو استدعاء خدمة الطباعة الخاصة بك
  }

  // دالة تصدير الإكسل
  exportExcel() {
    console.log('Exporting to Excel...');
  }
}
