"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[9148],{

/***/ 45:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/address-form/address-form.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressForm: () => (/* binding */ AddressForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);




function AddressForm_tr_18_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\uD83D\uDCCE \u0639\u0631\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", item_r1.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function AddressForm_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 5)(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AddressForm_tr_18_a_8_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.workPlace);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.adStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r1.attachment);
  }
}
let AddressForm = /*#__PURE__*/(() => {
  class AddressForm {
    client;
    addresses = [];
    selectedFile = null;
    static ɵfac = function AddressForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddressForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AddressForm,
      selectors: [["app-address-form"]],
      inputs: {
        client: "client"
      },
      decls: 19,
      vars: 1,
      consts: [[1, "p-6", "rounded-xl", "shadow-md", 2, "background-color", "var(--surface-card)"], [1, "text-xl", "font-bold", "mb-6", "flex", "items-center", "gap-2", 2, "color", "var(--text-color)"], [1, "overflow-x-auto", "mt-8"], [1, "table", "table-zebra", "w-full", "text-center", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [2, "color", "var(--text-color)"], ["style", "color: var(--text-color);", 4, "ngFor", "ngForOf"], [1, "max-w-xs", "truncate"], ["target", "_blank", "style", "color: var(--primary-color, #3b82f6);", "class", "hover:underline", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "hover:underline", 2, "color", "var(--primary-color, #3b82f6)", 3, "href"]],
      template: function AddressForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \uD83C\uDFE0 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "table", 3)(5, "thead", 4)(6, "tr", 5)(7, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u0639\u0644\u0627\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0627\u0644\u0645\u0631\u0641\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AddressForm_tr_18_Template, 9, 4, "tr", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.addresses);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AddressForm;
})();

/***/ }),

/***/ 14285:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/classification-form/classification-form.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassificationForm: () => (/* binding */ ClassificationForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





const _c0 = ["actionModal"];
const _c1 = ["sectionModal"];
function ClassificationForm_li_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClassificationForm_li_24_Template_li_click_0_listener() {
      const action_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectAction(action_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const action_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](action_r3);
  }
}
function ClassificationForm_li_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClassificationForm_li_34_Template_li_click_0_listener() {
      const section_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectSection(section_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const section_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](section_r7);
  }
}
let ClassificationForm = /*#__PURE__*/(() => {
  class ClassificationForm {
    client;
    actionModal;
    sectionModal;
    actions = ['إجراء قانوني', 'مراجعة عقد', 'تحضير جلسة', 'تقديم طعن'];
    sections = ['شركات', 'أسرة', 'أفراد'];
    // Open/Close modals
    openActionModal() {
      this.actionModal.nativeElement.showModal();
    }
    openSectionModal() {
      this.sectionModal.nativeElement.showModal();
    }
    close(modal) {
      modal.close();
    }
    selectAction(action) {
      this.client.note = action;
      this.close(this.actionModal.nativeElement);
    }
    selectSection(section) {
      this.client.sector = section;
      this.close(this.sectionModal.nativeElement);
    }
    save() {
      console.log('Saved classification:', {
        action: this.client.note,
        clientStatus: this.client.registerType,
        section: this.client.sector
      });
    }
    static ɵfac = function ClassificationForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClassificationForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ClassificationForm,
      selectors: [["app-classification-form"]],
      viewQuery: function ClassificationForm_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.actionModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sectionModal = _t.first);
        }
      },
      inputs: {
        client: "client"
      },
      decls: 38,
      vars: 5,
      consts: [["actionModal", ""], ["sectionModal", ""], [1, "rounded-2xl", "shadow-lg", "p-6", "max-w-2xl", "mx-auto", 2, "background-color", "var(--surface-card)"], [1, "text-xl", "font-bold", "text-center", "mb-6", 2, "color", "var(--text-color)"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "form-control"], [1, "label", "font-semibold", 2, "color", "var(--text-color-secondary)"], ["type", "text", "readonly", "", "placeholder", "\u0627\u0636\u063A\u0637 \u0644\u0644\u0627\u062E\u062A\u064A\u0627\u0631", 1, "input", "input-bordered", "cursor-pointer", "focus:ring-2", "focus:ring-primary/50", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "click", "value"], ["type", "text", "placeholder", "\u0627\u0643\u062A\u0628 \u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0645\u064A\u0644", 1, "input", "input-bordered", "focus:ring-2", "focus:ring-primary/50", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "form-control", "md:col-span-2"], [1, "text-xs", "opacity-50", "text-center", "mt-6"], [1, "modal"], [1, "modal-box", "max-w-md", "rounded-2xl", 2, "background-color", "var(--surface-card)"], [1, "text-lg", "font-bold", "mb-4", 2, "color", "var(--text-color)"], [1, "menu", "rounded-box", "border", "max-h-60", "overflow-y-auto", 2, "width", "100% !important", "font-weight", "bold", "line-height", "1.6", "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], ["class", "transition-all cursor-pointer border-b", "style", "border-color: var(--surface-border);", 3, "click", 4, "ngFor", "ngForOf"], [1, "modal-action", "mt-4"], [1, "btn", 3, "click"], [1, "menu", "rounded-box", "border", "max-h-60", "overflow-y-auto", "w-full", "text-lg", 2, "width", "100% !important", "font-weight", "bold", "line-height", "1.6", "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "transition-all", "cursor-pointer", "border-b", 2, "border-color", "var(--surface-border)", 3, "click"], [2, "color", "var(--text-color)"]],
      template: function ClassificationForm_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \uD83D\uDCCB \u0646\u0645\u0648\u0630\u062C \u0627\u0644\u062A\u0635\u0646\u064A\u0641 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0645\u0637\u0644\u0648\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClassificationForm_Template_input_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openActionModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0645\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function ClassificationForm_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.client.registerType, $event) || (ctx.client.registerType = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0627\u0644\u0642\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClassificationForm_Template_input_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openSectionModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u064A\u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B \u0639\u0646\u062F \u0627\u0644\u0636\u063A\u0637 \u0639\u0644\u0649 \u0632\u0631 \u062D\u0641\u0638 \u0641\u064A \u0627\u0644\u0623\u0639\u0644\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dialog", 11, 0)(20, "div", 12)(21, "h3", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " \u2699\uFE0F \u0627\u062E\u062A\u0631 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "ul", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ClassificationForm_li_24_Template, 3, 1, "li", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 16)(26, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClassificationForm_Template_button_click_26_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const actionModal_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.close(actionModal_r5));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "dialog", 11, 1)(30, "div", 12)(31, "h3", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " \uD83C\uDFF7\uFE0F \u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0633\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ul", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ClassificationForm_li_34_Template, 3, 1, "li", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 16)(36, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClassificationForm_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const sectionModal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.close(sectionModal_r8));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.client.note);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.client.registerType);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.client.sector);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.actions);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sections);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ClassificationForm;
})();

/***/ }),

/***/ 17581:
/*!***************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/shared/sub-tabs/sub-tabs.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubTabs: () => (/* binding */ SubTabs)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);




function SubTabs_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SubTabs_a_1_Template_a_click_0_listener() {
      const tab_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.selectTab(tab_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", tab_r2 === ctx_r2.selectedTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tab_r2, " ");
  }
}
let SubTabs = /*#__PURE__*/(() => {
  class SubTabs {
    tabs = [];
    tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    selectedTab = '';
    selectTab(tab) {
      this.selectedTab = tab;
      this.tabChange.emit(tab);
    }
    static ɵfac = function SubTabs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SubTabs)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SubTabs,
      selectors: [["app-sub-tabs"]],
      inputs: {
        tabs: "tabs"
      },
      outputs: {
        tabChange: "tabChange"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "tabs"], ["class", "tab tab-bordered", 3, "tab-active", "click", 4, "ngFor", "ngForOf"], [1, "tab", "tab-bordered", 3, "click"]],
      template: function SubTabs_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SubTabs_a_1_Template, 2, 3, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SubTabs;
})();

/***/ }),

/***/ 24597:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/justice-portal-form/justice-portal-form.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JusticePortalForm: () => (/* binding */ JusticePortalForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





const _c0 = ["modal"];
const _c1 = () => [1, 2, 3];
function JusticePortalForm_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "2025-11-02");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u062A\u062D\u062F\u064A\u062B \u0628\u064A\u0627\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "250");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("J", row_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2);
  }
}
let JusticePortalForm = /*#__PURE__*/(() => {
  class JusticePortalForm {
    fb;
    modal;
    form;
    constructor(fb) {
      this.fb = fb;
      this.form = this.fb.group({
        code: [''],
        client: [''],
        opponent: [''],
        civil: [''],
        autoNumber: [''],
        rightNotes: [''],
        leftNotes: ['']
      });
    }
    open() {
      this.modal.nativeElement.showModal();
    }
    close() {
      this.modal.nativeElement.close();
    }
    submit() {
      console.log('Form submitted:', this.form.value);
    }
    static ɵfac = function JusticePortalForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JusticePortalForm)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: JusticePortalForm,
      selectors: [["app-justice-portal-form"]],
      viewQuery: function JusticePortalForm_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      decls: 52,
      vars: 3,
      consts: [["modal", ""], ["id", "justicePortalModal", 1, "modal"], [1, "modal-box", "max-w-5xl"], [1, "font-bold", "text-xl", "mb-4", "text-center"], [1, "grid", "grid-cols-2", "gap-6", 3, "formGroup"], [1, "grid", "grid-cols-2", "gap-4"], [1, "label", "font-semibold"], ["type", "text", "formControlName", "code", 1, "input", "input-bordered", "w-full"], ["type", "text", "formControlName", "client", 1, "input", "input-bordered", "w-full"], ["type", "text", "formControlName", "opponent", 1, "input", "input-bordered", "w-full"], ["type", "text", "formControlName", "civil", 1, "input", "input-bordered", "w-full"], ["type", "text", "formControlName", "autoNumber", 1, "input", "input-bordered", "w-full"], ["formControlName", "leftNotes", 1, "textarea", "textarea-bordered", "w-full", "h-full"], [1, "flex", "justify-center", "gap-4", "mt-6"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-error", 3, "click"], [1, "overflow-x-auto", "mt-8"], [1, "table", "table-zebra", "w-full", "text-center"], [4, "ngFor", "ngForOf"]],
      template: function JusticePortalForm_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "dialog", 1, 0)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2696\uFE0F \u0646\u0633\u062E \u0645\u0646 \u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u062F\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4)(6, "div", 5)(7, "div")(8, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div")(12, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div")(16, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0627\u0644\u062E\u0635\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div")(20, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u0627\u0644\u0645\u062F\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div")(24, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div")(28, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0639\u0627\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "textarea", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 13)(32, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JusticePortalForm_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.submit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\uD83D\uDCC4 \u0627\u0644\u0645\u0633\u062A\u062C\u062F\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JusticePortalForm_Template_button_click_34_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u21A9\uFE0F \u062A\u0631\u0627\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 16)(37, "table", 17)(38, "thead")(39, "tr")(40, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\u0645\u0633\u0644\u0633\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, JusticePortalForm_tr_51_Template, 11, 2, "tr", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return JusticePortalForm;
})();

/***/ }),

/***/ 40900:
/*!********************************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/components/last-action-modal/last-action-modal.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LastActionModal: () => (/* binding */ LastActionModal)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _last_date_modal_last_date_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../last-date-modal/last-date-modal */ 87872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 34205);







const _c0 = ["modal"];
function LastActionModal_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LastActionModal_div_5_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.selectedActionId, $event) || (ctx_r2.selectedActionId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const act_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", act_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedActionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](act_r4.name);
  }
}
function LastActionModal_div_6_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LastActionModal_div_6_tr_9_Template_tr_click_0_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.selectRow(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r6.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r6.officer);
  }
}
function LastActionModal_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "table", 11)(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0627\u0644\u0648\u0635\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LastActionModal_div_6_tr_9_Template, 5, 2, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.selectedData);
  }
}
let LastActionModal = /*#__PURE__*/(() => {
  class LastActionModal {
    modal;
    dateModal;
    actionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    actions = [{
      id: 1,
      name: 'إجراء تسليم'
    }, {
      id: 2,
      name: 'إجراء إخطار'
    }, {
      id: 3,
      name: 'إجراء تنفيذ'
    }];
    selectedActionId = null;
    selectedRow = null;
    // بيانات تجريبية
    dataMap = {
      1: [{
        id: 101,
        desc: 'تم التسليم للمدعي',
        officer: 'محمد علي'
      }, {
        id: 102,
        desc: 'لم يتم التسليم',
        officer: 'سلمان عبدالله'
      }],
      2: [{
        id: 201,
        desc: 'تم الإخطار بالبريد',
        officer: 'عبدالعزيز فهد'
      }],
      3: [{
        id: 301,
        desc: 'تم التنفيذ الميداني',
        officer: 'نايف سالم'
      }, {
        id: 302,
        desc: 'قيد التنفيذ',
        officer: 'ناصر راشد'
      }]
    };
    get selectedData() {
      return this.selectedActionId ? this.dataMap[this.selectedActionId] : [];
    }
    open() {
      this.modal.nativeElement.showModal();
    }
    close() {
      this.modal.nativeElement.close();
    }
    selectRow(row) {
      this.actionSelected.emit(row.desc);
      this.close();
    }
    static ɵfac = function LastActionModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LastActionModal)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LastActionModal,
      selectors: [["app-last-action-modal"]],
      viewQuery: function LastActionModal_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_last_date_modal_last_date_modal__WEBPACK_IMPORTED_MODULE_3__.DateModal, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dateModal = _t.first);
        }
      },
      outputs: {
        actionSelected: "actionSelected"
      },
      decls: 10,
      vars: 2,
      consts: [["modal", ""], [1, "modal"], [1, "modal-box"], [1, "font-bold", "text-lg", "mb-3"], ["class", "flex items-center gap-2 mb-2", 4, "ngFor", "ngForOf"], ["class", "mt-4", 4, "ngIf"], [1, "modal-action"], [1, "btn", 3, "click"], [1, "flex", "items-center", "gap-2", "mb-2"], ["type", "radio", "name", "action", 3, "ngModelChange", "value", "ngModel"], [1, "mt-4"], [1, "table", "table-sm", "w-full"], ["class", "cursor-pointer hover:bg-gray-100", 3, "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", "hover:bg-gray-100", 3, "click"]],
      template: function LastActionModal_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dialog", 1, 0)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDD53 \u0627\u062E\u062A\u0631 \u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LastActionModal_div_5_Template, 4, 3, "div", 4)(6, LastActionModal_div_6_Template, 10, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LastActionModal_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.actions);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedActionId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".radio[_ngcontent-%COMP%] {\n  accent-color: #2563eb; \n\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-in-out;\n}\n\np[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL3BhZ2VzL21haW4vcGFnZXMvY2xpZW50cy1wYWdlL2NvbXBvbmVudHMvbGFzdC1hY3Rpb24tbW9kYWwvbGFzdC1hY3Rpb24tbW9kYWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCLEVBQUUsa0JBQWtCO0FBQzNDOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvIHtcclxuICBhY2NlbnQtY29sb3I6ICMyNTYzZWI7IC8qIMOZwoTDmcKIw5nChiDDmMKjw5jCssOYwrHDmcKCIMOYwqzDmcKFw5nCisOZwoQgKi9cclxufVxyXG5cclxuLm1vZGFsLWJveCB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbnAge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
      changeDetection: 0
    });
  }
  return LastActionModal;
})();

/***/ }),

/***/ 44941:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/claim-value/claim-value.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClaimValue: () => (/* binding */ ClaimValue)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




function ClaimValue_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 5)(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td")(7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimValue_tr_14_Template_button_click_7_listener() {
      const claim_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.openClaim(claim_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \uD83D\uDD0D Open ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const claim_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](claim_r2.statement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 2, claim_r2.amount, "1.2-2"));
  }
}
let ClaimValue = /*#__PURE__*/(() => {
  class ClaimValue {
    client;
    claims = [{
      statement: 'مطالبة بأتعاب محاماة',
      amount: 250.0
    }, {
      statement: 'مطالبة بتعويض مادي',
      amount: 1200.5
    }, {
      statement: 'مطالبة بمصاريف قضائية',
      amount: 480.75
    }];
    newClaim = {
      statement: '',
      amount: 0
    };
    addClaim() {
      this.claims.push({
        ...this.newClaim
      });
      this.newClaim = {
        statement: '',
        amount: 0
      };
    }
    openClaim(claim) {
      alert(`تم فتح المطالبة:\n\n${claim.statement}\nالمبلغ: ${claim.amount} د.ك`);
    }
    static ɵfac = function ClaimValue_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClaimValue)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ClaimValue,
      selectors: [["app-claim-value"]],
      inputs: {
        client: "client"
      },
      decls: 15,
      vars: 1,
      consts: [[1, "p-6", "rounded-xl", "shadow-md", 2, "background-color", "var(--surface-card)"], [1, "text-xl", "font-bold", "mb-6", "flex", "items-center", "gap-2", 2, "color", "var(--text-color)"], [1, "overflow-x-auto"], [1, "table", "table-zebra", "w-full", "text-center", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [2, "color", "var(--text-color)"], ["style", "color: var(--text-color);", 4, "ngFor", "ngForOf"], [1, "max-w-xs", "truncate"], [1, "btn", "btn-sm", "btn-accent", 3, "click"]],
      template: function ClaimValue_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDCB0 \u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "table", 3)(5, "thead", 4)(6, "tr", 5)(7, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0627\u0644\u0628\u064A\u0627\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u0627\u0644\u0645\u0628\u0644\u063A (\u062F.\u0643)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ClaimValue_tr_14_Template, 9, 5, "tr", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.claims);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ClaimValue;
})();

/***/ }),

/***/ 47928:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/clients-table/main-tabs.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainTabs: () => (/* binding */ MainTabs)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);



function MainTabs_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 9)(2, "table", 10)(3, "thead")(4, "tr", 11)(5, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u062A\u0627\u0631\u064A\u062E \u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function MainTabs_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0627\u0641\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainTabs_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0627\u0641\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062F\u0627\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainTabs_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0627\u0644\u0627\u0631\u0642\u0627\u0645 \u0627\u0644\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainTabs_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainTabs_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0627\u0644\u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainTabs_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0633\u062C\u0644 \u0627\u0644\u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainTabs_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u062F\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
let MainTabs = /*#__PURE__*/(() => {
  class MainTabs {
    activeTab = 'procedures';
    cases = [];
    static ɵfac = function MainTabs_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MainTabs)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainTabs,
      selectors: [["app-main-tabs"]],
      decls: 33,
      vars: 26,
      consts: [[1, "card", 2, "background-color", "var(--surface-card)"], [1, "card-header", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [2, "color", "var(--text-color)"], [1, "card-body", 2, "background-color", "var(--surface-card)"], [1, "tabs", 2, "border-color", "var(--surface-border)"], [1, "tab", "tab-bordered", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], [1, "mt-4"], [4, "ngIf"], ["class", "page-section", "style", "color: var(--text-color);", 4, "ngIf"], [1, "table-container"], [1, "table", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [1, "page-section", 2, "color", "var(--text-color)"]],
      template: function MainTabs_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0644\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_6_listener() {
            return ctx.activeTab = "procedures";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0627\u0644\u0627\u062C\u0631\u0627\u0621\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_8_listener() {
            return ctx.activeTab = "statement";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0627\u0644\u0627\u0641\u0627\u062F\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_10_listener() {
            return ctx.activeTab = "comm_statements";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0627\u0641\u0627\u062F\u0627\u062A \u0627\u0644\u0627\u062A\u0635\u0627\u0644\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_12_listener() {
            return ctx.activeTab = "trader_statements";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0627\u0641\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062F\u0627\u0648\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_14_listener() {
            return ctx.activeTab = "autoNumbers";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0627\u0644\u0627\u0631\u0642\u0627\u0645 \u0627\u0644\u0627\u0644\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_16_listener() {
            return ctx.activeTab = "results_search";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_18_listener() {
            return ctx.activeTab = "records";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0627\u0644\u0633\u062C\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_20_listener() {
            return ctx.activeTab = "secrtaria_records";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0633\u062C\u0644 \u0627\u0644\u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainTabs_Template_a_click_22_listener() {
            return ctx.activeTab = "justice_gate";
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u062F\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MainTabs_div_25_Template, 24, 0, "div", 7)(26, MainTabs_div_26_Template, 3, 0, "div", 8)(27, MainTabs_div_27_Template, 3, 0, "div", 8)(28, MainTabs_div_28_Template, 3, 0, "div", 8)(29, MainTabs_div_29_Template, 3, 0, "div", 8)(30, MainTabs_div_30_Template, 3, 0, "div", 8)(31, MainTabs_div_31_Template, 3, 0, "div", 8)(32, MainTabs_div_32_Template, 3, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "procedures");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "statement");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "comm_statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "trader_statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "autoNumbers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "results_search");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "records");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "secrtaria_records");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("tab-active", ctx.activeTab === "justice_gate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "statement" || ctx.activeTab === "procedures");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "comm_statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "trader_statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "autoNumbers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "results_search");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "records");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "secrtaria_records");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTab === "justice_gate");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return MainTabs;
})();

/***/ }),

/***/ 59148:
/*!**********************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/clients-page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientsPage: () => (/* binding */ ClientsPage)
/* harmony export */ });
/* harmony import */ var _shared_sub_tabs_sub_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/sub-tabs/sub-tabs */ 17581);
/* harmony import */ var _clients_table_main_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients-table/main-tabs */ 47928);
/* harmony import */ var _forms_work_form_work_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms/work-form/work-form */ 85817);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _forms_main_form_main_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms/main-form/main-form */ 76989);
/* harmony import */ var _components_last_action_modal_last_action_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/last-action-modal/last-action-modal */ 40900);
/* harmony import */ var _components_last_date_modal_last_date_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/last-date-modal/last-date-modal */ 87872);
/* harmony import */ var _components_next_action_modal_next_action_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/next-action-modal/next-action-modal */ 99148);
/* harmony import */ var _components_next_date_modal_next_date_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/next-date-modal/next-date-modal */ 87676);
/* harmony import */ var _forms_justice_portal_form_justice_portal_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms/justice-portal-form/justice-portal-form */ 24597);
/* harmony import */ var _forms_classification_form_classification_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forms/classification-form/classification-form */ 14285);
/* harmony import */ var _forms_judgment_form_judgment_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms/judgment-form/judgment-form */ 97581);
/* harmony import */ var _forms_address_form_address_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./forms/address-form/address-form */ 45);
/* harmony import */ var _forms_session_form_session_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forms/session-form/session-form */ 95933);
/* harmony import */ var _forms_claim_value_claim_value__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/claim-value/claim-value */ 44941);
/* harmony import */ var _forms_attachments_form_attachments_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/attachments-form/attachments-form */ 96017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _finance_services_ClientService__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../finance/services/ClientService */ 95776);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../shared/services/sweet-alert.service */ 31365);






















function ClientsPage_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "span", 82);
  }
}
function ClientsPage_i_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "i", 83);
  }
}
function ClientsPage_span_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "span", 84);
  }
}
function ClientsPage_app_main_form_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-main-form", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("client", ctx_r1.client);
  }
}
function ClientsPage_app_work_form_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-work-form", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("client", ctx_r1.client);
  }
}
function ClientsPage_app_classification_form_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-classification-form", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("client", ctx_r1.client);
  }
}
function ClientsPage_app_judgment_form_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-judgment-form", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("client", ctx_r1.client);
  }
}
function ClientsPage_app_address_form_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-address-form", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("client", ctx_r1.client);
  }
}
function ClientsPage_app_session_form_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-session-form", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("client", ctx_r1.client);
  }
}
function ClientsPage_app_claim_value_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-claim-value", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("client", ctx_r1.client);
  }
}
function ClientsPage_app_attachments_form_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "app-attachments-form", 85);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("client", ctx_r1.client);
  }
}
function ClientsPage_tr_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr")(1, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "td", 44)(4, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_tr_118_Template_input_ngModelChange_4_listener($event) {
      const fd_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](fd_r4.downPayment, $event) || (fd_r4.downPayment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td", 44)(6, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_tr_118_Template_input_ngModelChange_6_listener($event) {
      const fd_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](fd_r4.finalPayment, $event) || (fd_r4.finalPayment = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td", 44)(8, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_tr_118_Template_input_ngModelChange_8_listener($event) {
      const fd_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r3).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](fd_r4.collectionCommission, $event) || (fd_r4.collectionCommission = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fd_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](fd_r4.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", fd_r4.downPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", fd_r4.finalPayment);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", fd_r4.collectionCommission);
  }
}
function ClientsPage_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 88)(1, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_div_127_Template_input_ngModelChange_1_listener($event) {
      const contact_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](contact_r6.phone, $event) || (contact_r6.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_div_127_Template_input_ngModelChange_2_listener($event) {
      const contact_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](contact_r6.relation, $event) || (contact_r6.relation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ClientsPage_div_127_Template_button_click_3_listener() {
      const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx_r1.removeContact(i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const contact_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", contact_r6.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", contact_r6.relation);
  }
}
function ClientsPage_div_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0642\u0627\u0645 \u0645\u0636\u0627\u0641\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
  }
}
let ClientsPage = /*#__PURE__*/(() => {
  class ClientsPage {
    fb;
    clientService;
    swal;
    lastActionModal;
    lastActionDateModal;
    nextActionModal;
    nextActionDateModal;
    justicePortal;
    actionsForm;
    searchCode = '';
    loading = false;
    constructor(fb, clientService, swal) {
      this.fb = fb;
      this.clientService = clientService;
      this.swal = swal;
      this.actionsForm = this.fb.group({
        lastAction: [''],
        lastActionDate: [''],
        nextAction: [''],
        nextActionDate: [''],
        fileLocation: [''],
        fileNumber: [''],
        summary: [''],
        notes: ['']
      });
    }
    selectedTab = 'الرئيسية';
    subTabs = ['الرئيسية', 'التصنيف', 'جهة العمل', 'منطوق الحكم', 'العنوان', 'الجلسات', 'الرسوم', 'قيمة المطالبة', 'المرفقات', 'الإجراءات'];
    client = {
      code: 0,
      name: '',
      cid: '',
      address: '',
      nationality: '',
      work: '',
      membership: '',
      companyEmail: '',
      companyFax: '',
      companyRegister: '',
      partner1: '',
      partner2: '',
      partner3: '',
      registerType: '',
      note: '',
      contractNo: '',
      department: '',
      deptCode: undefined,
      legalPlaintiff: '',
      contractDetails: '',
      patchNo: '',
      dateFinished: undefined,
      deptAmount: undefined,
      lawyerUser: undefined,
      courtUser: undefined,
      mdUser: undefined,
      legalAdvisorUser: undefined,
      phone1: '',
      phone1Owner: '',
      phone2: '',
      phone2Owner: '',
      financialAmount: undefined,
      financialType: '',
      contacts: [],
      financialDetails: [{
        category: 'اتعاب'
      }, {
        category: 'ودي'
      }, {
        category: 'تنفيذ'
      }, {
        category: 'قضائي مدنى'
      }, {
        category: 'قضائي مدعى عليه'
      }, {
        category: 'خبراء'
      }, {
        category: 'اجراء'
      }]
    };
    addContact() {
      if (!this.client.contacts) this.client.contacts = [];
      this.client.contacts.push({
        phone: '',
        relation: ''
      });
    }
    removeContact(index) {
      if (this.client.contacts) {
        this.client.contacts.splice(index, 1);
      }
    }
    form = {
      caseNumber: '',
      date: '',
      workSource: '',
      notes: ''
    };
    fees = {
      claimValue: 0,
      feesValue: 0,
      lawValue: 0
    };
    feesTable = [{
      name: 'رسوم تسجيل',
      value: 150
    }, {
      name: 'رسوم محكمة',
      value: 300
    }];
    totals = {
      paid: 450,
      discount: 50,
      remaining: 100
    };
    onSubTabChange(tab) {
      this.selectedTab = tab;
    }
    onSearch() {
      if (!this.searchCode) return;
      this.loading = true;
      this.clientService.getClientByCode(Number(this.searchCode)).subscribe({
        next: data => {
          this.client = data;
          this.loading = false;
          this.swal.success({
            title: 'تم العثور',
            text: `تم تحميل بيانات الموكل: ${data.name}`
          });
        },
        error: err => {
          this.loading = false;
          this.swal.error({
            title: 'خطأ',
            text: 'الموكل غير موجود أو حدث خطأ في النظام'
          });
        }
      });
    }
    save() {
      if (!this.client.id) {
        this.swal.error({
          title: 'خطأ',
          text: 'لا يمكن حفظ بيانات موكل غير موجود'
        });
        return;
      }
      this.loading = true;
      this.clientService.updateClient(this.client.id, this.client).subscribe({
        next: () => {
          this.loading = false;
          this.swal.success({
            title: 'تم الحفظ',
            text: 'تم تحديث بيانات الموكل بنجاح'
          });
        },
        error: err => {
          this.loading = false;
          this.swal.error({
            title: 'فشل الحفظ',
            text: err.error?.message || 'حدث خطأ أثناء الحفظ'
          });
        }
      });
    }
    openLastActionForm() {
      this.lastActionModal.open();
    }
    openNextActionForm() {
      this.nextActionModal.open();
    }
    setLastAction(action) {
      this.actionsForm.patchValue({
        lastAction: action.desc
      });
    }
    setLastActionDate(date) {
      this.actionsForm.patchValue({
        lastActionDate: date
      });
    }
    setNextAction(action) {
      this.actionsForm.patchValue({
        nextAction: action.desc
      });
    }
    setNextActionDate(date) {
      this.actionsForm.patchValue({
        nextActionDate: date
      });
    }
    onLastActionSelected(action) {
      this.actionsForm.patchValue({
        lastAction: action
      });
      this.lastActionModal.close();
      setTimeout(() => this.lastActionDateModal.open(), 200);
    }
    onLastDateSelected(date) {
      this.actionsForm.patchValue({
        lastActionDate: date
      });
      this.lastActionDateModal.close();
      setTimeout(() => this.nextActionModal.open(), 200);
    }
    onNextActionSelected(action) {
      this.actionsForm.patchValue({
        nextAction: action
      });
      this.nextActionModal.close();
      setTimeout(() => this.nextActionDateModal.open(), 200);
    }
    onNextDateSelected(date) {
      this.actionsForm.patchValue({
        nextActionDate: date
      });
      const {
        lastAction,
        lastActionDate,
        nextAction,
        nextActionDate,
        fileLocation
      } = this.actionsForm.value;
      const summaryText = `آخر إجراء: ${lastAction || '-'} بتاريخ ${lastActionDate || '-'}، 
الإجراء القادم: ${nextAction || '-'} بتاريخ ${nextActionDate || '-'}، 
مكان الملف: ${fileLocation || '-'}`;
      this.actionsForm.patchValue({
        summary: summaryText,
        notes: summaryText
      });
    }
    static ɵfac = function ClientsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_finance_services_ClientService__WEBPACK_IMPORTED_MODULE_19__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_20__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({
      type: ClientsPage,
      selectors: [["app-clients-page"]],
      viewQuery: function ClientsPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_components_last_action_modal_last_action_modal__WEBPACK_IMPORTED_MODULE_6__.LastActionModal, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_components_last_date_modal_last_date_modal__WEBPACK_IMPORTED_MODULE_7__.DateModal, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_components_next_action_modal_next_action_modal__WEBPACK_IMPORTED_MODULE_8__.NextActionModal, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_components_next_date_modal_next_date_modal__WEBPACK_IMPORTED_MODULE_9__.NextDateModal, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_forms_justice_portal_form_justice_portal_form__WEBPACK_IMPORTED_MODULE_10__.JusticePortalForm, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.lastActionModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.lastActionDateModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.nextActionModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.nextActionDateModal = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.justicePortal = _t.first);
        }
      },
      decls: 220,
      vars: 50,
      consts: [["lastActionModal", ""], ["lastDateModal", ""], ["nextActionModal", ""], ["nextDateModal", ""], ["justicePortal", ""], [1, "flex", "flex-col", "gap-4", "p-4"], [1, "card", "shadow-lg", "p-6", "mb-4", "flex", "items-center", "justify-between", "gap-4", 2, "background", "rgba(255, 255, 255, 0.05)", "backdrop-filter", "blur(10px)", "border", "1px solid rgba(255, 255, 255, 0.1)", "border-radius", "1.5rem"], [1, "flex", "items-center", "gap-4", "w-full"], [1, "relative", "w-1/3"], [1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-3"], [1, "pi", "pi-search", "text-gray-400"], ["type", "text", "placeholder", "\u0627\u0628\u062D\u062B \u0628\u0643\u0648\u062F \u0627\u0644\u0645\u0648\u0643\u0644...", 1, "input", "input-bordered", "w-full", "pr-10", "focus:ring-2", "focus:ring-primary", "transition-all", "rounded-xl", 2, "background", "var(--surface-card)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-primary", "px-8", "rounded-xl", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["class", "loading loading-spinner", 4, "ngIf"], ["class", "pi pi-search", 4, "ngIf"], [3, "tabChange", "tabs"], [1, "flex", "gap-6"], [1, "w-2/3", "flex", "flex-col", "gap-4"], [1, "card", "shadow", "p-4", 2, "background-color", "var(--surface-card)", "border-radius", "1rem"], [1, "flex", "justify-between", "items-center", "mb-4"], [1, "text-xl", "font-bold", 2, "color", "var(--text-color)"], [1, "pi", "pi-user-edit", "ml-2"], [1, "badge", "badge-primary", "py-3", "px-4", "rounded-lg"], [1, "grid", "grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "flex", "flex-col", "gap-1"], [1, "text-sm", "font-semibold", "opacity-70"], ["type", "text", 1, "input", "input-bordered", "w-full", "bg-opacity-50", 3, "ngModelChange", "ngModel"], ["type", "number", 1, "input", "input-bordered", "w-full", "bg-opacity-50", 3, "ngModelChange", "ngModel"], [1, "flex", "flex-col", "gap-1", "col-span-2"], ["type", "email", 1, "input", "input-bordered", "w-full", "bg-opacity-50", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "mt-4"], [1, "btn", "btn-primary", "btn-sm", "rounded-lg", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["class", "loading loading-spinner loading-xs", 4, "ngIf"], [1, "pi", "pi-save"], [1, "card", "shadow", "p-6", "w-full", 2, "background-color", "var(--surface-card)", "border-radius", "1rem", "min-height", "400px"], [3, "ngSwitch"], [3, "client", 4, "ngSwitchCase"], [1, "w-1/3", "flex", "flex-col", "gap-4"], [1, "card", "shadow", "p-4", 2, "background-color", "var(--surface-card)"], [1, "font-semibold", "mb-3", "flex", "justify-between", "items-center", 2, "color", "var(--text-color)"], [1, "text-xs", "opacity-60"], [1, "overflow-x-auto"], [1, "table", "table-compact", "w-full", "text-xs", 2, "color", "var(--text-color)"], [1, "text-center", "opacity-70"], [1, "p-1"], [4, "ngFor", "ngForOf"], [1, "flex", "justify-between", "items-center", "mb-3"], [1, "font-semibold", 2, "color", "var(--text-color)"], [1, "btn", "btn-ghost", "btn-xs", "text-primary", 3, "click"], [1, "pi", "pi-plus-circle"], [1, "space-y-2", "max-h-60", "overflow-y-auto", "pr-2"], ["class", "flex items-center gap-2 p-2 rounded-lg border", "style", "border-color: var(--surface-border); background-color: var(--surface-ground);", 4, "ngFor", "ngForOf"], ["class", "text-center py-4 text-xs opacity-50", 4, "ngIf"], [1, "p-4", "rounded-xl", "shadow", "mt-6", 2, "background-color", "var(--surface-section)"], [1, "text-lg", "font-semibold", "mb-2", 2, "color", "var(--text-color)"], [1, "table", "table-zebra", "w-full", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [2, "color", "var(--text-color)"], [2, "background-color", "var(--surface-card)", "color", "var(--text-color)"], [2, "background-color", "var(--surface-ground)", "color", "var(--text-color)"], [1, "mt-4", "border-t", "pt-3", "text-sm", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], [1, "font-semibold"], [1, "font-semibold", 2, "color", "var(--red-500)"], [1, "p-3", "rounded-xl", "shadow", "mt-2", 2, "background-color", "var(--surface-card)"], [1, "text-lg", "font-semibold", "mb-4", 2, "color", "var(--text-color)"], [1, "grid", "grid-cols-2", "gap-4", 3, "formGroup"], [1, "label", "font-semibold", 2, "color", "var(--text-color)"], ["type", "text", "formControlName", "lastAction", "readonly", "", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["type", "date", "formControlName", "lastActionDate", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["type", "text", "formControlName", "nextAction", "readonly", "", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["type", "date", "formControlName", "nextActionDate", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["type", "text", "formControlName", "fileLocation", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["type", "text", "formControlName", "fileNumber", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], [1, "mt-4"], ["formControlName", "summary", 1, "textarea", "textarea-bordered", "w-full", "h-24", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["formControlName", "notes", 1, "textarea", "textarea-bordered", "w-full", "h-24", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], [1, "flex", "justify-center", "gap-4", "mt-6"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-accent", 3, "click"], [3, "actionSelected"], [3, "dateSelected"], [1, "loading", "loading-spinner"], [1, "pi", "pi-search"], [1, "loading", "loading-spinner", "loading-xs"], [3, "client"], [1, "p-1", "font-bold"], ["type", "number", 1, "input", "input-ghost", "input-xs", "w-12", "p-0", "text-center", "border-b", "rounded-none", 2, "border-color", "var(--surface-border)", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2", "p-2", "rounded-lg", "border", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)"], ["type", "text", "placeholder", "\u0627\u0644\u0631\u0642\u0645", 1, "input", "input-ghost", "input-xs", "w-full", 2, "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u0627\u0644\u0635\u0644\u0629", 1, "input", "input-ghost", "input-xs", "w-20", 2, "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-ghost", "btn-xs", "text-error", "p-0", 3, "click"], [1, "pi", "pi-times"], [1, "text-center", "py-4", "text-xs", "opacity-50"]],
      template: function ClientsPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](5, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.searchCode, $event) || (ctx.searchCode = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup.enter", function ClientsPage_Template_input_keyup_enter_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.onSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ClientsPage_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.onSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, ClientsPage_span_8_Template, 1, 0, "span", 13)(9, ClientsPage_i_9_Template, 1, 0, "i", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10, " \u0628\u062D\u062B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "app-sub-tabs", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("tabChange", function ClientsPage_Template_app_sub_tabs_tabChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.onSubTabChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 16)(13, "div", 17)(14, "div", 18)(15, "div", 19)(16, "h2", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 23)(22, "div", 24)(23, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.name, $event) || (ctx.client.name = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 24)(27, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A (CID)");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.cid, $event) || (ctx.client.cid = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 24)(31, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](32, "\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.nationality, $event) || (ctx.client.nationality = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "div", 24)(35, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](36, "\u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.work, $event) || (ctx.client.work = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "div", 24)(39, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](40, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.phone1, $event) || (ctx.client.phone1 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "div", 24)(43, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](44, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.phone2, $event) || (ctx.client.phone2 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "div", 24)(47, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](48, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_49_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.contractNumber, $event) || (ctx.client.contractNumber = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "div", 24)(51, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52, "\u0633\u0646\u0629 \u0627\u0644\u0639\u0642\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.contractYear, $event) || (ctx.client.contractYear = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "div", 28)(55, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](56, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](57, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.address, $event) || (ctx.client.address = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "div", 24)(59, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](60, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](61, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_61_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.companyEmail, $event) || (ctx.client.companyEmail = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "div", 24)(63, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](64, "\u0641\u0627\u0643\u0633 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_65_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.companyFax, $event) || (ctx.client.companyFax = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "div", 24)(67, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](68, "\u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](69, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_69_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.companyRegister, $event) || (ctx.client.companyRegister = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](70, "div", 24)(71, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](72, "\u0627\u0644\u0634\u0631\u064A\u0643 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](73, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_73_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.partner1, $event) || (ctx.client.partner1 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](74, "div", 24)(75, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](76, "\u0627\u0644\u0634\u0631\u064A\u0643 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](77, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_77_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.partner2, $event) || (ctx.client.partner2 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](78, "div", 24)(79, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](80, "\u0627\u0644\u0634\u0631\u064A\u0643 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](81, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayListener"]("ngModelChange", function ClientsPage_Template_input_ngModelChange_81_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayBindingSet"](ctx.client.partner3, $event) || (ctx.client.partner3 = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](82, "div", 30)(83, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ClientsPage_Template_button_click_83_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](84, ClientsPage_span_84_Template, 1, 0, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](85, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](86, " \u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](87, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](88, 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](89, ClientsPage_app_main_form_89_Template, 1, 1, "app-main-form", 36)(90, ClientsPage_app_work_form_90_Template, 1, 1, "app-work-form", 36)(91, ClientsPage_app_classification_form_91_Template, 1, 1, "app-classification-form", 36)(92, ClientsPage_app_judgment_form_92_Template, 1, 1, "app-judgment-form", 36)(93, ClientsPage_app_address_form_93_Template, 1, 1, "app-address-form", 36)(94, ClientsPage_app_session_form_94_Template, 1, 1, "app-session-form", 36)(95, ClientsPage_app_claim_value_95_Template, 1, 1, "app-claim-value", 36)(96, ClientsPage_app_attachments_form_96_Template, 1, 1, "app-attachments-form", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](97, "div", 37)(98, "div", 38)(99, "h3", 39)(100, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](101, "\uD83D\uDCCA \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0646\u0633\u0628 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](102, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](104, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](105, "div", 41)(106, "table", 42)(107, "thead")(108, "tr", 43)(109, "th", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](110, "\u0627\u0644\u0641\u0626\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](111, "th", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](112, "\u0645\u0642\u062F\u0645 %");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](113, "th", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](114, "\u0645\u0624\u062E\u0631 %");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](115, "th", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](116, "\u0639\u0645\u0648\u0644\u0629 %");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](117, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](118, ClientsPage_tr_118_Template, 9, 4, "tr", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](119, "div", 38)(120, "div", 46)(121, "h3", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](122, "\uD83D\uDCDE \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u062A\u0648\u0627\u0635\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](123, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ClientsPage_Template_button_click_123_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.addContact());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](124, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](125, " \u0625\u0636\u0627\u0641\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](126, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](127, ClientsPage_div_127_Template, 5, 2, "div", 51)(128, ClientsPage_div_128_Template, 2, 0, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](129, "div", 53)(130, "h3", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](131, "\uD83D\uDCB0 \u0627\u0644\u0631\u0633\u0648\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](132, "table", 55)(133, "thead")(134, "tr", 56)(135, "th", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](136, "\u0627\u0644\u0628\u0646\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](137, "th", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](138, "\u0627\u0644\u0642\u064A\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](139, "tbody")(140, "tr", 58)(141, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](142, "\u0631\u0633\u0648\u0645 \u062A\u0633\u062C\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](143, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](144, "150");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](145, "tr", 59)(146, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](147, "\u0631\u0633\u0648\u0645 \u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](148, "td");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](149, "300");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](150, "div", 60)(151, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](152, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062F\u062F: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](153, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](154);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](155, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](156, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](157, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u062E\u0641\u064A\u0636: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](158, "span", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](159);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](160, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](161, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](162, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](163, "span", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](164);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](165, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](166, "div", 63)(167, "h3", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](168, "\uD83D\uDCCB \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](169, "form", 65)(170, "div")(171, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](172, "\u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](173, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](174, "div")(175, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](176, "\u062A\u0627\u0631\u064A\u062E \u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](177, "input", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](178, "div")(179, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](180, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](181, "input", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](182, "div")(183, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](184, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](185, "input", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](186, "div")(187, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](188, "\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u0644\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](189, "input", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](190, "div")(191, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](192, "\u0631\u0642\u0645 \u0627\u0644\u0645\u0644\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](193, "input", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](194, "div", 73)(195, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](196, "\u0645\u0644\u062E\u0635 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](197, "textarea", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](198, "div", 73)(199, "label", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](200, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](201, "textarea", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](202, "div", 76)(203, "button", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ClientsPage_Template_button_click_203_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.openLastActionForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](204, "\uD83D\uDD53 \u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](205, "button", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ClientsPage_Template_button_click_205_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](206, "\uD83D\uDCBE \u062D\u0641\u0638 \u0627\u0644\u0625\u0641\u0627\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](207, "button", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function ClientsPage_Template_button_click_207_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            const justicePortal_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](219);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](justicePortal_r8.open());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](208, "\u2696\uFE0F \u0646\u0633\u062E \u0645\u0646 \u0628\u0648\u0627\u0628\u0629 \u0627\u0644\u0639\u062F\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](209, "app-main-tabs");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](210, "app-last-action-modal", 80, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("actionSelected", function ClientsPage_Template_app_last_action_modal_actionSelected_210_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.onLastActionSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](212, "app-date-modal", 81, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("dateSelected", function ClientsPage_Template_app_date_modal_dateSelected_212_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.onLastDateSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](214, "app-next-action-modal", 80, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("actionSelected", function ClientsPage_Template_app_next_action_modal_actionSelected_214_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.onNextActionSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](216, "app-next-date-modal", 81, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("dateSelected", function ClientsPage_Template_app_next_date_modal_dateSelected_216_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵresetView"](ctx.onNextDateSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](218, "app-justice-portal-form", null, 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.searchCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("tabs", ctx.subTabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0643\u0644: ", ctx.client.name || "---", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u0643\u0648\u062F: ", ctx.client.code || "---");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.cid);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.nationality);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.work);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.phone1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.phone2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.contractNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.contractYear);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.companyEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.companyFax);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.companyRegister);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.partner1);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.partner2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtwoWayProperty"]("ngModel", ctx.client.partner3);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.loading || !ctx.client.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitch", ctx.selectedTab);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "\u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "\u0645\u0646\u0637\u0648\u0642 \u0627\u0644\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "\u0627\u0644\u062C\u0644\u0633\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", "\u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](104, 41, ctx.client.financialAmount, "1.2-2"));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.client.financialDetails);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.client.contacts);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !(ctx.client.contacts == null ? null : ctx.client.contacts.length));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](155, 44, ctx.totals.paid));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](160, 46, ctx.totals.discount));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](165, 48, ctx.totals.remaining));
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.actionsForm);
        }
      },
      dependencies: [_shared_sub_tabs_sub_tabs__WEBPACK_IMPORTED_MODULE_0__.SubTabs, _clients_table_main_tabs__WEBPACK_IMPORTED_MODULE_1__.MainTabs, _forms_work_form_work_form__WEBPACK_IMPORTED_MODULE_2__.WorkForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _forms_main_form_main_form__WEBPACK_IMPORTED_MODULE_5__.MainForm, _components_last_action_modal_last_action_modal__WEBPACK_IMPORTED_MODULE_6__.LastActionModal, _components_last_date_modal_last_date_modal__WEBPACK_IMPORTED_MODULE_7__.DateModal, _components_next_date_modal_next_date_modal__WEBPACK_IMPORTED_MODULE_9__.NextDateModal, _components_next_action_modal_next_action_modal__WEBPACK_IMPORTED_MODULE_8__.NextActionModal, _forms_justice_portal_form_justice_portal_form__WEBPACK_IMPORTED_MODULE_10__.JusticePortalForm, _forms_classification_form_classification_form__WEBPACK_IMPORTED_MODULE_11__.ClassificationForm, _forms_judgment_form_judgment_form__WEBPACK_IMPORTED_MODULE_12__.JudgmentForm, _forms_address_form_address_form__WEBPACK_IMPORTED_MODULE_13__.AddressForm, _forms_session_form_session_form__WEBPACK_IMPORTED_MODULE_14__.SessionForm, _forms_attachments_form_attachments_form__WEBPACK_IMPORTED_MODULE_16__.AttachmentsForm, _forms_claim_value_claim_value__WEBPACK_IMPORTED_MODULE_15__.ClaimValue, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ClientsPage;
})();

/***/ }),

/***/ 76989:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/main-form/main-form.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainForm: () => (/* binding */ MainForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);




let MainForm = /*#__PURE__*/(() => {
  class MainForm {
    client;
    static ɵfac = function MainForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MainForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: MainForm,
      selectors: [["app-main-form"]],
      inputs: {
        client: "client"
      },
      decls: 53,
      vars: 11,
      consts: [[1, "card", 2, "background-color", "var(--surface-card)"], [1, "text-lg", "font-semibold", "mb-3", 2, "color", "var(--text-color)"], [1, "grid", "grid-cols-2", "gap-6"], [1, "space-y-4"], [1, "mb-1"], [1, "text-sm", 2, "color", "var(--text-color-secondary)"], ["type", "text", "name", "sector", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "legalClaimant", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "dateFinished", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "work", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "membership", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "text-lg", "font-semibold", "mb-1", 2, "color", "var(--text-color)"], ["type", "number", "name", "deptAmount", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "deptCode", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "patchNo", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "divider"], ["type", "text", "name", "partner1", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner2", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner3", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"]],
      template: function MainForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2)(4, "form", 3)(5, "div", 4)(6, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0627\u0644\u0642\u0637\u0627\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.sector, $event) || (ctx.client.sector = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.legalClaimant, $event) || (ctx.client.legalClaimant = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4)(14, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062E\u0644\u0627\u0621 / \u0627\u0644\u0646\u0647\u0627\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.dateFinished, $event) || (ctx.client.dateFinished = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4)(18, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.work, $event) || (ctx.client.work = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 4)(22, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\u0627\u0644\u0645\u0647\u0646\u0629 / \u0627\u0644\u0645\u0633\u0645\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_24_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.membership, $event) || (ctx.client.membership = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "form", 3)(26, "h3", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4)(29, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\u0627\u0644\u0642\u064A\u0645\u0629 (\u0627\u0644\u062F\u064A\u0646)");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.deptAmount, $event) || (ctx.client.deptAmount = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 4)(33, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\u0643\u0648\u062F \u0627\u0644\u062F\u064A\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.deptCode, $event) || (ctx.client.deptCode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 4)(37, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u0631\u0642\u0645 \u0627\u0644\u0628\u0627\u062A\u0634");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.patchNo, $event) || (ctx.client.patchNo = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 4)(42, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\u0627\u0644\u0634\u0631\u064A\u0643 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_44_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.partner1, $event) || (ctx.client.partner1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 4)(46, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\u0627\u0644\u0634\u0631\u064A\u0643 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.partner2, $event) || (ctx.client.partner2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 4)(50, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\u0627\u0644\u0634\u0631\u064A\u0643 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function MainForm_Template_input_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.partner3, $event) || (ctx.client.partner3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.sector);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.legalClaimant);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.dateFinished);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.work);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.membership);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.deptAmount);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.deptCode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.patchNo);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.partner1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.partner2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.partner3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return MainForm;
})();

/***/ }),

/***/ 85817:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/work-form/work-form.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkForm: () => (/* binding */ WorkForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);




let WorkForm = /*#__PURE__*/(() => {
  class WorkForm {
    client;
    save() {
      console.log('تم حفظ بيانات جهة العمل:', this.client.work);
    }
    cancel() {
      console.log('تم إلغاء / إخلاء البيانات');
    }
    static ɵfac = function WorkForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WorkForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WorkForm,
      selectors: [["app-work-form"]],
      inputs: {
        client: "client"
      },
      decls: 17,
      vars: 2,
      consts: [[1, "rounded-2xl", "shadow-lg", "p-6", "max-w-2xl", "mx-auto", 2, "background-color", "var(--surface-card)"], [1, "text-xl", "font-bold", "text-center", "mb-6", 2, "color", "var(--text-color)"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6"], [1, "form-control", "md:col-span-2"], [1, "label", "font-semibold", 2, "color", "var(--text-color-secondary)"], ["type", "text", "name", "work", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644", 1, "input", "input-bordered", "w-full", "focus:ring-2", "focus:ring-primary/50", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "membership", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A", 1, "input", "input-bordered", "w-full", "focus:ring-2", "focus:ring-primary/50", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-center", "gap-4", "mt-8"], ["type", "button", 1, "btn", "btn-primary", "px-10", "py-2", "text-base", "rounded-xl", 3, "click"], ["type", "button", 1, "btn", "btn-outline", "px-10", "py-2", "text-base", "rounded-xl", 3, "click"]],
      template: function WorkForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \uD83C\uDFE2 \u0646\u0645\u0648\u0630\u062C \u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function WorkForm_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.work, $event) || (ctx.client.work = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A / \u0627\u0644\u0639\u0636\u0648\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function WorkForm_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.client.membership, $event) || (ctx.client.membership = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WorkForm_Template_button_click_13_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \uD83D\uDCBE \u062D\u0641\u0638 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WorkForm_Template_button_click_15_listener() {
            return ctx.cancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " \u21A9\uFE0F \u0625\u0644\u063A\u0627\u0621 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.work);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.client.membership);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgForm],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return WorkForm;
})();

/***/ }),

/***/ 87676:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/components/next-date-modal/next-date-modal.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextDateModal: () => (/* binding */ NextDateModal)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);





const _c0 = ["modal"];
let NextDateModal = /*#__PURE__*/(() => {
  class NextDateModal {
    modal;
    dateSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    selectedDate = '';
    open() {
      this.modal.nativeElement.showModal();
    }
    close() {
      this.modal.nativeElement.close();
    }
    save() {
      this.dateSelected.emit(this.selectedDate);
      this.close();
    }
    static ɵfac = function NextDateModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NextDateModal)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NextDateModal,
      selectors: [["app-next-date-modal"]],
      viewQuery: function NextDateModal_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      outputs: {
        dateSelected: "dateSelected"
      },
      decls: 11,
      vars: 1,
      consts: [["modal", ""], ["id", "nextDateModal", 1, "modal"], [1, "modal-box"], [1, "font-bold", "text-lg", "mb-4"], ["type", "date", 1, "input", "input-bordered", "w-full", "mb-4", 3, "ngModelChange", "ngModel"], [1, "modal-action"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", 3, "click"]],
      template: function NextDateModal_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dialog", 1, 0)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDCC5 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function NextDateModal_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedDate, $event) || (ctx.selectedDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NextDateModal_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NextDateModal_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDate);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
  return NextDateModal;
})();

/***/ }),

/***/ 87872:
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/components/last-date-modal/last-date-modal.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateModal: () => (/* binding */ DateModal)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);




const _c0 = ["modal"];
let DateModal = /*#__PURE__*/(() => {
  class DateModal {
    modal;
    nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    selectedDate = '';
    dateSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    open() {
      this.modal.nativeElement.showModal();
    }
    close() {
      this.modal.nativeElement.close();
    }
    save() {
      this.dateSelected.emit(this.selectedDate);
      this.close();
    }
    static ɵfac = function DateModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DateModal)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DateModal,
      selectors: [["app-date-modal"]],
      viewQuery: function DateModal_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      outputs: {
        nextStep: "nextStep",
        dateSelected: "dateSelected"
      },
      decls: 11,
      vars: 1,
      consts: [["modal", ""], ["id", "dateModal", 1, "modal"], [1, "modal-box"], [1, "font-bold", "text-lg", "mb-4"], ["type", "date", 1, "input", "input-bordered", "w-full", "mb-4", 3, "ngModelChange", "ngModel"], [1, "modal-action"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", 3, "click"]],
      template: function DateModal_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dialog", 1, 0)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\uD83D\uDCC5 \u0627\u062E\u062A\u0631 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DateModal_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedDate, $event) || (ctx.selectedDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateModal_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateModal_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDate);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
  return DateModal;
})();

/***/ }),

/***/ 95933:
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/session-form/session-form.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionForm: () => (/* binding */ SessionForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





function SessionForm_tr_64_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\uD83D\uDCCE \u0639\u0631\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const session_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", session_r3.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function SessionForm_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 20)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SessionForm_tr_64_a_11_Template, 2, 1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td")(13, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SessionForm_tr_64_Template_button_click_13_listener() {
      const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2).index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.deleteSession(i_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " \uD83D\uDDD1\uFE0F \u062D\u0630\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const session_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](session_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 5, session_r3.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](session_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](session_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", session_r3.attachment);
  }
}
let SessionForm = /*#__PURE__*/(() => {
  class SessionForm {
    client;
    sessions = [{
      name: 'جلسة أولى',
      date: new Date('2025-10-20'),
      status: 'منعقدة',
      type: 'مدنية',
      attachment: 'https://example.com/file1.pdf'
    }, {
      name: 'جلسة استئناف',
      date: new Date('2025-11-05'),
      status: 'مؤجلة',
      type: 'جنائية',
      attachment: ''
    }];
    newSession = {
      name: '',
      date: '',
      status: '',
      type: '',
      attachment: ''
    };
    selectedFile = null;
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        this.newSession.attachment = URL.createObjectURL(file);
      }
    }
    addSession() {
      this.sessions.push({
        ...this.newSession
      });
      this.resetForm();
    }
    resetForm() {
      this.newSession = {
        name: '',
        date: '',
        status: '',
        type: '',
        attachment: ''
      };
      this.selectedFile = null;
    }
    deleteSession(index) {
      this.sessions.splice(index, 1);
    }
    static ɵfac = function SessionForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SessionForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SessionForm,
      selectors: [["app-session-form"]],
      inputs: {
        client: "client"
      },
      decls: 65,
      vars: 6,
      consts: [["sessionForm", "ngForm"], [1, "p-6", "rounded-xl", "shadow-md", 2, "background-color", "var(--surface-card)"], [1, "text-xl", "font-bold", "mb-6", "flex", "items-center", "gap-2", 2, "color", "var(--text-color)"], [3, "ngSubmit"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-4"], [1, "form-control"], [1, "label", "font-semibold", 2, "color", "var(--text-color-secondary)"], ["type", "text", "placeholder", "\u0627\u0643\u062A\u0628 \u0627\u0633\u0645 \u0627\u0644\u062C\u0644\u0633\u0629", "name", "name", "required", "", 1, "input", "input-bordered", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "date", "required", "", 1, "input", "input-bordered", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["name", "status", "required", "", 1, "select", "select-bordered", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], ["name", "type", "required", "", 1, "select", "select-bordered", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "label", "font-semibold"], ["type", "file", 1, "file-input", "file-input-bordered", "w-full", 3, "change"], [1, "text-center", "mt-6", "flex", "justify-center", "gap-3"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-outline", "btn-error", 3, "click"], [1, "overflow-x-auto", "mt-8"], [1, "table", "table-zebra", "w-full", "text-center", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [2, "color", "var(--text-color)"], ["style", "color: var(--text-color);", 4, "ngFor", "ngForOf"], ["target", "_blank", "style", "color: var(--primary-color, #3b82f6);", "class", "hover:underline", 3, "href", 4, "ngIf"], [1, "btn", "btn-sm", "btn-error", 3, "click"], ["target", "_blank", 1, "hover:underline", 2, "color", "var(--primary-color, #3b82f6)", 3, "href"]],
      template: function SessionForm_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDDD3\uFE0F \u0627\u0644\u062C\u0644\u0633\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SessionForm_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.addSession());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SessionForm_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.newSession.name, $event) || (ctx.newSession.name = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5)(11, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SessionForm_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.newSession.date, $event) || (ctx.newSession.date = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 5)(15, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SessionForm_Template_select_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.newSession.status, $event) || (ctx.newSession.status = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\u0645\u0646\u0639\u0642\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\u0645\u0624\u062C\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u0645\u062D\u062C\u0648\u0632\u0629 \u0644\u0644\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 5)(27, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u0646\u0648\u0639 \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "select", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function SessionForm_Template_select_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.newSession.type, $event) || (ctx.newSession.type = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "\u0645\u062F\u0646\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u062C\u0646\u0627\u0626\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\u0623\u062D\u0648\u0627\u0644 \u0634\u062E\u0635\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 5)(39, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u0627\u0644\u0645\u0631\u0641\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SessionForm_Template_input_change_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 14)(43, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " \uD83D\uDCBE \u062D\u0641\u0638 \u0627\u0644\u062C\u0644\u0633\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SessionForm_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.resetForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, " \uD83E\uDDF9 \u0625\u062E\u0644\u0627\u0621 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 17)(48, "table", 18)(49, "thead", 19)(50, "tr", 20)(51, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\u0646\u0648\u0639 \u0627\u0644\u062C\u0644\u0633\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "\u0627\u0644\u0645\u0631\u0641\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, SessionForm_tr_64_Template, 15, 8, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const sessionForm_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.newSession.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.newSession.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.newSession.status);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.newSession.type);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !sessionForm_r6.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sessions);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SessionForm;
})();

/***/ }),

/***/ 96017:
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/attachments-form/attachments-form.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttachmentsForm: () => (/* binding */ AttachmentsForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _finance_services_ClientService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../finance/services/ClientService */ 95776);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../shared/services/sweet-alert.service */ 31365);





function AttachmentsForm_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 16);
  }
}
function AttachmentsForm_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 17)(1, "td", 18)(2, "div", 19)(3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 22)(12, "div", 23)(13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AttachmentsForm_tr_24_Template_button_click_13_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.downloadAttachment(item_r4.id, item_r4.fileName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AttachmentsForm_tr_24_Template_button_click_15_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.deleteAttachment(item_r4.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4.note || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 3, item_r4.dateAdded, "dd/MM/yyyy HH:mm"));
  }
}
function AttachmentsForm_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0631\u0641\u0642\u0627\u062A \u062D\u0627\u0644\u064A\u0627\u064B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
let AttachmentsForm = /*#__PURE__*/(() => {
  class AttachmentsForm {
    clientService;
    swal;
    client;
    attachments = [];
    loadingVisible = false;
    constructor(clientService, swal) {
      this.clientService = clientService;
      this.swal = swal;
    }
    ngOnInit() {
      if (this.client?.code) {
        this.loadAttachments();
      }
    }
    loadAttachments() {
      this.clientService.getClientAttachments(this.client.code).subscribe({
        next: data => this.attachments = data,
        error: () => console.error('Failed to load attachments')
      });
    }
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file && this.client?.code) {
        this.loadingVisible = true;
        this.clientService.uploadAttachment(this.client.code, file, 'مرفق موكل').subscribe({
          next: () => {
            this.loadingVisible = false;
            this.swal.success({
              title: 'تم الرفع',
              text: 'تم رفع الملف بنجاح'
            });
            this.loadAttachments();
          },
          error: () => {
            this.loadingVisible = false;
            this.swal.error({
              title: 'خطأ',
              text: 'فشل رفع الملف'
            });
          }
        });
      }
    }
    deleteAttachment(id) {
      this.swal.fire({
        title: 'هل أنت متأكد؟',
        text: 'هل أنت متأكد من حذف هذا المرفق؟',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'نعم، احذف',
        cancelButtonText: 'إلغاء'
      }).then(result => {
        if (result.isConfirmed) {
          this.clientService.deleteAttachment(id).subscribe({
            next: () => {
              this.swal.success({
                title: 'تم الحذف',
                text: 'تم حذف المرفق بنجاح'
              });
              this.loadAttachments();
            },
            error: () => this.swal.error({
              title: 'خطأ',
              text: 'فشل حذف المرفق'
            })
          });
        }
      });
    }
    downloadAttachment(id, fileName) {
      this.clientService.downloadAttachment(id).subscribe({
        next: blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }
      });
    }
    static ɵfac = function AttachmentsForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AttachmentsForm)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_finance_services_ClientService__WEBPACK_IMPORTED_MODULE_3__.ClientService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_4__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AttachmentsForm,
      selectors: [["app-attachments-form"]],
      inputs: {
        client: "client"
      },
      decls: 26,
      vars: 4,
      consts: [["fileInput", ""], [1, "rounded-2xl", "shadow-lg", "p-6", "max-w-4xl", "mx-auto", 2, "background-color", "var(--surface-card)"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-xl", "font-bold", 2, "color", "var(--text-color)"], [1, "flex", "items-center", "gap-3"], ["type", "file", 1, "hidden", 3, "change"], [1, "btn", "btn-primary", "rounded-xl", "flex", "items-center", "gap-2", 3, "click", "disabled"], ["class", "loading loading-spinner loading-xs", 4, "ngIf"], [1, "pi", "pi-upload"], [1, "overflow-x-auto", "rounded-xl", "border", 2, "border-color", "var(--surface-border)"], [1, "table", "w-full"], [2, "background-color", "var(--surface-section)"], [1, "text-right", 2, "color", "var(--text-color)"], [1, "text-center", 2, "color", "var(--text-color)"], ["class", "hover", "style", "color: var(--text-color);", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "loading", "loading-spinner", "loading-xs"], [1, "hover", 2, "color", "var(--text-color)"], [1, "text-right"], [1, "flex", "items-center", "gap-3", "justify-end"], [1, "font-medium"], [1, "pi", "pi-file", "text-primary"], [1, "text-center"], [1, "flex", "gap-2", "justify-center"], [1, "btn", "btn-ghost", "btn-xs", "text-primary", 3, "click"], [1, "pi", "pi-download"], [1, "btn", "btn-ghost", "btn-xs", "text-error", 3, "click"], [1, "pi", "pi-trash"], ["colspan", "4", 1, "text-center", "py-10", "opacity-50"]],
      template: function AttachmentsForm_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \uD83D\uDCC1 \u0645\u0631\u0641\u0642\u0627\u062A \u0627\u0644\u0645\u0648\u0643\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4)(5, "input", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AttachmentsForm_Template_input_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AttachmentsForm_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            const fileInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](fileInput_r2.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AttachmentsForm_span_8_Template, 1, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u0631\u0641\u0639 \u0645\u0631\u0641\u0642 \u062C\u062F\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "table", 10)(13, "thead", 11)(14, "tr")(15, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0644\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u0641\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AttachmentsForm_tr_24_Template, 17, 6, "tr", 14)(25, AttachmentsForm_tr_25_Template, 3, 0, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loadingVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingVisible);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.attachments);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.attachments.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AttachmentsForm;
})();

/***/ }),

/***/ 97581:
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/forms/judgment-form/judgment-form.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JudgmentForm: () => (/* binding */ JudgmentForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




function JudgmentForm_tr_22_a_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\uD83D\uDCCE \u0639\u0631\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", item_r2.attachment, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
function JudgmentForm_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 5)(1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, JudgmentForm_tr_22_a_13_Template, 2, 1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td")(15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function JudgmentForm_tr_22_Template_button_click_15_listener() {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.deleteJudgment(i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " \uD83D\uDDD1\uFE0F \u062D\u0630\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.statement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 6, item_r2.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.court);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.attachment);
  }
}
let JudgmentForm = /*#__PURE__*/(() => {
  class JudgmentForm {
    client;
    judgments = [];
    newJudgment = {
      statement: '',
      date: '',
      level: '',
      type: '',
      court: '',
      attachment: ''
    };
    selectedFile = null;
    onFileSelected(event) {
      const file = event.target.files[0];
      if (file) {
        this.selectedFile = file;
        // مثال: تحويل الملف إلى URL مؤقت للعرض
        this.newJudgment.attachment = URL.createObjectURL(file);
      }
    }
    addJudgment() {
      this.judgments.push({
        ...this.newJudgment
      });
      this.newJudgment = {
        statement: '',
        date: '',
        level: '',
        type: '',
        court: '',
        attachment: ''
      };
    }
    deleteJudgment(index) {
      this.judgments.splice(index, 1);
    }
    static ɵfac = function JudgmentForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || JudgmentForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: JudgmentForm,
      selectors: [["app-judgment-form"]],
      inputs: {
        client: "client"
      },
      decls: 23,
      vars: 1,
      consts: [[1, "p-6", "rounded-xl", "shadow-md", 2, "background-color", "var(--surface-card)"], [1, "text-xl", "font-bold", "mb-6", "flex", "items-center", "gap-2", 2, "color", "var(--text-color)"], [1, "overflow-x-auto", "mt-8"], [1, "table", "table-zebra", "w-full", "text-center", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [2, "color", "var(--text-color)"], ["style", "color: var(--text-color);", 4, "ngFor", "ngForOf"], [1, "max-w-xs", "truncate"], ["target", "_blank", "style", "color: var(--primary-color, #3b82f6);", "class", "hover:underline", 3, "href", 4, "ngIf"], [1, "btn", "btn-sm", "btn-error", 3, "click"], ["target", "_blank", 1, "hover:underline", 2, "color", "var(--primary-color, #3b82f6)", 3, "href"]],
      template: function JudgmentForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u2696\uFE0F \u0645\u0646\u0637\u0648\u0642 \u0627\u0644\u062D\u0643\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "table", 3)(5, "thead", 4)(6, "tr", 5)(7, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u0645\u0646\u0637\u0648\u0642 \u0627\u0644\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u062F\u0631\u062C\u0629 \u0627\u0644\u062A\u0642\u0627\u0636\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\u0646\u0648\u0639 \u0627\u0644\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u0627\u0644\u0645\u0631\u0641\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, JudgmentForm_tr_22_Template, 17, 9, "tr", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.judgments);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return JudgmentForm;
})();

/***/ }),

/***/ 99148:
/*!********************************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/main/pages/clients-page/components/next-action-modal/next-action-modal.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NextActionModal: () => (/* binding */ NextActionModal)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);






const _c0 = ["modal"];
function NextActionModal_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 9)(1, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function NextActionModal_label_6_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.selectedActionId, $event) || (ctx_r2.selectedActionId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const action_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", action_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.selectedActionId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](action_r4.name);
  }
}
function NextActionModal_div_7_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NextActionModal_div_7_tr_9_Template_tr_click_0_listener() {
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.selectRow(row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r6.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r6.officer);
  }
}
function NextActionModal_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "table", 12)(2, "thead")(3, "tr", 13)(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0627\u0644\u0648\u0635\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NextActionModal_div_7_tr_9_Template, 5, 2, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.selectedData);
  }
}
let NextActionModal = /*#__PURE__*/(() => {
  class NextActionModal {
    modal;
    actionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    actions = [{
      id: 1,
      name: 'تسليم مستندات'
    }, {
      id: 2,
      name: 'متابعة جلسة'
    }, {
      id: 3,
      name: 'تنفيذ حكم'
    }];
    selectedActionId = null;
    selectedRow = null;
    dataMap = {
      1: [{
        id: 401,
        desc: 'تسليم مستندات التنفيذ',
        officer: 'محمد عادل'
      }],
      2: [{
        id: 501,
        desc: 'جلسة 10 نوفمبر',
        officer: 'سالم يوسف'
      }, {
        id: 502,
        desc: 'جلسة 25 نوفمبر',
        officer: 'بدر ناصر'
      }],
      3: [{
        id: 601,
        desc: 'متابعة التنفيذ الميداني',
        officer: 'سعيد ماجد'
      }]
    };
    get selectedData() {
      return this.selectedActionId ? this.dataMap[this.selectedActionId] : [];
    }
    open() {
      this.modal.nativeElement.showModal();
    }
    close() {
      this.modal.nativeElement.close();
    }
    selectRow(row) {
      this.actionSelected.emit(row.desc);
      this.close();
    }
    static ɵfac = function NextActionModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NextActionModal)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NextActionModal,
      selectors: [["app-next-action-modal"]],
      viewQuery: function NextActionModal_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.modal = _t.first);
        }
      },
      outputs: {
        actionSelected: "actionSelected"
      },
      decls: 11,
      vars: 2,
      consts: [["modal", ""], [1, "modal"], [1, "modal-box", "w-11/12", "max-w-4xl"], [1, "font-bold", "text-lg", "mb-4"], [1, "flex", "flex-wrap", "gap-4", "mb-6"], ["class", "flex items-center gap-2 cursor-pointer", 4, "ngFor", "ngForOf"], ["class", "overflow-y-auto max-h-[300px] border rounded-lg", 4, "ngIf"], [1, "modal-action"], [1, "btn", 3, "click"], [1, "flex", "items-center", "gap-2", "cursor-pointer"], ["type", "radio", "name", "nextAction", 3, "ngModelChange", "value", "ngModel"], [1, "overflow-y-auto", "max-h-[300px]", "border", "rounded-lg"], [1, "table", "table-sm", "w-full"], [1, "bg-gray-100"], ["class", "cursor-pointer hover:bg-blue-50", 3, "click", 4, "ngFor", "ngForOf"], [1, "cursor-pointer", "hover:bg-blue-50", 3, "click"]],
      template: function NextActionModal_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dialog", 1, 0)(2, "div", 2)(3, "h3", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDCC5 \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NextActionModal_label_6_Template, 4, 3, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NextActionModal_div_7_Template, 10, 1, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NextActionModal_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.actions);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedActionId);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
      changeDetection: 0
    });
  }
  return NextActionModal;
})();

/***/ })

}]);
//# sourceMappingURL=9148.js.map