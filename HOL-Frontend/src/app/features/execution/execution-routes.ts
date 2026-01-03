import { Routes } from '@angular/router';
import { ExecutionDashboard } from './pages/execution-dashboard/execution-dashboard';
import { MainLayout } from './pages/main/main-layout/main-layout';

export const EXECUTION_ROUTES: Routes = [
    { path: '', component: ExecutionDashboard},

];
