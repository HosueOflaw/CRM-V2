"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[1722],{

/***/ 21722:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/installment-collection/installment-collection.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallmentCollection: () => (/* binding */ InstallmentCollection)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ 82423);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);






const _c0 = a0 => ({
  itemsPerPage: 10,
  currentPage: a0
});
function InstallmentCollection_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](col_r1);
  }
}
function InstallmentCollection_tr_18_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r2 = ctx.$implicit;
    const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r3[col_r2]);
  }
}
function InstallmentCollection_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, InstallmentCollection_tr_18_td_1_Template, 2, 1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.columns);
  }
}
let InstallmentCollection = /*#__PURE__*/(() => {
  class InstallmentCollection {
    installments = [];
    columns = [];
    currentPage = 1;
    onExcelUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          const data = new Uint8Array(e.target.result);
          const workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__.read(data, {
            type: 'array'
          });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          this.installments = xlsx__WEBPACK_IMPORTED_MODULE_2__.utils.sheet_to_json(worksheet, {
            defval: ''
          });
          // استخراج الأعمدة تلقائيًا
          if (this.installments.length > 0) {
            this.columns = Object.keys(this.installments[0]);
          }
        };
        reader.readAsArrayBuffer(file);
      }
    }
    collectOnlineFiles() {
      console.log('تجميع ملفات الاونلاين');
    }
    collectPrintFiles() {
      console.log('تجميع ملفات الطباعة');
    }
    static ɵfac = function InstallmentCollection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InstallmentCollection)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: InstallmentCollection,
      selectors: [["app-installment-collection"]],
      decls: 22,
      vars: 7,
      consts: [[1, "p-6", "mx-auto", "space-y-6", 2, "direction", "rtl"], [1, "text-2xl", "font-bold", "text-center", "mb-6"], [1, "flex", "flex-wrap", "gap-4", "justify-center", "mb-6"], [1, "bg-green-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-green-700", "cursor-pointer", "flex", "items-center", "gap-2"], ["type", "file", "accept", ".xlsx, .xls", 1, "hidden", 3, "change"], [1, "bg-blue-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-blue-700", "flex", "items-center", "gap-2", 3, "click"], [1, "bg-purple-600", "text-white", "px-4", "py-2", "rounded", "hover:bg-purple-700", "flex", "items-center", "gap-2", 3, "click"], [1, "overflow-x-auto"], [1, "table-auto", "w-full", "border", "border-gray-200", "text-sm"], [1, "bg-gray-100"], ["class", "border px-2 py-1", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "mt-4"], [3, "pageChange"], [1, "border", "px-2", "py-1"]],
      template: function InstallmentCollection_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u062A\u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0642\u0633\u0627\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "label", 3)(5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u0627\u0644\u0627\u0643\u0633\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function InstallmentCollection_Template_input_change_7_listener($event) {
            return ctx.onExcelUpload($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstallmentCollection_Template_button_click_8_listener() {
            return ctx.collectOnlineFiles();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \u062A\u062C\u0645\u064A\u0639 \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0627\u0648\u0646\u0644\u0627\u064A\u0646 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function InstallmentCollection_Template_button_click_10_listener() {
            return ctx.collectPrintFiles();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " \u062A\u062C\u0645\u064A\u0639 \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0637\u0628\u0627\u0639\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7)(13, "table", 8)(14, "thead", 9)(15, "tr");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, InstallmentCollection_th_16_Template, 2, 1, "th", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, InstallmentCollection_tr_18_Template, 2, 1, "tr", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "paginate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12)(21, "pagination-controls", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function InstallmentCollection_Template_pagination_controls_pageChange_21_listener($event) {
            return ctx.currentPage = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.columns);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 2, ctx.installments, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.currentPage)));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.NgxPaginationModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_1__.PaginatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return InstallmentCollection;
})();

/***/ }),

/***/ 82423:
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-pagination/fesm2020/ngx-pagination.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxPaginationModule: () => (/* binding */ NgxPaginationModule),
/* harmony export */   PaginatePipe: () => (/* binding */ PaginatePipe),
/* harmony export */   PaginationControlsComponent: () => (/* binding */ PaginationControlsComponent),
/* harmony export */   PaginationControlsDirective: () => (/* binding */ PaginationControlsDirective),
/* harmony export */   PaginationService: () => (/* binding */ PaginationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 93683);




function PaginationControlsComponent_ul_3_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.previous());
    })("click", function PaginationControlsComponent_ul_3_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.previousLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_1_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_1_span_2_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", p_r3.isFirstPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", 1 < p_r3.getCurrent());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r3.isFirstPage());
  }
}
function PaginationControlsComponent_ul_3_li_4_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.setCurrent(page_r6.value));
    })("click", function PaginationControlsComponent_ul_3_li_4_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.setCurrent(page_r6.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.screenReaderPageLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r6.label === "..." ? page_r6.label : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16)(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const page_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.screenReaderCurrentLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](page_r6.label === "..." ? page_r6.label : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 2, page_r6.label, ""));
  }
}
function PaginationControlsComponent_ul_3_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_4_a_1_Template, 6, 5, "a", 10)(2, PaginationControlsComponent_ul_3_li_4_ng_container_2_Template, 7, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("current", p_r3.getCurrent() === page_r6.value)("ellipsis", page_r6.label === "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r3.getCurrent() !== page_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r3.getCurrent() === page_r6.value);
  }
}
function PaginationControlsComponent_ul_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_keyup_enter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.next());
    })("click", function PaginationControlsComponent_ul_3_li_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](p_r3.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.nextLabel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.screenReaderPageLabel);
  }
}
function PaginationControlsComponent_ul_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_5_a_1_Template, 4, 2, "a", 10)(2, PaginationControlsComponent_ul_3_li_5_span_2_Template, 4, 2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", p_r3.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !p_r3.isLastPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r3.isLastPage());
  }
}
function PaginationControlsComponent_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PaginationControlsComponent_ul_3_li_1_Template, 3, 4, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PaginationControlsComponent_ul_3_li_4_Template, 3, 6, "li", 7)(5, PaginationControlsComponent_ul_3_li_5_Template, 3, 4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("responsive", ctx_r3.responsive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.directionLinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", p_r3.getCurrent(), " / ", p_r3.getLastPage(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", p_r3.pages)("ngForTrackBy", ctx_r3.trackByIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.directionLinks);
  }
}
class PaginationService {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.instances = {};
    this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
  }
  defaultId() {
    return this.DEFAULT_ID;
  }
  /**
   * Register a PaginationInstance with this service. Returns a
   * boolean value signifying whether the instance is new or
   * updated (true = new or updated, false = unchanged).
   */
  register(instance) {
    if (instance.id == null) {
      instance.id = this.DEFAULT_ID;
    }
    if (!this.instances[instance.id]) {
      this.instances[instance.id] = instance;
      return true;
    } else {
      return this.updateInstance(instance);
    }
  }
  /**
   * Check each property of the instance and update any that have changed. Return
   * true if any changes were made, else return false.
   */
  updateInstance(instance) {
    let changed = false;
    for (let prop in this.instances[instance.id]) {
      if (instance[prop] !== this.instances[instance.id][prop]) {
        this.instances[instance.id][prop] = instance[prop];
        changed = true;
      }
    }
    return changed;
  }
  /**
   * Returns the current page number.
   */
  getCurrentPage(id) {
    if (this.instances[id]) {
      return this.instances[id].currentPage;
    }
    return 1;
  }
  /**
   * Sets the current page number.
   */
  setCurrentPage(id, page) {
    if (this.instances[id]) {
      let instance = this.instances[id];
      let maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
      if (page <= maxPage && 1 <= page) {
        this.instances[id].currentPage = page;
        this.change.emit(id);
      }
    }
  }
  /**
   * Sets the value of instance.totalItems
   */
  setTotalItems(id, totalItems) {
    if (this.instances[id] && 0 <= totalItems) {
      this.instances[id].totalItems = totalItems;
      this.change.emit(id);
    }
  }
  /**
   * Sets the value of instance.itemsPerPage.
   */
  setItemsPerPage(id, itemsPerPage) {
    if (this.instances[id]) {
      this.instances[id].itemsPerPage = itemsPerPage;
      this.change.emit(id);
    }
  }
  /**
   * Returns a clone of the pagination instance object matching the id. If no
   * id specified, returns the instance corresponding to the default id.
   */
  getInstance(id = this.DEFAULT_ID) {
    if (this.instances[id]) {
      return this.clone(this.instances[id]);
    }
    return {};
  }
  /**
   * Perform a shallow clone of an object.
   */
  clone(obj) {
    var target = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        target[i] = obj[i];
      }
    }
    return target;
  }
}
const LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
let PaginatePipe = /*#__PURE__*/(() => {
  class PaginatePipe {
    constructor(service) {
      this.service = service;
      // store the values from the last time the pipe was invoked
      this.state = {};
    }
    transform(collection, args) {
      // When an observable is passed through the AsyncPipe, it will output
      // `null` until the subscription resolves. In this case, we want to
      // use the cached data from the `state` object to prevent the NgFor
      // from flashing empty until the real values arrive.
      if (!(collection instanceof Array)) {
        let _id = args.id || this.service.defaultId();
        if (this.state[_id]) {
          return this.state[_id].slice;
        } else {
          return collection;
        }
      }
      let serverSideMode = args.totalItems && args.totalItems !== collection.length;
      let instance = this.createInstance(collection, args);
      let id = instance.id;
      let start, end;
      let perPage = instance.itemsPerPage;
      let emitChange = this.service.register(instance);
      if (!serverSideMode && collection instanceof Array) {
        perPage = +perPage || LARGE_NUMBER;
        start = (instance.currentPage - 1) * perPage;
        end = start + perPage;
        let isIdentical = this.stateIsIdentical(id, collection, start, end);
        if (isIdentical) {
          return this.state[id].slice;
        } else {
          let slice = collection.slice(start, end);
          this.saveState(id, collection, slice, start, end);
          this.service.change.emit(id);
          return slice;
        }
      } else {
        if (emitChange) {
          this.service.change.emit(id);
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
      }
    }
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    createInstance(collection, config) {
      this.checkConfig(config);
      return {
        id: config.id != null ? config.id : this.service.defaultId(),
        itemsPerPage: +config.itemsPerPage || 0,
        currentPage: +config.currentPage || 1,
        totalItems: +config.totalItems || collection.length
      };
    }
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    checkConfig(config) {
      const required = ['itemsPerPage', 'currentPage'];
      const missing = required.filter(prop => !(prop in config));
      if (0 < missing.length) {
        throw new Error(`PaginatePipe: Argument is missing the following required properties: ${missing.join(', ')}`);
      }
    }
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    saveState(id, collection, slice, start, end) {
      this.state[id] = {
        collection,
        size: collection.length,
        slice,
        start,
        end
      };
    }
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    stateIsIdentical(id, collection, start, end) {
      let state = this.state[id];
      if (!state) {
        return false;
      }
      let isMetaDataIdentical = state.size === collection.length && state.start === start && state.end === end;
      if (!isMetaDataIdentical) {
        return false;
      }
      return state.slice.every((element, index) => element === collection[start + index]);
    }
  }
  PaginatePipe.ɵfac = function PaginatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaginatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PaginationService, 16));
  };
  PaginatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "paginate",
    type: PaginatePipe,
    pure: false,
    standalone: false
  });
  return PaginatePipe;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
const DEFAULT_TEMPLATE = `
    <pagination-template  #p="paginationApi"
                         [id]="id"
                         [maxSize]="maxSize"
                         (pageChange)="pageChange.emit($event)"
                         (pageBoundsCorrection)="pageBoundsCorrection.emit($event)">
    <nav role="navigation" [attr.aria-label]="screenReaderPaginationLabel">
    <ul class="ngx-pagination" 
        [class.responsive]="responsive"
        *ngIf="!(autoHide && p.pages.length <= 1)">

        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> 
            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isFirstPage()" aria-disabled="true">
                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li> 

        <li class="small-screen">
            {{ p.getCurrent() }} / {{ p.getLastPage() }}
        </li>

        <li [class.current]="p.getCurrent() === page.value" 
            [class.ellipsis]="page.label === '...'"
            *ngFor="let page of p.pages; trackBy: trackByIndex">
            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">
                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span>
            </a>
            <ng-container *ngIf="p.getCurrent() === page.value">
              <span aria-live="polite">
                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>
                <span>{{ (page.label === '...') ? page.label : (page.label | number:'') }}</span> 
              </span>
            </ng-container>
        </li>

        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">
            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </a>
            <span *ngIf="p.isLastPage()" aria-disabled="true">
                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>
            </span>
        </li>

    </ul>
    </nav>
    </pagination-template>
    `;
const DEFAULT_STYLES = `
.ngx-pagination {
  margin-left: 0;
  margin-bottom: 1rem; }
  .ngx-pagination::before, .ngx-pagination::after {
    content: ' ';
    display: table; }
  .ngx-pagination::after {
    clear: both; }
  .ngx-pagination li {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    margin-right: 0.0625rem;
    border-radius: 0; }
  .ngx-pagination li {
    display: inline-block; }
  .ngx-pagination a,
  .ngx-pagination button {
    color: #0a0a0a; 
    display: block;
    padding: 0.1875rem 0.625rem;
    border-radius: 0; }
    .ngx-pagination a:hover,
    .ngx-pagination button:hover {
      background: #e6e6e6; }
  .ngx-pagination .current {
    padding: 0.1875rem 0.625rem;
    background: #2199e8;
    color: #fefefe;
    cursor: default; }
  .ngx-pagination .disabled {
    padding: 0.1875rem 0.625rem;
    color: #cacaca;
    cursor: default; } 
    .ngx-pagination .disabled:hover {
      background: transparent; }
  .ngx-pagination a, .ngx-pagination button {
    cursor: pointer; }

.ngx-pagination .pagination-previous a::before,
.ngx-pagination .pagination-previous.disabled::before { 
  content: '«';
  display: inline-block;
  margin-right: 0.5rem; }

.ngx-pagination .pagination-next a::after,
.ngx-pagination .pagination-next.disabled::after {
  content: '»';
  display: inline-block;
  margin-left: 0.5rem; }

.ngx-pagination .show-for-sr {
  position: absolute !important;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0); }
.ngx-pagination .small-screen {
  display: none; }
@media screen and (max-width: 601px) {
  .ngx-pagination.responsive .small-screen {
    display: inline-block; } 
  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {
    display: none; }
}
  `;

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
let PaginationControlsDirective = /*#__PURE__*/(() => {
  class PaginationControlsDirective {
    constructor(service, changeDetectorRef) {
      this.service = service;
      this.changeDetectorRef = changeDetectorRef;
      this.maxSize = 7;
      this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.pages = [];
      this.changeSub = this.service.change.subscribe(id => {
        if (this.id === id) {
          this.updatePageLinks();
          this.changeDetectorRef.markForCheck();
          this.changeDetectorRef.detectChanges();
        }
      });
    }
    ngOnInit() {
      if (this.id === undefined) {
        this.id = this.service.defaultId();
      }
      this.updatePageLinks();
    }
    ngOnChanges(changes) {
      this.updatePageLinks();
    }
    ngOnDestroy() {
      this.changeSub.unsubscribe();
    }
    /**
     * Go to the previous page
     */
    previous() {
      this.checkValidId();
      this.setCurrent(this.getCurrent() - 1);
    }
    /**
     * Go to the next page
     */
    next() {
      this.checkValidId();
      this.setCurrent(this.getCurrent() + 1);
    }
    /**
     * Returns true if current page is first page
     */
    isFirstPage() {
      return this.getCurrent() === 1;
    }
    /**
     * Returns true if current page is last page
     */
    isLastPage() {
      return this.getLastPage() === this.getCurrent();
    }
    /**
     * Set the current page number.
     */
    setCurrent(page) {
      this.pageChange.emit(page);
    }
    /**
     * Get the current page number.
     */
    getCurrent() {
      return this.service.getCurrentPage(this.id);
    }
    /**
     * Returns the last page number
     */
    getLastPage() {
      let inst = this.service.getInstance(this.id);
      if (inst.totalItems < 1) {
        // when there are 0 or fewer (an error case) items, there are no "pages" as such,
        // but it makes sense to consider a single, empty page as the last page.
        return 1;
      }
      return Math.ceil(inst.totalItems / inst.itemsPerPage);
    }
    getTotalItems() {
      return this.service.getInstance(this.id).totalItems;
    }
    checkValidId() {
      if (this.service.getInstance(this.id).id == null) {
        console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`);
      }
    }
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    updatePageLinks() {
      let inst = this.service.getInstance(this.id);
      const correctedCurrentPage = this.outOfBoundCorrection(inst);
      if (correctedCurrentPage !== inst.currentPage) {
        setTimeout(() => {
          this.pageBoundsCorrection.emit(correctedCurrentPage);
          this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        });
      } else {
        this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
      }
    }
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    outOfBoundCorrection(instance) {
      const totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
      if (totalPages < instance.currentPage && 0 < totalPages) {
        return totalPages;
      } else if (instance.currentPage < 1) {
        return 1;
      }
      return instance.currentPage;
    }
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    createPageArray(currentPage, itemsPerPage, totalItems, paginationRange) {
      // paginationRange could be a string if passed from attribute, so cast to number.
      paginationRange = +paginationRange;
      let pages = [];
      // Return 1 as default page number
      // Make sense to show 1 instead of empty when there are no items
      const totalPages = Math.max(Math.ceil(totalItems / itemsPerPage), 1);
      const halfWay = Math.ceil(paginationRange / 2);
      const isStart = currentPage <= halfWay;
      const isEnd = totalPages - halfWay < currentPage;
      const isMiddle = !isStart && !isEnd;
      let ellipsesNeeded = paginationRange < totalPages;
      let i = 1;
      while (i <= totalPages && i <= paginationRange) {
        let label;
        let pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
        let openingEllipsesNeeded = i === 2 && (isMiddle || isEnd);
        let closingEllipsesNeeded = i === paginationRange - 1 && (isMiddle || isStart);
        if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
          label = '...';
        } else {
          label = pageNumber;
        }
        pages.push({
          label: label,
          value: pageNumber
        });
        i++;
      }
      return pages;
    }
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    calculatePageNumber(i, currentPage, paginationRange, totalPages) {
      let halfWay = Math.ceil(paginationRange / 2);
      if (i === paginationRange) {
        return totalPages;
      } else if (i === 1) {
        return i;
      } else if (paginationRange < totalPages) {
        if (totalPages - halfWay < currentPage) {
          return totalPages - paginationRange + i;
        } else if (halfWay < currentPage) {
          return currentPage - halfWay + i;
        } else {
          return i;
        }
      } else {
        return i;
      }
    }
  }
  PaginationControlsDirective.ɵfac = function PaginationControlsDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaginationControlsDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PaginationService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
  };
  PaginationControlsDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: PaginationControlsDirective,
    selectors: [["pagination-template"], ["", "pagination-template", ""]],
    inputs: {
      id: "id",
      maxSize: "maxSize"
    },
    outputs: {
      pageChange: "pageChange",
      pageBoundsCorrection: "pageBoundsCorrection"
    },
    exportAs: ["paginationApi"],
    standalone: false,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
  return PaginationControlsDirective;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function coerceToBoolean(input) {
  return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
let PaginationControlsComponent = /*#__PURE__*/(() => {
  class PaginationControlsComponent {
    constructor() {
      this.maxSize = 7;
      this.previousLabel = 'Previous';
      this.nextLabel = 'Next';
      this.screenReaderPaginationLabel = 'Pagination';
      this.screenReaderPageLabel = 'page';
      this.screenReaderCurrentLabel = `You're on page`;
      this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this.pageBoundsCorrection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
      this._directionLinks = true;
      this._autoHide = false;
      this._responsive = false;
    }
    get directionLinks() {
      return this._directionLinks;
    }
    set directionLinks(value) {
      this._directionLinks = coerceToBoolean(value);
    }
    get autoHide() {
      return this._autoHide;
    }
    set autoHide(value) {
      this._autoHide = coerceToBoolean(value);
    }
    get responsive() {
      return this._responsive;
    }
    set responsive(value) {
      this._responsive = coerceToBoolean(value);
    }
    trackByIndex(index) {
      return index;
    }
  }
  PaginationControlsComponent.ɵfac = function PaginationControlsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PaginationControlsComponent)();
  };
  PaginationControlsComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PaginationControlsComponent,
    selectors: [["pagination-controls"]],
    inputs: {
      id: "id",
      maxSize: "maxSize",
      directionLinks: "directionLinks",
      autoHide: "autoHide",
      responsive: "responsive",
      previousLabel: "previousLabel",
      nextLabel: "nextLabel",
      screenReaderPaginationLabel: "screenReaderPaginationLabel",
      screenReaderPageLabel: "screenReaderPageLabel",
      screenReaderCurrentLabel: "screenReaderCurrentLabel"
    },
    outputs: {
      pageChange: "pageChange",
      pageBoundsCorrection: "pageBoundsCorrection"
    },
    standalone: false,
    decls: 4,
    vars: 4,
    consts: [["p", "paginationApi"], [3, "pageChange", "pageBoundsCorrection", "id", "maxSize"], ["role", "navigation"], ["class", "ngx-pagination", 3, "responsive", 4, "ngIf"], [1, "ngx-pagination"], ["class", "pagination-previous", 3, "disabled", 4, "ngIf"], [1, "small-screen"], [3, "current", "ellipsis", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "pagination-next", 3, "disabled", 4, "ngIf"], [1, "pagination-previous"], ["tabindex", "0", 3, "keyup.enter", "click", 4, "ngIf"], ["aria-disabled", "true", 4, "ngIf"], ["tabindex", "0", 3, "keyup.enter", "click"], [1, "show-for-sr"], ["aria-disabled", "true"], [4, "ngIf"], ["aria-live", "polite"], [1, "pagination-next"]],
    template: function PaginationControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "pagination-template", 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function PaginationControlsComponent_Template_pagination_template_pageChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.pageChange.emit($event));
        })("pageBoundsCorrection", function PaginationControlsComponent_Template_pagination_template_pageBoundsCorrection_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.pageBoundsCorrection.emit($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PaginationControlsComponent_ul_3_Template, 6, 8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const p_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id)("maxSize", ctx.maxSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", ctx.screenReaderPaginationLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.autoHide && p_r3.pages.length <= 1));
      }
    },
    dependencies: [PaginationControlsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe],
    styles: [".ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:\" \";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:\"\\ab\";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:\"\\bb\";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return PaginationControlsComponent;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgxPaginationModule = /*#__PURE__*/(() => {
  class NgxPaginationModule {}
  NgxPaginationModule.ɵfac = function NgxPaginationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgxPaginationModule)();
  };
  NgxPaginationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NgxPaginationModule
  });
  NgxPaginationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [PaginationService],
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
  });
  return NgxPaginationModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of ngx-pagination
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=1722.js.map