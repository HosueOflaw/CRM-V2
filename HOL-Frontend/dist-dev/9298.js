"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[9298],{

/***/ 77776:
/*!**************************************************************************************!*\
  !*** ./src/app/features/discussions/components/permissions-form/permissions-form.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionsForm: () => (/* binding */ PermissionsForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);





const _c0 = ["lookup"];
function PermissionsForm_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 22)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td")(10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissionsForm_tr_49_Template_button_click_10_listener() {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.removeItem(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u062D\u0630\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r5.employee == null ? null : item_r5.employee.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((item_r5.court == null ? null : item_r5.court.name) || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((item_r5.department == null ? null : item_r5.department.name) || "-");
  }
}
let PermissionsForm = /*#__PURE__*/(() => {
  class PermissionsForm {
    lookup;
    lookupTitle = '';
    lookupColumns = [];
    lookupData = [];
    selectedEmployee;
    selectedCourt;
    selectedDepartment;
    openLookup(type) {
      if (type === 'employee') {
        this.lookupTitle = 'اختيار الموظف';
        this.lookupColumns = ['id', 'الاسم', 'الوظيفة'];
        this.lookupData = [{
          id: 1,
          الاسم: 'أحمد سالم',
          الوظيفة: 'محامي'
        }, {
          id: 2,
          الاسم: 'منى خالد',
          الوظيفة: 'كاتب'
        }];
      } else if (type === 'court') {
        this.lookupTitle = 'اختيار المحكمة';
        this.lookupColumns = ['id', 'الاسم', 'المكان'];
        this.lookupData = [{
          id: 1,
          الاسم: 'محكمة الجنايات',
          المكان: 'الكويت'
        }, {
          id: 2,
          الاسم: 'محكمة الأسرة',
          المكان: 'الفروانية'
        }];
      } else {
        this.lookupTitle = 'اختيار الدائرة';
        this.lookupColumns = ['id', 'الاسم'];
        this.lookupData = [{
          id: 1,
          الاسم: 'الدائرة 1'
        }, {
          id: 2,
          الاسم: 'الدائرة 2'
        }];
      }
      this.lookup.open();
    }
    handleLookupSelection(item) {
      if (this.lookupTitle.includes('الموظف')) this.selectedEmployee = item;else if (this.lookupTitle.includes('المحكمة')) this.selectedCourt = item;else if (this.lookupTitle.includes('الدائرة')) this.selectedDepartment = item;
    }
    assignedItems = [];
    // إضافة محكمة واحدة
    addCourt() {
      if (!this.selectedEmployee || !this.selectedCourt) return alert('اختر الموظف والمحكمة أولاً');
      this.assignedItems.push({
        employee: this.selectedEmployee,
        court: this.selectedCourt,
        department: null
      });
    }
    // إضافة كل المحاكم
    addAllCourts() {
      if (!this.selectedEmployee) return alert('اختر الموظف أولاً');
      const allCourts = [{
        id: 1,
        الاسم: 'محكمة الجنايات'
      }, {
        id: 2,
        الاسم: 'محكمة الأسرة'
      }, {
        id: 3,
        الاسم: 'محكمة الاستئناف'
      }];
      allCourts.forEach(court => {
        this.assignedItems.push({
          employee: this.selectedEmployee,
          court,
          department: null
        });
      });
    }
    // إضافة دائرة واحدة
    addDepartment() {
      if (!this.selectedEmployee || !this.selectedCourt || !this.selectedDepartment) return alert('اختر الموظف والمحكمة والدائرة أولاً');
      this.assignedItems.push({
        employee: this.selectedEmployee,
        court: this.selectedCourt,
        department: this.selectedDepartment
      });
    }
    // إضافة كل الدوائر
    addAllDepartments() {
      if (!this.selectedEmployee || !this.selectedCourt) return alert('اختر الموظف والمحكمة أولاً');
      const allDepartments = [{
        id: 1,
        الاسم: 'الدائرة 1'
      }, {
        id: 2,
        الاسم: 'الدائرة 2'
      }, {
        id: 3,
        الاسم: 'الدائرة 3'
      }];
      allDepartments.forEach(dep => {
        this.assignedItems.push({
          employee: this.selectedEmployee,
          court: this.selectedCourt,
          department: dep
        });
      });
    }
    // حذف صف
    removeItem(index) {
      this.assignedItems.splice(index, 1);
    }
    static ɵfac = function PermissionsForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PermissionsForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: PermissionsForm,
      selectors: [["app-permissions-form"]],
      viewQuery: function PermissionsForm_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.lookup = _t.first);
        }
      },
      decls: 52,
      vars: 7,
      consts: [["lookup", ""], [1, "p-6"], [1, "text-xl", "font-bold", "mb-6", "text-center"], [1, ""], [1, "flex", "items-center", "gap-2"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], ["type", "text", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0638\u0641", "readonly", "", 1, "input", "input-bordered", "w-full", 3, "value"], [1, "w-20", "text-right"], ["type", "text", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062D\u0643\u0645\u0629", "readonly", "", 1, "input", "input-bordered", "w-full", 3, "value"], ["type", "text", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0627\u0626\u0631\u0629", "readonly", "", 1, "input", "input-bordered", "w-full", 3, "value"], [1, "mt-6", "border-t", "pt-4", 2, "direction", "rtl"], [1, "grid", "grid-cols-2", "p-3", "gap-3", "mb-4", "text-center"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-outline", "btn-success", "btn-sm", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-outline", "btn-primary", "btn-sm", 3, "click"], [1, "mt-4"], [1, "font-bold", "mb-2", "text-center"], [1, "table", "table-sm", "w-full", "border"], [1, "bg-base-200", "text-center"], ["class", "text-center", 4, "ngFor", "ngForOf"], [3, "itemSelected", "title", "columns", "data"], [1, "text-center"], [1, "btn", "btn-error", "btn-xs", 3, "click"]],
      template: function PermissionsForm_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0625\u0636\u0627\u0641\u0629 \u0645\u062D\u0643\u0645\u0629 \u0648\u062F\u0627\u0626\u0631\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissionsForm_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openLookup("employee"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4)(11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissionsForm_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openLookup("court"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 4)(17, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissionsForm_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openLookup("department"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0627\u0644\u062F\u0627\u0626\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 10)(23, "div", 11)(24, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissionsForm_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.addCourt());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissionsForm_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.addAllCourts());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0643\u0644 \u0627\u0644\u0645\u062D\u0627\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissionsForm_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.addDepartment());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u2795 \u0625\u0636\u0627\u0641\u0629 \u062F\u0627\u0626\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PermissionsForm_Template_button_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.addAllDepartments());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u2795 \u0625\u0636\u0627\u0641\u0629 \u0643\u0644 \u0627\u0644\u062F\u0648\u0627\u0626\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16)(33, "h3", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u0636\u0627\u0641\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "table", 18)(36, "thead", 19)(37, "tr")(38, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "\u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\u0627\u0644\u062F\u0627\u0626\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, PermissionsForm_tr_49_Template, 12, 4, "tr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "app-lookup-modal", 21, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("itemSelected", function PermissionsForm_Template_app_lookup_modal_itemSelected_50_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.handleLookupSelection($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", (ctx.selectedEmployee == null ? null : ctx.selectedEmployee.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", (ctx.selectedCourt == null ? null : ctx.selectedCourt.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", (ctx.selectedDepartment == null ? null : ctx.selectedDepartment.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.assignedItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.lookupTitle)("columns", ctx.lookupColumns)("data", ctx.lookupData);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_2__.LookupModal],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.max-h-\\__ph-0__[_ngcontent-%COMP%] {\n  max-height: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGlzY3Vzc2lvbnMvY29tcG9uZW50cy9wZXJtaXNzaW9ucy1mb3JtL3Blcm1pc3Npb25zLWZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXgtaC1cXFs0MDBweFxcXSB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return PermissionsForm;
})();

/***/ }),

/***/ 82782:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/discussions/pages/discussions-dashboard/discussions-dashboard.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscussionsDashboard: () => (/* binding */ DiscussionsDashboard)
/* harmony export */ });
/* harmony import */ var _core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/dashboard-layout/dashboard-layout */ 95021);
/* harmony import */ var _components_permissions_form_permissions_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/permissions-form/permissions-form */ 77776);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





let DiscussionsDashboard = /*#__PURE__*/(() => {
  class DiscussionsDashboard {
    dialogService;
    ref;
    constructor(dialogService) {
      this.dialogService = dialogService;
    }
    actions = [{
      title: 'إضافة قضية جديدة',
      type: 'navigate',
      value: '/discussions/add-case'
    }, {
      title: 'ترحيل جلسات ',
      type: 'navigate',
      value: '/discussions/add-case/transfer-sessions'
    }, {
      title: 'قضايا لم ترحل ',
      type: 'navigate',
      value: '/discussions/not-transferred-cases'
    }, {
      title: 'طباعة رول الجلسات ',
      type: 'navigate',
      value: '/discussions/rolls'
    }, {
      title: 'التقارير ',
      type: 'navigate',
      value: '/discussions/reports'
    }, {
      title: 'قيد الرفع ',
      type: 'navigate',
      value: '/discussions/upload-status'
    }, {
      title: 'كشف الطعون',
      type: 'navigate',
      value: '/discussions/appeals-overview'
    }, {
      title: 'صلاحيات الترحيل ',
      type: 'form',
      onClick: dialog => this.openPermissionForm(dialog)
    }, {
      title: 'التقارير العامة',
      type: 'navigate',
      value: '/discussions/general-reports'
    }];
    openPermissionForm(dialog) {
      if (!dialog) return;
      const ref = dialog.open(_components_permissions_form_permissions_form__WEBPACK_IMPORTED_MODULE_1__.PermissionsForm, {
        header: 'صلاحيات الترحيل',
        width: '400px',
        styleClass: 'rounded-lg',
        modal: true
      });
      if (ref) {
        this.ref = ref;
      }
    }
    static ɵfac = function DiscussionsDashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DiscussionsDashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DiscussionsDashboard,
      selectors: [["app-discussions-dashboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService])],
      decls: 1,
      vars: 3,
      consts: [[3, "title", "subtitle", "actions"]],
      template: function DiscussionsDashboard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-dashboard-layout", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", " \u0627\u0644\u0645\u062F\u0627\u0648\u0644\u0627\u062A")("subtitle", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u063A\u0628 \u0641\u064A \u062A\u0646\u0641\u064A\u0630\u0647\u0627")("actions", ctx.actions);
        }
      },
      dependencies: [_core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_0__.DashboardLayout],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return DiscussionsDashboard;
})();

/***/ }),

/***/ 99298:
/*!************************************************************!*\
  !*** ./src/app/features/discussions/discussions-routes.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DISCUSSIONS_ROUTES: () => (/* binding */ DISCUSSIONS_ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_discussions_dashboard_discussions_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/discussions-dashboard/discussions-dashboard */ 82782);

const DISCUSSIONS_ROUTES = [{
  path: '',
  component: _pages_discussions_dashboard_discussions_dashboard__WEBPACK_IMPORTED_MODULE_0__.DiscussionsDashboard
}];

/***/ })

}]);
//# sourceMappingURL=9298.js.map