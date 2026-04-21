"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[126],{

/***/ 90126:
/*!*************************************************************************!*\
  !*** ./src/app/features/discussions/pages/reports-page/reports-page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsPage: () => (/* binding */ ReportsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





function ReportsPage_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportsPage_button_19_Template_button_click_0_listener() {
      const tab_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.activeTab = tab_r3.key);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("border-bottom-color", ctx_r3.activeTab === tab_r3.key ? "var(--primary-color)" : "transparent")("color", ctx_r3.activeTab === tab_r3.key ? "var(--text-color)" : "var(--text-color-secondary)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("border-b-2", ctx_r3.activeTab === tab_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", tab_r3.label, " ");
  }
}
function ReportsPage_div_20_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r5, " ");
  }
}
function ReportsPage_div_20_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r6 = ctx.$implicit;
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r7[col_r6] || "-", " ");
  }
}
function ReportsPage_div_20_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReportsPage_div_20_tr_6_td_1_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r8 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.columns[ctx_r3.activeTab]);
  }
}
function ReportsPage_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "table", 15)(2, "thead", 16)(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ReportsPage_div_20_th_4_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReportsPage_div_20_tr_6_Template, 2, 3, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.columns[ctx_r3.activeTab]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.activeTabData);
  }
}
function ReportsPage_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No data matching the selected period ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
let ReportsPage = /*#__PURE__*/(() => {
  class ReportsPage {
    filters = {
      fromDate: '',
      toDate: ''
    };
    tabs = [{
      key: 'migration',
      label: 'تقرير الترحيل'
    }, {
      key: 'files',
      label: 'الملفات'
    }, {
      key: 'judgments',
      label: 'الأحكام'
    }];
    activeTab = 'migration';
    columns = {
      migration: ['تقرير الترحيل', 'الكود', 'الشبلونة', 'المحكمة', 'تاريخ الجلسة', 'رقم الجلسة', 'الجلسة', 'رقم القرار', 'القرار', 'اول درجة', 'موضوع الدعوي', 'الدائرة', 'الدائرة السابقة', 'رقم اول درجة', 'رقم الاستئناف', 'رقم التميز', 'الدور', 'القاعة', 'الموظف', 'الملاحظات', 'الجلسة القادمة', 'ملاحظات', 'الرقم الالي', 'الموكل', 'name'],
      files: ['المسلسل', 'الشبلونة', 'المحكمة', 'حالة الملف', 'اول درجة', 'موضوع الدعوي', 'الدائرة', 'الدائرة السابقة', 'رقم اول درجة', 'رقم الاستئناف', 'رقم التميز', 'الدور', 'الطابق', 'الموظف', 'ملاحظات الملف', 'الرقم الالي', 'الموكل', 'صفة الموكل', 'الخبراء', 'المستشار', 'الخصم', 'تاريخ الاجراء القادم', 'القطاع', 'لصالحنا', 'ضدنا', 'لا باس به'],
      judgments: ['id', 'المسلسل', 'الكود', 'الخصم', 'الموكل', 'تصنيف الحكم', 'نتيجة الحكم', 'منطوق الحكم', 'تاريخ الحكم', 'تاريخ الطعن', 'تاريخ التنبيه', 'الشبلونة', 'المحكمة', 'الرقم الالي', 'اول درجة', 'الاستئناف', 'التمييز']
    };
    tableData = {
      migration: [],
      files: [],
      judgments: []
    };
    get activeTabData() {
      return this.tableData[this.activeTab];
    }
    search(tabKey) {
      this.activeTab = tabKey;
      // ⚙️ Dummy data temporarily
      if (tabKey === 'migration') {
        this.tableData['migration'] = Array.from({
          length: 3
        }).map((_, i) => ({
          'تقرير الترحيل': `ترحيل ${i + 1}`,
          الكود: `C-${1000 + i}`,
          المحكمة: 'محكمة العاصمة',
          الجلسة: 'جلسة مرافعة',
          القرار: 'تأجيل',
          الموظف: 'أحمد'
        }));
      } else if (tabKey === 'files') {
        this.tableData['files'] = Array.from({
          length: 4
        }).map((_, i) => ({
          المسلسل: i + 1,
          المحكمة: 'محكمة حولي',
          'موضوع الدعوي': 'نزاع تجاري',
          الموظف: 'خالد',
          'صفة الموكل': 'مدعي'
        }));
      } else if (tabKey === 'judgments') {
        this.tableData['judgments'] = Array.from({
          length: 2
        }).map((_, i) => ({
          id: i + 1,
          الكود: `H-${3000 + i}`,
          'تصنيف الحكم': 'مدني',
          'نتيجة الحكم': 'مقبول جزئياً',
          'تاريخ الحكم': '2025-11-08'
        }));
      }
    }
    static ɵfac = function ReportsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsPage)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ReportsPage,
      selectors: [["app-reports-page"]],
      decls: 23,
      vars: 5,
      consts: [["emptyState", ""], [1, "p-6", "space-y-6", 2, "direction", "rtl", "background-color", "var(--surface-ground)"], [1, "grid", "grid-cols-4", "gap-4", "p-4", "rounded-2xl", "shadow", 2, "background-color", "var(--surface-card)"], [1, "block", "text-sm", "font-medium", "mb-1", 2, "color", "var(--text-color-secondary)"], ["type", "date", "name", "fromDate", 1, "w-full", "border", "rounded-lg", "p-2", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "toDate", 1, "w-full", "border", "rounded-lg", "p-2", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "col-span-2", "flex", "gap-3", "items-end"], ["type", "button", 1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded-lg", "hover:bg-blue-700", 3, "click"], ["type", "button", 1, "bg-emerald-600", "text-white", "px-4", "py-2", "rounded-lg", "hover:bg-emerald-700", 3, "click"], ["type", "button", 1, "bg-indigo-600", "text-white", "px-4", "py-2", "rounded-lg", "hover:bg-indigo-700", 3, "click"], [1, "p-4", "rounded-2xl", "shadow", 2, "background-color", "var(--surface-card)"], [1, "flex", "border-b", "mb-4", 2, "border-color", "var(--surface-border)"], ["class", "px-4 py-2 cursor-pointer", 3, "border-b-2", "border-bottom-color", "color", "click", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "px-4", "py-2", "cursor-pointer", 3, "click"], [1, "w-full", "border", "text-sm", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], ["class", "p-2 border text-right", "style", "border-color: var(--surface-border); color: var(--text-color);", 4, "ngFor", "ngForOf"], ["style", "color: var(--text-color); border-color: var(--surface-border);", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "p-2", "border", "text-right", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], ["class", "p-2 border text-right", "style", "border-color: var(--surface-border);", 4, "ngFor", "ngForOf"], [1, "p-2", "border", "text-right", 2, "border-color", "var(--surface-border)"], [1, "text-center", "py-8", 2, "color", "var(--text-color-secondary)"]],
      template: function ReportsPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "form", 2)(2, "div")(3, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0645\u0646 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ReportsPage_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.filters.fromDate, $event) || (ctx.filters.fromDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div")(7, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0627\u0644\u064A \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ReportsPage_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.filters.toDate, $event) || (ctx.filters.toDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportsPage_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.search("migration"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0631\u062D\u064A\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportsPage_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.search("files"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " \u0627\u0644\u0645\u0644\u0641\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportsPage_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.search("judgments"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \u0627\u0644\u0623\u062D\u0643\u0627\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10)(18, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ReportsPage_button_19_Template, 2, 7, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ReportsPage_div_20_Template, 7, 2, "div", 13)(21, ReportsPage_ng_template_21_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const emptyState_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.fromDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.filters.toDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTabData.length)("ngIfElse", emptyState_r9);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ReportsPage;
})();

/***/ })

}]);
//# sourceMappingURL=126.js.map