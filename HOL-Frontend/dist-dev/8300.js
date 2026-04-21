"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[8300],{

/***/ 5919:
/*!**************************************************************************************!*\
  !*** ./src/app/features/managments/pages/pending-permissions/pending-permissions.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PendingPermissionsPage: () => (/* binding */ PendingPermissionsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/textarea */ 65654);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _core_services_permission_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/services/permission.service */ 80871);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/sweet-alert.service */ 31365);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/api */ 17780);





















const _c0 = () => ({
  width: "450px"
});
const _c1 = () => [1, 2, 3, 4, 5];
function PendingPermissionsPage_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0627\u0644\u0642\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\u0627\u0644\u0642\u064A\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u0627\u0644\u0633\u0628\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function PendingPermissionsPage_div_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "p-skeleton", 18)(4, "p-skeleton", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "p-skeleton", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "p-skeleton", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "p-skeleton", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "p-skeleton", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "p-skeleton", 25)(17, "p-skeleton", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function PendingPermissionsPage_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "p-table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PendingPermissionsPage_div_6_ng_template_2_Template, 15, 0, "ng-template", 14)(3, PendingPermissionsPage_div_6_ng_template_3_Template, 18, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](1, _c1));
  }
}
function PendingPermissionsPage_p_table_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0627\u0644\u0642\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u0646\u0648\u0639 \u0627\u0644\u0637\u0644\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "\u0627\u0644\u0642\u064A\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "\u0627\u0644\u0633\u0628\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function PendingPermissionsPage_p_table_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "p-tag", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td")(8, "code", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td", 24)(16, "p-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PendingPermissionsPage_p_table_7_ng_template_2_Template_p_button_click_16_listener() {
      const req_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.openProcess(req_r2, "Approved"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "p-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PendingPermissionsPage_p_table_7_ng_template_2_Template_p_button_click_17_listener() {
      const req_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.openProcess(req_r2, "Rejected"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const req_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](req_r2.fullName || req_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](req_r2.department);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("severity", req_r2.requestType === "Department" || req_r2.requestType === "Sec" ? "info" : "warn")("value", req_r2.requestType === "Department" || req_r2.requestType === "Sec" ? "\u062F\u062E\u0648\u0644 \u0642\u0633\u0645" : "\u0635\u0644\u0627\u062D\u064A\u0629 \u0645\u064A\u0632\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](req_r2.requestedValue || req_r2.requestValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("title", req_r2.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](req_r2.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 8, req_r2.createdAt, "short"));
  }
}
function PendingPermissionsPage_p_table_7_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr")(1, "td", 36)(2, "div", 37)(3, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0627\u0644\u0647\u062F\u0648\u0621 \u064A\u0639\u0645 \u0627\u0644\u0645\u0643\u0627\u0646.. \uD83D\uDD4A\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0637\u0644\u0628\u0627\u062A \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0645\u0639\u0644\u0642\u0629 \u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0645\u0631\u0627\u062C\u0639\u062A\u0643 \u062D\u0627\u0644\u064A\u0627\u064B.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
}
function PendingPermissionsPage_p_table_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PendingPermissionsPage_p_table_7_ng_template_1_Template, 15, 0, "ng-template", 14)(2, PendingPermissionsPage_p_table_7_ng_template_2_Template, 18, 11, "ng-template", 15)(3, PendingPermissionsPage_p_table_7_ng_template_3_Template, 7, 0, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.requests)("responsiveLayout", "scroll");
  }
}
function PendingPermissionsPage_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PendingPermissionsPage_ng_template_13_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.displayModal = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PendingPermissionsPage_ng_template_13_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.confirmProcess());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", ctx_r2.modalAction === "Approved" ? "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629" : "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0631\u0641\u0636")("icon", ctx_r2.modalAction === "Approved" ? "pi pi-check" : "pi pi-times")("severity", ctx_r2.modalAction === "Approved" ? "success" : "danger");
  }
}
let PendingPermissionsPage = /*#__PURE__*/(() => {
  class PendingPermissionsPage {
    permissionService;
    swal;
    auth;
    requests = [];
    loading = true;
    displayModal = false;
    modalAction = 'Approved';
    selectedRequest = null;
    processComment = '';
    constructor(permissionService, swal, auth) {
      this.permissionService = permissionService;
      this.swal = swal;
      this.auth = auth;
    }
    ngOnInit() {
      this.loadRequests();
    }
    loadRequests() {
      this.loading = true;
      this.permissionService.getPendingRequests().subscribe({
        next: data => {
          this.requests = data;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.swal.error({
            title: 'خطأ',
            text: 'فشل تحميل الطلبات'
          });
        }
      });
    }
    openProcess(req, action) {
      this.selectedRequest = req;
      this.modalAction = action;
      this.processComment = '';
      this.displayModal = true;
    }
    confirmProcess() {
      if (!this.selectedRequest || this.selectedRequest.id === undefined) return;
      this.permissionService.processRequest(this.selectedRequest.id, this.modalAction, this.processComment).subscribe({
        next: () => {
          this.swal.toast({
            icon: 'success',
            title: 'تمت العملية بنجاح'
          });
          this.displayModal = false;
          this.loadRequests(); // Refresh
        },
        error: () => this.swal.error({
          title: 'خطأ',
          text: 'فشل في إتمام العملية'
        })
      });
    }
    static ɵfac = function PendingPermissionsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PendingPermissionsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_permission_service__WEBPACK_IMPORTED_MODULE_10__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_11__.SweetAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_12__.AuthService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: PendingPermissionsPage,
      selectors: [["app-pending-permissions"]],
      decls: 14,
      vars: 12,
      consts: [[1, "card", "p-6", "bg-white", "rounded-2xl", "shadow-sm", "border", "border-gray-100"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-gray-800", "flex", "items-center", "gap-2"], [1, "pi", "pi-shield", "text-primary", "text-3xl"], ["icon", "pi pi-refresh", 3, "click", "loading", "rounded", "text"], ["class", "border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden", 4, "ngIf"], ["styleClass", "p-datatable-sm", 3, "value", "responsiveLayout", 4, "ngIf"], [1, "p-fluid", 3, "visibleChange", "visible", "header", "modal"], [1, "field", "mt-4"], [1, "font-bold", "mb-2", "block"], ["pTextarea", "", "rows", "4", "placeholder", "\u0627\u0643\u062A\u0628 \u0645\u0628\u0631\u0631\u0627\u062A \u0627\u0644\u0642\u0631\u0627\u0631 \u0647\u0646\u0627...", 3, "ngModelChange", "ngModel"], ["pTemplate", "footer"], [1, "border", "border-gray-100", "dark:border-gray-800", "rounded-2xl", "overflow-hidden"], ["styleClass", "p-datatable-sm", 3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], [1, "text-center"], [1, "flex", "items-center", "gap-2"], ["shape", "circle", "size", "1.5rem"], ["width", "6rem"], ["width", "5rem"], ["width", "4rem", "height", "1.5rem", "borderRadius", "1rem"], ["width", "4rem"], ["width", "8rem"], [1, "flex", "gap-2", "justify-center"], ["width", "4rem", "height", "2rem"], ["styleClass", "p-datatable-sm", 3, "value", "responsiveLayout"], ["pTemplate", "emptymessage"], [1, "font-bold"], [1, "text-sm"], [3, "severity", "value"], [1, "bg-gray-100", "p-1", "rounded"], [1, "text-sm", "truncate", "max-w-[200px]", 3, "title"], [1, "text-xs", "text-gray-500"], ["icon", "pi pi-check", "severity", "success", "label", "\u0645\u0648\u0627\u0641\u0642\u0629", 1, "p-button-sm", "rounded-lg", 3, "click"], ["icon", "pi pi-times", "severity", "danger", "label", "\u0631\u0641\u0636", 1, "p-button-sm", "rounded-lg", 3, "click"], ["colspan", "7", 1, "p-0"], [1, "flex", "flex-col", "items-center", "justify-center", "py-16", "bg-gray-50/30", "dark:bg-gray-800/30", "rounded-b-2xl"], [1, "text-xl", "font-bold", "text-gray-700", "dark:text-gray-200", "mb-2"], [1, "text-gray-500", "dark:text-gray-400"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", 3, "click", "text"], [3, "click", "label", "icon", "severity"]],
      template: function PendingPermissionsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "i", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, " \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0627\u0644\u0645\u0639\u0644\u0642\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p-button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PendingPermissionsPage_Template_p_button_click_5_listener() {
            return ctx.loadRequests();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, PendingPermissionsPage_div_6_Template, 4, 2, "div", 5)(7, PendingPermissionsPage_p_table_7_Template, 4, 2, "p-table", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "p-dialog", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("visibleChange", function PendingPermissionsPage_Template_p_dialog_visibleChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.displayModal, $event) || (ctx.displayModal = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8)(10, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "textarea", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayListener"]("ngModelChange", function PendingPermissionsPage_Template_textarea_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayBindingSet"](ctx.processComment, $event) || (ctx.processComment = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, PendingPermissionsPage_ng_template_13_Template, 2, 4, "ng-template", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("loading", ctx.loading)("rounded", true)("text", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](11, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("visible", ctx.displayModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("header", ctx.modalAction === "Approved" ? "\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0644\u0628" : "\u0631\u0641\u0636 \u0627\u0644\u0637\u0644\u0628")("modal", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtwoWayProperty"]("ngModel", ctx.processComment);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, primeng_table__WEBPACK_IMPORTED_MODULE_1__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_1__.Table, primeng_api__WEBPACK_IMPORTED_MODULE_13__.PrimeTemplate, primeng_tag__WEBPACK_IMPORTED_MODULE_2__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_2__.Tag, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_6__.Dialog, primeng_textarea__WEBPACK_IMPORTED_MODULE_4__.TextareaModule, primeng_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_skeleton__WEBPACK_IMPORTED_MODULE_7__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      encapsulation: 2
    });
  }
  return PendingPermissionsPage;
})();

/***/ })

}]);
//# sourceMappingURL=8300.js.map