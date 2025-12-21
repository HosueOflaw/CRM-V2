import { Component } from '@angular/core';
import { DashboardAction } from '../../../../models/DashboardAction';
import { DashboardLayout } from "../../../core/dashboard-layout/dashboard-layout";

@Component({
  selector: 'app-car-management-dashboard',
  imports: [DashboardLayout],
  templateUrl: './car-management-dashboard.html',
  styleUrl: './car-management-dashboard.css'
})
export class CarManagementDashboard {
 actions: DashboardAction[] = [
  { title: 'الرئيسية',type: 'navigate',value: '/car-management/car-management-main'},
 ]
}
