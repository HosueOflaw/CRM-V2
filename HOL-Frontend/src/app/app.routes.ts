import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { HomePage } from './features/core/pages/home/home';
import { SettingsComponent } from './features/core/pages/settings/settings';
import { ErrorPage } from './shared/pages/404/error-page/error-page';
import NegotiationsDashboard from './features/negotiations/pages/negotiations-dashboard/negotiations-dashboard';
import { MainLayout } from './features/execution/pages/main/main-layout/main-layout';
import { authGuard } from './guards/auth.guard';
import { departmentGuard } from './guards/department.guard';

export const routes: Routes = [
  // Login Routes (without guard)
  {
    path: 'login',
    loadComponent: () =>
      import('./features/core/pages/login/login-selector/login-selector').then((m) => m.LoginSelectorComponent),
    data: { title: 'تسجيل الدخول' },
  },
  {
    path: 'login/employee',
    loadComponent: () =>
      import('./features/core/pages/login/login-employee/login-employee').then((m) => m.LoginEmployeeComponent),
    data: { title: 'تسجيل دخول الموظفين' },
  },
  {
    path: 'login/client',
    loadComponent: () =>
      import('./features/core/pages/login/login-client/login-client').then((m) => m.LoginClientComponent),
    data: { title: 'تسجيل دخول العملاء' },
  },
  {
    path: 'login/public',
    loadComponent: () =>
      import('./features/core/pages/login/login-public/login-public').then((m) => m.LoginPublicComponent),
    data: { title: 'تسجيل الدخول العام' },
  },
  {
    path: '',
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      { path: '', component: HomePage, data: { title: 'الرئيسية' } },

      // Negotiations
      {
        path: 'negotiations',
        canActivate: [departmentGuard],
        data: { title: 'المفاوضات' },
        children: [
          { path: '', component: NegotiationsDashboard },
          {
            path: 'client-follow-up',
            data: { title: 'متابعة العملاء | المفاوضات' },
            loadComponent: () =>
              import('./features/negotiations/pages/client-follow-up copy/client-follow-up').then((m) => m.ClientFollowUp),
          },
        ],
      },

      // Management
      {
        path: 'management',
        canActivate: [departmentGuard],
        data: { title: 'الشؤون الإدارية' },
        loadChildren: () =>
          import('./features/managments/managments-routes').then((m) => m.MANAGEMENT_ROUTES),
      },

      // Secretariat
      {
        path: 'secretariat',
        canActivate: [departmentGuard],
        data: { title: 'السكرتارية' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/secretariat/secretariat-routes').then((m) => m.SECRETARIAT_ROUTES),
          },
          {
            path: 'upload-excel',
            data: { title: 'رفع أكسيل | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/upload-excel/upload-excel').then((m) => m.UploadExcel),
          },
          {
            path: 'upload-files',
            data: { title: 'رفع الملفات | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/upload-files/upload-files').then((m) => m.UploadFiles),
          },
          {
            path: 'waiting-clients',
            data: { title: 'انتظار العملاء | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/waiting-clients/waiting-clients').then((m) => m.WaitingClients),
          },
          {
            path: 'export-and-import-num',
            data: { title: 'أرقام الصادر والوارد | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/export-and-import-num/export-and-import-num').then((m) => m.ExportAndImportNum),
          },
          {
            path: 'costs-print',
            data: { title: 'طباعة تكاليف بالوفاء | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/costs-print/costs-print').then((m) => m.CostsPrint),
          },
          {
            path: 'batch-numbers',
            data: { title: 'أرقام الكشوف | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/batch-numbers/batch-numbers').then((m) => m.BatchNumbers),
          },
          {
            path: 'client-file-receipt',
            data: { title: 'استلام الملفات من الموكلين | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/client-file-receipt/client-file-receipt').then((m) => m.ClientFileReceipt),
          },
          {
            path: 'files-zein-export',
            data: { title: 'طباعة ملفات زين | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/files-fifa-export/files-fifa-export').then((m) => m.FilesFifaExport),
          },
          {
            path: 'files-Ooredoo-export',
            data: { title: 'طباعة ملفات اوريدو | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/files-fifa-export/files-fifa-export').then((m) => m.FilesFifaExport),
          },
          {
            path: 'files-fifa-export',
            data: { title: 'طباعة ملفات فيفا | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/files-fifa-export/files-fifa-export').then((m) => m.FilesFifaExport),
          },
          {
            path: 'upload-page',
            data: { title: 'رفع افادات AutoDailer | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/upload-page/upload-page').then((m) => m.UploadPage),
          },
          {
            path: 'procedures',
            data: { title: 'رفع الاجراءات | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/procedures/procedures').then((m) => m.Procedures),
          },
          {
            path: 'organizing-clients',
            data: { title: 'تنظيم دخول العملاء | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/organizing-clients/organizing-clients').then((m) => m.OrganizingClients),
          },
          {
            path: 'installment-collection',
            data: { title: 'تجميع ملفات الأقساط | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/installment-collection/installment-collection').then((m) => m.InstallmentCollection),
          },
          {
            path: 'formslist',
            data: { title: 'الأستمارات | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/forms-list/forms-list').then((m) => m.FormsList),
          },
          {
            path: 'print-page',
            data: { title: 'طباعة ملفات من أكسيل | السكرتارية' },
            loadComponent: () =>
              import('./features/secretariat/pages/direct-print/direct-print').then((m) => m.DirectPrint),
          },
        ],
      },

      // Execution
      {
        path: 'execution',
        canActivate: [departmentGuard],
        data: { title: 'التنفيذ' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/execution/execution-routes').then((m) => m.EXECUTION_ROUTES),
          },
          {
            path: 'main',
            component: MainLayout,
            data: { title: 'الرئيسية | التنفيذ' },
            children: [
              {
                path: '',
                data: { title: 'الرئيسية | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/main-page/main-page').then((m) => m.MainPage),
              },
              {
                path: 'clients',
                data: { title: 'العملاء | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/clients-page/clients-page').then((m) => m.ClientsPage),
              },
              {
                path: 'review',
                data: { title: 'المراجعة | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/review-page/review-page').then((m) => m.ReviewPage),
              },
              {
                path: 'actions',
                data: { title: 'رفع الإجراءات | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/actions-page/actions-page').then((m) => m.ActionsPage),
              },
              {
                path: 'judgment',
                data: { title: 'منطوق الحكم | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/judgment/judgment').then((m) => m.Judgment),
              },
              {
                path: 'sessions',
                data: { title: 'الجلسات | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/sessions-page/sessions-page').then((m) => m.SessionsPage),
              },
              {
                path: 'requests',
                data: { title: 'طلب العهدة | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/requests-page/requests-page').then((m) => m.RequestsPage),
              },
              {
                path: 'receive',
                data: { title: 'استلام الأحكام | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/receive-page/receive-page').then((m) => m.ReceivePage),
              },
              {
                path: 'files',
                data: { title: 'الملفات الجديدة | التنفيذ' },
                loadComponent: () =>
                  import('./features/execution/pages/main/pages/files-page/files-page').then((m) => m.FilesPage),
              },
            ],
          },
          {
            path: 'appeals',
            data: { title: 'كشف الطعون | التنفيذ' },
            loadComponent: () =>
              import('./features/execution/pages/appeals-page/appeals-page').then((m) => m.AppealsPage),
          },
          {
            path: 'custody',
            data: { title: 'ادخال العهدة | التنفيذ' },
            loadComponent: () =>
              import('./features/execution/pages/custody-page/custody-page').then((m) => m.CustodyPage),
          },
          {
            path: 'judgments',
            data: { title: 'استلام الاحكام | التنفيذ' },
            loadComponent: () =>
              import('./features/execution/pages/receive-judgments-page/receive-judgments-page').then((m) => m.ReceiveJudgmentsPage),
          },
          {
            path: 'execution-statements',
            data: { title: 'ملفات التنفيذ | التنفيذ' },
            loadComponent: () =>
              import('./features/execution/pages/execution-statements-page/execution-statements-page').then((m) => m.ExecutionStatementsPage),
          },
          {
            path: 'announcing-formulas',
            data: { title: 'استلام و اعلان الصيغ | التنفيذ' },
            loadComponent: () =>
              import('./features/execution/pages/announcing-formulas-page/announcing-formulas-page').then((m) => m.AnnouncingFormulasPage),
          },
          {
            path: 'agencies',
            data: { title: 'الوكالات | التنفيذ' },
            loadComponent: () =>
              import('./features/execution/pages/agencies-page/agencies-page').then((m) => m.AgenciesPage),
          },
        ],
      },

      // Car Management
      {
        path: 'car-management',
        canActivate: [departmentGuard],
        data: { title: 'السيارات' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/car-management/car-management-routes').then((m) => m.CARMANAGEMENT_ROUTES),
          },
          {
            path: 'car-management-main',
            data: { title: 'الرئيسية | السيارات' },
            loadComponent: () =>
              import('./features/car-management/pages/car-management-main/car-management-main').then((m) => m.CarManagementMain),
          },
        ],
      },

      // Reports
      {
        path: 'reports',
        canActivate: [departmentGuard],
        data: { title: 'التقارير' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/reports/reports-routes').then((m) => m.REPORTS_ROUTES),
          },
          {
            path: 'reports-main',
            data: { title: 'الرئيسية | التقارير' },
            loadComponent: () =>
              import('./features/reports/pages/reports-main/reports-main').then((m) => m.ReportsMainComponent),
          },
          {
            path: 'reports-salary',
            data: { title: 'سندات القبض | التقارير' },
            loadComponent: () =>
              import('./features/reports/pages/reports-salary/reports-salary').then((m) => m.ReportsSalary),
          },
          {
            path: 'reports-follow-up',
            data: { title: 'تقارير المتابعة | التقارير' },
            loadComponent: () =>
              import('./features/reports/pages/report-follow-up/report-follow-up').then((m) => m.ReportFollowUp),
          },
          {
            path: 'num-of-statement',
            data: { title: 'عدد الافادات | التقارير' },
            loadComponent: () =>
              import('./features/reports/pages/report-numof-statement/report-numof-statement').then((m) => m.ReportNumofStatement),
          },
          {
            path: 'zain-six-months',
            data: { title: 'باتشات زين 6 شهور | التقارير' },
            loadComponent: () =>
              import('./features/reports/pages/reports-zain-six-months/reports-zain-six-months.component').then((m) => m.ReportsZainSixMonths),
          },
          {
            path: 'daily-breaks',
            data: { title: 'ساعة الراحة اليومية | التقارير' },
            loadComponent: () =>
              import('./features/reports/pages/daily-breaks/daily-breaks').then((m) => m.DailyBreaksComponent),
          },
          {
            path: 'reports-zain-twenty-months',
            data: { title: 'باتشات زين 20 شهور | التقارير' },
            loadComponent: () =>
              import('./features/reports/pages/reports-zain-twenty-months/reports-zain-twenty-months').then((m) => m.ReportsZainTwentyMonths),
          },
          {
            path: 'report-companies-performance',
            data: { title: 'تقرير اداء الشركة | التقارير' },
            loadComponent: () =>
              import('./features/reports/pages/report-companies-performance/report-companies-performance').then((m) => m.ReportCompaniesPerformance),
          },
        ],
      },

      // Finance
      {
        path: 'finance',
        canActivate: [departmentGuard],
        data: { title: 'الإدارة المالية' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/finance/finance-routes').then((m) => m.FINANCE_ROUTES),
          },
          {
            path: 'salary-document',
            data: { title: 'سندات القبض | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/salary-document/salary-document').then((m) => m.SalaryDocument),
          },
          {
            path: 'receipt-voucher',
            data: { title: 'سند القبض | سندات القبض' },
            loadComponent: () =>
              import('./features/finance/pages/receipt-voucher/receipt-voucher').then((m) => m.ReceiptVoucher),
          },
          {
            path: 'daily-restrictions',
            data: { title: 'القيود اليومية | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/daily-restrictions/daily-restrictions').then((m) => m.DailyRestrictions),
          },
          {
            path: 'accounts-balances',
            data: { title: 'حسابات الأرصدة | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/accounts-balances/accounts-balances').then((m) => m.AccountsBalances),
          },
          {
            path: 'filter-detection',
            data: { title: 'الاستعلام عن كشف التصفية | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/filter-detection/filter-detection').then((m) => m.FilterDetection),
          },
          {
            path: 'employee-disclosure',
            data: { title: 'استعلام عن كشوف الموظفين | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/employee-disclosure/employee-disclosure').then((m) => m.EmployeeDisclosure),
          },
          {
            path: 'daily-custody',
            data: { title: 'استعلام عن الكشوف المستلمة | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/daily-clearance/daily-clearance').then((m) => m.DailyClearance),
          },
          {
            path: 'file-commissions',
            data: { title: 'عمولات السداد | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/file-commissions/file-commissions').then((m) => m.FileCommissions),
          },
          {
            path: 'kashf',
            data: { title: 'استعلام عن الكشوف المستلمة برقم قيد | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/kashf/kashf').then((m) => m.Kashf),
          },
          {
            path: 'office-not-load',
            data: { title: 'ما يتحمله المكتب | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/office-not-load/office-not-load').then((m) => m.OfficeNotLoad),
          },
          {
            path: 'cars',
            data: { title: 'السيارات | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/cars/cars').then((m) => m.Cars),
          },
          {
            path: 'real-estate',
            data: { title: 'مقدم و مؤخر العقارات | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/real-estate/real-estate').then((m) => m.RealEstate),
          },
          {
            path: 'custody-search',
            data: { title: 'كل العهد الموجودة علي السيستم | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/custody-search/custody-search').then((m) => m.CustodySearch),
          },
          {
            path: 'covenant-review',
            data: { title: 'مراجعة العهد | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/covenant-review/covenant-review').then((m) => m.CovenantReview),
          },
          {
            path: 'transfer-search',
            data: { title: 'التحويل الي الشركات | الإدارة المالية' },
            loadComponent: () =>
              import('./features/finance/pages/transfer-search/transfer-search').then((m) => m.TransferSearch),
          },
        ],
      },

      // Discussions
      {
        path: 'discussions',
        canActivate: [departmentGuard],
        data: { title: 'المداولات' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./features/discussions/discussions-routes').then((m) => m.DISCUSSIONS_ROUTES),
          },
          {
            path: 'add-case',
            data: { title: 'إضافة قضية جديدة | المداولات' },
            loadComponent: () =>
              import('./features/discussions/pages/add-case/add-case').then((m) => m.AddCase),
            children: [
              {
                path: 'transfer-sessions',
                data: { title: 'جلسات التحويل | إضافة قضية جديدة' },
                loadComponent: () =>
                  import('./features/discussions/pages/transfer-sessions/transfer-sessions').then((m) => m.TransferSessions),
              },
            ],
          },
          {
            path: 'not-transferred-cases',
            data: { title: 'قضايا لم ترحل | المداولات' },
            loadComponent: () =>
              import('./features/discussions/pages/not-transferred-cases/not-transferred-cases').then((m) => m.NotTransferredCases),
          },
          {
            path: 'rolls',
            data: { title: 'طباعة رول الجلسات | المداولات' },
            loadComponent: () =>
              import('./features/discussions/pages/actions-page/actions-page').then((m) => m.ActionsPageComponent),
          },
          {
            path: 'reports',
            data: { title: 'التقارير | المداولات' },
            loadComponent: () =>
              import('./features/discussions/pages/reports-page/reports-page').then((m) => m.ReportsPage),
          },
          {
            path: 'upload-status',
            data: { title: 'قيد الرفع | المداولات' },
            loadComponent: () =>
              import('./features/discussions/pages/upload-status/upload-status').then((m) => m.UploadStatus),
          },
          {
            path: 'appeals-overview',
            data: { title: 'كشف الطعون | المداولات' },
            loadComponent: () =>
              import('./features/discussions/pages/appeals-overview/appeals-overview').then((m) => m.AppealsOverview),
          },
          {
            path: 'general-reports',
            data: { title: 'التقارير العامة | المداولات' },
            loadComponent: () =>
              import('./features/discussions/pages/general-reports/general-reports').then((m) => m.GeneralReports),
          },
        ],
      },

      // Settings
      { path: 'settings', component: SettingsComponent, data: { title: 'الإعدادات' } },
    ],
  },

  // Error Page
  { path: '**', component: ErrorPage, data: { title: 'الصفحة غير موجودة' } },
];
