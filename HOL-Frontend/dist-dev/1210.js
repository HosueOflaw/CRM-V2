"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[1210],{

/***/ 61210:
/*!*************************************************************************!*\
  !*** ./src/app/features/reports/pages/reports-salary/reports-salary.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsSalary: () => (/* binding */ ReportsSalary)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/go-back/go-back */ 9156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);







function ReportsSalary_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" \uD83D\uDCC4 ", ctx_r0.uploadedFileName, " ");
  }
}
function ReportsSalary_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 26)(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td", 28)(14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_tr_74_Template_button_click_14_listener() {
      const entry_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.deleteEntry(entry_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " \u062D\u0630\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", i_r4 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r3.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r3.bank);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r3.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](entry_r3.id);
  }
}
function ReportsSalary_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
let ReportsSalary = /*#__PURE__*/(() => {
  class ReportsSalary {
    entries = [];
    // Form fields
    name = '';
    date = '';
    bank = '';
    amount = 0;
    code = '';
    // File upload & dialog
    uploadedFileName = '';
    showDialog = false;
    ngOnInit() {
      this.setDefaultDate();
    }
    // ✅ ضبط التاريخ الافتراضي
    setDefaultDate() {
      const today = new Date();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const year = today.getFullYear();
      this.date = `${year}-${month}-${day}`;
    }
    // ✅ إضافة إدخال جديد للجدول
    addEntry() {
      if (this.name && this.date && this.bank) {
        const newEntry = {
          id: this.entries.length + 1,
          name: this.name,
          date: this.date,
          bank: this.bank,
          amount: this.amount,
          code: this.code
        };
        this.entries.push(newEntry);
        this.clearForm();
      }
    }
    // ✅ دالة التحكم في الديالوج
    handleDialogChoice(choice) {
      this.showDialog = false;
      if (choice === 'view') {
        console.log('👁️ عرض فقط');
        // من هنا تقدر تفتح نافذة عرض فقط
      } else if (choice === 'print') {
        console.log('🖨️ عرض مع الطباعة');
        // من هنا تقدر تفتح نافذة عرض مع أمر الطباعة
      }
    }
    // ✅ عرض الديالوج عند الضغط على زر "عرض السند"
    showReceipt(entry) {
      console.log('عرض السند:', entry);
      this.showDialog = true;
    }
    // ✅ باقي الأحداث
    reviewEntry(entry) {
      console.log('Reviewing entry:', entry);
    }
    showCheckVoucher(entry) {
      console.log('Show check voucher:', entry);
    }
    showBondStatement(entry) {
      console.log('Show bond statement:', entry);
    }
    showCurrentManagement() {
      console.log('Show current management');
    }
    // ✅ رفع ملف Excel
    triggerFileInput() {
      const input = document.getElementById('excelInput');
      if (input) input.click();
    }
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.uploadedFileName = file.name;
        console.log('📂 الملف المختار:', file);
      }
    }
    // ✅ مسح النموذج
    clearForm() {
      this.name = '';
      this.bank = '';
      this.amount = 0;
      this.code = '';
      this.setDefaultDate();
    }
    // ✅ حذف صف
    deleteEntry(entry) {
      this.entries = this.entries.filter(e => e.id !== entry.id);
    }
    static ɵfac = function ReportsSalary_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsSalary)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: ReportsSalary,
      selectors: [["app-reports-salary"]],
      decls: 76,
      vars: 9,
      consts: [["dir", "rtl", 1, "min-h-screen", "p-5", "font-sans", 2, "background-color", "var(--surface-ground)"], [1, "flex", "flex-wrap", "gap-3", "mb-4"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "font-medium", "px-5", "py-2.5", "rounded", "transition-colors", 3, "click"], [1, "relative", "inline-block"], ["type", "file", "id", "excelInput", "accept", ".xlsx, .xls", 1, "hidden", 3, "change"], [1, "bg-green-700", "hover:bg-green-800", "text-white", "px-4", "py-2", "rounded", "transition-colors", "flex", "items-center", "justify-center", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], ["class", "mt-2 text-sm", "style", "color: var(--text-color-secondary);", 4, "ngIf"], [1, "p-5", "rounded-lg", "shadow-md", "mb-5", 2, "background-color", "var(--surface-card)"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-5", "mb-4"], [1, "flex", "flex-col"], [1, "font-semibold", "mb-1.5", "text-sm", "text-right", 2, "color", "var(--text-color)"], ["type", "text", 1, "px-3", "py-2", "border", "rounded", "text-sm", "text-right", "focus:outline-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "px-3", "py-2", "border", "rounded", "text-sm", "text-right", "focus:outline-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "px-3", "py-2", "border", "rounded", "text-sm", "text-right", "focus:outline-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-3", "mb-5", "items-center"], ["type", "search", "placeholder", "\u0627\u0628\u062D\u062B \u0647\u0646\u0627...", 1, "flex-1", "px-4", "py-2.5", "border", "rounded", "text-sm", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)"], [1, "px-5", "py-2.5", "border", "rounded", "text-lg", "transition-colors", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "rounded-lg", "shadow-md", "overflow-hidden", 2, "background-color", "var(--surface-card)"], [1, "w-full", "border-collapse", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [1, "px-3", "py-3", "text-right", "font-semibold", "border-b-2", "text-sm", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], ["style", "color: var(--text-color); transition: background-color 0.2s;", 3, "background-color", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mt-2", "text-sm", 2, "color", "var(--text-color-secondary)"], [2, "color", "var(--text-color)", "transition", "background-color 0.2s"], [1, "px-3", "py-3", "text-right", "border-b", "text-sm", 2, "border-color", "var(--surface-border)"], [1, "px-3", "py-3", "text-right", "border-b", 2, "border-color", "var(--surface-border)"], [1, "bg-red-600", "hover:bg-red-700", "text-white", "px-3", "py-1.5", "rounded", "text-xs", "font-medium", "transition-colors", 3, "click"], ["colspan", "7", 1, "text-center", "py-10", "italic", 2, "color", "var(--text-color-secondary)"]],
      template: function ReportsSalary_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-go-back");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_Template_button_click_3_listener() {
            return ctx.reviewEntry(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u062D\u0633\u0627\u0628\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_Template_button_click_5_listener() {
            return ctx.showCheckVoucher(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " \u062A\u0645 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_Template_button_click_7_listener() {
            return ctx.showBondStatement(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " \u0633\u0646\u062F\u0627\u062A \u0635\u0631\u0641 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_Template_button_click_9_listener() {
            return ctx.showReceipt(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " \u0639\u0631\u0636 \u0627\u0644\u0633\u0646\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 3)(12, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ReportsSalary_Template_input_change_12_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_Template_button_click_13_listener() {
            return ctx.triggerFileInput();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "path", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ReportsSalary_div_16_Template, 2, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 1)(18, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_Template_button_click_18_listener() {
            return ctx.showCurrentManagement();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_Template_button_click_20_listener() {
            return ctx.reviewEntry(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " \u062A\u0645 \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ReportsSalary_Template_button_click_22_listener() {
            return ctx.showCheckVoucher(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " \u0633\u0646\u062F\u0627\u062A \u0642\u0628\u0636 \u0627\u0644\u0645\u0643\u062A\u0628 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 9)(25, "div", 10)(26, "div", 11)(27, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ReportsSalary_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.code, $event) || (ctx.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 11)(31, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\u0627\u0644\u0627\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ReportsSalary_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.name, $event) || (ctx.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 10)(35, "div", 11)(36, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ReportsSalary_Template_input_ngModelChange_38_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.amount, $event) || (ctx.amount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 11)(40, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "\u0627\u0644\u0628\u0646\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ReportsSalary_Template_input_ngModelChange_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.bank, $event) || (ctx.bank = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 11)(44, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ReportsSalary_Template_input_ngModelChange_46_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.date, $event) || (ctx.date = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 11)(48, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "\u0631\u0642\u0645 \u0627\u0644\u0633\u0646\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function ReportsSalary_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.code, $event) || (ctx.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " \uD83D\uDD0D ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 19)(56, "table", 20)(57, "thead", 21)(58, "tr")(59, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "\u0627\u0644\u0627\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "\u0627\u0644\u0628\u0646\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "\u0631\u0642\u0645 \u0627\u0644\u0633\u0646\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "th", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, ReportsSalary_tr_74_Template, 16, 8, "tr", 23)(75, ReportsSalary_tr_75_Template, 3, 0, "tr", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.uploadedFileName);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.amount);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.bank);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.entries);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.entries.length === 0);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_3__.GoBack],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ReportsSalary;
})();

/***/ })

}]);
//# sourceMappingURL=1210.js.map