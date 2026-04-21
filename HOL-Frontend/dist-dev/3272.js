"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[3272],{

/***/ 53272:
/*!*************************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/import-autonumbers/import-autonumbers.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAutoNumbersPage: () => (/* binding */ ImportAutoNumbersPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_import_dashboard_import_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/import-dashboard/import-dashboard.component */ 42105);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/progressbar */ 21416);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputnumber */ 61759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_excel_import_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/excel-import.service */ 39493);
/* harmony import */ var _services_data_view_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../services/data-view.service */ 59068);
/* harmony import */ var _services_signalr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../services/signalr */ 87133);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/services/sweet-alert.service */ 31365);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/api */ 17780);





























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
function ImportAutoNumbersPage_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_div_19_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.selectedFile = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.selectedFile.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("(", (ctx_r2.selectedFile.size / 1024).toFixed(1), " KB)");
  }
}
function ImportAutoNumbersPage_div_23_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" \u062A\u0645 \u0627\u0643\u062A\u0634\u0627\u0641 ", ctx_r2.activeJobErrorCount, " \u0623\u062E\u0637\u0627\u0621 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646 ");
  }
}
function ImportAutoNumbersPage_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 47)(1, "div", 20)(2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "p-progressBar", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 52)(10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ImportAutoNumbersPage_div_23_span_12_Template, 2, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "\u064A\u0645\u0643\u0646\u0643 \u062A\u0635\u0641\u062D \u0628\u0627\u0642\u064A \u0623\u062C\u0632\u0627\u0621 \u0627\u0644\u0646\u0638\u0627\u0645 \u0648\u0633\u0646\u0642\u0648\u0645 \u0628\u062A\u0646\u0628\u064A\u0647\u0643 \u0639\u0646\u062F \u0627\u0644\u0627\u0646\u062A\u0647\u0627\u0621.");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u062C\u0627\u0631\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0645\u0644\u0641 (", ctx_r2.getStatusLabel(ctx_r2.activeJobStatus), ")...");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r2.activeJobProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r2.activeJobProgress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" \u062A\u0645 \u0645\u0639\u0627\u0644\u062C\u0629 ", ctx_r2.activeJobProcessedRows, " \u0645\u0646 \u0623\u0635\u0644 ", ctx_r2.activeJobTotalRows, " \u0633\u0637\u0631... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.activeJobErrorCount > 0);
  }
}
function ImportAutoNumbersPage_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "\u0627\u0644\u062A\u0642\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "\u0628\u0648\u0627\u0633\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "\u0639\u062F\u062F \u0627\u0644\u0623\u0633\u0637\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ImportAutoNumbersPage_ng_template_37_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 76);
  }
  if (rf & 2) {
    const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("pTooltip", job_r6.errorMessage);
  }
}
function ImportAutoNumbersPage_ng_template_37_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" (", job_r6.errorCount, " \u062E\u0637\u0623) ");
  }
}
function ImportAutoNumbersPage_ng_template_37_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_37_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r7);
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.downloadErrorLog(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ImportAutoNumbersPage_ng_template_37_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_37_button_31_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.revertImport(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ImportAutoNumbersPage_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td")(5, "div", 58)(6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_37_Template_button_click_8_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.editJobName(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "p-tag", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ImportAutoNumbersPage_ng_template_37_i_11_Template, 1, 1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "td")(13, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "p-progressBar", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "td")(18, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "td")(21, "div", 67)(22, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, ImportAutoNumbersPage_ng_template_37_span_24_Template, 2, 1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "td", 57)(26, "div", 70)(27, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_37_Template_button_click_27_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.viewData(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_37_Template_button_click_28_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.downloadOriginal(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_37_Template_button_click_29_listener() {
      const job_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.exportJobData(job_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, ImportAutoNumbersPage_ng_template_37_button_30_Template, 1, 0, "button", 74)(31, ImportAutoNumbersPage_ng_template_37_button_31_Template, 1, 0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 14, job_r6.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](job_r6.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("severity", ctx_r2.getStatusSeverity(job_r6.status))("value", ctx_r2.getStatusLabel(job_r6.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", job_r6.status === "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", job_r6.progress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", job_r6.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", job_r6.createdBy || "\u063A\u064A\u0631 \u0645\u0639\u0631\u0648\u0641", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", job_r6.processedRows, " / ", job_r6.totalRows, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", job_r6.errorCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", job_r6.errorCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin && job_r6.status !== "Processing");
  }
}
function ImportAutoNumbersPage_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0645\u0644\u064A\u0627\u062A \u0633\u0627\u0628\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ImportAutoNumbersPage_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Parent Auto ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14, "\u0645\u0631\u062C\u0639 \u0627\u0644\u0642\u0636\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16, "\u0645\u0644\u0627\u062D\u0638\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18, "\u0627\u0644\u0645\u062F\u0639\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20, "\u0623\u0636\u064A\u0641 \u0628\u0648\u0627\u0633\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24, "\u0643\u0648\u062F \u0627\u0644\u0642\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](26, "Job ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ImportAutoNumbersPage_ng_template_46_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_46_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9);
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.editItem(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ImportAutoNumbersPage_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, ImportAutoNumbersPage_ng_template_46_button_2_Template, 1, 0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td")(4, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td")(7, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "td")(29, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin || ctx_r2.isSupervisor);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.fileCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.parentAutoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.autoNumberValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.caseRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.claimant);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.userAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](25, 13, item_r10.dateAdded, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.deptCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.importJobId);
  }
}
function ImportAutoNumbersPage_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr")(1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}
function ImportAutoNumbersPage_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_48_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.showDataDialog = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ImportAutoNumbersPage_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 92)(1, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_50_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingJob.fileName, $event) || (ctx_r2.editingJob.fileName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup.enter", function ImportAutoNumbersPage_div_50_Template_input_keyup_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.saveJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingJob.fileName);
  }
}
function ImportAutoNumbersPage_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.cancelJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_51_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.saveJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("loading", ctx_r2.savingJobEdit);
  }
}
function ImportAutoNumbersPage_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 97)(1, "div", 98)(2, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "p-inputNumber", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_53_Template_p_inputNumber_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.fileCode, $event) || (ctx_r2.editingItem.fileCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 98)(6, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "p-inputNumber", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_53_Template_p_inputNumber_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.deptCode, $event) || (ctx_r2.editingItem.deptCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 98)(10, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A \u0627\u0644\u0623\u0628 (Parent ID)");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "p-inputNumber", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_53_Template_p_inputNumber_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.parentAutoId, $event) || (ctx_r2.editingItem.parentAutoId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 98)(14, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_53_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.autoNumberValue, $event) || (ctx_r2.editingItem.autoNumberValue = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 98)(18, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_53_Template_input_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.type, $event) || (ctx_r2.editingItem.type = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 98)(22, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23, "\u0645\u0631\u062C\u0639 \u0627\u0644\u0642\u0636\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_53_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.caseRef, $event) || (ctx_r2.editingItem.caseRef = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 98)(26, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "\u0627\u0644\u0645\u062F\u0639\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_53_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.claimant, $event) || (ctx_r2.editingItem.claimant = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 98)(30, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "\u0645\u0644\u0627\u062D\u0638\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "textarea", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_div_53_Template_textarea_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.note, $event) || (ctx_r2.editingItem.note = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.fileCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.deptCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.parentAutoId);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.autoNumberValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.caseRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.claimant);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.note);
  }
}
function ImportAutoNumbersPage_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_ng_template_54_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r2.saveEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("loading", ctx_r2.savingEdit);
  }
}
let ImportAutoNumbersPage = /*#__PURE__*/(() => {
  class ImportAutoNumbersPage {
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
    // Data View Modal Pagination
    jobData = [];
    jobDataPage = 1;
    jobDataPageSize = 10;
    jobDataTotalRecords = 0;
    jobDataSearch = '';
    loadingJobData = false;
    // Row Editing
    showEditDialog = false;
    editingItem = null;
    savingEdit = false;
    // Job Editing
    showJobEditDialog = false;
    editingJob = null;
    savingJobEdit = false;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
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
      this.importService.uploadState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe(state => {
        if (state.jobType === 'AutoNumber') {
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
                text: 'يتم الآن رفع ومعالجة ملف Auto Numbers في الخلفية'
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
      this.importService.getMyJobs(this.currentPage, this.pageSize, 'AutoNumber', this.jobSearch).subscribe({
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
      this.importService.startUpload(this.selectedFile, 'AutoNumber');
    }
    listenToProgress() {
      this.signalr.message$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this.destroy$)).subscribe(msg => {
        if (msg.type === 'excel_import_progress' && msg.data.jobType === 'AutoNumber') {
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
        } else if (msg.type === 'excel_import_complete' && msg.data.jobType === 'AutoNumber') {
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
      this.importService.downloadAutoNumbersTemplate();
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
            text: err.error?.message || 'فشل تحميل بيانات العملية'
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
      this.dataViewService.updateAutoNumber(this.editingItem.id, this.editingItem).subscribe({
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
    static ɵfac = function ImportAutoNumbersPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportAutoNumbersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_excel_import_service__WEBPACK_IMPORTED_MODULE_15__.ExcelImportService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_data_view_service__WEBPACK_IMPORTED_MODULE_16__.DataViewService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_signalr__WEBPACK_IMPORTED_MODULE_17__.Signalr), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_18__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_19__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: ImportAutoNumbersPage,
      selectors: [["app-import-autonumbers"]],
      viewQuery: function ImportAutoNumbersPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.jobsTable = _t.first);
        }
      },
      decls: 55,
      vars: 54,
      consts: [["fileInput", ""], ["jobsTable", ""], [1, "card", "bg-white", "dark:bg-gray-900", "rounded-2xl", "shadow-sm", "p-6", "animate-fadein"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-900", "dark:text-white", "mb-1"], [1, "text-gray-500", "text-sm"], ["pButton", "", "icon", "pi pi-download", "label", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062C (Template)", 1, "p-button-outlined", "p-button-sm", "p-button-rounded", 3, "click"], ["jobType", "AutoNumber"], [1, "p-8", "border-2", "border-dashed", "border-gray-200", "dark:border-gray-700", "rounded-2xl", "bg-gray-50", "dark:bg-gray-800/20", "text-center", "mb-8"], [1, "pi", "pi-file-excel", "text-5xl", "text-blue-500", "mb-4"], [1, "mb-6"], [1, "text-lg", "font-bold", "mb-1"], [1, "text-sm", "text-gray-500"], ["type", "file", "accept", ".xlsx, .xls", 1, "hidden", 3, "change"], [1, "flex", "flex-col", "items-center", "gap-4"], ["class", "bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-lg flex items-center gap-3", 4, "ngIf"], [1, "flex", "gap-3"], ["pButton", "", "label", "\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0644\u0641", "icon", "pi pi-search", 1, "p-button-secondary", "p-button-rounded", 3, "click", "disabled"], ["pButton", "", "label", "\u0628\u062F\u0621 \u0627\u0644\u0631\u0641\u0639 \u0648\u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F", "icon", "pi pi-cloud-upload", 1, "p-button-primary", "p-button-rounded", 3, "click", "disabled", "loading"], ["class", "mb-8 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-2xl", 4, "ngIf"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-lg", "font-bold", "flex", "items-center", "gap-2", "mb-0"], [1, "pi", "pi-history"], [1, "flex", "items-center", "gap-3"], [1, "p-input-icon-left"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0628\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641...", 1, "p-inputtext-sm", "p-button-rounded", 3, "ngModelChange", "input", "ngModel"], ["pButton", "", "icon", "pi pi-refresh", 1, "p-button-text", "p-button-rounded", "p-button-sm", 3, "click", "loading"], ["styleClass", "p-datatable-sm", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "totalRecords", "rowsPerPageOptions", "loading"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [3, "visibleChange", "visible", "header", "modal", "breakpoints", "draggable", "resizable", "maximizable"], [1, "mb-4"], [1, "p-input-icon-left", "w-full"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0633\u0631\u064A\u0639 \u062F\u0627\u062E\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A (\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641\u060C \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A\u060C \u0645\u0631\u062C\u0639 \u0627\u0644\u0642\u0636\u064A\u0629...)", 1, "w-full", "p-inputtext-sm", 3, "ngModelChange", "input", "ngModel"], ["styleClass", "p-datatable-sm", "currentPageReportTemplate", "\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 {totalRecords}", "scrollHeight", "500px", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "totalRecords", "loading", "showCurrentPageReport", "scrollable"], ["pTemplate", "footer"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], ["class", "flex flex-col gap-3 p-4", 4, "ngIf"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A", 3, "visibleChange", "visible", "modal", "breakpoints", "draggable", "resizable", "maximizable"], ["class", "grid grid-cols-1 gap-4 p-4", 4, "ngIf"], [1, "bg-blue-50", "dark:bg-blue-900/30", "px-4", "py-2", "rounded-lg", "flex", "items-center", "gap-3"], [1, "pi", "pi-file", "text-blue-600"], [1, "font-medium", "text-blue-700", "dark:text-blue-300"], [1, "text-xs", "text-blue-500"], [1, "pi", "pi-times", "text-red-500", "hover:text-red-700", 3, "click"], [1, "mb-8", "p-6", "bg-blue-50", "dark:bg-blue-900/10", "border", "border-blue-100", "dark:border-blue-800", "rounded-2xl"], [1, "pi", "pi-spin", "pi-spinner", "text-blue-600"], [1, "font-bold", "text-blue-900", "dark:text-blue-100"], [1, "text-lg", "font-bold", "text-blue-700"], ["styleClass", "h-2 rounded-full", 3, "value", "showValue"], [1, "flex", "justify-between", "mt-2", "text-xs"], [1, "text-blue-600"], ["class", "text-red-500 font-bold", 4, "ngIf"], [1, "text-blue-500", "italic"], [1, "text-red-500", "font-bold"], [1, "text-center"], [1, "flex", "items-center", "gap-2"], [1, "font-medium"], ["pButton", "", "icon", "pi pi-pencil", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0627\u0633\u0645", 1, "p-button-text", "p-button-xs", "p-button-rounded", "p-button-secondary", "h-6", "w-6", 3, "click"], [3, "severity", "value"], ["class", "pi pi-info-circle text-danger ml-2", 3, "pTooltip", 4, "ngIf"], [1, "flex", "items-center", "gap-2", "min-w-[150px]"], [1, "flex-1", "h-1.5", 3, "value", "showValue"], [1, "text-xs", "font-bold"], [1, "text-xs", "font-medium", "text-gray-600", "dark:text-gray-400"], [1, "flex", "flex-col", "gap-1"], [1, "text-sm", "font-medium"], ["class", "text-xs text-red-500 font-bold", 4, "ngIf"], [1, "flex", "justify-center", "gap-1"], ["pButton", "", "icon", "pi pi-eye", "pTooltip", "\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0633\u062A\u0648\u0631\u062F\u0629", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-success", 3, "click"], ["pButton", "", "icon", "pi pi-download", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0623\u0635\u0644\u064A", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-info", 3, "click"], ["pButton", "", "icon", "pi pi-file-excel", "pTooltip", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-secondary", 3, "click"], ["pButton", "", "icon", "pi pi-exclamation-triangle", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0633\u062C\u0644 \u0627\u0644\u0623\u062E\u0637\u0627\u0621", "tooltipPosition", "top", "class", "p-button-text p-button-sm p-button-rounded p-button-warning", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "\u062A\u0631\u0627\u062C\u0639 (\u062D\u0630\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A)", "tooltipPosition", "top", "class", "p-button-text p-button-sm p-button-rounded p-button-danger", 3, "click", 4, "ngIf"], [1, "pi", "pi-info-circle", "text-danger", "ml-2", 3, "pTooltip"], [1, "text-xs", "text-red-500", "font-bold"], ["pButton", "", "icon", "pi pi-exclamation-triangle", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0633\u062C\u0644 \u0627\u0644\u0623\u062E\u0637\u0627\u0621", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-warning", 3, "click"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "\u062A\u0631\u0627\u062C\u0639 (\u062D\u0630\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A)", "tooltipPosition", "top", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-danger", 3, "click"], ["colspan", "7", 1, "text-center", "py-8", "text-gray-500", "italic"], [2, "min-width", "80px"], [2, "min-width", "120px"], [2, "min-width", "100px"], [2, "min-width", "150px"], [2, "min-width", "200px"], ["pButton", "", "icon", "pi pi-pencil", "class", "p-button-text p-button-sm p-button-rounded p-button-warning", 3, "click", 4, "ngIf"], [1, "font-mono", "text-xs"], [1, "font-bold"], ["pButton", "", "icon", "pi pi-pencil", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-warning", 3, "click"], ["colspan", "12", 1, "text-center", "py-4"], ["pButton", "", "label", "\u0625\u063A\u0644\u0627\u0642", "icon", "pi pi-times", 1, "p-button-text", 3, "click"], [1, "flex", "flex-col", "gap-3", "p-4"], [1, "font-bold", "text-sm"], ["pInputText", "", 1, "w-full", 3, "ngModelChange", "keyup.enter", "ngModel"], ["pButton", "", "label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", 1, "p-button-text", "p-button-rounded", 3, "click"], ["pButton", "", "label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644", "icon", "pi pi-check", 1, "p-button-primary", "p-button-rounded", 3, "click", "loading"], [1, "grid", "grid-cols-1", "gap-4", "p-4"], [1, "flex", "flex-col", "gap-2"], [3, "ngModelChange", "ngModel", "useGrouping"], ["pInputText", "", 3, "ngModelChange", "ngModel"], ["pInputText", "", "rows", "3", 1, "w-full", 3, "ngModelChange", "ngModel"], ["pButton", "", "label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A", "icon", "pi pi-check", 1, "p-button-primary", "p-button-rounded", 3, "click", "loading"]],
      template: function ImportAutoNumbersPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4, "\u0631\u0641\u0639 \u0645\u0644\u0641\u0627\u062A \u0627\u0631\u0642\u0627\u0645 \u0627\u0644\u064A\u0629 (Auto Numbers)");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "\u0631\u0641\u0639 \u0645\u0644\u0641\u0627\u062A \u0625\u0643\u0633\u064A\u0644 \u0648\u0645\u0639\u0627\u0644\u062C\u062A\u0647\u0627 \u0641\u064A \u0627\u0644\u062E\u0644\u0641\u064A\u0629 \u0648\u062A\u062D\u062F\u064A\u062B \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0642\u0636\u0627\u064A\u0627");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.downloadTemplate());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "app-import-dashboard", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 10)(12, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "\u0627\u062E\u062A\u0631 \u0645\u0644\u0641 \u0627\u0644\u0625\u0643\u0633\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "\u064A\u062F\u0639\u0645 \u0635\u064A\u063A .xlsx \u0648 .xls \u0641\u0642\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "input", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("change", function ImportAutoNumbersPage_Template_input_change_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, ImportAutoNumbersPage_div_19_Template, 7, 2, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 16)(21, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            const fileInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](17);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](fileInput_r4.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.uploadFile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, ImportAutoNumbersPage_div_23_Template, 15, 7, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div")(25, "div", 20)(26, "h3", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28, " \u0622\u062E\u0631 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 23)(30, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.jobSearch, $event) || (ctx.jobSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function ImportAutoNumbersPage_Template_input_input_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onJobSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ImportAutoNumbersPage_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.refresh());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "p-table", 28, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onLazyLoad", function ImportAutoNumbersPage_Template_p_table_onLazyLoad_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onPageChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](36, ImportAutoNumbersPage_ng_template_36_Template, 15, 0, "ng-template", 29)(37, ImportAutoNumbersPage_ng_template_37_Template, 32, 17, "ng-template", 30)(38, ImportAutoNumbersPage_ng_template_38_Template, 3, 0, "ng-template", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "p-dialog", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("visibleChange", function ImportAutoNumbersPage_Template_p_dialog_visibleChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.showDataDialog, $event) || (ctx.showDataDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "div", 33)(41, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](42, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "input", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("ngModelChange", function ImportAutoNumbersPage_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.jobDataSearch, $event) || (ctx.jobDataSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("input", function ImportAutoNumbersPage_Template_input_input_43_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onJobDataSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "p-table", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onLazyLoad", function ImportAutoNumbersPage_Template_p_table_onLazyLoad_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx.onJobDataPageChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, ImportAutoNumbersPage_ng_template_45_Template, 27, 0, "ng-template", 29)(46, ImportAutoNumbersPage_ng_template_46_Template, 31, 16, "ng-template", 30)(47, ImportAutoNumbersPage_ng_template_47_Template, 3, 0, "ng-template", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, ImportAutoNumbersPage_ng_template_48_Template, 1, 0, "ng-template", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "p-dialog", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("visibleChange", function ImportAutoNumbersPage_Template_p_dialog_visibleChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.showJobEditDialog, $event) || (ctx.showJobEditDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](50, ImportAutoNumbersPage_div_50_Template, 4, 1, "div", 39)(51, ImportAutoNumbersPage_ng_template_51_Template, 2, 1, "ng-template", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "p-dialog", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayListener"]("visibleChange", function ImportAutoNumbersPage_Template_p_dialog_visibleChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayBindingSet"](ctx.showEditDialog, $event) || (ctx.showEditDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, ImportAutoNumbersPage_div_53_Template, 33, 11, "div", 41)(54, ImportAutoNumbersPage_ng_template_54_Template, 2, 1, "ng-template", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.selectedFile);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.selectedFile || ctx.uploading)("loading", ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.activeJobId);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx.jobSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("loading", ctx.loadingJobs);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx.jobs)("lazy", true)("paginator", true)("rows", ctx.pageSize)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](48, _c1))("loading", ctx.loadingJobs);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](49, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("visible", ctx.showDataDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("header", "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629: " + (ctx.viewingJob == null ? null : ctx.viewingJob.fileName))("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](50, _c3))("draggable", false)("resizable", false)("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("ngModel", ctx.jobDataSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx.jobData)("lazy", true)("paginator", true)("rows", ctx.jobDataPageSize)("totalRecords", ctx.jobDataTotalRecords)("loading", ctx.loadingJobData)("showCurrentPageReport", true)("scrollable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](51, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("visible", ctx.showJobEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("modal", true)("draggable", false)("resizable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.editingJob);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](52, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtwoWayProperty"]("visible", ctx.showEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("modal", true)("breakpoints", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](53, _c6))("draggable", false)("resizable", false)("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.editingItem);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_3__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_20__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_5__.ProgressBar, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.Tag, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_7__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.TooltipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_9__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumberModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_10__.InputNumber, _components_import_dashboard_import_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.ImportDashboardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      encapsulation: 2
    });
  }
  return ImportAutoNumbersPage;
})();

/***/ })

}]);
//# sourceMappingURL=3272.js.map