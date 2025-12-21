import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-report-numof-statement',
  imports: [RouterModule , CommonModule ,FormsModule],
  templateUrl: './report-numof-statement.html',
  styleUrl: './report-numof-statement.css'
})
export class ReportNumofStatement {
  fromDate: string = '';
  toDate: string = '';
  company: string = 'all';

  reportData: any[] = [];

  constructor(private http: HttpClient) {}

  loadReports() {
    const payload = {
      from: this.fromDate,
      to: this.toDate,
      company: this.company
    };

    this.http.post('https://your-backend.com/api/reports', payload)
      .subscribe((res: any) => {
        this.reportData = res.data;
      });
  }

}
