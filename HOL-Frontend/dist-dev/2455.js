"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[2455],{

/***/ 52455:
/*!*************************************************************************!*\
  !*** ./src/app/features/finance/pages/custody-search/custody-search.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustodySearch: () => (/* binding */ CustodySearch)
/* harmony export */ });
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);






const _c0 = ["lookupModal"];
function CustodySearch_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 19)(1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", i_r3 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 8, row_r2.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r2.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r2.user);
  }
}
function CustodySearch_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0639\u0647\u062F \u0644\u0639\u0631\u0636\u0647\u0627.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
let CustodySearch = /*#__PURE__*/(() => {
  class CustodySearch {
    // للوصول إلى مكون Lookup Modal
    lookupModal;
    // متغيرات البحث
    selectedClientCode = '';
    selectedClientName = '';
    selectedConsultant = 'المستشار فهد'; // للمحاكاة
    // بيانات وهمية للموكلين ليتم عرضها في Lookup Modal
    clientsData = [{
      code: 'C101',
      name: 'الشركة الوطنية',
      type: 'مؤسسة'
    }, {
      code: 'C102',
      name: 'بنك الخليج',
      type: 'بنك'
    }, {
      code: 'C103',
      name: 'مؤسسة الأمان',
      type: 'مؤسسة'
    }];
    // بيانات جدول العهد (وهمية)
    custodyRows = [];
    ngOnInit() {
      // تحميل البيانات الافتراضية للجدول
      this.custodyRows = this.generateMockCustodies();
    }
    generateMockCustodies() {
      return [{
        id: 1,
        date: '2025-11-01',
        type: 'شيك',
        amount: 5000,
        client: 'الوطنية',
        user: 'أحمد'
      }, {
        id: 2,
        date: '2025-10-15',
        type: 'نقدي',
        amount: 1500,
        client: 'بنك الخليج',
        user: 'سارة'
      }, {
        id: 3,
        date: '2025-09-20',
        type: 'تحويل',
        amount: 8000,
        client: 'مؤسسة الأمان',
        user: 'محمد'
      }];
    }
    // ===================================
    // دوال الـ Lookup
    // ===================================
    openClientLookup() {
      // فتح المودال وتمرير بيانات الموكلين له
      this.lookupModal.title = 'بحث عن الموكل';
      this.lookupModal.columns = ['code', 'name', 'type'];
      this.lookupModal.data = this.clientsData;
      this.lookupModal.open();
    }
    onClientSelected(client) {
      this.selectedClientCode = client.code;
      this.selectedClientName = client.name;
      this.searchCustodies(); // البحث بعد اختيار الموكل
    }
    // ===================================
    // دوال البحث
    // ===================================
    searchCustodies() {
      console.log(`Searching custodies for client: ${this.selectedClientName} on consultant: ${this.selectedConsultant}`);
      // هنا يتم تطبيق منطق البحث الفعلي لملء custodyRows
      // (للتجربة: سنقوم بتحديث بسيط للجدول)
      this.custodyRows = this.custodyRows.filter(row => row.client.includes(this.selectedClientName) || !this.selectedClientName);
    }
    static ɵfac = function CustodySearch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustodySearch)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: CustodySearch,
      selectors: [["app-custody-search"]],
      viewQuery: function CustodySearch_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.lookupModal = _t.first);
        }
      },
      decls: 38,
      vars: 4,
      consts: [["lookupModal", ""], ["dir", "rtl", 1, "flex", "flex-col", "h-screen", "p-4", "font-sans", "text-sm", 2, "background-color", "var(--surface-ground)"], [1, "text-lg", "font-bold", "mb-4", "border-b", "pb-2", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], [1, "p-3", "rounded-lg", "shadow-md", "mb-4", "flex", "justify-between", "items-center", "border", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "flex", "items-center", "gap-3"], [1, "font-bold", 2, "color", "var(--text-color)"], ["type", "text", "placeholder", "\u0627\u062E\u062A\u0631 \u0645\u0648\u0643\u0644", "readonly", "", 1, "input", "input-sm", "input-bordered", "rounded-none", "w-64", 2, "background-color", "var(--surface-ground)", "border-color", "var(--surface-border)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", "rounded-none", 2, "background-color", "var(--surface-section)", "color", "var(--text-color)", "border-color", "var(--surface-border)", "hover", "background-color: var(--surface-hover)", 3, "click"], [1, "btn", "btn-sm", "btn-primary", "rounded-none", 3, "click"], [1, "flex", "items-center", "gap-2"], [1, "font-mono", 2, "color", "var(--primary-color)"], [1, "flex-grow", "overflow-auto", "border", "rounded-lg", "shadow-lg", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "table", "table-sm", "table-pin-rows", "w-full", "border-collapse", "text-right", "whitespace-nowrap", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [1, "w-12", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], [2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], ["style", "color: var(--text-color);", 3, "background-color", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "itemSelected"], [2, "color", "var(--text-color)"], [1, "font-mono"], [1, "font-bold", 2, "color", "var(--green-500)"], ["colspan", "6", 1, "text-center", "p-4", 2, "color", "var(--text-color-secondary)"]],
      template: function CustodySearch_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \u0643\u0644 \u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0648\u062C\u0648\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function CustodySearch_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedClientName, $event) || (ctx.selectedClientName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustodySearch_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openClientLookup());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " ... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CustodySearch_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.searchCustodies());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " \u0628\u062D\u062B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 11)(18, "table", 12)(19, "thead")(20, "tr", 13)(21, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u0627\u0644\u0631\u0642\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0639\u0647\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u0646\u0648\u0639 \u0627\u0644\u0639\u0647\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, CustodySearch_tr_34_Template, 14, 10, "tr", 16)(35, CustodySearch_tr_35_Template, 3, 0, "tr", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "app-lookup-modal", 18, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("itemSelected", function CustodySearch_Template_app_lookup_modal_itemSelected_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onClientSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedClientName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.selectedConsultant);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.custodyRows);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.custodyRows.length === 0);
        }
      },
      dependencies: [_shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__.LookupModal, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CustodySearch;
})();

/***/ })

}]);
//# sourceMappingURL=2455.js.map