import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoBack } from '../../../../shared/components/go-back/go-back';

@Component({
  selector: 'app-report-follow-up',
  standalone: true,
  imports: [RouterModule, GoBack, CommonModule],
  templateUrl: './report-follow-up.html',
  styleUrl: './report-follow-up.css'
})
export class ReportFollowUp {

  showReport = false;

  reportData: any[] = [];

  loadReport() {
    this.reportData = [
      { employee: 'أحمد', status: 'تم', count: 12, follow: 'متابعة أسبوعية' },
      { employee: 'محمود', status: 'جاري', count: 8, follow: 'متابعة يومية' },
      { employee: 'سارة', status: 'متوقف', count: 3, follow: 'متابعة شهرية' },
      { employee: 'منى', status: 'قيد المراجعة', count: 5, follow: 'متابعة أسبوعية' }
    ];
  }

  toggleReport() {
    this.showReport = !this.showReport;
    if (this.showReport) {
      this.loadReport();
    }
  }
}
