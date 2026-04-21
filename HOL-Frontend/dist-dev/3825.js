"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[3825],{

/***/ 13825:
/*!*******************************************************************************!*\
  !*** ./src/app/features/execution/components/shared/data-table/data-table.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTable: () => (/* binding */ DataTable)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/go-back/go-back */ 9156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);








const _c0 = ["lookup"];
function DataTable_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](col_r2.header);
  }
}
function DataTable_tr_27_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r3 = ctx.$implicit;
    const r_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](r_r4[col_r3.field]);
  }
}
function DataTable_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DataTable_tr_27_td_1_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", i_r5 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.columns);
  }
}
function DataTable_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629 \uD83D\uDD0D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("colspan", ctx_r5.columns.length);
  }
}
let DataTable = /*#__PURE__*/(() => {
  class DataTable {
    fb;
    lookup;
    title = '';
    filterLabel = '';
    searchPlaceholder = '';
    columns = [];
    data = [];
    lookupConfig = {
      title: '',
      columns: [],
      data: [],
      targetField: ''
    };
    filterForm;
    filteredResults = [];
    searchText = '';
    constructor(fb) {
      this.fb = fb;
    }
    ngOnInit() {
      this.filterForm = this.fb.group({
        court: ['']
      });
      this.filteredResults = [...this.data];
    }
    openModal() {
      this.lookup.open();
    }
    handleSelect(item) {
      this.filterForm.patchValue({
        court: item[this.lookupConfig.targetField]
      });
    }
    searchByCourt() {
      const {
        court
      } = this.filterForm.value;
      this.filteredResults = this.data.filter(r => court ? r.court === court : true);
    }
    exportToExcel() {
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(this.filteredResults);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.book_append_sheet(wb, ws, 'Sheet');
      xlsx__WEBPACK_IMPORTED_MODULE_1__.writeFile(wb, `${this.title}.xlsx`);
    }
    reset() {
      this.filterForm.reset();
      this.searchText = '';
      this.filteredResults = [...this.data];
    }
    autoSearch() {
      const q = this.searchText.toLowerCase();
      this.filteredResults = this.data.filter(r => Object.values(r).some(val => String(val).toLowerCase().includes(q)));
    }
    static ɵfac = function DataTable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataTable)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: DataTable,
      selectors: [["app-data-table"]],
      viewQuery: function DataTable_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.lookup = _t.first);
        }
      },
      inputs: {
        title: "title",
        filterLabel: "filterLabel",
        searchPlaceholder: "searchPlaceholder",
        columns: "columns",
        data: "data",
        lookupConfig: "lookupConfig"
      },
      decls: 31,
      vars: 11,
      consts: [["lookup", ""], [1, "p-6", "min-h-screen", "flex", "flex-col", "gap-6", 2, "background-color", "var(--surface-ground)"], [1, "text-2xl", "font-bold", "text-center", 2, "color", "var(--primary-color)"], [1, "p-6", "rounded-xl", "shadow", "flex", "flex-wrap", "gap-4", "justify-center", "items-end", 2, "background-color", "var(--surface-card)", 3, "formGroup"], [1, "label", "font-semibold", 2, "color", "var(--text-color)"], [1, "flex", "gap-2"], ["type", "text", "formControlName", "court", "placeholder", "\u0627\u062E\u062A\u0631...", "readonly", "", 1, "input", "input-bordered", "w-64", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)"], ["type", "button", 1, "btn", "btn-outline", 3, "click"], [1, "flex", "gap-2", "mt-4"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "flex", "justify-between", "items-center", "p-4", "rounded-xl", "shadow", 2, "background-color", "var(--surface-card)"], [1, "input", "input-bordered", "w-1/2", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "input", "ngModel", "placeholder"], [1, "btn", "btn-success", 3, "click"], [1, "overflow-x-auto", "rounded-xl", "shadow", 2, "background-color", "var(--surface-card)"], [1, "table", "table-zebra", "w-full", "text-sm", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], ["style", "color: var(--text-color);", 4, "ngFor", "ngForOf"], ["style", "color: var(--text-color);", 3, "background-color", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "itemSelected", "title", "columns", "data"], [2, "color", "var(--text-color)"], [4, "ngFor", "ngForOf"], [1, "text-center", "py-6", 2, "color", "var(--text-color-secondary)"]],
      template: function DataTable_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-go-back");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3)(5, "div")(6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DataTable_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\uD83D\uDCCB \u0627\u062E\u062A\u064A\u0627\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DataTable_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.searchByCourt());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "\uD83D\uDD0D \u0628\u062D\u062B");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DataTable_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.reset());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "\u21A9\uFE0F \u062A\u0631\u0627\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 10)(18, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function DataTable_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function DataTable_Template_input_input_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.autoSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DataTable_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.exportToExcel());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "\uD83D\uDCE5 \u062A\u062D\u0645\u064A\u0644 Excel");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 13)(22, "table", 14)(23, "thead")(24, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, DataTable_th_25_Template, 2, 1, "th", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, DataTable_tr_27_Template, 2, 3, "tr", 17)(28, DataTable_tr_28_Template, 3, 1, "tr", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "app-lookup-modal", 19, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("itemSelected", function DataTable_Template_app_lookup_modal_itemSelected_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.handleSelect($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.filterForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.filterLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("placeholder", ctx.searchPlaceholder);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filteredResults);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.filteredResults.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", ctx.lookupConfig.title)("columns", ctx.lookupConfig.columns)("data", ctx.lookupConfig.data);
        }
      },
      dependencies: [_shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_2__.GoBack, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_4__.LookupModal],
      styles: ["div[_ngcontent-%COMP%], form[_ngcontent-%COMP%] {\n    direction: rtl;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL2NvbXBvbmVudHMvc2hhcmVkL2RhdGEtdGFibGUvZGF0YS10YWJsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LGZvcm0ge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return DataTable;
})();

/***/ })

}]);
//# sourceMappingURL=3825.js.map