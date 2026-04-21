"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[3132],{

/***/ 73132:
/*!**************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/judgment/judgment.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Judgment: () => (/* binding */ Judgment)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);





function Judgment_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 15)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const caseItem_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", i_r2 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](caseItem_r1.caseNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](caseItem_r1.opponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](caseItem_r1.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 7, caseItem_r1.date, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](caseItem_r1.court);
  }
}
function Judgment_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0644\u0628\u062D\u062B. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
let Judgment = /*#__PURE__*/(() => {
  class Judgment {
    startDate;
    endDate;
    selectedDegree = '';
    cases = [{
      caseNumber: 'C-001',
      opponent: 'أحمد علي',
      degree: 'أول درجة',
      date: '2025-11-01',
      court: 'محكمة العاصمة'
    }, {
      caseNumber: 'C-002',
      opponent: 'سارة محمد',
      degree: 'استئناف',
      date: '2025-11-03',
      court: 'محكمة الفروانية'
    }, {
      caseNumber: 'C-003',
      opponent: 'عبدالله سالم',
      degree: 'تمييز',
      date: '2025-11-05',
      court: 'محكمة الجهراء'
    }, {
      caseNumber: 'C-004',
      opponent: 'فهد ناصر',
      degree: 'أول درجة',
      date: '2025-10-30',
      court: 'محكمة الأحمدي'
    }];
    filteredCases = [...this.cases];
    applyFilters() {
      this.filteredCases = this.cases.filter(c => {
        const matchesDegree = !this.selectedDegree || c.degree === this.selectedDegree;
        const matchesDate = (!this.startDate || new Date(c.date) >= new Date(this.startDate)) && (!this.endDate || new Date(c.date) <= new Date(this.endDate));
        return matchesDegree && matchesDate;
      });
    }
    static ɵfac = function Judgment_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || Judgment)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: Judgment,
      selectors: [["app-judgment"]],
      decls: 41,
      vars: 5,
      consts: [[1, "p-6", "min-h-screen", 2, "background-color", "var(--surface-ground)"], [1, "flex", "flex-wrap", "items-end", "gap-3", "mb-6"], [1, "block", "mb-1", "text-sm", "font-semibold", 2, "color", "var(--text-color)"], ["type", "date", 1, "input", "input-bordered", "input-sm", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "select", "select-bordered", "select-sm", "w-40", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "\u0623\u0648\u0644 \u062F\u0631\u062C\u0629"], ["value", "\u0627\u0633\u062A\u0626\u0646\u0627\u0641"], ["value", "\u062A\u0645\u064A\u064A\u0632"], [1, "btn", "btn-sm", "btn-primary", "mt-6", 3, "click"], [1, "overflow-x-auto", "rounded-xl", "shadow", 2, "background-color", "var(--surface-card)"], [1, "table", "table-sm", "w-full", "text-sm"], [1, "font-semibold", 2, "background-color", "var(--surface-section)", "color", "var(--text-color)"], ["style", "color: var(--text-color); transition: background-color 0.2s;", 3, "background-color", 4, "ngFor", "ngForOf"], ["class", "text-center mt-4", "style", "color: var(--text-color-secondary);", 4, "ngIf"], [2, "color", "var(--text-color)", "transition", "background-color 0.2s"], [1, "text-center", "mt-4", 2, "color", "var(--text-color-secondary)"]],
      template: function Judgment_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0645\u0646 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function Judgment_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.startDate, $event) || (ctx.startDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function Judgment_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.endDate, $event) || (ctx.endDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0627\u0644\u062F\u0631\u062C\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "select", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function Judgment_Template_select_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedDegree, $event) || (ctx.selectedDegree = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0627\u0644\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0623\u0648\u0644 \u062F\u0631\u062C\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u0627\u0633\u062A\u0626\u0646\u0627\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u062A\u0645\u064A\u064A\u0632");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function Judgment_Template_button_click_22_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " \u0627\u0633\u062A\u0639\u0644\u0627\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10)(25, "table", 11)(26, "thead", 12)(27, "tr")(28, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\u0631\u0642\u0645 \u0627\u0644\u0642\u0636\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u0627\u0633\u0645 \u0627\u0644\u062E\u0635\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\u0627\u0644\u062F\u0631\u062C\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, Judgment_tr_39_Template, 12, 10, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, Judgment_div_40_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.startDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.endDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDegree);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredCases);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredCases.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return Judgment;
})();

/***/ })

}]);
//# sourceMappingURL=3132.js.map