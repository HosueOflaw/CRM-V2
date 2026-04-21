"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[2674],{

/***/ 72674:
/*!***************************************************************************!*\
  !*** ./src/app/features/discussions/pages/upload-status/upload-status.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadStatus: () => (/* binding */ UploadStatus)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);



function UploadStatus_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 10)(1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", i_r2 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r1.notes);
  }
}
function UploadStatus_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let UploadStatus = /*#__PURE__*/(() => {
  class UploadStatus {
    activeStatus = 'pending';
    tableData = {
      pending: [{
        id: 1,
        name: 'ملف 1',
        date: '2025-11-08',
        notes: 'قيد الرفع'
      }, {
        id: 2,
        name: 'ملف 2',
        date: '2025-11-08',
        notes: 'قيد الرفع'
      }],
      uploaded: [{
        id: 3,
        name: 'ملف 3',
        date: '2025-11-07',
        notes: 'تم الرفع'
      }, {
        id: 4,
        name: 'ملف 4',
        date: '2025-11-06',
        notes: 'تم الرفع'
      }]
    };
    get activeTableData() {
      return this.tableData[this.activeStatus];
    }
    filterStatus(status) {
      this.activeStatus = status;
    }
    static ɵfac = function UploadStatus_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UploadStatus)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UploadStatus,
      selectors: [["app-upload-status"]],
      decls: 21,
      vars: 6,
      consts: [[1, "p-6", "space-y-6", 2, "background-color", "var(--surface-ground)"], [1, "flex", "gap-4", "mb-4", "justify-center"], [1, "px-4", "py-2", "rounded-lg", "bg-blue-600", "text-white", "hover:bg-blue-700", 3, "click"], [1, "px-4", "py-2", "rounded-lg", "bg-green-600", "text-white", "hover:bg-green-700", 3, "click"], [1, "p-4", "rounded-2xl", "shadow", 2, "direction", "rtl", "background-color", "var(--surface-card)"], [1, "w-full", "border", "text-sm", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [1, "p-2", "border", "text-right", 2, "border-color", "var(--surface-border)", "color", "var(--text-color)"], ["style", "color: var(--text-color); border-color: var(--surface-border);", 3, "background-color", 4, "ngFor", "ngForOf"], ["class", "text-center py-8", "style", "color: var(--text-color-secondary);", 4, "ngIf"], [2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], [1, "p-2", "border", "text-right", 2, "border-color", "var(--surface-border)"], [1, "text-center", "py-8", 2, "color", "var(--text-color-secondary)"]],
      template: function UploadStatus_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadStatus_Template_button_click_2_listener() {
            return ctx.filterStatus("pending");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u0642\u064A\u062F \u0627\u0644\u0631\u0641\u0639 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UploadStatus_Template_button_click_4_listener() {
            return ctx.filterStatus("uploaded");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " \u062A\u0645 \u0627\u0644\u0631\u0641\u0639 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "table", 5)(8, "thead", 6)(9, "tr")(10, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0627\u0644\u0627\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UploadStatus_tr_19_Template, 9, 6, "tr", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, UploadStatus_div_20_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-blue-800", ctx.activeStatus === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-green-800", ctx.activeStatus === "uploaded");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.activeTableData);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeTableData.length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return UploadStatus;
})();

/***/ })

}]);
//# sourceMappingURL=2674.js.map