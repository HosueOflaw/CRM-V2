import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardAction } from '../../../../models/DashboardAction';
import { DashboardLayout } from "../../../core/dashboard-layout/dashboard-layout";



@Component({
  selector: 'app-negotiations-page',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardLayout],
  templateUrl: './negotiations-dashboard.html',
  styleUrls: ['./negotiations-dashboard.css'],
})
export default class NegotiationsDashboard {
    actions:DashboardAction[ ] = [
     {title:'متابعة العملاء',type:"navigate",value:"/negotiations/client-follow-up"},
    ]
}
