"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[8540],{

/***/ 56159:
/*!***************************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/client-file-receipt/client-file-receipt.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientFileReceipt: () => (/* binding */ ClientFileReceipt)
/* harmony export */ });
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);





const _c0 = ["clientLookup"];
const _c1 = () => ["code", "name", "type"];
let ClientFileReceipt = /*#__PURE__*/(() => {
  class ClientFileReceipt {
    // الوصول للمودال
    clientLookup;
    // المتغيرات
    selectedClientName = '';
    searchText = '';
    // بيانات الموكلين (وهمية)
    clientsData = [{
      code: 'C-1001',
      name: 'الشركة الوطنية للاتصالات',
      type: 'شركات'
    }, {
      code: 'C-1002',
      name: 'بنك الكويت الوطني',
      type: 'بنوك'
    }, {
      code: 'C-1003',
      name: 'مؤسسة التمويل الحديثة',
      type: 'مؤسسات'
    }, {
      code: 'C-1004',
      name: 'شركة السيارات المتحدة',
      type: 'شركات'
    }, {
      code: 'C-1005',
      name: 'بيت التمويل الكويتي',
      type: 'بنوك'
    }];
    // فتح نافذة البحث
    openClientModal() {
      this.clientLookup.open();
    }
    // عند اختيار موكل
    onClientSelected(client) {
      this.selectedClientName = client.name;
      console.log('تم اختيار الموكل:', client);
    }
    // دوال الأزرار
    search() {
      console.log('جاري البحث عن:', this.selectedClientName);
    }
    receiveFiles() {
      console.log('تم استلام الملفات...');
    }
    static ɵfac = function ClientFileReceipt_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientFileReceipt)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ClientFileReceipt,
      selectors: [["app-client-file-receipt"]],
      viewQuery: function ClientFileReceipt_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.clientLookup = _t.first);
        }
      },
      decls: 20,
      vars: 5,
      consts: [["clientLookup", ""], [1, "flex", "flex-col", "h-screen", "font-sans", "text-sm", 2, "background-color", "var(--surface-ground)"], [1, "border-b", "p-2", "flex", "justify-between", "items-center", "shadow-sm", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [1, "btn", "btn-sm", "px-6", "rounded-sm", "font-normal", "h-8", "min-h-0", "shadow-sm", 2, "background-color", "var(--surface-hover)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], [1, "flex", "items-center", "gap-2"], [1, "btn", "btn-sm", "btn-square", "rounded-sm", "font-normal", "h-8", "min-h-0", "shadow-sm", 2, "background-color", "var(--surface-hover)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], ["type", "text", "readonly", "", 1, "input", "input-sm", "h-8", "rounded-sm", "focus:outline-none", "w-64", 2, "border-color", "var(--primary-color)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "font-bold", "px-1", 2, "color", "var(--text-color)"], [1, "border-b", "p-1", "px-4", "text-xs", "select-none", "flex", "items-center", "gap-2", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)", "color", "var(--text-color-secondary)"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", 2, "color", "var(--text-color-secondary)"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [3, "itemSelected", "title", "data", "columns"]],
      template: function ClientFileReceipt_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div")(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientFileReceipt_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.receiveFiles());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u062A\u0645 \u0627\u0633\u062A\u0644\u0627\u0645 \u0627\u0644\u0645\u0644\u0641\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientFileReceipt_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.search());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " \u0628\u062D\u062B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClientFileReceipt_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.openClientModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " ... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ClientFileReceipt_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedClientName, $event) || (ctx.selectedClientName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "path", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Drag a column header here to group by that column");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "app-lookup-modal", 11, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("itemSelected", function ClientFileReceipt_Template_app_lookup_modal_itemSelected_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onClientSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedClientName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "\u0628\u062D\u062B \u0639\u0646 \u0645\u0648\u0643\u0644")("data", ctx.clientsData)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_0__.LookupModal],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ClientFileReceipt;
})();

/***/ })

}]);
//# sourceMappingURL=8540.js.map