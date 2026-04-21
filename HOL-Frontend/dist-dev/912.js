"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[912],{

/***/ 60912:
/*!************************************************************************!*\
  !*** ./src/app/features/core/pages/login/login-public/login-public.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginPublicComponent: () => (/* binding */ LoginPublicComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/auth */ 90503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 35430);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/sweet-alert.service */ 31365);










function LoginPublicComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "p-skeleton", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "p-skeleton", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "p-skeleton", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 14)(9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "p-skeleton", 16)(11, "p-skeleton", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "p-skeleton", 19)(14, "p-skeleton", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "p-skeleton", 22)(17, "p-skeleton", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "p-skeleton", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function LoginPublicComponent_ng_container_6_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u0627\u0645\u0633\u062D \u0631\u0645\u0632 QR \u0645\u0646 \u062A\u0637\u0628\u064A\u0642 \u0647\u0648\u064A\u062A\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.qr, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("success", ctx_r1.status === "approved")("error", ctx_r1.status === "rejected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.status === "pending" ? "\u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u062A\u0623\u0643\u064A\u062F..." : ctx_r1.status === "approved" ? "\u062A\u0645 \u0627\u0644\u062A\u0623\u0643\u064A\u062F \u2713" : "\u062A\u0645 \u0627\u0644\u0631\u0641\u0636 \u2717", " ");
  }
}
function LoginPublicComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\uD83E\uDEAA");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0627\u0644\u0639\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u0627\u0644\u062F\u062E\u0648\u0644 \u0639\u0628\u0631 \u0627\u0644\u0647\u0648\u064A\u0629 \u0627\u0644\u0631\u0642\u0645\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginPublicComponent_ng_container_6_Template_form_ngSubmit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 28)(10, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function LoginPublicComponent_ng_container_6_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.civilId, $event) || (ctx_r1.civilId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 31)(14, "label")(15, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function LoginPublicComponent_ng_container_6_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.personalLogin, $event) || (ctx_r1.personalLogin = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u062F\u062E\u0648\u0644 \u0634\u062E\u0635\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 33)(19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\uD83D\uDD10");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u0633\u064A\u062A\u0645 \u0627\u0644\u062A\u062D\u0642\u0642 \u0639\u0628\u0631 \u062A\u0637\u0628\u064A\u0642 \u0647\u0648\u064A\u062A\u064A - \u064A\u0645\u0643\u0646\u0643 \u0625\u062F\u062E\u0627\u0644 \u0623\u064A \u0631\u0642\u0645 \u0645\u062F\u0646\u064A \u0644\u0644\u0627\u062E\u062A\u0628\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0639\u0628\u0631 \u0647\u0648\u064A\u062A\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, LoginPublicComponent_ng_container_6_div_25_Template, 6, 6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.civilId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.personalLogin);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.started);
  }
}
let LoginPublicComponent = /*#__PURE__*/(() => {
  class LoginPublicComponent {
    auth;
    router;
    location;
    swal;
    civilId = '';
    started = false;
    txId = '';
    qr = '';
    personalLogin = false;
    status = '';
    loading = true;
    constructor(auth, router, location, swal) {
      this.auth = auth;
      this.router = router;
      this.location = location;
      this.swal = swal;
    }
    ngOnInit() {
      // Simulate initial loading for requested skeleton effect
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
    goBack() {
      this.location.back();
    }
    onSubmit() {
      if (!this.civilId) {
        this.swal.warning({
          title: 'تنبيه',
          text: 'يرجى إدخال الرقم المدني',
          confirmButtonText: 'حسناً'
        });
        return;
      }
      this.auth.loginViaHawiyati().subscribe({
        next: res => {
          this.auth.saveToken(res.token || 'hawiyati-token-' + Date.now());
          this.auth.saveUser({
            id: 1,
            username: this.civilId,
            name: res.name || 'مستخدم هويتي',
            role: 'public'
          });
          this.recordLogin(this.civilId, 'public', 'success');
          this.swal.success({
            title: 'مرحباً!',
            text: res.message || 'تم تسجيل الدخول بنجاح',
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            this.router.navigate(['/']);
          });
        },
        error: () => {
          this.recordLogin(this.civilId, 'public', 'failed');
          this.swal.error({
            title: 'خطأ',
            text: 'حدث خطأ أثناء التحقق',
            confirmButtonText: 'حسناً'
          });
        }
      });
    }
    recordLogin(civilId, type, status) {
      const loginRecord = {
        id: Date.now(),
        username: 'Civil ID: ' + civilId,
        email: '',
        loginType: type,
        loginTime: new Date().toISOString(),
        ipAddress: '192.168.1.1',
        status: status,
        userAgent: navigator.userAgent
      };
      const logins = JSON.parse(localStorage.getItem('login_history') || '[]');
      logins.unshift(loginRecord);
      if (logins.length > 100) {
        logins.pop();
      }
      localStorage.setItem('login_history', JSON.stringify(logins));
    }
    static ɵfac = function LoginPublicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginPublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LoginPublicComponent,
      selectors: [["app-login-public"]],
      decls: 7,
      vars: 2,
      consts: [["dir", "rtl", 1, "login-page"], [1, "login-bg"], [1, "login-card"], [1, "back-btn", 3, "click"], ["class", "animate-pulse", 4, "ngIf"], [4, "ngIf"], [1, "animate-pulse"], [1, "login-header"], [1, "flex", "justify-center", "mb-4"], ["shape", "circle", "size", "4rem"], [1, "flex", "justify-center", "mb-2"], ["width", "12rem", "height", "2rem"], [1, "flex", "justify-center"], ["width", "10rem"], [1, "login-form"], [1, "form-field", "mb-4"], ["width", "6rem", "styleClass", "mb-2"], ["width", "100%", "height", "3rem", "borderRadius", "0.75rem"], [1, "checkbox-field", "mb-6", "flex", "gap-2", "items-center"], ["width", "1.5rem", "height", "1.5rem", "borderRadius", "0.25rem"], ["width", "6rem"], [1, "hint-box", "mb-6", "border", "border-gray-100", "p-3", "rounded-lg", "flex", "items-center", "gap-3"], ["shape", "circle", "size", "1.5rem"], ["width", "100%", "styleClass", "bg-gray-50"], ["width", "100%", "height", "3.5rem", "borderRadius", "0.75rem"], [1, "login-icon"], [1, "subtitle"], [1, "login-form", 3, "ngSubmit"], [1, "form-field"], [1, "form-label"], ["type", "text", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A", "name", "civilId", "required", "", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "checkbox-field"], ["type", "checkbox", "name", "personalLogin", 3, "ngModelChange", "ngModel"], [1, "hint-box"], ["type", "submit", 1, "form-button", "form-button-primary", "submit-btn"], ["class", "qr-section", 4, "ngIf"], [1, "qr-section"], ["alt", "QR Code", 1, "qr-code", 3, "src"], [1, "status"]],
      template: function LoginPublicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginPublicComponent_Template_button_click_3_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u2190 \u0631\u062C\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, LoginPublicComponent_div_5_Template, 19, 0, "div", 4)(6, LoginPublicComponent_ng_container_6_Template, 26, 3, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, primeng_skeleton__WEBPACK_IMPORTED_MODULE_2__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton],
      styles: [".login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  position: relative;\n  background-color: var(--surface-ground);\n}\n\n.login-bg[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: linear-gradient(135deg, #1a365d 0%, #2d3748 50%, #1a202c 100%);\n  z-index: -1;\n}\n\n\n\n.app-dark[_ngcontent-%COMP%]   .login-bg[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0a0e1a 100%);\n}\n\n.login-card[_ngcontent-%COMP%] {\n  background: var(--surface-card);\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);\n  position: relative;\n  color: var(--text-color);\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: transparent;\n  border: none;\n  color: var(--text-color-secondary);\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  transition: all 0.2s;\n}\n\n.back-btn[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n  color: var(--text-color);\n}\n\n.login-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.login-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n\n.login-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--text-color);\n  margin: 0 0 0.5rem 0;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  margin: 0;\n}\n\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n\n.checkbox-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  color: var(--text-color);\n}\n\n.checkbox-field[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  accent-color: var(--primary-color);\n}\n\n.hint-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem;\n  background: rgba(214, 158, 46, 0.1);\n  border: 1px solid rgba(214, 158, 46, 0.3);\n  border-radius: 8px;\n  font-size: 0.875rem;\n  color: var(--text-color);\n}\n\n.app-dark[_ngcontent-%COMP%]   .hint-box[_ngcontent-%COMP%] {\n  background: rgba(214, 158, 46, 0.15);\n  border-color: rgba(214, 158, 46, 0.4);\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem;\n  font-size: 1rem;\n  margin-top: 0.5rem;\n}\n\n.qr-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid var(--surface-border);\n  text-align: center;\n}\n\n.qr-code[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  margin: 1rem auto;\n  display: block;\n  border-radius: 8px;\n}\n\n.status[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 0.5rem 1rem;\n  border-radius: 8px;\n  display: inline-block;\n}\n\n.status.success[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.1);\n  color: #16a34a;\n}\n\n.status.error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #dc2626;\n}\n\n\n\n.login-form[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  background-color: var(--surface-ground) !important;\n  color: var(--text-color) !important;\n  border-color: var(--surface-border) !important;\n}\n\n.login-form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary) !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29yZS9wYWdlcy9sb2dpbi9sb2dpbi1wdWJsaWMvbG9naW4tcHVibGljLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsMEVBQTBFO0VBQzFFLFdBQVc7QUFDYjs7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQyx5Q0FBeUM7RUFDekMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGNBQWM7QUFDaEI7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0Usa0RBQWtEO0VBQ2xELG1DQUFtQztFQUNuQyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSw2Q0FBNkM7QUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcclxufVxyXG5cclxuLmxvZ2luLWJnIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzFhMzY1ZCAwJSwgIzJkMzc0OCA1MCUsICMxYTIwMmMgMTAwJSk7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi8qIERhcmsgbW9kZSBiYWNrZ3JvdW5kICovXHJcbi5hcHAtZGFyayAubG9naW4tYmcge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwZjE3MmEgMCUsICMxZTI5M2IgNTAlLCAjMGEwZTFhIDEwMCUpO1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDIuNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMjVweCA1MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4uYmFjay1idG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFyZW07XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxufVxyXG5cclxuLmJhY2stYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ubG9naW4taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5sb2dpbi1oZWFkZXIgaDIge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5jaGVja2JveC1maWVsZCBsYWJlbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5jaGVja2JveC1maWVsZCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gIHdpZHRoOiAxLjI1cmVtO1xyXG4gIGhlaWdodDogMS4yNXJlbTtcclxuICBhY2NlbnQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4uaGludC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNCwgMTU4LCA0NiwgMC4xKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNCwgMTU4LCA0NiwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuXHJcbi5hcHAtZGFyayAuaGludC1ib3gge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjE0LCAxNTgsIDQ2LCAwLjE1KTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjE0LCAxNTgsIDQ2LCAwLjQpO1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC44NzVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLnFyLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5xci1jb2RlIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5zdGF0dXMge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnN0YXR1cy5zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDM0LCAxOTcsIDk0LCAwLjEpO1xyXG4gIGNvbG9yOiAjMTZhMzRhO1xyXG59XHJcblxyXG4uc3RhdHVzLmVycm9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xyXG4gIGNvbG9yOiAjZGMyNjI2O1xyXG59XHJcblxyXG4vKiBFbnN1cmUgZm9ybSBpbnB1dHMgd29yayBpbiBkYXJrIG1vZGUgKi9cclxuLmxvZ2luLWZvcm0gLmZvcm0taW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc3VyZmFjZS1ib3JkZXIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIC5mb3JtLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return LoginPublicComponent;
})();

/***/ })

}]);
//# sourceMappingURL=912.js.map