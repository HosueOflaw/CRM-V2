"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[7700],{

/***/ 77700:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/import-additional-amounts/import-additional-amounts.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImportAdditionalAmountsPage: () => (/* binding */ ImportAdditionalAmountsPage)
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
/* harmony import */ var primeng_textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/textarea */ 65654);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _components_import_dashboard_import_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/import-dashboard/import-dashboard.component */ 42105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_excel_import_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../services/excel-import.service */ 39493);
/* harmony import */ var _services_data_view_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../services/data-view.service */ 59068);
/* harmony import */ var _services_signalr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../services/signalr */ 87133);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../shared/services/sweet-alert.service */ 31365);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/api */ 17780);
































const _c0 = ["jobsTable"];
const _c1 = () => [10, 20, 50];
const _c2 = () => ({
  width: "90vw",
  maxWidth: "1200px"
});
const _c3 = () => [10, 20, 50, 100];
const _c4 = () => ({
  width: "450px"
});
function ImportAdditionalAmountsPage_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 43)(1, "div", 21)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "div")(5, "h4", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "\u062C\u0627\u0631\u064A \u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "\u064A\u062A\u0645 \u0627\u0644\u0622\u0646 \u0641\u062D\u0635 \u0648\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0641\u064A \u0627\u0644\u062E\u0644\u0641\u064A\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 47)(10, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "p-progressBar", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 50)(14, "div", 51)(15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A \u0641\u064A \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](19, "div", 51)(20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21, "\u062A\u0645\u062A \u0645\u0639\u0627\u0644\u062C\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](24, "div", 51)(25, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26, "\u0623\u062E\u0637\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", ctx_r2.activeJobProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r2.activeJobProgress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.activeJobTotalRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.activeJobProcessedRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r2.activeJobErrorCount);
  }
}
function ImportAdditionalAmountsPage_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr", 56)(1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "#ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "\u0627\u0644\u062A\u0642\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 (\u0625\u062C\u0645\u0627\u0644\u064A/\u0631\u064F\u0641\u0639/\u062E\u0637\u0623)");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, "\u0628\u0648\u0627\u0633\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](16, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function ImportAdditionalAmountsPage_ng_template_32_button_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_32_button_42_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r6);
      const job_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.downloadErrorLog(job_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function ImportAdditionalAmountsPage_ng_template_32_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_32_button_43_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r7);
      const job_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.revertImport(job_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function ImportAdditionalAmountsPage_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr", 60)(1, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "td")(4, "div", 62)(5, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_32_Template_button_click_7_listener() {
      const job_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.editJobName(job_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "p-tag", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "td")(11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "p-progressBar", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "td")(16, "div", 69)(17, "div", 70)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](19, "\u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 71)(23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](24, "\u062A\u0645 \u0627\u0644\u0631\u0641\u0639:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](25, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "div", 72)(28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](29, "\u0627\u0644\u0623\u062E\u0637\u0627\u0621:");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](30, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](37, "td")(38, "div", 75)(39, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_32_Template_button_click_39_listener() {
      const job_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.viewData(job_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_32_Template_button_click_40_listener() {
      const job_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.downloadOriginal(job_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](41, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_32_Template_button_click_41_listener() {
      const job_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.exportJobData(job_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](42, ImportAdditionalAmountsPage_ng_template_32_button_42_Template, 1, 0, "button", 79)(43, ImportAdditionalAmountsPage_ng_template_32_button_43_Template, 1, 0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const job_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](job_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](job_r5.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx_r2.getStatusLabel(job_r5.status))("severity", ctx_r2.getStatusSeverity(job_r5.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", job_r5.progress)("showValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", job_r5.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](job_r5.totalRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](job_r5.processedRows - job_r5.errorCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](job_r5.errorCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](job_r5.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](36, 15, job_r5.createdAt, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", job_r5.status !== "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", job_r5.errorCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r2.isAdmin);
  }
}
function ImportAdditionalAmountsPage_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0645\u0644\u064A\u0627\u062A \u0631\u0641\u0639 \u0633\u0627\u0628\u0642\u0629 \u0644\u0645\u0628\u0627\u0644\u063A \u0625\u0636\u0627\u0641\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
}
function ImportAdditionalAmountsPage_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr")(1, "th", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "th", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6, "\u0627\u0644\u0645\u0628\u0644\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](8, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "th", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10, "\u0628\u0648\u0627\u0633\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "th", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "th", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](14, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
}
function ImportAdditionalAmountsPage_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr", 89)(1, "td", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "td", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "p-tag", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "td", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "td", 12)(16, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_53_Template_button_click_16_listener() {
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.editItem(item_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r9.fileCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r9.deptCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](7, 6, item_r9.value, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", item_r9.amountType || "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r9.userAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](14, 9, item_r9.dateAdded, "short"));
  }
}
function ImportAdditionalAmountsPage_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.showDataDialog = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
}
function ImportAdditionalAmountsPage_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 96)(1, "div", 97)(2, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "p-inputNumber", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function ImportAdditionalAmountsPage_div_56_Template_p_inputNumber_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.fileCode, $event) || (ctx_r2.editingItem.fileCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 97)(6, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7, "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "p-inputNumber", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function ImportAdditionalAmountsPage_div_56_Template_p_inputNumber_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.deptCode, $event) || (ctx_r2.editingItem.deptCode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 97)(10, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](11, "\u0627\u0644\u0645\u0628\u0644\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "p-inputNumber", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function ImportAdditionalAmountsPage_div_56_Template_p_inputNumber_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.value, $event) || (ctx_r2.editingItem.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "div", 97)(14, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "input", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function ImportAdditionalAmountsPage_div_56_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r11);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r2.editingItem.amountType, $event) || (ctx_r2.editingItem.amountType = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.fileCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("useGrouping", false)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.deptCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("useGrouping", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("minFractionDigits", 3)("maxFractionDigits", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingItem.amountType);
  }
}
function ImportAdditionalAmountsPage_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_57_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.cancelEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_57_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.saveEdit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("loading", ctx_r2.savingEdit);
  }
}
function ImportAdditionalAmountsPage_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 105)(1, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u062C\u062F\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function ImportAdditionalAmountsPage_div_59_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx_r2.editingJob.fileName, $event) || (ctx_r2.editingJob.fileName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("keyup.enter", function ImportAdditionalAmountsPage_div_59_Template_input_keyup_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r13);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.saveJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.editingJob.fileName);
  }
}
function ImportAdditionalAmountsPage_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_60_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.cancelJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_ng_template_60_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r14);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r2.saveJobName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("loading", ctx_r2.savingJobEdit);
  }
}
let ImportAdditionalAmountsPage = /*#__PURE__*/(() => {
  class ImportAdditionalAmountsPage {
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
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
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
      this.importService.uploadState$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(state => {
        if (state.jobType === 'AdditionalAmount') {
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
                text: 'يتم الآن رفع ومعالجة ملف المبالغ الإضافية في الخلفية'
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
      this.importService.getMyJobs(this.currentPage, this.pageSize, 'AdditionalAmount', this.jobSearch).subscribe({
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
      this.importService.startUpload(this.selectedFile, 'AdditionalAmount');
    }
    listenToProgress() {
      this.signalr.message$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(msg => {
        if (msg.type === 'excel_import_progress' && msg.data.jobType === 'AdditionalAmount') {
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
        } else if (msg.type === 'excel_import_complete' && msg.data.jobType === 'AdditionalAmount') {
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
      this.importService.downloadAdditionalAmountsTemplate();
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
      this.dataViewService.updateAdditionalAmount(this.editingItem.id, this.editingItem).subscribe({
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
    static ɵfac = function ImportAdditionalAmountsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ImportAdditionalAmountsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_excel_import_service__WEBPACK_IMPORTED_MODULE_18__.ExcelImportService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_data_view_service__WEBPACK_IMPORTED_MODULE_19__.DataViewService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_services_signalr__WEBPACK_IMPORTED_MODULE_20__.Signalr), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_21__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_22__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
      type: ImportAdditionalAmountsPage,
      selectors: [["app-import-additional-amounts"]],
      viewQuery: function ImportAdditionalAmountsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵloadQuery"]()) && (ctx.jobsTable = _t.first);
        }
      },
      decls: 61,
      vars: 46,
      consts: [["fileInput", ""], ["jobsTable", ""], [1, "card", "bg-white", "dark:bg-gray-900", "rounded-2xl", "shadow-sm", "p-6", "animate-fadein"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-800", "dark:text-white", "flex", "items-center", "gap-3"], [1, "pi", "pi-dollar", "text-primary", "text-2xl"], ["pButton", "", "label", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062C", "icon", "pi pi-download", 1, "p-button-outlined", "p-button-sm", "p-button-rounded", "transition-all", "duration-300", "hover:bg-primary-50", 3, "click"], ["jobType", "AdditionalAmount"], [1, "bg-gray-50", "dark:bg-gray-800/50", "rounded-xl", "p-8", "border-2", "border-dashed", "border-gray-200", "dark:border-gray-700", "mb-8", "transition-all", "hover:border-primary"], [1, "flex", "flex-col", "items-center", "justify-center", "gap-4"], [1, "w-16", "h-16", "bg-primary-100", "dark:bg-primary-900/30", "rounded-full", "flex", "items-center", "justify-center"], [1, "pi", "pi-cloud-upload", "text-3xl", "text-primary"], [1, "text-center"], [1, "text-lg", "font-semibold", "text-gray-800", "dark:text-white", "mb-1"], [1, "text-sm", "text-gray-500", "dark:text-gray-400"], ["type", "file", "accept", ".xlsx, .xls", 1, "hidden", 3, "change"], [1, "flex", "items-center", "gap-3"], ["pButton", "", 1, "p-button-secondary", "p-button-rounded", "px-6", 3, "click", "label", "icon"], ["pButton", "", "label", "\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u064A\u0631\u0627\u062F", "icon", "pi pi-play", 1, "p-button-primary", "p-button-rounded", "px-8", "transition-transform", "hover:scale-105", 3, "click", "disabled", "loading"], ["class", "mb-8 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-2xl animate-fadein", 4, "ngIf"], [1, "history-section"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white", "m-0"], [1, "p-input-icon-left", "w-full", "md:w-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0641\u064A \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641...", 1, "p-inputtext-sm", "p-rounded-lg", "w-full", 3, "ngModelChange", "input", "ngModel"], ["styleClass", "p-datatable-sm p-datatable-gridlines rounded-xl overflow-hidden shadow-sm", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "totalRecords", "loading", "rowsPerPageOptions", "responsiveLayout"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], ["styleClass", "p-fluid rounded-2xl overflow-hidden shadow-2xl", 3, "visibleChange", "visible", "header", "modal", "maximizable"], [1, "mb-6", "p-4", "bg-gray-50", "dark:bg-gray-800", "rounded-xl", "flex", "flex-wrap", "gap-4", "items-center", "justify-between", "border", "border-gray-100", "dark:border-gray-700"], [1, "flex", "items-center", "gap-4"], [1, "text-xs", "text-gray-400", "block", "mb-1"], [1, "font-bold"], [1, "w-px", "h-8", "bg-gray-200", "dark:bg-gray-700"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...", 1, "p-inputtext-sm", "p-rounded-lg", "w-full", 3, "ngModelChange", "input", "ngModel"], ["styleClass", "p-datatable-sm p-datatable-striped rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800", 3, "onLazyLoad", "value", "lazy", "paginator", "rows", "totalRecords", "loading", "rowsPerPageOptions", "responsiveLayout"], ["pTemplate", "footer"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u062C\u0644", "styleClass", "p-fluid rounded-2xl shadow-2xl", 3, "visibleChange", "visible", "modal"], ["class", "grid gap-4 mt-2", 4, "ngIf"], ["header", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641", "styleClass", "p-fluid rounded-2xl shadow-2xl", 3, "visibleChange", "visible", "modal"], ["class", "field mt-4", 4, "ngIf"], [1, "mb-8", "p-6", "bg-blue-50", "dark:bg-blue-900/10", "border", "border-blue-100", "dark:border-blue-900/20", "rounded-2xl", "animate-fadein"], [1, "pi", "pi-spin", "pi-spinner", "text-blue-600", "dark:text-blue-400", "text-xl"], [1, "font-bold", "text-gray-800", "dark:text-white", "m-0"], [1, "text-sm", "text-gray-500", "m-0"], [1, "text-right"], [1, "text-2xl", "font-bold", "text-blue-600", "dark:text-blue-400"], ["styleClass", "h-2 rounded-full mb-4", 3, "value", "showValue"], [1, "grid", "grid-cols-3", "gap-4"], [1, "p-3", "bg-white", "dark:bg-gray-800", "rounded-xl", "shadow-sm"], [1, "text-xs", "text-gray-400", "mb-1"], [1, "font-bold", "text-gray-800", "dark:text-white"], [1, "font-bold", "text-primary"], [1, "font-bold", "text-red-500"], [1, "bg-gray-50", "dark:bg-gray-800"], [1, "w-12", "text-center", "text-xs", "font-bold", "uppercase", "tracking-wider"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider"], [1, "w-48", "text-center", "text-xs", "font-bold", "uppercase", "tracking-wider"], [1, "hover:bg-gray-50/50", "dark:hover:bg-gray-800/50", "transition-colors"], [1, "text-center", "font-mono", "text-gray-400"], [1, "flex", "items-center", "gap-2"], [1, "font-semibold", "text-gray-700", "dark:text-gray-200"], ["pButton", "", "icon", "pi pi-pencil", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641", 1, "p-button-text", "p-button-xs", "p-button-rounded", 3, "click"], ["styleClass", "px-3 rounded-full font-medium", 3, "value", "severity"], [1, "flex", "items-center", "gap-2", "w-32"], ["styleClass", "h-1.5 flex-1", 3, "value", "showValue"], [1, "text-xs", "font-bold"], [1, "flex", "flex-col", "gap-1", "text-xs"], [1, "flex", "justify-between"], [1, "flex", "justify-between", "text-primary"], [1, "flex", "justify-between", "text-red-500"], [1, "text-sm"], [1, "text-sm", "text-gray-500"], [1, "flex", "justify-center", "gap-1"], ["pButton", "", "icon", "pi pi-eye", "pTooltip", "\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u0641\u0648\u0639\u0629", 1, "p-button-text", "p-button-sm", "p-button-rounded", 3, "click", "disabled"], ["pButton", "", "icon", "pi pi-download", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0623\u0635\u0644\u064A", 1, "p-button-text", "p-button-secondary", "p-button-sm", "p-button-rounded", 3, "click"], ["pButton", "", "icon", "pi pi-file-excel", "pTooltip", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629", 1, "p-button-text", "p-button-success", "p-button-sm", "p-button-rounded", 3, "click"], ["pButton", "", "icon", "pi pi-exclamation-triangle", "class", "p-button-text p-button-warning p-button-sm p-button-rounded", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0633\u062C\u0644 \u0627\u0644\u0623\u062E\u0637\u0627\u0621", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-trash", "class", "p-button-text p-button-danger p-button-sm p-button-rounded", "pTooltip", "\u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0639\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0629", 3, "click", 4, "ngIf"], ["pButton", "", "icon", "pi pi-exclamation-triangle", "pTooltip", "\u062A\u062D\u0645\u064A\u0644 \u0633\u062C\u0644 \u0627\u0644\u0623\u062E\u0637\u0627\u0621", 1, "p-button-text", "p-button-warning", "p-button-sm", "p-button-rounded", 3, "click"], ["pButton", "", "icon", "pi pi-trash", "pTooltip", "\u0627\u0644\u062A\u0631\u0627\u062C\u0639 \u0639\u0646 \u0627\u0644\u0639\u0645\u0644\u064A\u0629", 1, "p-button-text", "p-button-danger", "p-button-sm", "p-button-rounded", 3, "click"], ["colspan", "8", 1, "text-center", "p-8", "bg-gray-50/30"], [1, "pi", "pi-inbox", "text-4xl", "text-gray-300", "mb-3", "block"], [1, "text-gray-400"], [1, "w-32"], [1, "w-40"], [1, "w-24", "text-center"], [1, "transition-colors", "hover:bg-gray-50/50", "dark:hover:bg-gray-800/50"], [1, "font-mono"], [1, "font-mono", "text-gray-500"], ["severity", "info", "styleClass", "px-2 text-xs", 3, "value"], [1, "text-xs", "text-gray-500"], ["pButton", "", "icon", "pi pi-pencil", "pTooltip", "\u062A\u0639\u062F\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0633\u062C\u0644", 1, "p-button-text", "p-button-sm", "p-button-rounded", 3, "click"], ["pButton", "", "label", "\u0625\u063A\u0644\u0627\u0642", "icon", "pi pi-times", 1, "p-button-text", 3, "click"], [1, "grid", "gap-4", "mt-2"], [1, "field"], [1, "font-bold", "mb-2", "block"], ["pTooltip", "\u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u063A\u064A\u064A\u0631 \u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u0631\u062A\u0628\u0637 \u0628\u0627\u0644\u0633\u062C\u0644", "tooltipPosition", "top", 1, "w-full", 3, "ngModelChange", "ngModel", "useGrouping", "disabled"], ["pTooltip", "\u0643\u0648\u062F \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)", 1, "w-full", 3, "ngModelChange", "ngModel", "useGrouping"], ["mode", "decimal", "pTooltip", "\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0625\u0636\u0627\u0641\u064A", 1, "w-full", 3, "ngModelChange", "ngModel", "minFractionDigits", "maxFractionDigits"], ["pInputText", "", "type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0631\u0633\u0648\u0645 \u0642\u0636\u0627\u0626\u064A\u0629\u060C \u0623\u062A\u0639\u0627\u0628...", "pTooltip", "\u0646\u0648\u0639 \u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0625\u0636\u0627\u0641\u064A", 1, "w-full", 3, "ngModelChange", "ngModel"], ["pButton", "", "label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", 1, "p-button-text", "p-button-secondary", 3, "click"], ["pButton", "", "label", "\u062D\u0641\u0638 \u0627\u0644\u062A\u063A\u064A\u064A\u0631\u0627\u062A", "icon", "pi pi-check", 1, "p-button-primary", 3, "click", "loading"], [1, "field", "mt-4"], ["pInputText", "", "type", "text", 1, "w-full", 3, "ngModelChange", "keyup.enter", "ngModel"], ["pButton", "", "label", "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0627\u0633\u0645", "icon", "pi pi-check", 1, "p-button-primary", 3, "click", "loading"]],
      template: function ImportAdditionalAmountsPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4, " \u0627\u0633\u062A\u064A\u0631\u0627\u062F \u0645\u0628\u0627\u0644\u063A \u0625\u0636\u0627\u0641\u064A\u0629 (Additional Amounts) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.downloadTemplate());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "app-import-dashboard", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "div", 8)(8, "div", 9)(9, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "div", 12)(12, "h3", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](13, "\u0627\u062E\u062A\u0631 \u0645\u0644\u0641 \u0627\u0644\u0625\u0643\u0633\u064A\u0644 \u0644\u0644\u0631\u0641\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15, "\u064A\u062F\u0639\u0645 \u062A\u0646\u0633\u064A\u0642\u0627\u062A .xlsx \u0623\u0648 .xls \u0641\u0642\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "input", 15, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("change", function ImportAdditionalAmountsPage_Template_input_change_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](18, "div", 16)(19, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](17);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](fileInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function ImportAdditionalAmountsPage_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.uploadFile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, ImportAdditionalAmountsPage_div_21_Template, 29, 6, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "div", 20)(23, "div", 21)(24, "h3", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](25, "\u0633\u062C\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0627\u0644\u0631\u0641\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](26, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](27, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function ImportAdditionalAmountsPage_Template_input_ngModelChange_28_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.jobSearch, $event) || (ctx.jobSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("input", function ImportAdditionalAmountsPage_Template_input_input_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.onJobSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](29, "p-table", 26, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("onLazyLoad", function ImportAdditionalAmountsPage_Template_p_table_onLazyLoad_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.onPageChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](31, ImportAdditionalAmountsPage_ng_template_31_Template, 17, 0, "ng-template", 27)(32, ImportAdditionalAmountsPage_ng_template_32_Template, 44, 18, "ng-template", 28)(33, ImportAdditionalAmountsPage_ng_template_33_Template, 5, 0, "ng-template", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](34, "p-dialog", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("visibleChange", function ImportAdditionalAmountsPage_Template_p_dialog_visibleChange_34_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.showDataDialog, $event) || (ctx.showDataDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](35, "div", 31)(36, "div", 32)(37, "div")(38, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](39, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641:");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](40, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](42, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "div")(44, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](45, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u062C\u0644\u0627\u062A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](46, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](48, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](49, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](50, "input", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("ngModelChange", function ImportAdditionalAmountsPage_Template_input_ngModelChange_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.jobDataSearch, $event) || (ctx.jobDataSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("input", function ImportAdditionalAmountsPage_Template_input_input_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.onJobDataSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](51, "p-table", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("onLazyLoad", function ImportAdditionalAmountsPage_Template_p_table_onLazyLoad_51_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx.onJobDataPageChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](52, ImportAdditionalAmountsPage_ng_template_52_Template, 15, 0, "ng-template", 27)(53, ImportAdditionalAmountsPage_ng_template_53_Template, 17, 12, "ng-template", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](54, ImportAdditionalAmountsPage_ng_template_54_Template, 1, 0, "ng-template", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "p-dialog", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("visibleChange", function ImportAdditionalAmountsPage_Template_p_dialog_visibleChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.showEditDialog, $event) || (ctx.showEditDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](56, ImportAdditionalAmountsPage_div_56_Template, 17, 9, "div", 40)(57, ImportAdditionalAmountsPage_ng_template_57_Template, 2, 1, "ng-template", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "p-dialog", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayListener"]("visibleChange", function ImportAdditionalAmountsPage_Template_p_dialog_visibleChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayBindingSet"](ctx.showJobEditDialog, $event) || (ctx.showJobEditDialog = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](59, ImportAdditionalAmountsPage_div_59_Template, 4, 1, "div", 42)(60, ImportAdditionalAmountsPage_ng_template_60_Template, 2, 1, "ng-template", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("label", ctx.selectedFile ? ctx.selectedFile.name : "\u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0644\u0641")("icon", ctx.selectedFile ? "pi pi-file-excel" : "pi pi-search");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx.selectedFile || ctx.uploading)("loading", ctx.uploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.activeJobId);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.jobSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.jobs)("lazy", true)("paginator", true)("rows", ctx.pageSize)("totalRecords", ctx.totalRecords)("loading", ctx.loadingJobs)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](41, _c1))("responsiveLayout", "scroll");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](42, _c2));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("visible", ctx.showDataDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("header", "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0631\u0642\u0645 " + (ctx.viewingJob == null ? null : ctx.viewingJob.id))("modal", true)("maximizable", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.viewingJob == null ? null : ctx.viewingJob.fileName);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx.jobDataTotalRecords);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("ngModel", ctx.jobDataSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", ctx.jobData)("lazy", true)("paginator", true)("rows", ctx.jobDataPageSize)("totalRecords", ctx.jobDataTotalRecords)("loading", ctx.loadingJobData)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](43, _c3))("responsiveLayout", "scroll");
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](44, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("visible", ctx.showEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.editingItem);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](45, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtwoWayProperty"]("visible", ctx.showJobEditDialog);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.editingJob);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, primeng_table__WEBPACK_IMPORTED_MODULE_2__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_2__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_23__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective, primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__.ProgressBarModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_4__.ProgressBar, primeng_tag__WEBPACK_IMPORTED_MODULE_5__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_5__.Tag, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.TooltipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_7__.Tooltip, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumberModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumber, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, primeng_datepicker__WEBPACK_IMPORTED_MODULE_11__.DatePickerModule, primeng_textarea__WEBPACK_IMPORTED_MODULE_12__.TextareaModule, _components_import_dashboard_import_dashboard_component__WEBPACK_IMPORTED_MODULE_15__.ImportDashboardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      encapsulation: 2
    });
  }
  return ImportAdditionalAmountsPage;
})();

/***/ })

}]);
//# sourceMappingURL=7700.js.map