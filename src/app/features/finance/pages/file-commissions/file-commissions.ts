import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-file-commissions',
  imports: [CommonModule],
  templateUrl: './file-commissions.html',
  styleUrl: './file-commissions.css'
})
export class FileCommissions {
 
  results: any[] = [];

  search(type: string) {
    console.log('Searching for:', type);

    this.results = [
      {
        code: '001',
        name: 'أحمد علي',
        reason: 'مديونية',
        contractNumber: 'C123',
        batchNumber: 'B001',
        employee: 'محمد',
        employeeNumber: 'E001',
        claimValue: 1000,
        totalPaid: 500,
        remaining: 500,
        receiptDate: '2025-11-15',
        client: 'شركة X',
        clientCode: 'CL001',
        receiveDate: '2025-11-10',
        withdrawDate: '2025-11-14',
        autoNumber: 'A123',
        notes: 'لا يوجد',
        nationality: 'سعودي',
        civilNumber: '1234567890',
        notes2: '',
        notes3: '',
        notes4: '',
        court: 'محكمة المدينة',
        fileNotes: '',
        group: 'Group1',
        discount: 50,
        discountPercent: '5%',
        sector: 'قطاع 1',
        commissionPercent: '2%',
        deductedCommission: 20,
        closingCommission: 10,
        accountingDeduction: 5
      }
    ];
    
  }
   exportToExcel() {
    const workSheet = XLSX.utils.json_to_sheet(this.results);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Results');

    const excelBuffer = XLSX.write(workBook, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, "search-results");
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
    saveAs(data, `${fileName}.xlsx`);
  }
  
}
