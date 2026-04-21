"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[3008],{

/***/ 73008:
/*!*********************************************************************************!*\
  !*** ./src/app/features/discussions/pages/appeals-overview/appeals-overview.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppealsOverview: () => (/* binding */ AppealsOverview)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





function AppealsOverview_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppealsOverview_button_18_Template_button_click_0_listener() {
      const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.activeTab = tab_r2.key);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("border-bottom-color", ctx_r2.activeTab === tab_r2.key ? "var(--primary-color)" : "transparent")("color", ctx_r2.activeTab === tab_r2.key ? "var(--text-color)" : "var(--text-color-secondary)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("border-b-2", ctx_r2.activeTab === tab_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tab_r2.label, "\n");
  }
}
function AppealsOverview_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r4, " ");
  }
}
function AppealsOverview_tr_25_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r6[col_r5] || "-", " ");
  }
}
function AppealsOverview_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppealsOverview_tr_25_td_1_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r7 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.columns[ctx_r2.activeTab]);
  }
}
function AppealsOverview_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
let AppealsOverview = /*#__PURE__*/(() => {
  class AppealsOverview {
    filters = {
      fromDate: '',
      toDate: ''
    };
    tabs = [{
      key: 'appeals',
      label: 'كشف الطعون'
    }, {
      key: 'finished',
      label: 'الطعون المنتهية'
    }, {
      key: 'expired',
      label: 'مواعيد انقضت / التنبيهات'
    }];
    activeTab = 'appeals';
    columns = {
      appeals: ['الكود', 'المسلسل', 'الشبلونة', 'الموكل', 'الخصم', 'المحكمة', 'الرقم الالي', 'موضوع الدعوي', 'نوع الحكم', 'الدائرة', 'تاريخ الحكم', 'اخر موعد للاستئناف', 'موعد التنبيه', 'منطوق الحكم', 'الدرجة', 'الحضور', 'رقم اول درجة', 'رقم الاستئناف', 'رقم التمييز', 'النتيجة', 'check'],
      finished: ['id', 'المسلسل', 'الشبلونة', 'الموكل', 'الخصم', 'موضوع الدعوي', 'نوع الحكم', 'الدائرة', 'تاريخ الحكم', 'اخر موعد للاستئناف', 'موعد التنبيه', 'منطوق الحكم', 'الدرجة', 'الحضور', 'check'],
      expired: ['الكود', 'المسلسل', 'الشبلونة', 'الموكل', 'الخصم', 'المحكمة', 'الرقم الالي', 'موضوع الدعوي', 'نوع الحكم', 'الدائرة', 'تاريخ الحكم', 'اخر موعد للاستئناف', 'موعد التنبيه', 'منطوق الحكم', 'الدرجة', 'الحضور', 'رقم اول درجة', 'رقم الاستئناف', 'رقم التمييز', 'النتيجة', 'check']
    };
    tableData = {
      appeals: [],
      finished: [],
      expired: []
    };
    get activeTableData() {
      return this.tableData[this.activeTab];
    }
    searchBy(type) {
      const from = new Date(this.filters.fromDate);
      const to = new Date(this.filters.toDate);
      // هنا فقط Dummy Data كمثال
      const allData = [{
        الكود: 'C-1001',
        المسلسل: 1,
        الشبلونة: 'شبلونة 1',
        الموكل: 'أحمد',
        الخصم: 'خالد',
        المحكمة: 'محكمة العاصمة',
        الرقم_الي: 'R-2001',
        موضوع_الدعوي: 'نزاع تجاري',
        نوع_الحكم: 'مدني',
        الدائرة: 'الدائرة 1',
        تاريخ_الحكم: '2025-11-08',
        اخر_موعد_للاستئناف: '2025-11-15',
        موعد_التنبيه: '2025-11-14',
        منطوق_الحكم: 'مقبول جزئياً',
        الدرجة: 'اول درجة',
        الحضور: 'متواجد',
        رقم_اول_درجة: 10,
        رقم_الاستئناف: 20,
        رقم_التمييز: 30,
        النتيجة: 'نجاح',
        check: false
      }];
      let key;
      if (type === 'judgmentDate') key = 'تاريخ_الحكم';else if (type === 'alertDate') key = 'موعد_التنبيه';else key = 'اخر_موعد_للاستئناف';
      this.tableData[this.activeTab] = allData.filter(item => {
        const itemDate = new Date(item[key]); // الآن TypeScript لا يشكو
        return itemDate >= from && itemDate <= to;
      });
    }
    static ɵfac = function AppealsOverview_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppealsOverview)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppealsOverview,
      selectors: [["app-appeals-overview"]],
      decls: 27,
      vars: 6,
      consts: [[1, "p-6", "space-y-6", 2, "direction", "rtl", "background-color", "var(--surface-ground)"], [1, "grid", "grid-cols-4", "gap-4", "p-4", "rounded-2xl", "shadow", "mb-4", 2, "background-color", "var(--surface-card)"], [1, "block", "text-sm", "font-medium", "mb-1", 2, "color", "var(--text-color-secondary)"], ["type", "date", "name", "fromDate", 1, "w-full", "border", "rounded-lg", "p-2", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "toDate", 1, "w-full", "border", "rounded-lg", "p-2", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "col-span-2", "flex", "gap-3", "items-end"], ["type", "button", 1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded-lg", "hover:bg-blue-700", 3, "click"], ["type", "button", 1, "bg-emerald-600", "text-white", "px-4", "py-2", "rounded-lg", "hover:bg-emerald-700", 3, "click"], ["type", "button", 1, "bg-indigo-600", "text-white", "px-4", "py-2", "rounded-lg", "hover:bg-indigo-700", 3, "click"], [1, "flex", "border-b", "mb-4", 2, "border-color", "var(--surface-border)"], ["class", "px-4 py-2 cursor-pointer", 3, "border-b-2", "border-bottom-color", "color", "click", 4, "ngFor", "ngForOf"], [1, "p-4", "rounded-2xl", "shadow", 2, "background-color", "var(--surface-card)"], [1, "w-full", "border", "text-sm", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], ["class", "p-2 border text-right", "style", "border-color: var(--surface-border); color: var(--text-color);", 4, "ngFor", "ngForOf"], ["style", "color: var(--text-color); border-color: var(--surface-border);", 3, "background-color", 4, "ngFor", "ngForOf"], ["class", "text-center py-8", "style", "color: var(--text-color-secondary);", 4, "ngIf"], [1, "px-4", "py-2", "cursor-pointer", 3, "click"], [1, "p-2", "border", "text-right", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], ["class", "p-2 border text-right", "style", "border-color: var(--surface-border);", 4, "ngFor", "ngForOf"], [1, "p-2", "border", "text-right", 2, "border-color", "var(--surface-border)"], [1, "text-center", "py-8", 2, "color", "var(--text-color-secondary)"]],
      template: function AppealsOverview_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1)(2, "div")(3, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0645\u0646 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function AppealsOverview_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.filters.fromDate, $event) || (ctx.filters.fromDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function AppealsOverview_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.filters.toDate, $event) || (ctx.filters.toDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5)(11, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppealsOverview_Template_button_click_11_listener() {
            return ctx.searchBy("judgmentDate");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " \u0628\u062D\u062B \u0628\u062A\u0627\u0631\u064A\u062E \u0635\u062F\u0648\u0631 \u0627\u0644\u062D\u0643\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppealsOverview_Template_button_click_13_listener() {
            return ctx.searchBy("alertDate");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " \u0628\u062D\u062B \u0628\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0646\u0628\u064A\u0647 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppealsOverview_Template_button_click_15_listener() {
            return ctx.searchBy("appealDate");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \u0628\u062D\u062B \u0628\u062A\u0627\u0631\u064A\u062E \u0645\u0648\u0639\u062F \u0627\u0644\u0637\u0639\u0646 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AppealsOverview_button_18_Template, 2, 7, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 11)(20, "table", 12)(21, "thead", 13)(22, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AppealsOverview_th_23_Template, 2, 1, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, AppealsOverview_tr_25_Template, 2, 3, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AppealsOverview_div_26_Template, 2, 0, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.fromDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.toDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.columns[ctx.activeTab]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.activeTableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTableData.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AppealsOverview;
})();

/***/ })

}]);
//# sourceMappingURL=3008.js.map