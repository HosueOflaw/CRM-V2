"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[3365],{

/***/ 23365:
/*!*************************************************************************!*\
  !*** ./src/app/features/execution/pages/agencies-page/agencies-page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgenciesPage: () => (/* binding */ AgenciesPage)
/* harmony export */ });
/* harmony import */ var _components_shared_data_table_data_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/shared/data-table/data-table */ 13825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);


let AgenciesPage = /*#__PURE__*/(() => {
  class AgenciesPage {
    columns = [{
      header: 'رقم التوكيل',
      field: 'code'
    }, {
      header: 'الوكيل',
      field: 'agent'
    }, {
      header: 'الموكل',
      field: 'client'
    }, {
      header: 'المحكمة',
      field: 'court'
    }, {
      header: 'تاريخ الإصدار',
      field: 'issueDate'
    }, {
      header: 'تاريخ الانتهاء',
      field: 'expiryDate'
    }, {
      header: 'الحالة',
      field: 'status'
    }];
    // 🔹 بيانات تجريبية
    results = [{
      code: 'T-001',
      agent: 'محمود خالد',
      client: 'شركة النور',
      court: 'محكمة شمال الرياض',
      issueDate: '2024-06-01',
      expiryDate: '2026-06-01',
      status: 'ساري'
    }, {
      code: 'T-002',
      agent: 'سارة إبراهيم',
      client: 'محمد علي',
      court: 'محكمة شرق جدة',
      issueDate: '2023-05-10',
      expiryDate: '2025-05-10',
      status: 'منتهي'
    }];
    // 🔹 إعدادات الـ Lookup Modal
    lookupConfig = {
      title: '🧾 اختر التوكيل',
      columns: ['name', 'city', 'type'],
      data: [{
        name: 'توكيل شمال الرياض',
        city: 'الرياض',
        type: 'عام'
      }, {
        name: 'توكيل شرق جدة',
        city: 'جدة',
        type: 'خاص'
      }],
      targetField: 'name'
    };
    title = '📜 التوكيلات';
    filterLabel = 'المحكمة';
    searchPlaceholder = 'ابحث برقم التوكيل أو اسم الموكل أو المحكمة...';
    static ɵfac = function AgenciesPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgenciesPage)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AgenciesPage,
      selectors: [["app-agencies-page"]],
      decls: 1,
      vars: 6,
      consts: [[3, "title", "filterLabel", "searchPlaceholder", "columns", "data", "lookupConfig"]],
      template: function AgenciesPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-data-table", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "\u2696\uFE0F \u0627\u0644\u062A\u0648\u0643\u064A\u0644\u0627\u062A")("filterLabel", "\u0627\u0644\u062A\u0648\u0643\u064A\u0644")("searchPlaceholder", "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0643\u0648\u062F \u0623\u0648 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062A\u0648\u0643\u064A\u0644...")("columns", ctx.columns)("data", ctx.results)("lookupConfig", ctx.lookupConfig);
        }
      },
      dependencies: [_components_shared_data_table_data_table__WEBPACK_IMPORTED_MODULE_0__.DataTable],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AgenciesPage;
})();

/***/ })

}]);
//# sourceMappingURL=3365.js.map