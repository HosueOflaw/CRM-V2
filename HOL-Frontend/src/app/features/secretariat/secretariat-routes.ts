import { Routes } from '@angular/router';
import { SecretariatDashboard } from './pages/secretariat-dashboard/secretariat-dashboard';
import { ImportFileDetailsPage } from './pages/import-filedetails/import-filedetails';

export const SECRETARIAT_ROUTES: Routes = [
  { path: '', component: SecretariatDashboard },
  { path: 'import-filedetails', component: ImportFileDetailsPage },
];

