"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[6776],{

/***/ 46776:
/*!*************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/upload-files/upload-files.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadFiles: () => (/* binding */ UploadFiles)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 34487);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_data_view_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/data-view.service */ 59068);
/* harmony import */ var _shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/sweet-alert.service */ 31365);







let UploadFiles = /*#__PURE__*/(() => {
  class UploadFiles {
    dataViewService;
    swal;
    mainfile = {
      id: null,
      code: null,
      name: '',
      cid: '',
      address: '',
      dateAdded: null,
      nationality: '',
      archive: false,
      note: '',
      work: '',
      membership: '',
      companyEmail: '',
      companyFax: '',
      companyRegister: '',
      partner1: '',
      partner2: '',
      partner3: '',
      registerType: '',
      addedBy: null
    };
    constructor(dataViewService, swal) {
      this.dataViewService = dataViewService;
      this.swal = swal;
    }
    onGlobalClick(event) {
      console.log('--- GLOBAL CLICK LOG ---');
      console.log('Target:', event.target);
      const target = event.target;
      if (target.innerText && (target.innerText.includes('حفظ') || target.innerText.includes('جديد'))) {
        console.log('CLICKED BUTTON TEXT:', target.innerText);
      }
    }
    ngOnInit() {
      this.getNextId();
    }
    getNextId() {
      this.dataViewService.getNextMainfileId().subscribe({
        next: id => {
          this.mainfile.id = id;
        },
        error: err => {
          console.error('Error fetching next ID', err);
          this.swal.error({
            title: 'خطأ',
            text: 'فشل في جلب الرقم التالي'
          });
        }
      });
    }
    save() {
      // Validation
      if (!this.mainfile.code || !this.mainfile.name) {
        console.log('Validation failed - missing code or name');
        this.swal.error({
          title: 'خطأ',
          text: 'الرجاء إدخال الكود والاسم على الأقل'
        });
        return;
      }
      console.log('Validation passed, showing loading...');
      this.swal.showLoading();
      // Map to Mainfile entity - send only what exists in Mainfile.cs
      const payload = {
        code: this.mainfile.code,
        name: this.mainfile.name,
        cid: this.mainfile.cid,
        address: this.mainfile.address,
        nationality: this.mainfile.nationality,
        archive: this.mainfile.archive,
        note: this.mainfile.note,
        work: this.mainfile.work,
        membership: this.mainfile.membership,
        companyEmail: this.mainfile.companyEmail,
        companyFax: this.mainfile.companyFax,
        companyRegister: this.mainfile.companyRegister,
        partner1: this.mainfile.partner1,
        partner2: this.mainfile.partner2,
        partner3: this.mainfile.partner3,
        registerType: this.mainfile.registerType
      };
      console.log('Sending payload to backend:', payload);
      this.dataViewService.createMainfile(payload).subscribe({
        next: res => {
          console.log('Save successful, response:', res);
          this.swal.close();
          this.swal.success({
            title: 'تم الحفظ',
            text: 'تم إضافة الملف بنجاح'
          });
          this.clear();
        },
        error: err => {
          console.error('Save failed, error:', err);
          this.swal.close();
          this.swal.error({
            title: 'خطأ',
            text: err.error?.message || 'فشل الحفظ'
          });
        }
      });
    }
    clear() {
      this.mainfile = {
        id: null,
        code: null,
        name: '',
        cid: '',
        address: '',
        dateAdded: null,
        nationality: '',
        archive: false,
        note: '',
        work: '',
        membership: '',
        companyEmail: '',
        companyFax: '',
        companyRegister: '',
        partner1: '',
        partner2: '',
        partner3: '',
        registerType: '',
        addedBy: null
      };
      this.getNextId();
    }
    static ɵfac = function UploadFiles_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UploadFiles)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_view_service__WEBPACK_IMPORTED_MODULE_4__.DataViewService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_sweet_alert_service__WEBPACK_IMPORTED_MODULE_5__.SweetAlertService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: UploadFiles,
      selectors: [["app-upload-files"]],
      hostBindings: function UploadFiles_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadFiles_click_HostBindingHandler($event) {
            return ctx.onGlobalClick($event);
          }, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
        }
      },
      decls: 102,
      vars: 17,
      consts: [[1, "p-6", "max-w-full", "mx-auto", "shadow", "rounded", 2, "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "keydown.enter"], [1, "text-xl", "font-bold", "mb-6", "text-center", 2, "color", "var(--text-color)"], [1, "flex", "gap-4", "mb-8", "justify-center", "bg-gray-50/50", "dark:bg-gray-800/50", "p-4", "rounded-xl", "border", "border-gray-200", "dark:border-gray-700"], ["type", "button", 1, "btn", "btn-secondary", "px-10", "gap-2", "shadow-lg", 2, "color", "var(--text-color)", 3, "click"], [1, "pi", "pi-save", "text-xl"], ["type", "button", 1, "btn", "btn-secondary", "px-10", "gap-2", "shadow-lg", 3, "click"], [1, "pi", "pi-file-plus", "text-xl"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6", 2, "direction", "rtl"], [1, "space-y-4"], [1, "form-control"], [1, "label"], [1, "label-text", 2, "color", "var(--text-color)"], ["type", "number", "name", "id", "readonly", "", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "code", "required", "", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "name", "required", "", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "cid", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "address", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "nationality", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "checkbox", "name", "archive", 1, "checkbox", 2, "border-color", "var(--surface-border)", 3, "ngModelChange", "ngModel"], ["name", "note", "rows", "3", 1, "textarea", "textarea-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "work", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "membership", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "companyEmail", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "companyFax", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "companyRegister", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner1", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner2", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "partner3", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "registerType", 1, "input", "input-bordered", "w-full", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "p-4", "bg-blue-50/20", "dark:bg-blue-900/10", "rounded-lg", "border", "border-blue-500/20", "text-center"], [1, "text-xs", "opacity-70", "mb-2"]],
      template: function UploadFiles_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function UploadFiles_Template_div_keydown_enter_0_listener($event) {
            return $event.preventDefault();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u0625\u062F\u062E\u0627\u0644 \u0645\u0644\u0641 \u062C\u062F\u064A\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadFiles_Template_button_click_4_listener() {
            return ctx.save();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u062D\u0641\u0638 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A (Save) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadFiles_Template_button_click_7_listener() {
            return ctx.clear();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " \u062A\u0641\u0631\u064A\u063A / \u062C\u062F\u064A\u062F (Reset) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "label", 10)(14, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0627\u0644\u0631\u0642\u0645 (ID)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.id, $event) || (ctx.mainfile.id = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 9)(18, "label", 10)(19, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u0627\u0644\u0643\u0648\u062F *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.code, $event) || (ctx.mainfile.code = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9)(23, "label", 10)(24, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\u0627\u0644\u0627\u0633\u0645 *");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.name, $event) || (ctx.mainfile.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 9)(28, "label", 10)(29, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.cid, $event) || (ctx.mainfile.cid = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 9)(33, "label", 10)(34, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.address, $event) || (ctx.mainfile.address = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 9)(38, "label", 10)(39, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.nationality, $event) || (ctx.mainfile.nationality = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 8)(43, "div", 9)(44, "label", 10)(45, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\u0623\u0631\u0634\u064A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.archive, $event) || (ctx.mainfile.archive = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 9)(49, "label", 10)(50, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "textarea", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_textarea_ngModelChange_52_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.note, $event) || (ctx.mainfile.note = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 9)(54, "label", 10)(55, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\u0627\u0644\u0639\u0645\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_57_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.work, $event) || (ctx.mainfile.work = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 9)(59, "label", 10)(60, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\u0627\u0644\u0639\u0636\u0648\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_62_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.membership, $event) || (ctx.mainfile.membership = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 9)(64, "label", 10)(65, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0644\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.companyEmail, $event) || (ctx.mainfile.companyEmail = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 9)(69, "label", 10)(70, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "\u0641\u0627\u0643\u0633 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_72_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.companyFax, $event) || (ctx.mainfile.companyFax = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 8)(74, "div", 9)(75, "label", 10)(76, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\u0633\u062C\u0644 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_78_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.companyRegister, $event) || (ctx.mainfile.companyRegister = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 9)(80, "label", 10)(81, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "\u0627\u0644\u0634\u0631\u064A\u0643 1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_83_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.partner1, $event) || (ctx.mainfile.partner1 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 9)(85, "label", 10)(86, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "\u0627\u0644\u0634\u0631\u064A\u0643 2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_88_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.partner2, $event) || (ctx.mainfile.partner2 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 9)(90, "label", 10)(91, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "\u0627\u0644\u0634\u0631\u064A\u0643 3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_93_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.partner3, $event) || (ctx.mainfile.partner3 = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 9)(95, "label", 10)(96, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "\u0646\u0648\u0639 \u0627\u0644\u0633\u062C\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function UploadFiles_Template_input_ngModelChange_98_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.mainfile.registerType, $event) || (ctx.mainfile.registerType = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div", 29)(100, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "\u062A\u0623\u0643\u062F \u0645\u0646 \u0625\u062F\u062E\u0627\u0644 \u0627\u0644\u0643\u0648\u062F \u0648\u0627\u0644\u0627\u0633\u0645 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A\u062D");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.id);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.cid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.address);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.nationality);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.archive);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.note);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.work);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.membership);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.companyEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.companyFax);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.companyRegister);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.partner1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.partner2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.partner3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.mainfile.registerType);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2VjcmV0YXJpYXQvcGFnZXMvdXBsb2FkLWZpbGVzL3VwbG9hZC1maWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5pbnB1dCB7XHJcbiAgQGFwcGx5IHctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcHgtMyBweS0yIHRleHQtc20gZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDAgb3V0bGluZS1ub25lO1xyXG59XHJcblxyXG4uYnRuLXNhdmUge1xyXG4gIEBhcHBseSBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHB4LTYgcHktMiByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtNzAwIHRyYW5zaXRpb247XHJcbn1cclxuXHJcbi5idG4tbmV3IHtcclxuICBAYXBwbHkgYmctZ3JheS02MDAgdGV4dC13aGl0ZSBweC02IHB5LTIgcm91bmRlZC1sZyBob3ZlcjpiZy1ncmF5LTcwMCB0cmFuc2l0aW9uO1xyXG59ICovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return UploadFiles;
})();

/***/ })

}]);
//# sourceMappingURL=6776.js.map