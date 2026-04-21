"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4656],{

/***/ 24656:
/*!************************************************************************!*\
  !*** ./src/app/features/core/pages/login/login-client/login-client.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginClientComponent: () => (/* binding */ LoginClientComponent)
/* harmony export */ });
/* harmony import */ var _login_form_login_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-form/login-form */ 59926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/services/auth */ 90503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/sweet-alert.service */ 31365);





let LoginClientComponent = /*#__PURE__*/(() => {
  class LoginClientComponent {
    authService;
    router;
    swal;
    initialLoading = true;
    constructor(authService, router, swal) {
      this.authService = authService;
      this.router = router;
      this.swal = swal;
    }
    ngOnInit() {
      // Simulate initial loading for requested skeleton effect
      setTimeout(() => {
        this.initialLoading = false;
      }, 500);
    }
    login(data) {
      const email = data.usernameOrEmail;
      this.authService.loginClient(email, data.password).subscribe({
        next: res => {
          this.authService.saveToken(res.token);
          this.authService.saveUser(res.user);
          this.recordLogin(email, 'client', 'success');
          this.swal.success({
            title: 'مرحباً!',
            text: res.message || 'تم تسجيل الدخول بنجاح',
            timer: 1500,
            showConfirmButton: false
          }).then(() => {
            this.router.navigate(['/']);
          });
        },
        error: err => {
          this.recordLogin(email, 'client', 'failed');
          this.swal.error({
            title: 'خطأ',
            text: err.message || 'اسم المستخدم أو كلمة المرور غير صحيحة',
            confirmButtonText: 'حسناً'
          });
        }
      });
    }
    recordLogin(email, type, status) {
      const loginRecord = {
        id: Date.now(),
        username: email,
        email: email,
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
    static ɵfac = function LoginClientComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_4__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginClientComponent,
      selectors: [["app-login-client"]],
      decls: 1,
      vars: 1,
      consts: [["title", "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0627\u0644\u0639\u0645\u0644\u0627\u0621", "logo", "/assets/client-logo.svg", 3, "submitForm", "initialLoading"]],
      template: function LoginClientComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-login-form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submitForm", function LoginClientComponent_Template_app_login_form_submitForm_0_listener($event) {
            return ctx.login($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("initialLoading", ctx.initialLoading);
        }
      },
      dependencies: [_login_form_login_form__WEBPACK_IMPORTED_MODULE_0__.LoginFormComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return LoginClientComponent;
})();

/***/ })

}]);
//# sourceMappingURL=4656.js.map