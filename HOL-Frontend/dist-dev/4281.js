"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4281],{

/***/ 44281:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/reports/pages/reports-zain-six-months/reports-zain-six-months.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportsZainSixMonths: () => (/* binding */ ReportsZainSixMonths)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/go-back/go-back */ 9156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





function ReportsZainSixMonths_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0623\u062D\u062F \u0627\u0644\u0623\u0632\u0631\u0627\u0631 \u0644\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function ReportsZainSixMonths_ng_container_12_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 13)(1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r2 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.value);
  }
}
function ReportsZainSixMonths_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 9)(2, "thead")(3, "tr", 10)(4, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0627\u0644\u0642\u064A\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ReportsZainSixMonths_ng_container_12_tr_11_Template, 7, 5, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.tableData);
  }
}
let ReportsZainSixMonths = /*#__PURE__*/(() => {
  class ReportsZainSixMonths {
    dataLoaded = false;
    tableData = [];
    onSelectType(type) {
      this.dataLoaded = true;
      // 🔸 Placeholder data until backend is connected
      this.tableData = [{
        name: `${type} - العميل الأول`,
        value: 100
      }, {
        name: `${type} - العميل الثاني`,
        value: 200
      }, {
        name: `${type} - العميل الثالث`,
        value: 300
      }];
    }
    static ɵfac = function ReportsZainSixMonths_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ReportsZainSixMonths)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ReportsZainSixMonths,
      selectors: [["app-reports-zain-six-months"]],
      decls: 13,
      vars: 2,
      consts: [[1, "page-container", "p-5", "min-h-screen", "font-sans", 2, "background-color", "var(--surface-ground)"], [1, "flex", "justify-start", "items-center", "gap-3", "mb-6"], [1, "flex", "items-center", "border", "rounded-lg", "px-3", "py-1", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)"], [1, "fa", "fa-search", "mr-2", 2, "color", "var(--text-color-secondary)"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B...", 1, "outline-none", "border-none", "w-48", "bg-transparent", 2, "color", "var(--text-color)"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "px-4", "py-2", "rounded-lg", "transition", 3, "click"], [1, "bg-green-600", "hover:bg-green-700", "text-white", "px-4", "py-2", "rounded-lg", "transition", 3, "click"], [1, "rounded-lg", "shadow", "p-5", "text-center", 2, "background-color", "var(--surface-card)", "color", "var(--text-color-secondary)"], [4, "ngIf"], [1, "w-full", "border-collapse", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [1, "border", "px-4", "py-2", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], ["style", "color: var(--text-color);", 3, "background-color", 4, "ngFor", "ngForOf"], [2, "color", "var(--text-color)"], [1, "border", "px-4", "py-2", 2, "border-color", "var(--surface-border)"]],
      template: function ReportsZainSixMonths_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-go-back");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 3)(5, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportsZainSixMonths_Template_button_click_6_listener() {
            return ctx.onSelectType("KW");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " KW ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReportsZainSixMonths_Template_button_click_8_listener() {
            return ctx.onSelectType("NK");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " NK ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ReportsZainSixMonths_ng_container_11_Template, 2, 0, "ng-container", 8)(12, ReportsZainSixMonths_ng_container_12_Template, 12, 1, "ng-container", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.dataLoaded);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataLoaded);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_2__.GoBack],
      styles: [".page-container[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\ntable[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmVwb3J0cy9wYWdlcy9yZXBvcnRzLXphaW4tc2l4LW1vbnRocy9yZXBvcnRzLXphaW4tc2l4LW1vbnRocy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250YWluZXIge1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ReportsZainSixMonths;
})();

/***/ })

}]);
//# sourceMappingURL=4281.js.map