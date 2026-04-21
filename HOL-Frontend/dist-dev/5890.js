"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[5890],{

/***/ 18547:
/*!********************************************************************************************!*\
  !*** ./src/app/features/execution/components/classification-model/classification-model.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassificationModel: () => (/* binding */ ClassificationModel)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);
/* harmony import */ var _select_name_dialog_component_select_name_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../select-name-dialog-component/select-name-dialog-component */ 57325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);








function ClassificationModel_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r1.name);
  }
}
function ClassificationModel_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", s_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](s_r2.name);
  }
}
let ClassificationModel = /*#__PURE__*/(() => {
  class ClassificationModel {
    fb;
    dialogService;
    dialogRef;
    form;
    ref;
    categories = [{
      id: 1,
      name: 'تصنيف إداري'
    }, {
      id: 2,
      name: 'تصنيف مالي'
    }, {
      id: 3,
      name: 'تصنيف قضائي'
    }];
    sectors = [{
      id: 1,
      name: 'القطاع القانوني'
    }, {
      id: 2,
      name: 'القطاع الإداري'
    }, {
      id: 3,
      name: 'القطاع المالي'
    }];
    constructor(fb, dialogService, dialogRef) {
      this.fb = fb;
      this.dialogService = dialogService;
      this.dialogRef = dialogRef;
    }
    ngOnInit() {
      this.form = this.fb.group({
        category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        sector: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
        code: [{
          value: '',
          disabled: true
        }]
      });
    }
    openNameDialog() {
      const ref = this.dialogService.open(_select_name_dialog_component_select_name_dialog_component__WEBPACK_IMPORTED_MODULE_3__.SelectNameDialogComponent, {
        header: 'اختيار الاسم',
        width: '600px',
        modal: true,
        dismissableMask: false
      });
      if (ref) {
        this.ref = ref;
        ref.onClose.subscribe(result => {
          if (result) {
            this.form.patchValue({
              name: result.name,
              code: result.code
            });
          }
        });
      }
    }
    newForm() {
      this.form.reset();
    }
    saveForm() {
      if (this.form.valid) {
        const data = this.form.getRawValue();
        console.log('✅ حفظ البيانات:', data);
        this.dialogRef.close(data);
      }
    }
    updateForm() {
      alert('🔄 تم تعديل البيانات');
    }
    cancelForm() {
      this.dialogRef.close();
    }
    static ɵfac = function ClassificationModel_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClassificationModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DynamicDialogRef));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ClassificationModel,
      selectors: [["app-classification-model"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_2__.DialogService])],
      decls: 38,
      vars: 3,
      consts: [[1, "form-container"], [1, "text-2xl", "font-bold", "text-center", "mb-6", 2, "color", "var(--primary-color)"], [1, "form-grid", "form-grid-2", 3, "formGroup"], [1, "form-field"], [1, "form-label", "form-label-required"], ["formControlName", "category", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "sector", 1, "form-select"], [1, "form-field", "form-row"], [1, "form-field", 2, "flex", "1"], ["type", "text", "formControlName", "name", "readonly", "", 1, "form-input"], ["type", "button", 1, "form-button", "form-button-outline", 2, "margin-bottom", "0", 3, "click"], [1, "form-label"], ["type", "text", "formControlName", "code", "readonly", "", 1, "form-input"], [1, "form-actions", "form-actions-center"], ["type", "button", 1, "form-button", "form-button-secondary", 3, "click"], ["type", "button", 1, "form-button", "form-button-success", 3, "click"], ["type", "button", 1, "form-button", "form-button-warning", 3, "click"], ["type", "button", 1, "form-button", "form-button-danger", 3, "click"], [3, "value"]],
      template: function ClassificationModel_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " \uD83D\uDDC2\uFE0F \u0625\u0636\u0627\u0641\u0629 \u062A\u0635\u0646\u064A\u0641 \u062C\u062F\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2)(4, "div", 3)(5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "select", 5)(8, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "-- \u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 --");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ClassificationModel_option_10_Template, 2, 2, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3)(12, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u0627\u0644\u0642\u0637\u0627\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "select", 8)(15, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "-- \u0627\u062E\u062A\u0631 \u0627\u0644\u0642\u0637\u0627\u0639 --");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ClassificationModel_option_17_Template, 2, 2, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9)(19, "div", 10)(20, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "\u0627\u0644\u0627\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClassificationModel_Template_button_click_23_listener() {
            return ctx.openNameDialog();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " ... ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 3)(26, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15)(30, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClassificationModel_Template_button_click_30_listener() {
            return ctx.newForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " \uD83C\uDD95 \u062C\u062F\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClassificationModel_Template_button_click_32_listener() {
            return ctx.saveForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " \uD83D\uDCBE \u062D\u0641\u0638 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClassificationModel_Template_button_click_34_listener() {
            return ctx.updateForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " \u270F\uFE0F \u062A\u0639\u062F\u064A\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ClassificationModel_Template_button_click_36_listener() {
            return ctx.cancelForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " \uD83D\uDEAB \u0625\u0644\u063A\u0627\u0621 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sectors);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
      styles: [".classification-model[_ngcontent-%COMP%] {\n    direction: rtl !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL2NvbXBvbmVudHMvY2xhc3NpZmljYXRpb24tbW9kZWwvY2xhc3NpZmljYXRpb24tbW9kZWwuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLmNsYXNzaWZpY2F0aW9uLW1vZGVsIHtcclxuICAgIGRpcmVjdGlvbjogcnRsICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ClassificationModel;
})();

/***/ }),

/***/ 57325:
/*!************************************************************************************************************!*\
  !*** ./src/app/features/execution/components/select-name-dialog-component/select-name-dialog-component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectNameDialogComponent: () => (/* binding */ SelectNameDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);




function SelectNameDialogComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectNameDialogComponent_tr_15_Template_button_click_8_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectName(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0627\u062E\u062A\u064A\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.lastAction);
  }
}
let SelectNameDialogComponent = /*#__PURE__*/(() => {
  class SelectNameDialogComponent {
    ref;
    names = [{
      id: 1,
      name: 'ملف تنفيذ رقم 123',
      code: 'EXE-123',
      lastAction: 'تم القبول'
    }, {
      id: 2,
      name: 'ملف تنفيذ رقم 456',
      code: 'EXE-456',
      lastAction: 'بانتظار الدفع'
    }, {
      id: 3,
      name: 'ملف تنفيذ رقم 789',
      code: 'EXE-789',
      lastAction: 'جاهز للإرسال'
    }];
    constructor(ref) {
      this.ref = ref;
    }
    selectName(item) {
      this.ref.close(item);
    }
    close() {
      this.ref.close();
    }
    static ɵfac = function SelectNameDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SelectNameDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__.DynamicDialogRef));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: SelectNameDialogComponent,
      selectors: [["app-select-name-dialog-component"]],
      decls: 19,
      vars: 1,
      consts: [[1, "p-4"], [1, "text-lg", "font-bold", "mb-3", "text-center"], [1, "table", "table-bordered", "w-full", "text-center"], [4, "ngFor", "ngForOf"], [1, "text-center", "mt-3"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 3, "click"]],
      template: function SelectNameDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0627\u0633\u0645 \u0645\u0646 \u0642\u0627\u0639\u062F\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "table", 2)(4, "thead")(5, "tr")(6, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0627\u0644\u0627\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0627\u062E\u062A\u064A\u0627\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SelectNameDialogComponent_tr_15_Template, 10, 3, "tr", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4)(17, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectNameDialogComponent_Template_button_click_17_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.names);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return SelectNameDialogComponent;
})();

/***/ }),

/***/ 85890:
/*!********************************************************!*\
  !*** ./src/app/features/execution/execution-routes.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EXECUTION_ROUTES: () => (/* binding */ EXECUTION_ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_execution_dashboard_execution_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/execution-dashboard/execution-dashboard */ 88817);

const EXECUTION_ROUTES = [{
  path: '',
  component: _pages_execution_dashboard_execution_dashboard__WEBPACK_IMPORTED_MODULE_0__.ExecutionDashboard
}];

/***/ }),

/***/ 88817:
/*!*************************************************************************************!*\
  !*** ./src/app/features/execution/pages/execution-dashboard/execution-dashboard.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecutionDashboard: () => (/* binding */ ExecutionDashboard)
/* harmony export */ });
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/dynamicdialog */ 55079);
/* harmony import */ var _core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/dashboard-layout/dashboard-layout */ 95021);
/* harmony import */ var _components_classification_model_classification_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/classification-model/classification-model */ 18547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);





let ExecutionDashboard = /*#__PURE__*/(() => {
  class ExecutionDashboard {
    dialogService;
    ref;
    constructor(dialogService) {
      this.dialogService = dialogService;
    }
    actions = [{
      title: 'الصفحة الرئيسية',
      subtitle: 'عرض التفاصيل',
      icon: '📄',
      type: 'navigate',
      value: '/execution/main'
    }, {
      title: 'العملاء',
      type: 'navigate',
      value: '/execution/main/clients'
    }, {
      title: 'المراجعة',
      type: 'navigate',
      value: '/execution/main/review'
    }, {
      title: 'رفع الإجراءات',
      type: 'navigate',
      value: '/execution/main/actions'
    }, {
      title: 'منطوق الحكم',
      type: 'navigate',
      value: '/execution/main/judgment'
    }, {
      title: 'الجلسات',
      type: 'navigate',
      value: '/execution/main/sessions'
    }, {
      title: 'طلب العهدة',
      type: 'navigate',
      value: '/execution/main/requests'
    }, {
      title: 'استلام الأحكام',
      type: 'navigate',
      value: '/execution/main/receive'
    }, {
      title: 'الملفات الجديدة',
      type: 'navigate',
      value: '/execution/main/files'
    }, {
      title: 'كشف الطعون',
      icon: '📝',
      type: 'navigate',
      value: '/execution/appeals'
    }, {
      title: 'ادخال العهدة',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/custody'
    }, {
      title: 'استلام و اعلان الصيغ',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/announcing-formulas'
    }, {
      title: 'التوكيلات',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/agencies'
    }, {
      title: 'اضافة التصنيفات',
      icon: '🔄',
      type: 'form',
      onClick: dialog => this.openAddCategoryForm(dialog)
    }, {
      title: 'استلام الاحكام',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/judgments'
    }, {
      title: 'ملفات التنفيذ',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/execution-statements'
    }];
    openAddCategoryForm(dialog) {
      if (!dialog) return;
      const ref = dialog.open(_components_classification_model_classification_model__WEBPACK_IMPORTED_MODULE_2__.ClassificationModel, {
        header: 'إضافة التصنيفات',
        width: '700px',
        modal: true,
        dismissableMask: false
      });
      if (ref) {
        this.ref = ref;
      }
    }
    callApi() {
      console.log('استدعاء API...');
    }
    static ɵfac = function ExecutionDashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExecutionDashboard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_0__.DialogService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ExecutionDashboard,
      selectors: [["app-execution-dashboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_0__.DialogService])],
      decls: 1,
      vars: 3,
      consts: [[3, "title", "subtitle", "actions"]],
      template: function ExecutionDashboard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-dashboard-layout", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "\u0642\u0633\u0645 \u0627\u0644\u062A\u0646\u0641\u064A\u0630")("subtitle", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u063A\u0628 \u0641\u064A \u062A\u0646\u0641\u064A\u0630\u0647\u0627")("actions", ctx.actions);
        }
      },
      dependencies: [_core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_1__.DashboardLayout],
      styles: [".execution-dashboard[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #f4f6f9;\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.dashboard-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  text-align: right;\n}\n\n.dashboard-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  color: #1a3c6e;\n  margin-bottom: 0.25rem;\n}\n\n.dashboard-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n\n.dashboard-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1rem;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  background-color: #1a2b4a;\n  color: #e7eaf0;\n  border: none;\n  border-radius: 10px;\n  padding: 1.2rem;\n  font-size: 1rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  text-align: center;\n  cursor: pointer;\n}\n\n.action-btn[_ngcontent-%COMP%]:hover {\n  background-color: #d4af37;\n  transform: translateY(-3px);\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL3BhZ2VzL2V4ZWN1dGlvbi1kYXNoYm9hcmQvZXhlY3V0aW9uLWRhc2hib2FyZC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IseUNBQXlDO0FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiLmV4ZWN1dGlvbi1kYXNoYm9hcmQge1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmOTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1oZWFkZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGNvbG9yOiAjMWEzYzZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaGVhZGVyIHAge1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjIwcHgsIDFmcikpO1xyXG4gIGdhcDogMXJlbTtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTJiNGE7XHJcbiAgY29sb3I6ICNlN2VhZjA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMS4ycmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFjdGlvbi1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNGFmMzc7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return ExecutionDashboard;
})();

/***/ })

}]);
//# sourceMappingURL=5890.js.map