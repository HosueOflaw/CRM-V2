"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[9390],{

/***/ 69390:
/*!*********************************************************************!*\
  !*** ./src/app/features/secretariat/pages/procedures/procedures.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Procedures: () => (/* binding */ Procedures)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);


 // استيراد المكتبة بعد تثبيتها



function Procedures_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "div", 12)(5, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14)(8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Procedures_div_8_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchByCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.code, $event) || (ctx_r1.formData.code = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function Procedures_div_8_Template_input_keydown_enter_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchByCode());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 12)(13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.client, $event) || (ctx_r1.formData.client = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 12)(17, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.name, $event) || (ctx_r1.formData.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12)(21, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.legal_prosecutor, $event) || (ctx_r1.formData.legal_prosecutor = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 12)(25, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.civilId, $event) || (ctx_r1.formData.civilId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 12)(29, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.court, $event) || (ctx_r1.formData.court = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 12)(33, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.contract, $event) || (ctx_r1.formData.contract = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 12)(37, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_39_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.autoNumber, $event) || (ctx_r1.formData.autoNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 12)(41, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.amount, $event) || (ctx_r1.formData.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 12)(45, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\u0627\u0644\u0645\u0648\u0643\u0644 \u0627\u0644\u0641\u0631\u0639\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.subClient, $event) || (ctx_r1.formData.subClient = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 20)(49, "div", 21)(50, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_select_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.procedure, $event) || (ctx_r1.formData.procedure = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\u062D\u0641\u0638");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "\u0645\u0646\u0639 \u0633\u0641\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\u0636\u0628\u0637 \u0648\u0627\u062D\u0636\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "\u062D\u062C\u0632 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "\u0631\u0641\u0639 \u062D\u062C\u0632 \u0645\u0627 \u0644\u0644\u0645\u062F\u064A\u0646 \u0644\u062F\u064A \u0627\u0644\u063A\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "\u0635\u0631\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "\u0637\u0644\u0628 \u062D\u0643\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\u0627\u062B\u0628\u0627\u062A \u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "\u0627\u0639\u0644\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "\u0627\u0639\u0644\u0627\u0646 \u0648 \u0627\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "\u0627\u064A\u0645\u064A\u0644 \u0645\u0646 \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "\u0627\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "\u062A\u0645 \u0627\u0644\u062A\u0646\u0641\u064A\u0630");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "\u0645\u0637\u0644\u0648\u0628 \u0628\u0631\u0646\u062A \u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "\u0627\u062E\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 21)(86, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "\u0633\u0628\u0628 \u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_select_ngModelChange_88_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.reason, $event) || (ctx_r1.formData.reason = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "\u062A\u0633\u0648\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "\u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "\u0623\u062E\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 26)(96, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "textarea", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_8_Template_textarea_ngModelChange_98_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.formData.notes, $event) || (ctx_r1.formData.notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 29)(100, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "\u062D\u0641\u0638");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Procedures_div_8_Template_button_click_102_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.resetForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "\u062A\u0631\u0627\u062C\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "\u062A\u0633\u0644\u064A\u0645 \u0627\u0644\u0643\u0634\u0641 \u0644\u0644\u0645\u0646\u062F\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.legal_prosecutor);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.civilId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.court);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.contract);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.autoNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.subClient);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.procedure);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.formData.notes);
  }
}
function Procedures_div_9_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 56)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "--");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td")(26, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinterpolate"](row_r4.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinterpolate"](row_r4.notes));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.secretary);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.delegateStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.autoNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", row_r4.uploadDate === "\u062A\u0645 \u0627\u0644\u0631\u0641\u0639" ? "badge-success" : "badge-ghost");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r4.uploadDate, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.reference);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.reviewDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.debtReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r4.court);
  }
}
function Procedures_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Procedures_div_9_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.exportToExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 37)(5, "polyline", 38)(6, "line", 39)(7, "line", 40)(8, "polyline", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " XLSX ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 21)(11, "div", 42)(12, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_9_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.reportFilters.lookup, $event) || (ctx_r1.reportFilters.lookup = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 45)(16, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u0645\u0646:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_9_Template_input_ngModelChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.reportFilters.fromDate, $event) || (ctx_r1.reportFilters.fromDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 45)(20, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0625\u0644\u0649:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Procedures_div_9_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.reportFilters.toDate, $event) || (ctx_r1.reportFilters.toDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Procedures_div_9_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchReports());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u0628\u062D\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 49)(26, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Procedures_div_9_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r1.reportFilters.status = "not_uploaded";
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchReports());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Procedures_div_9_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r1.reportFilters.status = "uploaded";
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.searchReports());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u062A\u0645 \u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 51)(31, "table", 52)(32, "thead")(33, "tr", 53)(34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u0627\u0644\u0627\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u0627\u0644\u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0645\u0646\u062F\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "\u062A\u0627\u0631\u064A\u062E \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0645\u0646\u062F\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "\u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "\u0627\u0644\u0645\u0631\u0627\u062C\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "\u0633\u0628\u0628 \u0627\u0644\u0631\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](69, Procedures_div_9_tr_69_Template, 36, 21, "tr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.reportFilters.lookup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.reportFilters.fromDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.reportFilters.toDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("btn-active", ctx_r1.reportFilters.status === "not_uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("btn-active", ctx_r1.reportFilters.status === "uploaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.filteredReports);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u0627\u0644\u0639\u062F\u062F: ", ctx_r1.filteredReports.length, " ");
  }
}
let Procedures = /*#__PURE__*/(() => {
  class Procedures {
    activeTab = 1;
    // متغيرات الفلترة في تبويب التقارير
    reportFromDate = new Date().toISOString().split('T')[0];
    reportToDate = new Date().toISOString().split('T')[0];
    lookupValue = ''; // القيمة المرتبطة بزر الـ ...
    // بيانات الفورم (تبويب 1)
    formData = {
      code: '',
      court: '',
      name: '',
      civilId: '',
      contract: '',
      amount: '',
      subClient: '',
      procedure: '',
      reason: '',
      notes: '',
      client: '',
      legal_prosecutor: '',
      autoNumber: ''
    };
    openLookupModal() {
      console.log('Opening Lookup Modal...');
    }
    searchByCode() {
      if (!this.formData.code) return;
      // محاكاة جلب بيانات من السيرفر
      console.log('Searching for code:', this.formData.code);
      // هنا تضع كود الـ Service الحقيقي، سأقوم بوضع بيانات وهمية للتجربة
      this.formData = {
        ...this.formData,
        name: 'محمد أحمد محمود',
        civilId: '290010101234',
        contract: 'CONT-2025-99',
        client: 'شركة الاتصالات الكويتية - stc',
        amount: '500.000',
        subClient: 'الشركة الدولية',
        court: 'الأحمدي',
        legal_prosecutor: 'سداد',
        procedure: 'حفظ',
        reason: 'سداد',
        notes: 'تم الاتفاق على السداد',
        autoNumber: '998877'
      };
    }
    // دالة التراجع (مسح البيانات)
    resetForm() {
      this.formData = {
        code: '',
        court: '',
        name: '',
        civilId: '',
        contract: '',
        amount: '',
        subClient: '',
        procedure: '',
        reason: '',
        notes: '',
        client: '',
        legal_prosecutor: '',
        autoNumber: ''
      };
    }
    // =========================
    // Tab 2: متغيرات ومنطق التقارير
    // =========================
    reportFilters = {
      fromDate: '2025-11-01',
      toDate: '2025-11-29',
      lookup: '',
      status: 'all' // all, uploaded, not_uploaded
    };
    // بيانات وهمية للجدول الكبير (مطابقة للصورة الجديدة)
    reportRows = [{
      id: '16357',
      code: '863414',
      name: 'منيرة محمد سعد...',
      date: '11/1/2025',
      action: 'جميع الإجراءات',
      notes: 'يرجى رفع كافة الإج...',
      client: 'شركة مستشفى...',
      status: 'حفظ',
      secretary: 'Ahmed Abdallah',
      delegateStatus: 'المندوب لم يستلم',
      autoNumber: '240784270',
      uploadDate: 'تم الرفع',
      reference: '',
      reviewDate: '',
      debtReason: 'سداد',
      court: 'الاحمدي'
    }, {
      id: '16358',
      code: '863420',
      name: 'ريم نوري هلال...',
      date: '11/1/2025',
      action: 'تم التنفيذ',
      notes: 'يرجى اغلاق الملف...',
      client: 'شركة مستشفى...',
      status: 'حفظ',
      secretary: 'Ahmed Allam',
      delegateStatus: 'المندوب لم يستلم',
      autoNumber: '224050720',
      uploadDate: 'لم يتم الرفع',
      reference: '',
      reviewDate: '',
      debtReason: 'سداد',
      court: 'الاحمدي'
    }, {
      id: '16367',
      code: '1118837',
      name: 'بركة حمدان منور...',
      date: '11/1/2025',
      action: 'منع سفر',
      notes: 'رفع منع السفر فقط...',
      client: 'شركة الاتصالات...',
      status: 'تسوية',
      secretary: 'Ahmed Saad',
      delegateStatus: 'المندوب لم يستلم',
      autoNumber: '241201400',
      uploadDate: 'تم الرفع',
      reference: '697',
      reviewDate: '11/3/2025',
      debtReason: 'تسوية',
      court: 'الجهراء'
    }
    // ... يمكنك نسخ المزيد من البيانات
    ];
    filteredReports = [...this.reportRows];
    // دالة البحث في التقارير
    searchReports() {
      // فلترة بسيطة للتجربة
      this.filteredReports = this.reportRows.filter(row => {
        // يمكنك إضافة شروط التاريخ هنا
        if (this.reportFilters.status === 'uploaded' && row.uploadDate !== 'تم الرفع') return false;
        if (this.reportFilters.status === 'not_uploaded' && row.uploadDate !== 'لم يتم الرفع') return false;
        return true;
      });
    }
    // دالة تصدير الإكسل
    exportToExcel() {
      /* يجب تثبيت المكتبة: npm install xlsx
         إذا لم ترد تثبيتها الآن، يمكنك استخدام كود الـ CSV البسيط، ولكن هذا الكود هو الأفضل
      */
      // 1. تجهيز البيانات (يمكنك اختيار الأعمدة التي تريد تصديرها فقط)
      const dataToExport = this.filteredReports.map(row => ({
        'ID': row.id,
        'الكود': row.code,
        'الاسم': row.name,
        'تاريخ الرفع': row.date,
        'الاجراء': row.action,
        'الملاحظات': row.notes,
        'الموكل': row.client,
        'الحالة': row.status,
        'السكرتارية': row.secretary,
        'استلام المندوب': row.delegateStatus,
        'الرقم الآلي': row.autoNumber,
        'الرفع': row.uploadDate,
        'المراجع': row.reference,
        'تاريخ المراجعة': row.reviewDate,
        'سبب الرفع': row.debtReason,
        'المحكمة': row.court
      }));
      // 2. إنشاء Worksheet
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.json_to_sheet(dataToExport);
      // 3. إنشاء Workbook
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.book_append_sheet(wb, ws, 'Reports');
      // 4. الحفظ
      xlsx__WEBPACK_IMPORTED_MODULE_2__.writeFile(wb, `Reports_${new Date().getTime()}.xlsx`);
    }
    setActiveTab(tabId) {
      this.activeTab = tabId;
    }
    static ɵfac = function Procedures_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Procedures)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: Procedures,
      selectors: [["app-procedures"]],
      decls: 12,
      vars: 10,
      consts: [["dir", "rtl", 1, "flex", "flex-col", "h-screen", "p-2", "font-sans", "text-sm", 2, "background-color", "var(--surface-ground)"], ["role", "tablist", 1, "tabs", "tabs-lifted", "tabs-sm", "mb-0", 2, "border-color", "var(--surface-border)"], ["role", "tab", 1, "tab", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], ["role", "tab", 1, "tab", "flex-grow", "cursor-default", "border-b", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "border", "border-t-0", "p-3", "rounded-b-box", "flex-grow", "flex", "flex-col", "overflow-hidden", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], ["class", "flex flex-col h-full gap-3", 4, "ngIf"], ["class", "flex flex-col h-full", 4, "ngIf"], [1, "flex-grow", "bg-white", "border", "border-base-200", "rounded", "flex", "items-center", "justify-center", "text-gray-400"], [1, "flex", "flex-col", "h-full", "gap-3"], [1, "p-3", "rounded-lg", "border", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [1, "grid", "grid-cols-1", "md:grid-cols-12", "gap-4"], [1, "md:col-span-8", "grid", "grid-cols-1", "md:grid-cols-2", "gap-x-4", "gap-y-2"], [1, "form-control", "flex-row", "items-center", "gap-2"], [1, "label-text", "w-20", "font-bold", 2, "color", "var(--text-color)"], [1, "join", "w-full"], ["title", "\u0628\u062D\u062B", 1, "btn", "btn-xs", "btn-square", "join-item", "btn-primary", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-4", "w-4"], ["fill-rule", "evenodd", "d", "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", "clip-rule", "evenodd"], ["type", "text", "placeholder", "\u0627\u0636\u063A\u0637 Enter \u0644\u0644\u0628\u062D\u062B", 1, "input", "input-bordered", "input-xs", "join-item", "w-full", "focus:outline-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "keydown.enter", "ngModel"], ["type", "text", 1, "input", "input-bordered", "input-xs", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "md:col-span-4", "flex", "flex-col", "gap-2", "border-r", "pr-4", 2, "border-color", "var(--surface-border)"], [1, "flex", "items-center", "gap-2"], [1, "label-text", "w-16", "font-bold", 2, "color", "var(--text-color)"], [1, "select", "select-bordered", "select-xs", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "label-text", "w-16", "font-bold"], [1, "select", "select-bordered", "select-xs", "w-full", "bg-white", 3, "ngModelChange", "ngModel"], [1, "flex", "items-start", "gap-2", "h-full"], [1, "label-text", "w-16", "font-bold", "mt-1"], [1, "textarea", "textarea-bordered", "textarea-xs", "w-full", "bg-white", "h-full", "resize-none", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "justify-end", "mt-2"], [1, "btn", "btn-xs", "btn-neutral", "w-20"], [1, "btn", "btn-xs", "btn-outline", "w-20", 3, "click"], [1, "btn", "btn-xs", "btn-active", "w-auto"], [1, "flex", "flex-col", "h-full"], [1, "bg-base-200", "p-2", "rounded", "border", "border-base-300", "mb-2", "flex", "flex-wrap", "justify-between", "items-center", "gap-2", 2, "direction", "ltr"], [1, "btn", "btn-sm", "btn-outline", "btn-success", "gap-2", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "8", "y1", "13", "x2", "16", "y2", "13"], ["x1", "8", "y1", "17", "x2", "16", "y2", "17"], ["points", "10 9 9 9 8 9"], [1, "join"], [1, "btn", "btn-sm", "join-item", "btn-neutral"], ["placeholder", "0", 1, "input", "input-sm", "input-bordered", "join-item", "w-16", "text-center", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "bg-white", "border", "rounded", "px-1"], [1, "text-xs", "font-bold", "px-1"], ["type", "date", 1, "input", "input-xs", "input-ghost", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "btn-neutral", "px-4", 3, "click"], [1, "join", "border", "border-base-300"], [1, "btn", "btn-sm", "join-item", 3, "click"], [1, "flex-grow", "overflow-auto", "border", "border-base-300", "rounded", "shadow-sm", "bg-white", "relative"], [1, "table", "table-xs", "table-pin-rows", "table-zebra", "w-full", "whitespace-nowrap", "text-right"], [1, "bg-gray-100", "text-gray-700", "font-bold"], ["class", "hover", 4, "ngFor", "ngForOf"], [1, "bg-gray-50", "p-1", "text-xs", "text-left", "px-2", "border-t"], [1, "hover"], [1, "font-mono"], [1, "font-medium", "text-blue-900", "max-w-[150px]", "truncate", 3, "title"], [1, "max-w-[200px]", "truncate", 3, "title"], [1, "max-w-[150px]", "truncate"], [1, "badge", "badge-xs", 3, "ngClass"]],
      template: function Procedures_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Procedures_Template_a_click_2_listener() {
            return ctx.setActiveTab(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Procedures_Template_a_click_4_listener() {
            return ctx.setActiveTab(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " \u0627\u0644\u062A\u0642\u0627\u0631\u064A\u0631 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, Procedures_div_8_Template, 106, 13, "div", 5)(9, Procedures_div_9_Template, 72, 9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " \u0645\u0633\u0627\u062D\u0629 \u0639\u0631\u0636 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("tab-active", ctx.activeTab === 1)("font-bold", ctx.activeTab === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("tab-active", ctx.activeTab === 2)("font-bold", ctx.activeTab === 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.activeTab === 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return Procedures;
})();

/***/ })

}]);
//# sourceMappingURL=9390.js.map