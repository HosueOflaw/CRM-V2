"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4839],{

/***/ 54839:
/*!*****************************************************************************!*\
  !*** ./src/app/features/finance/pages/filter-detection/filter-detection.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterDetection: () => (/* binding */ FilterDetection)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);





function FilterDetection_table_13_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 15)(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", i_r2 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r1.amount, " \u0631.\u0633");
  }
}
function FilterDetection_table_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 11)(1, "thead", 12)(2, "tr")(3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0627\u0644\u0645\u0628\u0644\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FilterDetection_table_13_tr_12_Template, 9, 6, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.filteredData);
  }
}
function FilterDetection_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
let FilterDetection = /*#__PURE__*/(() => {
  class FilterDetection {
    searchValue = '';
    data = [{
      code: '001',
      name: 'أحمد',
      date: '2025-11-16',
      amount: 500
    }, {
      code: '002',
      name: 'محمود',
      date: '2025-11-15',
      amount: 300
    }, {
      code: '003',
      name: 'سارة',
      date: '2025-11-14',
      amount: 450
    }];
    filteredData = [...this.data];
    search() {
      if (!this.searchValue) return;
      this.filteredData = this.data.filter(d => d.code.includes(this.searchValue));
    }
    getAll() {
      this.filteredData = [...this.data];
    }
    printTable() {
      let printContent = document.querySelector('table')?.outerHTML;
      let newWin = window.open('', '', 'width=800,height=600');
      newWin?.document.write(printContent || '');
      newWin?.document.close();
      newWin?.print();
    }
    static ɵfac = function FilterDetection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilterDetection)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FilterDetection,
      selectors: [["app-filter-detection"]],
      decls: 15,
      vars: 3,
      consts: [[1, "min-h-screen", "p-8", 2, "direction", "rtl", "background-color", "var(--surface-ground)"], [1, "shadow-xl", "rounded-2xl", "p-6", 2, "background-color", "var(--surface-card)"], [1, "text-3xl", "font-bold", "text-center", "mb-8", 2, "color", "var(--text-color)"], [1, "flex", "flex-col", "md:flex-row", "gap-4", "md:gap-3", "items-center", "mb-6"], ["type", "text", "placeholder", "\u0623\u062F\u062E\u0644 \u0631\u0642\u0645 \u0627\u0644\u0643\u0634\u0641", 1, "input", "input-bordered", "w-full", "md:flex-1", "focus:outline-none", "focus:ring-2", "focus:ring-blue-400", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", "w-full", "md:w-auto", 3, "click"], [1, "btn", "btn-secondary", "w-full", "md:w-auto", 3, "click"], [1, "btn", "btn-accent", "w-full", "md:w-auto", 3, "click"], [1, "overflow-x-auto"], ["class", "table w-full table-auto border shadow-md rounded-lg", "style", "border-color: var(--surface-border);", 4, "ngIf"], ["class", "text-center mt-6", "style", "color: var(--text-color-secondary);", 4, "ngIf"], [1, "table", "w-full", "table-auto", "border", "shadow-md", "rounded-lg", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [1, "text-center", 2, "color", "var(--text-color)"], ["style", "color: var(--text-color); transition: background-color 0.2s;", 3, "background-color", 4, "ngFor", "ngForOf"], [2, "color", "var(--text-color)", "transition", "background-color 0.2s"], [1, "text-center", "font-medium"], [1, "text-center"], [1, "text-center", "font-semibold"], [1, "text-center", "mt-6", 2, "color", "var(--text-color-secondary)"]],
      template: function FilterDetection_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u0643\u0634\u0641 \u0627\u0644\u062A\u0635\u0641\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function FilterDetection_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.searchValue, $event) || (ctx.searchValue = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDetection_Template_button_click_6_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u0628\u062D\u062B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDetection_Template_button_click_8_listener() {
            return ctx.getAll();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " \u0643\u0644 \u0627\u0644\u0643\u0634\u0648\u0641 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilterDetection_Template_button_click_10_listener() {
            return ctx.printTable();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u0637\u0628\u0627\u0639\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FilterDetection_table_13_Template, 13, 1, "table", 9)(14, FilterDetection_p_14_Template, 2, 0, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.searchValue);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredData.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredData.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return FilterDetection;
})();

/***/ })

}]);
//# sourceMappingURL=4839.js.map