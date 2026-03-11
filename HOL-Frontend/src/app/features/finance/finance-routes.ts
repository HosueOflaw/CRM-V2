import { Routes } from '@angular/router';
import { FinanceDashboard } from './pages/finance-dashboard/finance-dashboard';
import { CompanyInvoiceExport } from './pages/company-invoice-export/company-invoice-export';

export const FINANCE_ROUTES: Routes = [
  { path: '', component: FinanceDashboard },
  { path: 'company-invoice-export', component: CompanyInvoiceExport },
];
