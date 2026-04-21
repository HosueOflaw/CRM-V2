"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[2822],{

/***/ 12822:
/*!****************************************************!*\
  !*** ./src/app/features/finance/finance-routes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FINANCE_ROUTES: () => (/* binding */ FINANCE_ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_finance_dashboard_finance_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/finance-dashboard/finance-dashboard */ 69877);
/* harmony import */ var _pages_company_invoice_export_company_invoice_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/company-invoice-export/company-invoice-export */ 19895);


const FINANCE_ROUTES = [{
  path: '',
  component: _pages_finance_dashboard_finance_dashboard__WEBPACK_IMPORTED_MODULE_0__.FinanceDashboard
}, {
  path: 'company-invoice-export',
  component: _pages_company_invoice_export_company_invoice_export__WEBPACK_IMPORTED_MODULE_1__.CompanyInvoiceExport
}];

/***/ }),

/***/ 19895:
/*!*****************************************************************************************!*\
  !*** ./src/app/features/finance/pages/company-invoice-export/company-invoice-export.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompanyInvoiceExport: () => (/* binding */ CompanyInvoiceExport)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_custody_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/custody.service */ 8053);
/* harmony import */ var _services_ClientService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ClientService */ 95776);








function CompanyInvoiceExport_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r1.name);
  }
}
function CompanyInvoiceExport_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", type_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](type_r2.value);
  }
}
function CompanyInvoiceExport_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 42)(5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInvoiceExport_div_50_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.bulkUpdate(true, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u062A\u0645 \u0627\u0644\u062A\u0633\u0644\u064A\u0645 \u0644\u0644\u0634\u0631\u0643\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInvoiceExport_div_50_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.bulkUpdate(false, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " \u064A\u062A\u062D\u0645\u0644\u0647\u0627 \u0627\u0644\u0645\u0643\u062A\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInvoiceExport_div_50_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.downloadSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0643\u0644 (ZIP) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u062A\u0645 \u062A\u062D\u062F\u064A\u062F ", ctx_r3.selectedIds.size, " \u0633\u062C\u0644");
  }
}
function CompanyInvoiceExport_tr_75_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInvoiceExport_tr_75_button_27_Template_button_click_0_listener() {
      const att_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.viewAttachment(att_r8.fileContent));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CompanyInvoiceExport_tr_75_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function CompanyInvoiceExport_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 49)(1, "td")(2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CompanyInvoiceExport_tr_75_Template_input_change_2_listener() {
      const s_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.toggleSelection(s_r6.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td")(4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td")(16, "div", 55)(17, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "KWD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td")(23, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 36)(26, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, CompanyInvoiceExport_tr_75_button_27_Template, 2, 0, "button", 60)(28, CompanyInvoiceExport_tr_75_span_28_Template, 2, 0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r3.selectedIds.has(s_r6.id ?? -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", s_r6.expenseName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 11, s_r6.dateAdded, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r6.clientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r6.codeAutoNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r6.statementNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](19, 14, s_r6.amount, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", s_r6.sendToACC ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", s_r6.sendToACC ? "\u0645\u062D\u0627\u0633\u0628" : "\u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", s_r6.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !s_r6.attachments || s_r6.attachments.length === 0);
  }
}
function CompanyInvoiceExport_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 65)(2, "div", 66)(3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div")(6, "h4", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u062C\u0631\u0628 \u062A\u063A\u064A\u064A\u0631 \u0645\u0639\u0627\u064A\u064A\u0631 \u0627\u0644\u0628\u062D\u062B \u0623\u0648 \u0627\u062E\u062A\u064A\u0627\u0631 \u0634\u0631\u0643\u0629 \u0623\u062E\u0631\u0649 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
}
let CompanyInvoiceExport = /*#__PURE__*/(() => {
  class CompanyInvoiceExport {
    custodyService;
    clientService;
    companies = [];
    reportData = [];
    selectedCompanyCode = null;
    selectedExpenseType = null;
    selectedIds = new Set();
    totalSelectedAmount = 0;
    expenseTypes = {
      1: 'اجراءات قضائية',
      2: 'شهادات - معلومات مدنية',
      3: 'رسوم قضائية',
      4: 'تصوير ومصروفات ادارية',
      5: 'ايجار كرين',
      6: 'مصروفات غير مستردة'
    };
    constructor(custodyService, clientService) {
      this.custodyService = custodyService;
      this.clientService = clientService;
    }
    ngOnInit() {
      this.loadCompanies();
    }
    loadCompanies() {
      this.clientService.getAllClients().subscribe({
        next: res => this.companies = res,
        error: err => console.error('Error fetching companies', err)
      });
    }
    search() {
      this.custodyService.getReportData(this.selectedCompanyCode || undefined, this.selectedExpenseType || undefined).subscribe({
        next: res => {
          this.reportData = res;
          this.selectedIds.clear();
          this.updateTotal();
        },
        error: err => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Error', 'فشل جلب البيانات', 'error')
      });
    }
    toggleSelection(id) {
      if (id === undefined || id === null) return;
      if (this.selectedIds.has(id)) {
        this.selectedIds.delete(id);
      } else {
        this.selectedIds.add(id);
      }
      this.updateTotal();
    }
    toggleAllSelection() {
      if (this.isAllSelected()) {
        this.selectedIds.clear();
      } else {
        this.reportData.forEach(item => {
          if (item.id !== undefined && item.id !== null) {
            this.selectedIds.add(item.id);
          }
        });
      }
      this.updateTotal();
    }
    isAllSelected() {
      const selectable = this.reportData.filter(item => item.id !== undefined && item.id !== null);
      return selectable.length > 0 && this.selectedIds.size === selectable.length;
    }
    updateTotal() {
      this.totalSelectedAmount = this.reportData.filter(item => item.id !== undefined && item.id !== null && this.selectedIds.has(item.id)).reduce((sum, item) => sum + (item.amount || 0), 0);
    }
    bulkUpdate(toCompany, toOffice) {
      const ids = Array.from(this.selectedIds);
      if (ids.length === 0) return;
      const actionText = toCompany ? 'تم التسليم للشركة' : 'يتحملها المكتب';
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
        title: 'هل أنت متأكد؟',
        text: `سيتم تحديد ${ids.length} سجل كـ ${actionText}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'نعم، نفذ',
        cancelButtonText: 'إلغاء'
      }).then(result => {
        if (result.isConfirmed) {
          this.custodyService.bulkUpdateStatus(ids, toCompany, toOffice).subscribe({
            next: () => {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('تم بنجاح', 'تم تحديث الحالات بنجاح', 'success');
              this.search(); // Refresh
            },
            error: err => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Error', 'حدث خطأ أثناء التحديث', 'error')
          });
        }
      });
    }
    downloadSelected() {
      const ids = Array.from(this.selectedIds);
      if (ids.length === 0) return;
      this.custodyService.downloadZip(ids).subscribe({
        next: blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `Custody_Attachments_${new Date().getTime()}.zip`;
          link.click();
          window.URL.revokeObjectURL(url);
        },
        error: err => sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Error', 'فشل تحميل الملفات', 'error')
      });
    }
    viewAttachment(content) {
      const byteCharacters = atob(content);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const file = new Blob([byteArray], {
        type: 'application/pdf'
      });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    }
    printReport() {
      window.print();
    }
    static ɵfac = function CompanyInvoiceExport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CompanyInvoiceExport)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_custody_service__WEBPACK_IMPORTED_MODULE_5__.CustodyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_ClientService__WEBPACK_IMPORTED_MODULE_6__.ClientService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CompanyInvoiceExport,
      selectors: [["app-company-invoice-export"]],
      decls: 77,
      vars: 17,
      consts: [[1, "page-container", "animate-fade-in"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-6", "mb-10"], [1, "text-4xl", "font-black", "text-slate-900", "tracking-tight", "flex", "items-center", "gap-4"], [1, "p-3", "bg-blue-600", "rounded-2xl", "text-white", "shadow-lg", "shadow-blue-200"], [1, "fas", "fa-file-export"], [1, "text-slate-400", "mt-2", "font-medium"], [1, "premium-card", "p-6", "flex", "items-center", "gap-8", "shadow-sm"], [1, "text-right"], [1, "text-[10px]", "font-black", "uppercase", "text-slate-400", "tracking-widest", "mb-1"], [1, "text-3xl", "font-black", "text-red-600", "tabular-nums"], [1, "text-sm"], [1, "h-10", "w-[1px]", "bg-slate-100"], [1, "text-2xl", "font-black", "text-slate-900"], [1, "premium-card", "p-8", "mb-8", "shadow-sm", "border", "border-slate-50"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "lg:grid-cols-5", "gap-6", "items-end"], [1, "col-span-1", "md:col-span-2"], [1, "block", "text-[11px]", "font-black", "text-slate-500", "uppercase", "tracking-widest", "mb-3", "mr-1"], [1, "relative"], [1, "select", "select-bordered", "w-full", "h-14", "rounded-2xl", "bg-slate-50", "border-none", "font-bold", "text-slate-900", "focus:ring-2", "ring-blue-500/20", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-slate-300", "pointer-events-none"], [1, "fas", "fa-chevron-down"], [1, "select", "select-bordered", "w-full", "h-14", "rounded-2xl", "bg-slate-50", "border-none", "font-bold", "text-slate-900", 3, "ngModelChange", "ngModel"], [1, "col-span-1", "lg:col-span-2", "flex", "gap-3"], [1, "btn", "h-14", "flex-1", "premium-btn", "bg-blue-600", "text-white", "border-none", "hover:bg-blue-700", 3, "click"], [1, "fas", "fa-search", "ml-2"], [1, "btn", "h-14", "w-20", "premium-btn", "bg-slate-900", "text-white", "border-none", "hover:bg-slate-800", 3, "click"], [1, "fas", "fa-print"], ["class", "action-bar-sticky animate-slide-up", 4, "ngIf"], [1, "premium-card", "overflow-hidden", "shadow-2xl", "shadow-slate-200/50"], [1, "overflow-x-auto"], [1, "table", "premium-table", "w-full"], [1, "w-16"], ["type", "checkbox", 1, "checkbox-custom", 3, "change", "checked"], [1, "text-right", "whitespace-nowrap"], [1, "text-center"], ["class", "hover:bg-blue-50/30 transition-colors", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "action-bar-sticky", "animate-slide-up"], [1, "glass-badge", "p-3", "pr-8", "flex", "items-center", "gap-4", "shadow-2xl", "border-blue-100", "ring-4", "ring-blue-500/5"], [1, "text-sm", "font-black", "text-blue-600", "ml-4"], [1, "flex", "gap-2"], [1, "btn", "btn-sm", "h-11", "px-6", "premium-btn", "bg-green-500", "text-white", "border-none", "hover:bg-green-600", 3, "click"], [1, "fas", "fa-check-circle", "ml-2"], [1, "btn", "btn-sm", "h-11", "px-6", "premium-btn", "bg-slate-800", "text-white", "border-none", "hover:bg-slate-900", 3, "click"], [1, "fas", "fa-building", "ml-2"], [1, "btn", "btn-sm", "h-11", "px-6", "premium-btn", "bg-blue-600", "text-white", "border-none", "hover:bg-blue-700", 3, "click"], [1, "fas", "fa-download", "ml-2"], [1, "hover:bg-blue-50/30", "transition-colors"], [1, "px-3", "py-1", "bg-slate-100", "rounded-lg", "text-[10px]", "font-black", "text-slate-500"], [1, "text-slate-500", "font-bold", "text-xs"], [1, "font-bold", "text-slate-900"], [1, "font-black", "text-blue-600", "tabular-nums"], [1, "text-slate-400", "text-xs", "font-medium", "max-w-[200px]", "truncate"], [1, "flex", "flex-col", "items-end"], [1, "text-lg", "font-black", "text-slate-900"], [1, "text-[9px]", "font-black", "text-slate-300", "uppercase"], [1, "badge", "badge-sm", "border-none", "font-bold", "text-[10px]", "px-3", "py-3", 3, "ngClass"], [1, "flex", "justify-center", "gap-1"], ["class", "btn btn-xs btn-square bg-slate-900 text-white border-none hover:bg-blue-600", "title", "View PDF", 3, "click", 4, "ngFor", "ngForOf"], ["class", "text-slate-300 italic text-[10px]", 4, "ngIf"], ["title", "View PDF", 1, "btn", "btn-xs", "btn-square", "bg-slate-900", "text-white", "border-none", "hover:bg-blue-600", 3, "click"], [1, "fas", "fa-file-pdf", "text-[10px]"], [1, "text-slate-300", "italic", "text-[10px]"], ["colspan", "9", 1, "py-20", "text-center"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "w-20", "h-20", "bg-slate-50", "rounded-full", "flex", "items-center", "justify-center", "text-slate-200", "text-3xl"], [1, "fas", "fa-folder-open"], [1, "font-black", "text-slate-900"], [1, "text-slate-400", "text-sm", "mt-1"]],
      template: function CompanyInvoiceExport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2)(4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " \u062A\u0635\u062F\u064A\u0631 \u0641\u0627\u062A\u0648\u0631\u0629 \u0627\u0644\u0634\u0631\u0643\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u0625\u062F\u0627\u0631\u0629 \u0648\u062A\u0635\u0641\u064A\u0629 \u0645\u062F\u064A\u0648\u0646\u064A\u0627\u062A \u0627\u0644\u0634\u0631\u0643\u0627\u062A \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0641\u0627\u062A\u0648\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h2", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "KWD");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div")(20, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13)(25, "div", 14)(26, "div", 15)(27, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 17)(30, "select", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CompanyInvoiceExport_Template_select_ngModelChange_30_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedCompanyCode, $event) || (ctx.selectedCompanyCode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0634\u0631\u0643\u0629...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, CompanyInvoiceExport_option_33_Template, 2, 2, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div")(37, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u0646\u0648\u0639 \u0627\u0644\u0645\u0635\u0631\u0648\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "select", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CompanyInvoiceExport_Template_select_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedExpenseType, $event) || (ctx.selectedExpenseType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u0627\u0644\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, CompanyInvoiceExport_option_42_Template, 2, 2, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "keyvalue");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 24)(45, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInvoiceExport_Template_button_click_45_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " \u0628\u062D\u062B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CompanyInvoiceExport_Template_button_click_48_listener() {
            return ctx.printReport();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, CompanyInvoiceExport_div_50_Template, 14, 1, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 30)(52, "div", 31)(53, "table", 32)(54, "thead")(55, "tr")(56, "th", 33)(57, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CompanyInvoiceExport_Template_input_change_57_listener() {
            return ctx.toggleAllSelection();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "\u0628\u064A\u0627\u0646 \u0627\u0644\u0642\u064A\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "th", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "\u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "th", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, CompanyInvoiceExport_tr_75_Template, 29, 17, "tr", 37)(76, CompanyInvoiceExport_tr_76_Template, 10, 0, "tr", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](15, 12, ctx.totalSelectedAmount, "1.3-3"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.selectedIds.size);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCompanyCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.companies);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedExpenseType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", null);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 15, ctx.expenseTypes));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedIds.size > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.isAllSelected());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.reportData);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.reportData && ctx.reportData.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.KeyValuePipe],
      styles: [".page-container[_ngcontent-%COMP%] {\n    padding: 2rem;\n    background: #f8fafc;\n    min-height: 100vh;\n}\n\n.premium-card[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.8);\n    -webkit-backdrop-filter: blur(12px);\n            backdrop-filter: blur(12px);\n    border: 1px solid rgba(255, 255, 255, 0.3);\n    border-radius: 1.5rem;\n}\n\n.glass-badge[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.5);\n    -webkit-backdrop-filter: blur(8px);\n            backdrop-filter: blur(8px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 1rem;\n}\n\n.premium-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f1f5f9;\n    color: #64748b;\n    font-weight: 800;\n    text-transform: uppercase;\n    font-size: 0.75rem;\n    letter-spacing: 0.05em;\n    padding: 1rem;\n}\n\n.premium-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1rem;\n    vertical-align: middle;\n}\n\n.premium-btn[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n    font-weight: 700;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.premium-btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}\n\n.checkbox-custom[_ngcontent-%COMP%] {\n    appearance: none;\n    width: 1.1rem;\n    height: 1.1rem;\n    border: 2px solid #e2e8f0;\n    border-radius: 0.6rem;\n    display: inline-block;\n    position: relative;\n    background: #fff;\n    transition: all 0.15s ease;\n    cursor: pointer;\n}\n\n.checkbox-custom[_ngcontent-%COMP%]:checked {\n    background: #2563eb;\n    border-color: #2563eb;\n    box-shadow: 0 4px 10px -3px rgba(37, 99, 235, 0.4);\n}\n\n.checkbox-custom[_ngcontent-%COMP%]:focus-visible {\n    outline: 2px solid rgba(37, 99, 235, 0.35);\n    outline-offset: 2px;\n}\n\n.action-bar-sticky[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: 2rem;\n    z-index: 50;\n    width: fit-content;\n    margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmluYW5jZS9wYWdlcy9jb21wYW55LWludm9pY2UtZXhwb3J0L2NvbXBhbnktaW52b2ljZS1leHBvcnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsK0NBQStDO0FBQ25EOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG59XHJcblxyXG4uZ2xhc3MtYmFkZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWJsZSB0Ym9keSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLnByZW1pdW0tYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLnByZW1pdW0tYnRuOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jaGVja2JveC1jdXN0b20ge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6IDEuMXJlbTtcbiAgICBoZWlnaHQ6IDEuMXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTJlOGYwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2hlY2tib3gtY3VzdG9tOmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggLTNweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjQpO1xufVxuXG4uY2hlY2tib3gtY3VzdG9tOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCByZ2JhKDM3LCA5OSwgMjM1LCAwLjM1KTtcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xufVxuXG4uYWN0aW9uLWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgYm90dG9tOiAycmVtO1xuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return CompanyInvoiceExport;
})();

/***/ }),

/***/ 25089:
/*!**************************************************************************!*\
  !*** ./src/app/features/finance/components/voucher-form/voucher-form.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VoucherForm: () => (/* binding */ VoucherForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);






let VoucherForm = /*#__PURE__*/(() => {
  class VoucherForm {
    ref = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogRef, {
      optional: true
    });
    config = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogConfig, {
      optional: true
    });
    isReceipt = true;
    cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    formData = {};
    ngOnInit() {
      // Get data from dialog config if available
      if (this.config?.data) {
        this.isReceipt = this.config.data.isReceipt !== false;
      }
    }
    closeForm() {
      if (this.ref) {
        this.ref.close();
      } else {
        this.cancel.emit();
      }
    }
    static ɵfac = function VoucherForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || VoucherForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: VoucherForm,
      selectors: [["app-voucher-form"]],
      inputs: {
        isReceipt: "isReceipt"
      },
      outputs: {
        cancel: "cancel"
      },
      decls: 88,
      vars: 12,
      consts: [["dir", "rtl", 1, "form-container"], [1, "form-header"], [1, "form-grid", "form-grid-2"], [1, "form-field"], [1, "form-label"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "form-row"], [1, "form-input", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "form-button", "form-button-outline"], ["type", "date", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-field", "form-field-full"], ["rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-actions", 2, "margin-top", "1.5rem", "padding-top", "1rem", "border-top", "1px solid var(--surface-border)"], [1, "form-button", "form-button-secondary", 3, "click"], [1, "form-button", "form-button-primary"], [1, "form-button", "form-button-warning"], [1, "form-button", "form-button-outline"], [1, "form-button", "form-button-danger", 3, "click"]],
      template: function VoucherForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_select_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.type, $event) || (ctx.formData.type = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0646\u0642\u062F\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0634\u064A\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u062A\u062D\u0648\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3)(18, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u0627\u0644\u062A\u0643\u0644\u0641\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7)(21, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.cost, $event) || (ctx.formData.cost = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3)(25, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u0627\u0644\u062D\u0633\u0627\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7)(28, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.account, $event) || (ctx.formData.account = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 3)(32, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u0646\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_input_ngModelChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.date, $event) || (ctx.formData.date = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 3)(36, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u0627\u0644\u064A\u062F\u0648\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_input_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.manual, $event) || (ctx.formData.manual = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 3)(40, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u0627\u0644\u062F\u0641\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_input_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.payment, $event) || (ctx.formData.payment = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 3)(44, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u0634\u064A\u0643 \u0631\u0642\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.chequeNo, $event) || (ctx.formData.chequeNo = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 3)(48, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_select_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.paymentMethod, $event) || (ctx.formData.paymentMethod = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\u0627\u062E\u062A\u0631 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u0646\u0642\u062F\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u0634\u064A\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 3)(60, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u0639\u0644\u0649 \u0628\u0646\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_select_ngModelChange_62_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.bank, $event) || (ctx.formData.bank = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0628\u0646\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u0628\u0646\u0643 \u0627\u0644\u0643\u0648\u064A\u062A \u0627\u0644\u0648\u0637\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "\u0628\u064A\u062A \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0627\u0644\u0643\u0648\u064A\u062A\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u0628\u0646\u0643 \u0627\u0644\u062E\u0644\u064A\u062C");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 12)(72, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "textarea", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function VoucherForm_Template_textarea_ngModelChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.formData.note, $event) || (ctx.formData.note = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 14)(76, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VoucherForm_Template_button_click_76_listener() {
            return ctx.closeForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "\u2190 \u0631\u062C\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "\uD83D\uDCBE \u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "\u062A\u0631\u0627\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "\u0637\u0628\u0627\u0639\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VoucherForm_Template_button_click_86_listener() {
            return ctx.closeForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isReceipt ? "\uD83E\uDDFE \u0633\u0646\u062F \u0642\u0628\u0636" : "\uD83D\uDCB8 \u0633\u0646\u062F \u0635\u0631\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u0646\u0648\u0639 ", ctx.isReceipt ? "\u0627\u0644\u0625\u064A\u0631\u0627\u062F" : "\u0627\u0644\u0645\u0635\u0631\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.cost);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.account);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.manual);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.payment);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.chequeNo);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.paymentMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.bank);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.note);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--text-color);\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmluYW5jZS9jb21wb25lbnRzL3ZvdWNoZXItZm9ybS92b3VjaGVyLWZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0taGVhZGVyIGgyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return VoucherForm;
})();

/***/ }),

/***/ 26513:
/*!********************************************************************************!*\
  !*** ./src/app/features/finance/components/receipt-voucher/receipt-voucher.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReceiptVoucher: () => (/* binding */ ReceiptVoucher)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);







function ReceiptVoucher_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](type_r1);
  }
}
function ReceiptVoucher_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const method_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", method_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](method_r2);
  }
}
let ReceiptVoucher = /*#__PURE__*/(() => {
  class ReceiptVoucher {
    ref = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_4__.DynamicDialogRef, {
      optional: true
    });
    cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    voucherForm = {
      receiptNumber: 0,
      voucherNumber: 0,
      voucherDate: '2025-03-12',
      voucherType: '',
      paymentMethod: '',
      account: '',
      amount: 0,
      discount: 0,
      notes: ''
    };
    // بيانات وهمية للقوائم المنسدلة
    voucherTypes = ['نقدي', 'شيك', 'تحويل بنكي'];
    paymentMethods = ['تحصيل أقساط', 'رسوم قضائية', 'رسوم متابعة'];
    saveVoucher() {
      console.log('Voucher Saved:', this.voucherForm);
      // منطق الحفظ إلى SQL Server API هنا
      this.closeVoucherFormModal();
    }
    editVoucher() {
      console.log('Voucher Updated:', this.voucherForm);
      // منطق التعديل
      this.closeVoucherFormModal();
    }
    closeVoucherFormModal() {
      if (this.ref) {
        this.ref.close();
      } else {
        this.cancel.emit();
      }
    }
    static ɵfac = function ReceiptVoucher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReceiptVoucher)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ReceiptVoucher,
      selectors: [["app-receipt-voucher"]],
      outputs: {
        cancel: "cancel"
      },
      decls: 64,
      vars: 11,
      consts: [["dir", "rtl", 1, "form-container"], [1, "form-header"], [1, "form-grid", "form-grid-3"], [1, "form-field"], [1, "form-label"], ["type", "number", "name", "receiptNumber", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "voucherDate", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "voucherNumber", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-grid", "form-grid-2"], [1, "form-row"], ["name", "voucherType", 1, "form-select", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", 1, "form-button", "form-button-outline"], ["name", "paymentMethod", 1, "form-select", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "account", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "amount", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "discount", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "notes", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-actions", 2, "margin-top", "1.5rem", "padding-top", "1rem", "border-top", "1px solid var(--surface-border)"], [1, "form-button", "form-button-secondary", 3, "click"], [1, "form-button", "form-button-success", 3, "click"], [1, "form-button", "form-button-primary", 3, "click"], [1, "form-button", "form-button-danger", 3, "click"], [3, "value"]],
      template: function ReceiptVoucher_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uD83E\uDDFE \u0633\u0646\u062F \u0642\u0628\u0636");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0631\u0642\u0645 \u0627\u0644\u0625\u064A\u0635\u0627\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.receiptNumber, $event) || (ctx.voucherForm.receiptNumber = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u0646\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.voucherDate, $event) || (ctx.voucherForm.voucherDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3)(14, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0631\u0642\u0645 \u0627\u0644\u0633\u0646\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.voucherNumber, $event) || (ctx.voucherForm.voucherNumber = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8)(18, "div", 3)(19, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0646\u0648\u0639 \u0627\u0644\u0633\u0646\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "select", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_select_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.voucherType, $event) || (ctx.voucherForm.voucherType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ReceiptVoucher_option_25_Template, 2, 2, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 3)(29, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 9)(32, "select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_select_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.paymentMethod, $event) || (ctx.voucherForm.paymentMethod = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0627\u062E\u062A\u0631 \u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ReceiptVoucher_option_35_Template, 2, 2, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "+");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 2)(39, "div", 3)(40, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u0627\u0644\u062D\u0633\u0627\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_input_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.account, $event) || (ctx.voucherForm.account = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 3)(44, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.amount, $event) || (ctx.voucherForm.amount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 3)(48, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u0627\u0644\u062A\u062E\u0641\u064A\u0636");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.discount, $event) || (ctx.voucherForm.discount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 3)(52, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "textarea", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ReceiptVoucher_Template_textarea_ngModelChange_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.voucherForm.notes, $event) || (ctx.voucherForm.notes = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 19)(56, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptVoucher_Template_button_click_56_listener() {
            return ctx.closeVoucherFormModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\u2190 \u0631\u062C\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptVoucher_Template_button_click_58_listener() {
            return ctx.saveVoucher();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "\uD83D\uDCBE \u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptVoucher_Template_button_click_60_listener() {
            return ctx.editVoucher();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReceiptVoucher_Template_button_click_62_listener() {
            return ctx.closeVoucherFormModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.receiptNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.voucherDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.voucherNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.voucherType);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.voucherTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.paymentMethod);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.paymentMethods);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.account);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.amount);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.discount);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.voucherForm.notes);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
      styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--text-color);\n}\n\n.form-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n@media (max-width: 768px) {\n  .form-grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmluYW5jZS9jb21wb25lbnRzL3JlY2VpcHQtdm91Y2hlci9yZWNlaXB0LXZvdWNoZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZm9ybS1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRlciBoMiB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4uZm9ybS1ncmlkLTMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICBnYXA6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm0tZ3JpZC0zIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ReceiptVoucher;
})();

/***/ }),

/***/ 55781:
/*!********************************************************************************!*\
  !*** ./src/app/features/finance/components/add-client-form/add-client-form.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddClientForm: () => (/* binding */ AddClientForm)
/* harmony export */ });
/* harmony import */ var C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_ClientService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ClientService */ 95776);










const _c0 = () => ["code", "name"];
function AddClientForm_div_18_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const year_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", year_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](year_r4);
  }
}
function AddClientForm_div_18_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", s_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](s_r5);
  }
}
function AddClientForm_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u0643\u0648\u062F \u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.code, $event) || (ctx_r2.clientForm.code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 20)(7, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 21)(10, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.name, $event) || (ctx_r2.clientForm.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 16)(12, "div", 17)(13, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 21)(16, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.contractNumber, $event) || (ctx_r2.clientForm.contractNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.contractYear, $event) || (ctx_r2.clientForm.contractYear = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AddClientForm_div_18_option_20_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 17)(22, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\u0627\u0644\u0642\u0637\u0627\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_select_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.sector, $event) || (ctx_r2.clientForm.sector = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0637\u0627\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AddClientForm_div_18_option_27_Template, 2, 2, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 17)(29, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "\u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.legalClaimant, $event) || (ctx_r2.clientForm.legalClaimant = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 16)(33, "div", 17)(34, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "\u0627\u0644\u0648\u0638\u064A\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.work, $event) || (ctx_r2.clientForm.work = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 17)(38, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "\u0627\u0644\u0639\u0636\u0648\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.membership, $event) || (ctx_r2.clientForm.membership = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 17)(42, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "\u0627\u064A\u0645\u064A\u0644 \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.companyEmail, $event) || (ctx_r2.clientForm.companyEmail = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 17)(46, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "\u0641\u0627\u0643\u0633 \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.companyFax, $event) || (ctx_r2.clientForm.companyFax = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 17)(50, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "\u0633\u062C\u0644 \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.companyRegister, $event) || (ctx_r2.clientForm.companyRegister = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 17)(54, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\u0646\u0648\u0639 \u0627\u0644\u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.registerType, $event) || (ctx_r2.clientForm.registerType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 16)(58, "div", 17)(59, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "\u0627\u0644\u0634\u0631\u064A\u0643 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.partner1, $event) || (ctx_r2.clientForm.partner1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 17)(63, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "\u0627\u0644\u0634\u0631\u064A\u0643 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.partner2, $event) || (ctx_r2.clientForm.partner2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 17)(67, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "\u0627\u0644\u0634\u0631\u064A\u0643 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_69_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.partner3, $event) || (ctx_r2.clientForm.partner3 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 16)(71, "div", 17)(72, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.cid, $event) || (ctx_r2.clientForm.cid = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 17)(76, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_78_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.address, $event) || (ctx_r2.clientForm.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 17)(80, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_input_ngModelChange_82_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.nationality, $event) || (ctx_r2.clientForm.nationality = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 17)(84, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_textarea_ngModelChange_86_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.note, $event) || (ctx_r2.clientForm.note = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 17)(88, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "\u0628\u064A\u0627\u0646 \u0627\u0644\u062A\u0639\u0627\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "textarea", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_18_Template_textarea_ngModelChange_90_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.clientForm.contractDetails, $event) || (ctx_r2.clientForm.contractDetails = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.contractNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.contractYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.years);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.sector);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.sectors);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.legalClaimant);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.work);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.membership);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.companyEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.companyFax);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.companyRegister);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.registerType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.partner1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.partner2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.partner3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.cid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.clientForm.contractDetails);
  }
}
function AddClientForm_div_19_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_div_19_tr_26_Template_button_click_6_listener() {
      const c_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeContact(c_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r8.relation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r8.phone);
  }
}
function AddClientForm_div_19_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0642\u0627\u0645 \u0645\u0636\u0627\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddClientForm_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u0625\u0636\u0627\u0641\u0629 \u0631\u0642\u0645 \u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 50)(5, "div", 51)(6, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_19_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newContact.phone, $event) || (ctx_r2.newContact.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 51)(10, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u0645\u0646\u0633\u0648\u0628 \u0625\u0644\u0649");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_19_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.newContact.relation, $event) || (ctx_r2.newContact.relation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_div_19_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " \u0625\u0636\u0627\u0641\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 55)(16, "table", 56)(17, "thead")(18, "tr")(19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "\u0645\u0646\u0633\u0648\u0628 \u0625\u0644\u0649");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AddClientForm_div_19_tr_26_Template, 8, 2, "tr", 57)(27, AddClientForm_div_19_tr_27_Template, 3, 0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newContact.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newContact.relation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.clientForm.contacts);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.clientForm.contacts.length === 0);
  }
}
function AddClientForm_div_20_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 64)(4, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_20_tr_14_Template_input_ngModelChange_4_listener($event) {
      const det_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](det_r10.downPayment, $event) || (det_r10.downPayment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 64)(6, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_20_tr_14_Template_input_ngModelChange_6_listener($event) {
      const det_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](det_r10.finalPayment, $event) || (det_r10.finalPayment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 64)(8, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_20_tr_14_Template_input_ngModelChange_8_listener($event) {
      const det_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](det_r10.collectionCommission, $event) || (det_r10.collectionCommission = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const det_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](det_r10.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", det_r10.downPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", det_r10.category + "_dp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", det_r10.finalPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", det_r10.category + "_fp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", det_r10.collectionCommission);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("name", det_r10.category + "_cc");
  }
}
function AddClientForm_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 55)(2, "table", 61)(3, "thead")(4, "tr", 62)(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u0645\u0642\u062F\u0645 %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\u0645\u0648\u062E\u0631 %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\u0639\u0645\u0648\u0644\u0629 \u062A\u062D\u0635\u064A\u0644 %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AddClientForm_div_20_tr_14_Template, 9, 7, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.clientForm.financialDetails);
  }
}
function AddClientForm_div_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" \uD83D\uDCCE ", ctx_r2.selectedFile.name, " ");
  }
}
function AddClientForm_div_21_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_div_21_tr_27_Template_button_click_6_listener() {
      const att_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeAttachment(att_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const att_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](att_r14 == null ? null : att_r14.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](att_r14 == null ? null : att_r14.file == null ? null : att_r14.file.name);
  }
}
function AddClientForm_div_21_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0631\u0641\u0642\u0627\u062A \u0645\u0636\u0627\u0641\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddClientForm_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 48)(2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0641\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 66, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AddClientForm_div_21_Template_input_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 50)(7, "div", 51)(8, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0645\u0631\u0641\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function AddClientForm_div_21_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx_r2.attachmentNote, $event) || (ctx_r2.attachmentNote = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_div_21_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const fileInput_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](fileInput_r12.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " \u0627\u062E\u062A\u0631 \u0645\u0644\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_div_21_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addAttachmentToQueue());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " \u0625\u0636\u0627\u0641\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AddClientForm_div_21_div_15_Template, 2, 1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 55)(17, "table", 56)(18, "thead")(19, "tr")(20, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "\u0627\u0644\u0628\u064A\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "\u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AddClientForm_div_21_tr_27_Template, 8, 2, "tr", 57)(28, AddClientForm_div_21_tr_28_Template, 3, 0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.attachmentNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.selectedFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.attachments.length === 0);
  }
}
// import { Subscription } from 'rxjs';
let AddClientForm = /*#__PURE__*/(() => {
  class AddClientForm {
    clientService;
    showModal;
    activeTab = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)('basic', ...(ngDevMode ? [{
      debugName: "activeTab"
    }] : []));
    isSaving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)(false, ...(ngDevMode ? [{
      debugName: "isSaving"
    }] : []));
    clientForm = {
      code: 0,
      name: '',
      cid: '',
      address: '',
      nationality: '',
      work: '',
      membership: '',
      companyEmail: '',
      companyFax: '',
      companyRegister: '',
      partner1: '',
      partner2: '',
      partner3: '',
      registerType: '',
      note: '',
      contractNumber: '',
      contractYear: new Date().getFullYear(),
      sector: '',
      legalClaimant: '',
      contractDetails: '',
      patchNo: '',
      dateFinished: undefined,
      deptAmount: 0,
      lawyerUser: 0,
      courtUser: 0,
      mdUser: 0,
      legalAdvisorUser: 0,
      contacts: [],
      financialDetails: [{
        category: 'اتعاب',
        downPayment: 0,
        finalPayment: 0,
        collectionCommission: 0
      }, {
        category: 'ودي',
        downPayment: 0,
        finalPayment: 0,
        collectionCommission: 0
      }, {
        category: 'تنفيذ',
        downPayment: 0,
        finalPayment: 0,
        collectionCommission: 0
      }, {
        category: 'قضائي مدنى',
        downPayment: 0,
        finalPayment: 0,
        collectionCommission: 0
      }, {
        category: 'قضائي مدعى عليه',
        downPayment: 0,
        finalPayment: 0,
        collectionCommission: 0
      }, {
        category: 'خبراء',
        downPayment: 0,
        finalPayment: 0,
        collectionCommission: 0
      }, {
        category: 'اجراء',
        downPayment: 0,
        finalPayment: 0,
        collectionCommission: 0
      }]
    };
    newContact = {
      phone: '',
      relation: ''
    };
    attachments = [];
    selectedFile = null;
    attachmentNote = '';
    years = Array.from({
      length: 15
    }, (_, i) => new Date().getFullYear() - i);
    sectors = ['تجاري', 'مدني', 'جنائي'];
    clientsData = []; // To be loaded from service if needed
    constructor(clientService) {
      this.clientService = clientService;
    }
    openModal() {
      this.showModal.set(true);
      this.resetForm();
    }
    closeModal() {
      this.showModal.set(false);
    }
    resetForm() {
      this.clientForm = {
        code: 0,
        name: '',
        cid: '',
        address: '',
        nationality: '',
        work: '',
        membership: '',
        companyEmail: '',
        companyFax: '',
        companyRegister: '',
        partner1: '',
        partner2: '',
        partner3: '',
        registerType: '',
        note: '',
        contractNumber: '',
        contractYear: new Date().getFullYear(),
        sector: '',
        legalClaimant: '',
        contractDetails: '',
        patchNo: '',
        dateFinished: undefined,
        deptAmount: 0,
        lawyerUser: 0,
        courtUser: 0,
        mdUser: 0,
        legalAdvisorUser: 0,
        contacts: [],
        financialDetails: [{
          category: 'اتعاب',
          downPayment: 0,
          finalPayment: 0,
          collectionCommission: 0
        }, {
          category: 'ودي',
          downPayment: 0,
          finalPayment: 0,
          collectionCommission: 0
        }, {
          category: 'تنفيذ',
          downPayment: 0,
          finalPayment: 0,
          collectionCommission: 0
        }, {
          category: 'قضائي مدنى',
          downPayment: 0,
          finalPayment: 0,
          collectionCommission: 0
        }, {
          category: 'قضائي مدعى عليه',
          downPayment: 0,
          finalPayment: 0,
          collectionCommission: 0
        }, {
          category: 'خبراء',
          downPayment: 0,
          finalPayment: 0,
          collectionCommission: 0
        }, {
          category: 'اجراء',
          downPayment: 0,
          finalPayment: 0,
          collectionCommission: 0
        }]
      };
      this.attachments = [];
      this.selectedFile = null;
      this.attachmentNote = '';
      this.activeTab.set('basic');
    }
    addContact() {
      if (this.newContact.phone) {
        this.clientForm.contacts.push({
          ...this.newContact
        });
        this.newContact = {
          phone: '',
          relation: ''
        };
      }
    }
    removeContact(contact) {
      this.clientForm.contacts = this.clientForm.contacts.filter(c => c !== contact);
    }
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        this.attachmentNote = this.selectedFile.name;
      }
    }
    addAttachmentToQueue() {
      if (this.selectedFile) {
        this.attachments.push({
          file: this.selectedFile,
          note: this.attachmentNote
        });
        this.selectedFile = null;
        this.attachmentNote = '';
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
      }
    }
    removeAttachment(att) {
      this.attachments = this.attachments.filter(a => a !== att);
    }
    onClientSelected(selected) {
      this.clientForm.code = parseInt(selected.code) || 0;
      this.clientForm.name = selected.name || '';
    }
    addClient() {
      var _this = this;
      return (0,C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this.clientForm.code || !_this.clientForm.name) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            icon: 'warning',
            title: 'تحذير',
            text: 'كود الموكل واسم الموكل مطلوبان'
          });
          return;
        }
        _this.isSaving.set(true);
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
          title: 'جاري الحفظ...',
          didOpen: () => sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().showLoading()
        });
        try {
          const clientData = {
            ..._this.clientForm,
            deptCode: 1,
            userAdded: 1
          };
          const response = yield _this.clientService.createClient(clientData).toPromise();
          const fileCode = response?.id || response?.Id;
          if (fileCode && _this.attachments.length > 0) {
            for (const att of _this.attachments) {
              yield _this.clientService.uploadAttachment(Number(fileCode), att.file, att.note, 1, 1).toPromise();
            }
          }
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            icon: 'success',
            title: 'نجح!',
            text: 'تم إضافة الموكل بنجاح'
          });
          _this.closeModal();
        } catch (error) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            icon: 'error',
            title: 'خطأ',
            text: error.message || 'حدث خطأ غير متوقع'
          });
        } finally {
          _this.isSaving.set(false);
        }
      })();
    }
    static ɵfac = function AddClientForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddClientForm)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_ClientService__WEBPACK_IMPORTED_MODULE_7__.ClientService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: AddClientForm,
      selectors: [["app-add-client-form"]],
      inputs: {
        showModal: "showModal"
      },
      decls: 29,
      vars: 19,
      consts: [["clientLookup", ""], ["fileInput", ""], ["dir", "rtl", 1, "modal", 3, "open"], [1, "modal-box", "modal-xl"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], [3, "ngSubmit"], [1, "tabs", "tabs-boxed", "mb-4"], [1, "tab", 3, "click"], ["class", "tab-content", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "form-button", "form-button-secondary", 3, "click"], ["type", "button", 1, "form-button", "form-button-success", 3, "click", "disabled"], [3, "itemSelected", "title", "columns", "data"], [1, "tab-content"], [1, "form-grid", "form-grid-3"], [1, "form-field"], [1, "form-label", "form-label-required"], ["type", "number", "name", "code", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-field", 2, "grid-column", "span 2"], [1, "form-row"], ["type", "text", "name", "name", "required", "", 1, "form-input", 2, "flex", "1", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "contractNumber", "required", "", 1, "form-input", 2, "width", "80px", 3, "ngModelChange", "ngModel"], [2, "padding", "0 0.5rem"], ["name", "contractYear", 1, "form-select", 2, "width", "100px", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-label"], ["name", "sector", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "text", "name", "legalClaimant", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "work", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "membership", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "companyEmail", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "companyFax", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "companyRegister", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "registerType", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner1", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner2", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner3", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "cid", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "address", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "nationality", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "note", "rows", "2", 1, "form-textarea", 3, "ngModelChange", "ngModel"], ["name", "contractDetails", "rows", "3", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [3, "value"], [3, "ngValue"], [1, "form-section"], [1, "form-section-title"], [1, "form-row", 2, "gap", "1rem"], [1, "form-field", 2, "flex", "1"], ["type", "text", "name", "phone", "placeholder", "\u0627\u062F\u062E\u0644 \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644", 1, "form-input", 3, "ngModelChange", "ngModel"], ["name", "relation", "placeholder", "\u0645\u0646\u0633\u0648\u0628 \u0625\u0644\u0649", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "form-button", "form-button-primary", 2, "align-self", "flex-end", 3, "click"], [1, "table-container"], [1, "table"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button", 1, "form-button", "form-button-danger", 3, "click"], ["colspan", "3", 1, "text-center", 2, "padding", "2rem"], [1, "table", "table-bordered", "financial-table"], [2, "background", "var(--primary-color)", "color", "white"], [2, "font-weight", "bold", "color", "var(--primary-color)", "text-align", "right"], [1, "padding-0"], ["type", "number", "placeholder", "0", 1, "table-input", 3, "ngModelChange", "ngModel", "name"], ["type", "file", 1, "hidden", 3, "change"], ["type", "text", "name", "attachmentNote", "placeholder", "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0645\u0631\u0641\u0642", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "form-button", "form-button-secondary", 2, "align-self", "flex-end", 3, "click"], ["style", "margin-top: 0.5rem; color: var(--primary-color);", 4, "ngIf"], [2, "margin-top", "0.5rem", "color", "var(--primary-color)"], ["type", "button", 1, "form-button", "form-button-danger", 2, "padding", "0.25rem 0.5rem", 3, "click"], ["colspan", "3", 1, "text-center", 2, "color", "var(--text-color-secondary)", "padding", "2rem"]],
      template: function AddClientForm_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "dialog", 2)(1, "div", 3)(2, "div", 4)(3, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.closeModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6)(8, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function AddClientForm_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.addClient());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 8)(10, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.activeTab.set("basic"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.activeTab.set("contacts"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062A\u0648\u0627\u0635\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_Template_a_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.activeTab.set("financial"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_Template_a_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.activeTab.set("attachments"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AddClientForm_div_18_Template, 91, 22, "div", 10)(19, AddClientForm_div_19_Template, 28, 4, "div", 10)(20, AddClientForm_div_20_Template, 15, 1, "div", 10)(21, AddClientForm_div_21_Template, 29, 4, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 11)(23, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.closeModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, " \u2190 \u0631\u062C\u0648\u0639 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddClientForm_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.addClient());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "app-lookup-modal", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("itemSelected", function AddClientForm_Template_app_lookup_modal_itemSelected_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onClientSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("open", ctx.showModal());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("tab-active", ctx.activeTab() === "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("tab-active", ctx.activeTab() === "contacts");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("tab-active", ctx.activeTab() === "financial");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("tab-active", ctx.activeTab() === "attachments");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeTab() === "basic");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeTab() === "contacts");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeTab() === "financial");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.activeTab() === "attachments");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.isSaving());
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.isSaving() ? "\u062C\u0627\u0631\u064A \u0627\u0644\u062D\u0641\u0638..." : "\uD83D\uDCBE \u062D\u0641\u0638", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0643\u0644")("columns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](18, _c0))("data", ctx.clientsData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_4__.LookupModal],
      styles: [".tab-content[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.editable-cell[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  border: 1px solid var(--surface-border);\n  min-width: 80px;\n  text-align: right;\n  font-family: monospace;\n  transition: background-color 0.2s ease;\n}\n\n.editable-cell[_ngcontent-%COMP%]:focus {\n  background-color: #fff9c4 !important;\n  outline: 2px solid var(--primary-color);\n}\n\n.editable-cell[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover);\n}\n\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--content-border-radius);\n  border: 1px solid var(--surface-border);\n  margin-top: 1rem;\n}\n\n.checkbox-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.5rem;\n}\n\n.checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}\n\n.checkbox-group[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n  accent-color: var(--primary-color);\n}\n\n.form-grid-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n@media (max-width: 768px) {\n  .form-grid-3[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.financial-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: right;\n  vertical-align: middle;\n  padding: 0.75rem;\n}\n\n.padding-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.table-input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  padding: 0.75rem;\n  text-align: center;\n  background: transparent;\n  color: var(--text-color);\n  font-family: inherit;\n  font-size: 0.95rem;\n  transition: all 0.2s ease;\n}\n\n.table-input[_ngcontent-%COMP%]:focus {\n  background: rgba(var(--primary-color-rgb), 0.05);\n  outline: none;\n  box-shadow: inset 0 0 0 2px var(--primary-color);\n}\n\n.table-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.table-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmluYW5jZS9jb21wb25lbnRzL2FkZC1jbGllbnQtZm9ybS9hZGQtY2xpZW50LWZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwyQ0FBMkM7RUFDM0MsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELGFBQWE7RUFDYixnREFBZ0Q7QUFDbEQ7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWCIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY29udGVudCB7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGV4dC1jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVkaXRhYmxlLWNlbGwge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5lZGl0YWJsZS1jZWxsOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWM0ICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4uZWRpdGFibGUtY2VsbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XHJcbn1cclxuXHJcbi50YWJsZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tY29udGVudC1ib3JkZXItcmFkaXVzKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmNoZWNrYm94LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLmNoZWNrYm94LWdyb3VwIGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hlY2tib3gtZ3JvdXAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgYWNjZW50LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmZvcm0tZ3JpZC0zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtLWdyaWQtMyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuXHJcbi5maW5hbmNpYWwtdGFibGUgdGgge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxufVxyXG5cclxuLnBhZGRpbmctMCB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMC43NXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4udGFibGUtaW5wdXQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjA1KTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnRhYmxlLWlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4udGFibGUtaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return AddClientForm;
})();

/***/ }),

/***/ 64873:
/*!**************************************************************************************!*\
  !*** ./src/app/features/finance/components/daily-restrictions/daily-restrictions.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DailyRestrictions: () => (/* binding */ DailyRestrictions)
/* harmony export */ });
/* harmony import */ var _voucher_form_voucher_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../voucher-form/voucher-form */ 25089);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _expense_form_expense_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../expense-form/expense-form */ 66785);
/* harmony import */ var _receipt_voucher_receipt_voucher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../receipt-voucher/receipt-voucher */ 26513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);








function DailyRestrictions_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\uD83D\uDCB0 \u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 5)(5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0633\u0646\u062F \u0642\u0628\u0636"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\uD83E\uDDFE \u0633\u0646\u062F \u0642\u0628\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0633\u0646\u062F \u0635\u0631\u0641"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\uD83D\uDCB8 \u0633\u0646\u062F \u0635\u0631\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0642\u064A\u0648\u062F \u0627\u0644\u064A\u0648\u0645\u064A\u0629"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\uD83D\uDCCB \u0642\u064A\u0648\u062F \u0627\u0644\u064A\u0648\u0645\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0634\u062C\u0631\u0629 \u0627\u0644\u062A\u0631\u0645\u064A\u0632"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\uD83C\uDF33 \u0634\u062C\u0631\u0629 \u0627\u0644\u062A\u0631\u0645\u064A\u0632");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 5)(14, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0639\u0645\u0648\u0644\u0627\u062A \u0627\u0644\u0645\u0644\u0641\u0627\u062A"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\uD83D\uDCC1 \u0639\u0645\u0648\u0644\u0627\u062A \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0645\u0635\u0631\u0648\u0641"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0645\u0635\u0631\u0648\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 5)(19, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "\uD83D\uDCB3 \u0623\u0631\u0635\u062F\u0629 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u0639\u0645\u0648\u0645\u064A\u0629"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "\uD83D\uDCCA \u0627\u0644\u0645\u064A\u0632\u0627\u0646\u064A\u0629 \u0627\u0644\u0639\u0645\u0648\u0645\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 5)(24, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0639\u0646 \u0643\u0634\u0641 \u0627\u0644\u062A\u0635\u0641\u064A\u0629"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\uD83D\uDD0D \u0643\u0634\u0641 \u0627\u0644\u062A\u0635\u0641\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0639\u0646 \u0643\u0634\u0641 \u0639\u0647\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\uD83D\uDC65 \u0643\u0634\u0641 \u0639\u0647\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 5)(29, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0639\u0646 \u0643\u0634\u0641 \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0629"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\uD83D\uDCE5 \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0639\u0646 \u0627\u0644\u0643\u0634\u0648\u0641 \u0628\u0631\u0642\u0645 \u0627\u0644\u0642\u064A\u062F"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\uD83D\uDD22 \u0627\u0644\u0643\u0634\u0648\u0641 \u0628\u0631\u0642\u0645 \u0627\u0644\u0642\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 5)(34, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u064A\u062A\u062D\u0645\u0644\u0647\u0627 \u0627\u0644\u0645\u0643\u062A\u0628"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "\uD83C\uDFE2 \u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0627\u0644\u0645\u0643\u062A\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\uD83D\uDE97 \u062A\u0635\u0641\u064A\u0629 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 5)(39, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0645\u0642\u062F\u0645 \u0648\u0645\u0624\u062E\u0631 \u0625\u064A\u062C\u0627\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "\uD83C\uDFE0 \u0625\u064A\u062C\u0627\u0631 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0643\u0644 \u0627\u0644\u0639\u0647\u062F \u0639\u0644\u0649 \u0627\u0644\u0633\u064A\u0633\u062A\u0645"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "\uD83D\uDCCB \u0643\u0644 \u0627\u0644\u0639\u0647\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 5)(44, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0643\u062A\u0628 \u0628\u0627\u0643\u0633\u0644"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\uD83D\uDCCA \u0631\u0627\u0628\u0637 \u0627\u0643\u0633\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0633\u0646\u062F \u0642\u0628\u0636 - \u062C\u062F\u064A\u062F"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "\uD83E\uDDFE \u0633\u0646\u062F \u0642\u0628\u0636 \u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.onButtonClick("\u0633\u0646\u062F \u0635\u0631\u0641 - \u062C\u062F\u064A\u062F"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "\uD83D\uDCB8 \u0633\u0646\u062F \u0635\u0631\u0641 \u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 14)(51, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DailyRestrictions_div_0_Template_button_click_51_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeMainForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "\u2190 \u0631\u062C\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function DailyRestrictions_app_voucher_form_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-voucher-form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancel", function DailyRestrictions_app_voucher_form_1_Template_app_voucher_form_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.backToMainForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("isReceipt", ctx_r1.formType === "receipt");
  }
}
function DailyRestrictions_app_expense_form_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-expense-form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancel", function DailyRestrictions_app_expense_form_2_Template_app_expense_form_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeExpenseTypeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function DailyRestrictions_app_receipt_voucher_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-receipt-voucher", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancel", function DailyRestrictions_app_receipt_voucher_3_Template_app_receipt_voucher_cancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeReceiptVoucherForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
let DailyRestrictions = /*#__PURE__*/(() => {
  class DailyRestrictions {
    router;
    ref;
    constructor(router, ref) {
      this.router = router;
      this.ref = ref;
    }
    // الحالة
    showMainForm = true;
    showVoucherForm = false;
    showExpenseTypeForm = false;
    showReceiptVoucherModal = false;
    formType = 'receipt';
    // فتح فورم سند
    openVoucherForm(type) {
      this.formType = type;
      this.showMainForm = false;
      this.showVoucherForm = true;
    }
    // رجوع إلى الشاشة الأصلية
    backToMainForm() {
      this.showMainForm = true;
      this.showVoucherForm = false;
    }
    // إغلاق كامل
    closeMainForm() {
      this.showMainForm = false;
      this.showVoucherForm = false;
      this.ref.close();
    }
    openExpenseTypeForm() {
      this.showExpenseTypeForm = true;
      this.showMainForm = false;
    }
    closeExpenseTypeForm() {
      this.showExpenseTypeForm = false;
      this.showMainForm = true;
    }
    openReceiptVoucherForm() {
      this.showReceiptVoucherModal = true;
      this.showMainForm = false;
    }
    closeReceiptVoucherForm() {
      this.showReceiptVoucherModal = false;
      this.showMainForm = true;
    }
    onButtonClick(action) {
      switch (action) {
        // الصف الأول
        case 'سند قبض':
          this.openVoucherForm('receipt');
          break;
        case 'سند صرف':
          this.openVoucherForm('payment');
          break;
        case 'قيود اليومية':
          this.closeMainForm();
          this.router.navigate(['finance/daily-restrictions']);
          break;
        case 'شجرة الترميز':
          alert('فتح شاشة شجرة الترميز');
          break;
        // الصف الثاني
        case 'عمولات الملفات':
          this.closeMainForm();
          this.router.navigate(['finance/file-commissions']);
          break;
        case 'إضافة نوع مصروف':
          this.openExpenseTypeForm();
          break;
        // الصف الثالث
        case 'أرصدة الحسابات':
          this.closeMainForm();
          this.router.navigate(['finance/accounts-balances']);
          break;
        case 'الميزانية العمومية':
          alert('فتح شاشة الميزانية العمومية');
          break;
        // الصف الرابع
        case 'استعلام عن كشف التصفية':
          this.closeMainForm();
          this.router.navigate(['finance/filter-detection']);
          break;
        case 'استعلام عن كشف عهد الموظفين':
          this.closeMainForm();
          this.router.navigate(['finance/employee-disclosure']);
          break;
        // الصف الخامس
        case 'استعلام عن كشف العهد المستلمة':
          this.closeMainForm();
          this.router.navigate(['finance/daily-custody']);
          break;
        case 'استعلام عن الكشوف برقم القيد':
          this.closeMainForm();
          this.router.navigate(['finance/kashf']);
          break;
        // الصف السادس
        case 'مصروفات يتحملها المكتب':
          this.closeMainForm();
          this.router.navigate(['finance/office-not-load']);
          break;
        case 'تصفية السيارات':
          this.closeMainForm();
          this.router.navigate(['finance/cars']);
          break;
        // الصف السابع
        case 'مقدم ومؤخر إيجار العقارات':
          this.closeMainForm();
          this.router.navigate(['finance/real-estate']);
          break;
        case 'كل العهد على السيستم':
          this.closeMainForm();
          this.router.navigate(['finance/custody-search']);
          break;
        // الصف الثامن
        case 'سند قبض - جديد':
          this.openReceiptVoucherForm();
          break;
        case 'سند صرف - جديد':
          alert('فتح سند صرف جديد');
          break;
        case 'رابط المكتب باكسل':
          alert('تحميل رابط المكتب باكسل');
          break;
        // الصف الأخير
        case 'Cancel':
          break;
      }
    }
    static ɵfac = function DailyRestrictions_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DailyRestrictions)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_7__.DynamicDialogRef));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DailyRestrictions,
      selectors: [["app-daily-restrictions"]],
      decls: 4,
      vars: 4,
      consts: [["class", "form-container", "dir", "rtl", 4, "ngIf"], [3, "isReceipt", "cancel", 4, "ngIf"], [3, "cancel", 4, "ngIf"], ["dir", "rtl", 1, "form-container"], [1, "form-header"], [1, "button-row"], [1, "form-button", "form-button-primary", 3, "click"], [1, "form-button", "form-button-secondary", 3, "click"], [1, "form-button", "form-button-accent", 3, "click"], [1, "form-button", "form-button-info", 3, "click"], [1, "form-button", "form-button-warning", 3, "click"], [1, "form-button", "form-button-success", 3, "click"], [1, "form-button", "form-button-danger", 3, "click"], [1, "form-button", "form-button-outline", 3, "click"], [1, "form-actions", 2, "margin-top", "1.5rem", "padding-top", "1rem", "border-top", "1px solid var(--surface-border)"], [3, "cancel", "isReceipt"], [3, "cancel"]],
      template: function DailyRestrictions_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, DailyRestrictions_div_0_Template, 53, 0, "div", 0)(1, DailyRestrictions_app_voucher_form_1_Template, 1, 1, "app-voucher-form", 1)(2, DailyRestrictions_app_expense_form_2_Template, 1, 0, "app-expense-form", 2)(3, DailyRestrictions_app_receipt_voucher_3_Template, 1, 0, "app-receipt-voucher", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showMainForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showVoucherForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showExpenseTypeForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showReceiptVoucherModal);
        }
      },
      dependencies: [_voucher_form_voucher_form__WEBPACK_IMPORTED_MODULE_0__.VoucherForm, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _expense_form_expense_form__WEBPACK_IMPORTED_MODULE_2__.ExpenseForm, _receipt_voucher_receipt_voucher__WEBPACK_IMPORTED_MODULE_3__.ReceiptVoucher],
      styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 1rem;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.form-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: bold;\n  color: var(--primary-color);\n}\n\n.button-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n\n.button-row[_ngcontent-%COMP%]   .form-button[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n\n\n.form-button-accent[_ngcontent-%COMP%] {\n  background-color: #8b5cf6;\n  color: white;\n  border: none;\n}\n\n.form-button-accent[_ngcontent-%COMP%]:hover {\n  background-color: #7c3aed;\n}\n\n.form-button-info[_ngcontent-%COMP%] {\n  background-color: #06b6d4;\n  color: white;\n  border: none;\n}\n\n.form-button-info[_ngcontent-%COMP%]:hover {\n  background-color: #0891b2;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmluYW5jZS9jb21wb25lbnRzL2RhaWx5LXJlc3RyaWN0aW9ucy9kYWlseS1yZXN0cmljdGlvbnMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLHlCQUF5QjtBQUN6QjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmZvcm0taGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLmZvcm0taGVhZGVyIGgxIHtcclxuICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5idXR0b24tcm93IC5mb3JtLWJ1dHRvbiB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLyogQ3VzdG9tIGJ1dHRvbiBjb2xvcnMgKi9cclxuLmZvcm0tYnV0dG9uLWFjY2VudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiNWNmNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b24tYWNjZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MzYWVkO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b24taW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2YjZkNDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1idXR0b24taW5mbzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4OTFiMjtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return DailyRestrictions;
})();

/***/ }),

/***/ 66785:
/*!**************************************************************************!*\
  !*** ./src/app/features/finance/components/expense-form/expense-form.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExpenseForm: () => (/* binding */ ExpenseForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);





function ExpenseForm_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_div_65_Template_div_click_0_listener() {
      const t_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectExpenseType(t_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r2, " ");
  }
}
function ExpenseForm_div_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_div_74_Template_div_click_0_listener() {
      const acc_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectExpenseAccount(acc_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const acc_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", acc_r5, " ");
  }
}
function ExpenseForm_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_div_83_Template_div_click_0_listener() {
      const t_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectIncomeType(t_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", t_r7, " ");
  }
}
function ExpenseForm_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_div_92_Template_div_click_0_listener() {
      const acc_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectIncomeAccount(acc_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const acc_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", acc_r9, " ");
  }
}
let ExpenseForm = /*#__PURE__*/(() => {
  class ExpenseForm {
    ref = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogRef, {
      optional: true
    });
    cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    // فتح واختيار النوافذ الصغيرة
    showExpenseTypePicker = false;
    showExpenseAccountPicker = false;
    showIncomeTypePicker = false;
    showIncomeAccountPicker = false;
    // القيم المختارة
    selectedExpenseType = '';
    selectedExpenseAccount = '';
    selectedIncomeType = '';
    selectedIncomeAccount = '';
    expenseTypes = ['مواصلات', 'صيانة', 'إيجار', 'وقود'];
    accounts = ['1001 - البنك', '2001 - الصندوق', '3100 - مصروفات تشغيل'];
    incomeTypes = ['رسوم', 'عمولة', 'دخل إضافي'];
    // إغلاق الصفحة
    closeForm() {
      if (this.ref) {
        this.ref.close();
      } else {
        this.cancel.emit();
      }
    }
    selectExpenseType(type) {
      this.selectedExpenseType = type;
      this.showExpenseTypePicker = false;
    }
    selectExpenseAccount(acc) {
      this.selectedExpenseAccount = acc;
      this.showExpenseAccountPicker = false;
    }
    selectIncomeType(type) {
      this.selectedIncomeType = type;
      this.showIncomeTypePicker = false;
    }
    selectIncomeAccount(acc) {
      this.selectedIncomeAccount = acc;
      this.showIncomeAccountPicker = false;
    }
    static ɵfac = function ExpenseForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExpenseForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ExpenseForm,
      selectors: [["app-expense-form"]],
      outputs: {
        cancel: "cancel"
      },
      decls: 93,
      vars: 12,
      consts: [["dir", "rtl", 1, "form-container"], [1, "form-header"], [1, "form-section"], [1, "form-section-title", 2, "color", "var(--primary-color)"], [1, "form-field"], [1, "form-label"], [1, "form-row"], ["readonly", "", 1, "form-input", 2, "flex", "1", 3, "value"], ["type", "button", 1, "form-button", "form-button-outline", 3, "click"], [1, "form-actions"], [1, "form-button", "form-button-primary"], [1, "form-button", "form-button-warning"], [1, "form-section-title", 2, "color", "var(--green-500, #22c55e)"], [1, "form-actions", 2, "margin-top", "1.5rem", "padding-top", "1rem", "border-top", "1px solid var(--surface-border)"], [1, "form-button", "form-button-secondary", 3, "click"], [1, "form-button", "form-button-danger", 3, "click"], [1, "modal", 3, "open"], [1, "modal-box", "modal-sm"], [1, "modal-header"], [1, "modal-close", 3, "click"], [1, "modal-body"], ["class", "picker-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "picker-item", 3, "click"]],
      template: function ExpenseForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uD83D\uDCB0 \u0625\u0636\u0627\u0641\u0629 \u0646\u0648\u0639 \u0645\u0635\u0631\u0648\u0641 / \u0625\u064A\u0631\u0627\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4)(8, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0646\u0648\u0639 \u0627\u0644\u0645\u0635\u0631\u0648\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_12_listener() {
            return ctx.showExpenseTypePicker = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4)(15, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0627\u0644\u062D\u0633\u0627\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_19_listener() {
            return ctx.showExpenseAccountPicker = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u0625\u0636\u0627\u0641\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 2)(27, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0625\u064A\u0631\u0627\u062F\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4)(30, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u0646\u0648\u0639 \u0627\u0644\u0625\u064A\u0631\u0627\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_34_listener() {
            return ctx.showIncomeTypePicker = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 4)(37, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u0627\u0644\u062D\u0633\u0627\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_41_listener() {
            return ctx.showIncomeAccountPicker = true;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 9)(44, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u0625\u0636\u0627\u0641\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 13)(49, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_49_listener() {
            return ctx.closeForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\u2190 \u0631\u062C\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\u0625\u0636\u0627\u0641\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_55_listener() {
            return ctx.closeForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "dialog", 16)(58, "div", 17)(59, "div", 18)(60, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u0627\u062E\u062A\u064A\u0627\u0631 \u0646\u0648\u0639 \u0627\u0644\u0645\u0635\u0631\u0648\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_62_listener() {
            return ctx.showExpenseTypePicker = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, ExpenseForm_div_65_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "dialog", 16)(67, "div", 17)(68, "div", 18)(69, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062D\u0633\u0627\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_71_listener() {
            return ctx.showExpenseAccountPicker = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, ExpenseForm_div_74_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "dialog", 16)(76, "div", 17)(77, "div", 18)(78, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "\u0627\u062E\u062A\u064A\u0627\u0631 \u0646\u0648\u0639 \u0627\u0644\u0625\u064A\u0631\u0627\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_80_listener() {
            return ctx.showIncomeTypePicker = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, ExpenseForm_div_83_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "dialog", 16)(85, "div", 17)(86, "div", 18)(87, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u062D\u0633\u0627\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExpenseForm_Template_button_click_89_listener() {
            return ctx.showIncomeAccountPicker = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, ExpenseForm_div_92_Template, 2, 1, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedExpenseType);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedExpenseAccount);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedIncomeType);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.selectedIncomeAccount);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", ctx.showExpenseTypePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.expenseTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", ctx.showExpenseAccountPicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.accounts);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", ctx.showIncomeTypePicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.incomeTypes);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("open", ctx.showIncomeAccountPicker);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.accounts);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
      styles: [".form-container[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--text-color);\n}\n\n.picker-item[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  cursor: pointer;\n  border-bottom: 1px solid var(--surface-border);\n  transition: background-color 0.2s ease;\n}\n\n.picker-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--surface-hover);\n}\n\n.picker-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmluYW5jZS9jb21wb25lbnRzL2V4cGVuc2UtZm9ybS9leHBlbnNlLWZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLDhDQUE4QztFQUM5QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0taGVhZGVyIGgyIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5waWNrZXItaXRlbSB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucGlja2VyLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG59XHJcblxyXG4ucGlja2VyLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ExpenseForm;
})();

/***/ }),

/***/ 69877:
/*!*******************************************************************************!*\
  !*** ./src/app/features/finance/pages/finance-dashboard/finance-dashboard.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinanceDashboard: () => (/* binding */ FinanceDashboard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/dashboard-layout/dashboard-layout */ 95021);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);
/* harmony import */ var _components_daily_restrictions_daily_restrictions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/daily-restrictions/daily-restrictions */ 64873);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_add_client_form_add_client_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/add-client-form/add-client-form */ 55781);
/* harmony import */ var _components_expense_form_expense_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/expense-form/expense-form */ 66785);
/* harmony import */ var _components_voucher_form_voucher_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/voucher-form/voucher-form */ 25089);
/* harmony import */ var _components_receipt_voucher_receipt_voucher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/receipt-voucher/receipt-voucher */ 26513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 12481);












let FinanceDashboard = /*#__PURE__*/(() => {
  class FinanceDashboard {
    dialogService;
    selectedFile = null;
    activeTab = 'basic'; // التاب الافتراضي عند فتح الفورم
    showModal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "showModal"
    }] : []));
    showExpenseModal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "showExpenseModal"
    }] : []));
    showVoucherModal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "showVoucherModal"
    }] : []));
    showReceiptModal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "showReceiptModal"
    }] : []));
    isSaving = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(false, ...(ngDevMode ? [{
      debugName: "isSaving"
    }] : []));
    ref;
    constructor(dialogService) {
      this.dialogService = dialogService;
    }
    actions = [{
      title: 'سندات الفبض للرابط',
      type: "navigate",
      value: "/finance/salary-document"
    }, {
      title: 'قيود اليومية ',
      type: "form",
      onClick: dialog => this.openDailyRestrictions(dialog)
    }, {
      title: 'القيود اليومية',
      type: "navigate",
      value: "/finance/daily-restrictions"
    }, {
      title: 'مراجعة العهد ',
      type: "navigate",
      value: "/finance/covenant-review"
    }, {
      title: 'التحويل إلي الشركة ',
      type: "navigate",
      value: "/finance/transfer-search"
    }, {
      title: 'إضافة موكل ',
      type: "form",
      onClick: () => this.showModal.set(true)
    }, {
      title: 'إضافة نوع مصروف',
      type: "form",
      onClick: dialog => this.openExpenseForm(dialog)
    }, {
      title: 'سند صرف',
      type: "form",
      onClick: dialog => this.openVoucherForm(dialog)
    }, {
      title: 'سند قبض',
      type: "form",
      onClick: dialog => this.openReceiptVoucher(dialog)
    }, {
      title: 'حسابات الأرصدة',
      type: "navigate",
      value: "/finance/accounts-balances"
    }, {
      title: 'الاستعلام عن كشف التصفية',
      type: "navigate",
      value: "/finance/filter-detection"
    }, {
      title: 'استعلام عن كشوف الموظفين',
      type: "navigate",
      value: "/finance/employee-disclosure"
    }, {
      title: 'استعلام عن الكشوف المستلمة',
      type: "navigate",
      value: "/finance/daily-custody"
    }, {
      title: 'عمولات السداد',
      type: "navigate",
      value: "/finance/file-commissions"
    }, {
      title: 'استعلام عن الكشوف برقم قيد',
      type: "navigate",
      value: "/finance/kashf"
    }, {
      title: 'ما يتحمله المكتب',
      type: "navigate",
      value: "/finance/office-not-load"
    }, {
      title: 'السيارات',
      type: "navigate",
      value: "/finance/cars"
    }, {
      title: 'مقدم و مؤخر العقارات',
      type: "navigate",
      value: "/finance/real-estate"
    }, {
      title: 'كل العهد الموجودة علي السيستم',
      type: "navigate",
      value: "/finance/custody-search"
    }, {
      title: 'تقرير العهد والشركات',
      type: "navigate",
      value: "/finance/company-invoice-export"
    }, {
      title: 'سند القبض',
      type: "navigate",
      value: "/finance/receipt-voucher"
    }];
    openDailyRestrictions(dialog) {
      if (!dialog) return;
      const ref = dialog.open(_components_daily_restrictions_daily_restrictions__WEBPACK_IMPORTED_MODULE_3__.DailyRestrictions, {
        header: 'قيود اليومية',
        width: '500px',
        styleClass: 'rounded-lg',
        modal: true
      });
      if (ref) {
        this.ref = ref;
      }
    }
    openExpenseForm(dialog) {
      if (!dialog) return;
      const ref = dialog.open(_components_expense_form_expense_form__WEBPACK_IMPORTED_MODULE_7__.ExpenseForm, {
        header: 'إضافة نوع مصروف',
        width: '600px',
        styleClass: 'rounded-lg',
        modal: true
      });
      if (ref) {
        this.ref = ref;
      }
    }
    openVoucherForm(dialog) {
      if (!dialog) return;
      const ref = dialog.open(_components_voucher_form_voucher_form__WEBPACK_IMPORTED_MODULE_8__.VoucherForm, {
        header: 'سند صرف',
        width: '600px',
        styleClass: 'rounded-lg',
        modal: true,
        data: {
          isReceipt: false
        }
      });
      if (ref) {
        this.ref = ref;
      }
    }
    openReceiptVoucher(dialog) {
      if (!dialog) return;
      const ref = dialog.open(_components_receipt_voucher_receipt_voucher__WEBPACK_IMPORTED_MODULE_9__.ReceiptVoucher, {
        header: 'سند قبض',
        width: '600px',
        styleClass: 'rounded-lg',
        modal: true
      });
      if (ref) {
        this.ref = ref;
      }
    }
    static ɵfac = function FinanceDashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FinanceDashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: FinanceDashboard,
      selectors: [["app-finance-dashboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService])],
      decls: 3,
      vars: 4,
      consts: [["addClientForm", ""], [3, "title", "subtitle", "actions"], [3, "showModal"]],
      template: function FinanceDashboard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-dashboard-layout", 1)(1, "app-add-client-form", 2, 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("title", "\u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629")("subtitle", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u063A\u0628 \u0641\u064A \u062A\u0646\u0641\u064A\u0630\u0647\u0627")("actions", ctx.actions);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showModal", ctx.showModal);
        }
      },
      dependencies: [_core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__.DashboardLayout, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _components_add_client_form_add_client_form__WEBPACK_IMPORTED_MODULE_6__.AddClientForm],
      styles: [".modal[_ngcontent-%COMP%] {\n      background-color: rgba(0, 0, 0, 0.5); \n\n    }\n    .input[_ngcontent-%COMP%]:required {\n      border-color: #fca5a5; \n\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmluYW5jZS9wYWdlcy9maW5hbmNlLWRhc2hib2FyZC9maW5hbmNlLWRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7TUFDSSxvQ0FBb0MsRUFBRSxpQkFBaUI7SUFDekQ7SUFDQTtNQUNFLHFCQUFxQixFQUFFLHlDQUF5QztJQUNsRSIsInNvdXJjZXNDb250ZW50IjpbIiAgLm1vZGFsIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBEYXJrIG92ZXJsYXkgKi9cclxuICAgIH1cclxuICAgIC5pbnB1dDpyZXF1aXJlZCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZjYTVhNTsgLyogTGlnaHQgcmVkIGJvcmRlciBmb3IgcmVxdWlyZWQgZmllbGRzICovXHJcbiAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return FinanceDashboard;
})();

/***/ })

}]);
//# sourceMappingURL=2822.js.map