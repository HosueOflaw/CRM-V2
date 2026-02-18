import { Routes } from '@angular/router';
import { SecretariatDashboard } from './pages/secretariat-dashboard/secretariat-dashboard';
import { ImportFileDetailsPage } from './pages/import-filedetails/import-filedetails';
import { ImportFileClassificationsPage } from './pages/import-fileclassifications/import-fileclassifications';

export const SECRETARIAT_ROUTES: Routes = [
  { path: '', component: SecretariatDashboard, data: { title: 'لوحة التحكم | السكرتارية' } },
  { path: 'import-filedetails', component: ImportFileDetailsPage, data: { title: 'استيراد تفاصيل الملفات | السكرتارية' } },
  { path: 'import-fileclassifications', component: ImportFileClassificationsPage, data: { title: 'استيراد تصنيفات الملفات | السكرتارية' } },

  { path: 'import-mainfiles', data: { title: 'استيراد الموكلين | السكرتارية' }, loadComponent: () => import('./pages/import-mainfiles/import-mainfiles').then(m => m.ImportMainfilesPage) },
  { path: 'import-autonumbers', data: { title: 'استيراد Auto Numbers | السكرتارية' }, loadComponent: () => import('./pages/import-autonumbers/import-autonumbers').then(m => m.ImportAutoNumbersPage) },
  { path: 'import-payments', data: { title: 'استيراد المدفوعات Payments | السكرتارية' }, loadComponent: () => import('./pages/import-payments/import-payments').then(m => m.ImportPaymentsPage) },
  { path: 'import-notes', data: { title: 'استيراد ملاحظات الجداول | السكرتارية' }, loadComponent: () => import('./pages/import-notes/import-notes').then(m => m.ImportNotesPage) },
  { path: 'import-additionalamounts', data: { title: 'استيراد مبالغ إضافية | السكرتارية' }, loadComponent: () => import('./pages/import-additional-amounts/import-additional-amounts').then(m => m.ImportAdditionalAmountsPage) },
  { path: 'import-attachments', data: { title: 'استيراد المرفقات | السكرتارية' }, loadComponent: () => import('./pages/import-attachments/import-attachments').then(m => m.ImportAttachmentsPage) },
  { path: 'import-mails', data: { title: 'رفع البريد المجدول | السكرتارية' }, loadComponent: () => import('./pages/import-mails/import-mails').then(m => m.ImportMailsPage) },
  { path: 'upload-files', data: { title: 'رفع الملفات | السكرتارية' }, loadComponent: () => import('./pages/upload-files/upload-files').then(m => m.UploadFiles) },
  { path: 'waiting-clients', data: { title: 'انتظار العملاء | السكرتارية' }, loadComponent: () => import('./pages/waiting-clients/waiting-clients').then(m => m.WaitingClients) },
  { path: 'export-and-import-num', data: { title: 'أرقام الصادر والوارد | السكرتارية' }, loadComponent: () => import('./pages/export-and-import-num/export-and-import-num').then(m => m.ExportAndImportNum) },
  { path: 'costs-print', data: { title: 'طباعة تكاليف بالوفاء | السكرتارية' }, loadComponent: () => import('./pages/costs-print/costs-print').then(m => m.CostsPrint) },
  { path: 'batch-numbers', data: { title: 'أرقام الكشوف | السكرتارية' }, loadComponent: () => import('./pages/batch-numbers/batch-numbers').then(m => m.BatchNumbers) },
  { path: 'client-file-receipt', data: { title: 'استلام الملفات من الموكلين | السكرتارية' }, loadComponent: () => import('./pages/client-file-receipt/client-file-receipt').then(m => m.ClientFileReceipt) },
  { path: 'files-zein-export', data: { title: 'طباعة ملفات زين | السكرتارية' }, loadComponent: () => import('./pages/files-fifa-export/files-fifa-export').then(m => m.FilesFifaExport) },
  { path: 'files-Ooredoo-export', data: { title: 'طباعة ملفات اوريدو | السكرتارية' }, loadComponent: () => import('./pages/files-fifa-export/files-fifa-export').then(m => m.FilesFifaExport) },
  { path: 'files-fifa-export', data: { title: 'طباعة ملفات فيفا | السكرتارية' }, loadComponent: () => import('./pages/files-fifa-export/files-fifa-export').then(m => m.FilesFifaExport) },
  { path: 'upload-page', data: { title: 'رفع افادات AutoDailer | السكرتارية' }, loadComponent: () => import('./pages/upload-page/upload-page').then(m => m.UploadPage) },
  { path: 'procedures', data: { title: 'رفع الاجراءات | السكرتارية' }, loadComponent: () => import('./pages/procedures/procedures').then(m => m.Procedures) },
  { path: 'organizing-clients', data: { title: 'تنظيم دخول العملاء | السكرتارية' }, loadComponent: () => import('./pages/organizing-clients/organizing-clients').then(m => m.OrganizingClients) },
  { path: 'installment-collection', data: { title: 'تجميع ملفات الأقساط | السكرتارية' }, loadComponent: () => import('./pages/installment-collection/installment-collection').then(m => m.InstallmentCollection) },
  { path: 'formslist', data: { title: 'الأستمارات | السكرتارية' }, loadComponent: () => import('./pages/forms-list/forms-list').then(m => m.FormsList) },
  { path: 'print-page', data: { title: 'طباعة ملفات من أكسيل | السكرتارية' }, loadComponent: () => import('./pages/direct-print/direct-print').then(m => m.DirectPrint) },
  { path: 'edit-record', data: { title: 'تعديل بيانات ملف | السكرتارية' }, loadComponent: () => import('./pages/edit-record/edit-record').then(m => m.EditRecordPage) }
];
