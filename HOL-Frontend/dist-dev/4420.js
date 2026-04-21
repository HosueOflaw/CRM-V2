"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4420],{

/***/ 74420:
/*!****************************************************************************!*\
  !*** ./src/app/features/managments/pages/my-permissions/my-permissions.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyPermissionsPage: () => (/* binding */ MyPermissionsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/badge */ 72773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _core_services_permission_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../core/services/permission.service */ 80871);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var _services_signalr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/signalr */ 87133);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 17780);





















const _c0 = () => [1, 2, 3];
function MyPermissionsPage_div_9_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "p-skeleton", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "p-skeleton", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "p-skeleton", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "p-skeleton", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "p-skeleton", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "p-skeleton", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function MyPermissionsPage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "p-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "p-skeleton", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "p-skeleton", 15)(6, "p-skeleton", 16)(7, "p-skeleton", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "p-skeleton", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "p-skeleton", 18)(12, "p-skeleton", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "p-skeleton", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "p-card", 20)(15, "p-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, MyPermissionsPage_div_9_ng_template_16_Template, 13, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](1, _c0));
  }
}
function MyPermissionsPage_ng_container_10_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const dep_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r1.getDeptLabel(dep_r1), " ");
  }
}
function MyPermissionsPage_ng_container_10_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MyPermissionsPage_ng_container_10_ng_container_4_span_1_Template, 3, 1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.accessibleDepartments);
  }
}
function MyPermissionsPage_ng_container_10_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0642\u0633\u0627\u0645 \u0625\u0636\u0627\u0641\u064A\u0629 \u0645\u0641\u0648\u0636\u0629 \u0644\u0643 \u062D\u0627\u0644\u064A\u0627\u064B");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function MyPermissionsPage_ng_container_10_ng_container_14_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", feature_r3, " ");
  }
}
function MyPermissionsPage_ng_container_10_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, MyPermissionsPage_ng_container_10_ng_container_14_span_1_Template, 3, 1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r1.accessibleFeatures);
  }
}
function MyPermissionsPage_ng_container_10_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\u0644\u0645 \u064A\u062A\u0645 \u062A\u0641\u0648\u064A\u0636 \u0645\u064A\u0632\u0627\u062A \u0645\u062D\u062F\u062F\u0629 \u0644\u0643 \u062D\u0627\u0644\u064A\u0627\u064B");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function MyPermissionsPage_ng_container_10_ng_container_17_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\u0627\u0644\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\u0627\u0644\u0633\u0628\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "\u0645\u0644\u0627\u062D\u0638\u0629 \u0627\u0644\u0623\u062F\u0645\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function MyPermissionsPage_ng_container_10_ng_container_17_ng_template_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const req_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", req_r4.adminComment, " ");
  }
}
function MyPermissionsPage_ng_container_10_ng_container_17_ng_template_6_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function MyPermissionsPage_ng_container_10_ng_container_17_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr", 47)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "p-tag", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td")(4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td")(7, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "p-tag", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, MyPermissionsPage_ng_container_10_ng_container_17_ng_template_6_div_12_Template, 2, 1, "div", 52)(13, MyPermissionsPage_ng_container_10_ng_container_17_ng_template_6_span_13_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const req_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("severity", req_r4.requestType === "Department" ? "info" : "warn")("value", req_r4.requestType === "Department" ? "\u062F\u062E\u0648\u0644 \u0642\u0633\u0645" : "\u0635\u0644\u0627\u062D\u064A\u0629 \u0645\u064A\u0632\u0629")("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", req_r4.requestedValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("pTooltip", req_r4.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", req_r4.reason, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinterpolate1"]("pi ", ctx_r1.getStatusIcon(req_r4.status)))("severity", ctx_r1.getStatusSeverity(req_r4.status))("value", ctx_r1.getStatusLabel(req_r4.status))("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", req_r4.adminComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !req_r4.adminComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](16, 14, req_r4.createdAt, "medium"), " ");
  }
}
function MyPermissionsPage_ng_container_10_ng_container_17_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\u0644\u0645 \u062A\u0642\u0645 \u0628\u0625\u0631\u0633\u0627\u0644 \u0623\u064A \u0637\u0644\u0628\u0627\u062A \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0628\u0639\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}
function MyPermissionsPage_ng_container_10_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "h3", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "\u0633\u062C\u0644 \u0627\u0644\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u0627\u0628\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p-card", 20)(4, "p-table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, MyPermissionsPage_ng_container_10_ng_container_17_ng_template_5_Template, 13, 0, "ng-template", 44)(6, MyPermissionsPage_ng_container_10_ng_container_17_ng_template_6_Template, 17, 17, "ng-template", 22)(7, MyPermissionsPage_ng_container_10_ng_container_17_ng_template_7_Template, 5, 0, "ng-template", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r1.requests)("rowHover", true)("responsiveLayout", "scroll");
  }
}
function MyPermissionsPage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 11)(2, "p-card", 29)(3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, MyPermissionsPage_ng_container_10_ng_container_4_Template, 2, 1, "ng-container", 30)(5, MyPermissionsPage_ng_container_10_ng_template_5_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, " \u0642\u0633\u0645\u0643 \u0627\u0644\u0623\u0633\u0627\u0633\u064A: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "p-card", 34)(13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, MyPermissionsPage_ng_container_10_ng_container_14_Template, 2, 1, "ng-container", 30)(15, MyPermissionsPage_ng_container_10_ng_template_15_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](17, MyPermissionsPage_ng_container_10_ng_container_17_Template, 8, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const noDeps_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](6);
    const noFeatures_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](16);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.accessibleDepartments.length > 0)("ngIfElse", noDeps_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.getDeptLabel(ctx_r1.currentUser == null ? null : ctx_r1.currentUser.department));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.accessibleFeatures.length > 0)("ngIfElse", noFeatures_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.isBasicEmployee);
  }
}
let MyPermissionsPage = /*#__PURE__*/(() => {
  class MyPermissionsPage {
    permissionService;
    authService;
    signalr;
    requests = [];
    loading = false;
    currentUser = null;
    accessibleDepartments = [];
    accessibleFeatures = [];
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    constructor(permissionService, authService, signalr) {
      this.permissionService = permissionService;
      this.authService = authService;
      this.signalr = signalr;
    }
    ngOnInit() {
      this.loadAll();
      // Listen for real-time updates
      this.signalr.message$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(msg => {
        const types = ['permission_request_processed', 'new_permission_request', 'permissions_delegated', 'permissions_updated'];
        if (types.includes(msg.type)) {
          this.loadAll();
        }
      });
      this.authService.userUpdated$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(() => {
        this.refreshLocalData();
      });
    }
    loadAll() {
      this.refreshLocalData();
      this.loadRequests();
    }
    refreshLocalData() {
      this.currentUser = this.authService.getUser();
      if (this.currentUser) {
        this.accessibleDepartments = this.currentUser.accessibleDepartments || [];
        this.accessibleFeatures = this.currentUser.accessibleFeatures || [];
      }
    }
    get isBasicEmployee() {
      return (this.currentUser?.role || '').toLowerCase() === 'employee';
    }
    ngOnDestroy() {
      this.destroy$?.next();
      this.destroy$?.complete();
    }
    loadRequests() {
      this.loading = true;
      this.authService.refreshCurrentUser().subscribe(() => {
        this.permissionService.getMyRequests().subscribe({
          next: data => {
            this.requests = data;
            this.loading = false;
          },
          error: () => this.loading = false
        });
      });
    }
    getDeptLabel(dep) {
      const labels = {
        'negotiations': 'المفاوضات',
        'execution': 'التنفيذ',
        'finance': 'المالية',
        'discussions': 'المداولات',
        'reports': 'التقارير',
        'car-management': 'السيارات',
        'secretariat': 'السكرتارية',
        'management': 'الشؤون الإدارية'
      };
      return labels[(dep || '').toLowerCase().trim()] || dep;
    }
    getStatusSeverity(status) {
      switch (status) {
        case 'Approved':
          return 'success';
        case 'Pending':
          return 'info';
        case 'Rejected':
          return 'danger';
        default:
          return 'secondary';
      }
    }
    getStatusLabel(status) {
      switch (status) {
        case 'Approved':
          return 'تمت الموافقة';
        case 'Pending':
          return 'قيد المراجعة';
        case 'Rejected':
          return 'تم الرفض';
        default:
          return status;
      }
    }
    getStatusIcon(status) {
      switch (status) {
        case 'Approved':
          return 'pi-check-circle';
        case 'Pending':
          return 'pi-clock';
        case 'Rejected':
          return 'pi-times-circle';
        default:
          return 'pi-question-circle';
      }
    }
    static ɵfac = function MyPermissionsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MyPermissionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_permission_service__WEBPACK_IMPORTED_MODULE_11__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_12__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_signalr__WEBPACK_IMPORTED_MODULE_13__.Signalr));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: MyPermissionsPage,
      selectors: [["app-my-permissions"]],
      decls: 11,
      vars: 4,
      consts: [["noDeps", ""], ["noFeatures", ""], [1, "animate-fadein", "p-4", "md:p-6"], [1, "flex", "flex-col", "md:flex-row", "justify-between", "items-start", "md:items-center", "gap-4", "mb-6"], [1, "text-3xl", "font-black", "text-gray-900", "dark:text-white", "flex", "items-center", "gap-3"], [1, "pi", "pi-shield", "text-primary", "text-3xl"], [1, "text-gray-500", "mt-1"], ["icon", "pi pi-refresh", "label", "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A", "severity", "secondary", 3, "click", "loading", "outlined"], ["class", "animate-pulse", 4, "ngIf"], [4, "ngIf"], [1, "animate-pulse"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6", "mb-8"], ["styleClass", "h-full border-0 shadow-sm overflow-hidden"], ["width", "10rem", "height", "1.5rem", "styleClass", "mb-4"], [1, "flex", "flex-wrap", "gap-2", "py-2"], ["width", "6rem", "height", "2rem", "borderRadius", "1rem"], ["width", "8rem", "height", "2rem", "borderRadius", "1rem"], ["width", "5rem", "height", "2rem", "borderRadius", "1rem"], ["width", "7rem", "height", "2rem", "borderRadius", "1rem"], ["width", "12rem", "height", "2rem", "styleClass", "mb-4"], ["styleClass", "shadow-sm border-0 overflow-hidden"], ["styleClass", "p-datatable-sm", 3, "value"], ["pTemplate", "body"], ["width", "6rem", "height", "1.5rem"], ["width", "5rem"], ["width", "10rem"], ["width", "4rem", "height", "1.5rem", "borderRadius", "1rem"], ["width", "8rem"], ["width", "6rem"], ["styleClass", "h-full border-0 shadow-sm overflow-hidden", "header", "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0644\u064A \uD83C\uDFD8\uFE0F"], [4, "ngIf", "ngIfElse"], [1, "mt-4", "p-3", "bg-gray-50/50", "dark:bg-gray-800/50", "rounded-lg", "text-xs", "text-gray-500", "border", "border-dashed", "border-gray-200", "dark:border-gray-700"], [1, "pi", "pi-info-circle", "mr-1"], [1, "font-bold", "text-gray-700", "dark:text-gray-300"], ["styleClass", "h-full border-0 shadow-sm overflow-hidden", "header", "\u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u0641\u0648\u0636\u0629 \u0644\u064A \uD83D\uDEE1\uFE0F"], ["class", "px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-bold border border-blue-100 dark:border-blue-800/30 flex items-center gap-2", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1.5", "bg-blue-50", "dark:bg-blue-900/30", "text-blue-700", "dark:text-blue-300", "rounded-xl", "text-sm", "font-bold", "border", "border-blue-100", "dark:border-blue-800/30", "flex", "items-center", "gap-2"], [1, "pi", "pi-building"], [1, "text-gray-400", "italic", "text-sm"], ["class", "px-3 py-1.5 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-xl text-sm font-bold border border-orange-100 dark:border-orange-800/30 flex items-center gap-2", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1.5", "bg-orange-50", "dark:bg-orange-900/30", "text-orange-700", "dark:text-orange-300", "rounded-xl", "text-sm", "font-bold", "border", "border-orange-100", "dark:border-orange-800/30", "flex", "items-center", "gap-2"], [1, "pi", "pi-star-fill"], [1, "text-xl", "font-bold", "text-gray-800", "dark:text-white", "mb-4"], ["styleClass", "p-datatable-sm", 3, "value", "rowHover", "responsiveLayout"], ["pTemplate", "header"], ["pTemplate", "emptymessage"], [1, "bg-gray-50/50", "dark:bg-gray-800/50"], [1, "transition-colors", "hover:bg-gray-50/50", "dark:hover:bg-gray-800/50"], [3, "severity", "value", "rounded"], [1, "font-mono", "bg-gray-100", "dark:bg-gray-700", "px-2", "py-1", "rounded", "text-sm", "text-primary"], [1, "text-sm", "text-gray-600", "dark:text-gray-400", "truncate", "max-w-[200px]", "block", 3, "pTooltip"], [3, "severity", "value", "rounded", "icon"], ["class", "text-xs italic text-orange-600 dark:text-orange-400 bg-orange-50/50 dark:bg-orange-900/20 p-2 rounded-lg border border-orange-100 dark:border-orange-900/30", 4, "ngIf"], ["class", "text-gray-300", 4, "ngIf"], [1, "text-xs", "text-gray-500", "font-medium"], [1, "text-xs", "italic", "text-orange-600", "dark:text-orange-400", "bg-orange-50/50", "dark:bg-orange-900/20", "p-2", "rounded-lg", "border", "border-orange-100", "dark:border-orange-900/30"], [1, "text-gray-300"], ["colspan", "6", 1, "text-center", "py-12"], [1, "pi", "pi-inbox", "text-4xl", "text-gray-200", "mb-3", "block"], [1, "text-gray-400", "font-medium"]],
      template: function MyPermissionsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, " \u0635\u0644\u0627\u062D\u064A\u0627\u062A\u064A \u0648\u0627\u0644\u0648\u0635\u0648\u0644 \u0627\u0644\u062E\u0627\u0635 \u0628\u064A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "\u0639\u0631\u0636 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0648\u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629 \u0644\u0643 \u0648\u0645\u062A\u0627\u0628\u0639\u0629 \u0637\u0644\u0628\u0627\u062A\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p-button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function MyPermissionsPage_Template_p_button_click_8_listener() {
            return ctx.loadAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, MyPermissionsPage_div_9_Template, 17, 2, "div", 8)(10, MyPermissionsPage_ng_container_10_Template, 18, 6, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("loading", ctx.loading)("outlined", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_1__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_1__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, primeng_tag__WEBPACK_IMPORTED_MODULE_2__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_2__.Tag, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_card__WEBPACK_IMPORTED_MODULE_4__.CardModule, primeng_card__WEBPACK_IMPORTED_MODULE_4__.Card, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, primeng_badge__WEBPACK_IMPORTED_MODULE_9__.BadgeModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      encapsulation: 2
    });
  }
  return MyPermissionsPage;
})();

/***/ })

}]);
//# sourceMappingURL=4420.js.map