"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[9978],{

/***/ 29978:
/*!************************************************************************!*\
  !*** ./src/app/features/managments/pages/logins-admin/logins-admin.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginsAdminComponent: () => (/* binding */ LoginsAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tooltip */ 80405);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_login_history_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/login-history.service */ 94974);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 17780);



















const _c0 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const _c1 = () => ["username", "email", "ipAddress", "browser"];
const _c2 = () => [10, 25, 50];
const _c3 = (a0, a1) => ({
  "pi-desktop": a0,
  "pi-mobile": a1
});
function LoginsAdminComponent_div_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\u0627\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "IP Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\u0627\u0644\u062C\u0647\u0627\u0632 / \u0627\u0644\u0645\u062A\u0635\u0641\u062D");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function LoginsAdminComponent_div_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "p-skeleton", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td")(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "p-skeleton", 18)(6, "p-skeleton", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td")(10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "p-skeleton", 22)(12, "p-skeleton", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "p-skeleton", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td")(16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "p-skeleton", 26)(18, "p-skeleton", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "p-skeleton", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function LoginsAdminComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 11)(1, "p-table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginsAdminComponent_div_11_ng_template_2_Template, 15, 0, "ng-template", 13)(3, LoginsAdminComponent_div_11_ng_template_3_Template, 21, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c0));
  }
}
function LoginsAdminComponent_p_table_12_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("input", function LoginsAdminComponent_p_table_12_ng_template_2_Template_input_input_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const dt_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](dt_r2.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 36)(5, "div", 25)(6, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\u0645\u0646:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function LoginsAdminComponent_p_table_12_ng_template_2_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.startDate, $event) || (ctx_r2.startDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function LoginsAdminComponent_p_table_12_ng_template_2_Template_input_change_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const dt_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.applyDateFilter(dt_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 25)(10, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\u0625\u0644\u0649:");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function LoginsAdminComponent_p_table_12_ng_template_2_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.endDate, $event) || (ctx_r2.endDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function LoginsAdminComponent_p_table_12_ng_template_2_Template_input_change_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const dt_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.applyDateFilter(dt_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function LoginsAdminComponent_p_table_12_ng_template_2_Template_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx_r2.selectedStatus, $event) || (ctx_r2.selectedStatus = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function LoginsAdminComponent_p_table_12_ng_template_2_Template_select_change_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const dt_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](dt_r2.filter(ctx_r2.selectedStatus, "status", "equals"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "\u0627\u0644\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\u0646\u062C\u062D");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "\u0641\u0634\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngValue", null);
  }
}
function LoginsAdminComponent_p_table_12_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "# ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "p-sortIcon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "p-sortIcon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\u0627\u0644\u0646\u0648\u0639 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "p-sortIcon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\u0627\u0644\u0648\u0642\u062A \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "p-sortIcon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "IP Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "p-sortIcon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "\u0627\u0644\u062C\u0647\u0627\u0632 / \u0627\u0644\u0645\u062A\u0635\u0641\u062D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "p-sortIcon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "\u0627\u0644\u062D\u0627\u0644\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](21, "p-sortIcon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function LoginsAdminComponent_p_table_12_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td")(2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td")(5, "div", 58)(6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "p-tag", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td")(13, "div", 58)(14, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td")(21, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "td")(25, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](26, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "p-tag", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const login_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("#", login_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](login_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](login_r4.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.getLoginTypeLabel(login_r4.loginType))("severity", ctx_r2.getLoginTypeSeverity(login_r4.loginType))("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](16, 16, login_r4.loginTime, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](19, 19, login_r4.loginTime, "hh:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", login_r4.ipAddress, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("pTooltip", login_r4.userAgent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](22, _c3, login_r4.os.includes("Windows") || login_r4.os.includes("Mac"), login_r4.os.includes("Android") || login_r4.os.includes("iOS")));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", login_r4.browser, " on ", login_r4.os);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.getStatusLabel(login_r4.status))("severity", ctx_r2.getSeverity(login_r4.status))("icon", login_r4.status === "success" ? "pi pi-check" : "pi pi-times");
  }
}
function LoginsAdminComponent_p_table_12_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 70)(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u062C\u0644\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0644\u0628\u062D\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function LoginsAdminComponent_p_table_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-table", 29, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LoginsAdminComponent_p_table_12_ng_template_2_Template, 20, 4, "ng-template", 30)(3, LoginsAdminComponent_p_table_12_ng_template_3_Template, 22, 0, "ng-template", 13)(4, LoginsAdminComponent_p_table_12_ng_template_4_Template, 31, 25, "ng-template", 14)(5, LoginsAdminComponent_p_table_12_ng_template_5_Template, 6, 0, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.logins)("rows", 10)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](7, _c1))("rowHover", true)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](8, _c2))("showCurrentPageReport", true);
  }
}
let LoginsAdminComponent = /*#__PURE__*/(() => {
  class LoginsAdminComponent {
    loginHistoryService;
    logins = [];
    loading = true;
    searchTerm = '';
    // Filters
    statuses = [{
      label: 'الكل',
      value: null
    }, {
      label: 'نجح',
      value: 'success'
    }, {
      label: 'فشل',
      value: 'failed'
    }];
    selectedStatus = null;
    // Date filters (HTML date input returns string in YYYY-MM-DD format)
    startDate = null;
    endDate = null;
    constructor(loginHistoryService) {
      this.loginHistoryService = loginHistoryService;
    }
    ngOnInit() {
      this.loadLogins();
    }
    loadLogins() {
      this.loading = true;
      // Fetch real login history from backend
      this.loginHistoryService.getLoginHistory().subscribe({
        next: history => {
          this.processLoginHistory(history);
          this.loading = false;
        },
        error: err => {
          console.error('Failed to fetch login history', err);
          this.logins = [];
          this.loading = false;
        }
      });
    }
    processLoginHistory(history) {
      this.logins = history.map(record => {
        // Parse user agent to extract browser and OS
        const ua = record.userAgent || '';
        let browser = 'Unknown';
        let os = 'Unknown';
        // Simple browser detection
        if (ua.includes('Chrome')) browser = 'Chrome';else if (ua.includes('Firefox')) browser = 'Firefox';else if (ua.includes('Safari')) browser = 'Safari';else if (ua.includes('Edge')) browser = 'Edge';
        // Simple OS detection
        if (ua.includes('Windows')) os = 'Windows';else if (ua.includes('Mac')) os = 'macOS';else if (ua.includes('Linux')) os = 'Linux';else if (ua.includes('Android')) os = 'Android';else if (ua.includes('iOS') || ua.includes('iPhone')) os = 'iOS';
        // Map role to loginType
        let type = 'employee';
        if (record.role) {
          const r = record.role.toLowerCase();
          if (r.includes('admin')) type = 'admin';else if (r.includes('client')) type = 'client';else if (r.includes('supervisor')) type = 'employee';else type = 'employee';
        }
        return {
          id: record.id,
          username: record.userName || 'مستخدم',
          email: record.email || '',
          loginType: type,
          loginTime: new Date(record.loginTime),
          ipAddress: record.ipAddress || 'N/A',
          status: 'success',
          userAgent: record.userAgent || '',
          browser: browser,
          os: os,
          country: 'Saudi Arabia'
        };
      }).sort((a, b) => b.loginTime.getTime() - a.loginTime.getTime());
    }
    getSeverity(status) {
      return status === 'success' ? 'success' : 'danger';
    }
    getStatusLabel(status) {
      return status === 'success' ? 'ناجح' : 'فشل';
    }
    getLoginTypeLabel(type) {
      const labels = {
        employee: 'موظف',
        client: 'عميل',
        public: 'عام',
        admin: 'مدير نظام'
      };
      return labels[type] || type;
    }
    getLoginTypeSeverity(type) {
      switch (type) {
        case 'admin':
          return 'danger';
        case 'employee':
          return 'info';
        case 'client':
          return 'warn';
        default:
          return 'secondary';
      }
    }
    exportToExcel() {
      // Mock export
      console.log('Exporting data...', this.logins);
    }
    applyDateFilter(dt) {
      // Convert string dates to Date objects for comparison
      const start = this.startDate ? new Date(this.startDate) : null;
      const end = this.endDate ? new Date(this.endDate) : null;
      if (start || end) {
        // Filter manually since PrimeNG doesn't have built-in date range filter
        const filtered = this.logins.filter(login => {
          const loginDate = new Date(login.loginTime);
          loginDate.setHours(0, 0, 0, 0); // Reset time for date-only comparison
          if (start && end) {
            return loginDate >= start && loginDate <= end;
          } else if (start) {
            return loginDate >= start;
          } else if (end) {
            return loginDate <= end;
          }
          return true;
        });
        dt.value = filtered;
      } else {
        // Reset to original data
        dt.value = this.logins;
      }
    }
    refresh() {
      this.loadLogins();
    }
    static ɵfac = function LoginsAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginsAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_login_history_service__WEBPACK_IMPORTED_MODULE_10__.LoginHistoryService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: LoginsAdminComponent,
      selectors: [["app-logins-admin"]],
      decls: 13,
      vars: 3,
      consts: [["dt", ""], [1, "page-container", "fade-in"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-3xl", "font-bold", "text-gray-900", "dark:text-white", "mb-2"], [1, "text-gray-500", "dark:text-gray-400"], [1, "flex", "gap-2"], ["pButton", "", "icon", "pi pi-refresh", "label", "\u062A\u062D\u062F\u064A\u062B", 1, "p-button-outlined", 3, "click", "loading"], ["pButton", "", "icon", "pi pi-file-excel", "label", "\u062A\u0635\u062F\u064A\u0631", 1, "p-button-success", 3, "click"], [1, "card", "p-0", "overflow-hidden", "shadow-lg", "border-none"], ["class", "border border-gray-100 dark:border-gray-800 rounded-b-2xl overflow-hidden", 4, "ngIf"], ["styleClass", "p-datatable-lg", "currentPageReportTemplate", "\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 \u0623\u0635\u0644 {totalRecords} \u0633\u062C\u0644", 3, "value", "rows", "paginator", "globalFilterFields", "rowHover", "rowsPerPageOptions", "showCurrentPageReport", 4, "ngIf"], [1, "border", "border-gray-100", "dark:border-gray-800", "rounded-b-2xl", "overflow-hidden"], ["styleClass", "p-datatable-lg", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "w-[80px]"], ["width", "2rem"], [1, "flex", "flex-col", "gap-2"], ["width", "8rem", "height", "1.2rem"], ["width", "10rem", "height", "0.8rem"], ["width", "4rem", "height", "1.5rem", "borderRadius", "1rem"], [1, "flex", "flex-col", "gap-1"], ["width", "6rem"], ["width", "4rem"], ["width", "7rem", "height", "1.5rem"], [1, "flex", "items-center", "gap-2"], ["shape", "circle", "size", "1.5rem"], ["width", "8rem"], ["width", "4rem", "height", "1.5rem"], ["styleClass", "p-datatable-lg", "currentPageReportTemplate", "\u0639\u0631\u0636 {first} \u0625\u0644\u0649 {last} \u0645\u0646 \u0623\u0635\u0644 {totalRecords} \u0633\u062C\u0644", 3, "value", "rows", "paginator", "globalFilterFields", "rowHover", "rowsPerPageOptions", "showCurrentPageReport"], ["pTemplate", "caption"], ["pTemplate", "emptymessage"], [1, "flex", "flex-wrap", "md:flex-row", "md:items-center", "md:justify-between", "gap-3", "p-4", "bg-gray-50", "dark:bg-gray-800/50"], [1, "p-input-icon-left", "w-full", "md:w-auto"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "\u0628\u062D\u062B \u0641\u064A \u0627\u0644\u0633\u062C\u0644\u0627\u062A...", 1, "w-full", "md:w-80", "p-inputtext-sm", 3, "input"], [1, "flex", "gap-2", "flex-wrap", "items-center"], [1, "text-sm", "font-medium", "text-gray-700", "dark:text-gray-300", "whitespace-nowrap"], ["type", "date", 1, "p-inputtext", "p-inputtext-sm", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-700", "rounded-md", "px-3", "py-2", "focus:ring-2", "focus:ring-blue-500", "outline-none", "text-gray-700", "dark:text-gray-200", 3, "ngModelChange", "change", "ngModel"], [1, "p-inputtext", "p-inputtext-sm", "w-full", "md:w-48", "bg-white", "dark:bg-gray-900", "border", "border-gray-300", "dark:border-gray-700", "rounded-md", "px-3", "py-2", "focus:ring-2", "focus:ring-blue-500", "outline-none", "text-gray-700", "dark:text-gray-200", "h-[42px]", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], ["value", "success"], ["value", "failed"], ["pSortableColumn", "id", 1, "w-[80px]"], ["field", "id"], ["pSortableColumn", "username"], ["field", "username"], ["pSortableColumn", "loginType"], ["field", "loginType"], ["pSortableColumn", "loginTime"], ["field", "loginTime"], ["pSortableColumn", "ipAddress"], ["field", "ipAddress"], ["pSortableColumn", "browser"], ["field", "browser"], ["pSortableColumn", "status"], ["field", "status"], [1, "text-gray-500", "font-mono", "text-sm"], [1, "flex", "flex-col"], [1, "font-bold", "text-gray-800", "dark:text-gray-200"], [1, "text-xs", "text-gray-400"], [3, "value", "severity", "rounded"], [1, "font-medium"], [1, "text-xs", "text-gray-500"], [1, "flex", "items-center", "gap-1", "font-mono", "text-sm", "bg-gray-100", "dark:bg-gray-800", "px-2", "py-1", "rounded", "w-fit"], [1, "pi", "pi-globe", "text-xs", "text-blue-500"], [1, "flex", "items-center", "gap-2", 3, "pTooltip"], [1, "pi", 3, "ngClass"], [1, "text-sm", "text-gray-600", "dark:text-gray-300"], [3, "value", "severity", "icon"], ["colspan", "7", 1, "text-center", "p-8"], [1, "flex", "flex-col", "items-center", "justify-center", "text-gray-500"], [1, "pi", "pi-search", "text-4xl", "mb-3"], [1, "text-lg"]],
      template: function LoginsAdminComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0646\u0638\u0627\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u0645\u0631\u0627\u0642\u0628\u0629 \u0648\u062A\u062A\u0628\u0639 \u062C\u0645\u064A\u0639 \u0645\u062D\u0627\u0648\u0644\u0627\u062A \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u0644\u0646\u0638\u0627\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginsAdminComponent_Template_button_click_8_listener() {
            return ctx.refresh();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginsAdminComponent_Template_button_click_9_listener() {
            return ctx.exportToExcel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, LoginsAdminComponent_div_11_Template, 4, 2, "div", 9)(12, LoginsAdminComponent_p_table_12_Template, 6, 9, "p-table", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_1__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_1__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_11__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_1__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_1__.SortIcon, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_3__.InputText, primeng_tag__WEBPACK_IMPORTED_MODULE_4__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_4__.Tag, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.TooltipModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_6__.Skeleton, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["\n\n.fade-in[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fadeIn 0.4s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    from {\n        opacity: 0;\n        transform: translateY(10px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n\n\n[_nghost-%COMP%]     .p-datatable {\n    border-radius: 12px;\n    overflow: hidden;\n}\n\n[_nghost-%COMP%]     .p-datatable .p-datatable-header {\n    background: transparent;\n    border: none;\n}\n\n[_nghost-%COMP%]     .p-datatable .p-datatable-thead>tr>th {\n    background: var(--surface-card);\n    color: var(--text-color-secondary);\n    border-bottom: 1px solid var(--surface-border);\n    font-weight: 600;\n    padding: 1rem;\n}\n\n[_nghost-%COMP%]     .p-datatable .p-datatable-tbody>tr>td {\n    padding: 1rem;\n    border-bottom: 1px solid var(--surface-border);\n}\n\n[_nghost-%COMP%]     .p-paginator {\n    background: transparent;\n    border: none;\n    padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbWFuYWdtZW50cy9wYWdlcy9sb2dpbnMtYWRtaW4vbG9naW5zLWFkbWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFDdEI7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGtDQUFrQztJQUNsQyw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0FBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiLyogQ3VzdG9tIEFuaW1hdGlvbnMgKi9cclxuLmZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBQcmVtaXVtIFRhYmxlIFR3ZWFrcyAqL1xyXG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucC1kYXRhdGFibGUgLnAtZGF0YXRhYmxlLXRoZWFkPnRyPnRoIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnAtZGF0YXRhYmxlIC5wLWRhdGF0YWJsZS10Ym9keT50cj50ZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wLXBhZ2luYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return LoginsAdminComponent;
})();

/***/ }),

/***/ 94974:
/*!***************************************************!*\
  !*** ./src/app/services/login-history.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginHistoryService: () => (/* binding */ LoginHistoryService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 63855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);




let LoginHistoryService = /*#__PURE__*/(() => {
  class LoginHistoryService {
    http;
    apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl}/Users/login-history`;
    constructor(http) {
      this.http = http;
    }
    getHeaders() {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      });
    }
    getLoginHistory() {
      return this.http.get(this.apiUrl, {
        headers: this.getHeaders()
      });
    }
    static ɵfac = function LoginHistoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginHistoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LoginHistoryService,
      factory: LoginHistoryService.ɵfac,
      providedIn: 'root'
    });
  }
  return LoginHistoryService;
})();

/***/ })

}]);
//# sourceMappingURL=9978.js.map