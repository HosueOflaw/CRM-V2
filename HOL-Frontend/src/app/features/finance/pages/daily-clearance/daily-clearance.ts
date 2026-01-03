import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-clearance',
  imports: [CommonModule,FormsModule],
  templateUrl: './daily-clearance.html',
  styleUrl: './daily-clearance.css'
})
export class DailyClearance {
  @ViewChild('printModal') printModal!: ElementRef<HTMLDialogElement>;
  constructor(private router: Router) {}

    // مجموعات
  receiveDate = '';
  netReceived = 0;
  totalExpenses = 0;
  dueAmount = 0;
  custodyNumber = '';
  tableSearch = '';

  rows: any[] = [];
  filteredRows: any[] = [];


  openPrintDialog() {
    this.printModal.nativeElement.showModal();
  }

  closePrintDialog() {
    this.printModal.nativeElement.close();
  }

  selectedEmployee = { name: 'أحمد' };

 printModalContent() {
  const logoUrl = '/Logo.png';

  const tableRows = this.filteredRows.map((row, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${row.company}</td>
      <td>${row.sheetNumber}</td>
      <td>${row.date}</td>
      <td>${row.amount}</td>
      <td>${row.companyPay}</td>
      <td>${row.officePay}</td>
    </tr>
  `).join('');

  const printHTML = `
  <html>
  <head>
    <title>كشف تصفية عهدة</title>
    <style>
      body {
        direction: rtl;
        font-family: Arial, sans-serif;
        padding: 40px;
        font-size: 16px;
      }

      .logo {
        display: block;
        margin: 0 auto 20px;
        width: 600px;
        height: auto;
      }

      h1 {
        text-align: center;
        margin-bottom: 25px;
        font-size: 30px;
      }

      .info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        font-size: 18px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
      }

      th, td {
        border: 1px solid #000;
        padding: 8px;
        text-align: center;
      }

      th {
        background: #f2f2f2;
      }

      .totals-table td {
        font-size: 18px;
        padding: 10px;
      }

      .footer {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        font-size: 18px;
      }

      .footer div {
        font-weight: bold;
      }

      .line {
        margin-top: 10px;
        font-weight: normal;
      }
    </style>
  </head>

  <body>

    <img src="${logoUrl}" class="logo" />

    <h1>كشف تصفية عهدة</h1>

    <div class="info">
      <div>الاسم: <strong>${this.selectedEmployee.name}</strong></div>
      <div>قيد رقم: <strong>${this.custodyNumber}</strong></div>
      <div>التاريخ: <strong>${this.receiveDate}</strong></div>
    </div>

    <table>
      <thead>
        <tr>
          <th>م</th>
          <th>اسم الشركة</th>
          <th>رقم الكشف</th>
          <th>التاريخ</th>
          <th>المبلغ</th>
          <th>تتحملها الشركة</th>
          <th>يتحملها المكتب</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>

    <br><br>

    <table class="totals-table">
      <tbody>
        <tr>
          <td><strong>اجمالي المصروفات</strong></td>
          <td>${this.totalExpenses}</td>
        </tr>
        <tr>
          <td><strong>صافى العهدة المستلمة</strong></td>
          <td>${this.netReceived}</td>
        </tr>
        <tr>
          <td><strong>المستحق</strong></td>
          <td>${this.dueAmount}</td>
        </tr>
      </tbody>
    </table>

    <div class="footer">
      <div>
        الادارة
        <div class="line">.........................</div>
      </div>
      <div>
        روجع
        <div class="line">.........................</div>
      </div>
      <div>
        الموظف
        <div class="line">.........................</div>
      </div>
    </div>

  </body>
  </html>
  `;

  const printWindow = window.open('', '_blank', 'width=1200,height=900');
  printWindow!.document.open();
  printWindow!.document.write(printHTML);
  printWindow!.document.close();

  setTimeout(() => {
    printWindow!.print();
  }, 400);
}



  goBack() {
    this.router.navigate(['/finance']);
  }

  search() {
    // TODO: Replace with API
    this.rows = [
      {
        company: "شركة A",
        sheetNumber: "123",
        date: "10-11-2025",
        amount: 500,
        companyPay: 200,
        officePay: 300
      }
    ];

    this.filteredRows = this.rows;

    // حساب المجاميع
    this.totalExpenses = this.rows.reduce((acc, x) => acc + x.amount, 0);
    this.netReceived = 1500; 
    this.dueAmount = this.netReceived - this.totalExpenses;
    this.receiveDate = "15-11-2025";
  }

  // فلترة داخل الجدول
  ngOnChanges() {
    this.filteredRows = this.rows.filter(r =>
      Object.values(r).some(val =>
        String(val).includes(this.tableSearch)
      )
    );
  }

}
