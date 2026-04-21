"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[1248],{

/***/ 1248:
/*!*************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/direct-print/direct-print.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectPrint: () => (/* binding */ DirectPrint)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);





function DirectPrint_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const printer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", printer_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](printer_r1);
  }
}
let DirectPrint = /*#__PURE__*/(() => {
  class DirectPrint {
    // المتغيرات
    selectedPrinter = 'UTAX_TA P-5030DN';
    searchQuery = '';
    // قائمة الطابعات (مطابقة للصورة)
    printers = ['UTAX_TA P-5030DN', 'OneNote for Windows 10', 'RICOH MP C3003', 'Microsoft XPS Document Writer', 'Microsoft Print to PDF', 'Fax'];
    // دالة الطباعة
    print() {
      console.log(`Printing using: ${this.selectedPrinter}`);
      window.print(); // أو استدعاء خدمة الطباعة الخاصة بك
    }
    // دالة تصدير الإكسل
    exportExcel() {
      console.log('Exporting to Excel...');
    }
    static ɵfac = function DirectPrint_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DirectPrint)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: DirectPrint,
      selectors: [["app-direct-print"]],
      decls: 31,
      vars: 3,
      consts: [["dir", "rtl", 1, "flex", "flex-col", "h-screen", "font-sans", "text-sm", 2, "background-color", "var(--surface-ground)"], [1, "border-b", "p-2", "flex", "flex-wrap", "items-center", "gap-2", "shadow-sm", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "flex", "items-center", "gap-2", "pl-2", "border-l", 2, "border-color", "var(--surface-border)"], [1, "font-bold", "whitespace-nowrap", 2, "color", "var(--text-color)"], [1, "select", "select-bordered", "select-sm", "w-56", "max-w-xs", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2"], [1, "btn", "btn-sm", "btn-outline", "px-6", "font-normal", 2, "background-color", "var(--surface-section)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], [1, "flex-grow"], ["type", "text", "placeholder", "", 1, "input", "input-bordered", "input-sm", "w-full", "focus:outline-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "border-b", "p-1", "px-4", "text-xs", "select-none", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)", "color", "var(--text-color-secondary)"], [1, "flex-grow", "overflow-auto", "relative", 2, "background-color", "var(--surface-card)"], [1, "table", "table-xs", "table-pin-rows", "w-full", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [1, "w-10", 2, "background-color", "var(--surface-section)"], [2, "background-color", "var(--surface-section)", "color", "var(--text-color)"], [1, "text-left", 2, "background-color", "var(--surface-section)"], [2, "color", "var(--text-color-secondary)"], [3, "value"]],
      template: function DirectPrint_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0627\u0644\u0637\u0627\u0628\u0639\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function DirectPrint_Template_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedPrinter, $event) || (ctx.selectedPrinter = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DirectPrint_option_6_Template, 2, 2, "option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DirectPrint_Template_button_click_8_listener() {
            return ctx.exportExcel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0627\u0643\u0633\u064A\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DirectPrint_Template_button_click_10_listener() {
            return ctx.print();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u0637\u0628\u0627\u0639\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function DirectPrint_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Drag a column header here to group by that column ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11)(17, "table", 12)(18, "thead")(19, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 16)(28, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\uD83D\uDD0D");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedPrinter);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.printers);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return DirectPrint;
})();

/***/ })

}]);
//# sourceMappingURL=1248.js.map