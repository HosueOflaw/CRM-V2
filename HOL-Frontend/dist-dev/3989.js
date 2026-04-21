"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[3989],{

/***/ 93989:
/*!***************************************************************************!*\
  !*** ./src/app/features/finance/pages/receipt-voucher/receipt-voucher.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReceiptVoucher: () => (/* binding */ ReceiptVoucher)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 85422);





let ReceiptVoucher = /*#__PURE__*/(() => {
  class ReceiptVoucher {
    router;
    receiptData = {
      code: '',
      name: '',
      civil: '',
      client: '',
      lawyer: '',
      batch_no: '',
      contract_no: '',
      reason: '',
      claim_value: 0,
      paid: 0,
      remaining: 0,
      discount: 0,
      current: 0,
      status: '',
      auto_no: ''
    };
    constructor(router) {
      this.router = router;
      const navigation = this.router.getCurrentNavigation();
      const stateData = navigation?.extras.state?.['receipt'];
      if (stateData) {
        this.receiptData = {
          ...this.receiptData,
          ...stateData
        };
      }
    }
    save() {
      console.log('✅ تم حفظ السند:', this.receiptData);
    }
    back() {
      this.router.navigate(['/finance/salary-document']);
    }
    static ɵfac = function ReceiptVoucher_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReceiptVoucher)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ReceiptVoucher,
      selectors: [["app-receipt-voucher"]],
      decls: 145,
      vars: 11,
      consts: [[1, "p-6", "min-h-screen", 2, "direction", "rtl", "background-color", "var(--surface-ground)"], [1, "text-2xl", "font-bold", "text-center", "mb-8", 2, "color", "var(--text-color)"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "p-4", "rounded-2xl", "shadow", "space-y-3", 2, "background-color", "var(--surface-card)"], [1, "font-bold", "mb-4", "text-lg", "border-b", "pb-2", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4", "text-sm"], [1, "block", "mb-1", "font-medium", 2, "color", "var(--text-color-secondary)"], ["type", "text", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["type", "date", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], [1, "flex", "items-center", "justify-between"], [1, "font-medium", 2, "color", "var(--text-color)"], ["type", "checkbox", 1, "checkbox"], [1, "select", "select-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], [1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["type", "number", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], [1, "textarea", "textarea-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], [1, "flex", "flex-wrap", "gap-2", "justify-center", "mt-4"], [1, "btn", "btn-primary"], [1, "btn", "btn-outline"], [1, "btn", "btn-error"], [1, "p-4", "rounded-2xl", "shadow", 2, "background-color", "var(--surface-card)"], [1, "table-auto", "w-full", "border", "text-center", "text-sm", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [1, "border", "p-2", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [2, "background-color", "var(--surface-card)", "color", "var(--text-color)"], [1, "border", "p-2", 2, "border-color", "var(--surface-border)"]],
      template: function ReceiptVoucher_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCC4 \u0633\u0646\u062F \u0642\u0628\u0636");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0633\u0646\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div")(9, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9)(21, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u0633\u062F\u0627\u062F \u062C\u0632\u0626\u064A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div")(25, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div")(29, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0641\u0627\u0646\u0648\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div")(33, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062F\u0641\u0639:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "select", 12)(36, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u0646\u0642\u062F\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u0634\u064A\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u062A\u062D\u0648\u064A\u0644 \u0628\u0646\u0643\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div")(43, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\u0627\u0644\u0628\u0646\u0643:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "select", 12)(46, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u0628\u0646\u0643 \u0627\u0644\u0643\u0648\u064A\u062A \u0627\u0644\u0648\u0637\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\u0628\u064A\u062A \u0627\u0644\u062A\u0645\u0648\u064A\u0644 \u0627\u0644\u0643\u0648\u064A\u062A\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\u0628\u0646\u0643 \u0627\u0644\u062E\u0644\u064A\u062C");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div")(53, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\u0634\u064A\u0643 \u0631\u0642\u0645:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div")(57, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\u0645\u0646:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "select", 12)(60, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u0627\u0644\u0639\u0645\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\u0634\u0631\u0643\u0629 \u0627\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div")(65, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u0627\u0644\u0645\u0628\u0644\u063A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div")(69, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\u0627\u0644\u062E\u0635\u0645:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div")(73, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "textarea", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div")(77, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "textarea", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 16)(81, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "\uD83D\uDCBE \u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "\u21A9\uFE0F \u062A\u0631\u0627\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "\uD83D\uDCC4 \u0639\u0631\u0636 \u0633\u0646\u062F \u0627\u0644\u0642\u064A\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "\uD83D\uDD0D \u0627\u0633\u062A\u0639\u0644\u0627\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "\uD83D\uDEAA \u062E\u0631\u0648\u062C");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "\uD83D\uDDD1\uFE0F \u062D\u0630\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 20)(94, "h3", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "\u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0628\u0627\u0644\u0645\u0643\u062A\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "table", 21)(97, "thead", 22)(98, "tr")(99, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "\u0631\u0642\u0645 \u0627\u0644\u0628\u0627\u062A\u0634");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "\u0633\u0628\u0628 \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "\u0627\u0644\u062E\u0635\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "\u0627\u0644\u062D\u0627\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "\u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "th", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "tbody")(122, "tr", 24)(123, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "td", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](124);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.batch_no);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.contract_no);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.reason);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.claim_value);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.paid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.remaining);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.discount);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.current);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.receiptData == null ? null : ctx.receiptData.civil);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"]],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ReceiptVoucher;
})();

/***/ })

}]);
//# sourceMappingURL=3989.js.map