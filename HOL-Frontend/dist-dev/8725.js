"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[8725],{

/***/ 98725:
/*!***************************************************************************!*\
  !*** ./src/app/features/finance/pages/office-not-load/office-not-load.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfficeNotLoad: () => (/* binding */ OfficeNotLoad)
/* harmony export */ });
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);





const _c0 = ["lookup"];
function OfficeNotLoad_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15)(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", i_r3 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.expense);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 13, item_r2.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.arhdaNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.defendantName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.autoNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r2.civilNumber);
  }
}
function OfficeNotLoad_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
let OfficeNotLoad = /*#__PURE__*/(() => {
  class OfficeNotLoad {
    lookup;
    // Lookup الموكل
    selectedClient = null;
    clients = [{
      id: 1,
      name: 'أحمد محمد'
    }, {
      id: 2,
      name: 'سارة علي'
    }];
    clientColumns = ['id', 'name'];
    // بيانات الجدول
    data = [{
      id: 1,
      code: '001',
      expense: 'مصاريف',
      amount: 500,
      client: 'أحمد محمد',
      employee: 'محمد حسن',
      date: '2025-11-16',
      arhdaNumber: 'A001',
      defendantName: 'الخصم 1',
      autoNumber: '1001',
      civilNumber: '123456'
    }, {
      id: 2,
      code: '002',
      expense: 'مصاريف',
      amount: 300,
      client: 'سارة علي',
      employee: 'علي محمود',
      date: '2025-11-15',
      arhdaNumber: 'A002',
      defendantName: 'الخصم 2',
      autoNumber: '1002',
      civilNumber: '654321'
    }];
    // فتح Lookup
    openLookup() {
      this.lookup.open();
    }
    // عند اختيار الموكل
    onClientSelected(client) {
      this.selectedClient = client;
    }
    // البحث
    search() {
      this.data = this.data.filter(d => !this.selectedClient || d.client === this.selectedClient.name);
    }
    // استعلام على الكل
    getAll() {
      // هنا استرجع كل البيانات من الـ API أو reset للمثال الحالي
      // حالياً نعيد بيانات ثابتة
      this.data = [{
        id: 1,
        code: '001',
        expense: 'مصاريف',
        amount: 500,
        client: 'أحمد محمد',
        employee: 'محمد حسن',
        date: '2025-11-16',
        arhdaNumber: 'A001',
        defendantName: 'الخصم 1',
        autoNumber: '1001',
        civilNumber: '123456'
      }, {
        id: 2,
        code: '002',
        expense: 'مصاريف',
        amount: 300,
        client: 'سارة علي',
        employee: 'علي محمود',
        date: '2025-11-15',
        arhdaNumber: 'A002',
        defendantName: 'الخصم 2',
        autoNumber: '1002',
        civilNumber: '654321'
      }];
    }
    static ɵfac = function OfficeNotLoad_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OfficeNotLoad)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: OfficeNotLoad,
      selectors: [["app-office-not-load"]],
      viewQuery: function OfficeNotLoad_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.lookup = _t.first);
        }
      },
      decls: 43,
      vars: 5,
      consts: [["lookup", ""], [1, "min-h-screen", "p-6", 2, "direction", "rtl", "background-color", "var(--surface-ground)"], [1, "shadow-xl", "rounded-2xl", "p-6", "space-y-6", 2, "background-color", "var(--surface-card)"], [1, "text-3xl", "font-bold", "text-center", "mb-8", 2, "color", "var(--text-color)"], [1, "flex", "flex-col", "md:flex-row", "gap-4", "justify-start", "items-end", "mb-6"], ["type", "text", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0643\u0644", "readonly", "", 1, "input", "input-bordered", "w-full", "md:w-64", "cursor-pointer", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "click", "value"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "overflow-x-auto"], [1, "table", "table-auto", "w-full", "border", "shadow-md", "rounded-lg", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [1, "text-center", 2, "color", "var(--text-color)"], ["style", "color: var(--text-color); transition: background-color 0.2s;", 3, "background-color", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0645\u0648\u0643\u0644", 3, "itemSelected", "columns", "data"], [2, "color", "var(--text-color)", "transition", "background-color 0.2s"], [1, "text-center"], ["colspan", "12", 1, "text-center", "py-6", 2, "color", "var(--text-color-secondary)"]],
      template: function OfficeNotLoad_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u0645\u0627 \u064A\u062A\u062D\u0645\u0644\u0647 \u0627\u0644\u0645\u0643\u062A\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OfficeNotLoad_Template_input_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openLookup());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OfficeNotLoad_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.search());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0628\u062D\u062B");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OfficeNotLoad_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.getAll());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0639\u0644\u0649 \u0627\u0644\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "table", 9)(12, "thead", 10)(13, "tr")(14, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u0631\u0642\u0645 ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u0627\u0644\u0645\u0635\u0631\u0648\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0639\u0647\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "CODE_ACC");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0647\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u0627\u0633\u0645 \u0627\u0644\u062E\u0635\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, OfficeNotLoad_tr_39_Template, 24, 15, "tr", 12)(40, OfficeNotLoad_tr_40_Template, 3, 0, "tr", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "app-lookup-modal", 14, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("itemSelected", function OfficeNotLoad_Template_app_lookup_modal_itemSelected_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onClientSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", (ctx.selectedClient == null ? null : ctx.selectedClient.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.data);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("columns", ctx.clientColumns)("data", ctx.clients);
        }
      },
      dependencies: [_shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__.LookupModal, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return OfficeNotLoad;
})();

/***/ })

}]);
//# sourceMappingURL=8725.js.map