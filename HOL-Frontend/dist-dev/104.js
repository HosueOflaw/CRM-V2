"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[104],{

/***/ 30104:
/*!***************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/batch-numbers/batch-numbers.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchNumbers: () => (/* binding */ BatchNumbers)
/* harmony export */ });
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);





const _c0 = ["employeeLookup"];
const _c1 = () => ["code", "name", "department"];
let BatchNumbers = /*#__PURE__*/(() => {
  class BatchNumbers {
    // الوصول للمودال
    employeeLookup;
    // المتغيرات
    selectedEmployeeName = '';
    totalCustody = 0;
    // بيانات الموظفين (وهمية للتجربة)
    employeesData = [{
      code: '101',
      name: 'أحمد محمد علي',
      department: 'IT'
    }, {
      code: '102',
      name: 'سارة خالد',
      department: 'HR'
    }, {
      code: '103',
      name: 'محمود حسن',
      department: 'Finance'
    }, {
      code: '104',
      name: 'علي مصطفى',
      department: 'Sales'
    }];
    // فتح نافذة البحث عن موظف
    openEmployeeModal() {
      this.employeeLookup.open();
    }
    // عند اختيار موظف من المودال
    onEmployeeSelected(employee) {
      this.selectedEmployeeName = employee.name;
      console.log('Selected Employee:', employee);
    }
    // دوال الأزرار الأخرى
    search() {
      console.log('Searching...');
    }
    directExpense() {
      console.log('Directing Expense...');
    }
    markReceived() {
      console.log('Marked as Received...');
    }
    static ɵfac = function BatchNumbers_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BatchNumbers)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: BatchNumbers,
      selectors: [["app-batch-numbers"]],
      viewQuery: function BatchNumbers_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.employeeLookup = _t.first);
        }
      },
      decls: 41,
      vars: 6,
      consts: [["employeeLookup", ""], ["dir", "rtl", 1, "flex", "flex-col", "h-screen", "font-sans", "text-sm", 2, "background-color", "var(--surface-ground)"], [1, "border-b", "p-2", "flex", "justify-between", "items-center", "shadow-sm", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [1, "flex", "items-center", "gap-2"], [1, "flex", "items-center", "gap-1", "border", "p-1", "rounded-sm", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "font-bold", "text-xs", "px-1", 2, "color", "var(--text-color)"], ["type", "text", "readonly", "", 1, "input", "input-xs", "input-ghost", "h-6", "w-64", "focus:bg-transparent", 2, "background-color", "transparent", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-xs", "btn-square", "btn-ghost", "border", "rounded-sm", 2, "background-color", "var(--surface-hover)", "border-color", "var(--surface-border)", "color", "var(--text-color)", 3, "click"], [1, "btn", "btn-sm", "px-4", "rounded-sm", "font-normal", "h-8", "min-h-0", 2, "background-color", "var(--surface-hover)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], [1, "flex-grow", "overflow-auto", "border-b", "relative", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "table", "table-xs", "table-pin-rows", "w-full", "border-collapse", "text-right"], [1, "border-b", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "border-r", "w-12", "text-center", 2, "border-color", "var(--surface-border)"], [1, "border-r", 2, "border-color", "var(--surface-border)"], [1, "border-t", "p-1", "px-4", "text-xs", "font-bold", "flex", "items-center", "justify-center", "gap-2", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "font-mono", 2, "color", "var(--primary-color)"], [3, "itemSelected", "title", "data", "columns"]],
      template: function BatchNumbers_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function BatchNumbers_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedEmployeeName, $event) || (ctx.selectedEmployeeName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BatchNumbers_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openEmployeeModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " ... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BatchNumbers_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.search());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " \u0628\u062D\u062B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BatchNumbers_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.directExpense());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " \u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0645\u0635\u0631\u0648\u0641 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BatchNumbers_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.markReceived());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " \u062A\u0645 \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "table", 10)(17, "thead")(18, "tr", 11)(19, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u0631\u0642\u0645 \u0627\u0644\u0643\u0634\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u0627\u0644\u0645\u0643\u062A\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 14)(35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0639\u0647\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "app-lookup-modal", 16, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("itemSelected", function BatchNumbers_Template_app_lookup_modal_itemSelected_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onEmployeeSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedEmployeeName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.totalCustody);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "\u0628\u062D\u062B \u0639\u0646 \u0645\u0648\u0638\u0641")("data", ctx.employeesData)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__.LookupModal],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return BatchNumbers;
})();

/***/ })

}]);
//# sourceMappingURL=104.js.map