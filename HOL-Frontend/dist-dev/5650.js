"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[5650],{

/***/ 95650:
/*!****************************************************************************!*\
  !*** ./src/app/features/core/pages/login/login-employee/login-employee.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginEmployeeComponent: () => (/* binding */ LoginEmployeeComponent)
/* harmony export */ });
/* harmony import */ var _login_form_login_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../login-form/login-form */ 59926);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/toast */ 61225);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 33900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/services/auth */ 90503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _shared_services_prime_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/prime-toast.service */ 58571);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/sweet-alert.service */ 31365);









let LoginEmployeeComponent = /*#__PURE__*/(() => {
  class LoginEmployeeComponent {
    authService;
    router;
    toast;
    swal;
    destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    isLoading = false;
    initialLoading = true;
    // Security constants
    MAX_INPUT_LENGTH = 255;
    MIN_PASSWORD_LENGTH = 6;
    REQUEST_TIMEOUT = 30000; // 30 seconds
    constructor(authService, router, toast, swal) {
      this.authService = authService;
      this.router = router;
      this.toast = toast;
      this.swal = swal;
    }
    ngOnInit() {
      // Simulate initial loading for requested skeleton effect
      setTimeout(() => {
        this.initialLoading = false;
      }, 500);
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    login(data) {
      // Security: Input validation
      if (!this.validateInput(data)) {
        return;
      }
      // Security: Sanitize inputs
      const sanitizedData = this.sanitizeInput(data);
      this.isLoading = true;
      // Security: Timeout protection
      const timeout = setTimeout(() => {
        this.isLoading = false;
        this.toast.error('انتهت مهلة الاتصال. يرجى المحاولة مرة أخرى', 'خطأ في الاتصال');
      }, this.REQUEST_TIMEOUT);
      this.authService.loginEmployee(sanitizedData.usernameOrEmail, sanitizedData.password).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
        next: res => {
          clearTimeout(timeout);
          this.isLoading = false;
          // Security: Validate response
          if (!this.validateResponse(res)) {
            this.toast.error('استجابة غير صحيحة من الخادم', 'خطأ في الأمان');
            return;
          }
          // Security: Validate and save JWT token
          if (!res.token) {
            this.toast.error('لم يتم استلام Token من الخادم', 'خطأ في الأمان');
            return;
          }
          // Security: Clear failed attempts on success
          this.clearFailedAttempts();
          // Save token with validation
          const tokenSaved = this.authService.saveToken(res.token);
          if (!tokenSaved) {
            this.toast.error('فشل حفظ Token. يرجى المحاولة مرة أخرى', 'خطأ في الأمان');
            return;
          }
          // Save user data
          this.authService.saveUser(res.user);
          // Get message from server or use default
          const msg = res.message || 'تم تسجيل الدخول بنجاح';
          // If the message is a security warning (account open elsewhere), show a prominent Alert
          if (msg.includes('مفتوح') || msg.includes('جلسة') || msg.includes('جهاز') || msg.includes('secured')) {
            this.swal.success({
              title: 'تم تأمين الحساب',
              text: msg,
              confirmButtonText: 'حسناً، استكمال العمل',
              confirmButtonColor: '#10b981'
            });
          } else {
            this.toast.success(msg, 'مرحباً!', {
              life: 3000
            });
          }
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1500);
        },
        error: err => {
          clearTimeout(timeout);
          this.isLoading = false;
          // Security: Generic error message
          const errorMessage = this.getSecureErrorMessage(err);
          this.toast.error(errorMessage, 'خطأ في تسجيل الدخول');
        }
      });
    }
    /**
     * Security: Validate input data
     */
    validateInput(data) {
      if (!data || !data.usernameOrEmail || !data.password) {
        this.toast.error('يرجى إدخال جميع البيانات المطلوبة', 'بيانات ناقصة');
        return false;
      }
      const usernameOrEmail = data.usernameOrEmail.trim();
      const password = data.password.trim();
      // Check length limits
      if (usernameOrEmail.length === 0 || usernameOrEmail.length > this.MAX_INPUT_LENGTH) {
        this.toast.error('اسم المستخدم أو البريد الإلكتروني غير صحيح', 'خطأ في الإدخال');
        return false;
      }
      if (password.length < this.MIN_PASSWORD_LENGTH || password.length > this.MAX_INPUT_LENGTH) {
        this.toast.error(`كلمة المرور يجب أن تكون بين ${this.MIN_PASSWORD_LENGTH} و ${this.MAX_INPUT_LENGTH} حرف`, 'خطأ في الإدخال');
        return false;
      }
      // Check for malicious input
      if (this.containsMaliciousInput(usernameOrEmail) || this.containsMaliciousInput(password)) {
        this.toast.error('يحتوي الإدخال على أحرف غير مسموح بها', 'خطأ في الأمان');
        return false;
      }
      return true;
    }
    /**
     * Security: Sanitize input to prevent XSS
     */
    sanitizeInput(data) {
      return {
        usernameOrEmail: this.sanitizeString(data.usernameOrEmail),
        password: data.password // Don't sanitize password to preserve special characters
      };
    }
    /**
     * Security: Sanitize string
     */
    sanitizeString(input) {
      return input.trim().replace(/[<>]/g, '').replace(/javascript:/gi, '').replace(/on\w+=/gi, '');
    }
    /**
     * Security: Check for malicious input patterns
     */
    containsMaliciousInput(input) {
      const maliciousPatterns = [/<script/i, /javascript:/i, /on\w+\s*=/i, /eval\(/i, /expression\(/i];
      return maliciousPatterns.some(pattern => pattern.test(input));
    }
    /**
     * Security: Validate API response
     */
    validateResponse(res) {
      if (!res) return false;
      // Validate token exists and is a string
      if (!res.token || typeof res.token !== 'string') return false;
      // Validate JWT format (should have 3 parts separated by dots)
      const tokenParts = res.token.split('.');
      if (tokenParts.length !== 3) return false;
      // Validate token length (JWT should be at least 50 characters)
      if (res.token.length < 50) return false;
      // Validate user object exists
      if (!res.user || typeof res.user !== 'object') return false;
      return true;
    }
    /**
     * Security: Get secure error message
     */
    getSecureErrorMessage(err) {
      // If err is an Error object (from AuthService.handleError), use its message
      if (err instanceof Error) return err.message;
      // Priority: Return the exact message from backend if available
      if (err.error?.message) return err.error.message;
      if (err.error && typeof err.error === 'string') return err.error;
      if (err.message && !err.message.includes('Http failure response')) return err.message;
      if (err.status === 401 || err.status === 403) {
        return 'اسم المستخدم أو كلمة المرور غير صحيحة';
      } else if (err.status === 429) {
        return 'تم تجاوز عدد المحاولات المسموح بها. يرجى المحاولة لاحقاً';
      } else if (err.status === 0 || !err.status) {
        return 'خطأ في الاتصال بالخادم. يرجى التحقق من الاتصال بالإنترنت';
      } else if (err.status >= 500) {
        return 'خطأ في الخادم. يرجى المحاولة لاحقاً';
      } else {
        return 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى';
      }
    }
    /**
     * Security: Clear any legacy lockout data
     */
    clearFailedAttempts() {
      localStorage.removeItem('failed_login_attempts');
      localStorage.removeItem('login_lockout');
    }
    static ɵfac = function LoginEmployeeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_prime_toast_service__WEBPACK_IMPORTED_MODULE_7__.PrimeToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_8__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LoginEmployeeComponent,
      selectors: [["app-login-employee"]],
      decls: 2,
      vars: 2,
      consts: [["title", "\u062A\u0633\u062C\u064A\u0644 \u062F\u062E\u0648\u0644 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646", "logo", "/assets/employee-logo.svg", 3, "submitForm", "disabled", "initialLoading"], ["position", "top-center"]],
      template: function LoginEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-login-form", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("submitForm", function LoginEmployeeComponent_Template_app_login_form_submitForm_0_listener($event) {
            return ctx.login($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p-toast", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.isLoading)("initialLoading", ctx.initialLoading);
        }
      },
      dependencies: [_login_form_login_form__WEBPACK_IMPORTED_MODULE_0__.LoginFormComponent, primeng_toast__WEBPACK_IMPORTED_MODULE_1__.ToastModule, primeng_toast__WEBPACK_IMPORTED_MODULE_1__.Toast],
      styles: ["[_nghost-%COMP%] {\n  --main-color: #007bff;\n  --main-hover: #0056b3;\n  --bg-gradient: linear-gradient(135deg, #1a237e, #3949ab);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29yZS9wYWdlcy9sb2dpbi9sb2dpbi1lbXBsb3llZS9sb2dpbi1lbXBsb3llZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHdEQUF3RDtBQUMxRCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAtLW1haW4tY29sb3I6ICMwMDdiZmY7XHJcbiAgLS1tYWluLWhvdmVyOiAjMDA1NmIzO1xyXG4gIC0tYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTIzN2UsICMzOTQ5YWIpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return LoginEmployeeComponent;
})();

/***/ })

}]);
//# sourceMappingURL=5650.js.map