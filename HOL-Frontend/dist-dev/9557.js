"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[9557],{

/***/ 69557:
/*!*************************************************************************************************!*\
  !*** ./src/app/features/execution/pages/execution-statements-page/execution-statements-page.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecutionStatementsPage: () => (/* binding */ ExecutionStatementsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_shared_data_table_data_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/data-table/data-table */ 13825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let ExecutionStatementsPage = /*#__PURE__*/(() => {
  class ExecutionStatementsPage {
    columns = [{
      header: 'الكود',
      field: 'code'
    }, {
      header: 'الموكل',
      field: 'client'
    }, {
      header: 'الاسم',
      field: 'name'
    }, {
      header: 'المحكمة',
      field: 'court'
    }, {
      header: 'منطوق الحكم',
      field: 'judgmentText'
    }, {
      header: 'قيمة المطالبة',
      field: 'claimValue'
    }, {
      header: 'الموظف',
      field: 'employee'
    }, {
      header: 'الحالة',
      field: 'status'
    }];
    results = [{
      code: 'A101',
      client: 'أحمد علي',
      name: 'دعوى 123',
      court: 'محكمة التنفيذ',
      judgmentText: 'قبول الدعوى',
      claimValue: 1000,
      employee: 'سعاد',
      status: 'مستلم'
    }, {
      code: 'A102',
      client: 'سارة محمد',
      name: 'دعوى 456',
      court: 'محكمة الأسرة',
      judgmentText: 'رفض الدعوى',
      claimValue: 2000,
      employee: 'علي',
      status: 'قيد النظر'
    }];
    lookupConfig = {
      title: '🏛️ اختر المحكمة',
      columns: ['name', 'city', 'type'],
      data: [{
        name: 'محكمة التنفيذ',
        city: 'الرياض',
        type: 'عامة'
      }, {
        name: 'محكمة الأسرة',
        city: 'جدة',
        type: 'خاصة'
      }],
      targetField: 'name'
    };
    static ɵfac = function ExecutionStatementsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ExecutionStatementsPage)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: ExecutionStatementsPage,
      selectors: [["app-execution-statements-page"]],
      decls: 1,
      vars: 6,
      consts: [[3, "title", "filterLabel", "searchPlaceholder", "columns", "data", "lookupConfig"]],
      template: function ExecutionStatementsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-data-table", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "\u2696\uFE0F \u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630")("filterLabel", "\u0627\u0644\u0645\u062D\u0643\u0645\u0629")("searchPlaceholder", "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0643\u0648\u062F \u0623\u0648 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0645\u062D\u0643\u0645\u0629...")("columns", ctx.columns)("data", ctx.results)("lookupConfig", ctx.lookupConfig);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _components_shared_data_table_data_table__WEBPACK_IMPORTED_MODULE_2__.DataTable],
      styles: ["div[_ngcontent-%COMP%], table[_ngcontent-%COMP%] {\n    direction: rtl !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL3BhZ2VzL2V4ZWN1dGlvbi1zdGF0ZW1lbnRzLXBhZ2UvZXhlY3V0aW9uLXN0YXRlbWVudHMtcGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsIHRhYmxlIHtcclxuICAgIGRpcmVjdGlvbjogcnRsICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return ExecutionStatementsPage;
})();

/***/ })

}]);
//# sourceMappingURL=9557.js.map