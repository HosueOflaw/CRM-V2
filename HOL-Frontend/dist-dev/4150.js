"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4150],{

/***/ 11472:
/*!********************************************************************************************************!*\
  !*** ./src/app/features/managments/pages/managments-dashboard/components/delegate-permission-modal.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DelegatePermissionModal: () => (/* binding */ DelegatePermissionModal)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ 16280);
/* harmony import */ var primeng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/select */ 38608);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _core_services_permission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/services/permission.service */ 80871);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../services/user.service */ 29885);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/services/auth */ 90503);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/services/sweet-alert.service */ 31365);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 17780);


















const _c0 = () => ({
  width: "450px"
});
function DelegatePermissionModal_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DelegatePermissionModal_ng_template_18_Template_p_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.visible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DelegatePermissionModal_ng_template_18_Template_p_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r1.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r1.loading)("disabled", !ctx_r1.isValid());
  }
}
let DelegatePermissionModal = /*#__PURE__*/(() => {
  class DelegatePermissionModal {
    permissionService;
    userService;
    authService;
    swal;
    onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    visible = false;
    loading = false;
    myEmployees = [];
    selectedEmployeeId = null;
    featureCode = '';
    selectedDep = '';
    // Static list for Labels and Normalization. Values here should likely match Backend DB (PascalCase).
    departmentLabels = [{
      label: 'المفاوضات',
      value: 'Negotiations'
    }, {
      label: 'السكرتارية',
      value: 'Secretariat'
    }, {
      label: 'التنفيذ',
      value: 'Execution'
    }, {
      label: 'الإدارة المالية',
      value: 'Finance'
    }, {
      label: 'المداولات',
      value: 'Discussions'
    }, {
      label: 'التقارير',
      value: 'Reports'
    }, {
      label: 'السيارات',
      value: 'Car-Management'
    }, {
      label: 'الشؤون الإدارية',
      value: 'Management'
    }];
    depAliases = {
      'negotiations': 'negotiations',
      'المفاوضات': 'negotiations',
      'execution': 'execution',
      'التنفيذ': 'execution',
      'finance': 'finance',
      'المالية': 'finance',
      'الإدارة المالية': 'finance',
      'discussions': 'discussions',
      'المداولات': 'discussions',
      'reports': 'reports',
      'التقارير': 'reports',
      'report': 'reports',
      'car-management': 'car-management',
      'السيارات': 'car-management',
      'secretariat': 'secretariat',
      'السكرتارية': 'secretariat',
      'sec': 'secretariat',
      'management': 'management',
      'الشؤون الإدارية': 'management',
      'managment': 'management'
    };
    constructor(permissionService, userService, authService, swal) {
      this.permissionService = permissionService;
      this.userService = userService;
      this.authService = authService;
      this.swal = swal;
    }
    visibleDepartments = [];
    ngOnInit() {}
    open(employeeId) {
      this.visible = true;
      this.selectedEmployeeId = employeeId || null;
      this.featureCode = '';
      this.selectedDep = '';
      console.log('--- Current User State ---', this.authService.getUser());
      this.buildAvailableDepartments(); // Dynamic build
      this.loadMyEmployees();
    }
    buildAvailableDepartments() {
      this.visibleDepartments = []; // Clear previous departments
      if (this.authService.isAdmin()) {
        // Admin can see/delegate ALL system departments
        this.visibleDepartments = this.departmentLabels.map(d => ({
          label: d.label,
          value: d.value
        }));
        // Note: Admin should send standard values. Ideally matching backend expectations.
        // Assuming backend expects standard English keys for Admins who might not have 'department' set.
        // If Admin fails, we might need to know what backend expects. But usually Admin has global rights.
        return;
      }
      const user = this.authService.getUser();
      if (!user) {
        this.visibleDepartments = [];
        return;
      }
      const myDeps = new Set();
      // 1. Primary Department
      if (user.department) myDeps.add(user.department);
      // 2. Accessible Departments
      const accessible = user.accessibleDepartments || [];
      if (Array.isArray(accessible)) {
        accessible.forEach(d => myDeps.add(d));
      } else if (typeof accessible === 'string') {
        accessible.split(',').forEach(d => myDeps.add(d.trim()));
      }
      // Build dropdown options ensuring we strictly normalize to PascalCase if known
      this.visibleDepartments = Array.from(myDeps).map(depValue => {
        const normalized = depValue.trim().toLowerCase();
        const alias = this.depAliases[normalized] || normalized;
        // Find valid system definition
        const labelObj = this.departmentLabels.find(l => l.value.toLowerCase() === alias) || this.departmentLabels.find(l => l.value.toLowerCase() === normalized);
        return {
          label: labelObj ? labelObj.label : depValue,
          // CRITICAL: Send exactly what the user holds. Now that AuthService preserves case, 
          // this ensures we pass the Backend 'Contains' check regardless of casing convention.
          value: depValue
        };
      });
      console.log('--- Delegate Modal: Built User Departments (Normalized) ---', this.visibleDepartments);
    }
    loadMyEmployees() {
      const currentUser = this.authService.getUser();
      if (!currentUser) return;
      // Backend enforces: employee.Department == supervisor.SupervisedDepartment
      // We must enforce strict matching (ignoring case) to ensure delegation succeeds.
      const supervisorDept = (currentUser.department || '').trim();
      this.userService.getUsers().subscribe({
        next: users => {
          // If Admin, show ALL users.
          if (this.authService.isAdmin()) {
            this.myEmployees = users;
            return;
          }
          // If Supervisor, filter strictly by department name match
          console.log(`--- Filtering Employees for Supervisor Dept: '${supervisorDept}' ---`);
          this.myEmployees = users.filter(u => {
            const empDept = (u.department || '').trim();
            const isDeptMatch = empDept.toLowerCase() === supervisorDept.toLowerCase();
            const isSelf = u.id === currentUser.id;
            const isAdminUser = (u.role || '').toLowerCase().includes('admin');
            if (!isDeptMatch && (empDept || supervisorDept)) {
              // Log mismatches that might have been caught by aliases before
              // console.log(`Excluding ${u.fullName}: '${empDept}' != '${supervisorDept}'`);
            }
            return isDeptMatch && !isSelf && !isAdminUser;
          });
          console.log(`--- Found ${this.myEmployees.length} employees strictly matching '${supervisorDept}' ---`);
        }
      });
    }
    isValid() {
      return !!this.selectedEmployeeId && ((this.featureCode || '').trim().length > 0 || (this.selectedDep || '').length > 0);
    }
    submit() {
      if (!this.isValid() || !this.selectedEmployeeId) return;
      this.loading = true;
      // 1. Fetch target user's current permissions first to avoid overwriting
      this.userService.getUserById(this.selectedEmployeeId).subscribe({
        next: targetUser => {
          let currentDeps = targetUser.accessibleDepartments || [];
          let currentFeatures = targetUser.accessibleFeatures || [];
          // Convert to array if string
          if (typeof currentDeps === 'string') currentDeps = currentDeps.split(',').filter(x => !!x);
          if (typeof currentFeatures === 'string') currentFeatures = currentFeatures.split(',').filter(x => !!x);
          // 2. Add new selections if not already present
          if (this.selectedDep && !currentDeps.includes(this.selectedDep)) {
            currentDeps.push(this.selectedDep);
          }
          if (this.featureCode.trim() && !currentFeatures.includes(this.featureCode.trim())) {
            currentFeatures.push(this.featureCode.trim());
          }
          // 3. Send combined permissions to backend
          this.permissionService.delegatePermission(this.selectedEmployeeId, currentDeps.join(','), currentFeatures.join(',')).subscribe({
            next: () => {
              this.loading = false;
              this.swal.success({
                title: 'تم التفويض بنجاح',
                text: 'تم منح الصلاحيات مع الحفاظ على الصلاحيات السابقة للموظف.',
                confirmButtonText: 'ممتاز'
              });
              this.visible = false;
              this.onComplete.emit();
            },
            error: err => {
              this.loading = false;
              this.swal.error({
                title: 'فشل التفويض',
                text: err.error?.message || 'حدث خطأ أثناء عملية التفويض.',
                confirmButtonText: 'حسناً'
              });
            }
          });
        },
        error: err => {
          this.loading = false;
          this.swal.error({
            title: 'خطأ',
            text: 'فشل استرجاع بيانات الموظف لتحديث صلاحياته.'
          });
        }
      });
    }
    static ɵfac = function DelegatePermissionModal_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DelegatePermissionModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_permission_service__WEBPACK_IMPORTED_MODULE_8__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_10__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_11__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DelegatePermissionModal,
      selectors: [["app-delegate-permission-modal"]],
      outputs: {
        onComplete: "onComplete"
      },
      decls: 19,
      vars: 14,
      consts: [["header", "\u062A\u0641\u0648\u064A\u0636 \u0635\u0644\u0627\u062D\u064A\u0629 \u0644\u0645\u0648\u0638\u0641", 3, "visibleChange", "visible", "modal", "draggable", "resizable"], [1, "flex", "flex-col", "gap-4", "py-2"], [1, "text-sm", "text-gray-500", "mb-2"], [1, "flex", "flex-col", "gap-2"], [1, "font-bold", "text-gray-700"], ["optionLabel", "fullName", "optionValue", "id", "placeholder", "\u0627\u062E\u062A\u0631 \u0645\u0648\u0638\u0641\u0627\u064B...", "filterBy", "fullName", 1, "w-full", 3, "ngModelChange", "options", "ngModel", "filter"], ["optionLabel", "label", "optionValue", "value", "placeholder", "\u0627\u062E\u062A\u0631 \u0642\u0633\u0645\u0627\u064B...", 1, "w-full", 3, "ngModelChange", "options", "ngModel", "showClear"], ["pInputText", "", "placeholder", "\u0645\u062B\u0644\u0627\u064B: edit_client_details", 3, "ngModelChange", "ngModel"], [1, "text-gray-400"], ["pTemplate", "footer"], ["label", "\u0625\u0644\u063A\u0627\u0621", "icon", "pi pi-times", "severity", "secondary", 3, "click", "text"], ["label", "\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u062A\u0641\u0648\u064A\u0636", "icon", "pi pi-user-plus", 3, "click", "loading", "disabled"]],
      template: function DelegatePermissionModal_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-dialog", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("visibleChange", function DelegatePermissionModal_Template_p_dialog_visibleChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.visible, $event) || (ctx.visible = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0628\u0635\u0641\u062A\u0643 \u0645\u0634\u0631\u0641\u0627\u064B\u060C \u064A\u0645\u0643\u0646\u0643 \u0645\u0646\u062D \u0635\u0644\u0627\u062D\u064A\u0627\u062A \u0645\u062D\u062F\u062F\u0629 \u0644\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0627\u0644\u062A\u0627\u0628\u0639\u064A\u0646 \u0644\u0642\u0633\u0645\u0643 \u0641\u0642\u0637. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p-select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DelegatePermissionModal_Template_p_select_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedEmployeeId, $event) || (ctx.selectedEmployeeId = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u062A\u0641\u0648\u064A\u0636 \u0642\u0633\u0645 \u0643\u0627\u0645\u0644 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p-select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DelegatePermissionModal_Template_p_select_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.selectedDep, $event) || (ctx.selectedDep = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3)(13, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0643\u0648\u062F \u0635\u0644\u0627\u062D\u064A\u0629 \u0645\u062D\u062F\u062F\u0629 (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function DelegatePermissionModal_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.featureCode, $event) || (ctx.featureCode = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u064A\u0645\u0643\u0646\u0643 \u0645\u0646\u062D \u0635\u0644\u0627\u062D\u064A\u0629 \u0645\u062D\u062F\u062F\u0629 \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0642\u0633\u0645 \u0643\u0627\u0645\u0644.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DelegatePermissionModal_ng_template_18_Template, 2, 3, "ng-template", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("visible", ctx.visible);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modal", true)("draggable", false)("resizable", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.myEmployees);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedEmployeeId);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filter", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.visibleDepartments);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedDep);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showClear", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.featureCode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.Dialog, primeng_api__WEBPACK_IMPORTED_MODULE_12__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_3__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_3__.Button, primeng_select__WEBPACK_IMPORTED_MODULE_5__.SelectModule, primeng_select__WEBPACK_IMPORTED_MODULE_5__.Select, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText],
      encapsulation: 2
    });
  }
  return DelegatePermissionModal;
})();

/***/ }),

/***/ 44150:
/*!********************************************************************************!*\
  !*** ./src/app/features/managments/pages/team-performance/team-performance.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamPerformancePage: () => (/* binding */ TeamPerformancePage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 49136);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ 76676);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/inputtext */ 48361);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/card */ 51486);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/tag */ 93616);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/chart */ 8564);
/* harmony import */ var primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/skeleton */ 76301);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/user.service */ 29885);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/task.service */ 82611);
/* harmony import */ var _managments_dashboard_components_delegate_permission_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../managments-dashboard/components/delegate-permission-modal */ 11472);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _core_services_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../core/services/auth */ 90503);
/* harmony import */ var _services_break_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../services/break.service */ 25873);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/api */ 17780);




























const _c0 = ["delModal"];
const _c1 = () => [1, 2, 3, 4, 5, 6];
const _c2 = () => [1, 2, 3, 4, 5];
const _c3 = () => ["fullName", "username", "department"];
const _c4 = () => ["/management/tasks"];
const _c5 = a0 => ({
  assignedToId: a0
});
function TeamPerformancePage_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "\u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0634\u0627\u0645\u0644\u0629 \u0644\u062C\u0645\u064A\u0639 \u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0627\u0644\u062A\u062D\u0644\u064A\u0644\u0627\u062A \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function TeamPerformancePage_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("\u0645\u0631\u0627\u0642\u0628\u0629 \u062D\u064A\u0629 \u0644\u0623\u062F\u0627\u0621 \u0641\u0631\u064A\u0642 \u0642\u0633\u0645 (", ctx_r1.authService.getUserDepartment(), ")");
  }
}
function TeamPerformancePage_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TeamPerformancePage_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      const delModal_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](12);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](delModal_r4.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function TeamPerformancePage_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "p-skeleton", 32)(2, "p-skeleton", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}
function TeamPerformancePage_div_9_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td", 34)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "p-skeleton", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "p-skeleton", 37)(6, "p-skeleton", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "p-skeleton", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "p-skeleton", 41)(11, "p-skeleton", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "td")(13, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "p-skeleton", 44)(15, "p-skeleton", 44)(16, "p-skeleton", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "td", 45)(18, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "p-skeleton", 44)(20, "p-skeleton", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}
function TeamPerformancePage_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, TeamPerformancePage_div_9_div_2_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 16)(4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](5, "p-skeleton", 18)(6, "p-skeleton", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div", 20)(8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](9, "p-skeleton", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "p-skeleton", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](13, "p-skeleton", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "p-skeleton", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "div", 25)(17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "p-skeleton", 27)(19, "p-skeleton", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "p-table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](21, TeamPerformancePage_div_9_ng_template_21_Template, 21, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](3, _c2));
  }
}
function TeamPerformancePage_ng_container_10_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr", 88)(1, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "\u0627\u0644\u0643\u0641\u0627\u0621\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8, "\u0627\u0644\u0645\u0647\u0627\u0645 (\u0645\u0639\u0644\u0642\u0629/\u0646\u0634\u0637\u0629)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}
function TeamPerformancePage_ng_container_10_ng_template_90_p_tag_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "p-tag", 111);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("rounded", true);
  }
}
function TeamPerformancePage_ng_container_10_ng_template_90_p_tag_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "p-tag", 112);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("rounded", true);
  }
}
function TeamPerformancePage_ng_container_10_ng_template_90_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", user_r8.highPriorityTasks, " \u062D\u0631\u062C\u0629");
  }
}
function TeamPerformancePage_ng_container_10_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr", 91)(1, "td", 34)(2, "div", 35)(3, "div", 92)(4, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](6, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "div")(8, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, TeamPerformancePage_ng_container_10_ng_template_90_p_tag_13_Template, 1, 1, "p-tag", 96)(14, TeamPerformancePage_ng_container_10_ng_template_90_p_tag_14_Template, 1, 1, "p-tag", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "td", 40)(16, "div", 98)(17, "div", 99)(18, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19, "\u0625\u0646\u062C\u0627\u0632");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "td")(25, "div", 35)(26, "div", 103)(27, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, TeamPerformancePage_ng_container_10_ng_template_90_div_33_Template, 4, 1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](34, "td", 108)(35, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TeamPerformancePage_ng_container_10_ng_template_90_Template_button_click_35_listener() {
      const user_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r1.openDelegateModal(user_r8.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](36, "button", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", (user_r8.fullName || user_r8.username).substring(0, 1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("bg-green-500", !user_r8.isOnBreak)("bg-orange-500", user_r8.isOnBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", user_r8.fullName || user_r8.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"]("", user_r8.department, " \u2022 ", user_r8.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", user_r8.isOnBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !user_r8.isOnBreak);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("text-green-500", user_r8.efficiency >= 70)("text-yellow-600", user_r8.efficiency < 70 && user_r8.efficiency >= 40)("text-red-500", user_r8.efficiency < 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", user_r8.efficiency, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("width", user_r8.efficiency + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassProp"]("bg-green-500", user_r8.efficiency >= 70)("bg-yellow-500", user_r8.efficiency < 70 && user_r8.efficiency >= 40)("bg-red-500", user_r8.efficiency < 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](user_r8.pendingTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](user_r8.inProgressTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](user_r8.completedTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", user_r8.highPriorityTasks > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](31, _c4))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](32, _c5, user_r8.id));
  }
}
function TeamPerformancePage_ng_container_10_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr")(1, "td", 115)(2, "div", 116)(3, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "i", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "p", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0648\u0638\u0641\u0648\u0646 \u0641\u064A \u0647\u0630\u0627 \u0627\u0644\u0646\u0637\u0627\u0642 \u062D\u0627\u0644\u064A\u0627\u064B");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
  }
}
function TeamPerformancePage_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "div", 14)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "\u0642\u0648\u0629 \u0627\u0644\u0641\u0631\u064A\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 50)(7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](10, "\u0639\u0636\u0648");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](12, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "\u064A\u0639\u0645\u0644\u0648\u0646 \u0627\u0644\u0622\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](15, "div", 50)(16, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](19, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "\u062C\u0627\u0631\u064D \u0627\u0644\u0639\u0645\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](23, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25, "\u0641\u064A \u0627\u0633\u062A\u0631\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](26, "div", 50)(27, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](30, "\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](32, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](33, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](34, "\u0643\u0641\u0627\u0621\u0629 \u0627\u0644\u0641\u0631\u064A\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](35, "div", 50)(36, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](38, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](39, "\u0645\u062A\u0648\u0633\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](40, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](42, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](43, "\u0625\u0646\u062C\u0627\u0632 \u0627\u0644\u064A\u0648\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](44, "div", 50)(45, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](47, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](48, "\u0645\u0647\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](49, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](50, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](52, "\u0645\u0647\u0627\u0645 \u062D\u0631\u062C\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](53, "div", 50)(54, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](57, "High Risk");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](58, "div", 16)(59, "div", 17)(60, "div", 69)(61, "h3", 70)(62, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](63, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, " \u062A\u0648\u0632\u064A\u0639 \u0636\u063A\u0637 \u0627\u0644\u0639\u0645\u0644 (Workload) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66, "\u0623\u0643\u062B\u0631 5 \u0645\u0648\u0638\u0641\u064A\u0646 \u0644\u062F\u064A\u0647\u0645 \u0645\u0647\u0627\u0645 \u0646\u0634\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](67, "p-chart", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](68, "div", 20)(69, "div", 75)(70, "h3", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](71, "\u062A\u0648\u0627\u0632\u0646 \u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](72, "p-chart", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](73, "div", 75)(74, "h3", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](75, "\u062A\u063A\u0637\u064A\u0629 \u0627\u0644\u0623\u0642\u0633\u0627\u0645 (\u0635\u0644\u0627\u062D\u064A\u0627\u062A)");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](76, "p-chart", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "div", 25)(78, "div", 79)(79, "div")(80, "h3", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](81, "\u0631\u0627\u062F\u0627\u0631 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](82, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](83, "\u0639\u0631\u0636 \u062A\u0641\u0635\u064A\u0644\u064A \u0644\u0644\u0643\u0641\u0627\u0621\u0629 \u0648\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0644\u062D\u0638\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](84, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](85, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](86, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("input", function TeamPerformancePage_ng_container_10_Template_input_input_86_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r5);
      const dt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](88);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](dt_r6.filterGlobal($event.target.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](87, "p-table", 85, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](89, TeamPerformancePage_ng_container_10_ng_template_89_Template, 11, 0, "ng-template", 86)(90, TeamPerformancePage_ng_container_10_ng_template_90_Template, 37, 34, "ng-template", 30)(91, TeamPerformancePage_ng_container_10_ng_template_91_Template, 7, 0, "ng-template", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.totalEmployees);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.activeOnTasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.onBreakCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", ctx_r1.teamEfficiency, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.completedToday);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r1.criticalTasksCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx_r1.workloadChartData)("options", ctx_r1.chartOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx_r1.priorityChartData)("options", ctx_r1.doughnutOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("data", ctx_r1.permissionChartData)("options", ctx_r1.chartOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", ctx_r1.users)("rowHover", true)("rows", 10)("paginator", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction0"](17, _c3));
  }
}
let TeamPerformancePage = /*#__PURE__*/(() => {
  class TeamPerformancePage {
    authService;
    userService;
    taskService;
    breakService;
    delModal;
    users = [];
    loading = false;
    isSupervisor = false;
    isAdmin = false;
    // Stats
    totalEmployees = 0;
    activeOnTasks = 0;
    onBreakCount = 0;
    completedToday = 0;
    teamEfficiency = 0;
    criticalTasksCount = 0;
    // Charts
    workloadChartData;
    priorityChartData;
    permissionChartData;
    chartOptions;
    doughnutOptions;
    constructor(authService, userService, taskService, breakService) {
      this.authService = authService;
      this.userService = userService;
      this.taskService = taskService;
      this.breakService = breakService;
    }
    ngOnInit() {
      this.isSupervisor = this.authService.isSupervisor();
      this.isAdmin = this.authService.isAdmin();
      this.initChartOptions();
      this.loadTeamData();
    }
    initChartOptions() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color') || '#495057';
      const surfaceBorder = documentStyle.getPropertyValue('--content-border-color') || '#dfe7ef';
      this.chartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
              font: {
                family: 'inherit',
                size: 12
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColor
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColor
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
      this.doughnutOptions = {
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: textColor,
              usePointStyle: true
            }
          }
        }
      };
    }
    loadTeamData() {
      this.loading = true;
      const dept = this.authService.getUserDepartment();
      const depAliases = {
        'negotiations': 'negotiations',
        'المفاوضات': 'negotiations',
        'execution': 'execution',
        'التنفيذ': 'execution',
        'finance': 'finance',
        'المالية': 'finance',
        'الإدارة المالية': 'finance',
        'discussions': 'discussions',
        'المداولات': 'discussions',
        'reports': 'reports',
        'التقارير': 'reports',
        'report': 'reports',
        'car-management': 'car-management',
        'السيارات': 'car-management',
        'secretariat': 'secretariat',
        'السكرتارية': 'secretariat',
        'management': 'management',
        'الشؤون الإدارية': 'management',
        'managment': 'management'
      };
      const normalizedSupervisorDept = (dept ? depAliases[dept.toLowerCase().trim()] || dept.toLowerCase().trim() : '').toLowerCase();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)({
        users: this.userService.getUsers(),
        allTasks: this.taskService.getTasks({}),
        activeBreaks: this.breakService.getActiveBreaks()
      }).subscribe({
        next: data => {
          let filteredUsers = [];
          if (this.isAdmin) {
            filteredUsers = data.users;
          } else if (this.isSupervisor) {
            filteredUsers = data.users.filter(u => {
              const uDep = (u.department || '').toLowerCase().trim();
              const normalizedUDep = depAliases[uDep] || uDep;
              return normalizedUDep === normalizedSupervisorDept && u.id !== this.authService.getUser()?.id && (u.role || '').toLowerCase() !== 'admin';
            });
          }
          this.users = filteredUsers.map(user => {
            const userTasks = data.allTasks.filter(t => t.assignedToId === user.id);
            const total = userTasks.length;
            const completed = userTasks.filter(t => t.status === _services_task_service__WEBPACK_IMPORTED_MODULE_10__.TaskStatus.Completed).length;
            return {
              ...user,
              pendingTasks: userTasks.filter(t => t.status === _services_task_service__WEBPACK_IMPORTED_MODULE_10__.TaskStatus.Pending).length,
              inProgressTasks: userTasks.filter(t => t.status === _services_task_service__WEBPACK_IMPORTED_MODULE_10__.TaskStatus.InProgress).length,
              completedTasks: completed,
              highPriorityTasks: userTasks.filter(t => t.priority === 'High').length,
              isOnBreak: data.activeBreaks.some(b => b.userId === user.id),
              efficiency: total > 0 ? Math.round(completed / total * 100) : 0
            };
          });
          this.processCharts(data.allTasks);
          this.updateStats();
          this.loading = false;
        },
        error: err => {
          console.error('Failed to load team data', err);
          this.loading = false;
        }
      });
    }
    processCharts(allTasks) {
      // 1. Workload Chart (Top 5 busiest employees)
      const sortedUsers = [...this.users].sort((a, b) => b.pendingTasks + b.inProgressTasks - (a.pendingTasks + a.inProgressTasks)).slice(0, 5);
      this.workloadChartData = {
        labels: sortedUsers.map(u => u.fullName || u.username),
        datasets: [{
          label: 'المهام النشطة',
          data: sortedUsers.map(u => u.pendingTasks + u.inProgressTasks),
          backgroundColor: ['#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899'],
          borderRadius: 8
        }]
      };
      // 2. Priority Distribution (Team-wide)
      const high = allTasks.filter(t => t.priority === 'High').length;
      const medium = allTasks.filter(t => t.priority === 'Medium').length;
      const low = allTasks.filter(t => t.priority === 'Low').length;
      this.priorityChartData = {
        labels: ['عالية', 'متوسطة', 'منخفضة'],
        datasets: [{
          data: [high, medium, low],
          backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
          hoverBackgroundColor: ['#dc2626', '#d97706', '#059669']
        }]
      };
      // 3. Permissions Heatmap (By department)
      const deptCounts = {};
      this.users.forEach(u => {
        const perms = Array.isArray(u.accessibleDepartments) ? u.accessibleDepartments : [];
        perms.forEach(p => {
          deptCounts[p] = (deptCounts[p] || 0) + 1;
        });
      });
      this.permissionChartData = {
        labels: Object.keys(deptCounts),
        datasets: [{
          label: 'عدد الموظفين المصرح لهم',
          data: Object.values(deptCounts),
          backgroundColor: 'rgba(99, 102, 241, 0.2)',
          borderColor: '#6366f1',
          pointBackgroundColor: '#6366f1',
          pointBorderColor: '#fff'
        }]
      };
    }
    updateStats() {
      this.totalEmployees = this.users.length;
      this.onBreakCount = this.users.filter(u => u.isOnBreak).length;
      this.activeOnTasks = this.users.filter(u => u.inProgressTasks > 0).length;
      this.completedToday = this.users.reduce((acc, u) => acc + u.completedTasks, 0);
      this.criticalTasksCount = this.users.reduce((acc, u) => acc + u.highPriorityTasks, 0);
      const totalEff = this.users.reduce((acc, u) => acc + u.efficiency, 0);
      this.teamEfficiency = this.users.length > 0 ? Math.round(totalEff / this.users.length) : 0;
    }
    getPermissionsDisplay(user) {
      const perms = user.accessibleDepartments;
      if (Array.isArray(perms)) {
        return perms.join('، ');
      } else if (typeof perms === 'string') {
        return perms;
      }
      return 'لا توجد صلاحيات إضافية';
    }
    openDelegateModal(userId) {
      this.delModal.open(userId);
    }
    static ɵfac = function TeamPerformancePage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TeamPerformancePage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_core_services_auth__WEBPACK_IMPORTED_MODULE_16__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_task_service__WEBPACK_IMPORTED_MODULE_10__.TaskService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_break_service__WEBPACK_IMPORTED_MODULE_17__.BreakService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
      type: TeamPerformancePage,
      selectors: [["app-team-performance"]],
      viewQuery: function TeamPerformancePage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.delModal = _t.first);
        }
      },
      decls: 13,
      vars: 6,
      consts: [["delModal", ""], ["dt", ""], [1, "page-header", "flex", "justify-between", "items-center", "mb-8"], [1, "text-3xl", "font-extrabold", "text-gray-900", "dark:text-white", "tracking-tight"], ["class", "text-gray-500 mt-2 text-lg", 4, "ngIf"], [1, "flex", "gap-4"], ["pButton", "", "icon", "pi pi-refresh", 1, "p-button-outlined", "p-button-secondary", "rounded-2xl", "w-12", "h-12", "shadow-sm", "bg-white", "dark:bg-gray-800", 3, "click", "loading"], ["class", "px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl shadow-xl shadow-indigo-500/20 transition-all font-bold flex items-center gap-3", 3, "click", 4, "ngIf"], ["class", "animate-fadein", 4, "ngIf"], [4, "ngIf"], [1, "text-gray-500", "mt-2", "text-lg"], [1, "px-6", "py-3", "bg-indigo-600", "hover:bg-indigo-700", "text-white", "rounded-2xl", "shadow-xl", "shadow-indigo-500/20", "transition-all", "font-bold", "flex", "items-center", "gap-3", 3, "click"], [1, "pi", "pi-shield"], [1, "animate-fadein"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-6", "gap-6", "mb-10"], ["class", "bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700", 4, "ngFor", "ngForOf"], [1, "grid", "grid-cols-1", "xl:grid-cols-3", "gap-8", "mb-10"], [1, "xl:col-span-2", "bg-white", "dark:bg-gray-800", "p-8", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], ["width", "30%", "height", "2rem", "styleClass", "mb-8"], ["width", "100%", "height", "350px"], [1, "flex", "flex-col", "gap-8"], [1, "bg-white", "dark:bg-gray-800", "p-8", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "h-[300px]"], ["width", "60%", "height", "1.5rem", "styleClass", "mb-6"], [1, "flex", "justify-center"], ["shape", "circle", "size", "180px"], [1, "bg-white", "dark:bg-gray-800", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "overflow-hidden"], [1, "p-8", "border-b", "border-gray-100", "dark:border-gray-700", "flex", "justify-between", "items-center"], ["width", "15rem", "height", "2rem"], ["width", "18rem", "height", "2.5rem", "borderRadius", "1rem"], ["styleClass", "p-datatable-sm", 3, "value"], ["pTemplate", "body"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700"], ["width", "50%", "height", "1rem", "styleClass", "mb-3"], ["width", "30%", "height", "2.5rem"], [1, "py-4"], [1, "flex", "items-center", "gap-4"], ["shape", "circle", "size", "3rem"], ["width", "10rem", "height", "1.2rem", "styleClass", "mb-2"], ["width", "6rem", "height", "0.8rem"], ["width", "5rem", "height", "1.5rem", "borderRadius", "1rem"], [1, "w-48"], ["width", "100%", "height", "0.5rem", "styleClass", "mb-2"], ["width", "40%", "height", "0.5rem"], [1, "flex", "gap-2"], ["shape", "circle", "size", "2rem"], [1, "text-center"], [1, "flex", "gap-2", "justify-center"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "relative", "overflow-hidden", "group"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-blue-500/5", "-mr-8", "-mt-8", "rounded-full", "transition-transform", "group-hover:scale-110"], [1, "text-gray-500", "dark:text-gray-400", "text-sm", "font-bold", "mb-3"], [1, "flex", "items-end", "gap-2"], [1, "text-4xl", "font-black", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-blue-500", "mb-2", "font-bold"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-yellow-500/5", "-mr-8", "-mt-8", "rounded-full", "transition-transform", "group-hover:scale-110"], [1, "flex", "items-center", "text-xs", "text-yellow-600", "mb-2", "font-bold", "gap-1"], [1, "pi", "pi-spin", "pi-spinner", "text-[10px]"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-orange-500/5", "-mr-8", "-mt-8", "rounded-full", "transition-transform", "group-hover:scale-110"], [1, "text-xs", "text-orange-500", "mb-2", "font-bold"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-green-500/5", "-mr-8", "-mt-8", "rounded-full", "transition-transform", "group-hover:scale-110"], [1, "text-4xl", "font-black", "text-green-600"], [1, "text-xs", "text-green-500", "mb-2", "font-bold"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-indigo-500/5", "-mr-8", "-mt-8", "rounded-full", "transition-transform", "group-hover:scale-110"], [1, "text-4xl", "font-black", "text-indigo-600"], [1, "text-xs", "text-indigo-500", "mb-2", "font-bold"], [1, "bg-white", "dark:bg-gray-800", "p-6", "rounded-3xl", "shadow-sm", "border", "border-red-100", "dark:border-red-900/30", "relative", "overflow-hidden", "group"], [1, "absolute", "top-0", "right-0", "w-24", "h-24", "bg-red-500/5", "-mr-8", "-mt-8", "rounded-full", "transition-transform", "group-hover:scale-110"], [1, "text-gray-500", "dark:text-gray-400", "text-sm", "font-bold", "mb-3", "text-red-600"], [1, "text-4xl", "font-black", "text-red-600"], [1, "text-xs", "text-red-500", "mb-2", "font-bold", "italic"], [1, "flex", "items-center", "justify-between", "mb-8"], [1, "text-xl", "font-black", "text-gray-900", "dark:text-white", "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "bg-indigo-500", "text-white", "flex", "items-center", "justify-center", "shadow-lg", "shadow-indigo-500/20"], [1, "pi", "pi-chart-bar"], [1, "text-xs", "text-gray-400"], ["type", "bar", "height", "350px", 3, "data", "options"], [1, "bg-white", "dark:bg-gray-800", "p-8", "rounded-3xl", "shadow-sm", "border", "border-gray-100", "dark:border-gray-700", "flex-1"], [1, "text-lg", "font-black", "text-gray-900", "dark:text-white", "mb-6"], ["type", "doughnut", "height", "250px", 3, "data", "options"], ["type", "radar", "height", "250px", 3, "data", "options"], [1, "p-8", "border-b", "border-gray-100", "dark:border-gray-700", "flex", "justify-between", "items-center", "bg-gray-50/50", "dark:bg-gray-900/20"], [1, "text-xl", "font-black", "text-gray-900", "dark:text-white"], [1, "text-xs", "text-gray-400", "mt-1"], [1, "p-input-icon-left"], [1, "pi", "pi-search", "text-gray-400"], ["type", "text", "pInputText", "", "placeholder", "\u0628\u062D\u062B \u0633\u0631\u064A\u0639 \u0628\u0627\u0644\u0645\u0635\u0637\u0644\u062D...", 1, "p-inputtext-sm", "rounded-2xl", "w-72", "pr-10", "border-gray-200", "dark:border-gray-700", "dark:bg-gray-800", 3, "input"], ["styleClass", "p-datatable-sm no-border-table", "responsiveLayout", "scroll", 3, "value", "rowHover", "rows", "paginator", "globalFilterFields"], ["pTemplate", "header"], ["pTemplate", "emptymessage"], [1, "bg-transparent"], [1, "py-5", "bg-transparent", "border-none"], [1, "py-5", "bg-transparent", "border-none", "text-center"], [1, "group", "hover:bg-gray-50/80", "dark:hover:bg-gray-900/40", "transition-colors"], [1, "relative"], [1, "w-12", "h-12", "rounded-2xl", "bg-gradient-to-br", "from-indigo-500", "to-purple-600", "flex", "items-center", "justify-center", "text-white", "font-black", "text-lg", "shadow-lg", "shadow-indigo-500/20"], [1, "absolute", "-bottom-1", "-right-1", "w-4", "h-4", "rounded-full", "border-2", "border-white", "dark:border-gray-800", "shadow-sm"], [1, "font-black", "text-gray-900", "dark:text-white"], ["value", "\u0641\u064A \u0627\u0633\u062A\u0631\u0627\u062D\u0629", "severity", "warn", "styleClass", "px-3 py-1 font-bold text-[10px]", 3, "rounded", 4, "ngIf"], ["value", "\u0646\u0634\u0637 \u0627\u0644\u0622\u0646", "severity", "success", "styleClass", "px-3 py-1 font-bold text-[10px]", 3, "rounded", 4, "ngIf"], [1, "flex", "flex-col", "gap-1"], [1, "flex", "justify-between", "text-[10px]", "font-bold"], [1, "text-gray-400"], [1, "w-full", "h-1.5", "bg-gray-100", "dark:bg-gray-700", "rounded-full", "overflow-hidden"], [1, "h-full", "transition-all", "duration-500"], [1, "flex", "-space-x-2", "rtl:space-x-reverse"], ["title", "\u0645\u0639\u0644\u0642\u0629", 1, "w-8", "h-8", "rounded-full", "bg-gray-100", "dark:bg-gray-700", "border-2", "border-white", "dark:border-gray-800", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-gray-500"], ["title", "\u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630", 1, "w-8", "h-8", "rounded-full", "bg-indigo-100", "dark:bg-indigo-900/30", "border-2", "border-white", "dark:border-gray-800", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-indigo-600", "dark:text-indigo-400"], ["title", "\u0645\u0643\u062A\u0645\u0644\u0629", 1, "w-8", "h-8", "rounded-full", "bg-green-100", "dark:bg-green-900/30", "border-2", "border-white", "dark:border-gray-800", "flex", "items-center", "justify-center", "text-xs", "font-bold", "text-green-600", "dark:text-green-400"], ["class", "flex items-center gap-1 text-[10px] text-red-600 animate-pulse font-bold", 4, "ngIf"], [1, "text-center", "group-hover:opacity-100", "opacity-50", "transition-opacity"], ["pButton", "", "icon", "pi pi-key", "title", "\u062A\u0641\u0648\u064A\u0636 \u0635\u0644\u0627\u062D\u064A\u0629", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-secondary", "hover:bg-white", 3, "click"], ["pButton", "", "icon", "pi pi-arrow-left", "title", "\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0647\u0627\u0645", 1, "p-button-text", "p-button-sm", "p-button-rounded", "p-button-indigo", "hover:bg-white", 3, "routerLink", "queryParams"], ["value", "\u0641\u064A \u0627\u0633\u062A\u0631\u0627\u062D\u0629", "severity", "warn", "styleClass", "px-3 py-1 font-bold text-[10px]", 3, "rounded"], ["value", "\u0646\u0634\u0637 \u0627\u0644\u0622\u0646", "severity", "success", "styleClass", "px-3 py-1 font-bold text-[10px]", 3, "rounded"], [1, "flex", "items-center", "gap-1", "text-[10px]", "text-red-600", "animate-pulse", "font-bold"], [1, "pi", "pi-exclamation-triangle"], ["colspan", "5", 1, "text-center", "py-20", "bg-gray-50/50", "dark:bg-gray-900/10"], [1, "flex", "flex-col", "items-center", "gap-4"], [1, "w-20", "h-20", "rounded-full", "bg-gray-100", "flex", "items-center", "justify-center", "text-gray-300", "transform", "rotate-12"], [1, "pi", "pi-users", "text-5xl"], [1, "text-gray-400", "font-bold"]],
      template: function TeamPerformancePage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 2)(1, "div")(2, "h1", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "\u0645\u0631\u0643\u0632 \u0642\u064A\u0627\u062F\u0629 \u0627\u0644\u0641\u0631\u064A\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, TeamPerformancePage_p_4_Template, 2, 0, "p", 4)(5, TeamPerformancePage_p_5_Template, 2, 1, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 5)(7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TeamPerformancePage_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx.loadTeamData());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, TeamPerformancePage_button_8_Template, 4, 0, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, TeamPerformancePage_div_9_Template, 22, 4, "div", 8)(10, TeamPerformancePage_ng_container_10_Template, 92, 18, "ng-container", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "app-delegate-permission-modal", null, 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isSupervisor);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("loading", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isSupervisor);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, primeng_button__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_18__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_3__.TableModule, primeng_table__WEBPACK_IMPORTED_MODULE_3__.Table, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputTextModule, primeng_inputtext__WEBPACK_IMPORTED_MODULE_4__.InputText, primeng_card__WEBPACK_IMPORTED_MODULE_5__.CardModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.TagModule, primeng_tag__WEBPACK_IMPORTED_MODULE_6__.Tag, primeng_chart__WEBPACK_IMPORTED_MODULE_7__.ChartModule, primeng_chart__WEBPACK_IMPORTED_MODULE_7__.UIChart, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink, _managments_dashboard_components_delegate_permission_modal__WEBPACK_IMPORTED_MODULE_11__.DelegatePermissionModal, primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__.SkeletonModule, primeng_skeleton__WEBPACK_IMPORTED_MODULE_8__.Skeleton],
      encapsulation: 2
    });
  }
  return TeamPerformancePage;
})();

/***/ })

}]);
//# sourceMappingURL=4150.js.map