"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[286],{

/***/ 70286:
/*!************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/sessions-page/sessions-page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionsPage: () => (/* binding */ SessionsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);





function SessionsPage_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 18)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const session_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", i_r2 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](session_r1.sessionNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 8, session_r1.date, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](session_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](session_r1.court);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](session_r1.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](session_r1.notes);
  }
}
function SessionsPage_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0644\u0628\u062D\u062B. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
let SessionsPage = /*#__PURE__*/(() => {
  class SessionsPage {
    startDate;
    endDate;
    selectedSessionType = '';
    sessions = [{
      sessionNumber: 'S-001',
      date: '2025-11-01',
      type: 'استلام صيغة تنفيذ',
      court: 'محكمة العاصمة',
      client: 'مكتب العدالة',
      notes: 'تم الاستلام بنجاح'
    }, {
      sessionNumber: 'S-002',
      date: '2025-11-02',
      type: 'استلام حكم',
      court: 'محكمة الفروانية',
      client: 'مكتب السلام',
      notes: 'بانتظار اعتماد الحكم'
    }, {
      sessionNumber: 'S-003',
      date: '2025-10-30',
      type: 'شطب الدعوى',
      court: 'محكمة الأحمدي',
      client: 'مكتب الوفاء',
      notes: 'تم الشطب بناءً على طلب المدعي'
    }, {
      sessionNumber: 'S-004',
      date: '2025-11-03',
      type: 'وقف الدعوى',
      court: 'محكمة الجهراء',
      client: 'مكتب النور',
      notes: 'تم الوقف لحين استكمال المستندات'
    }];
    filteredSessions = [...this.sessions];
    applyFilters() {
      this.filteredSessions = this.sessions.filter(s => {
        const matchesType = !this.selectedSessionType || s.type === this.selectedSessionType;
        const matchesDate = (!this.startDate || new Date(s.date) >= new Date(this.startDate)) && (!this.endDate || new Date(s.date) <= new Date(this.endDate));
        return matchesType && matchesDate;
      });
    }
    static ɵfac = function SessionsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SessionsPage)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SessionsPage,
      selectors: [["app-sessions-page"]],
      decls: 49,
      vars: 5,
      consts: [[1, "p-6", "min-h-screen", 2, "background-color", "var(--surface-ground)"], [1, "flex", "flex-wrap", "items-end", "gap-3", "mb-6"], [1, "block", "mb-1", "text-sm", "font-semibold", 2, "color", "var(--text-color)"], ["type", "date", 1, "input", "input-bordered", "input-sm", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "select", "select-bordered", "select-sm", "w-64", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "\u0627\u0633\u062A\u0644\u0627\u0645 \u0635\u064A\u063A\u0629 \u062A\u0646\u0641\u064A\u0630"], ["value", "\u0627\u0633\u062A\u0644\u0627\u0645 \u0635\u0648\u0631\u0629 \u0637\u0628\u0642 \u0627\u0644\u0623\u0635\u0644"], ["value", "\u0627\u0633\u062A\u0644\u0627\u0645 \u062D\u0643\u0645"], ["value", "\u0631\u0641\u0636 \u0627\u0644\u062F\u0639\u0648\u0649"], ["value", "\u0634\u0637\u0628 \u0627\u0644\u062F\u0639\u0648\u0649"], ["value", "\u0648\u0642\u0641 \u0627\u0644\u062F\u0639\u0648\u0649"], [1, "btn", "btn-sm", "btn-primary", "mt-6", 3, "click"], [1, "overflow-x-auto", "rounded-xl", "shadow", 2, "background-color", "var(--surface-card)"], [1, "table", "table-sm", "w-full", "text-sm"], [1, "font-semibold", 2, "background-color", "var(--surface-section)", "color", "var(--text-color)"], ["style", "color: var(--text-color); transition: background-color 0.2s;", 3, "background-color", 4, "ngFor", "ngForOf"], ["class", "text-center mt-4", "style", "color: var(--text-color-secondary);", 4, "ngIf"], [2, "color", "var(--text-color)", "transition", "background-color 0.2s"], [1, "text-center", "mt-4", 2, "color", "var(--text-color-secondary)"]],
      template: function SessionsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u0645\u0646 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function SessionsPage_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.startDate, $event) || (ctx.startDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div")(7, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0625\u0644\u0649 \u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function SessionsPage_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.endDate, $event) || (ctx.endDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div")(11, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0646\u0648\u0639 \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "select", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function SessionsPage_Template_select_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.selectedSessionType, $event) || (ctx.selectedSessionType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u0627\u0644\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u0627\u0633\u062A\u0644\u0627\u0645 \u0635\u064A\u063A\u0629 \u062A\u0646\u0641\u064A\u0630");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u0627\u0633\u062A\u0644\u0627\u0645 \u0635\u0648\u0631\u0629 \u0637\u0628\u0642 \u0627\u0644\u0623\u0635\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\u0627\u0633\u062A\u0644\u0627\u0645 \u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u0631\u0641\u0636 \u0627\u0644\u062F\u0639\u0648\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u0634\u0637\u0628 \u0627\u0644\u062F\u0639\u0648\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0648\u0642\u0641 \u0627\u0644\u062F\u0639\u0648\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SessionsPage_Template_button_click_28_listener() {
            return ctx.applyFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " \u0627\u0633\u062A\u0639\u0644\u0627\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13)(31, "table", 14)(32, "thead", 15)(33, "tr")(34, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\u0631\u0642\u0645 \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\u0646\u0648\u0639 \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, SessionsPage_tr_47_Template, 14, 11, "tr", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, SessionsPage_div_48_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.startDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.endDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedSessionType);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredSessions);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.filteredSessions.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SessionsPage;
})();

/***/ })

}]);
//# sourceMappingURL=286.js.map