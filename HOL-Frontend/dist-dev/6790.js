"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[6790],{

/***/ 76790:
/*!*********************************************************************!*\
  !*** ./src/app/features/reports/pages/daily-breaks/daily-breaks.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DailyBreaksComponent: () => (/* binding */ DailyBreaksComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/datepicker */ 29786);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_break_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/break.service */ 25873);
/* harmony import */ var _shared_services_prime_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/prime-toast.service */ 58571);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 17780);























const _c0 = () => [1, 2, 3];
const _c1 = () => [1, 2, 3, 4, 5];
function DailyBreaksComponent_p_card_12_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "p-skeleton", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "p-skeleton", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "p-skeleton", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DailyBreaksComponent_p_card_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "p-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DailyBreaksComponent_p_card_12_div_1_ng_template_2_Template, 11, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c0));
  }
}
function DailyBreaksComponent_p_card_12_p_table_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0627\u0644\u0642\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u0648\u0642\u062A \u0627\u0644\u0628\u062F\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\u0627\u0644\u0645\u062F\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DailyBreaksComponent_p_card_12_p_table_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "p-tag", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getReportVal(item_r1, "fullName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getDeptLabel(ctx_r1.getReportVal(item_r1, "department")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](7, 6, ctx_r1.getReportVal(item_r1, "startTime"), "HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.formatMinutes(ctx_r1.getReportVal(item_r1, "currentDuration")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("severity", ctx_r1.getReportVal(item_r1, "currentDuration") > 60 ? "danger" : "success")("value", ctx_r1.getReportVal(item_r1, "currentDuration") > 60 ? "\u0645\u062A\u0623\u062E\u0631" : "\u0641\u064A \u0627\u0644\u0631\u0627\u062D\u0629");
  }
}
function DailyBreaksComponent_p_card_12_p_table_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0648\u0638\u0641\u0648\u0646 \u0641\u064A \u0641\u062A\u0631\u0629 \u0631\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DailyBreaksComponent_p_card_12_p_table_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DailyBreaksComponent_p_card_12_p_table_2_ng_template_1_Template, 11, 0, "ng-template", 22)(2, DailyBreaksComponent_p_card_12_p_table_2_ng_template_2_Template, 12, 9, "ng-template", 17)(3, DailyBreaksComponent_p_card_12_p_table_2_ng_template_3_Template, 3, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r1.activeBreaks);
  }
}
function DailyBreaksComponent_p_card_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DailyBreaksComponent_p_card_12_div_1_Template, 3, 2, "div", 10)(2, DailyBreaksComponent_p_card_12_p_table_2_Template, 4, 1, "p-table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.loadingActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.loadingActive);
  }
}
function DailyBreaksComponent_div_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "p-skeleton", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "p-skeleton", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DailyBreaksComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 15)(1, "p-table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DailyBreaksComponent_div_15_ng_template_2_Template, 15, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c1));
  }
}
function DailyBreaksComponent_p_table_16_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0627\u0644\u0642\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u0627\u0644\u0628\u062F\u0627\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\u0627\u0644\u0646\u0647\u0627\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0633\u062A\u0647\u0644\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\u0648\u0642\u062A \u0627\u0644\u062A\u0623\u062E\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\u0627\u0644\u0631\u0635\u064A\u062F \u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DailyBreaksComponent_p_table_16_ng_template_2_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.formatMinutes(ctx_r1.getLate(report_r3)), " ");
  }
}
function DailyBreaksComponent_p_table_16_ng_template_2_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DailyBreaksComponent_p_table_16_ng_template_2_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.formatMinutes(ctx_r1.getUnused(report_r3)), " ");
  }
}
function DailyBreaksComponent_p_table_16_ng_template_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
}
function DailyBreaksComponent_p_table_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 24)(12, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, DailyBreaksComponent_p_table_16_ng_template_2_span_15_Template, 2, 1, "span", 31)(16, DailyBreaksComponent_p_table_16_ng_template_2_span_16_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, DailyBreaksComponent_p_table_16_ng_template_2_span_18_Template, 2, 1, "span", 33)(19, DailyBreaksComponent_p_table_16_ng_template_2_span_19_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const report_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getReportVal(report_r3, "fullName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getDeptLabel(ctx_r1.getReportVal(report_r3, "department")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](7, 11, ctx_r1.getReportVal(report_r3, "startTime"), "HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.getReportVal(report_r3, "endTime") ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](10, 14, ctx_r1.getReportVal(report_r3, "endTime"), "HH:mm:ss") : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("text-red-500", ctx_r1.getConsumed(report_r3) > 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.formatMinutes(ctx_r1.getConsumed(report_r3)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.getLate(report_r3) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.getLate(report_r3) <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.getReportVal(report_r3, "endTime") && ctx_r1.getUnused(report_r3) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.getReportVal(report_r3, "endTime") || ctx_r1.getUnused(report_r3) <= 0);
  }
}
function DailyBreaksComponent_p_table_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0647\u0630\u0627 \u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function DailyBreaksComponent_p_table_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DailyBreaksComponent_p_table_16_ng_template_1_Template, 15, 0, "ng-template", 22)(2, DailyBreaksComponent_p_table_16_ng_template_2_Template, 20, 17, "ng-template", 17)(3, DailyBreaksComponent_p_table_16_ng_template_3_Template, 3, 0, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r1.dailyReports)("paginator", true)("rows", 10);
  }
}
let DailyBreaksComponent = /*#__PURE__*/(() => {
  class DailyBreaksComponent {
    breakService;
    toast;
    authService;
    activeBreaks = [];
    dailyReports = [];
    loadingActive = false;
    loadingDaily = false;
    selectedDate = new Date();
    departments = [{
      label: 'المفاوضات',
      value: 'negotiations'
    }, {
      label: 'السكرتارية',
      value: 'secretariat'
    }, {
      label: 'التنفيذ',
      value: 'execution'
    }, {
      label: 'الإدارة المالية',
      value: 'finance'
    }, {
      label: 'المداولات',
      value: 'discussions'
    }, {
      label: 'التقارير',
      value: 'reports'
    }, {
      label: 'السيارات',
      value: 'car-management'
    }, {
      label: 'شؤون إدارية',
      value: 'management'
    }];
    constructor(breakService, toast, authService) {
      this.breakService = breakService;
      this.toast = toast;
      this.authService = authService;
    }
    ngOnInit() {
      this.loadData();
    }
    onDateChange() {
      this.loadData();
    }
    isToday(date) {
      const today = new Date();
      return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    }
    getDeptLabel(value) {
      if (value === null || value === undefined || value === 0 || value === '0') return '-';
      const dept = this.departments.find(d => d.value === value);
      return dept ? dept.label : value;
    }
    formatMinutes(minutes) {
      const mins = Number(minutes);
      if (isNaN(mins) || mins <= 0) return '0 ثانية';
      const totalSeconds = Math.round(mins * 60);
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor(totalSeconds % 3600 / 60);
      const s = totalSeconds % 60;
      let result = '';
      if (h > 0) result += `${h} ساعة `;
      if (m > 0) {
        if (result) result += 'و ';
        result += `${m} دقيقة `;
      }
      if (s > 0 && h === 0) {
        if (result) result += 'و ';
        result += `${s} ثانية`;
      }
      return result.trim() || '0 دقيقة';
    }
    getConsumed(report) {
      // Priority: New Backend field -> Old Backend field -> Manual Calculation
      const val = this.getReportVal(report, 'durationMinutes') || this.getReportVal(report, 'totalMinutes');
      const total = Number(val);
      if (total > 0) return total;
      // Fallback to calculation if total is 0 but we have times
      const start = this.getReportVal(report, 'startTime');
      const end = this.getReportVal(report, 'endTime');
      if (start && end && start !== 0 && end !== 0) {
        const diff = (new Date(end).getTime() - new Date(start).getTime()) / 60000;
        return diff > 0 ? diff : 0;
      }
      return 0;
    }
    getLate(report) {
      // Priority: Field from backend -> Manual calculation
      const late = Number(this.getReportVal(report, 'lateMinutes'));
      if (late > 0) return late;
      const consumed = this.getConsumed(report);
      return consumed > 60 ? consumed - 60 : 0;
    }
    getUnused(report) {
      // Priority: Specific "unused" field from backend -> Manual balance
      const unused = this.getReportVal(report, 'unusedMinutes');
      if (unused !== null && unused !== undefined && Number(unused) > 0) return Number(unused);
      const consumed = this.getConsumed(report);
      return consumed > 0 && consumed < 60 ? 60 - consumed : 0;
    }
    getReportVal(report, field) {
      if (!report) return null;
      const pascalField = field.charAt(0).toUpperCase() + field.slice(1);
      const lowercaseField = field.toLowerCase();
      const val = report[field] !== undefined ? report[field] : report[pascalField] !== undefined ? report[pascalField] : report[lowercaseField];
      return val !== undefined && val !== null ? val : null;
    }
    loadData() {
      this.toast.info('جاري تحديث البيانات...', 'تنبيه');
      if (this.isToday(this.selectedDate)) {
        this.loadActive();
      } else {
        this.activeBreaks = [];
      }
      this.loadDaily();
    }
    loadActive() {
      this.loadingActive = true;
      this.breakService.getActiveBreaks().subscribe({
        next: data => {
          if (this.authService.isSupervisor()) {
            const myDept = (this.authService.getUserDepartment() || '').toLowerCase().trim();
            const depAliases = {
              'negotiations': 'negotiations',
              'المفاوضات': 'negotiations',
              'execution': 'execution',
              'التنفيذ': 'execution',
              'finance': 'finance',
              'المالية': 'finance',
              'الإدارة المالية': 'finance',
              'discussions': 'discussions',
              'المداولات': 'discussions',
              'reports': 'reports',
              'التقارير': 'reports',
              'report': 'reports',
              'car-management': 'car-management',
              'السيارات': 'car-management',
              'secretariat': 'secretariat',
              'السكرتارية': 'secretariat',
              'management': 'management',
              'الشؤون الإدارية': 'management',
              'managment': 'management'
            };
            const normMyDept = depAliases[myDept] || myDept;
            this.activeBreaks = data.filter(b => {
              const bDep = (b.department || '').toLowerCase().trim();
              const normBDep = depAliases[bDep] || bDep;
              return normBDep === normMyDept;
            });
          } else {
            this.activeBreaks = data;
          }
          this.loadingActive = false;
        },
        error: () => this.loadingActive = false
      });
    }
    loadDaily() {
      this.loadingDaily = true;
      // Format date in local timezone YYYY-MM-DD
      const year = this.selectedDate.getFullYear();
      const month = String(this.selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(this.selectedDate.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;
      this.breakService.getDailyReport(dateStr).subscribe({
        next: data => {
          if (this.authService.isSupervisor()) {
            const myDept = (this.authService.getUserDepartment() || '').toLowerCase().trim();
            const depAliases = {
              'negotiations': 'negotiations',
              'المفاوضات': 'negotiations',
              'execution': 'execution',
              'التنفيذ': 'execution',
              'finance': 'finance',
              'المالية': 'finance',
              'الإدارة المالية': 'finance',
              'discussions': 'discussions',
              'المداولات': 'discussions',
              'reports': 'reports',
              'التقارير': 'reports',
              'report': 'reports',
              'car-management': 'car-management',
              'السيارات': 'car-management',
              'secretariat': 'secretariat',
              'السكرتارية': 'secretariat',
              'management': 'management',
              'الشؤون الإدارية': 'management',
              'managment': 'management'
            };
            const normMyDept = depAliases[myDept] || myDept;
            this.dailyReports = data.filter(r => {
              const rDep = (r.department || '').toLowerCase().trim();
              const normRDep = depAliases[rDep] || rDep;
              return normRDep === normMyDept;
            });
          } else {
            this.dailyReports = data;
          }
          this.loadingDaily = false;
          if (this.dailyReports.length === 0) {
            this.toast.info('لا توجد بيانات مسجلة لهذا التاريخ', 'تنبيه');
          } else {
            this.toast.success(`تم تحميل ${this.dailyReports.length} سجل بنجاح`, 'تم التحديث');
          }
        },
        error: err => {
          this.loadingDaily = false;
          console.error('Error fetching reports:', err);
          this.toast.error('حدث خطأ أثناء جلب البيانات من السيرفر', 'خطأ');
        }
      });
    }
    static ɵfac = function DailyBreaksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DailyBreaksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_break_service__WEBPACK_IMPORTED_MODULE_10__.BreakService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_prime_toast_service__WEBPACK_IMPORTED_MODULE_11__.PrimeToastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_12__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: DailyBreaksComponent,
      selectors: [["app-daily-breaks"]],
      decls: 18,
      vars: 10,
      consts: [["dir", "rtl", 1, "p-6"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-primary"], [1, "text-secondary"], [1, "flex", "items-center", "gap-3"], [1, "font-bold"], ["dateFormat", "yy-mm-dd", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0627\u0631\u064A\u062E", 1, "custom-pager", 3, "ngModelChange", "onSelect", "ngModel", "showIcon"], ["pButton", "", "icon", "pi pi-refresh", "title", "\u062A\u062D\u062F\u064A\u062B", 3, "click", "loading"], ["header", "\u0645\u0648\u0638\u0641\u0648\u0646 \u0641\u064A \u0641\u062A\u0631\u0629 \u0631\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B", "class", "mb-6 shadow-sm", 4, "ngIf"], [1, "shadow-sm", 3, "header"], ["class", "p-4", 4, "ngIf"], ["styleClass", "p-datatable-gridlines", 3, "value", "paginator", "rows", 4, "ngIf"], ["position", "top-center"], ["header", "\u0645\u0648\u0638\u0641\u0648\u0646 \u0641\u064A \u0641\u062A\u0631\u0629 \u0631\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B", 1, "mb-6", "shadow-sm"], ["styleClass", "p-datatable-striped", 3, "value", 4, "ngIf"], [1, "p-4"], ["styleClass", "p-datatable-striped", 3, "value"], ["pTemplate", "body"], ["width", "8rem"], ["width", "6rem"], ["width", "5rem"], ["width", "4rem", "height", "1.5rem", "borderRadius", "1rem"], ["pTemplate", "header"], ["pTemplate", "emptymessage"], [1, "text-center"], [3, "severity", "value"], ["colspan", "5", 1, "text-center", "p-4"], ["styleClass", "p-datatable-gridlines", 3, "value"], ["width", "10rem"], ["styleClass", "p-datatable-gridlines", 3, "value", "paginator", "rows"], [1, "text-center", "font-bold", 2, "min-width", "150px"], ["class", "text-red-500 font-bold", 4, "ngIf"], [4, "ngIf"], ["class", "text-green-700 font-bold", 4, "ngIf"], [1, "text-red-500", "font-bold"], [1, "text-green-700", "font-bold"], ["colspan", "7", 1, "text-center", "p-4"]],
      template: function DailyBreaksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u062A\u0642\u0631\u064A\u0631 \u0633\u0627\u0639\u0629 \u0627\u0644\u0631\u0627\u062D\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u0645\u062A\u0627\u0628\u0639\u0629 \u062F\u0642\u064A\u0642\u0629 \u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u062D\u0627\u0644\u0627\u062A \u0627\u0644\u062A\u0623\u062E\u064A\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4)(8, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "\u062A\u0635\u0641\u064A\u0629 \u0628\u0627\u0644\u062A\u0627\u0631\u064A\u062E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "p-datepicker", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function DailyBreaksComponent_Template_p_datepicker_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.selectedDate, $event) || (ctx.selectedDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onSelect", function DailyBreaksComponent_Template_p_datepicker_onSelect_10_listener() {
            return ctx.onDateChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DailyBreaksComponent_Template_button_click_11_listener() {
            return ctx.loadData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, DailyBreaksComponent_p_card_12_Template, 3, 2, "p-card", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p-card", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "date");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, DailyBreaksComponent_div_15_Template, 3, 2, "div", 10)(16, DailyBreaksComponent_p_table_16_Template, 4, 3, "p-table", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "p-toast", 12);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showIcon", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.loadingDaily);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isToday(ctx.selectedDate));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("header", "\u0633\u062C\u0644 \u0627\u0644\u0627\u0633\u062A\u0631\u0627\u062D\u0627\u062A \u0644\u0644\u064A\u0648\u0645: " + _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 7, ctx.selectedDate, "yyyy-MM-dd"));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loadingDaily);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loadingDaily);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_1__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_1__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_card__WEBPACK_IMPORTED_MODULE_2__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_2__.Card, primeng_tag__WEBPACK_IMPORTED_MODULE_3__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_3__.Tag, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.Toast, primeng_datepicker__WEBPACK_IMPORTED_MODULE_5__.DatePickerModule, primeng_datepicker__WEBPACK_IMPORTED_MODULE_5__.DatePicker, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["[_nghost-%COMP%]     .p-card-title {\n  color: var(--primary-color);\n  font-size: 1.25rem;\n}\n\n.custom-pager[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVwb3J0cy9wYWdlcy9kYWlseS1icmVha3MvZGFpbHktYnJlYWtzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUVJO0VBQ0UsY0FBQTtBQUNOIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgOmhvc3QgOjpuZy1kZWVwIC5wLWNhcmQtdGl0bGUge1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgICAuY3VzdG9tLXBhZ2VyIHtcbiAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return DailyBreaksComponent;
})();

/***/ })

}]);
//# sourceMappingURL=6790.js.map