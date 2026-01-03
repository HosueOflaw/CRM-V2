import { Component } from '@angular/core';
import { DashboardAction } from '../../../../models/DashboardAction';
import { DashboardLayout } from '../../../core/dashboard-layout/dashboard-layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports-dashboard',
  imports: [DashboardLayout ,CommonModule],
  templateUrl:'./reports-dashboard.html',
  styleUrl: './reports-dashboard.css'
})
export class ReportsDashboard {

  showPatchratiodialogDialog: boolean = false;



// فتح فورم تحديد نسب الباتشات
openPatchratiodialog()
{
  this.showPatchratiodialogDialog = true;
}

// غلق فورم تحديد نسب الباتشات
closepatchatratiodialog()
{
  this.showPatchratiodialogDialog = false;
}




 actions: DashboardAction[] = [
  { title: 'التقارير',type: 'navigate',value: '/reports/reports-main'},
  { title: 'سندات القبض',type: 'navigate',value: '/reports/reports-salary'},
  { title: 'باتشات زين 6 شهور',type: 'navigate',value: '/reports/zain-six-months'},
  { title: 'تقارير المتابعة', type: 'navigate',value: '/reports/reports-follow-up'},
  { title: 'عدد الإفادات', type: 'navigate',value: '/reports/num-of-statement'},
  { title: 'تقرير باتشات زين 20شهر',type: 'navigate',value: '/reports/reports-zain-twenty-months'},
  { title: 'تقرير اداء الشركات', type: 'navigate',value: '/reports/report-companies-performance'},
  { title: 'تحديد نسبة الباتشات لكل موظف',type:"form", onClick: () => this.openPatchratiodialog()},
];
}
