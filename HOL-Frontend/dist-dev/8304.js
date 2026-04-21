"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[8304],{

/***/ 58304:
/*!******************************************************************!*\
  !*** ./src/app/features/car-management/car-management-routes.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CARMANAGEMENT_ROUTES: () => (/* binding */ CARMANAGEMENT_ROUTES)
/* harmony export */ });
/* harmony import */ var _pages_car_management_dashboard_car_management_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/car-management-dashboard/car-management-dashboard */ 92819);

const CARMANAGEMENT_ROUTES = [{
  path: '',
  component: _pages_car_management_dashboard_car_management_dashboard__WEBPACK_IMPORTED_MODULE_0__.CarManagementDashboard
}];

/***/ }),

/***/ 92819:
/*!****************************************************************************************************!*\
  !*** ./src/app/features/car-management/pages/car-management-dashboard/car-management-dashboard.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CarManagementDashboard: () => (/* binding */ CarManagementDashboard)
/* harmony export */ });
/* harmony import */ var _core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/dashboard-layout/dashboard-layout */ 95021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);


let CarManagementDashboard = /*#__PURE__*/(() => {
  class CarManagementDashboard {
    actions = [{
      title: 'الرئيسية',
      type: 'navigate',
      value: '/car-management/car-management-main'
    }];
    static ɵfac = function CarManagementDashboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CarManagementDashboard)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CarManagementDashboard,
      selectors: [["app-car-management-dashboard"]],
      decls: 1,
      vars: 3,
      consts: [[3, "title", "subtitle", "actions"]],
      template: function CarManagementDashboard_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-dashboard-layout", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "\u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A")("subtitle", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u062A\u064A \u062A\u0631\u063A\u0628 \u0641\u064A \u062A\u0646\u0641\u064A\u0630\u0647\u0627")("actions", ctx.actions);
        }
      },
      dependencies: [_core_dashboard_layout_dashboard_layout__WEBPACK_IMPORTED_MODULE_0__.DashboardLayout],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CarManagementDashboard;
})();

/***/ })

}]);
//# sourceMappingURL=8304.js.map