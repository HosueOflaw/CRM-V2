"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4510],{

/***/ 28300:
/*!********************************************************************!*\
  !*** ./src/app/features/managments/pages/attendance/attendance.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Attendance: () => (/* binding */ Attendance)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);


let Attendance = /*#__PURE__*/(() => {
  class Attendance {
    static ɵfac = function Attendance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Attendance)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: Attendance,
      selectors: [["app-attendance"]],
      decls: 7,
      vars: 0,
      consts: [[1, "page-container"], [1, "page-header"], [1, "page-content"], [2, "color", "var(--text-color-secondary)"]],
      template: function Attendance_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u0644\u062D\u0636\u0648\u0631 \u0648\u0627\u0644\u0627\u0646\u0635\u0631\u0627\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementStart"](4, "div", 2)(5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0635\u0641\u062D\u0629 \u0627\u0644\u062D\u0636\u0648\u0631 \u0648\u0627\u0644\u0627\u0646\u0635\u0631\u0627\u0641 \u0642\u064A\u062F \u0627\u0644\u062A\u0637\u0648\u064A\u0631...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdomElementEnd"]()()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return Attendance;
})();

/***/ }),

/***/ 64510:
/*!**********************************************************!*\
  !*** ./src/app/features/managments/managments-routes.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MANAGEMENT_ROUTES: () => (/* binding */ MANAGEMENT_ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_attendance_attendance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/attendance/attendance */ 28300);
/* harmony import */ var _pages_managments_dashboard_managments_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/managments-dashboard/managments-dashboard */ 71322);
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../guards/role.guard */ 75458);



const MANAGEMENT_ROUTES = [{
  path: '',
  component: _pages_managments_dashboard_managments_dashboard__WEBPACK_IMPORTED_MODULE_1__.ManagementDashboard
}, {
  path: 'attendance',
  component: _pages_attendance_attendance__WEBPACK_IMPORTED_MODULE_0__.Attendance
}, {
  path: 'logins-admin',
  loadComponent: () => __webpack_require__.e(/*! import() */ 9978).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/logins-admin/logins-admin */ 29978)).then(m => m.LoginsAdminComponent)
}, {
  path: 'pending-permissions',
  data: {
    roles: ['admin']
  },
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.roleGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 8300).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pending-permissions/pending-permissions */ 5919)).then(m => m.PendingPermissionsPage)
}, {
  path: 'team-performance',
  data: {
    roles: ['admin', 'supervisor']
  },
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.roleGuard],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(2076), __webpack_require__.e(4150)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/team-performance/team-performance */ 44150)).then(m => m.TeamPerformancePage)
}, {
  path: 'tasks',
  data: {
    roles: ['admin', 'supervisor'],
    mode: 'management'
  },
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.roleGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 6444).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tasks/tasks */ 16444)).then(m => m.TasksPage)
}, {
  path: 'my-tasks',
  data: {
    roles: ['admin', 'supervisor', 'employee'],
    mode: 'personal'
  },
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.roleGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 6444).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tasks/tasks */ 16444)).then(m => m.TasksPage)
}, {
  path: 'my-permissions',
  data: {
    roles: ['supervisor', 'employee']
  },
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.roleGuard],
  loadComponent: () => __webpack_require__.e(/*! import() */ 4420).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/my-permissions/my-permissions */ 74420)).then(m => m.MyPermissionsPage)
}, {
  path: 'tasks/:id',
  data: {
    roles: ['admin', 'supervisor', 'employee']
  },
  canActivate: [_guards_role_guard__WEBPACK_IMPORTED_MODULE_2__.roleGuard],
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(1416), __webpack_require__.e(2162)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tasks/task-details */ 42162)).then(m => m.TaskDetailsPage)
}];

/***/ }),

/***/ 71322:
/*!****************************************************************************************!*\
  !*** ./src/app/features/managments/pages/managments-dashboard/managments-dashboard.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManagementDashboard: () => (/* binding */ ManagementDashboard)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ 36792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var _services_break_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/break.service */ 25873);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/user.service */ 29885);







function ManagementDashboard_dialog_203_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dialog", 37)(1, "div", 38)(2, "div", 39)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementDashboard_dialog_203_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.closeChart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "canvas", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("open", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.chartTitles[ctx_r1.selectedChart]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r1.selectedChart + "_popup");
  }
}
chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);
let ManagementDashboard = /*#__PURE__*/(() => {
  class ManagementDashboard {
    authService;
    breakService;
    userService;
    activeBreaks = [];
    myEmployees = [];
    loadingStats = false;
    constructor(authService, breakService, userService) {
      this.authService = authService;
      this.breakService = breakService;
      this.userService = userService;
    }
    selectedChart = null;
    chartTitles = {
      companyChart: '📊 مقارنة الشركات',
      employeeChart: '📈 أداء الموظفين',
      debtChart: '📉 مديونية الشركات',
      clientsGrowthChart: '📆 نمو العملاء',
      monthlyRevenueChart: '💰 الإيرادات الشهرية',
      casesSolvedChart: '⚖️ القضايا المنجزة'
    };
    ngOnInit() {
      this.createCharts();
    }
    openChart(chartId) {
      this.selectedChart = chartId;
      // ننتظر DOM يرندر الكانفاس داخل المودال
      setTimeout(() => {
        this.renderPopupChart(chartId);
      }, 0);
    }
    closeChart() {
      this.selectedChart = null;
    }
    renderPopupChart(chartId) {
      const chartDataMap = {
        companyChart: {
          type: 'bar',
          data: {
            labels: ['شركة ألف', 'شركة باء', 'شركة جيم'],
            datasets: [{
              label: 'عدد الملفات',
              data: [45, 32, 60],
              backgroundColor: ['#4f46e5', '#06b6d4', '#10b981']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        },
        employeeChart: {
          type: 'line',
          data: {
            labels: ['أحمد', 'منى', 'سارة', 'خالد', 'محمد'],
            datasets: [{
              label: 'أداء الموظفين',
              data: [6, 8, 4, 9, 5],
              borderColor: '#6366f1',
              tension: 0.3,
              fill: true,
              backgroundColor: 'rgba(99, 102, 241, 0.1)'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        },
        debtChart: {
          type: 'doughnut',
          data: {
            labels: ['شركة ألف', 'شركة باء', 'شركة جيم'],
            datasets: [{
              data: [25000, 18000, 12000],
              backgroundColor: ['#06b6d4', '#f97316', '#8b5cf6']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        },
        clientsGrowthChart: {
          type: 'line',
          data: {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
            datasets: [{
              label: 'نسبة النمو الشهري',
              data: [5, 8, 12, 20, 28, 35],
              borderColor: '#16a34a',
              backgroundColor: 'rgba(22, 163, 74, 0.1)',
              tension: 0.3,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        },
        monthlyRevenueChart: {
          type: 'bar',
          data: {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
            datasets: [{
              label: 'الإيرادات (د.ك)',
              data: [12000, 18000, 22000, 30000, 42000, 56000],
              backgroundColor: '#3b82f6'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        },
        casesSolvedChart: {
          type: 'doughnut',
          data: {
            labels: ['منجزة', 'قيد التنفيذ', 'معلقة'],
            datasets: [{
              data: [87, 10, 3],
              backgroundColor: ['#10b981', '#f59e0b', '#ef4444']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        }
      };
      const canvasId = `${chartId}_popup`;
      const ctx = document.getElementById(canvasId);
      if (ctx) {
        new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(ctx, chartDataMap[chartId]);
      }
    }
    createCharts() {
      const chartsConfig = [{
        id: 'companyChart',
        type: 'bar',
        data: {
          labels: ['شركة ألف', 'شركة باء', 'شركة جيم'],
          datasets: [{
            label: 'عدد الملفات',
            data: [45, 32, 60],
            backgroundColor: ['#4f46e5', '#06b6d4', '#10b981']
          }]
        }
      }, {
        id: 'statusChart',
        type: 'pie',
        data: {
          labels: ['جاهزة', 'قيد المراجعة', 'مرفوضة'],
          datasets: [{
            data: [12, 8, 4],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444']
          }]
        }
      }, {
        id: 'employeeChart',
        type: 'line',
        data: {
          labels: ['أحمد', 'منى', 'سارة', 'خالد', 'محمد'],
          datasets: [{
            label: 'عدد الملفات اليوم',
            data: [6, 8, 4, 9, 5],
            borderColor: '#6366f1',
            tension: 0.3,
            fill: true,
            backgroundColor: 'rgba(99, 102, 241, 0.1)'
          }]
        }
      }, {
        id: 'debtChart',
        type: 'doughnut',
        data: {
          labels: ['شركة ألف', 'شركة باء', 'شركة جيم'],
          datasets: [{
            data: [25000, 18000, 12000],
            backgroundColor: ['#06b6d4', '#f97316', '#8b5cf6']
          }]
        }
      }, {
        id: 'casesChart',
        type: 'bar',
        data: {
          labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
          datasets: [{
            label: 'عدد القضايا',
            data: [20, 15, 25, 18, 30, 22],
            backgroundColor: '#4f46e5'
          }]
        }
      }, {
        id: 'departmentChart',
        type: 'radar',
        data: {
          labels: ['قانوني', 'مالي', 'موارد بشرية', 'تسويق', 'إداري'],
          datasets: [{
            label: 'مستوى الأداء',
            data: [80, 70, 90, 60, 75],
            backgroundColor: 'rgba(99, 102, 241, 0.2)',
            borderColor: '#6366f1',
            pointBackgroundColor: '#4f46e5'
          }]
        }
      }];
      chartsConfig.forEach(cfg => {
        const ctx = document.getElementById(cfg.id);
        if (ctx) new chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart(ctx, {
          type: cfg.type,
          data: cfg.data,
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        });
      });
    }
    static ɵfac = function ManagementDashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ManagementDashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_break_service__WEBPACK_IMPORTED_MODULE_5__.BreakService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ManagementDashboard,
      selectors: [["app-hr-dashboard"]],
      decls: 204,
      vars: 1,
      consts: [[1, "page-header", "flex", "justify-between", "items-center"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "gap-6", "mb-6"], [1, "card", "text-center"], [1, "card-body"], [2, "color", "var(--text-color-secondary)"], [2, "color", "var(--primary-color)", "font-size", "1.5rem", "font-weight", "700"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-6", "mb-6"], [1, "card", "cursor-pointer", 3, "click"], [1, "font-semibold", "mb-2"], [2, "color", "var(--text-color-secondary)", "font-size", "0.875rem"], [1, "card"], [1, "card-header"], [1, "form-select", 2, "width", "auto"], [1, "flex", "flex-col", "items-center", "justify-center", 2, "min-height", "160px"], [2, "width", "2.5rem", "height", "2.5rem", "border-radius", "50%", "background", "var(--surface-hover)", "display", "flex", "align-items", "center", "justify-content", "center", "margin-bottom", "0.5rem"], [2, "color", "var(--text-color-secondary)", "font-weight", "500"], [1, "flex", "flex-col", "items-center", "justify-center"], [1, "flex", "items-center", 2, "color", "var(--green-500)", "font-size", "0.875rem", "margin-top", "0.25rem"], [2, "margin-left", "0.25rem"], [1, "relative", "mt-4"], [2, "width", "6rem", "height", "6rem", "transform", "rotate(-90deg)"], ["stroke-width", "6", "stroke", "currentColor", "fill", "transparent", "r", "40", "cx", "50%", "cy", "50%", 2, "color", "var(--surface-border)"], ["stroke-width", "6", "stroke-linecap", "round", "stroke", "currentColor", "fill", "transparent", "r", "40", "cx", "50%", "cy", "50%", "stroke-dasharray", "251.2", "stroke-dashoffset", "251.2", 2, "color", "var(--primary-color)"], [2, "position", "absolute", "inset", "0", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "1.125rem", "font-weight", "600"], [2, "margin-top", "0.75rem", "font-size", "0.875rem", "color", "var(--text-color-secondary)"], [2, "font-weight", "600", "color", "var(--primary-color)"], [1, "card", "mb-6"], [1, "grid", "grid-cols-2", "gap-4", "text-center"], [2, "color", "var(--primary-color)", "font-size", "1.25rem", "font-weight", "700"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], ["id", "companyChart"], ["id", "statusChart"], ["id", "employeeChart"], ["id", "debtChart"], ["id", "casesChart"], ["id", "departmentChart"], ["class", "modal", 3, "open", 4, "ngIf"], [1, "modal", 3, "open"], [1, "modal-box", "modal-lg"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [2, "width", "100%", "height", "400px", 3, "id"]],
      template: function ManagementDashboard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0644\u0648\u062D\u0629 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0623\u062F\u0627\u0621 \u0648\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3)(6, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0631\u0633\u0648\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "21,500 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2)(11, "div", 3)(12, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0639\u0645\u0648\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "5,100 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2)(17, "div", 3)(18, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062C\u0627\u0647\u0632\u0629 \u0644\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "14 \u0645\u0644\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 2)(23, "div", 3)(24, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0627\u0644\u0645\u063A\u0627\u062F\u0631\u064A\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "6");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 6)(29, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementDashboard_Template_div_click_29_listener() {
            return ctx.openChart("companyChart");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 3)(31, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "21,500 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u0627\u0636\u063A\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementDashboard_Template_div_click_37_listener() {
            return ctx.openChart("employeeChart");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 3)(39, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "+18%");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\u0627\u0636\u063A\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementDashboard_Template_div_click_45_listener() {
            return ctx.openChart("debtChart");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 3)(47, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\u0645\u062F\u064A\u0648\u0646\u064A\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "12,000 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\u0627\u0636\u063A\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementDashboard_Template_div_click_53_listener() {
            return ctx.openChart("clientsGrowthChart");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 3)(55, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\u0646\u0645\u0648 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "+35%");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "\u0627\u0636\u063A\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementDashboard_Template_div_click_61_listener() {
            return ctx.openChart("monthlyRevenueChart");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 3)(63, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A \u0627\u0644\u0634\u0647\u0631\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "56,000 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\u0627\u0636\u063A\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ManagementDashboard_Template_div_click_69_listener() {
            return ctx.openChart("casesSolvedChart");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 3)(71, "h3", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u0646\u062C\u0632\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "87%");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "\u0627\u0636\u063A\u0637 \u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 6)(78, "div", 10)(79, "div", 11)(80, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0641\u0631\u0635\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "select", 12)(83, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "All Pipelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Closed");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 3)(90, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "No Data Found");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 10)(95, "div", 11)(96, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "select", 12)(99, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "All Pipelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Won");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 3)(106, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](107, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "No Data Found");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 10)(111, "div", 11)(112, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "\u0645\u0639\u062F\u0644 \u0627\u0644\u062A\u063A\u064A\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "select", 12)(115, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "All Pipelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Q1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Q2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 3)(122, "div", 16)(123, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "0 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 17)(126, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "\u2191");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](129, "0% vs Last 31 Days");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](130, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "svg", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "circle", 21)(133, "circle", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, " 0% ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "p", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Won revenue");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "p", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](139, "0 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 26)(141, "div", 11)(142, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "\u0627\u062D\u0635\u0627\u0626\u064A\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 3)(145, "div", 27)(146, "div")(147, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "h2", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div")(152, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](153, "Total");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "h2", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "0 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div")(157, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "CPC");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "h2", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "0 \u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div")(162, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "CTR");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "h2", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "0%");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 29)(167, "div", 10)(168, "div", 11)(169, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "\uD83D\uDCCA \u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](172, "canvas", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 10)(174, "div", 11)(175, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "\uD83E\uDD67 \u062A\u0648\u0632\u064A\u0639 \u0627\u0644\u062D\u0627\u0644\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "canvas", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 10)(180, "div", 11)(181, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "\uD83D\uDCC8 \u0623\u062F\u0627\u0621 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](184, "canvas", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 10)(186, "div", 11)(187, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "\uD83D\uDCC9 \u0645\u062F\u064A\u0648\u0646\u064A\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](190, "canvas", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 10)(192, "div", 11)(193, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "\uD83D\uDCC6 \u0646\u0634\u0627\u0637 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0634\u0647\u0631\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "canvas", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "div", 10)(198, "div", 11)(199, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](200, "\uD83D\uDCBC \u0623\u062F\u0627\u0621 \u0627\u0644\u0625\u062F\u0627\u0631\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](201, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](202, "canvas", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](203, ManagementDashboard_dialog_203_Template, 9, 3, "dialog", 36);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](203);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedChart);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["canvas[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 320px !important;\n  max-width: 600px;\n  margin: auto;\n}\n\n.chart-card[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 1.5rem;\n  border-radius: 1.25rem;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n  transition: transform 0.2s ease;\n}\n\n.chart-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdtZW50cy9wYWdlcy9tYW5hZ21lbnRzLWRhc2hib2FyZC9tYW5hZ21lbnRzLWRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMzIwcHggIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNoYXJ0LWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5jaGFydC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return ManagementDashboard;
})();

/***/ }),

/***/ 75458:
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   roleGuard: () => (/* binding */ roleGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/auth */ 90503);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




const roleGuard = route => {
  const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_core_services_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router);
  // Expected roles are passed via route.data.roles
  const expectedRoles = route.data['roles'] || [];
  const user = authService.getUser();
  if (!user) {
    router.navigate(['/login']);
    return false;
  }
  const userRole = (user.role || '').toLowerCase();
  // Admin always has access
  if (userRole === 'admin') return true;
  // Check if user's role is in the allowed list
  const hasRole = expectedRoles.some(role => role.toLowerCase() === userRole);
  if (hasRole) {
    return true;
  }
  // Deny access with a polite message
  sweetalert2__WEBPACK_IMPORTED_MODULE_3___default().fire({
    icon: 'warning',
    title: 'غير مصرح',
    text: 'هذه الصفحة مخصصة الإدارة فقط.',
    confirmButtonText: 'فهمت',
    confirmButtonColor: '#f59e0b'
  }).then(() => {
    router.navigate(['/']);
  });
  return false;
};

/***/ })

}]);
//# sourceMappingURL=4510.js.map