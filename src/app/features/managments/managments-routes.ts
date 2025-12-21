import {  Routes } from '@angular/router';
import { Attendance } from './pages/attendance/attendance';
import { ManagementDashboard } from './pages/managments-dashboard/managments-dashboard';

export const MANAGEMENT_ROUTES: Routes = [
  { path: '', component: ManagementDashboard },
  { path: 'attendance', component: Attendance },
  {
    path: 'logins-admin',
    loadComponent: () =>
      import('./pages/logins-admin/logins-admin').then((m) => m.LoginsAdminComponent),
  },
];

