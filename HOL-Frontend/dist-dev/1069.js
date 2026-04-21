"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[1069],{

/***/ 91069:
/*!***********************************************************************************!*\
  !*** ./src/app/features/finance/pages/employee-disclosure/employee-disclosure.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeDisclosure: () => (/* binding */ EmployeeDisclosure)
/* harmony export */ });
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




const _c0 = ["lookup"];
function EmployeeDisclosure_table_9_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 15)(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r3 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r2.amount, " \u0631.\u0633");
  }
}
function EmployeeDisclosure_table_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 11)(1, "thead", 12)(2, "tr")(3, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0627\u0644\u0645\u0628\u0644\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EmployeeDisclosure_table_9_tr_12_Template, 9, 6, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.filteredData);
  }
}
function EmployeeDisclosure_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
let EmployeeDisclosure = /*#__PURE__*/(() => {
  class EmployeeDisclosure {
    lookupModal;
    selectedEmployee = null;
    // بيانات الموظفين للمودال
    employees = [{
      id: 1,
      name: 'أحمد'
    }, {
      id: 2,
      name: 'محمود'
    }, {
      id: 3,
      name: 'سارة'
    }];
    employeeColumns = ['id', 'name'];
    // بيانات الكشوف
    data = [{
      code: '001',
      employeeName: 'أحمد',
      date: '2025-11-16',
      amount: 500
    }, {
      code: '002',
      employeeName: 'محمود',
      date: '2025-11-15',
      amount: 300
    }, {
      code: '003',
      employeeName: 'سارة',
      date: '2025-11-14',
      amount: 450
    }];
    filteredData = [...this.data];
    openLookup() {
      this.lookupModal.open();
    }
    onEmployeeSelected(emp) {
      this.selectedEmployee = emp;
    }
    search() {
      if (!this.selectedEmployee) return;
      this.filteredData = this.data.filter(d => d.employeeName === this.selectedEmployee.name);
    }
    static ɵfac = function EmployeeDisclosure_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EmployeeDisclosure)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: EmployeeDisclosure,
      selectors: [["app-employee-disclosure"]],
      viewQuery: function EmployeeDisclosure_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lookupModal = _t.first);
        }
      },
      decls: 13,
      vars: 5,
      consts: [["lookup", ""], [1, "min-h-screen", "p-8", 2, "direction", "rtl", "background-color", "var(--surface-ground)"], [1, "shadow-xl", "rounded-2xl", "p-6", 2, "background-color", "var(--surface-card)"], [1, "text-3xl", "font-bold", "text-center", "mb-8", 2, "color", "var(--text-color)"], [1, "flex", "flex-col", "md:flex-row", "gap-4", "md:gap-3", "items-center", "mb-6"], ["type", "text", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0638\u0641", "readonly", "", 1, "input", "input-bordered", "w-full", "md:flex-1", "cursor-pointer", "focus:outline-none", "focus:ring-2", "focus:ring-blue-400", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "click", "value"], [1, "btn", "btn-primary", "w-full", "md:w-auto", 3, "click"], [1, "overflow-x-auto"], ["class", "table w-full table-auto border shadow-md rounded-lg", "style", "border-color: var(--surface-border);", 4, "ngIf"], ["class", "text-center mt-6", "style", "color: var(--text-color-secondary);", 4, "ngIf"], ["title", "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0648\u0638\u0641", 3, "itemSelected", "columns", "data"], [1, "table", "w-full", "table-auto", "border", "shadow-md", "rounded-lg", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [1, "text-center", 2, "color", "var(--text-color)"], ["style", "color: var(--text-color); transition: background-color 0.2s;", 3, "background-color", 4, "ngFor", "ngForOf"], [2, "color", "var(--text-color)", "transition", "background-color 0.2s"], [1, "text-center", "font-medium"], [1, "text-center"], [1, "text-center", "font-semibold"], [1, "text-center", "mt-6", 2, "color", "var(--text-color-secondary)"]],
      template: function EmployeeDisclosure_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0639\u0646 \u0643\u0634\u0641 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeeDisclosure_Template_input_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openLookup());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmployeeDisclosure_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.search());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " \u0628\u062D\u062B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, EmployeeDisclosure_table_9_Template, 13, 1, "table", 8)(10, EmployeeDisclosure_p_10_Template, 2, 0, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "app-lookup-modal", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemSelected", function EmployeeDisclosure_Template_app_lookup_modal_itemSelected_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onEmployeeSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", (ctx.selectedEmployee == null ? null : ctx.selectedEmployee.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredData.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.filteredData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("columns", ctx.employeeColumns)("data", ctx.employees);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__.LookupModal],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return EmployeeDisclosure;
})();

/***/ })

}]);
//# sourceMappingURL=1069.js.map