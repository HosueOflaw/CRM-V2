import {  Routes } from '@angular/router';
import NegotiationsDashboard from './pages/negotiations-dashboard/negotiations-dashboard';

export const NEGOTIATIONS_ROUTES: Routes = [
  { path: '', component: NegotiationsDashboard },
  
  // {
  //   path: ':id',
  //   component: NegotiationDetails, // صفحة فرعية تشوف الـ sidebar برضو
  // },

];

