import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-template',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './report-template.html',
  styleUrls: ['./report-template.css']
})
export class ReportTemplate {
@Input() caseData: any;
  @Input() courtSessions: any[] = [];
  @Input() expertSessions: any[] = [];


  logoPath = '/Logo.png';

  printReport() {
  const printContents = document.getElementById('case-report')?.innerHTML;

  const win = window.open('', '_blank', 'width=900,height=1000');
  
  win!.document.write(`
    <html dir="rtl">
      <head>
        <style>
          body {
            font-family: 'Cairo', sans-serif;
            direction: rtl;
            padding: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th, td {
            border: 1px solid #000;
            padding: 6px;
            text-align: center;
          }
          th {
            background-color: #f3f3f3;
          }
          img {
            max-width: 150px;
          }
        </style>
      </head>
      <body onload="window.print(); window.close();">
        ${printContents}
      </body>
    </html>
  `);
  win!.document.close();
}

}
