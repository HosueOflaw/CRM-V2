"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[350],{

/***/ 39493:
/*!**************************************************!*\
  !*** ./src/app/services/excel-import.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExcelImportService: () => (/* binding */ ExcelImportService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 63855);




let ExcelImportService = /*#__PURE__*/(() => {
  class ExcelImportService {
    http;
    apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/ExcelImport`;
    uploadStateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      jobId: null,
      status: 'Idle',
      progress: 0,
      jobType: null
    });
    uploadState$ = this.uploadStateSubject.asObservable();
    get currentUploadState() {
      return this.uploadStateSubject.value;
    }
    constructor(http) {
      this.http = http;
    }
    startUpload(file, type) {
      if (this.uploadStateSubject.value.status === 'Uploading') return;
      let endpoint = '';
      switch (type) {
        case 'Mainfile':
          endpoint = 'upload-mainfiles';
          break;
        case 'AutoNumber':
          endpoint = 'upload-autonumbers';
          break;
        case 'FileDetail':
          endpoint = 'upload-filedetails';
          break;
        case 'Payment':
          endpoint = 'upload-payments';
          break;
        case 'FileClassification':
          endpoint = 'upload-fileclassifications';
          break;
        case 'Note':
          endpoint = 'upload-notes';
          break;
        case 'AdditionalAmount':
          endpoint = 'upload-additionalamounts';
          break;
        case 'Mail':
          endpoint = 'upload-mails';
          break;
        case 'Attachment':
          endpoint = 'upload-attachments';
          break;
      }
      this.uploadStateSubject.next({
        jobId: null,
        status: 'Uploading',
        progress: 0,
        jobType: type
      });
      this.uploadFile(file, endpoint).subscribe({
        next: res => {
          this.uploadStateSubject.next({
            jobId: res.jobId,
            status: 'Processing',
            progress: 0,
            jobType: type
          });
        },
        error: err => {
          console.error('Upload failed', err);
          const errorMsg = err.error?.message || err.error || err.message || 'فشل رفع الملف';
          this.uploadStateSubject.next({
            jobId: null,
            status: 'Failed',
            progress: 0,
            jobType: type,
            errorMessage: errorMsg
          });
        }
      });
    }
    // Signals from SignalR will update this state
    updateProgress(jobId, progress, status, processed, total, errorCount) {
      const current = this.uploadStateSubject.value;
      if (current.jobId === jobId) {
        this.uploadStateSubject.next({
          ...current,
          progress,
          status,
          processedRows: processed ?? current.processedRows,
          totalRows: total ?? current.totalRows,
          errorCount: errorCount ?? current.errorCount
        });
      }
    }
    resetUploadState() {
      this.uploadStateSubject.next({
        jobId: null,
        status: 'Idle',
        progress: 0,
        jobType: null
      });
    }
    uploadFile(file, endpoint) {
      const formData = new FormData();
      formData.append('file', file);
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        formData.append('addedBy', user.id || user.Id);
      }
      return this.http.post(`${this.apiUrl}/${endpoint}`, formData);
    }
    getMyJobs(pageNumber = 1, pageSize = 10, jobType, search) {
      const params = {
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString()
      };
      if (jobType) params.jobType = jobType;
      if (search) params.search = search;
      return this.http.get(`${this.apiUrl}/jobs`, {
        params
      });
    }
    getJobStatus(jobId) {
      return this.http.get(`${this.apiUrl}/status/${jobId}`);
    }
    downloadTemplate() {
      this.downloadFile(`${this.apiUrl}/download-template`, 'Mainfiles_Template.xlsx');
    }
    downloadAutoNumbersTemplate() {
      this.downloadFile(`${this.apiUrl}/download-autonumbers-template`, 'AutoNumbers_Template.xlsx');
    }
    downloadPaymentsTemplate() {
      this.downloadFile(`${this.apiUrl}/download-payments-template`, 'Payments_Template.xlsx');
    }
    downloadFileDetailsTemplate() {
      this.downloadFile(`${this.apiUrl}/download-filedetails-template`, 'FileDetails_Template.xlsx');
    }
    downloadFileClassificationsTemplate() {
      this.downloadFile(`${this.apiUrl}/download-fileclassifications-template`, 'FileClassifications_Template.xlsx');
    }
    downloadNotesTemplate() {
      this.downloadFile(`${this.apiUrl}/download-notes-template`, 'Notes_Template.xlsx');
    }
    downloadAdditionalAmountsTemplate() {
      this.downloadFile(`${this.apiUrl}/download-additionalamounts-template`, 'AdditionalAmounts_Template.xlsx');
    }
    downloadMailsTemplate() {
      this.downloadFile(`${this.apiUrl}/download-mails-template`, 'Mails_Template.xlsx');
    }
    downloadAttachmentsTemplate() {
      this.downloadFile(`${this.apiUrl}/download-attachments-template`, 'Attachments_Template.xlsx');
    }
    downloadOriginal(jobId, jobType) {
      this.downloadFile(`${this.apiUrl}/download-original/${jobId}`, `Original_${jobType}_${jobId}.xlsx`);
    }
    revertImport(jobId) {
      return this.http.delete(`${this.apiUrl}/revert/${jobId}`);
    }
    downloadErrorLog(jobId, fileName) {
      this.downloadFile(`${this.apiUrl}/download-error-log/${jobId}`, `Errors_${fileName}`);
    }
    getJobData(jobId, pageNumber = 1, pageSize = 10, search) {
      const params = {
        pageNumber: pageNumber.toString(),
        pageSize: pageSize.toString(),
        _t: new Date().getTime().toString()
      };
      if (search) params.search = search;
      return this.http.get(`${this.apiUrl}/job-data/${jobId}`, {
        params
      });
    }
    updateJobFileName(jobId, fileName) {
      return this.http.put(`${this.apiUrl}/job/${jobId}`, {
        fileName
      });
    }
    getImportStats(jobType) {
      const params = {};
      if (jobType) params.jobType = jobType;
      return this.http.get(`${this.apiUrl}/stats`, {
        params
      });
    }
    exportJobData(jobId, fileName) {
      const timestamp = new Date().toISOString().slice(0, 10);
      const finalName = `Current_Data_${fileName}_${timestamp}.xlsx`;
      this.downloadFile(`${this.apiUrl}/export-job-data/${jobId}`, finalName);
    }
    downloadFile(url, fileName) {
      this.http.get(url, {
        responseType: 'blob'
      }).subscribe({
        next: blob => {
          const link = document.createElement("a");
          const blobUrl = URL.createObjectURL(blob);
          link.href = blobUrl;
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(blobUrl);
        },
        error: err => {
          console.error('Download failed', err);
        }
      });
    }
    static ɵfac = function ExcelImportService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExcelImportService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ExcelImportService,
      factory: ExcelImportService.ɵfac,
      providedIn: 'root'
    });
  }
  return ExcelImportService;
})();

/***/ }),

/***/ 42105:
/*!************************************************************************************************!*\
  !*** ./src/app/features/secretariat/components/import-dashboard/import-dashboard.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportDashboardComponent: () => (/* binding */ ImportDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_excel_import_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/excel-import.service */ 39493);









function ImportDashboardComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.stats == null ? null : ctx_r0.stats.summary == null ? null : ctx_r0.stats.summary.totalJobs);
  }
}
function ImportDashboardComponent_p_skeleton_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-skeleton", 15);
  }
}
function ImportDashboardComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.stats == null ? null : ctx_r0.stats.summary == null ? null : ctx_r0.stats.summary.totalRowsAttempted == null ? null : ctx_r0.stats.summary.totalRowsAttempted.toLocaleString());
  }
}
function ImportDashboardComponent_p_skeleton_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-skeleton", 15);
  }
}
function ImportDashboardComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.stats == null ? null : ctx_r0.stats.summary == null ? null : ctx_r0.stats.summary.totalSuccessfulRows == null ? null : ctx_r0.stats.summary.totalSuccessfulRows.toLocaleString());
  }
}
function ImportDashboardComponent_p_skeleton_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-skeleton", 15);
  }
}
function ImportDashboardComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.stats == null ? null : ctx_r0.stats.summary == null ? null : ctx_r0.stats.summary.totalErrorCount == null ? null : ctx_r0.stats.summary.totalErrorCount.toLocaleString());
  }
}
function ImportDashboardComponent_p_skeleton_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-skeleton", 15);
  }
}
function ImportDashboardComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.stats == null ? null : ctx_r0.stats.summary == null ? null : ctx_r0.stats.summary.successRate == null ? null : ctx_r0.stats.summary.successRate.toFixed(1), "%");
  }
}
function ImportDashboardComponent_p_skeleton_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-skeleton", 15);
  }
}
let ImportDashboardComponent = /*#__PURE__*/(() => {
  class ImportDashboardComponent {
    importService;
    jobType;
    stats;
    loading = true;
    pieData;
    pieOptions;
    barData;
    barOptions;
    constructor(importService) {
      this.importService = importService;
    }
    ngOnInit() {
      this.loadStats();
    }
    loadStats() {
      this.loading = true;
      this.importService.getImportStats(this.jobType).subscribe({
        next: data => {
          this.stats = data;
          this.prepareCharts();
          this.loading = false;
        },
        error: err => {
          console.error('Error fetching stats', err);
          this.loading = false;
        }
      });
    }
    prepareCharts() {
      const documentStyle = getComputedStyle(document.documentElement);
      // Status Pie Chart
      this.pieData = {
        labels: ['ناجح', 'فشل', 'قيد المعالجة'],
        datasets: [{
          data: [this.stats.summary.successfulJobs, this.stats.summary.failedJobs, this.stats.summary.processingJobs],
          backgroundColor: [documentStyle.getPropertyValue('--green-500') || '#22c55e', documentStyle.getPropertyValue('--red-500') || '#ef4444', documentStyle.getPropertyValue('--blue-500') || '#3b82f6'],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400') || '#4ade80', documentStyle.getPropertyValue('--red-400') || '#f87171', documentStyle.getPropertyValue('--blue-400') || '#60a5fa']
        }]
      };
      this.pieOptions = {
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              font: {
                family: 'inherit'
              }
            }
          }
        },
        maintainAspectRatio: false
      };
      // Monthly Growth Bar Chart
      const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
      const labels = this.stats.monthlyGrowth.map(m => monthNames[m.month - 1]);
      const rowCounts = this.stats.monthlyGrowth.map(m => m.totalRows);
      this.barData = {
        labels: labels,
        datasets: [{
          label: 'عدد السجلات المستوردة',
          backgroundColor: documentStyle.getPropertyValue('--blue-500') || '#3b82f6',
          borderColor: documentStyle.getPropertyValue('--blue-500') || '#3b82f6',
          data: rowCounts
        }]
      };
      this.barOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                family: 'inherit'
              }
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0,0,0,0.05)'
            },
            ticks: {
              font: {
                family: 'inherit'
              }
            }
          }
        }
      };
    }
    static ɵfac = function ImportDashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_excel_import_service__WEBPACK_IMPORTED_MODULE_5__.ExcelImportService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ImportDashboardComponent,
      selectors: [["app-import-dashboard"]],
      inputs: {
        jobType: "jobType"
      },
      decls: 31,
      vars: 10,
      consts: [[1, "grid", "grid-cols-1", "md:grid-cols-4", "lg:grid-cols-5", "gap-4", "mb-8", "flex", "justify-center"], ["styleClass", "shadow-sm border-0 bg-blue-50 dark:bg-blue-900/10"], [1, "flex", "flex-col"], [1, "text-sm", "text-gray-500", "mb-1"], ["class", "text-2xl font-bold", 4, "ngIf"], ["width", "3rem", "height", "2rem", 4, "ngIf"], ["styleClass", "shadow-sm border-0 bg-indigo-50 dark:bg-indigo-900/10"], ["class", "text-2xl font-bold text-indigo-600", 4, "ngIf"], ["styleClass", "shadow-sm border-0 bg-green-50 dark:bg-green-900/10"], ["class", "text-2xl font-bold text-green-600", 4, "ngIf"], ["styleClass", "shadow-sm border-0 bg-red-50 dark:bg-red-900/10"], ["class", "text-2xl font-bold text-red-600", 4, "ngIf"], ["styleClass", "shadow-sm border-0 bg-purple-50 dark:bg-purple-900/10"], ["class", "text-2xl font-bold text-purple-600", 4, "ngIf"], [1, "text-2xl", "font-bold"], ["width", "3rem", "height", "2rem"], [1, "text-2xl", "font-bold", "text-indigo-600"], [1, "text-2xl", "font-bold", "text-green-600"], [1, "text-2xl", "font-bold", "text-red-600"], [1, "text-2xl", "font-bold", "text-purple-600"]],
      template: function ImportDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "p-card", 1)(2, "div", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ImportDashboardComponent_span_5_Template, 2, 1, "span", 4)(6, ImportDashboardComponent_p_skeleton_6_Template, 1, 0, "p-skeleton", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p-card", 6)(8, "div", 2)(9, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0641\u064A \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ImportDashboardComponent_span_11_Template, 2, 1, "span", 7)(12, ImportDashboardComponent_p_skeleton_12_Template, 1, 0, "p-skeleton", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p-card", 8)(14, "div", 2)(15, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0645\u0636\u0627\u0641\u0629 \u0628\u0646\u062C\u0627\u062D");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ImportDashboardComponent_span_17_Template, 2, 1, "span", 9)(18, ImportDashboardComponent_p_skeleton_18_Template, 1, 0, "p-skeleton", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p-card", 10)(20, "div", 2)(21, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0645\u0631\u0641\u0648\u0636\u0629 (\u0623\u062E\u0637\u0627\u0621)");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ImportDashboardComponent_span_23_Template, 2, 1, "span", 11)(24, ImportDashboardComponent_p_skeleton_24_Template, 1, 0, "p-skeleton", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p-card", 12)(26, "div", 2)(27, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\u0646\u0633\u0628\u0629 \u0627\u0644\u0646\u062C\u0627\u062D");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ImportDashboardComponent_span_29_Template, 2, 1, "span", 13)(30, ImportDashboardComponent_p_skeleton_30_Template, 1, 0, "p-skeleton", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, primeng_chart__WEBPACK_IMPORTED_MODULE_1__.ChartModule, primeng_card__WEBPACK_IMPORTED_MODULE_2__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, primeng_skeleton__WEBPACK_IMPORTED_MODULE_3__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton],
      encapsulation: 2
    });
  }
  return ImportDashboardComponent;
})();

/***/ }),

/***/ 47146:
/*!*************************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/import-filedetails/import-filedetails.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportFileDetailsPage: () => (/* binding */ ImportFileDetailsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/datepicker */ 29786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _components_import_dashboard_import_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/import-dashboard/import-dashboard.component */ 42105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_excel_import_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../services/excel-import.service */ 39493);
/* harmony import */ var _services_data_view_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../services/data-view.service */ 59068);
/* harmony import */ var _services_signalr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../services/signalr */ 87133);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/services/sweet-alert.service */ 31365);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ 17780);
































const _c0 = ["jobsTable"];
const _c1 = () => [10, 25, 50];
const _c2 = () => ({
  width: "80vw"
});
const _c3 = () => ({
  "960px": "95vw"
});
const _c4 = () => ({
  width: "30vw"
});
const _c5 = () => ({
  width: "500px"
});
const _c6 = () => ({
  "960px": "75vw",
  "640px": "90vw"
});
function ImportFileDetailsPage_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_div_16_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectedFile = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.selectedFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("(", (ctx_r2.selectedFile.size / 1024).toFixed(1), " KB)");
  }
}
function ImportFileDetailsPage_div_20_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" \u062A\u0645 \u0627\u0643\u062A\u0634\u0627\u0641 ", ctx_r2.activeJobErrorCount, " \u0623\u062E\u0637\u0627\u0621 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646 ");
  }
}
function ImportFileDetailsPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 46)(1, "div", 19)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "p-progressBar", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 51)(10, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, ImportFileDetailsPage_div_20_span_12_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "\u064A\u0645\u0643\u0646\u0643 \u062A\u0635\u0641\u062D \u0628\u0627\u0642\u064A \u0623\u062C\u0632\u0627\u0621 \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u0633\u0646\u0642\u0648\u0645 \u0628\u062A\u0646\u0628\u064A\u0647\u0643 \u0639\u0646\u062F \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621.");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u062C\u0627\u0631\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0644\u0641 (", ctx_r2.getStatusLabel(ctx_r2.activeJobStatus), ")...");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r2.activeJobProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r2.activeJobProgress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" \u062A\u0645 \u0645\u0639\u0627\u0644\u062C\u0629 ", ctx_r2.activeJobProcessedRows, " \u0645\u0646 \u0623\u0635\u0644 ", ctx_r2.activeJobTotalRows, " \u0633\u0637\u0631... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.activeJobErrorCount > 0);
  }
}
function ImportFileDetailsPage_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "\u0627\u0644\u062A\u0642\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "\u0628\u0648\u0627\u0633\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\u0639\u062F\u062F \u0627\u0644\u0623\u0633\u0637\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileDetailsPage_ng_template_34_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "i", 75);
  }
  if (rf & 2) {
    const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pTooltip", job_r6.errorMessage);
  }
}
function ImportFileDetailsPage_ng_template_34_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" (", job_r6.errorCount, " \u062E\u0637\u0623) ");
  }
}
function ImportFileDetailsPage_ng_template_34_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_34_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.downloadErrorLog(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ImportFileDetailsPage_ng_template_34_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_34_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.revertImport(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ImportFileDetailsPage_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "td")(5, "div", 57)(6, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_34_Template_button_click_8_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.editJobName(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](10, "p-tag", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](11, ImportFileDetailsPage_ng_template_34_i_11_Template, 1, 1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "td")(13, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "p-progressBar", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "td")(18, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "td")(21, "div", 66)(22, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](24, ImportFileDetailsPage_ng_template_34_span_24_Template, 2, 1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "td", 56)(26, "div", 69)(27, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_34_Template_button_click_27_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.viewData(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_34_Template_button_click_28_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.downloadOriginal(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_34_Template_button_click_29_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.exportJobData(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](30, ImportFileDetailsPage_ng_template_34_button_30_Template, 1, 0, "button", 73)(31, ImportFileDetailsPage_ng_template_34_button_31_Template, 1, 0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](3, 14, job_r6.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](job_r6.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("severity", ctx_r2.getStatusSeverity(job_r6.status))("value", ctx_r2.getStatusLabel(job_r6.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", job_r6.status === "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", job_r6.progress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", job_r6.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", job_r6.createdBy || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate2"](" ", job_r6.processedRows, " / ", job_r6.totalRows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", job_r6.errorCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", job_r6.errorCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin && job_r6.status !== "Processing");
  }
}
function ImportFileDetailsPage_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0645\u0644\u064A\u0627\u062A \u0633\u0627\u0628\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileDetailsPage_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "\u0627\u0644\u0633\u0628\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\u0631\u0642\u0645 \u0627\u0644\u0642\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "\u0627\u0644\u0639\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22, "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062E\u062A\u0635");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24, "\u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](30, "MD");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](32, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34, "Job ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileDetailsPage_ng_template_43_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_43_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.editItem(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ImportFileDetailsPage_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ImportFileDetailsPage_ng_template_43_button_2_Template, 1, 0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td")(4, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "td")(7, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "td")(39, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin || ctx_r2.isSupervisor);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.fileCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.deptCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.patchNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](19, 17, item_r10.dateAdded, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](22, 20, item_r10.dateFinished, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.contractNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind4"](27, 23, item_r10.deptAmount, "AED", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.legalPlaintiff);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.lawyerUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.courtUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.mdUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.legalAdvisorUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.importJobId);
  }
}
function ImportFileDetailsPage_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileDetailsPage_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_45_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.showDataDialog = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ImportFileDetailsPage_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 91)(1, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_47_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingJob.fileName, $event) || (ctx_r2.editingJob.fileName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup.enter", function ImportFileDetailsPage_div_47_Template_input_keyup_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.saveJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingJob.fileName);
  }
}
function ImportFileDetailsPage_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_48_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.cancelJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_48_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.saveJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("loading", ctx_r2.savingJobEdit);
  }
}
function ImportFileDetailsPage_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 96)(1, "div", 97)(2, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "p-inputNumber", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_inputNumber_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.fileCode, $event) || (ctx_r2.editingItem.fileCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 97)(6, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "p-inputNumber", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_inputNumber_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.deptCode, $event) || (ctx_r2.editingItem.deptCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 99)(10, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\u0627\u0644\u0633\u0628\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.reason, $event) || (ctx_r2.editingItem.reason = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 97)(14, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "\u0631\u0642\u0645 \u0627\u0644\u0642\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.patchNo, $event) || (ctx_r2.editingItem.patchNo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 97)(18, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "\u0627\u0644\u0639\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "p-inputNumber", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_inputNumber_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.client, $event) || (ctx_r2.editingItem.client = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div", 97)(22, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "p-datepicker", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_datepicker_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.dateFinished, $event) || (ctx_r2.editingItem.dateFinished = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 97)(26, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.contractNo, $event) || (ctx_r2.editingItem.contractNo = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 97)(30, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](31, "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062E\u062A\u0635");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "p-inputNumber", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_inputNumber_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.deptAmount, $event) || (ctx_r2.editingItem.deptAmount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "div", 97)(34, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35, "\u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.legalPlaintiff, $event) || (ctx_r2.editingItem.legalPlaintiff = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 97)(38, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](39, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "p-inputNumber", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_inputNumber_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.lawyerUser, $event) || (ctx_r2.editingItem.lawyerUser = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "div", 97)(42, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "p-inputNumber", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_inputNumber_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.courtUser, $event) || (ctx_r2.editingItem.courtUser = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "div", 97)(46, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "MD");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "p-inputNumber", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_inputNumber_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.mdUser, $event) || (ctx_r2.editingItem.mdUser = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "div", 97)(50, "label", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](51, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](52, "p-inputNumber", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_div_50_Template_p_inputNumber_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.legalAdvisorUser, $event) || (ctx_r2.editingItem.legalAdvisorUser = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.fileCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.deptCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.patchNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.dateFinished);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showIcon", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.contractNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.deptAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.legalPlaintiff);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.lawyerUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.courtUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.mdUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.legalAdvisorUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
  }
}
function ImportFileDetailsPage_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_ng_template_51_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.saveEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("loading", ctx_r2.savingEdit);
  }
}
let ImportFileDetailsPage = /*#__PURE__*/(() => {
  class ImportFileDetailsPage {
    importService;
    dataViewService;
    signalr;
    authService;
    swal;
    jobsTable;
    selectedFile = null;
    uploading = false;
    jobs = [];
    activeJobId = null;
    activeJobProgress = 0;
    activeJobStatus = '';
    activeJobProcessedRows = 0;
    activeJobTotalRows = 0;
    activeJobErrorCount = 0;
    // Pagination
    currentPage = 1;
    pageSize = 10;
    totalRecords = 0;
    loadingJobs = false;
    jobSearch = '';
    // View Data
    showDataDialog = false;
    viewingJob = null;
    jobData = [];
    loadingJobData = false;
    // Data View Modal Pagination
    jobDataPage = 1;
    jobDataPageSize = 10;
    jobDataTotalRecords = 0;
    jobDataSearch = '';
    // Row Editing
    showEditDialog = false;
    editingItem = null;
    savingEdit = false;
    // Job Editing
    showJobEditDialog = false;
    editingJob = null;
    savingJobEdit = false;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    constructor(importService, dataViewService, signalr, authService, swal) {
      this.importService = importService;
      this.dataViewService = dataViewService;
      this.signalr = signalr;
      this.authService = authService;
      this.swal = swal;
    }
    get isAdmin() {
      return this.authService.isAdmin();
    }
    get isSupervisor() {
      return this.authService.isSupervisor();
    }
    ngOnInit() {
      // Table with lazy load will trigger its own initial load if we use onLazyLoad
      // But for now we align with the mainfiles logic
      this.loadJobs();
      this.listenToProgress();
      this.listenToUploadState();
      // Reset state if stuck in Failed to avoid reappearing alert
      if (this.importService.currentUploadState.status === 'Failed') {
        this.importService.resetUploadState();
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    listenToUploadState() {
      this.importService.uploadState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(state => {
        if (state.jobType === 'FileDetail') {
          if (state.status === 'Uploading') {
            this.uploading = true;
          } else if (state.status === 'Processing') {
            this.uploading = false;
            this.activeJobId = state.jobId;
            this.activeJobStatus = 'Pending';
            this.activeJobProgress = state.progress || 0;
            this.activeJobProcessedRows = state.processedRows || 0;
            this.activeJobTotalRows = state.totalRows || 0;
            this.activeJobErrorCount = state.errorCount || 0;
            if (this.selectedFile) {
              this.swal.toast({
                icon: 'info',
                title: 'بدأت المعالجة',
                text: 'يتم الآن رفع ومعالجة ملف تفاصيل الملفات في الخلفية'
              });
              this.selectedFile = null;
              setTimeout(() => this.refresh(), 500);
            }
          } else if (state.status === 'Failed') {
            this.uploading = false;
            this.swal.error({
              title: 'خطأ في الرفع',
              text: state.errorMessage || 'فشل رفع الملف'
            }).then(() => {
              this.importService.resetUploadState();
            });
          }
        }
      });
    }
    loadJobs() {
      this.loadingJobs = true;
      this.importService.getMyJobs(this.currentPage, this.pageSize, 'FileDetail', this.jobSearch).subscribe({
        next: result => {
          this.jobs = result.data;
          this.totalRecords = result.totalCount;
          this.loadingJobs = false;
          // Check if there's any active job
          const activeJob = result.data.find(j => j.status === 'Processing' || j.status === 'Pending');
          if (activeJob) {
            this.activeJobId = activeJob.id;
            this.activeJobProgress = activeJob.progress;
            this.activeJobStatus = activeJob.status;
            this.activeJobProcessedRows = activeJob.processedRows;
            this.activeJobTotalRows = activeJob.totalRows;
            this.activeJobErrorCount = activeJob.errorCount;
          } else {
            // Clear active job if no processing/pending jobs found
            this.activeJobId = null;
            this.activeJobProgress = 0;
            this.activeJobStatus = '';
            this.activeJobProcessedRows = 0;
            this.activeJobTotalRows = 0;
            this.activeJobErrorCount = 0;
          }
        },
        error: () => {
          this.loadingJobs = false;
        }
      });
    }
    refresh() {
      this.currentPage = 1;
      if (this.jobsTable) {
        this.jobsTable.first = 0;
      }
      this.loadJobs();
    }
    onPageChange(event) {
      this.currentPage = event.first / event.rows + 1;
      this.pageSize = event.rows;
      this.loadJobs();
    }
    onJobSearch() {
      this.currentPage = 1;
      this.loadJobs();
    }
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    }
    uploadFile() {
      if (!this.selectedFile) return;
      this.importService.startUpload(this.selectedFile, 'FileDetail');
    }
    listenToProgress() {
      this.signalr.message$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(msg => {
        if (msg.type === 'excel_import_progress' && msg.data.jobType === 'FileDetail') {
          if (msg.data.jobId === this.activeJobId) {
            this.activeJobProgress = msg.data.progress;
            this.activeJobStatus = 'Processing';
            this.activeJobProcessedRows = msg.data.processed;
            this.activeJobTotalRows = msg.data.total;
            this.activeJobErrorCount = msg.data.errorCount;
            this.importService.updateProgress(msg.data.jobId, msg.data.progress, 'Processing', msg.data.processed, msg.data.total, msg.data.errorCount);
          }
          const job = this.jobs.find(j => j.id === msg.data.jobId);
          if (job) {
            job.progress = msg.data.progress;
            job.status = 'Processing';
            job.processedRows = msg.data.processed;
            job.totalRows = msg.data.total;
            job.errorCount = msg.data.errorCount;
          }
        } else if (msg.type === 'excel_import_complete' && msg.data.jobType === 'FileDetail') {
          if (msg.data.jobId === this.activeJobId) {
            this.activeJobId = null;
            this.activeJobProgress = 100;
          }
          this.loadJobs();
        }
      });
    }
    downloadErrorLog(job) {
      this.importService.downloadErrorLog(job.id, job.fileName);
    }
    downloadTemplate() {
      this.importService.downloadFileDetailsTemplate();
    }
    getStatusSeverity(status) {
      switch (status) {
        case 'Completed':
          return 'success';
        case 'Processing':
          return 'info';
        case 'Pending':
          return 'warn';
        case 'Failed':
          return 'danger';
        default:
          return 'secondary';
      }
    }
    getStatusLabel(status) {
      switch (status) {
        case 'Completed':
          return 'مكتمل';
        case 'Processing':
          return 'جاري المعالجة';
        case 'Pending':
          return 'في الانتظار';
        case 'Failed':
          return 'فشل';
        default:
          return status;
      }
    }
    downloadOriginal(job) {
      this.importService.downloadOriginal(job.id, job.jobType);
    }
    exportJobData(job) {
      console.log('Exporting job data for:', job);
      this.importService.exportJobData(job.id, job.fileName);
    }
    revertImport(job) {
      this.swal.question({
        title: 'هل أنت متأكد؟',
        text: `ستقوم هذه العملية بحذف العملية رقم (${job.id}) وجميع البيانات المرتبطة بها نهائياً!`,
        confirmButtonText: 'نعم، احذف',
        cancelButtonText: 'إلغاء'
      }).then(result => {
        if (result.isConfirmed) {
          this.swal.showLoading();
          this.importService.revertImport(job.id).subscribe({
            next: () => {
              this.swal.success({
                title: 'تم الحذف',
                text: 'تم التراجع عن العملية وحذف البيانات بنجاح.'
              });
              this.refresh();
            },
            error: err => {
              this.swal.error({
                title: 'فشل التراجع',
                text: err.error?.message || 'حدث خطأ أثناء محاولة التراجع.'
              });
            }
          });
        }
      });
    }
    viewData(job) {
      this.viewingJob = job;
      this.showDataDialog = true;
      this.jobDataPage = 1;
      this.jobDataSearch = '';
      this.loadJobData();
    }
    loadJobData() {
      if (!this.viewingJob) return;
      this.loadingJobData = true;
      this.importService.getJobData(this.viewingJob.id, this.jobDataPage, this.jobDataPageSize, this.jobDataSearch).subscribe({
        next: result => {
          this.jobData = result.data;
          this.jobDataTotalRecords = result.totalCount;
          this.loadingJobData = false;
        },
        error: err => {
          console.error('Error fetching job data', err);
          this.loadingJobData = false;
          this.swal.error({
            title: 'خطأ',
            text: 'فشل تحميل بيانات العملية'
          });
        }
      });
    }
    onJobDataPageChange(event) {
      this.jobDataPage = event.first / event.rows + 1;
      this.jobDataPageSize = event.rows;
      this.loadJobData();
    }
    onJobDataSearch() {
      this.jobDataPage = 1;
      this.loadJobData();
    }
    editItem(item) {
      this.editingItem = {
        ...item,
        dateFinished: item.dateFinished ? new Date(item.dateFinished) : null
      };
      this.showEditDialog = true;
    }
    saveEdit() {
      if (!this.editingItem) return;
      this.savingEdit = true;
      this.dataViewService.updateFileDetail(this.editingItem.id, this.editingItem).subscribe({
        next: updatedItem => {
          const index = this.jobData.findIndex(i => i.id === updatedItem.id);
          if (index !== -1) {
            this.jobData[index] = updatedItem;
          }
          this.showEditDialog = false;
          this.editingItem = null;
          this.savingEdit = false;
          this.swal.toast({
            icon: 'success',
            title: 'تم التحديث بنجاح'
          });
        },
        error: err => {
          this.savingEdit = false;
          this.swal.error({
            title: 'فشل التحديث',
            text: err.error?.message || 'حدث خطأ أثناء حفظ التعديلات'
          });
        }
      });
    }
    cancelEdit() {
      this.showEditDialog = false;
      this.editingItem = null;
    }
    editJobName(job) {
      this.editingJob = {
        ...job
      };
      this.showJobEditDialog = true;
    }
    saveJobName() {
      if (!this.editingJob) return;
      this.savingJobEdit = true;
      this.importService.updateJobFileName(this.editingJob.id, this.editingJob.fileName).subscribe({
        next: updatedJob => {
          const index = this.jobs.findIndex(j => j.id === updatedJob.id);
          if (index !== -1) {
            this.jobs[index].fileName = updatedJob.fileName;
          }
          this.showJobEditDialog = false;
          this.editingJob = null;
          this.savingJobEdit = false;
          this.swal.toast({
            icon: 'success',
            title: 'تم تحديث اسم الملف بنجاح'
          });
        },
        error: err => {
          this.savingJobEdit = false;
          this.swal.error({
            title: 'فشل التحديث',
            text: err.error || 'حدث خطأ أثناء حفظ الاسم الجديد'
          });
        }
      });
    }
    cancelJobName() {
      this.showJobEditDialog = false;
      this.editingJob = null;
    }
    static ɵfac = function ImportFileDetailsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportFileDetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_excel_import_service__WEBPACK_IMPORTED_MODULE_17__.ExcelImportService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_data_view_service__WEBPACK_IMPORTED_MODULE_18__.DataViewService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_signalr__WEBPACK_IMPORTED_MODULE_19__.Signalr), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_20__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_21__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: ImportFileDetailsPage,
      selectors: [["app-import-filedetails"]],
      viewQuery: function ImportFileDetailsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.jobsTable = _t.first);
        }
      },
      decls: 52,
      vars: 54,
      consts: [["fileInput", ""], ["jobsTable", ""], [1, "card", "bg-white", "dark:bg-gray-900", "rounded-2xl", "shadow-sm", "p-6", "animate-fadein"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold"], ["pButton", "", "label", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062C", "icon", "pi pi-download", 1, "p-button-outlined", "p-button-sm", "p-button-rounded", 3, "click"], ["jobType", "FileDetail"], [1, "p-8", "border-2", "border-dashed", "border-gray-200", "dark:border-gray-700", "rounded-2xl", "bg-gray-50", "dark:bg-gray-800/20", "text-center", "mb-8"], [1, "pi", "pi-file-excel", "text-5xl", "text-green-500", "mb-4"], [1, "mb-6"], [1, "text-lg", "font-bold", "mb-1"], [1, "text-sm", "text-gray-500"], ["type", "file", "accept", ".xlsx, .xls", 1, "hidden", 3, "change"], [1, "flex", "flex-col", "items-center", "gap-4"], ["class", "bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-lg flex items-center gap-3", 4, "ngIf"], [1, "flex", "gap-3"], ["pButton", "", "label", "\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0644\u0641", "icon", "pi pi-search", 1, "p-button-secondary", "p-button-rounded", 3, "click", "disabled"], ["pButton", "", "label", "\u0628\u062F\u0621 \u0627\u0644\u0631\u0641\u0639 \u0648\u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F", "icon", "pi pi-cloud-upload", 1, "p-button-success", "p-button-rounded", 3, "click", "disabled", "loading"], ["class", "mb-8 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-2xl", 4, "ngIf"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-lg", "font-bold", "flex", "items-center", "gap-2", "mb-0"], [1, "pi", "pi-history"], [1, "flex", "items-center", "gap-3"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641...", 1, "p-inputtext-sm", "p-button-rounded", 3, "ngModelChange", "input", "ngModel"], ["pButton", "", "icon", "pi pi-refresh", 1, "p-button-text", "p-button-rounded", "p-button-sm", 3, "click", "loading"], ["styleClass", "p-datatable-sm", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "totalRecords", "rowsPerPageOptions", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "visibleChange", "visible", "header", "modal", "breakpoints", "draggable", "resizable", "maximizable"], [1, "mb-4"], [1, "p-input-icon-left", "w-full"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0633\u0631\u064A\u0639 \u062F\u0627\u062E\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A (\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641\u060C \u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644\u060C \u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F...)", 1, "w-full", "p-inputtext-sm", 3, "ngModelChange", "input", "ngModel"], ["styleClass", "p-datatable-sm", "currentPageReportTemplate", "\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 {totalRecords}", "scrollHeight", "500px", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "totalRecords", "loading", "showCurrentPageReport", "scrollable"], ["pTemplate", "footer"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], ["class", "flex flex-col gap-3 p-4", 4, "ngIf"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0644\u0641", 3, "visibleChange", "visible", "modal", "breakpoints", "draggable", "resizable", "maximizable"], ["class", "grid grid-cols-1 md:grid-cols-2 gap-4 p-4", 4, "ngIf"], [1, "bg-green-50", "dark:bg-green-900/30", "px-4", "py-2", "rounded-lg", "flex", "items-center", "gap-3"], [1, "pi", "pi-file", "text-green-600"], [1, "font-medium", "text-green-700", "dark:text-green-300"], [1, "text-xs", "text-green-500"], [1, "pi", "pi-times", "text-red-500", "hover:text-red-700", 3, "click"], [1, "mb-8", "p-6", "bg-blue-50", "dark:bg-blue-900/10", "border", "border-blue-100", "dark:border-blue-800", "rounded-2xl"], [1, "pi", "pi-spin", "pi-spinner", "text-blue-600"], [1, "font-bold", "text-blue-900", "dark:text-blue-100"], [1, "text-lg", "font-bold", "text-blue-700"], ["styleClass", "h-2 rounded-full", 3, "value", "showValue"], [1, "flex", "justify-between", "mt-2", "text-xs"], [1, "text-blue-600"], ["class", "text-red-500 font-bold", 4, "ngIf"], [1, "text-blue-500", "italic"], [1, "text-red-500", "font-bold"], [1, "text-center"], [1, "flex", "items-center", "gap-2"], [1, "font-medium"], ["pButton", "", "icon", "pi pi-pencil", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0627\u0633\u0645", 1, "p-button-text", "p-button-xs", "p-button-rounded", "p-button-secondary", "h-6", "w-6", 3, "click"], [3, "severity", "value"], ["class", "pi pi-info-circle text-danger ml-2", "tooltipPosition", "top", 3, "pTooltip", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "min-w-[150px]"], [1, "flex-1", "h-1.5", 3, "value", "showValue"], [1, "text-xs", "font-bold"], [1, "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "flex", "flex-col", "gap-1"], [1, "text-sm", "font-medium"], ["class", "text-xs text-red-500 font-bold", 4, "ngIf"], [1, "flex", "justify-center", "gap-1"], ["pButton", "", "icon", "pi pi-eye", "pTooltip", "\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F\u0629", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-success", 3, "click"], ["pButton", "", "icon", "pi pi-download", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0623\u0635\u0644\u064A", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-info", 3, "click"], ["pButton", "", "icon", "pi pi-file-excel", "pTooltip", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-secondary", 3, "click"], ["pButton", "", "icon", "pi pi-exclamation-triangle", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0633\u062C\u0644 \u0627\u0644\u0623\u062E\u0637\u0627\u0621", "tooltipPosition", "top", "class", "p-button-text p-button-sm p-button-rounded p-button-warning", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "\u062A\u0631\u0627\u062C\u0639 (\u062D\u0630\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A)", "tooltipPosition", "top", "class", "p-button-text p-button-sm p-button-rounded p-button-danger", 3, "click", 4, "ngIf"], ["tooltipPosition", "top", 1, "pi", "pi-info-circle", "text-danger", "ml-2", 3, "pTooltip"], [1, "text-xs", "text-red-500", "font-bold"], ["pButton", "", "icon", "pi pi-exclamation-triangle", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0633\u062C\u0644 \u0627\u0644\u0623\u062E\u0637\u0627\u0621", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-warning", 3, "click"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "\u062A\u0631\u0627\u062C\u0639 (\u062D\u0630\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A)", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-danger", 3, "click"], ["colspan", "7", 1, "text-center", "py-8", "text-gray-500", "italic"], [2, "min-width", "80px"], [2, "min-width", "120px"], [2, "min-width", "200px"], [2, "min-width", "150px"], [2, "min-width", "100px"], ["pButton", "", "icon", "pi pi-pencil", "class", "p-button-text p-button-sm p-button-rounded p-button-warning", 3, "click", 4, "ngIf"], [1, "font-mono", "text-xs"], [1, "font-bold"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-warning", 3, "click"], ["colspan", "16", 1, "text-center", "py-4"], ["pButton", "", "label", "\u0625\u063A\u0644\u0627\u0642", "icon", "pi pi-times", 1, "p-button-text", 3, "click"], [1, "flex", "flex-col", "gap-3", "p-4"], [1, "font-bold", "text-sm"], ["pInputText", "", 1, "w-full", 3, "ngModelChange", "keyup.enter", "ngModel"], ["pButton", "", "label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", 1, "p-button-text", "p-button-rounded", 3, "click"], ["pButton", "", "label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644", "icon", "pi pi-check", 1, "p-button-primary", "p-button-rounded", 3, "click", "loading"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "p-4"], [1, "flex", "flex-col", "gap-2"], [3, "ngModelChange", "ngModel", "useGrouping"], [1, "flex", "flex-col", "gap-2", "md:col-span-2"], ["pInputText", "", 3, "ngModelChange", "ngModel"], ["appendTo", "body", 3, "ngModelChange", "ngModel", "showIcon"], ["mode", "currency", "currency", "AED", 3, "ngModelChange", "ngModel"], ["pButton", "", "label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A", "icon", "pi pi-check", 1, "p-button-primary", "p-button-rounded", 3, "click", "loading"]],
      template: function ImportFileDetailsPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\u0645\u0644\u0641\u0627\u062A \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0648\u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.downloadTemplate());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "app-import-dashboard", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 9)(9, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "\u0627\u062E\u062A\u0631 \u0645\u0644\u0641 \u0627\u0644\u0625\u0643\u0633\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\u064A\u062F\u0639\u0645 \u0635\u064A\u063A .xlsx \u0648 .xls \u0641\u0642\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "input", 12, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function ImportFileDetailsPage_Template_input_change_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](16, ImportFileDetailsPage_div_16_Template, 7, 2, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 15)(18, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](14);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](fileInput_r4.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.uploadFile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, ImportFileDetailsPage_div_20_Template, 15, 7, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div")(22, "div", 19)(23, "h3", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](24, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25, " \u0622\u062E\u0631 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 22)(27, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](28, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.jobSearch, $event) || (ctx.jobSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function ImportFileDetailsPage_Template_input_input_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onJobSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileDetailsPage_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.refresh());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "p-table", 27, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onLazyLoad", function ImportFileDetailsPage_Template_p_table_onLazyLoad_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onPageChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](33, ImportFileDetailsPage_ng_template_33_Template, 15, 0, "ng-template", 28)(34, ImportFileDetailsPage_ng_template_34_Template, 32, 17, "ng-template", 29)(35, ImportFileDetailsPage_ng_template_35_Template, 3, 0, "ng-template", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "p-dialog", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("visibleChange", function ImportFileDetailsPage_Template_p_dialog_visibleChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.showDataDialog, $event) || (ctx.showDataDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 32)(38, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](39, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileDetailsPage_Template_input_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.jobDataSearch, $event) || (ctx.jobDataSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function ImportFileDetailsPage_Template_input_input_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onJobDataSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "p-table", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onLazyLoad", function ImportFileDetailsPage_Template_p_table_onLazyLoad_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onJobDataPageChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](42, ImportFileDetailsPage_ng_template_42_Template, 35, 0, "ng-template", 28)(43, ImportFileDetailsPage_ng_template_43_Template, 41, 28, "ng-template", 29)(44, ImportFileDetailsPage_ng_template_44_Template, 3, 0, "ng-template", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](45, ImportFileDetailsPage_ng_template_45_Template, 1, 0, "ng-template", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](46, "p-dialog", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("visibleChange", function ImportFileDetailsPage_Template_p_dialog_visibleChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.showJobEditDialog, $event) || (ctx.showJobEditDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](47, ImportFileDetailsPage_div_47_Template, 4, 1, "div", 38)(48, ImportFileDetailsPage_ng_template_48_Template, 2, 1, "ng-template", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "p-dialog", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("visibleChange", function ImportFileDetailsPage_Template_p_dialog_visibleChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.showEditDialog, $event) || (ctx.showEditDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](50, ImportFileDetailsPage_div_50_Template, 53, 21, "div", 40)(51, ImportFileDetailsPage_ng_template_51_Template, 2, 1, "ng-template", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.selectedFile || ctx.uploading)("loading", ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.activeJobId);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx.jobSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("loading", ctx.loadingJobs);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.jobs)("lazy", true)("paginator", true)("rows", ctx.pageSize)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](48, _c1))("loading", ctx.loadingJobs);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](49, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("visible", ctx.showDataDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("header", "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629: " + (ctx.viewingJob == null ? null : ctx.viewingJob.fileName))("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](50, _c3))("draggable", false)("resizable", false)("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx.jobDataSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.jobData)("lazy", true)("paginator", true)("rows", ctx.jobDataPageSize)("totalRecords", ctx.jobDataTotalRecords)("loading", ctx.loadingJobData)("showCurrentPageReport", true)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](51, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("visible", ctx.showJobEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("modal", true)("draggable", false)("resizable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.editingJob);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](52, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("visible", ctx.showEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](53, _c6))("draggable", false)("resizable", false)("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.editingItem);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_2__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_2__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_22__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__.ProgressBar, primeng_tag__WEBPACK_IMPORTED_MODULE_5__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_5__.Tag, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumberModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumber, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, primeng_datepicker__WEBPACK_IMPORTED_MODULE_11__.DatePickerModule, primeng_datepicker__WEBPACK_IMPORTED_MODULE_11__.DatePicker, _components_import_dashboard_import_dashboard_component__WEBPACK_IMPORTED_MODULE_14__.ImportDashboardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      encapsulation: 2
    });
  }
  return ImportFileDetailsPage;
})();

/***/ }),

/***/ 48456:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/import-fileclassifications/import-fileclassifications.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportFileClassificationsPage: () => (/* binding */ ImportFileClassificationsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ 26771);
/* harmony import */ var primeng_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/datepicker */ 29786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _components_import_dashboard_import_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/import-dashboard/import-dashboard.component */ 42105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_excel_import_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../services/excel-import.service */ 39493);
/* harmony import */ var _services_data_view_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../services/data-view.service */ 59068);
/* harmony import */ var _services_signalr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../services/signalr */ 87133);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/services/sweet-alert.service */ 31365);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/api */ 17780);































const _c0 = ["jobsTable"];
const _c1 = () => [10, 25, 50];
const _c2 = () => ({
  width: "85vw"
});
const _c3 = () => ({
  "960px": "95vw"
});
const _c4 = () => ({
  width: "380px"
});
const _c5 = () => ({
  width: "450px"
});
const _c6 = () => ({
  "960px": "85vw",
  "640px": "95vw"
});
function ImportFileClassificationsPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 48)(1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 51)(4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_div_19_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.selectedFile = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.selectedFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", (ctx_r2.selectedFile.size / 1024).toFixed(1), " KB");
  }
}
function ImportFileClassificationsPage_div_23_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r2.activeJobErrorCount, " \u0623\u062E\u0637\u0627\u0621 ");
  }
}
function ImportFileClassificationsPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 56)(1, "div", 57)(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "p-progressBar", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 63)(10, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, " \u062A\u0645 \u0645\u0639\u0627\u0644\u062C\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, " \u0645\u0646 \u0623\u0635\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17, " \u0633\u0637\u0631... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](18, ImportFileClassificationsPage_div_23_span_18_Template, 3, 1, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](20, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21, " \u064A\u0645\u0643\u0646\u0643 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0639\u0645\u0644 \u0648\u0633\u0646\u0642\u0648\u0645 \u0628\u062A\u0646\u0628\u064A\u0647\u0643 \u0639\u0646\u062F \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("\u062C\u0627\u0631\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0644\u0641 (", ctx_r2.getStatusLabel(ctx_r2.activeJobStatus), ")...");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", ctx_r2.activeJobProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r2.activeJobProgress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.activeJobProcessedRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r2.activeJobTotalRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.activeJobErrorCount > 0);
  }
}
function ImportFileClassificationsPage_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 72)(1, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "\u0627\u0644\u062A\u0642\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "\u0628\u0648\u0627\u0633\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\u0639\u062F\u062F \u0627\u0644\u0623\u0633\u0637\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileClassificationsPage_ng_template_37_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "i", 101);
  }
  if (rf & 2) {
    const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("pTooltip", job_r6.errorMessage || "\u0641\u0634\u0644 \u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641");
  }
}
function ImportFileClassificationsPage_ng_template_37_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", job_r6.errorCount, " \u062E\u0637\u0623 ");
  }
}
function ImportFileClassificationsPage_ng_template_37_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_37_button_35_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r7);
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.downloadErrorLog(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ImportFileClassificationsPage_ng_template_37_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_37_button_36_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r8);
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.revertImport(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ImportFileClassificationsPage_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 75)(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "td", 77)(5, "div", 78)(6, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_37_Template_button_click_8_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.editJobName(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td", 77)(10, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](11, "p-tag", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, ImportFileClassificationsPage_ng_template_37_i_12_Template, 1, 1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "td", 84)(14, "div", 85)(15, "div", 86)(16, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "p-progressBar", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](19, "td", 77)(20, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "td", 77)(23, "div", 90)(24, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](27, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](29, ImportFileClassificationsPage_ng_template_37_span_29_Template, 2, 1, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "td", 94)(31, "div", 95)(32, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_37_Template_button_click_32_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.viewData(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_37_Template_button_click_33_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.downloadOriginal(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_37_Template_button_click_34_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.exportJobData(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](35, ImportFileClassificationsPage_ng_template_37_button_35_Template, 1, 0, "button", 99)(36, ImportFileClassificationsPage_ng_template_37_button_36_Template, 1, 0, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](3, 14, job_r6.createdAt, "yyyy/MM/dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](job_r6.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("severity", ctx_r2.getStatusSeverity(job_r6.status))("value", ctx_r2.getStatusLabel(job_r6.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", job_r6.status === "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", job_r6.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", job_r6.progress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", job_r6.createdBy || "---", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", job_r6.processedRows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", job_r6.totalRows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", job_r6.errorCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", job_r6.errorCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin && (job_r6.status === "Completed" || job_r6.status === "Failed"));
  }
}
function ImportFileClassificationsPage_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0645\u0644\u064A\u0627\u062A \u0633\u0627\u0628\u0642\u0629 \u0633\u062C\u0644\u062A \u0628\u0639\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileClassificationsPage_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 107)(1, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2, "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641 (File Code)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629 (Dept Code)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "th", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 (Classification)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\u0627\u0644\u0642\u0633\u0645 (Department)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileClassificationsPage_ng_template_51_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_51_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r9);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.editItem(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function ImportFileClassificationsPage_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr", 112)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ImportFileClassificationsPage_ng_template_51_button_2_Template, 1, 0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "td")(4, "span", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "td", 115)(7, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "td", 115)(10, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "td")(13, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "td")(16, "span", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin || ctx_r2.isSupervisor);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("#", item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.fileCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.deptCode || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.classification || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r10.department || "---");
  }
}
function ImportFileClassificationsPage_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "tr")(1, "td", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u0644\u0639\u0631\u0636\u0647\u0627 \u0641\u064A \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileClassificationsPage_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 123)(1, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_53_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.showDataDialog = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
}
function ImportFileClassificationsPage_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 125)(1, "div", 85)(2, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062C\u062F\u064A\u062F \u0644\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileClassificationsPage_div_55_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingJob.fileName, $event) || (ctx_r2.editingJob.fileName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup.enter", function ImportFileClassificationsPage_div_55_Template_input_keyup_enter_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.saveJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "p", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u0647\u0630\u0627 \u0627\u0644\u062A\u0639\u062F\u064A\u0644 \u0633\u064A\u063A\u064A\u0631 \u0645\u0633\u0645\u0649 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0641\u064A \u0627\u0644\u0633\u062C\u0644 \u0641\u0642\u0637 \u0648\u0644\u0646 \u064A\u0624\u062B\u0631 \u0639\u0644\u0649 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0623\u0635\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingJob.fileName);
  }
}
function ImportFileClassificationsPage_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 129)(1, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_56_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.cancelJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_56_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.saveJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("loading", ctx_r2.savingJobEdit);
  }
}
function ImportFileClassificationsPage_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 132)(1, "div", 133)(2, "div", 134)(3, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641 (File Code)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "p-inputNumber", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileClassificationsPage_div_58_Template_p_inputNumber_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.fileCode, $event) || (ctx_r2.editingItem.fileCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 134)(7, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629 (Dept Code)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "p-inputNumber", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileClassificationsPage_div_58_Template_p_inputNumber_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.deptCode, $event) || (ctx_r2.editingItem.deptCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 134)(11, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641 (Classification)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileClassificationsPage_div_58_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.classification, $event) || (ctx_r2.editingItem.classification = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 134)(15, "label", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](16, "\u0627\u0644\u0642\u0633\u0645 (Department)");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileClassificationsPage_div_58_Template_input_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.department, $event) || (ctx_r2.editingItem.department = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](19, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](20, " \u0647\u0630\u0647 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A \u062A\u0646\u0639\u0643\u0633 \u0641\u0648\u0631\u0627\u064B \u0639\u0644\u0649 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0628\u0639\u062F \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 \u0627\u0644\u062D\u0641\u0638 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.fileCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.deptCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.classification);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.department);
  }
}
function ImportFileClassificationsPage_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 142)(1, "button", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_59_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_ng_template_59_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx_r2.saveEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("loading", ctx_r2.savingEdit);
  }
}
let ImportFileClassificationsPage = /*#__PURE__*/(() => {
  class ImportFileClassificationsPage {
    importService;
    dataViewService;
    signalr;
    authService;
    swal;
    jobsTable;
    selectedFile = null;
    uploading = false;
    jobs = [];
    activeJobId = null;
    activeJobProgress = 0;
    activeJobStatus = '';
    activeJobProcessedRows = 0;
    activeJobTotalRows = 0;
    activeJobErrorCount = 0;
    // Pagination
    currentPage = 1;
    pageSize = 10;
    totalRecords = 0;
    loadingJobs = false;
    jobSearch = '';
    // View Data
    showDataDialog = false;
    viewingJob = null;
    jobData = [];
    loadingJobData = false;
    // Data View Modal Pagination
    jobDataPage = 1;
    jobDataPageSize = 10;
    jobDataTotalRecords = 0;
    jobDataSearch = '';
    // Row Editing
    showEditDialog = false;
    editingItem = null;
    savingEdit = false;
    // Job Editing
    showJobEditDialog = false;
    editingJob = null;
    savingJobEdit = false;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    constructor(importService, dataViewService, signalr, authService, swal) {
      this.importService = importService;
      this.dataViewService = dataViewService;
      this.signalr = signalr;
      this.authService = authService;
      this.swal = swal;
    }
    get isAdmin() {
      return this.authService.isAdmin();
    }
    get isSupervisor() {
      return this.authService.isSupervisor();
    }
    ngOnInit() {
      this.loadJobs();
      this.listenToProgress();
      this.listenToUploadState();
      if (this.importService.currentUploadState.status === 'Failed') {
        this.importService.resetUploadState();
      }
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    listenToUploadState() {
      this.importService.uploadState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(state => {
        if (state.jobType === 'FileClassification') {
          if (state.status === 'Uploading') {
            this.uploading = true;
          } else if (state.status === 'Processing') {
            this.uploading = false;
            this.activeJobId = state.jobId;
            this.activeJobStatus = 'Pending';
            this.activeJobProgress = state.progress || 0;
            this.activeJobProcessedRows = state.processedRows || 0;
            this.activeJobTotalRows = state.totalRows || 0;
            this.activeJobErrorCount = state.errorCount || 0;
            if (this.selectedFile) {
              this.swal.toast({
                icon: 'info',
                title: 'بدأت المعالجة',
                text: 'يتم الآن رفع ومعالجة ملف تصنيفات الملفات في الخلفية'
              });
              this.selectedFile = null;
              setTimeout(() => this.refresh(), 500);
            }
          } else if (state.status === 'Failed') {
            this.uploading = false;
            this.swal.error({
              title: 'خطأ في الرفع',
              text: state.errorMessage || 'فشل رفع الملف'
            }).then(() => {
              this.importService.resetUploadState();
            });
          }
        }
      });
    }
    loadJobs() {
      this.loadingJobs = true;
      this.importService.getMyJobs(this.currentPage, this.pageSize, 'FileClassification', this.jobSearch).subscribe({
        next: result => {
          this.jobs = result.data;
          this.totalRecords = result.totalCount;
          this.loadingJobs = false;
          const activeJob = result.data.find(j => j.status === 'Processing' || j.status === 'Pending');
          if (activeJob) {
            this.activeJobId = activeJob.id;
            this.activeJobProgress = activeJob.progress;
            this.activeJobStatus = activeJob.status;
            this.activeJobProcessedRows = activeJob.processedRows;
            this.activeJobTotalRows = activeJob.totalRows;
            this.activeJobErrorCount = activeJob.errorCount;
          } else {
            this.activeJobId = null;
          }
        },
        error: () => {
          this.loadingJobs = false;
        }
      });
    }
    refresh() {
      this.currentPage = 1;
      if (this.jobsTable) this.jobsTable.first = 0;
      this.loadJobs();
    }
    onPageChange(event) {
      this.currentPage = event.first / event.rows + 1;
      this.pageSize = event.rows;
      this.loadJobs();
    }
    onJobSearch() {
      this.currentPage = 1;
      this.loadJobs();
    }
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    }
    uploadFile() {
      if (!this.selectedFile) return;
      this.importService.startUpload(this.selectedFile, 'FileClassification');
    }
    listenToProgress() {
      this.signalr.message$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(msg => {
        if (msg.type === 'excel_import_progress' && msg.data.jobType === 'FileClassification') {
          if (msg.data.jobId === this.activeJobId) {
            this.activeJobProgress = msg.data.progress;
            this.activeJobStatus = 'Processing';
            this.activeJobProcessedRows = msg.data.processed;
            this.activeJobTotalRows = msg.data.total;
            this.activeJobErrorCount = msg.data.errorCount;
            this.importService.updateProgress(msg.data.jobId, msg.data.progress, 'Processing', msg.data.processed, msg.data.total, msg.data.errorCount);
          }
          const job = this.jobs.find(j => j.id === msg.data.jobId);
          if (job) {
            job.progress = msg.data.progress;
            job.status = 'Processing';
            job.processedRows = msg.data.processed;
            job.totalRows = msg.data.total;
            job.errorCount = msg.data.errorCount;
          }
        } else if (msg.type === 'excel_import_complete' && msg.data.jobType === 'FileClassification') {
          if (msg.data.jobId === this.activeJobId) {
            this.activeJobId = null;
            this.activeJobProgress = 100;
          }
          this.loadJobs();
        }
      });
    }
    downloadErrorLog(job) {
      this.importService.downloadErrorLog(job.id, job.fileName);
    }
    downloadTemplate() {
      this.importService.downloadFileClassificationsTemplate();
    }
    getStatusSeverity(status) {
      switch (status) {
        case 'Completed':
          return 'success';
        case 'Processing':
          return 'info';
        case 'Pending':
          return 'warn';
        case 'Failed':
          return 'danger';
        default:
          return 'secondary';
      }
    }
    getStatusLabel(status) {
      switch (status) {
        case 'Completed':
          return 'مكتمل';
        case 'Processing':
          return 'جاري المعالجة';
        case 'Pending':
          return 'في الانتظار';
        case 'Failed':
          return 'فشل';
        default:
          return status;
      }
    }
    downloadOriginal(job) {
      this.importService.downloadOriginal(job.id, job.jobType);
    }
    exportJobData(job) {
      this.importService.exportJobData(job.id, job.fileName);
    }
    revertImport(job) {
      this.swal.question({
        title: 'هل أنت متأكد؟',
        text: `ستقوم هذه العملية بحذف العملية رقم (${job.id}) وجميع البيانات المرتبطة بها نهائياً!`,
        confirmButtonText: 'نعم، احذف',
        cancelButtonText: 'إلغاء'
      }).then(result => {
        if (result.isConfirmed) {
          this.swal.showLoading();
          this.importService.revertImport(job.id).subscribe({
            next: () => {
              this.swal.success({
                title: 'تم الحذف',
                text: 'تم التراجع عن العملية وحذف البيانات بنجاح.'
              });
              this.refresh();
            },
            error: err => {
              this.swal.error({
                title: 'فشل التراجع',
                text: err.error?.message || 'حدث خطأ أثناء محاولة التراجع.'
              });
            }
          });
        }
      });
    }
    viewData(job) {
      this.viewingJob = job;
      this.showDataDialog = true;
      this.jobDataPage = 1;
      this.jobDataSearch = '';
      this.loadJobData();
    }
    loadJobData() {
      if (!this.viewingJob) return;
      this.loadingJobData = true;
      this.importService.getJobData(this.viewingJob.id, this.jobDataPage, this.jobDataPageSize, this.jobDataSearch).subscribe({
        next: result => {
          this.jobData = result.data;
          this.jobDataTotalRecords = result.totalCount;
          this.loadingJobData = false;
        },
        error: err => {
          console.error('Error fetching job data', err);
          this.loadingJobData = false;
          this.swal.error({
            title: 'خطأ',
            text: 'فشل تحميل بيانات العملية'
          });
        }
      });
    }
    onJobDataPageChange(event) {
      this.jobDataPage = event.first / event.rows + 1;
      this.jobDataPageSize = event.rows;
      this.loadJobData();
    }
    onJobDataSearch() {
      this.jobDataPage = 1;
      this.loadJobData();
    }
    editItem(item) {
      this.editingItem = {
        ...item
      };
      this.showEditDialog = true;
    }
    saveEdit() {
      if (!this.editingItem) return;
      this.savingEdit = true;
      this.dataViewService.updateFileClassification(this.editingItem.id, this.editingItem).subscribe({
        next: updatedItem => {
          const index = this.jobData.findIndex(i => i.id === updatedItem.id);
          if (index !== -1) {
            this.jobData[index] = updatedItem;
          }
          this.showEditDialog = false;
          this.editingItem = null;
          this.savingEdit = false;
          this.swal.toast({
            icon: 'success',
            title: 'تم التحديث بنجاح'
          });
        },
        error: err => {
          this.savingEdit = false;
          this.swal.error({
            title: 'فشل التحديث',
            text: err.error?.message || 'حدث خطأ أثناء حفظ التعديلات'
          });
        }
      });
    }
    cancelEdit() {
      this.showEditDialog = false;
      this.editingItem = null;
    }
    editJobName(job) {
      this.editingJob = {
        ...job
      };
      this.showJobEditDialog = true;
    }
    saveJobName() {
      if (!this.editingJob) return;
      this.savingJobEdit = true;
      this.importService.updateJobFileName(this.editingJob.id, this.editingJob.fileName).subscribe({
        next: updatedJob => {
          const index = this.jobs.findIndex(j => j.id === updatedJob.id);
          if (index !== -1) {
            this.jobs[index].fileName = updatedJob.fileName;
          }
          this.showJobEditDialog = false;
          this.editingJob = null;
          this.savingJobEdit = false;
          this.swal.toast({
            icon: 'success',
            title: 'تم تحديث اسم الملف بنجاح'
          });
        },
        error: err => {
          this.savingJobEdit = false;
          this.swal.error({
            title: 'فشل التحديث',
            text: err.error || 'حدث خطأ أثناء حفظ الاسم الجديد'
          });
        }
      });
    }
    cancelJobName() {
      this.showJobEditDialog = false;
      this.editingJob = null;
    }
    static ɵfac = function ImportFileClassificationsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportFileClassificationsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_excel_import_service__WEBPACK_IMPORTED_MODULE_17__.ExcelImportService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_data_view_service__WEBPACK_IMPORTED_MODULE_18__.DataViewService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_signalr__WEBPACK_IMPORTED_MODULE_19__.Signalr), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_20__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_21__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
      type: ImportFileClassificationsPage,
      selectors: [["app-import-fileclassifications"]],
      viewQuery: function ImportFileClassificationsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.jobsTable = _t.first);
        }
      },
      decls: 60,
      vars: 56,
      consts: [["fileInput", ""], ["jobsTable", ""], [1, "card", "bg-white", "dark:bg-gray-900", "rounded-2xl", "shadow-sm", "p-6", "animate-fadein"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white", "flex", "items-center", "gap-3"], [1, "pi", "pi-tags", "text-primary", "text-2xl"], ["pButton", "", "label", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062C", "icon", "pi pi-download", 1, "p-button-outlined", "p-button-sm", "p-button-rounded", "transition-all", "duration-300", "hover:bg-primary-50", 3, "click"], ["jobType", "FileClassification"], [1, "p-8", "border-2", "border-dashed", "border-gray-200", "dark:border-gray-700", "rounded-2xl", "bg-gray-50/50", "dark:bg-gray-800/20", "text-center", "mb-8", "transition-all", "hover:border-primary/50", "group"], [1, "relative", "inline-block", "mb-4"], [1, "pi", "pi-file-excel", "text-5xl", "text-green-500", "transition-transform", "group-hover:scale-110"], [1, "absolute", "-top-1", "-right-1", "w-4", "h-4", "bg-primary", "rounded-full", "border-2", "border-white", "animate-pulse"], [1, "mb-6", "text-right", "sm:text-center"], [1, "text-lg", "font-bold", "mb-1", "text-gray-700", "dark:text-gray-200"], [1, "text-sm", "text-gray-400", "dark:text-gray-500", "italic"], ["type", "file", "accept", ".xlsx, .xls", 1, "hidden", 3, "change"], [1, "flex", "flex-col", "items-center", "gap-4"], ["class", "bg-blue-50 dark:bg-blue-900/30 px-6 py-3 rounded-xl flex items-center gap-4 border border-blue-100 dark:border-blue-800 animate-fadein", 4, "ngIf"], [1, "flex", "gap-4"], ["pButton", "", "label", "\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0644\u0641", "icon", "pi pi-search", 1, "p-button-secondary", "p-button-rounded", "min-w-[140px]", "px-6", 3, "click", "disabled"], ["pButton", "", "label", "\u0628\u062F\u0621 \u0627\u0644\u0631\u0641\u0639 \u0648\u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F", "icon", "pi pi-cloud-upload", 1, "p-button-success", "p-button-rounded", "min-w-[200px]", "px-8", "shadow-md", "hover:shadow-lg", 3, "click", "disabled", "loading"], ["class", "mb-8 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-2xl animate-fadein shadow-inner", 4, "ngIf"], [1, "mt-4"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-start", "sm:items-center", "mb-6", "gap-4"], [1, "text-lg", "font-bold", "flex", "items-center", "gap-3", "border-r-4", "border-primary", "pr-3", "mb-0"], [1, "pi", "pi-history", "text-primary", "opacity-70"], [1, "flex", "items-center", "gap-3", "w-full", "sm:w-auto"], [1, "p-input-icon-right", "flex-1", "sm:w-64"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641...", 1, "p-inputtext-sm", "w-full", "p-rounded-lg", "p-input-round", 3, "ngModelChange", "input", "ngModel"], ["pButton", "", "icon", "pi pi-refresh", 1, "p-button-text", "p-button-rounded", "p-button-sm", "p-button-secondary", "hover:bg-gray-100", "h-10", "w-10", 3, "click", "loading"], ["styleClass", "p-datatable-sm rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "totalRecords", "rowsPerPageOptions", "loading", "rowHover"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["appendTo", "body", "styleClass", "data-view-dialog shadow-2xl rounded-2xl overflow-hidden", 3, "visibleChange", "visible", "header", "modal", "breakpoints", "draggable", "resizable", "maximizable"], [1, "flex", "flex-col", "sm:flex-row", "justify-between", "items-center", "mb-6", "pt-2", "px-2", "gap-4"], [1, "p-input-icon-left", "w-full", "sm:flex-1"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0633\u0631\u064A\u0639 \u0641\u064A \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A (ID\u060C \u0627\u0644\u062A\u0627\u0631\u064A\u062E\u060C \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645...)", 1, "w-full", "p-inputtext-sm", "p-rounded-lg", "shadow-sm", "border-gray-100", 3, "ngModelChange", "input", "ngModel"], [1, "flex", "items-center", "gap-3", "bg-gray-50", "dark:bg-gray-800", "px-4", "py-2", "rounded-xl", "border", "border-gray-100", "dark:border-gray-700", "shadow-sm", "animate-fadein"], [1, "text-xs", "text-gray-500", "font-bold", "uppercase", "tracking-widest", "border-l", "pl-3", "ml-1", "border-gray-200", "dark:border-gray-600"], [1, "text-xl", "font-black", "text-primary"], ["styleClass", "p-datatable-sm rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800", "currentPageReportTemplate", "\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 {totalRecords}", "scrollHeight", "550px", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "totalRecords", "loading", "showCurrentPageReport", "scrollable"], ["pTemplate", "footer"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u0645\u0633\u0645\u0649 \u0627\u0644\u0639\u0645\u0644\u064A\u0629", "appendTo", "body", "styleClass", "shadow-2xl rounded-2xl", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], ["class", "flex flex-col gap-4 p-6", 4, "ngIf"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", "appendTo", "body", "styleClass", "row-edit-dialog shadow-2xl rounded-2xl overflow-hidden", 3, "visibleChange", "visible", "modal", "breakpoints", "draggable", "resizable", "maximizable"], ["class", "flex flex-col gap-6 p-8", 4, "ngIf"], [1, "bg-blue-50", "dark:bg-blue-900/30", "px-6", "py-3", "rounded-xl", "flex", "items-center", "gap-4", "border", "border-blue-100", "dark:border-blue-800", "animate-fadein"], [1, "bg-blue-100", "dark:bg-blue-800", "p-2", "rounded-lg"], [1, "pi", "pi-file", "text-blue-600", "dark:text-blue-300", "text-xl"], [1, "flex", "flex-col", "text-right"], [1, "font-bold", "text-blue-900", "dark:text-blue-100", "leading-tight"], [1, "text-xs", "text-blue-500"], [1, "ml-2", "w-8", "h-8", "flex", "items-center", "justify-center", "rounded-full", "bg-red-50", "text-red-500", "hover:bg-red-100", "transition-colors", "shadow-sm", 3, "click"], [1, "pi", "pi-times", "text-xs"], [1, "mb-8", "p-6", "bg-blue-50", "dark:bg-blue-900/10", "border", "border-blue-100", "dark:border-blue-800", "rounded-2xl", "animate-fadein", "shadow-inner"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "flex", "items-center", "gap-3"], [1, "pi", "pi-spin", "pi-spinner", "text-blue-600", "text-xl"], [1, "font-bold", "text-blue-900", "dark:text-blue-100"], [1, "text-xl", "font-bold", "text-blue-700", "dark:text-blue-400", "bg-white", "dark:bg-gray-800", "px-3", "py-1", "rounded-lg", "border", "border-blue-100", "shadow-sm"], ["styleClass", "h-3 rounded-full bg-blue-100 dark:bg-blue-900/40", 3, "value", "showValue"], [1, "flex", "justify-between", "mt-3", "text-sm"], [1, "text-gray-600", "dark:text-gray-300", "font-medium"], [1, "bg-blue-100", "dark:bg-blue-800", "px-2", "py-0.5", "rounded", "text-blue-700", "dark:text-blue-200"], [1, "font-bold", "text-gray-800", "dark:text-gray-100"], ["class", "mr-3 bg-red-100 dark:bg-red-900/40 px-3 py-0.5 rounded-full text-red-600 dark:text-red-400 font-bold border border-red-200", 4, "ngIf"], [1, "text-blue-500", "italic", "flex", "items-center", "gap-2"], [1, "pi", "pi-info-circle", "text-xs"], [1, "mr-3", "bg-red-100", "dark:bg-red-900/40", "px-3", "py-0.5", "rounded-full", "text-red-600", "dark:text-red-400", "font-bold", "border", "border-red-200"], [1, "pi", "pi-exclamation-triangle", "ml-1"], [1, "bg-gray-50/50", "dark:bg-gray-800/40", "border-b", "border-gray-100"], [1, "py-4", "px-4", "font-bold", "text-xs", "uppercase", "tracking-wider"], [1, "py-4", "px-4", "font-bold", "text-xs", "uppercase", "tracking-wider", "text-center"], [1, "hover:bg-blue-50/30", "dark:hover:bg-blue-900/10", "transition-colors"], [1, "py-3", "px-4", "text-xs"], [1, "py-3", "px-4"], [1, "flex", "items-center", "gap-2", "group/row"], [1, "font-bold", "text-gray-700", "dark:text-gray-200"], ["pButton", "", "icon", "pi pi-pencil", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0627\u0633\u0645", 1, "p-button-text", "p-button-xs", "p-button-rounded", "p-button-secondary", "opacity-0", "group-hover/row:opacity-100", "transition-opacity", "h-6", "w-6", 3, "click"], [1, "flex", "items-center", "gap-2"], ["styleClass", "px-3 rounded-full text-[10px] font-bold shadow-xs", 3, "severity", "value"], ["class", "pi pi-exclamation-circle text-red-500 cursor-help", "tooltipPosition", "top", 3, "pTooltip", 4, "ngIf"], [1, "py-3", "px-4", "min-w-[140px]"], [1, "flex", "flex-col", "gap-1.5"], [1, "flex", "justify-between", "items-center", "px-0.5"], [1, "text-[10px]", "text-gray-400", "font-mono"], [1, "w-full", "h-1.5", "rounded-full", "overflow-hidden", "shadow-xs", 3, "value", "showValue"], [1, "text-xs", "font-bold", "text-gray-500", "bg-gray-100", "dark:bg-gray-800", "px-2", "py-1", "rounded"], [1, "flex", "flex-col"], [1, "text-xs", "font-bold", "text-gray-800", "dark:text-gray-200"], [1, "text-gray-400", "mx-0.5"], ["class", "text-[10px] text-red-500 font-bold bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded w-fit mt-0.5", 4, "ngIf"], [1, "py-3", "px-4", "text-center"], [1, "flex", "justify-center", "gap-2"], ["pButton", "", "icon", "pi pi-eye", "pTooltip", "\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-success", "hover:bg-green-50", "h-8", "w-8", 3, "click"], ["pButton", "", "icon", "pi pi-download", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-info", "hover:bg-blue-50", "h-8", "w-8", 3, "click"], ["pButton", "", "icon", "pi pi-file-excel", "pTooltip", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-secondary", "hover:bg-gray-100", "h-8", "w-8", 3, "click"], ["pButton", "", "icon", "pi pi-filter-slash", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0633\u062C\u0644 \u0627\u0644\u0623\u062E\u0637\u0627\u0621", "tooltipPosition", "top", "class", "p-button-text p-button-sm p-button-rounded p-button-warning hover:bg-orange-50 h-8 w-8", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "\u062D\u0630\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A (\u062A\u0631\u0627\u062C\u0639)", "tooltipPosition", "top", "class", "p-button-text p-button-sm p-button-rounded p-button-danger hover:bg-red-50 h-8 w-8", 3, "click", 4, "ngIf"], ["tooltipPosition", "top", 1, "pi", "pi-exclamation-circle", "text-red-500", "cursor-help", 3, "pTooltip"], [1, "text-[10px]", "text-red-500", "font-bold", "bg-red-50", "dark:bg-red-900/20", "px-1.5", "py-0.5", "rounded", "w-fit", "mt-0.5"], ["pButton", "", "icon", "pi pi-filter-slash", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0633\u062C\u0644 \u0627\u0644\u0623\u062E\u0637\u0627\u0621", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-warning", "hover:bg-orange-50", "h-8", "w-8", 3, "click"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "\u062D\u0630\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A (\u062A\u0631\u0627\u062C\u0639)", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-danger", "hover:bg-red-50", "h-8", "w-8", 3, "click"], ["colspan", "7", 1, "text-center", "py-12", "text-gray-400", "bg-gray-50/30"], [1, "pi", "pi-folder-open", "text-3xl", "mb-2", "opacity-50", "block"], [1, "bg-gray-50", "text-gray-800", "border-b", "border-gray-100"], [1, "py-4", 2, "min-width", "80px"], [1, "py-4", "text-center", 2, "min-width", "150px"], [1, "py-4", 2, "min-width", "200px"], [1, "py-4", 2, "min-width", "150px"], [1, "hover:bg-blue-50/20", "transition-colors", "border-b", "border-gray-50"], ["pButton", "", "icon", "pi pi-pencil", "class", "p-button-text p-button-sm p-button-rounded p-button-warning hover:bg-orange-50 h-8 w-8 shadow-xs", 3, "click", 4, "ngIf"], [1, "font-mono", "text-xs", "text-gray-400"], [1, "text-center"], [1, "bg-primary-50", "text-primary-900", "px-3", "py-1", "rounded-lg", "font-black", "shadow-sm"], [1, "text-gray-700", "font-bold"], [1, "font-bold", "text-gray-800"], [1, "bg-blue-50", "text-blue-700", "px-2", "py-0.5", "rounded-md", "text-[10px]", "font-bold"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-warning", "hover:bg-orange-50", "h-8", "w-8", "shadow-xs", 3, "click"], ["colspan", "6", 1, "text-center", "py-16", "bg-gray-50/50"], [1, "pi", "pi-info-circle", "text-gray-300", "text-3xl", "mb-2", "animate-pulse", "block"], [1, "flex", "justify-center", "p-4"], ["pButton", "", "label", "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0646\u0627\u0641\u0630\u0629", "icon", "pi pi-times", 1, "p-button-text", "p-button-rounded", "p-button-lg", "px-8", "py-3", "text-gray-500", "hover:bg-gray-100", "transition-all", 3, "click"], [1, "flex", "flex-col", "gap-4", "p-6"], [1, "font-bold", "text-xs", "text-gray-500", "uppercase", "tracking-wider"], ["pInputText", "", "placeholder", "\u0627\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641 \u0647\u0646\u0627...", 1, "w-full", "h-12", "text-center", "font-bold", "text-lg", "rounded-xl", "border-gray-200", "focus:border-primary", "transition-all", "shadow-sm", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "text-[10px]", "text-gray-400", "italic", "text-center", "px-4"], [1, "flex", "gap-2", "justify-center", "pb-6"], ["pButton", "", "label", "\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u0639\u062F\u064A\u0644", "icon", "pi pi-times", 1, "p-button-text", "p-button-rounded", "px-6", "h-10", "text-gray-400", 3, "click"], ["pButton", "", "label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", "icon", "pi pi-check", 1, "p-button-primary", "p-button-rounded", "px-8", "h-10", "shadow-md", "transition-transform", "active:scale-95", 3, "click", "loading"], [1, "flex", "flex-col", "gap-6", "p-8"], [1, "bg-gray-50", "dark:bg-gray-800/50", "p-6", "rounded-2xl", "border", "border-gray-100", "dark:border-gray-700", "flex", "flex-col", "gap-5", "shadow-inner"], [1, "flex", "flex-col", "gap-2"], [1, "font-black", "text-xs", "text-gray-400", "uppercase", "tracking-[0.2em]", "pr-1"], ["pTooltip", "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u0631\u062A\u0628\u0637 \u0628\u0647\u0630\u0627 \u0627\u0644\u062A\u0635\u0646\u064A\u0641", "tooltipPosition", "right", "styleClass", "w-full", "inputStyleClass", "w-full bg-white dark:bg-gray-900 font-black text-center text-primary border-transparent h-12 shadow-sm rounded-xl focus:border-primary transition-all", 3, "ngModelChange", "ngModel", "useGrouping"], ["pTooltip", "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637", "tooltipPosition", "right", "styleClass", "w-full", "inputStyleClass", "w-full bg-white dark:bg-gray-900 font-black text-center text-primary border-transparent h-12 shadow-sm rounded-xl focus:border-primary transition-all", 3, "ngModelChange", "ngModel", "useGrouping"], ["pInputText", "", "placeholder", "\u0627\u062F\u062E\u0644 \u0627\u0644\u062A\u0635\u0646\u064A\u0641...", 1, "w-full", "bg-white", "dark:bg-gray-900", "font-bold", "text-center", "h-12", "shadow-sm", "rounded-xl", "border-transparent", "focus:border-primary", "transition-all", 3, "ngModelChange", "ngModel"], ["pInputText", "", "placeholder", "\u0627\u062F\u062E\u0644 \u0627\u0644\u0642\u0633\u0645...", 1, "w-full", "bg-white", "dark:bg-gray-900", "font-bold", "text-center", "h-12", "shadow-sm", "rounded-xl", "border-transparent", "focus:border-primary", "transition-all", 3, "ngModelChange", "ngModel"], [1, "text-[10px]", "text-gray-400", "italic", "text-center", "flex", "items-center", "justify-center", "gap-2", "px-6"], [1, "pi", "pi-shield"], [1, "flex", "gap-3", "justify-center", "pb-8", "pt-2"], ["pButton", "", "label", "\u062A\u062C\u0627\u0647\u0644", "icon", "pi pi-times-circle", 1, "p-button-text", "p-button-rounded", "text-gray-400", "px-6", "h-12", 3, "click"], ["pButton", "", "label", "\u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "icon", "pi pi-check-circle", 1, "p-button-primary", "p-button-rounded", "px-10", "h-12", "shadow-xl", "shadow-primary/20", "transition-all", "hover:scale-105", "active:scale-95", 3, "click", "loading"]],
      template: function ImportFileClassificationsPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4, " \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0644\u0641\u0627\u062A (File Classifications) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.downloadTemplate());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "app-import-dashboard", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 8)(8, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](9, "i", 10)(10, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 12)(12, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13, "\u0627\u062E\u062A\u0631 \u0645\u0644\u0641 \u0627\u0644\u0625\u0643\u0633\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "\u064A\u062F\u0639\u0645 \u0635\u064A\u063A .xlsx \u0648 .xls \u0641\u0642\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("change", function ImportFileClassificationsPage_Template_input_change_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, ImportFileClassificationsPage_div_19_Template, 10, 2, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 18)(21, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](17);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](fileInput_r4.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.uploadFile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, ImportFileClassificationsPage_div_23_Template, 22, 7, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 22)(25, "div", 23)(26, "h3", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](27, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, " \u0633\u062C\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "div", 26)(30, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](31, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileClassificationsPage_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.jobSearch, $event) || (ctx.jobSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function ImportFileClassificationsPage_Template_input_input_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onJobSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ImportFileClassificationsPage_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.refresh());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "p-table", 31, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onLazyLoad", function ImportFileClassificationsPage_Template_p_table_onLazyLoad_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onPageChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](36, ImportFileClassificationsPage_ng_template_36_Template, 15, 0, "ng-template", 32)(37, ImportFileClassificationsPage_ng_template_37_Template, 37, 17, "ng-template", 33)(38, ImportFileClassificationsPage_ng_template_38_Template, 4, 0, "ng-template", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "p-dialog", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("visibleChange", function ImportFileClassificationsPage_Template_p_dialog_visibleChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.showDataDialog, $event) || (ctx.showDataDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](40, "div", 36)(41, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](42, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("ngModelChange", function ImportFileClassificationsPage_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.jobDataSearch, $event) || (ctx.jobDataSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("input", function ImportFileClassificationsPage_Template_input_input_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onJobDataSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "div", 39)(45, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u062C\u0644\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "span", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](49, "p-table", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("onLazyLoad", function ImportFileClassificationsPage_Template_p_table_onLazyLoad_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"](ctx.onJobDataPageChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](50, ImportFileClassificationsPage_ng_template_50_Template, 13, 0, "ng-template", 32)(51, ImportFileClassificationsPage_ng_template_51_Template, 18, 6, "ng-template", 33)(52, ImportFileClassificationsPage_ng_template_52_Template, 4, 0, "ng-template", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](53, ImportFileClassificationsPage_ng_template_53_Template, 2, 0, "ng-template", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "p-dialog", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("visibleChange", function ImportFileClassificationsPage_Template_p_dialog_visibleChange_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.showJobEditDialog, $event) || (ctx.showJobEditDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](55, ImportFileClassificationsPage_div_55_Template, 7, 1, "div", 45)(56, ImportFileClassificationsPage_ng_template_56_Template, 3, 1, "ng-template", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](57, "p-dialog", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayListener"]("visibleChange", function ImportFileClassificationsPage_Template_p_dialog_visibleChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayBindingSet"](ctx.showEditDialog, $event) || (ctx.showEditDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](58, ImportFileClassificationsPage_div_58_Template, 21, 6, "div", 47)(59, ImportFileClassificationsPage_ng_template_59_Template, 3, 1, "ng-template", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.selectedFile || ctx.uploading)("loading", ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.activeJobId);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx.jobSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("loading", ctx.loadingJobs);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.jobs)("lazy", true)("paginator", true)("rows", ctx.pageSize)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](50, _c1))("loading", ctx.loadingJobs)("rowHover", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](51, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("visible", ctx.showDataDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("header", "\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A: " + (ctx.viewingJob == null ? null : ctx.viewingJob.fileName))("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](52, _c3))("draggable", false)("resizable", false)("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("ngModel", ctx.jobDataSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.jobDataTotalRecords);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.jobData)("lazy", true)("paginator", true)("rows", ctx.jobDataPageSize)("totalRecords", ctx.jobDataTotalRecords)("loading", ctx.loadingJobData)("showCurrentPageReport", true)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](53, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("visible", ctx.showJobEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("modal", true)("draggable", false)("resizable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.editingJob);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](54, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtwoWayProperty"]("visible", ctx.showEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](55, _c6))("draggable", false)("resizable", false)("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.editingItem);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_2__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_2__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_22__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__.ProgressBar, primeng_tag__WEBPACK_IMPORTED_MODULE_5__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_5__.Tag, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumberModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumber, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, primeng_datepicker__WEBPACK_IMPORTED_MODULE_11__.DatePickerModule, _components_import_dashboard_import_dashboard_component__WEBPACK_IMPORTED_MODULE_14__.ImportDashboardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      encapsulation: 2
    });
  }
  return ImportFileClassificationsPage;
})();

/***/ }),

/***/ 60350:
/*!************************************************************!*\
  !*** ./src/app/features/secretariat/secretariat-routes.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SECRETARIAT_ROUTES: () => (/* binding */ SECRETARIAT_ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_secretariat_dashboard_secretariat_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/secretariat-dashboard/secretariat-dashboard */ 72676);
/* harmony import */ var _pages_import_filedetails_import_filedetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/import-filedetails/import-filedetails */ 47146);
/* harmony import */ var _pages_import_fileclassifications_import_fileclassifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/import-fileclassifications/import-fileclassifications */ 48456);



const SECRETARIAT_ROUTES = [{
  path: '',
  component: _pages_secretariat_dashboard_secretariat_dashboard__WEBPACK_IMPORTED_MODULE_0__.SecretariatDashboard,
  data: {
    title: 'لوحة التحكم | السكرتارية'
  }
}, {
  path: 'import-filedetails',
  component: _pages_import_filedetails_import_filedetails__WEBPACK_IMPORTED_MODULE_1__.ImportFileDetailsPage,
  data: {
    title: 'استيراد تفاصيل الملفات | السكرتارية'
  }
}, {
  path: 'import-fileclassifications',
  component: _pages_import_fileclassifications_import_fileclassifications__WEBPACK_IMPORTED_MODULE_2__.ImportFileClassificationsPage,
  data: {
    title: 'استيراد تصنيفات الملفات | السكرتارية'
  }
}, {
  path: 'import-mainfiles',
  data: {
    title: 'استيراد الموكلين | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 5998).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/import-mainfiles/import-mainfiles */ 65998)).then(m => m.ImportMainfilesPage)
}, {
  path: 'import-autonumbers',
  data: {
    title: 'استيراد Auto Numbers | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 3272).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/import-autonumbers/import-autonumbers */ 53272)).then(m => m.ImportAutoNumbersPage)
}, {
  path: 'import-payments',
  data: {
    title: 'استيراد المدفوعات Payments | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 9144).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/import-payments/import-payments */ 69144)).then(m => m.ImportPaymentsPage)
}, {
  path: 'import-notes',
  data: {
    title: 'استيراد ملاحظات الجداول | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 9952).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/import-notes/import-notes */ 39952)).then(m => m.ImportNotesPage)
}, {
  path: 'import-additionalamounts',
  data: {
    title: 'استيراد مبالغ إضافية | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 7700).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/import-additional-amounts/import-additional-amounts */ 77700)).then(m => m.ImportAdditionalAmountsPage)
}, {
  path: 'import-attachments',
  data: {
    title: 'استيراد المرفقات | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 1574).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/import-attachments/import-attachments */ 1574)).then(m => m.ImportAttachmentsPage)
}, {
  path: 'import-mails',
  data: {
    title: 'رفع البريد المجدول | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 7050).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/import-mails/import-mails */ 17050)).then(m => m.ImportMailsPage)
}, {
  path: 'upload-files',
  data: {
    title: 'رفع الملفات | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 6776).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/upload-files/upload-files */ 46776)).then(m => m.UploadFiles)
}, {
  path: 'waiting-clients',
  data: {
    title: 'انتظار العملاء | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 4016).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/waiting-clients/waiting-clients */ 14016)).then(m => m.WaitingClients)
}, {
  path: 'export-and-import-num',
  data: {
    title: 'أرقام الصادر والوارد | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 2152).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/export-and-import-num/export-and-import-num */ 62152)).then(m => m.ExportAndImportNum)
}, {
  path: 'costs-print',
  data: {
    title: 'طباعة تكاليف بالوفاء | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 8196).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/costs-print/costs-print */ 28196)).then(m => m.CostsPrint)
}, {
  path: 'batch-numbers',
  data: {
    title: 'أرقام الكشوف | السكرتارية'
  },
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(5234), __webpack_require__.e(104)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/batch-numbers/batch-numbers */ 30104)).then(m => m.BatchNumbers)
}, {
  path: 'client-file-receipt',
  data: {
    title: 'استلام الملفات من الموكلين | السكرتارية'
  },
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(5234), __webpack_require__.e(8540)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/client-file-receipt/client-file-receipt */ 56159)).then(m => m.ClientFileReceipt)
}, {
  path: 'files-zein-export',
  data: {
    title: 'طباعة ملفات زين | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 4168).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/files-fifa-export/files-fifa-export */ 84168)).then(m => m.FilesFifaExport)
}, {
  path: 'files-Ooredoo-export',
  data: {
    title: 'طباعة ملفات اوريدو | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 4168).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/files-fifa-export/files-fifa-export */ 84168)).then(m => m.FilesFifaExport)
}, {
  path: 'files-fifa-export',
  data: {
    title: 'طباعة ملفات فيفا | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 4168).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/files-fifa-export/files-fifa-export */ 84168)).then(m => m.FilesFifaExport)
}, {
  path: 'upload-page',
  data: {
    title: 'رفع افادات AutoDailer | السكرتارية'
  },
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(6238), __webpack_require__.e(2704)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/upload-page/upload-page */ 72704)).then(m => m.UploadPage)
}, {
  path: 'procedures',
  data: {
    title: 'رفع الاجراءات | السكرتارية'
  },
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(6238), __webpack_require__.e(9390)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/procedures/procedures */ 69390)).then(m => m.Procedures)
}, {
  path: 'organizing-clients',
  data: {
    title: 'تنظيم دخول العملاء | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 8104).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/organizing-clients/organizing-clients */ 88104)).then(m => m.OrganizingClients)
}, {
  path: 'installment-collection',
  data: {
    title: 'تجميع ملفات الأقساط | السكرتارية'
  },
  loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e(6238), __webpack_require__.e(1722)]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/installment-collection/installment-collection */ 21722)).then(m => m.InstallmentCollection)
}, {
  path: 'formslist',
  data: {
    title: 'الأستمارات | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 6546).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forms-list/forms-list */ 96546)).then(m => m.FormsList)
}, {
  path: 'print-page',
  data: {
    title: 'طباعة ملفات من أكسيل | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 1248).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/direct-print/direct-print */ 1248)).then(m => m.DirectPrint)
}, {
  path: 'edit-record',
  data: {
    title: 'تعديل بيانات ملف | السكرتارية'
  },
  loadComponent: () => __webpack_require__.e(/*! import() */ 2544).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/edit-record/edit-record */ 2544)).then(m => m.EditRecordPage)
}];

/***/ }),

/***/ 72676:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/secretariat-dashboard/secretariat-dashboard.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SecretariatDashboard: () => (/* binding */ SecretariatDashboard)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/dashboard-layout/dashboard-layout */ 95021);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_data_view_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/data-view.service */ 59068);











function SecretariatDashboard_label_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label")(1, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_label_11_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.selectedOption, $event) || (ctx_r1.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u0648\u0627\u062D\u062F \u0641\u0642\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r1.selectedOption === "onlyOne");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedOption);
  }
}
function SecretariatDashboard_label_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label")(1, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_label_12_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.selectedOption, $event) || (ctx_r1.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A \u0628\u062F\u0648\u0646 \u0627\u0643\u0633\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r1.selectedOption === "manual");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedOption);
  }
}
function SecretariatDashboard_label_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label")(1, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_label_13_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r1.selectedOption, $event) || (ctx_r1.selectedOption = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u0627\u0643\u0633\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", ctx_r1.selectedOption === "excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedOption);
  }
}
function SecretariatDashboard_tr_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.mainNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.relatedNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.claim);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.enteredBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r5.client);
  }
}
let SecretariatDashboard = /*#__PURE__*/(() => {
  class SecretariatDashboard {
    dataViewService;
    messageService;
    selectedOption = '';
    currentFormTitle = '';
    showCommonDialog = false;
    showEditForm = false;
    showexitfile = false;
    showOnlyOne = false;
    currentAction = '';
    showEditFormOnly = false;
    showAddAutoNumberModal = false;
    showEditCodeForEmployees = false;
    showSearchNumbersModal = false;
    showAddPlaintiffModal = false;
    showEditPlaintiffFileModal = false;
    showEditEmployeeCodeModal = false;
    showAddClassificationModal = false;
    title = '';
    formData = {};
    constructor(dataViewService, messageService) {
      this.dataViewService = dataViewService;
      this.messageService = messageService;
    }
    plaintiffForm = {
      code: '1282',
      // قيمة افتراضية كما في الصورة
      name: ''
    };
    editEmployeeCodeForm = {
      code: '',
      employeeNumber: ''
    };
    // بيانات الفورم
    classificationForm = {
      sequence: '141',
      // قيمة افتراضية كما في الصورة
      name: '',
      status: ''
    };
    autoNumberForm = {
      code: '',
      autoNumber: '',
      relatedTo: 0,
      // القيمة الافتراضية كما في الصورة
      type: '',
      claim: '',
      status: '',
      notes: ''
    };
    // فتح الفورم المستقل لتعديل اكواد الموظفين
    openEditCodeDialog(data = {}) {
      this.title = 'تعديل اكواد للموظفين';
      this.formData = {
        code: '',
        employeeNumber: '',
        ...data
      };
      this.showEditCodeForEmployees = true;
    }
    closeEditCodeDialog() {
      this.showEditCodeForEmployees = false;
    }
    saveEditCodeData() {
      console.log('تم تعديل البيانات:', this.formData);
      this.closeEditCodeDialog();
    }
    searchCode = '';
    codeData = [];
    showOptions = {
      onlyOne: false,
      manual: false,
      excel: false
    };
    editFormData = {
      code: '',
      autoNumber: '',
      status: ''
    };
    currentAutoNumberObject = {};
    // بيانات الفورم
    editPlaintiffFileForm = {
      opponentCode: '',
      plaintiffCode: ''
    };
    // بيانات الفورم
    singlePaymentForm = {
      id: '',
      code: '',
      amount: '',
      date: '',
      employee: '',
      notes: ''
    };
    MOCK_DATA = [{
      _id: 1,
      code: 'A001',
      mainNumber: '12345',
      relatedNumber: '54321',
      type: 'نوع 1',
      status: 'نشط',
      claim: 'ادعاء 1',
      notes: 'ملاحظات 1',
      enteredBy: 'موظف 1',
      client: 'موكل 1'
    }, {
      _id: 2,
      code: 'B002',
      mainNumber: '67890',
      relatedNumber: '09876',
      type: 'نوع 2',
      status: 'مغلق',
      claim: 'ادعاء 2',
      notes: 'ملاحظات 2',
      enteredBy: 'موظف 2',
      client: 'موكل 2'
    }];
    actions = [{
      title: 'رفع ملفات',
      type: 'form',
      onClick: () => this.openCommonForm('رفع ملفات')
    }, {
      title: 'الحضور'
    }, {
      title: 'تنظيم الدخول العملاء',
      type: 'navigate',
      value: "/secretariat/organizing-clients"
    }, {
      title: 'بحث بالرقم في الافادات'
    }, {
      title: 'مراجعة تنفيذ جديد'
    }, {
      title: 'ادخال السداد',
      type: 'form',
      onClick: () => this.openCommonForm('ادخال السداد')
    }, {
      title: 'ارقام هواتف',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'انتظار العملاء',
      type: 'navigate',
      value: "/secretariat/waiting-clients"
    }, {
      title: 'تعديل اكواد للموظفين باكسيل',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'تجميع ملفات الاقساط',
      type: 'navigate',
      value: "/secretariat/installment-collection"
    }, {
      title: 'تعديل اكواد للموظفين',
      type: 'form',
      onClick: () => this.openEditEmployeeCodeDialog()
    }, {
      title: 'تعديل الحالات باكسيل',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'مراجعة الاستمارات',
      type: 'navigate',
      value: "/secretariat/formslist"
    }, {
      title: 'تحديث الحالات'
    }, {
      title: 'ارقام الصادر والوارد',
      type: 'navigate',
      value: "/secretariat/export-and-import-num"
    }, {
      title: 'تعديل أكواد للمجموعات'
    }, {
      title: 'اضافة مجموعة للموظف'
    }, {
      title: 'رفع ارقام البة',
      type: 'form',
      onClick: () => this.openCommonForm('رفع ارقام البة')
    }, {
      title: 'اضافة ملاحظات 4',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'Bulk SMS'
    }, {
      title: 'الرقم الموحد',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'اغلاق ملف',
      type: 'form',
      onClick: () => this.openCommonForm('اغلاق ملف')
    }, {
      title: 'ملاحظات الملفات',
      type: 'navigate',
      value: "/secretariat/import-notes"
    }, {
      title: 'رفع الإجراءات',
      type: 'navigate',
      value: "/secretariat/procedures"
    }, {
      title: 'رفع افادات AutoDailer',
      type: 'navigate',
      value: "/secretariat/upload-page"
    }, {
      title: 'رفع الارقام البة 2',
      type: 'form',
      onClick: () => this.openCommonForm('2 رفع ارقام البة')
    }, {
      title: 'اضافة تصنيف جديد',
      type: "form",
      onClick: () => this.openClassificationDialog()
    }, {
      title: 'توزيع ملفات التنفيذ',
      type: 'form',
      onClick: () => this.openCommonForm('توزيع ملفات التنفيذ')
    }, {
      title: 'تاريخ البعثيات',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'طباعة ملفات من اكسيل',
      type: 'navigate',
      value: "/secretariat/print-page"
    }, {
      title: 'اضافة المحاكم',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'اضافة ملاحظات العمل',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'تحليل الاسم المدني',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'بحث ارقام',
      type: 'form',
      onClick: () => this.openSearchNumbersDialog()
    }, {
      title: 'اضافة ملاحظات 1',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'طباعة ملفات فيفا',
      type: 'navigate',
      value: "/secretariat/files-fifa-export"
    }, {
      title: 'طباعة ملفات اوريدو',
      type: 'navigate',
      value: "/secretariat/files-Ooredoo-export"
    }, {
      title: 'طباعة ملفات زين',
      type: 'navigate',
      value: "/secretariat/files-zein-export"
    }, {
      title: 'تصنيف الداخلية والمدنية',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'اضافة ملاحظات 2',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'طباعة التكاليف',
      type: 'navigate',
      value: "/secretariat/costs-print"
    }, {
      title: 'ادخال عهدة',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'نسخ الملفات من فولدر الي اخر'
    }, {
      title: 'كشف حساب السيارات',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'اضافة ملاحظات 3',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'اعادة تسمية الملفات',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'مراجعة عهدة المناديب',
      type: 'navigate',
      value: "/secretariat/batch-numbers"
    }, {
      title: 'طباعة ملفات الأقساط'
    }, {
      title: 'استلام الملفات من الموكلين',
      type: 'navigate',
      value: "/secretariat/client-file-receipt"
    }, {
      title: 'اضافة ملاحظات 6',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'المدعي القانوني',
      type: 'form',
      onClick: () => this.openPlaintiffDialog()
    }, {
      title: 'تعديل المدعي القانوني للملف',
      type: 'form',
      onClick: () => this.openEditPlaintiffFileDialog()
    }, {
      title: 'اضافة اسماء اخرى للملفات',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'رفع الشيكات',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'تعليل قيمة المطالبة',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'تاريخ الارسال الي المتداول',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'توزيع ملفات السيارات'
    }, {
      title: 'رفع إجراءات بواية العمل',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'رفع الإجراءات القادمة',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }, {
      title: 'مرفقات ملفات الشركات',
      type: 'navigate',
      value: "/secretariat/upload-excel"
    }];
    openCommonForm(title) {
      this.currentFormTitle = title;
      this.currentAction = title;
      this.selectedOption = '';
      this.showCommonDialog = true;
      // التحكم في أي خيارات تظهر
      switch (title) {
        case 'رفع ملفات':
          this.showOptions = {
            onlyOne: true,
            manual: true,
            excel: true
          };
          break;
        case 'ادخال السداد':
          this.showOptions = {
            onlyOne: true,
            manual: true,
            excel: true
          };
          break;
        case 'رفع أرقام البة':
          this.showOptions = {
            onlyOne: true,
            manual: true,
            excel: true
          };
          break;
        case 'اغلاق ملف':
          this.showOptions = {
            onlyOne: true,
            manual: true,
            excel: true
          };
          break;
        case '2 رفع ارقام البة':
          this.showOptions = {
            onlyOne: true,
            manual: true,
            excel: true
          };
          break;
        case 'توزيع ملفات التنفيذ':
          this.showOptions = {
            onlyOne: true,
            manual: true,
            excel: true
          };
          break;
        default:
          this.showOptions = {
            onlyOne: true,
            manual: true,
            excel: true
          };
      }
    }
    confirmCommonOption() {
      if (!this.selectedOption) return;
      this.showCommonDialog = false;
      if (this.currentAction === 'رفع ملفات') {
        if (this.selectedOption === 'onlyOne') {
          window.open('secretariat/upload-files', '_blank');
        } else if (this.selectedOption === 'manual') {
          window.open('secretariat/edit-record#main', '_blank');
        } else if (this.selectedOption === 'excel') {
          window.open('secretariat/import-mainfiles', '_blank');
        }
      }
      if (this.currentAction === 'ادخال السداد') {
        if (this.selectedOption === 'onlyOne') {
          this.showOnlyOne = true;
        } else if (this.selectedOption === 'manual') {
          window.open('secretariat/edit-record#payments', '_blank');
        } else if (this.selectedOption === 'excel') {
          window.open('secretariat/import-payments', '_blank');
        }
      }
      if (this.currentFormTitle === 'رفع ارقام البة') {
        if (this.selectedOption === 'onlyOne') {
          this.showEditFormOnly = true;
        } else if (this.selectedOption === 'manual') {
          window.open('secretariat/edit-record#numbers', '_blank');
        } else if (this.selectedOption === 'excel') {
          window.open('secretariat/import-autonumbers', '_blank');
        }
      }
      if (this.currentFormTitle === 'اغلاق ملف') {
        if (this.selectedOption === 'onlyOne') {
          this.showexitfile = true;
        } else if (this.selectedOption === 'manual') {
          this.showEditForm = true;
        } else if (this.selectedOption === 'excel') {
          window.open('secretariat/upload-excel', '_blank');
        }
      }
      if (this.currentFormTitle === '2 رفع ارقام البة') {
        if (this.selectedOption === 'onlyOne') {
          this.showAddAutoNumberModal = true;
        } else if (this.selectedOption === 'manual') {
          this.showEditForm = true;
        } else if (this.selectedOption === 'excel') {
          window.open('secretariat/upload-excel', '_blank');
        }
      }
      if (this.currentFormTitle === 'توزيع ملفات التنفيذ') {
        if (this.selectedOption === 'onlyOne') {
          this.showEditCodeForEmployees = true;
        } else if (this.selectedOption === 'manual') {
          this.showEditForm = true;
        } else if (this.selectedOption === 'excel') {
          window.open('secretariat/upload-excel', '_blank');
        }
      }
    }
    statusOpen = false;
    selectStatus(value) {
      this.editFormData.status = value;
      this.statusOpen = false;
    }
    cancelCommonOption() {
      this.showCommonDialog = false;
    }
    cancelSingleForm() {
      this.showOnlyOne = false;
    }
    exitfile() {
      this.showexitfile = false;
    }
    saveSingleForm() {
      console.log('Save Data:', this.singlePaymentForm);
      this.showOnlyOne = false;
    }
    editSingleForm() {
      console.log('Edit Data:', this.singlePaymentForm);
    }
    fetchCodeData() {
      if (!this.searchCode) {
        this.codeData = [];
        return;
      }
      this.codeData = this.MOCK_DATA.filter(d => d.code.includes(this.searchCode));
    }
    editSelectedRow() {
      if (this.codeData.length === 0) return;
      const row = this.codeData[0];
      console.log('تعديل:', row);
    }
    saveChanges() {
      console.log('حفظ البيانات:', this.codeData);
      this.showEditForm = false;
    }
    editAutoNumber() {
      console.log('تم تعديل البيانات:', this.editFormData);
      if (!this.editFormData.code || !this.editFormData.autoNumber) return;
      const id = parseInt(this.editFormData.code);
      if (isNaN(id)) {
        this.messageService.add({
          severity: 'error',
          summary: 'خطأ',
          detail: 'الكود يجب أن يكون رقماً'
        });
        return;
      }
      const updateData = {
        id: id,
        autoNumberValue: this.editFormData.autoNumber,
        ...this.currentAutoNumberObject
      };
      updateData.autoNumberValue = this.editFormData.autoNumber;
      this.dataViewService.updateAutoNumber(id, updateData).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'نجاح',
            detail: 'تم التعديل بنجاح'
          });
          this.showEditFormOnly = false;
        },
        error: err => {
          this.messageService.add({
            severity: 'error',
            summary: 'خطأ',
            detail: 'حدث خطأ أثناء التحديث'
          });
          console.error(err);
        }
      });
    }
    searchAutoNumber() {
      if (!this.editFormData.code) return;
      const code = this.editFormData.code.trim();
      if (!code) return;
      this.dataViewService.getAutoNumberById(code).subscribe({
        next: data => {
          if (data) {
            this.editFormData.autoNumber = data.autoNumberValue;
            this.currentAutoNumberObject = data;
            this.messageService.add({
              severity: 'info',
              summary: 'تم العثور',
              detail: 'تم العثور على الرقم الآلي'
            });
          } else {
            this.editFormData.autoNumber = '';
            this.currentAutoNumberObject = {};
            this.messageService.add({
              severity: 'warn',
              summary: 'غير موجود',
              detail: 'لم يتم العثور على رقم آلي بهذا الكود'
            });
          }
        },
        error: err => {
          console.error(err);
          this.editFormData.autoNumber = '';
          this.currentAutoNumberObject = {};
          this.messageService.add({
            severity: 'error',
            summary: 'خطأ',
            detail: 'حدث خطأ أثناء الحلب'
          });
        }
      });
    }
    // إلغاء التعديل
    cancelEditForm() {
      this.showEditFormOnly = false;
    }
    saveAutoNumber() {
      console.log('Saving Data:', this.autoNumberForm);
      // هنا تضع منطق الحفظ (API Call)
      this.closeAutoNumberDialog();
    }
    // دالة التراجع (إفراغ البيانات)
    resetAutoNumberForm() {
      this.autoNumberForm = {
        code: '',
        autoNumber: '',
        relatedTo: 0,
        type: '',
        claim: '',
        status: '',
        notes: ''
      };
    }
    // دالة الإغلاق
    closeAutoNumberDialog() {
      this.showAddAutoNumberModal = false;
    }
    // دالة لفتح المودال (للاختبار)
    openAutoNumberDialog() {
      this.showAddAutoNumberModal = true;
    }
    // دالة لفتح المودال
    openSearchNumbersDialog() {
      this.showSearchNumbersModal = true;
    }
    // دالة للإغلاق
    closeSearchNumbersModal() {
      this.showSearchNumbersModal = false;
    }
    openPlaintiffDialog() {
      this.showAddPlaintiffModal = true;
    }
    closePlaintiffDialog() {
      this.showAddPlaintiffModal = false;
    }
    // دوال الأزرار
    newPlaintiff() {
      console.log('New clicked');
      this.plaintiffForm = {
        code: '',
        name: ''
      };
      // منطق توليد كود جديد هنا
    }
    addPlaintiff() {
      console.log('Add clicked', this.plaintiffForm);
      // منطق الإضافة لقاعدة البيانات
      this.closePlaintiffDialog();
    }
    updatePlaintiff() {
      console.log('Edit clicked', this.plaintiffForm);
      // منطق التعديل
    }
    openEditPlaintiffFileDialog() {
      this.showEditPlaintiffFileModal = true;
    }
    closeEditPlaintiffFileDialog() {
      this.showEditPlaintiffFileModal = false;
    }
    // دالة الحفظ
    saveEditPlaintiffFile() {
      console.log('Edit Data:', this.editPlaintiffFileForm);
      // منطق التعديل هنا
      this.closeEditPlaintiffFileDialog();
    }
    openEditEmployeeCodeDialog() {
      this.showEditEmployeeCodeModal = true;
    }
    closeEditEmployeeCodeDialog() {
      this.showEditEmployeeCodeModal = false;
    }
    // دالة الحفظ
    saveEditEmployeeCode() {
      console.log('Edit Data:', this.editEmployeeCodeForm);
      // منطق التعديل هنا
      this.closeEditEmployeeCodeDialog();
    }
    openClassificationDialog() {
      this.showAddClassificationModal = true;
    }
    // إغلاق المودال
    closeClassificationDialog() {
      this.showAddClassificationModal = false;
    }
    // حفظ
    saveClassification() {
      console.log('Saved:', this.classificationForm);
      this.closeClassificationDialog();
    }
    // تعديل
    updateClassification() {
      console.log('Updated:', this.classificationForm);
    }
    // تراجع (تصفير الحقول)
    resetForm() {
      this.classificationForm = {
        sequence: '141',
        name: '',
        status: ''
      };
    }
    static ɵfac = function SecretariatDashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SecretariatDashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_data_view_service__WEBPACK_IMPORTED_MODULE_7__.DataViewService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: SecretariatDashboard,
      selectors: [["app-secretariat-dashboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_3__.MessageService])],
      decls: 322,
      vars: 45,
      consts: [[3, "title", "subtitle", "actions"], [1, "modal", 3, "open"], [1, "modal-box", "modal-md"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [1, "radio-group"], [3, "selected", 4, "ngIf"], [1, "modal-footer"], [1, "form-button", "form-button-danger", 3, "click"], [1, "form-button", "form-button-success", 3, "click"], [1, "modal-box", "modal-lg"], [1, "form-grid", "form-grid-2"], [1, "form-field"], [1, "form-label"], ["type", "text", "name", "id", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "code", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "amount", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "employee", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-field", "form-field-full"], ["rows", "3", "name", "notes", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-button", "form-button-primary", 3, "click"], [1, "form-button", "form-button-warning", 3, "click"], [1, "form-button", "form-button-secondary", 3, "click"], [1, "modal-box", "modal-xl"], [1, "form-row", "mb-4"], [1, "form-field", 2, "flex", "1"], ["type", "text", "placeholder", "\u0627\u0643\u062A\u0628 \u0627\u0644\u0643\u0648\u062F", "name", "searchCode", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "modal-box", "modal-sm"], [1, "form-grid"], [2, "display", "flex", "gap", "0.5rem", "align-items", "center"], ["type", "text", "name", "code", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0643\u0648\u062F", 1, "form-input", 2, "flex", "1", 3, "ngModelChange", "keydown.enter", "ngModel"], ["type", "button", 1, "form-button", "form-button-secondary", 3, "click"], ["type", "text", "name", "autoNumber", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "status", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "\u0625\u063A\u0644\u0627\u0642"], ["value", "\u0625\u0639\u0627\u062F\u0629"], ["type", "text", "name", "name", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "modal-footer", "modal-footer-center"], ["type", "text", "name", "opponentCode", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "plaintiffCode", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "employeeNumber", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "relatedTo", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "type", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "type1"], ["value", "type2"], ["name", "claim", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", "claim1"], ["value", "claim2"], ["value", "active"], ["value", "inactive"], ["type", "text", "name", "sequence", "readonly", "", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "payOption", "value", "onlyOne", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "payOption", "value", "manual", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "payOption", "value", "excel", 3, "ngModelChange", "ngModel"]],
      template: function SecretariatDashboard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p-toast")(1, "app-dashboard-layout", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "dialog", 1)(3, "div", 2)(4, "div", 3)(5, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_7_listener() {
            return ctx.cancelCommonOption();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5)(10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, SecretariatDashboard_label_11_Template, 4, 3, "label", 7)(12, SecretariatDashboard_label_12_Template, 4, 3, "label", 7)(13, SecretariatDashboard_label_13_Template, 4, 3, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8)(15, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_15_listener() {
            return ctx.cancelCommonOption();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_17_listener() {
            return ctx.confirmCommonOption();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\u062A\u0623\u0643\u064A\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "dialog", 1)(20, "div", 11)(21, "div", 3)(22, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\u0627\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u062F\u0627\u062F (\u0648\u0627\u062D\u062F \u0641\u0642\u0637)");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_24_listener() {
            return ctx.cancelSingleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 5)(27, "form", 12)(28, "div", 13)(29, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\u0631\u0642\u0645 ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.singlePaymentForm.id, $event) || (ctx.singlePaymentForm.id = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 13)(33, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.singlePaymentForm.code, $event) || (ctx.singlePaymentForm.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 13)(37, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.singlePaymentForm.amount, $event) || (ctx.singlePaymentForm.amount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 13)(41, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.singlePaymentForm.date, $event) || (ctx.singlePaymentForm.date = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 13)(45, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "\u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.singlePaymentForm.employee, $event) || (ctx.singlePaymentForm.employee = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 20)(49, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "textarea", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_textarea_ngModelChange_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.singlePaymentForm.notes, $event) || (ctx.singlePaymentForm.notes = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 8)(53, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_53_listener() {
            return ctx.saveSingleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "\u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_55_listener() {
            return ctx.editSingleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_57_listener() {
            return ctx.cancelSingleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "dialog", 1)(60, "div", 25)(61, "div", 3)(62, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_64_listener() {
            return ctx.showEditForm = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 5)(67, "div", 26)(68, "div", 27)(69, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_71_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.searchCode, $event) || (ctx.searchCode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_71_listener() {
            return ctx.fetchCodeData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_72_listener() {
            return ctx.editSelectedRow();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div", 29)(75, "table", 30)(76, "thead")(77, "tr")(78, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "_id");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A \u0627\u0644\u0645\u0631\u062A\u0628\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "\u0627\u0644\u0646\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "\u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "\u0627\u0644\u0627\u062F\u0639\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "\u0645\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, SecretariatDashboard_tr_99_Template, 21, 10, "tr", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 8)(101, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_101_listener() {
            return ctx.saveChanges();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "\u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_103_listener() {
            return ctx.showEditForm = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "dialog", 1)(106, "div", 32)(107, "div", 3)(108, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_110_listener() {
            return ctx.cancelEditForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 5)(113, "form", 33)(114, "div", 13)(115, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "div", 34)(118, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.editFormData.code, $event) || (ctx.editFormData.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keydown.enter", function SecretariatDashboard_Template_input_keydown_enter_118_listener() {
            return ctx.searchAutoNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_119_listener() {
            return ctx.searchAutoNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120, "\u0628\u062D\u062B");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 13)(122, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_124_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.editFormData.autoNumber, $event) || (ctx.editFormData.autoNumber = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 8)(126, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_126_listener() {
            return ctx.editAutoNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_128_listener() {
            return ctx.cancelEditForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "dialog", 1)(131, "div", 32)(132, "div", 3)(133, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134, "\u0625\u063A\u0644\u0627\u0642 \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](135, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_135_listener() {
            return ctx.exitfile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](136, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 5)(138, "form", 33)(139, "div", 13)(140, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](141, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](142, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_142_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.editFormData.code, $event) || (ctx.editFormData.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "div", 13)(144, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](145, "\u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_select_ngModelChange_146_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.editFormData.status, $event) || (ctx.editFormData.status = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "option", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](151, "option", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](152, "\u0625\u0639\u0627\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "div", 8)(154, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_154_listener() {
            return ctx.editAutoNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](155, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_156_listener() {
            return ctx.exitfile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](157, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "dialog", 1)(159, "div", 2)(160, "div", 3)(161, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](162, "\uD83D\uDDC2\uFE0F \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u062F\u0639\u0649 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_163_listener() {
            return ctx.closePlaintiffDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](164, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "div", 5)(166, "form", 33)(167, "div", 13)(168, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_170_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.plaintiffForm.code, $event) || (ctx.plaintiffForm.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 13)(172, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](173, "\u0627\u0644\u0645\u062F\u0639\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](174, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_174_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.plaintiffForm.name, $event) || (ctx.plaintiffForm.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "div", 43)(176, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_176_listener() {
            return ctx.newPlaintiff();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](177, "\u062C\u062F\u064A\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_178_listener() {
            return ctx.addPlaintiff();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179, "\u0627\u0636\u0627\u0641\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_180_listener() {
            return ctx.updatePlaintiff();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "dialog", 1)(183, "div", 2)(184, "div", 3)(185, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](186, "\u2696\uFE0F \u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0645\u062F\u0639\u0649 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0644\u0644\u0645\u0644\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](187, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_187_listener() {
            return ctx.closeEditPlaintiffFileDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](188, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "div", 5)(190, "form", 33)(191, "div", 13)(192, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, "\u0643\u0648\u062F \u0627\u0644\u062E\u0635\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "input", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_194_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.editPlaintiffFileForm.opponentCode, $event) || (ctx.editPlaintiffFileForm.opponentCode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](195, "div", 13)(196, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197, "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u0639\u0649 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_198_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.editPlaintiffFileForm.plaintiffCode, $event) || (ctx.editPlaintiffFileForm.plaintiffCode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](199, "div", 8)(200, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_200_listener() {
            return ctx.saveEditPlaintiffFile();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_202_listener() {
            return ctx.closeEditPlaintiffFileDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](203, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](204, "dialog", 1)(205, "div", 32)(206, "div", 3)(207, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](208, "\u062A\u0639\u062F\u064A\u0644 \u0643\u0648\u062F \u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_209_listener() {
            return ctx.closeEditEmployeeCodeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](210, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](211, "div", 5)(212, "form", 33)(213, "div", 13)(214, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](215, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](216, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_216_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.editEmployeeCodeForm.code, $event) || (ctx.editEmployeeCodeForm.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](217, "div", 13)(218, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](219, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](220, "input", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_220_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.editEmployeeCodeForm.employeeNumber, $event) || (ctx.editEmployeeCodeForm.employeeNumber = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](221, "div", 8)(222, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_222_listener() {
            return ctx.saveEditEmployeeCode();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](223, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](224, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_224_listener() {
            return ctx.closeEditEmployeeCodeDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](225, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](226, "dialog", 1)(227, "div", 11)(228, "div", 3)(229, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](230, "\u0627\u0636\u0627\u0641\u0629 \u0631\u0642\u0645 \u0627\u0644\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](231, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_231_listener() {
            return ctx.closeAutoNumberDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](232, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](233, "div", 5)(234, "form", 12)(235, "div", 13)(236, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](237, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](238, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_238_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.autoNumberForm.code, $event) || (ctx.autoNumberForm.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](239, "div", 13)(240, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](241, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](242, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_242_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.autoNumberForm.autoNumber, $event) || (ctx.autoNumberForm.autoNumber = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](243, "div", 13)(244, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](245, "\u0645\u0631\u062A\u0628\u0637 \u0628\u0640");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](246, "input", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_246_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.autoNumberForm.relatedTo, $event) || (ctx.autoNumberForm.relatedTo = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](247, "div", 13)(248, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](249, "\u0627\u0644\u0646\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](250, "select", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_select_ngModelChange_250_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.autoNumberForm.type, $event) || (ctx.autoNumberForm.type = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](251, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](252, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](253, "option", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](254, "\u0646\u0648\u0639 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](255, "option", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](256, "\u0646\u0648\u0639 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](257, "div", 13)(258, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](259, "\u0627\u0644\u0627\u062F\u0639\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](260, "select", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_select_ngModelChange_260_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.autoNumberForm.claim, $event) || (ctx.autoNumberForm.claim = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](261, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](262, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0627\u062F\u0639\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](263, "option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](264, "\u0627\u062F\u0639\u0627\u0621 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](265, "option", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](266, "\u0627\u062F\u0639\u0627\u0621 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](267, "div", 13)(268, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](269, "\u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](270, "select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_select_ngModelChange_270_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.autoNumberForm.status, $event) || (ctx.autoNumberForm.status = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](271, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](272, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](273, "option", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](274, "\u0646\u0634\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](275, "option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](276, "\u063A\u064A\u0631 \u0646\u0634\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](277, "div", 20)(278, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](279, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](280, "textarea", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_textarea_ngModelChange_280_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.autoNumberForm.notes, $event) || (ctx.autoNumberForm.notes = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](281, "div", 8)(282, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_282_listener() {
            return ctx.saveAutoNumber();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](283, "\u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](284, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_284_listener() {
            return ctx.resetAutoNumberForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](285, "\u062A\u0631\u0627\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](286, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_286_listener() {
            return ctx.closeAutoNumberDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](287, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](288, "dialog", 1)(289, "div", 2)(290, "div", 3)(291, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](292, "\uD83D\uDDC2\uFE0F \u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](293, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_293_listener() {
            return ctx.closeClassificationDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](294, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](295, "div", 5)(296, "form", 33)(297, "div", 13)(298, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](299, "\u0627\u0644\u062A\u0633\u0644\u0633\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](300, "input", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_300_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.classificationForm.sequence, $event) || (ctx.classificationForm.sequence = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](301, "div", 13)(302, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](303, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](304, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_input_ngModelChange_304_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.classificationForm.name, $event) || (ctx.classificationForm.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](305, "div", 13)(306, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](307, "\u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](308, "select", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function SecretariatDashboard_Template_select_ngModelChange_308_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.classificationForm.status, $event) || (ctx.classificationForm.status = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](309, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](310, "\u0627\u0644\u0642\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](311, "option", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](312, "\u0646\u0634\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](313, "option", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](314, "\u063A\u064A\u0631 \u0646\u0634\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](315, "div", 43)(316, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_316_listener() {
            return ctx.resetForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](317, "\u062A\u0631\u0627\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](318, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_318_listener() {
            return ctx.updateClassification();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](319, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](320, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SecretariatDashboard_Template_button_click_320_listener() {
            return ctx.saveClassification();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](321, "\u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", " \u0642\u0633\u0645 \u0627\u0644\u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629")("subtitle", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u063A\u0628 \u0641\u064A \u062A\u0646\u0641\u064A\u0630\u0647\u0627")("actions", ctx.actions);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showCommonDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u0627\u062E\u062A\u064A\u0627\u0631 \u0637\u0631\u064A\u0642\u0629 \u0625\u062F\u062E\u0627\u0644 ", ctx.currentFormTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showOptions.onlyOne);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showOptions.manual);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showOptions.excel);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showOnlyOne);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.singlePaymentForm.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.singlePaymentForm.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.singlePaymentForm.amount);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.singlePaymentForm.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.singlePaymentForm.employee);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.singlePaymentForm.notes);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showEditForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.searchCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.codeData);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showEditFormOnly);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.editFormData.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.editFormData.autoNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showexitfile);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.editFormData.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.editFormData.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showAddPlaintiffModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.plaintiffForm.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.plaintiffForm.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showEditPlaintiffFileModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.editPlaintiffFileForm.opponentCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.editPlaintiffFileForm.plaintiffCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showEditEmployeeCodeModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.editEmployeeCodeForm.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.editEmployeeCodeForm.employeeNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showAddAutoNumberModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.autoNumberForm.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.autoNumberForm.autoNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.autoNumberForm.relatedTo);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.autoNumberForm.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.autoNumberForm.claim);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.autoNumberForm.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.autoNumberForm.notes);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showAddClassificationModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.classificationForm.sequence);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.classificationForm.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.classificationForm.status);
        }
      },
      dependencies: [_core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__.DashboardLayout, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, primeng_toast__WEBPACK_IMPORTED_MODULE_4__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_4__.Toast],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  background-color: hsl(var(--b1));\n  min-height: 100%;\n}\n\n\n\n[_nghost-%COMP%]   dialog.modal[_ngcontent-%COMP%] {\n  position: fixed !important;\n  inset: 0 !important;\n  margin: 0 !important;\n  padding: 1rem !important;\n  border: none !important;\n  background: transparent !important;\n  display: none;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  max-width: none !important;\n  max-height: none !important;\n  width: auto !important;\n  height: auto !important;\n}\n\n[_nghost-%COMP%]   dialog.modal[open][_ngcontent-%COMP%] {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n[_nghost-%COMP%]   dialog.modal[_ngcontent-%COMP%]::backdrop {\n  background-color: rgba(0, 0, 0, 0.6) !important;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\n[_nghost-%COMP%]   .modal-box[_ngcontent-%COMP%] {\n  margin: auto !important;\n  position: relative;\n}\n    \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2VjcmV0YXJpYXQvcGFnZXMvc2VjcmV0YXJpYXQtZGFzaGJvYXJkL3NlY3JldGFyaWF0LWRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQjs7QUFFQSxxRUFBcUU7QUFDckU7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0Msa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKHZhcigtLWIxKSk7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogRW5zdXJlIGFsbCBkaWFsb2cgbW9kYWxzIGluIHNlY3JldGFyaWF0IGFyZSBjZW50ZXJlZCBhbmQgdmlzaWJsZSAqL1xyXG46aG9zdCBkaWFsb2cubW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gIGluc2V0OiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMXJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IGRpYWxvZy5tb2RhbFtvcGVuXSB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCBkaWFsb2cubW9kYWw6OmJhY2tkcm9wIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNikgIWltcG9ydGFudDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxufVxyXG5cclxuOmhvc3QgLm1vZGFsLWJveCB7XHJcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAgICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return SecretariatDashboard;
})();

/***/ })

}]);
//# sourceMappingURL=350.js.map