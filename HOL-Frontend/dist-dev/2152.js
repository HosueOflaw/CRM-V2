"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[2152],{

/***/ 62152:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/export-and-import-num/export-and-import-num.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExportAndImportNum: () => (/* binding */ ExportAndImportNum)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);






// استيراد logAction الحقيقي من ActionsPage
function logAction(message) {
  console.log("LOG:", message);
}
let ExportAndImportNum = /*#__PURE__*/(() => {
  class ExportAndImportNum {
    entity = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('', ...(ngDevMode ? [{
      debugName: "entity"
    }] : []));
    faxNumber = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('Re O/1642/2025', ...(ngDevMode ? [{
      debugName: "faxNumber"
    }] : []));
    subject = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('رسالة رسمية', ...(ngDevMode ? [{
      debugName: "subject"
    }] : []));
    date = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('2025-11-25', ...(ngDevMode ? [{
      debugName: "date"
    }] : []));
    notes = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('', ...(ngDevMode ? [{
      debugName: "notes"
    }] : []));
    constructor() {
      // لو التاريخ فاضي، نحط تاريخ اليوم
      if (!this.date()) {
        this.date.set(new Date().toISOString().split('T')[0]);
      }
    }
    // دالة الحفظ
    onSave() {
      logAction('حفظ البيانات');
      alert('تم محاكاة عملية الحفظ بنجاح! تحقق من Console لرؤية البيانات.');
      console.log('Saving data:', {
        entity: this.entity(),
        faxNumber: this.faxNumber(),
        subject: this.subject(),
        date: this.date(),
        notes: this.notes()
      });
    }
    // دالة تفريغ الحقول
    onNew() {
      logAction('تفريغ النموذج (جديد)');
      this.entity.set('');
      this.faxNumber.set('');
      this.subject.set('');
      this.date.set(new Date().toISOString().split('T')[0]);
      this.notes.set('');
      alert('تم تفريغ النموذج بنجاح!');
    }
    static ɵfac = function ExportAndImportNum_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExportAndImportNum)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ExportAndImportNum,
      selectors: [["app-export-and-import-num"]],
      decls: 51,
      vars: 9,
      consts: [["dir", "rtl", 1, "p-4", "sm:p-8", "min-h-screen", "flex", "justify-center", "items-start", "pt-10", 2, "background-color", "var(--surface-ground)"], [1, "w-full", "max-w-4xl", "shadow-xl", "rounded-lg", "p-6", "space-y-6", 2, "background-color", "var(--surface-card)"], [1, "text-2xl", "font-bold", "border-b", "pb-3", "mb-4", "text-center", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-4"], [1, "md:col-span-2", "space-y-1"], [1, "block", "text-sm", "font-medium", 2, "color", "var(--text-color)"], ["type", "text", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u062C\u0647\u0629", 1, "w-full", "p-2", "border", "rounded-md", "transition", "duration-150", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "md:col-span-1", "space-y-1"], ["type", "text", "placeholder", "Re O/1642/2025", 1, "w-full", "p-2", "border", "rounded-md", "transition", "duration-150", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0645\u0631\u0627\u0633\u0644\u0629", 1, "w-full", "p-2", "border", "rounded-md", "transition", "duration-150", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "w-full", "p-2", "border", "rounded-md", "transition", "duration-150", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "md:col-span-3", "space-y-1"], ["rows", "2", "placeholder", "\u0623\u0636\u0641 \u0623\u064A \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0647\u0646\u0627...", 1, "w-full", "p-2", "border", "border-gray-300", "rounded-md", "focus:ring-blue-500", "focus:border-blue-500", "transition", "duration-150", "resize-none", 3, "ngModelChange", "ngModel"], [1, "md:col-span-1", "flex", "flex-row-reverse", "md:flex-col", "gap-3", "justify-end", "items-end", "md:justify-start", "pt-6"], [1, "w-full", "md:w-auto", "px-4", "py-2", "bg-blue-600", "text-white", "font-semibold", "rounded-md", "hover:bg-blue-700", "transition", "duration-150", "shadow-md", 3, "click"], [1, "w-full", "md:w-auto", "px-4", "py-2", "bg-white", "text-blue-600", "border", "border-blue-600", "font-semibold", "rounded-md", "hover:bg-gray-50", "transition", "duration-150", "shadow-md", 3, "click"], [1, "mt-8", "border-t", "pt-6"], [1, "border", "rounded-md", "p-4", "min-h-64", "space-y-3", 2, "background-color", "var(--surface-ground)", "border-color", "var(--surface-border)"], [1, "flex", "items-center", "gap-2", 2, "color", "var(--text-color-secondary)"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", 1, "h-5", "w-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "text-sm"], [1, "h-48", "border-t", "border-dashed", "border-gray-300", "mt-4"], [1, "text-xs", "pt-4", "border-t", 2, "color", "var(--text-color-secondary)", "border-color", "var(--surface-border)"]],
      template: function ExportAndImportNum_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0635\u0627\u062F\u0631 \u0648\u0627\u0644\u0648\u0627\u0631\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0635\u0627\u062F\u0631 \u0627\u0644\u064A\u0647\u0627");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ExportAndImportNum_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.entity, $event) || (ctx.entity = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0631\u0642\u0645 \u0627\u0644\u0641\u0627\u0643\u0633");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ExportAndImportNum_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.faxNumber, $event) || (ctx.faxNumber = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7)(14, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u0645\u0648\u0636\u0648\u0639\u0647");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ExportAndImportNum_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.subject, $event) || (ctx.subject = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 4)(18, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ExportAndImportNum_Template_input_ngModelChange_20_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.date, $event) || (ctx.date = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 3)(22, "div", 11)(23, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "textarea", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ExportAndImportNum_Template_textarea_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.notes, $event) || (ctx.notes = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13)(27, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExportAndImportNum_Template_button_click_27_listener() {
            return ctx.onSave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " \u062D\u0641\u0638 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExportAndImportNum_Template_button_click_29_listener() {
            return ctx.onNew();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " \u062C\u062F\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 16)(32, "div", 17)(33, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "svg", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "path", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\u0627\u0644\u062F\u0627\u062A\u0627 \u0627\u0644\u064A \u0647\u062A\u064A\u062C\u064A \u0645\u0646 \u0627\u0644database");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 23)(40, "p")(41, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0646\u0645\u0648\u0630\u062C:");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.entity);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.faxNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.subject);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.date);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.notes);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u0627\u0644\u062C\u0647\u0629: ", ctx.entity());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u0627\u0644\u0641\u0627\u0643\u0633: ", ctx.faxNumber());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u0627\u0644\u0645\u0648\u0636\u0648\u0639: ", ctx.subject());
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u0627\u0644\u062A\u0627\u0631\u064A\u062E: ", ctx.date());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ExportAndImportNum;
})();

/***/ })

}]);
//# sourceMappingURL=2152.js.map