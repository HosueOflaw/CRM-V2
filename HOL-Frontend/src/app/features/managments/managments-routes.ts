import { Routes } from '@angular/router';
import { Attendance } from './pages/attendance/attendance';
import { ManagementDashboard } from './pages/managments-dashboard/managments-dashboard';
import { roleGuard } from '../../guards/role.guard';

export const MANAGEMENT_ROUTES: Routes = [
  { path: '', component: ManagementDashboard },
  { path: 'attendance', component: Attendance },
  {
    path: 'logins-admin',
    loadComponent: () =>
      import('./pages/logins-admin/logins-admin').then((m) => m.LoginsAdminComponent),
  },
  {
    path: 'pending-permissions',
    data: { roles: ['admin'] },
    canActivate: [roleGuard],
    loadComponent: () =>
      import('./pages/pending-permissions/pending-permissions').then((m) => m.PendingPermissionsPage),
  },
  {
    path: 'team-performance',
    data: { roles: ['admin', 'supervisor'] },
    canActivate: [roleGuard],
    loadComponent: () =>
      import('./pages/team-performance/team-performance').then((m) => m.TeamPerformancePage),
  },
];

