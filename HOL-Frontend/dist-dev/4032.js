"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4032],{

/***/ 74032:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/reports/pages/report-companies-performance/report-companies-performance.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportCompaniesPerformance: () => (/* binding */ ReportCompaniesPerformance)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);






const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item.company;
function ReportCompaniesPerformance_For_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sector_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", sector_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](sector_r1.label);
  }
}
function ReportCompaniesPerformance_Conditional_21_For_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 23)(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "150");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "75,000 \u062F.\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "12,500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "62,500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "1,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "60,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "20,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "15,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "5,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "1,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "3,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "1,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "2,500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "1,500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "500");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "2,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "1,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "1,000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ɵ$index_124_r3 = ctx.$index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ɵ$index_124_r3 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r2.company);
  }
}
function ReportCompaniesPerformance_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "table", 12)(2, "thead")(3, "tr", 13)(4, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0639\u062F\u062F \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u063A\u064A\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u063A\u064A\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u0645\u0648\u0632\u0639)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u063A\u064A\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u063A\u064A\u0631 \u0645\u0648\u0632\u0639)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u0645\u0648\u0632\u0639)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u0645\u062A\u0648\u0627\u0635\u0644)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u063A\u064A\u0631 \u0645\u062A\u0648\u0627\u0635\u0644)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u0644\u0627 \u064A\u0645\u0643\u0646 \u0627\u0644\u062A\u0648\u0627\u0635\u0644)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u0645\u062A\u0648\u0627\u0635\u0644 \u0645\u0639 \u0627\u062E\u0631)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u063A\u064A\u0631 \u0645\u0635\u0646\u0641)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u0645\u062A\u0627\u0628\u0639)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u063A\u064A\u0631 \u0645\u062A\u0627\u0628\u0639)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0625\u062A\u0635\u0627\u0644)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062D\u0635\u064A\u0644 (\u063A\u064A\u0631 \u0645\u0648\u0632\u0639)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u062A\u0646\u0641\u064A\u0630");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\u0645\u062A\u0627\u0628\u0639 \u062A\u0646\u0641\u064A\u0630");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u063A\u064A\u0631 \u0645\u062A\u0627\u0628\u0639 \u062A\u0646\u0641\u064A\u0630");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\u0627\u0644\u0631\u0633\u0648\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u0627\u0648\u0646\u0644\u0627\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\u0648\u062F\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](55, ReportCompaniesPerformance_Conditional_21_For_56_Template, 51, 3, "tr", 22, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx_r3.reportData());
  }
}
function ReportCompaniesPerformance_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u064A\u0631\u062C\u0649 \u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0641\u0644\u0627\u062A\u0631 \u0648\u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \"\u0639\u0631\u0636 \u0627\u0644\u062A\u0642\u0631\u064A\u0631\" \u0644\u0644\u062D\u0635\u0648\u0644 \u0639\u0644\u0649 \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0623\u062F\u0627\u0621. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
let ReportCompaniesPerformance = /*#__PURE__*/(() => {
  class ReportCompaniesPerformance {
    // =================== حالة المكون (Signals) ===================
    fromDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "fromDate"
    }] : [])); // من تاريخ
    toDate = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('', ...(ngDevMode ? [{
      debugName: "toDate"
    }] : [])); // إلى تاريخ
    selectedSector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)('all', ...(ngDevMode ? [{
      debugName: "selectedSector"
    }] : [])); // القطاع المختار
    // الجدول فارغ في البداية
    reportData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([], ...(ngDevMode ? [{
      debugName: "reportData"
    }] : []));
    // =================== خصائص المكون (Properties) ===================
    sectors = [{
      value: 'all',
      label: 'ALL'
    }, {
      value: 'telecom',
      label: 'Telecom'
    }, {
      value: 'cars',
      label: 'Cars'
    }, {
      value: 'medical',
      label: 'Medical'
    }, {
      value: 'retail',
      label: 'Retail'
    }, {
      value: 'real-estate',
      label: 'Real estate'
    }, {
      value: 'commercial',
      label: 'Commercial'
    }, {
      value: 'foodstuffs',
      label: 'Foodstuffs'
    }, {
      value: 'education',
      label: 'Education'
    }, {
      value: 'finance',
      label: 'Finance'
    }, {
      value: 'insurance',
      label: 'Insurance'
    }, {
      value: 'soft-telecom',
      label: 'Soft Telecom'
    }, {
      value: 'cars-big',
      label: 'Cars Big'
    }, {
      value: 'cars-castle',
      label: 'Cars castle'
    }, {
      value: 'retail-kw',
      label: 'Retail KW'
    }, {
      value: 'soft-retail',
      label: 'Soft Retail'
    }, {
      value: 'soft-retail-nk',
      label: 'Soft Retail NK'
    }, {
      value: 'factory-owned',
      label: 'مصنع مملوك'
    }, {
      value: 'sub-telecom',
      label: 'Sub Telecom'
    }, {
      value: 'personal-real-estate',
      label: 'Personal Real estate'
    }];
    // =================== دورة حياة المكون (Lifecycle Hooks) ===================
    constructor() {}
    ngOnInit() {
      // تعيين التواريخ الافتراضية
      const today = new Date().toISOString().split('T')[0];
      this.fromDate.set('2025-01-01'); // مثال لتاريخ سابق
      this.toDate.set(today);
    }
    // =================== منطق المكون (Methods) ===================
    // دالة تحميل التقرير (تحاكي استدعاء الـ API)
    loadReports() {
      console.log('Fetching Company Performance Report with parameters:', {
        from: this.fromDate(),
        to: this.toDate(),
        sector: this.selectedSector()
      });
      // يتم هنا استدعاء خدمة الباك إند
      // بيانات وهمية للعرض بعد الضغط على الزر
      const dummyData = this.generateDummyReport();
      this.reportData.set(dummyData);
    }
    // دالة لتوليد بيانات وهمية
    generateDummyReport() {
      const data = [{
        company: 'Zain Telecom',
        sector: 'Telecom',
        totalSales: 520000,
        successRate: 85.5
      }, {
        company: 'Alghanim Motors',
        sector: 'Cars',
        totalSales: 180000,
        successRate: 78.2
      }, {
        company: 'Bayan Clinic',
        sector: 'Medical',
        totalSales: 95000,
        successRate: 92.0
      }, {
        company: 'Future Retail',
        sector: 'Retail',
        totalSales: 310000,
        successRate: 81.7
      }];
      // إضافة فلترة بسيطة للبيانات الوهمية
      const sectorFilter = this.selectedSector();
      if (sectorFilter !== 'all') {
        return data.filter(row => row.sector.toLowerCase() === sectorFilter.toLowerCase());
      }
      return data;
    }
    static ɵfac = function ReportCompaniesPerformance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportCompaniesPerformance)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ReportCompaniesPerformance,
      selectors: [["app-report-companies-performance"]],
      decls: 23,
      vars: 4,
      consts: [["dir", "rtl", 1, "p-4", "md:p-6", "min-h-screen", 2, "background-color", "var(--surface-ground)"], [1, "text-2xl", "font-bold", "mb-6", "border-b", "pb-2", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "lg:grid-cols-4", "gap-4", "p-4", "rounded-xl", "shadow-lg", 2, "background-color", "var(--surface-card)"], [1, "flex", "flex-col"], [1, "font-bold", "text-sm", "mb-1", 2, "color", "var(--text-color)"], ["type", "date", 1, "p-2", "border", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "transition", "cursor-pointer", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "p-2", "border", "rounded-lg", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "transition", "appearance-none", "cursor-pointer", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "col-span-2", "md:col-span-1", "flex", "items-end", "justify-start", "md:justify-end", "mt-4", "md:mt-0"], [1, "bg-green-600", "hover:bg-green-700", "text-white", "px-6", "py-2", "rounded-lg", "transition", "shadow-md", "hover:shadow-lg", "text-sm", "font-semibold", "whitespace-nowrap", 3, "click"], [1, "mt-6", "overflow-x-auto", "shadow-lg", "rounded-xl", "border", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "mt-6", "p-10", "text-center", "rounded-xl", "shadow", 2, "background-color", "var(--surface-card)", "color", "var(--text-color-secondary)"], [1, "w-[3000px]", "xl:w-full", "text-right", "border-collapse", "text-sm", 2, "border-color", "var(--surface-border)"], [1, "font-semibold", "sticky", "top-0", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [1, "p-3", "whitespace-nowrap", "border-l", "min-w-[120px]", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "whitespace-nowrap", "border-l", "min-w-[100px]", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "whitespace-nowrap", "border-l", "min-w-[150px]", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "whitespace-nowrap", "border-l", "min-w-[170px]", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "whitespace-nowrap", "border-l", "min-w-[200px]", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "whitespace-nowrap", "border-l", "min-w-[180px]", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "whitespace-nowrap", "border-l", "min-w-[130px]", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "whitespace-nowrap", "min-w-[100px]", 2, "color", "var(--text-color)"], [1, "border-b", "transition-colors", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)", 3, "background-color"], [1, "border-b", "transition-colors", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "p-3", "font-medium", "border-l", 2, "border-color", "var(--surface-border)"], [1, "p-3", "text-center", "border-l", "font-bold", 2, "border-color", "var(--surface-border)", "color", "var(--indigo-500)"], [1, "p-3", "text-center", "border-l", "font-bold", 2, "border-color", "var(--surface-border)", "color", "var(--blue-500)"], [1, "p-3", "text-center", "border-l", "font-bold", 2, "border-color", "var(--surface-border)", "color", "var(--green-500)"], [1, "p-3", "text-center", "border-l", "font-bold", 2, "border-color", "var(--surface-border)", "color", "var(--orange-500)"], [1, "p-3", "text-center", "border-l", 2, "border-color", "var(--surface-border)"], [1, "p-3", "text-center", "border-l", "font-bold", 2, "border-color", "var(--surface-border)", "color", "var(--red-500)"], [1, "p-3", "text-center"]],
      template: function ReportCompaniesPerformance_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \u062A\u0642\u0631\u064A\u0631 \u0623\u062F\u0627\u0621 \u0627\u0644\u0634\u0631\u0643\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u0645\u0646 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReportCompaniesPerformance_Template_input_ngModelChange_7_listener($event) {
            return ctx.fromDate.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u0627\u0644\u0649 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReportCompaniesPerformance_Template_input_ngModelChange_11_listener($event) {
            return ctx.toDate.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 3)(13, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u0627\u0644\u0642\u0637\u0627\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReportCompaniesPerformance_Template_select_ngModelChange_15_listener($event) {
            return ctx.selectedSector.set($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeaterCreate"](16, ReportCompaniesPerformance_For_17_Template, 2, 2, "option", 7, _forTrack0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 8)(19, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportCompaniesPerformance_Template_button_click_19_listener() {
            return ctx.loadReports();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " \u0639\u0631\u0636 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](21, ReportCompaniesPerformance_Conditional_21_Template, 57, 0, "div", 10)(22, ReportCompaniesPerformance_Conditional_22_Template, 2, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.fromDate());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.toDate());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selectedSector());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrepeater"](ctx.sectors);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.reportData().length ? 21 : 22);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
  return ReportCompaniesPerformance;
})();

/***/ })

}]);
//# sourceMappingURL=4032.js.map