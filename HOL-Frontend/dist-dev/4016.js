"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4016],{

/***/ 14016:
/*!*******************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/waiting-clients/waiting-clients.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaitingClients: () => (/* binding */ WaitingClients)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);






const _c0 = (a0, a1, a2) => ({
  "badge-success": a0,
  "badge-warning": a1,
  "badge-error": a2
});
function WaitingClients_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 9)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td")(14, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const client_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r2 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.batchNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.employeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](25, _c0, client_r1.status === "\u0646\u0634\u0637", client_r1.status === "\u0645\u0639\u0644\u0642", client_r1.status === "\u0645\u063A\u0644\u0642"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", client_r1.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 19, client_r1.claimValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 21, client_r1.paid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 23, client_r1.remaining));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.nationality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.civilNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.clientCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](client_r1.legalClaimant);
  }
}
let WaitingClients = /*#__PURE__*/(() => {
  class WaitingClients {
    searchTerm = '';
    filteredClients = [];
    waitingClients = [{
      code: 'A001',
      name: 'محمد علي',
      batchNumber: 'B123',
      reason: 'تأخير السداد',
      client: 'موكل 1',
      employeeName: 'موظف 1',
      status: 'نشط',
      claimValue: 1500,
      paid: 500,
      remaining: 1000,
      nationality: 'سعودي',
      civilNumber: '1234567890',
      notes: 'لا توجد ملاحظات',
      employee: 'موظف 1',
      clientCode: 'C001',
      legalClaimant: 'المدعي القانوني 1'
    }, {
      code: 'B002',
      name: 'سارة حسن',
      batchNumber: 'B124',
      reason: 'تأخير جزئي',
      client: 'موكل 2',
      employeeName: 'موظف 2',
      status: 'نشط',
      claimValue: 2000,
      paid: 1500,
      remaining: 500,
      nationality: 'كويتي',
      civilNumber: '0987654321',
      notes: 'تم التواصل',
      employee: 'موظف 2',
      clientCode: 'C002',
      legalClaimant: 'المدعي القانوني 2'
    }];
    ngOnInit() {
      this.filteredClients = this.waitingClients;
    }
    filterClients() {
      const term = this.searchTerm.trim().toLowerCase();
      this.filteredClients = this.waitingClients.filter(c => c.code.toLowerCase().includes(term) || c.name.toLowerCase().includes(term));
    }
    static ɵfac = function WaitingClients_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WaitingClients)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: WaitingClients,
      selectors: [["app-waiting-clients"]],
      decls: 45,
      vars: 2,
      consts: [[1, "p-8", "min-h-screen", 2, "direction", "rtl", "background-color", "var(--surface-ground)"], [1, "text-3xl", "font-bold", "mb-8", "text-center", 2, "color", "var(--primary-color)"], [1, "mb-6", "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0643\u0648\u062F \u0623\u0648 \u0627\u0644\u0627\u0633\u0645...", 1, "input", "input-bordered", "w-full", "md:w-1/3", 3, "ngModelChange", "ngModel"], ["routerLink", "/secretariat", 1, "btn", "btn-secondary"], [1, "overflow-x-auto", "rounded-lg", "shadow-lg", 2, "background-color", "var(--surface-card)"], [1, "table", "table-compact", "table-zebra", "w-full", "text-sm"], [2, "background-color", "var(--primary-color)", "color", "#ffffff"], ["style", "color: var(--text-color);", 3, "background-color", 4, "ngFor", "ngForOf"], [2, "color", "var(--text-color)"], [1, "badge", 3, "ngClass"]],
      template: function WaitingClients_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function WaitingClients_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function WaitingClients_Template_input_ngModelChange_4_listener() {
            return ctx.filterClients();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u0627\u0644\u0639\u0648\u062F\u0629 \u0644\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "table", 6)(9, "thead", 7)(10, "tr")(11, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0627\u0644\u0627\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u0631\u0642\u0645 \u0627\u0644\u0628\u0627\u062A\u0634");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u0633\u0628\u0628 \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u0643\u0648\u062F \u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, WaitingClients_tr_44_Template, 37, 29, "tr", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredClients);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return WaitingClients;
})();

/***/ })

}]);
//# sourceMappingURL=4016.js.map