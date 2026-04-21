"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[8738],{

/***/ 18738:
/*!*****************************************************************************!*\
  !*** ./src/app/features/reports/pages/report-follow-up/report-follow-up.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportFollowUp: () => (/* binding */ ReportFollowUp)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/go-back/go-back */ 9156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





function ReportFollowUp_div_4_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 10)(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r2 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r1.employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r1.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r1.follow);
  }
}
function ReportFollowUp_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 5)(4, "table", 6)(5, "thead")(6, "tr", 7)(7, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u0627\u0644\u0639\u062F\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ReportFollowUp_div_4_tr_16_Template, 9, 6, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.reportData);
  }
}
let ReportFollowUp = /*#__PURE__*/(() => {
  class ReportFollowUp {
    showReport = false;
    reportData = [];
    loadReport() {
      this.reportData = [{
        employee: 'أحمد',
        status: 'تم',
        count: 12,
        follow: 'متابعة أسبوعية'
      }, {
        employee: 'محمود',
        status: 'جاري',
        count: 8,
        follow: 'متابعة يومية'
      }, {
        employee: 'سارة',
        status: 'متوقف',
        count: 3,
        follow: 'متابعة شهرية'
      }, {
        employee: 'منى',
        status: 'قيد المراجعة',
        count: 5,
        follow: 'متابعة أسبوعية'
      }];
    }
    toggleReport() {
      this.showReport = !this.showReport;
      if (this.showReport) {
        this.loadReport();
      }
    }
    static ɵfac = function ReportFollowUp_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportFollowUp)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ReportFollowUp,
      selectors: [["app-report-follow-up"]],
      decls: 5,
      vars: 1,
      consts: [[1, "flex", "justify-end", "mb-6", 2, "background-color", "var(--surface-ground)"], [1, "bg-blue-600", "hover:bg-blue-700", "transition", "text-white", "font-semibold", "px-6", "py-2.5", "rounded-lg", "shadow-md", 3, "click"], ["class", "p-6 rounded-xl shadow-lg border", "style", "background-color: var(--surface-card); border-color: var(--surface-border);", 4, "ngIf"], [1, "p-6", "rounded-xl", "shadow-lg", "border", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "text-xl", "font-bold", "mb-4", "border-b", "pb-2", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], [1, "overflow-x-auto"], [1, "w-full", "text-right", "border-collapse", 2, "border-color", "var(--surface-border)"], [1, "text-sm", "font-semibold", 2, "background-color", "var(--surface-section)"], [1, "p-3", "border-b", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], ["style", "color: var(--text-color); transition: background-color 0.2s;", 3, "background-color", 4, "ngFor", "ngForOf"], [2, "color", "var(--text-color)", "transition", "background-color 0.2s"], [1, "p-3", "border-b", "font-medium", 2, "border-color", "var(--surface-border)"], [1, "p-3", "border-b", 2, "border-color", "var(--surface-border)"]],
      template: function ReportFollowUp_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-go-back");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportFollowUp_Template_button_click_2_listener() {
            return ctx.toggleReport();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u062A\u0642\u0631\u064A\u0631 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ReportFollowUp_div_4_Template, 17, 1, "div", 2);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showReport);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_2__.GoBack, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ReportFollowUp;
})();

/***/ })

}]);
//# sourceMappingURL=8738.js.map