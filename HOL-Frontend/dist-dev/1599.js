"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[1599],{

/***/ 71599:
/*!***********************************************************************!*\
  !*** ./src/app/features/execution/pages/appeals-page/appeals-page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppealsPage: () => (/* binding */ AppealsPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/go-back/go-back */ 9156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);





let AppealsPage = /*#__PURE__*/(() => {
  class AppealsPage {
    caseData = {
      code: '',
      clientName: '',
      opponentName: '',
      caseSubject: '',
      caseNumber: '',
      court: '',
      judgmentType: '',
      judgmentDate: '',
      appealDeadline: '',
      reminderDate: '',
      autoNumber: ''
    };
    save() {
      console.log('Saving case:', this.caseData);
      alert('✅ تم حفظ البيانات بنجاح');
    }
    edit() {
      alert('✏️ يمكنك الآن تعديل البيانات');
    }
    delete() {
      const confirmDelete = confirm('هل أنت متأكد من حذف هذه الدعوى؟');
      if (confirmDelete) {
        this.caseData = {
          code: '',
          clientName: '',
          opponentName: '',
          caseSubject: '',
          caseNumber: '',
          court: '',
          judgmentType: '',
          judgmentDate: '',
          appealDeadline: '',
          reminderDate: '',
          autoNumber: ''
        };
        alert('🗑 تم حذف البيانات');
      }
    }
    static ɵfac = function AppealsPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppealsPage)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AppealsPage,
      selectors: [["app-appeals-page"]],
      decls: 75,
      vars: 11,
      consts: [["caseForm", "ngForm"], [1, "flex", "justify-center", "items-center", "min-h-screen", "bg-base-200", "px-4"], [1, "w-full", "max-w-3xl", "bg-base-100", "p-8", "rounded-2xl", "shadow-lg"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", "text-primary", "text-center", "flex-1"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", 3, "ngSubmit"], [1, "block", "mb-1", "font-semibold"], ["type", "text", "name", "code", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "clientName", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "opponentName", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "caseSubject", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "caseNumber", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["name", "court", 1, "select", "select-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["value", ""], ["name", "judgmentType", 1, "select", "select-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "judgmentDate", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "appealDeadline", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["type", "date", "name", "reminderDate", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "autoNumber", 1, "input", "input-bordered", "w-full", 3, "ngModelChange", "ngModel"], [1, "col-span-full", "flex", "justify-center", "gap-4", "mt-8"], ["type", "submit", 1, "btn", "btn-success", "w-32"], ["type", "button", 1, "btn", "btn-warning", "w-32", 3, "click"], ["type", "button", 1, "btn", "btn-error", "w-32", 3, "click"]],
      template: function AppealsPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " \u0646\u0645\u0648\u0630\u062C \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062F\u0639\u0648\u0649 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-go-back");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 5, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AppealsPage_Template_form_ngSubmit_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div")(9, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.code, $event) || (ctx.caseData.code = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div")(13, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.clientName, $event) || (ctx.caseData.clientName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div")(17, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\u0627\u0633\u0645 \u0627\u0644\u062E\u0635\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.opponentName, $event) || (ctx.caseData.opponentName = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div")(21, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u062F\u0639\u0648\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.caseSubject, $event) || (ctx.caseData.caseSubject = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div")(25, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\u0631\u0642\u0645 \u0627\u0644\u062F\u0639\u0648\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.caseNumber, $event) || (ctx.caseData.caseNumber = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div")(29, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "select", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_select_ngModelChange_31_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.court, $event) || (ctx.caseData.court = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u0645\u062D\u0643\u0645\u0629 \u0627\u0644\u062C\u0646\u0627\u064A\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\u0645\u062D\u0643\u0645\u0629 \u0627\u0644\u0623\u0633\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "\u0645\u062D\u0643\u0645\u0629 \u0627\u0644\u0627\u0633\u062A\u0626\u0646\u0627\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div")(41, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u0646\u0648\u0639 \u0627\u0644\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "select", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_select_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.judgmentType, $event) || (ctx.caseData.judgmentType = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "\u0627\u0628\u062A\u062F\u0627\u0626\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "\u0627\u0633\u062A\u0626\u0646\u0627\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "option");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "\u0646\u0642\u0636");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div")(53, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062D\u0643\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.judgmentDate, $event) || (ctx.caseData.judgmentDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div")(57, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\u0622\u062E\u0631 \u0645\u0648\u0639\u062F \u0644\u0644\u0627\u0633\u062A\u0626\u0646\u0627\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.appealDeadline, $event) || (ctx.caseData.appealDeadline = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div")(61, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062A\u0646\u0628\u064A\u0647");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_63_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.reminderDate, $event) || (ctx.caseData.reminderDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div")(65, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function AppealsPage_Template_input_ngModelChange_67_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.caseData.autoNumber, $event) || (ctx.caseData.autoNumber = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 19)(69, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "\uD83D\uDCBE \u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppealsPage_Template_button_click_71_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.edit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " \u270F\uFE0F \u062A\u0639\u062F\u064A\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppealsPage_Template_button_click_73_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.delete());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, " \uD83D\uDDD1 \u062D\u0630\u0641 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.clientName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.opponentName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.caseSubject);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.caseNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.court);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.judgmentType);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.judgmentDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.appealDeadline);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.reminderDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.caseData.autoNumber);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_2__.GoBack],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AppealsPage;
})();

/***/ })

}]);
//# sourceMappingURL=1599.js.map