import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface MonthlyData {
  value: number;
  percentage: number;
}

interface ReportRow {
  name: string;
  theFrame: string;
  numberID: number;
  totalPaid: number;
  dueAmount: number;
  dateOfIssue: string;
  batches: number;
  monthlyPayments: { [key: string]: MonthlyData };
}

interface CompanyOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-reports-zain-twenty-months',
  standalone: true,
  templateUrl:'./reports-zain-twenty-months.html',
  styleUrls: ['./reports-zain-twenty-months.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterModule, CommonModule, FormsModule],
})
export class ReportsZainTwentyMonths implements OnInit {

  endDate = signal<string>('');
  company = signal<string>('zain');
  reportData = signal<ReportRow[]>([]);
  monthlyHeaders = signal<string[]>([]);

  companies: CompanyOption[] = [
    { value: 'all', label: 'الكل' },
    { value: 'zain', label: 'Zain' },
    { value: 'viva', label: 'Viva' },
    { value: 'ooredoo', label: 'Ooredoo' },
  ];

  ngOnInit(): void {
    const today = new Date().toISOString().split('T')[0];
    this.endDate.set(today);
    this.generateMonthlyHeaders(20);
  }

  generateMonthlyHeaders(months: number): void {
    const headers = Array.from({ length: months }, (_, i) => `Month ${i + 1}`);
    this.monthlyHeaders.set(headers);
  }

  loadCompanies() {
  // مثال داتا جاية من الباك إند
  const apiCompanies = [
    { value: 'zain', label: 'Zain' },
    { value: 'viva', label: 'Viva' },
    { value: 'ooredoo', label: 'Ooredoo' },
  ];

  this.companies = apiCompanies;
}

  loadReports(): void {
    const dummy = this.generateDummyReport(10, 20);
    this.reportData.set(dummy);
  }

  private generateDummyReport(rows: number, months: number): ReportRow[] {
    const data: ReportRow[] = [];

    for (let i = 1; i <= rows; i++) {
      const row: ReportRow = {
        name: `اسم العميل ${i}`,
        theFrame: `Frame ${i}`,
        numberID: 1000 + i,
        totalPaid: Math.floor(Math.random() * 5000),
        dueAmount: Math.floor(Math.random() * 2000),
        dateOfIssue: `2024-01-${i.toString().padStart(2, '0')}`,
        batches: Math.ceil(Math.random() * 12),
        monthlyPayments: {}
      };

      for (let j = 1; j <= months; j++) {
        row.monthlyPayments[`Month ${j}`] = {
          value: Math.floor(Math.random() * 500),
          percentage: Math.floor(Math.random() * 100),
        };
      }

      data.push(row);
    }

    return data;
  }
}
