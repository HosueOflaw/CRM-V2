"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[2238],{

/***/ 2238:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/reports/pages/reports-zain-twenty-months/reports-zain-twenty-months.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsZainTwentyMonths: () => (/* binding */ ReportsZainTwentyMonths)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);







const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.numberID;
function ReportsZainTwentyMonths_For_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r1.label);
  }
}
function ReportsZainTwentyMonths_Conditional_19_For_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](header_r2);
  }
}
function ReportsZainTwentyMonths_Conditional_19_For_22_For_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const header_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, row_r4.monthlyPayments[header_r3].value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", row_r4.monthlyPayments[header_r3].percentage, "%) ");
  }
}
function ReportsZainTwentyMonths_Conditional_19_For_22_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReportsZainTwentyMonths_Conditional_19_For_22_For_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](1, ReportsZainTwentyMonths_Conditional_19_For_22_For_18_Conditional_1_Template, 5, 4, "div", 23)(2, ReportsZainTwentyMonths_Conditional_19_For_22_For_18_Conditional_2_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r3 = ctx.$implicit;
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](row_r4.monthlyPayments[header_r3] ? 1 : 2);
  }
}
function ReportsZainTwentyMonths_Conditional_19_For_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 18)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](17, ReportsZainTwentyMonths_Conditional_19_For_22_For_18_Template, 3, 1, "td", 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ɵ$index_70_r5 = ctx.$index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ɵ$index_70_r5 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.theFrame);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.numberID);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 9, row_r4.totalPaid));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 11, row_r4.dueAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.dateOfIssue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.batches);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r5.monthlyHeaders());
  }
}
function ReportsZainTwentyMonths_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "table", 13)(2, "thead")(3, "tr", 14)(4, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0627\u0644\u0625\u0637\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062A\u062D\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0635\u062F\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u0639\u062F\u062F \u0627\u0644\u062F\u0641\u0639\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](18, ReportsZainTwentyMonths_Conditional_19_For_19_Template, 2, 1, "th", 16, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](21, ReportsZainTwentyMonths_Conditional_19_For_22_Template, 19, 13, "tr", 17, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r5.monthlyHeaders());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r5.reportData());
  }
}
function ReportsZainTwentyMonths_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 \"\u062A\u062D\u0645\u064A\u0644 \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062F\u0641\u0639\u0627\u062A\" \u0644\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
let ReportsZainTwentyMonths = /*#__PURE__*/(() => {
  class ReportsZainTwentyMonths {
    endDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "endDate"
    }] : []));
    company = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('zain', ...(ngDevMode ? [{
      debugName: "company"
    }] : []));
    reportData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "reportData"
    }] : []));
    monthlyHeaders = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "monthlyHeaders"
    }] : []));
    companies = [{
      value: 'all',
      label: 'الكل'
    }, {
      value: 'zain',
      label: 'Zain'
    }, {
      value: 'viva',
      label: 'Viva'
    }, {
      value: 'ooredoo',
      label: 'Ooredoo'
    }];
    ngOnInit() {
      const today = new Date().toISOString().split('T')[0];
      this.endDate.set(today);
      this.generateMonthlyHeaders(20);
    }
    generateMonthlyHeaders(months) {
      const headers = Array.from({
        length: months
      }, (_, i) => `Month ${i + 1}`);
      this.monthlyHeaders.set(headers);
    }
    loadCompanies() {
      // مثال داتا جاية من الباك إند
      const apiCompanies = [{
        value: 'zain',
        label: 'Zain'
      }, {
        value: 'viva',
        label: 'Viva'
      }, {
        value: 'ooredoo',
        label: 'Ooredoo'
      }];
      this.companies = apiCompanies;
    }
    loadReports() {
      const dummy = this.generateDummyReport(10, 20);
      this.reportData.set(dummy);
    }
    generateDummyReport(rows, months) {
      const data = [];
      for (let i = 1; i <= rows; i++) {
        const row = {
          name: `اسم العميل ${i}`,
          theFrame: `Frame ${i}`,
          numberID: 1000 + i,
          totalPaid: Math.floor(Math.random() * 5000),
          dueAmount: Math.floor(Math.random() * 2000),
          dateOfIssue: `2024-01-${i.toString().padStart(2, '0')}`,
          batches: Math.ceil(Math.random() * 12),
          monthlyPayments: {}
        };
        for (let j = 1; j <= months; j++) {
          row.monthlyPayments[`Month ${j}`] = {
            value: Math.floor(Math.random() * 500),
            percentage: Math.floor(Math.random() * 100)
          };
        }
        data.push(row);
      }
      return data;
    }
    static ɵfac = function ReportsZainTwentyMonths_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsZainTwentyMonths)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ReportsZainTwentyMonths,
      selectors: [["app-reports-zain-twenty-months"]],
      decls: 21,
      vars: 3,
      consts: [["dir", "rtl", 1, "p-4", "md:p-6", "min-h-screen", 2, "background-color", "var(--surface-ground)"], [1, "text-2xl", "font-bold", "mb-6", "border-b", "pb-2", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "lg:grid-cols-4", "gap-4", "p-4", "rounded-xl", "shadow-lg", 2, "background-color", "var(--surface-card)"], [1, "flex", "flex-col"], [1, "font-bold", "text-sm", "mb-1", 2, "color", "var(--text-color)"], ["type", "date", 1, "p-2", "border", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "cursor-pointer", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "p-2", "border", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-indigo-500", "cursor-pointer", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], [3, "value"], [1, "col-span-2", "md:col-span-2", "flex", "items-end", "justify-start", "md:justify-end", "mt-4", "md:mt-0"], [1, "bg-indigo-600", "hover:bg-indigo-700", "text-white", "px-6", "py-2", "rounded-lg", "shadow-md", "text-sm", "font-semibold", 3, "click"], [1, "mt-6", "overflow-x-auto", "shadow-lg", "rounded-xl", "border", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "mt-6", "p-10", "text-center", "rounded-xl", "shadow", 2, "background-color", "var(--surface-card)", "color", "var(--text-color-secondary)"], [1, "w-full", "text-right", "border-collapse", "text-sm", 2, "border-color", "var(--surface-border)"], [1, "font-semibold", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [1, "p-3", "border-l", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "border-l", "min-w-[120px]", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "border-b", "transition", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)", 3, "background-color"], [1, "border-b", "transition", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "border-l", "font-medium", 2, "border-color", "var(--surface-border)"], [1, "p-3", "border-l", "text-center", 2, "border-color", "var(--surface-border)"], [1, "p-3", "border-l", "text-center", "font-bold", 2, "border-color", "var(--surface-border)", "color", "var(--green-500)"], [1, "p-3", "border-l", "text-center", "font-bold", 2, "border-color", "var(--surface-border)", "color", "var(--red-500)"], [1, "text-xs", "font-semibold"], [2, "color", "var(--text-color-secondary)"]],
      template: function ReportsZainTwentyMonths_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \u062A\u0642\u0631\u064A\u0631 \u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0632\u064A\u0646 (\u062A\u0642\u0627\u0631\u064A\u0631 \u0627\u0644\u062F\u0641\u0639\u0627\u062A) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u062D\u062A\u0649 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReportsZainTwentyMonths_Template_input_ngModelChange_7_listener($event) {
            return ctx.endDate.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReportsZainTwentyMonths_Template_select_ngModelChange_11_listener($event) {
            return ctx.company.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](14, ReportsZainTwentyMonths_For_15_Template, 2, 2, "option", 8, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9)(17, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportsZainTwentyMonths_Template_button_click_17_listener() {
            return ctx.loadReports();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " \u062A\u062D\u0645\u064A\u0644 \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062F\u0641\u0639\u0627\u062A (20 \u0634\u0647\u0631\u064B\u0627) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](19, ReportsZainTwentyMonths_Conditional_19_Template, 23, 0, "div", 11)(20, ReportsZainTwentyMonths_Conditional_20_Template, 2, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.endDate());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.company());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.companies);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.reportData().length ? 19 : 20);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
  return ReportsZainTwentyMonths;
})();

/***/ })

}]);
//# sourceMappingURL=2238.js.map