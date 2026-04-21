"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[3857],{

/***/ 3517:
/*!**********************************************************************************!*\
  !*** ./src/app/features/execution/components/add-a-statement/add-a-statement.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddAStatement: () => (/* binding */ AddAStatement)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _shared_statement_form_statement_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/statement-form/statement-form */ 12963);




let AddAStatement = /*#__PURE__*/(() => {
  class AddAStatement {
    statements = [];
    filePreview = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    onFilePreview(url) {
      this.filePreview.emit(url);
    }
    static ɵfac = function AddAStatement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddAStatement)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddAStatement,
      selectors: [["app-add-a-statement"]],
      outputs: {
        filePreview: "filePreview"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "flex", "flex-col", "gap-6"], ["mode", "add", 3, "statementsChange", "filePreview", "statements"]],
      template: function AddAStatement_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "app-statement-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("statementsChange", function AddAStatement_Template_app_statement_form_statementsChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.statements, $event) || (ctx.statements = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("filePreview", function AddAStatement_Template_app_statement_form_filePreview_1_listener($event) {
            return ctx.onFilePreview($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("statements", ctx.statements);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _shared_statement_form_statement_form__WEBPACK_IMPORTED_MODULE_2__.StatementForm],
      styles: [".statementForm[_ngcontent-%COMP%] {\n    direction: rtl !important;\n}\n\n.preview-container[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 1.5rem;\n    border: 1px solid #e2e8f0;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n\n.preview-header[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n    border-bottom: 1.5px solid #f1f5f9;\n    background: #ffffff;\n    font-weight: 800;\n    font-size: 0.9rem;\n    color: #1e293b;\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.preview-placeholder[_ngcontent-%COMP%] {\n    padding: 3rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1.5rem;\n    color: #94a3b8;\n    text-align: center;\n}\n\n.preview-icon-circle[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    background: #f8fafc;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #cbd5e1;\n    font-size: 2.5rem;\n    border: 2px dashed #e2e8f0;\n    transition: all 0.3s ease;\n}\n\n.preview-placeholder[_ngcontent-%COMP%]:hover   .preview-icon-circle[_ngcontent-%COMP%] {\n    color: #2563eb;\n    background: #eff6ff;\n    border-color: #bfdbfe;\n    transform: scale(1.05);\n}\n\n.shadow-inner-soft[_ngcontent-%COMP%] {\n    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.03);\n}\n\n.animate-fade-in[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    from {\n        opacity: 0;\n        transform: translateX(-10px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateX(0);\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL2NvbXBvbmVudHMvYWRkLWEtc3RhdGVtZW50L2FkZC1hLXN0YXRlbWVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0ZW1lbnRGb3JtIHtcclxuICAgIGRpcmVjdGlvbjogcnRsICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmV2aWV3LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4wNSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcmV2aWV3LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2YxZjVmOTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG59XHJcblxyXG4ucHJldmlldy1wbGFjZWhvbGRlciB7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJldmlldy1pY29uLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjZTJlOGYwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnByZXZpZXctcGxhY2Vob2xkZXI6aG92ZXIgLnByZXZpZXctaWNvbi1jaXJjbGUge1xyXG4gICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZmNmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmZkYmZlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLnNoYWRvdy1pbm5lci1zb2Z0IHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAwIHJnYigwIDAgMCAvIDAuMDMpO1xyXG59XHJcblxyXG4uYW5pbWF0ZS1mYWRlLWluIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNHMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return AddAStatement;
})();

/***/ }),

/***/ 12963:
/*!***************************************************************************************!*\
  !*** ./src/app/features/execution/components/shared/statement-form/statement-form.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatementForm: () => (/* binding */ StatementForm)
/* harmony export */ });
/* harmony import */ var C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_custody_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/custody.service */ 8053);
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var _finance_services_ClientService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../finance/services/ClientService */ 95776);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);












const _c0 = ["clientLookup"];
const _c1 = ["expenseLookup"];
function StatementForm_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Processing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function StatementForm_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.statements.length, " \u0633\u062C\u0644\u0627\u062A \u062A\u0645 \u062D\u0641\u0638\u0647\u0627 ");
  }
}
function StatementForm_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_button_26_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.searchByStatementNo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("fa-spin", ctx_r1.isLoading);
  }
}
function StatementForm_option_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const court_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", court_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](court_r4);
  }
}
function StatementForm_span_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u062A\u0623\u0643\u064A\u062F \u0648\u062D\u0641\u0638 \u0627\u0644\u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function StatementForm_span_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 114);
  }
}
function StatementForm_i_121_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 115);
  }
}
function StatementForm_div_140_i_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 125);
  }
}
function StatementForm_div_140_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u0628\u0640\u062F\u0621 \u0631\u0641\u0640\u0639 \u0627\u0644\u0645\u0640\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function StatementForm_div_140_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 114);
  }
}
function StatementForm_div_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 116)(1, "div", 117)(2, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 120)(5, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_div_140_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.uploadFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, StatementForm_div_140_i_11_Template, 1, 0, "i", 124)(12, StatementForm_div_140_span_12_Template, 2, 0, "span", 61)(13, StatementForm_div_140_span_13_Template, 1, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.selectedFiles[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 6, ctx_r1.selectedFiles[0].size / 1024, "1.0-1"), " KB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isUploading);
  }
}
function StatementForm_div_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 126)(1, "div", 127)(2, "div", 80)(3, "span", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u0645\u0639\u0627\u064A\u0646\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u062E\u062A\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_div_148_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.previewUrl = null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "iframe", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.previewUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeResourceUrl"]);
  }
}
function StatementForm_tr_194_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 134)(1, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 137)(6, "div", 138)(7, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "span", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td")(15, "div", 142)(16, "span", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "KWD");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td")(22, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td", 103)(25, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td", 103)(29, "div", 148)(30, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_tr_194_Template_button_click_30_listener() {
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8).index;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteStatement(i_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "i", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("animation-delay", i_r9 * 40 + "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r9 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r10.codeAutoNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r10.clientName || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](s_r10.personName || "\u0628\u062F\u0648\u0646 \u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", s_r10.expenseName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 13, s_r10.amount, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", s_r10.codeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", s_r10.codeStatus || "---", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", s_r10.sendToACC ? "bg-green-100 text-green-700 border border-green-200" : "bg-amber-100 text-amber-700 border border-amber-200");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", s_r10.sendToACC ? "bg-green-600 shadow-[0_0_5px_rgba(34,197,94,0.4)]" : "bg-amber-600 flex animate-pulse");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", s_r10.sendToACC ? "Done" : "Hold", " ");
  }
}
function StatementForm_tr_195_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 151)(2, "div", 152)(3, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div")(6, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "No matching records found for this statement");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
}
let StatementForm = /*#__PURE__*/(() => {
  class StatementForm {
    mode = 'add';
    statements = [];
    statementsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    filePreview = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    statementForm;
    selectedIndex = null;
    query = '';
    isLoading = false;
    selectedFiles = [];
    isUploading = false;
    previewUrl = null;
    fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder);
    custodyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_custody_service__WEBPACK_IMPORTED_MODULE_6__.CustodyService);
    sanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer);
    clientService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_finance_services_ClientService__WEBPACK_IMPORTED_MODULE_8__.ClientService);
    clientLookup;
    expenseLookup;
    clientsData = [];
    // ✅ التسميات بالعربي
    labels = {
      statementNo: 'رقم الكشف',
      codeAutoNo: 'الرقم الآلي',
      codeAttach: 'كود المرفق',
      codeExpense: 'نوع المصروف',
      amount: 'المبلغ',
      codeStatus: 'الحالة',
      notes: 'ملاحظات',
      civilId: 'المدني',
      phoneNumber: 'رقم الهاتف',
      court: 'المحكمة',
      contractNo: 'رقم العقد',
      personName: 'الاسم'
    };
    expenseTypes = [{
      id: 1,
      name: 'اجراءات قضائية'
    }, {
      id: 2,
      name: 'شهادات - معلومات مدنية'
    }, {
      id: 3,
      name: 'رسوم قضائية'
    }, {
      id: 4,
      name: 'تصوير ومصروفات ادارية'
    }, {
      id: 5,
      name: 'ايجار كرين'
    }, {
      id: 6,
      name: 'مصروفات غير مستردة'
    }];
    courts = ['محكمة الرقعي (التحصيل)', 'محكمة حولي', 'محكمة الأحمدي', 'محكمة الجهراء', 'محكمة مبارك الكبير', 'محكمة الفروانية', 'قصر العدل', 'الإدارة العامة للتنفيذ'];
    constructor() {
      this.statementForm = this.fb.group({
        id: [null],
        fileCode: [null],
        deptCode: [null],
        codeAutoNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        statementNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        codeAttach: [''],
        codeExpense: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        amount: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0)]],
        codeStatus: [''],
        notes: [''],
        clientName: [''],
        companyCode: [null],
        civilId: [''],
        phoneNumber: [''],
        court: [''],
        contractNo: [''],
        personName: [''],
        dateAdded: [new Date().toISOString().split('T')[0]],
        sendToACC: [false]
      });
      // ✅ التزامن التلقائي عند كتابة رقم الكشف لضمان ظهور السجلات حتى بعد التحديث
      this.statementForm.get('statementNo')?.valueChanges.subscribe(val => {
        if (val && val.length > 5) {
          // ننتظر قليلاً أو عدد معين من الحروف
          this.fetchStatements(val);
        }
      });
    }
    ngOnInit() {
      this.loadClients();
      if (this.mode === 'add') {
        this.fetchNextStatementNo();
      }
    }
    fetchNextStatementNo() {
      this.custodyService.getNextStatementNo().subscribe({
        next: res => {
          if (res && res.statementNo) {
            this.statementForm.patchValue({
              statementNo: res.statementNo
            });
          }
        },
        error: err => console.error('Failed to fetch next statement no', err)
      });
    }
    loadClients() {
      this.clientService.getAllClients().subscribe({
        next: clients => {
          this.clientsData = clients;
        },
        error: err => console.error('Failed to load clients', err)
      });
    }
    openClientLookup() {
      this.clientLookup.title = 'اختر الشركة / الموكل';
      this.clientLookup.columns = ['id', 'name'];
      this.clientLookup.data = this.clientsData;
      this.clientLookup.open();
    }
    handleClientSelect(item) {
      this.statementForm.patchValue({
        clientName: item.name,
        companyCode: item.id
      });
    }
    openExpenseLookup() {
      this.expenseLookup.title = 'اختر نوع المصروف';
      this.expenseLookup.columns = ['id', 'name'];
      this.expenseLookup.data = this.expenseTypes;
      this.expenseLookup.open();
    }
    handleExpenseSelect(item) {
      this.statementForm.patchValue({
        codeExpense: item.id
      });
    }
    // ✅ جلب السجلات برقم الكشف داخلياً
    fetchStatements(stmtNo) {
      this.isLoading = true;
      this.custodyService.getByStatementNo(stmtNo).subscribe({
        next: res => {
          if (res && res.length > 0) {
            this.statements = res;
            this.statementsChange.emit(this.statements);
          }
          this.isLoading = false;
        },
        error: () => this.isLoading = false
      });
    }
    // ✅ معالجة اختيار ملف واحد (PDF فقط)
    onFileSelected(event) {
      const files = event.target.files;
      if (files.length > 0) {
        const file = files[0];
        if (file.type !== 'application/pdf') {
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('تنبيه', 'يرجى اختيار ملف PDF فقط', 'warning');
          return;
        }
        this.selectedFiles = [file];
        // ✅ توليد معاينة للملف PDF
        const fileURL = URL.createObjectURL(file);
        this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
        this.filePreview.emit(fileURL);
      }
    }
    // ✅ رفع الملفات
    uploadFile() {
      var _this = this;
      return (0,C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this.selectedFiles.length === 0) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('تنبيه', 'يرجى اختيار ملفات أولاً', 'info');
          return;
        }
        const fileCode = _this.statementForm.get('codeAutoNo')?.value;
        const deptCode = _this.statementForm.get('deptCode')?.value || 1;
        _this.isUploading = true;
        try {
          const res = yield _this.custodyService.uploadAttachment(_this.selectedFiles, fileCode, deptCode).toPromise();
          if (res && res.code) {
            _this.statementForm.patchValue({
              codeAttach: res.code
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('نجاح', `تم رفع ${_this.selectedFiles.length} مرفقات بنجاح`, 'success');
            _this.selectedFiles = [];
          }
        } catch (err) {
          console.error(err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('خطأ', 'فشل رفع المرفقات', 'error');
        } finally {
          _this.isUploading = false;
        }
      })();
    }
    // ✅ البحث برقم الكشف (للتعديل أو العرض)
    searchByStatementNo() {
      const stmtNo = this.statementForm.get('statementNo')?.value;
      if (!stmtNo) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('تنبيه', 'يرجى إدخال رقم الكشف للبحث.', 'info');
        return;
      }
      this.isLoading = true;
      this.custodyService.getByStatementNo(stmtNo).subscribe({
        next: res => {
          if (res && res.length > 0) {
            this.statements = res;
            this.statementsChange.emit(this.statements);
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('نجاح', `تم العثور على ${res.length} سجلات لهذا الكشف`, 'success');
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('تنبيه', 'لم يتم العثور على بيانات لهذا الكشف.', 'warning');
          }
          this.isLoading = false;
        },
        error: err => {
          console.error(err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('خطأ', 'فشل البحث عن الكشف', 'error');
          this.isLoading = false;
        }
      });
    }
    // ✅ حفظ
    save() {
      var _this2 = this;
      return (0,C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this2.statementForm.invalid) {
          _this2.statementForm.markAllAsTouched();
          return;
        }
        const data = _this2.statementForm.getRawValue();
        _this2.isLoading = true;
        try {
          const res = yield _this2.custodyService.create(data).toPromise();
          if (res) {
            _this2.statements.push(res);
            _this2.statementsChange.emit(_this2.statements);
            // Keep statementNo for batch entry but reset others
            const currentStmtNo = _this2.statementForm.get('statementNo')?.value;
            _this2.statementForm.reset({
              statementNo: currentStmtNo,
              amount: 0,
              sendToACC: false,
              dateAdded: new Date().toISOString().split('T')[0]
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('نجاح', 'تم حفظ السجل بنجاح', 'success');
          }
        } catch (err) {
          console.error(err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('خطأ', 'فشل حفظ السجل', 'error');
        } finally {
          _this2.isLoading = false;
        }
      })();
    }
    // ✅ تسليم للمحاسبة
    sendToAccounting() {
      var _this3 = this;
      return (0,C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (_this3.statements.length === 0) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('تنبيه', 'لا يوجد سجلات لتسليمها', 'warning');
          return;
        }
        const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
          title: 'هل أنت متأكد؟',
          text: 'هل تريد تسليم هذا الكشف للمحاسبة بالكامل؟',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'نعم، قم بالتسليم',
          cancelButtonText: 'إلغاء'
        });
        if (result.isConfirmed) {
          _this3.isLoading = true;
          try {
            // In a real scenario, you might have a bulk endpoint, but here we loop or use the latest business logic
            // For now, let's assume we mark the whole batch as sent
            for (const stmt of _this3.statements) {
              if (stmt.id && !stmt.sendToACC) {
                yield _this3.custodyService.sendToAcc(stmt.id).toPromise();
              }
            }
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('نجاح', 'تم تسليم الكشف للمحاسبة بنجاح', 'success');
            _this3.reset();
          } catch (err) {
            console.error(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('خطأ', 'فشل تسليم الكشف', 'error');
          } finally {
            _this3.isLoading = false;
          }
        }
      })();
    }
    // ✅ طباعة
    print() {
      window.print();
    }
    // ✅ إعادة تعيين
    reset() {
      this.statementForm.reset({
        amount: 0,
        sendToACC: false,
        dateAdded: new Date().toISOString().split('T')[0]
      });
      this.statements = [];
      this.statementsChange.emit([]);
      this.previewUrl = null;
      this.filePreview.emit(null);
      this.selectedIndex = null;
      if (this.mode === 'add') {
        this.fetchNextStatementNo();
      }
    }
    // ✅ حذف عنصر من الجدول
    deleteStatement(i) {
      var _this4 = this;
      const stmt = this.statements[i];
      if (stmt.id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire({
          title: 'هل أنت متأكد؟',
          text: 'سيتم حذف السجل نهائياً من النظام',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'حذف',
          cancelButtonText: 'إلغاء'
        }).then(/*#__PURE__*/function () {
          var _ref = (0,C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            if (result.isConfirmed) {
              try {
                yield _this4.custodyService.delete(stmt.id).toPromise();
                _this4.statements.splice(i, 1);
                _this4.statementsChange.emit(_this4.statements);
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('نجاح', 'تم حذف السجل', 'success');
              } catch (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_9___default().fire('خطأ', 'فشل حذف السجل', 'error');
              }
            }
          });
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } else {
        this.statements.splice(i, 1);
        this.statementsChange.emit(this.statements);
      }
    }
    cancel() {
      this.reset();
    }
    static ɵfac = function StatementForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || StatementForm)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: StatementForm,
      selectors: [["app-statement-form"]],
      viewQuery: function StatementForm_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.clientLookup = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.expenseLookup = _t.first);
        }
      },
      inputs: {
        mode: "mode",
        statements: "statements"
      },
      outputs: {
        statementsChange: "statementsChange",
        filePreview: "filePreview"
      },
      decls: 200,
      vars: 24,
      consts: [["fileInput", ""], ["clientLookup", ""], ["expenseLookup", ""], [1, "statementForm", "flex", "flex-col", "gap-10", "p-2", "animate-fade-in"], [1, "premium-card", "p-10", "flex", "justify-between", "items-center", "bg-gradient-to-l", "from-white", "to-blue-50/20"], [1, "text-3xl", "font-black", "tracking-tight", "flex", "items-center", "gap-4", "text-slate-900"], [1, "p-4", "bg-blue-600/10", "rounded-2xl", "text-blue-600", "shadow-inner"], [1, "fas", 3, "ngClass"], [1, "text-slate-500", "text-sm", "mt-3", "font-medium", "opacity-80"], [1, "flex", "items-center", "gap-6"], ["class", "flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-xl border border-blue-100", 4, "ngIf"], ["class", "glass-badge", 4, "ngIf"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-10", "items-start"], [1, "lg:col-span-8", "flex", "flex-col", "gap-8"], [1, "premium-card", "p-10"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-x-10", "gap-y-7", 3, "formGroup"], [1, "form-control"], [1, "label-text-premium"], ["type", "text", "formControlName", "fileCode", "readonly", "", 1, "input", "premium-input", "bg-slate-100/50"], [1, "form-control", "highlight-field"], [1, "relative", "group"], ["type", "text", "formControlName", "statementNo", 1, "input", "premium-input", "w-full", "pr-11", 3, "readonly"], [1, "fas", "fa-hashtag", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-blue-400", "group-focus-within:text-blue-600"], ["type", "button", "class", "absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700 transition-colors", 3, "click", 4, "ngIf"], [1, "lookup-group", 3, "click"], ["type", "text", "formControlName", "clientName", "readonly", "", "placeholder", "\u0627\u0628\u062D\u062B \u0648\u0627\u062E\u062A\u0631 \u0627\u0644\u0634\u0631\u0643\u0629...", 1, "input", "premium-input", "w-full", "pr-11"], [1, "fas", "fa-building", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400", "group-hover:text-blue-500"], [1, "lookup-indicator"], ["type", "text", "formControlName", "personName", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0634\u062E\u0635...", 1, "input", "premium-input", "w-full", "pr-11"], [1, "fas", "fa-user", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", "formControlName", "civilId", "placeholder", "000000000000", 1, "input", "premium-input", "w-full", "pr-11"], [1, "fas", "fa-id-card", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", "formControlName", "contractNo", "placeholder", "\u0645\u062B\u0627\u0644: CR-2024", 1, "input", "premium-input", "w-full", "pr-11"], [1, "fas", "fa-file-contract", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", "formControlName", "codeStatus", "placeholder", "\u0645\u062B\u0627\u0644: \u0642\u064A\u062F \u0627\u0644\u062A\u0646\u0641\u064A\u0630", 1, "input", "premium-input", "w-full", "pr-11"], [1, "fas", "fa-info-circle", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", "formControlName", "phoneNumber", "placeholder", "965+ 00000000", 1, "input", "premium-input", "w-full", "pr-11"], [1, "fas", "fa-phone", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", "formControlName", "codeAutoNo", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A...", 1, "input", "premium-input", "w-full", "pr-11"], [1, "fas", "fa-fingerprint", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "text", "readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641...", 1, "input", "premium-input", "w-full", "pr-11", 3, "value"], [1, "fas", "fa-wallet", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "hidden", "formControlName", "codeExpense"], ["type", "number", "formControlName", "amount", "placeholder", "0.000", 1, "input", "premium-input", "w-full", "pr-11", "text-lg", "font-black", "text-blue-700"], [1, "fas", "fa-money-bill-alt", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-blue-500"], [1, "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-[10px]", "font-black", "text-slate-300"], ["type", "text", "formControlName", "codeAttach", "readonly", "", "placeholder", "\u064A\u064F\u0648\u0644\u062F \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B...", 1, "input", "premium-input", "w-full", "bg-slate-50", "font-mono", "text-xs", "pr-11"], [1, "fas", "fa-paperclip", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-300"], ["type", "date", "formControlName", "dateAdded", 1, "input", "premium-input", "w-full", "pr-11"], [1, "fas", "fa-calendar-alt", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["formControlName", "court", 1, "select", "premium-input", "w-full", "pr-11", "appearance-none"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-gavel", "absolute", "right-4", "top-1/2", "-translate-y-1/2", "text-slate-400", "pointer-events-none"], [1, "fas", "fa-chevron-down", "absolute", "left-4", "top-1/2", "-translate-y-1/2", "text-xs", "text-slate-300", "pointer-events-none"], [1, "form-control", "md:col-span-2"], ["formControlName", "notes", "rows", "2", "placeholder", "\u0623\u062F\u062E\u0644 \u0623\u064A \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629 \u0647\u0646\u0627...", 1, "textarea", "premium-input", "w-full", "min-h-[80px]"], [1, "flex", "justify-end", "gap-5", "mt-10", "pt-8", "border-t", "border-slate-100/80"], ["type", "button", 1, "premium-btn", "text-slate-400", "hover:text-slate-600", "px-8", 3, "click"], [1, "fas", "fa-undo-alt", "opacity-50"], ["type", "button", 1, "premium-btn", "bg-blue-600", "text-white", "hover:bg-blue-700", "px-12", "shadow-lg", "shadow-blue-500/20", 3, "click", "disabled"], [4, "ngIf"], ["class", "loading loading-spinner loading-xs", 4, "ngIf"], ["class", "fas fa-check-double", 4, "ngIf"], [1, "lg:col-span-4", "flex", "flex-col", "gap-8"], [1, "premium-card", "p-8"], [1, "font-black", "text-lg", "mb-6", "flex", "items-center", "gap-3", "text-slate-800"], [1, "w-8", "h-8", "bg-red-50", "text-red-500", "rounded-lg", "flex", "items-center", "justify-center", "text-xs", "shadow-inner"], [1, "fas", "fa-file-pdf"], [1, "flex", "flex-col", "gap-6"], ["type", "button", 1, "w-full", "h-40", "border-2", "border-dashed", "border-slate-200", "rounded-2xl", "flex", "flex-col", "items-center", "justify-center", "gap-3", "hover:border-blue-400", "hover:bg-blue-50/30", "transition-all", "active:scale-[0.98]", 3, "click", "disabled"], [1, "w-14", "h-14", "bg-slate-50", "rounded-full", "flex", "items-center", "justify-center", "text-slate-400", "group-hover:text-blue-500", "group-hover:bg-blue-100/50", "transition-colors"], [1, "fas", "fa-cloud-upload-alt", "text-2xl"], [1, "text-center", "px-4"], [1, "text-xs", "font-black", "text-slate-600", "mb-1"], [1, "text-[10px]", "text-slate-400", "font-bold", "uppercase", "tracking-wide"], ["type", "file", "accept", ".pdf", 1, "hidden", 3, "change"], ["class", "p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner flex flex-col gap-5 animate-fade-in", 4, "ngIf"], [1, "p-4", "bg-slate-100/40", "rounded-xl", "border", "border-slate-200/50"], [1, "text-[10px]", "font-black", "text-slate-400", "uppercase", "tracking-widest", "mb-2", "block"], [1, "flex", "items-center", "gap-3"], [1, "w-2.5", "h-2.5", "rounded-full", 3, "ngClass"], [1, "text-[10px]", "font-bold", "text-slate-500", "truncate"], ["class", "premium-card p-0 overflow-hidden animate-fade-in", 4, "ngIf"], [1, "premium-card", "p-8", "bg-slate-900", "text-white", "overflow-hidden", "group"], [1, "text-sm", "font-black", "mb-4", "flex", "items-center", "gap-2", "opacity-90", "tracking-wide", "uppercase"], [1, "fas", "fa-external-link-square-alt", "text-blue-400"], [1, "text-[11px]", "text-slate-400", "mb-6", "font-medium", "leading-relaxed"], [1, "flex", "flex-col", "gap-3", "relative", "z-10"], [1, "premium-btn", "bg-white/10", "hover:bg-white/20", "text-white", "border", "border-white/10", "w-full", 3, "click", "disabled"], [1, "fas", "fa-share-all", "text-sm", "text-blue-300"], [1, "premium-btn", "bg-blue-600", "hover:bg-blue-500", "text-white", "w-full", 3, "click", "disabled"], [1, "fas", "fa-print", "text-sm"], [1, "fas", "fa-file-invoice-dollar", "absolute", "-bottom-8", "-left-8", "text-7xl", "opacity-5", "group-hover:opacity-10", "transition-opacity"], [1, "lg:col-span-12"], [1, "premium-card", "p-0"], [1, "p-8", "border-b", "border-slate-100", "flex", "justify-between", "items-center", "bg-slate-50/50"], [1, "text-xl", "font-black", "text-slate-900", "tracking-tight"], [1, "text-slate-400", "text-xs", "mt-1", "font-medium"], [1, "px-5", "py-2", "bg-white", "rounded-full", "border", "border-slate-200", "text-xs", "font-black", "text-slate-500", "shadow-sm"], [1, "overflow-x-auto"], [1, "premium-table"], [1, "w-20"], [1, "text-center"], ["class", "animate-fade-in", 3, "animation-delay", 4, "ngFor", "ngForOf"], [3, "itemSelected"], [1, "flex", "items-center", "gap-3", "px-4", "py-2", "bg-blue-50", "rounded-xl", "border", "border-blue-100"], [1, "loading", "loading-spinner", "loading-xs", "text-blue-600"], [1, "text-xs", "font-bold", "text-blue-600", "uppercase", "tracking-widest"], [1, "glass-badge"], [1, "fas", "fa-database", "text-[10px]"], ["type", "button", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-blue-500", "hover:text-blue-700", "transition-colors", 3, "click"], [1, "fas", "fa-search"], [3, "value"], [1, "loading", "loading-spinner", "loading-xs"], [1, "fas", "fa-check-double"], [1, "p-6", "bg-slate-50", "rounded-2xl", "border", "border-slate-100", "shadow-inner", "flex", "flex-col", "gap-5", "animate-fade-in"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "bg-white", "rounded-xl", "shadow-sm", "flex", "items-center", "justify-center", "text-red-500", "border", "border-red-50"], [1, "fas", "fa-file-pdf", "text-xl"], [1, "flex-1", "overflow-hidden"], [1, "text-[13px]", "font-black", "text-slate-700", "truncate", "mb-0.5"], [1, "text-[10px]", "text-slate-400", "font-bold", "uppercase"], ["type", "button", 1, "premium-btn", "bg-blue-600", "text-white", "w-full", "shadow-md", "shadow-blue-500/15", 3, "click", "disabled"], ["class", "fas fa-upload text-xs", 4, "ngIf"], [1, "fas", "fa-upload", "text-xs"], [1, "premium-card", "p-0", "overflow-hidden", "animate-fade-in"], [1, "px-6", "py-4", "border-b", "border-slate-100", "flex", "items-center", "justify-between", "bg-slate-50/50"], [1, "w-8", "h-8", "bg-blue-600/10", "text-blue-600", "rounded-lg", "flex", "items-center", "justify-center", "text-xs", "shadow-inner"], [1, "fas", "fa-eye"], [1, "font-black", "text-sm", "text-slate-800"], [1, "btn", "btn-xs", "btn-circle", "btn-ghost", "text-slate-400", 3, "click"], [1, "p-4", "bg-slate-50"], ["title", "File Preview", 1, "w-full", "h-[500px]", "rounded-xl", "border", "border-slate-200", "shadow-sm", "bg-white", 3, "src"], [1, "animate-fade-in"], [1, "text-slate-300", "font-black", "text-xs"], [1, "font-black", "text-slate-900"], [1, "font-bold", "text-slate-600"], [1, "flex", "flex-col", "gap-0.5"], [1, "text-sm"], [1, "text-[10px]", "text-slate-400"], [1, "px-3", "py-1", "bg-slate-100", "rounded-lg", "text-[10px]", "font-black", "text-slate-500", "uppercase", "tracking-tight"], [1, "flex", "items-center", "gap-1.5"], [1, "text-blue-700", "font-black", "text-base"], [1, "text-[9px]", "font-black", "text-slate-400"], [1, "text-xs", "font-bold", "text-slate-500", "bg-slate-50", "px-2", "py-1", "rounded-md", "border", "border-slate-100", 3, "title"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "rounded-full", "text-[9px]", "font-black", "uppercase", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "ngClass"], [1, "flex", "justify-center", "gap-1"], [1, "w-8", "h-8", "rounded-full", "flex", "items-center", "justify-center", "text-slate-300", "hover:text-red-600", "hover:bg-red-50", "transition-colors", 3, "click"], [1, "fas", "fa-trash-alt", "text-xs"], ["colspan", "8", 1, "p-20", "text-center"], [1, "flex", "flex-col", "items-center", "gap-4", "text-slate-300"], [1, "w-20", "h-20", "bg-slate-50", "rounded-full", "flex", "items-center", "justify-center", "border-2", "border-dashed", "border-slate-200"], [1, "fas", "fa-layer-group", "text-3xl", "opacity-20"], [1, "text-lg", "font-black", "text-slate-800"], [1, "text-xs", "font-medium", "text-slate-400", "mt-1", "uppercase", "tracking-widest"]],
      template: function StatementForm_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div")(3, "h2", 5)(4, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, StatementForm_div_10_Template, 4, 0, "div", 10)(11, StatementForm_div_11_Template, 3, 1, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 12)(13, "div", 13)(14, "div", 14)(15, "form", 15)(16, "div", 16)(17, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u0627\u0644\u0643\u0648\u062F \u0627\u0644\u0641\u0631\u0639\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 19)(21, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u0631\u0642\u0645 \u0627\u0644\u0643\u0634\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 21)(25, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, StatementForm_button_26_Template, 2, 2, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 16)(28, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u0627\u0644\u0634\u0631\u0643\u0629 / \u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_Template_div_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openClientLookup());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 25)(32, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 16)(36, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\u0627\u0644\u0627\u0633\u0645 (\u0627\u0644\u0634\u062E\u0635\u064A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 28)(40, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 16)(42, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 30)(46, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 16)(48, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u0631\u0642\u0645 \u0645\u0644\u0641 \u0627\u0644\u0639\u0642\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 32)(52, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 16)(54, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 34)(58, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 16)(60, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 36)(64, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 16)(66, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A (Case ID)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 38)(70, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 16)(72, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0645\u0635\u0631\u0648\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_Template_div_click_74_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openExpenseLookup());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 40)(76, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 16)(81, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "\u0627\u0644\u0645\u0628\u0644\u063A (\u062F\u064A\u0646\u0627\u0631 \u0643\u0648\u064A\u062A\u064A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 43)(85, "i", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "span", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "KWD");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 16)(89, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "\u0643\u0648\u062F \u0627\u0644\u0645\u0631\u0641\u0642 \u0627\u0644\u062A\u0642\u0646\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "input", 46)(93, "i", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 16)(95, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "input", 48)(99, "i", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 16)(101, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629 \u0627\u0644\u0645\u062E\u062A\u0635\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 20)(104, "select", 50)(105, "option", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "-- \u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062D\u0643\u0645\u0629 --");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](107, StatementForm_option_107_Template, 2, 2, "option", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "i", 53)(109, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 55)(111, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0639\u0647\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "textarea", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 57)(115, "button", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_Template_button_click_115_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.reset());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "i", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, " \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0627\u0644\u062D\u0642\u0648\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "button", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_Template_button_click_118_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.save());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](119, StatementForm_span_119_Template, 2, 0, "span", 61)(120, StatementForm_span_120_Template, 1, 0, "span", 62)(121, StatementForm_i_121_Template, 1, 0, "i", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 64)(123, "div", 65)(124, "h3", 66)(125, "span", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](126, "i", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, " \u0627\u0644\u0645\u0631\u0641\u0642 \u0627\u0644\u0641\u0646\u064A (PDF) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 69)(129, "div", 20)(130, "button", 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_Template_button_click_130_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            const fileInput_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](139);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](fileInput_r5.click());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "i", 72);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 73)(134, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "\u0627\u0633\u062D\u0628 \u0645\u0644\u0641 PDF \u0647\u0646\u0627");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "\u0623\u0642\u0635\u0649 \u062D\u062C\u0645: 10 \u0645\u064A\u062C\u0627\u0628\u0627\u064A\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "input", 76, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function StatementForm_Template_input_change_138_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onFileSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](140, StatementForm_div_140_Template, 14, 9, "div", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 78)(142, "label", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "Upload Sync Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "div", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "div", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "span", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](147);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](148, StatementForm_div_148_Template, 11, 1, "div", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 84)(150, "h3", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "i", 86);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " \u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u062A\u0640\u0631\u062D\u064A\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "p", 87);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](154, "\u064A\u0645\u0643\u0646\u0643 \u062A\u0631\u062D\u064A\u0644 \u0643\u0627\u0641\u0629 \u0627\u0644\u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0643\u0634\u0641 \u0625\u0644\u0649 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u062F\u0641\u0639\u0629 \u0648\u0627\u062D\u062F\u0629 \u0628\u0639\u062F \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629.");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](155, "div", 88)(156, "button", 89);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_Template_button_click_156_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.sendToAccounting());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "i", 90);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, " \u062A\u0631\u062D\u064A\u0644 \u0627\u0644\u0643\u0634\u0641 \u0643\u0640\u0627\u0645\u0644\u0627\u064B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "button", 91);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StatementForm_Template_button_click_159_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.print());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](160, "i", 92);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, " \u0637\u0628\u0627\u0639\u0629 \u0643\u0634\u0641 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](162, "i", 93);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "div", 94)(164, "div", 95)(165, "div", 96)(166, "div")(167, "h3", 97);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "\u0633\u062C\u0644 \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0627\u0644\u0645\u0633\u062C\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "p", 98);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "\u0642\u0627\u0626\u0645\u0629 \u062A\u0641\u0635\u064A\u0644\u064A\u0629 \u0628\u0627\u0644\u0639\u0647\u062F \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0640 \u0631\u0642\u0645 \u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u062D\u0627\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 99);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 100)(174, "table", 101)(175, "thead")(176, "tr")(177, "th", 102);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "\u0627\u0644\u0645\u0648\u0643\u0644 / \u0627\u0644\u062E\u0635\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "\u0627\u0644\u062D\u0627\u0644\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "th", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "\u0627\u0644\u062A\u0631\u062D\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "th", 103);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](192, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](194, StatementForm_tr_194_Template, 32, 16, "tr", 104)(195, StatementForm_tr_195_Template, 10, 0, "tr", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "app-lookup-modal", 105, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemSelected", function StatementForm_Template_app_lookup_modal_itemSelected_196_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.handleClientSelect($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "app-lookup-modal", 105, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemSelected", function StatementForm_Template_app_lookup_modal_itemSelected_198_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.handleExpenseSelect($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_11_0;
          let tmp_19_0;
          let tmp_20_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.mode === "add" ? "fa-plus-circle" : "fa-search-dollar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.mode === "add" ? "\u0625\u062F\u062E\u0627\u0644 \u0639\u0647\u062F\u0629 \u062C\u062F\u064A\u062F\u0629" : "\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0639\u0646 \u0639\u0647\u062F\u0629", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.mode === "add" ? "\u0642\u0645 \u0628\u062A\u0639\u0628\u0626\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0648\u0627\u0644\u0648\u062B\u0627\u0626\u0642 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629 \u0628\u062F\u0642\u0629" : "\u0627\u0628\u062D\u062B \u0639\u0646 \u0633\u062C\u0644\u0627\u062A \u0627\u0644\u0639\u0647\u062F\u0629 \u0648\u062A\u0627\u0628\u0639 \u062D\u0627\u0644\u062A\u0647\u0627 \u0627\u0644\u0645\u0627\u0644\u064A\u0629", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.statements.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.statementForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.mode === "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mode === "inquiry");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ((tmp_11_0 = ctx.statementForm.get("codeExpense")) == null ? null : tmp_11_0.value) ? ctx.expenseTypes[((tmp_11_0 = ctx.statementForm.get("codeExpense")) == null ? null : tmp_11_0.value) - 1].name : "");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.courts);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isLoading || ctx.statementForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isUploading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedFiles.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ((tmp_19_0 = ctx.statementForm.get("codeAttach")) == null ? null : tmp_19_0.value) ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" : "bg-slate-300");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](((tmp_20_0 = ctx.statementForm.get("codeAttach")) == null ? null : tmp_20_0.value) ? "File Synced via MongoDB" : "Waiting for file...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.previewUrl);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.statements.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.statements.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0633\u062C\u0644\u0627\u062A: ", ctx.statements.length, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.statements);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.statements.length === 0 && !ctx.isLoading);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_7__.LookupModal, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n    --p-primary: 221 83% 53%;\n    \n\n    --p-primary-soft: 221 83% 96%;\n    --p-secondary: 222 47% 11%;\n    --p-accent: 199 89% 48%;\n    --p-glass-border: rgba(226, 232, 240, 0.8);\n    --p-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --p-shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --p-shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n}\n\n.statementForm[_ngcontent-%COMP%] {\n    direction: rtl !important;\n    font-family: 'Outfit', 'Inter', 'Cairo', sans-serif;\n    color: #1e293b;\n    line-height: 1.5;\n}\n\n.premium-card[_ngcontent-%COMP%] {\n    background: #ffffff;\n    border: 1px solid #e2e8f0 !important;\n    border-radius: 1.5rem !important;\n    box-shadow: var(--p-shadow-md) !important;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    position: relative;\n    overflow: hidden;\n}\n\n.premium-card[_ngcontent-%COMP%]:hover {\n    box-shadow: var(--p-shadow-lg) !important;\n    border-color: #cbd5e1 !important;\n}\n\n.premium-input[_ngcontent-%COMP%] {\n    background: #f8fafc !important;\n    border: 1.5px solid #e2e8f0 !important;\n    border-radius: 0.75rem !important;\n    padding: 0.5rem 1rem !important;\n    font-size: 0.95rem !important;\n    font-weight: 500 !important;\n    color: #334155 !important;\n    transition: all 0.2s ease !important;\n}\n\n.premium-input[_ngcontent-%COMP%]:focus {\n    background: #fff !important;\n    border-color: hsl(var(--p-primary)) !important;\n    box-shadow: 0 0 0 4px hsla(var(--p-primary), 0.08) !important;\n    outline: none !important;\n}\n\n.premium-input[_ngcontent-%COMP%]::placeholder {\n    color: #94a3b8;\n    font-weight: 400;\n}\n\n.label-text-premium[_ngcontent-%COMP%] {\n    color: #475569;\n    font-weight: 700;\n    font-size: 0.8rem;\n    margin-bottom: 0.6rem;\n    display: inline-block;\n    letter-spacing: -0.01em;\n    padding-right: 2px;\n}\n\n.select-btn[_ngcontent-%COMP%] {\n    border-radius: 0.75rem !important;\n    font-weight: 800 !important;\n    text-transform: none !important;\n}\n\n\n\n.preview-sidebar[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 2rem;\n    border: 1px solid #e2e8f0;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.05);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n\n.preview-sidebar-header[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n    border-bottom: 1.5px solid #f1f5f9;\n    background: #ffffff;\n    font-weight: 800;\n    font-size: 0.85rem;\n    color: #475569;\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n}\n\n.preview-sidebar-body[_ngcontent-%COMP%] {\n    background: #fafbfc;\n    min-height: 400px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1.5rem;\n    position: relative;\n    border-bottom-left-radius: 2rem;\n    border-bottom-right-radius: 2rem;\n}\n\n.preview-placeholder[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    color: #94a3b8;\n    text-align: center;\n    opacity: 0.6;\n}\n\n.preview-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 3rem;\n}\n\n.shadow-inner-soft[_ngcontent-%COMP%] {\n    box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.03);\n}\n\n.premium-iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    min-height: 500px;\n    border-radius: 1.25rem;\n    border: 1px solid #f1f5f9;\n    background: white;\n}\n\n.premium-btn[_ngcontent-%COMP%] {\n    border-radius: 0.75rem !important;\n    font-weight: 700 !important;\n    font-size: 0.95rem !important;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n    padding: 0.75rem 1.5rem !important;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n}\n\n.premium-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n\n.premium-btn[_ngcontent-%COMP%]:active:not(:disabled) {\n    transform: translateY(0);\n}\n\n\n\n.lookup-group[_ngcontent-%COMP%] {\n    position: relative;\n    cursor: pointer;\n}\n\n.lookup-group[_ngcontent-%COMP%]   .premium-input[_ngcontent-%COMP%] {\n    padding-left: 2.5rem !important;\n    \n\n}\n\n.lookup-indicator[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0.75rem;\n    top: 50%;\n    transform: translateY(-50%);\n    color: #94a3b8;\n    font-size: 0.75rem;\n    font-weight: 800;\n    pointer-events: none;\n    transition: color 0.2s;\n}\n\n.lookup-group[_ngcontent-%COMP%]:hover   .lookup-indicator[_ngcontent-%COMP%] {\n    color: hsl(var(--p-primary));\n}\n\n.lookup-group[_ngcontent-%COMP%]:hover   .premium-input[_ngcontent-%COMP%] {\n    border-color: #cbd5e1 !important;\n}\n\n\n\n.premium-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-spacing: 0;\n    border-collapse: separate;\n}\n\n.premium-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f8fafc !important;\n    color: #64748b !important;\n    font-weight: 800 !important;\n    font-size: 0.7rem !important;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    padding: 1rem 1.25rem !important;\n    border-bottom: 2px solid #f1f5f9 !important;\n    text-align: right;\n}\n\n.premium-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    transition: background 0.2s;\n}\n\n.premium-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background: #f8fafc;\n}\n\n.premium-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1.25rem !important;\n    border-bottom: 1px solid #f1f5f9;\n    font-size: 0.9rem;\n    color: #334155;\n}\n\n.premium-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n    border-bottom: none;\n}\n\n\n\n.glass-badge[_ngcontent-%COMP%] {\n    background: hsl(var(--p-primary-soft));\n    color: hsl(var(--p-primary));\n    font-weight: 800;\n    font-size: 0.75rem;\n    padding: 0.25rem 0.75rem;\n    border-radius: 9999px;\n    display: inline-flex;\n    align-items: center;\n    gap: 0.35rem;\n    border: 1px solid hsla(var(--p-primary), 0.1);\n}\n\n.animate-fade-in[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fadeIn 0.4s ease-out forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n    from {\n        opacity: 0;\n        transform: translateY(10px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n\n\n.highlight-field[_ngcontent-%COMP%]   .premium-input[_ngcontent-%COMP%] {\n    background: hsl(var(--p-primary-soft)) !important;\n    border-color: hsla(var(--p-primary), 0.2) !important;\n    color: hsl(var(--p-primary)) !important;\n    font-weight: 900 !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL2NvbXBvbmVudHMvc2hhcmVkL3N0YXRlbWVudC1mb3JtL3N0YXRlbWVudC1mb3JtLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLDRDQUE0QztJQUM1QyxpRkFBaUY7SUFDakYsa0ZBQWtGO0FBQ3RGOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1EQUFtRDtJQUNuRCxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxnQ0FBZ0M7SUFDaEMseUNBQXlDO0lBQ3pDLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFDdEMsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOENBQThDO0lBQzlDLDZEQUE2RDtJQUM3RCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiwrQkFBK0I7QUFDbkM7O0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsOENBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsNERBQTREO0lBQzVELGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLG1CQUFtQjtBQUNuQjtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtJQUNJLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSxpREFBaUQ7SUFDakQsb0RBQW9EO0lBQ3BELHVDQUF1QztJQUN2QywyQkFBMkI7QUFDL0IiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLXAtcHJpbWFyeTogMjIxIDgzJSA1MyU7XHJcbiAgICAvKiAjMjU2M2ViICovXHJcbiAgICAtLXAtcHJpbWFyeS1zb2Z0OiAyMjEgODMlIDk2JTtcclxuICAgIC0tcC1zZWNvbmRhcnk6IDIyMiA0NyUgMTElO1xyXG4gICAgLS1wLWFjY2VudDogMTk5IDg5JSA0OCU7XHJcbiAgICAtLXAtZ2xhc3MtYm9yZGVyOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDAuOCk7XHJcbiAgICAtLXAtc2hhZG93LXNtOiAwIDFweCAycHggMCByZ2IoMCAwIDAgLyAwLjA1KTtcclxuICAgIC0tcC1zaGFkb3ctbWQ6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcclxuICAgIC0tcC1zaGFkb3ctbGc6IDAgMjBweCAyNXB4IC01cHggcmdiKDAgMCAwIC8gMC4xKSwgMCA4cHggMTBweCAtNnB4IHJnYigwIDAgMCAvIDAuMSk7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnRGb3JtIHtcclxuICAgIGRpcmVjdGlvbjogcnRsICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ091dGZpdCcsICdJbnRlcicsICdDYWlybycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzFlMjkzYjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tcC1zaGFkb3ctbWQpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnByZW1pdW0tY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wLXNoYWRvdy1sZykgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJlbWl1bS1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMzM0MTU1ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogaHNsKHZhcigtLXAtcHJpbWFyeSkpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggaHNsYSh2YXIoLS1wLXByaW1hcnkpLCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJlbWl1bS1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4ubGFiZWwtdGV4dC1wcmVtaXVtIHtcclxuICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5zZWxlY3QtYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIMOiwpzChSBQcmV2aWV3IENvbXBvbmVudCBTdHlsZXMgKi9cclxuLnByZXZpZXctc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMDUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucHJldmlldy1zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgI2YxZjVmOTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC43NXJlbTtcclxufVxyXG5cclxuLnByZXZpZXctc2lkZWJhci1ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmYWZiZmM7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAycmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJyZW07XHJcbn1cclxuXHJcbi5wcmV2aWV3LXBsYWNlaG9sZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ucHJldmlldy1wbGFjZWhvbGRlciBpIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuLnNoYWRvdy1pbm5lci1zb2Z0IHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCAwIHJnYigwIDAgMCAvIDAuMDMpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1pZnJhbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4ucHJlbWl1bS1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1idG46YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLyogTG9va3VwIFN0eWxpbmcgKi9cclxuLmxvb2t1cC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sb29rdXAtZ3JvdXAgLnByZW1pdW0taW5wdXQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICAgIC8qIE1ha2Ugcm9vbSBmb3IgdGhlIGRvdHMgKi9cclxufVxyXG5cclxuLmxvb2t1cC1pbmRpY2F0b3Ige1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMC43NXJlbTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xyXG59XHJcblxyXG4ubG9va3VwLWdyb3VwOmhvdmVyIC5sb29rdXAtaW5kaWNhdG9yIHtcclxuICAgIGNvbG9yOiBoc2wodmFyKC0tcC1wcmltYXJ5KSk7XHJcbn1cclxuXHJcbi5sb29rdXAtZ3JvdXA6aG92ZXIgLnByZW1pdW0taW5wdXQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFRhYmxlIFN0eWxpbmcgKi9cclxuLnByZW1pdW0tdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbn1cclxuXHJcbi5wcmVtaXVtLXRhYmxlIHRoZWFkIHRoIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmMgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmMWY1ZjkgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWJsZSB0Ym9keSB0ciB7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbn1cclxuXHJcbi5wcmVtaXVtLXRhYmxlIHRib2R5IHRyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbn1cclxuXHJcbi5wcmVtaXVtLXRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogIzMzNDE1NTtcclxufVxyXG5cclxuLnByZW1pdW0tdGFibGUgdHI6bGFzdC1jaGlsZCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4vKiBCYWRnZXMgKi9cclxuLmdsYXNzLWJhZGdlIHtcclxuICAgIGJhY2tncm91bmQ6IGhzbCh2YXIoLS1wLXByaW1hcnktc29mdCkpO1xyXG4gICAgY29sb3I6IGhzbCh2YXIoLS1wLXByaW1hcnkpKTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMzVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2xhKHZhcigtLXAtcHJpbWFyeSksIDAuMSk7XHJcbn1cclxuXHJcbi5hbmltYXRlLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBlYXNlLW91dCBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBTcGVjaWZpYyBGaWVsZCBIaWdobGlnaHRzICovXHJcbi5oaWdobGlnaHQtZmllbGQgLnByZW1pdW0taW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogaHNsKHZhcigtLXAtcHJpbWFyeS1zb2Z0KSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogaHNsYSh2YXIoLS1wLXByaW1hcnkpLCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogaHNsKHZhcigtLXAtcHJpbWFyeSkpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogOTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return StatementForm;
})();

/***/ }),

/***/ 19829:
/*!**************************************************************************************************!*\
  !*** ./src/app/features/execution/components/inquiry-about-statement/inquiry-about-statement.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InquiryAboutStatement: () => (/* binding */ InquiryAboutStatement)
/* harmony export */ });
/* harmony import */ var C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _services_custody_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/custody.service */ 8053);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 12481);










function InquiryAboutStatement_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " \u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0642\u064A\u0648\u062F \u0627\u0644\u0645\u0627\u0644\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function InquiryAboutStatement_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 24);
  }
}
function InquiryAboutStatement_div_20_tr_44_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InquiryAboutStatement_div_20_tr_44_button_27_Template_button_click_0_listener() {
      const att_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.viewAttachment(att_r2.fileContent));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function InquiryAboutStatement_div_20_tr_44_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "NO ATTACHMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function InquiryAboutStatement_div_20_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 47)(1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td", 50)(6, "div", 51)(7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td")(12, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td")(15, "div", 55)(16, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "KWD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td")(22, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "td", 45)(26, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, InquiryAboutStatement_div_20_tr_44_button_27_Template, 2, 0, "button", 61)(28, InquiryAboutStatement_div_20_tr_44_span_28_Template, 2, 0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("animation-delay", i_r5 * 40 + "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](s_r4.codeAutoNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](s_r4.clientName || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](s_r4.personName || "\u0628\u062F\u0648\u0646 \u0627\u0633\u0645 \u0634\u062E\u0635\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", s_r4.expenseName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](18, 13, s_r4.amount, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", s_r4.sendToACC ? "bg-green-100 text-green-700 border border-green-200" : "bg-amber-100 text-amber-700 border border-amber-200");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", s_r4.sendToACC ? "bg-green-600 shadow-[0_0_5px_rgba(34,197,94,0.4)]" : "bg-amber-600 animate-pulse");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", s_r4.sendToACC ? "Verified" : "Pending Review", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", s_r4.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !s_r4.attachments || s_r4.attachments.length === 0);
  }
}
function InquiryAboutStatement_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div")(6, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 35)(16, "div", 36)(17, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Total Liquid Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 38)(20, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "KWD");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 41)(26, "table", 42)(27, "thead")(28, "tr")(29, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "\u0627\u0644\u0645\u0648\u0643\u0644 / \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36, "\u0646\u0648\u0639 \u0627\u0644\u0645\u0635\u0631\u0648\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, "\u0627\u0644\u0645\u0628\u0644\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0631\u062D\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "\u0627\u0644\u0648\u062B\u0627\u0626\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, InquiryAboutStatement_div_20_tr_44_Template, 29, 16, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ID: ", ctx_r2.lastSearchedAutoNo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r2.reportData.length, " \u0633\u062C\u0644\u0627\u062A \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u064A\u0647\u0627");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](22, 4, ctx_r2.getTotalAmount(), "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.reportData);
  }
}
function InquiryAboutStatement_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 68)(3, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h4", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u0628\u0648\u0627\u0628\u0629 \u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0627\u0644\u0639\u0647\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " \u064A\u0631\u062C\u0649 \u0625\u062F\u062E\u0627\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " \u0644\u0644\u0645\u0644\u0641 \u0641\u064A \u0627\u0644\u0623\u0639\u0644\u0649 \u0644\u0644\u0628\u062D\u062B \u0639\u0646 \u0643\u0627\u0641\u0629 \u0627\u0644\u062D\u0631\u0643\u0627\u062A \u0648\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function InquiryAboutStatement_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 72)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "span", 73)(3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 75)(5, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Analyzing Financial Records");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
let InquiryAboutStatement = /*#__PURE__*/(() => {
  class InquiryAboutStatement {
    autoNumber = '';
    lastSearchedAutoNo = '';
    reportData = null;
    isLoading = false;
    custodyService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_custody_service__WEBPACK_IMPORTED_MODULE_5__.CustodyService);
    sanitizer = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer);
    // وظيفة البحث عن الكشف بالرقم الآلي
    search() {
      var _this = this;
      return (0,C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        if (!_this.autoNumber.trim()) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'الرجاء إدخال الرقم الآلي للبحث', 'info');
          return;
        }
        const searchVal = _this.autoNumber.trim();
        _this.isLoading = true;
        try {
          const res = yield _this.custodyService.getByAutoNo(searchVal).toPromise();
          if (res && res.length > 0) {
            // Strict client-side filter as an extra safeguard
            _this.reportData = res.filter(item => item.codeAutoNo?.toString() === searchVal);
            _this.lastSearchedAutoNo = searchVal;
            if (_this.reportData.length === 0) {
              _this.reportData = null;
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'لم يتم العثور على مطابقة تامة لهذا الرقم الآلي', 'warning');
            }
          } else {
            _this.reportData = null;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'لم يتم العثور على بيانات لهذا الرقم الآلي', 'warning');
          }
        } catch (err) {
          console.error(err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل البحث عن الرقم الآلي', 'error');
        } finally {
          _this.isLoading = false;
        }
      })();
    }
    // معاينة الملف المرفق
    viewAttachment(fileContent) {
      if (!fileContent) return;
      // Create a blob from base64
      const byteCharacters = atob(fileContent);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {
        type: 'application/pdf'
      });
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL, '_blank');
    }
    // حساب المجموع الكلي
    getTotalAmount() {
      if (!this.reportData) return 0;
      return this.reportData.reduce((sum, item) => sum + (item.amount || 0), 0);
    }
    // وظيفة الطباعة
    print() {
      if (!this.reportData) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'لا يوجد بيانات للطباعة', 'info');
        return;
      }
      window.print();
    }
    static ɵfac = function InquiryAboutStatement_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InquiryAboutStatement)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: InquiryAboutStatement,
      selectors: [["app-inquiry-about-statement"]],
      decls: 23,
      vars: 8,
      consts: [[1, "rightSide", "flex", "flex-col", "gap-10", "p-2", "animate-fade-in"], [1, "premium-card", "p-12", "relative", "overflow-hidden", "bg-gradient-to-l", "from-white", "to-slate-50/30"], [1, "flex", "flex-col", "xl:flex-row", "gap-10", "items-end", "z-10", "relative"], [1, "form-control", "flex-1", "group"], [1, "label-text-premium", "flex", "items-center", "gap-3", "mb-4"], [1, "w-8", "h-8", "rounded-lg", "bg-blue-50", "text-blue-600", "flex", "items-center", "justify-center", "text-xs", "shadow-inner"], [1, "fas", "fa-barcode"], [1, "relative"], ["placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A \u0647\u0646\u0627...", 1, "input", "premium-input", "w-full", "pr-14", "text-2xl", "font-black", "text-slate-800", "tracking-tight", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "absolute", "inset-y-0", "right-0", "flex", "items-center", "pr-5", "text-slate-300", "group-focus-within:text-blue-500", "transition-all"], [1, "fas", "fa-fingerprint", "text-xl"], [1, "flex", "gap-4", "w-full", "xl:w-auto"], [1, "premium-btn", "btn", "btn-primary", "flex-1", "xl:flex-none", "bg-blue-600", "hover:bg-blue-700", "border-none", "text-white", "px-14", "py-4", "h-auto", "shadow-lg", "shadow-blue-500/20", 3, "click", "disabled"], ["class", "flex items-center gap-3", 4, "ngIf"], ["class", "loading loading-spinner", 4, "ngIf"], [1, "premium-btn", "btn", "bg-white", "border", "border-slate-200", "text-slate-500", "hover:bg-slate-50", "px-10", "h-auto", 3, "click", "disabled"], [1, "fas", "fa-print", "opacity-60"], [1, "absolute", "-left-10", "-bottom-10", "opacity-[0.03]", "pointer-events-none"], [1, "fas", "fa-search-plus", "text-[200px]", "text-slate-900"], ["class", "premium-card p-0 overflow-hidden shadow-2xl shadow-slate-200/40", 4, "ngIf"], ["class", "premium-card p-24 flex flex-col items-center justify-center text-center bg-slate-50/20 border-2 border-dashed border-slate-100", 4, "ngIf"], ["class", "py-32 flex flex-col items-center gap-8 animate-fade-in", 4, "ngIf"], [1, "flex", "items-center", "gap-3"], [1, "fas", "fa-search-dollar"], [1, "loading", "loading-spinner"], [1, "premium-card", "p-0", "overflow-hidden", "shadow-2xl", "shadow-slate-200/40"], [1, "p-10", "border-b", "border-slate-100", "flex", "flex-col", "md:flex-row", "justify-between", "items-center", "bg-white", "gap-6"], [1, "flex", "items-center", "gap-5"], [1, "w-14", "h-14", "bg-blue-600", "text-white", "rounded-2xl", "flex", "items-center", "justify-center", "shadow-lg", "shadow-blue-500/30"], [1, "fas", "fa-file-invoice", "text-xl"], [1, "font-black", "text-2xl", "text-slate-900", "tracking-tight"], [1, "text-slate-400", "text-xs", "mt-1", "font-bold", "uppercase", "tracking-widest", "flex", "items-center", "gap-2"], [1, "fas", "fa-hashtag", "text-[8px]"], [1, "mx-2", "opacity-20"], [1, "text-blue-500"], [1, "glass-badge", "h-14", "px-8", "flex", "items-center", "gap-4", "bg-blue-50/50", "border-blue-100"], [1, "flex", "flex-col", "items-end"], [1, "text-[9px]", "font-black", "uppercase", "text-slate-400", "tracking-tighter", "mb-0.5"], [1, "flex", "items-center", "gap-2"], [1, "text-3xl", "font-black", "text-blue-700"], [1, "text-[10px]", "font-black", "text-blue-400", "bg-white", "px-2", "py-0.5", "rounded-md", "border", "border-blue-50"], [1, "overflow-x-auto"], [1, "premium-table"], [1, "w-20", "text-center"], [1, "w-64"], [1, "text-center"], ["class", "group animate-fade-in", 3, "animation-delay", 4, "ngFor", "ngForOf"], [1, "group", "animate-fade-in"], [1, "text-center", "text-slate-300", "font-black", "text-xs"], [1, "font-black", "text-slate-900", "tracking-tight", "group-hover:text-blue-600"], [1, "font-bold", "text-slate-600"], [1, "flex", "flex-col", "gap-0.5"], [1, "text-sm", "truncate"], [1, "text-[10px]", "text-slate-400"], [1, "px-3", "py-1", "bg-slate-50", "rounded-lg", "text-[10px]", "font-black", "text-slate-500", "uppercase", "tracking-tighter", "border", "border-slate-100/50"], [1, "flex", "items-center", "gap-1.5"], [1, "text-blue-700", "font-black", "text-lg"], [1, "text-[9px]", "font-black", "text-slate-300"], [1, "inline-flex", "items-center", "gap-2", "px-3", "py-1", "rounded-full", "text-[9px]", "font-black", "uppercase", 3, "ngClass"], [1, "w-1.5", "h-1.5", "rounded-full", 3, "ngClass"], [1, "flex", "justify-center", "gap-2"], ["class", "w-10 h-10 rounded-xl bg-slate-900 text-white hover:bg-blue-600 transition-all shadow-md flex items-center justify-center group/btn", "title", "\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642", 3, "click", 4, "ngFor", "ngForOf"], ["class", "text-slate-300 text-[10px] font-extrabold italic opacity-50", 4, "ngIf"], ["title", "\u0639\u0631\u0636 \u0627\u0644\u0645\u0631\u0641\u0642", 1, "w-10", "h-10", "rounded-xl", "bg-slate-900", "text-white", "hover:bg-blue-600", "transition-all", "shadow-md", "flex", "items-center", "justify-center", "group/btn", 3, "click"], [1, "fas", "fa-file-pdf", "text-xs", "group-hover/btn:scale-110", "transition-transform"], [1, "text-slate-300", "text-[10px]", "font-extrabold", "italic", "opacity-50"], [1, "premium-card", "p-24", "flex", "flex-col", "items-center", "justify-center", "text-center", "bg-slate-50/20", "border-2", "border-dashed", "border-slate-100"], [1, "w-40", "h-40", "bg-white", "rounded-full", "mb-10", "flex", "items-center", "justify-center", "shadow-xl", "shadow-slate-200/50", "relative"], [1, "absolute", "inset-0", "bg-blue-500/5", "rounded-full", "animate-ping"], [1, "fas", "fa-search-dollar", "text-6xl", "text-blue-500/20"], [1, "font-black", "text-slate-800", "text-2xl", "mb-4"], [1, "text-slate-400", "text-sm", "max-w-sm", "font-medium", "leading-relaxed"], [1, "py-32", "flex", "flex-col", "items-center", "gap-8", "animate-fade-in"], [1, "loading", "loading-spinner", "loading-lg", "text-blue-600", "w-16", "h-16", "opacity-40"], [1, "fas", "fa-brain", "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "text-blue-600", "animate-pulse"], [1, "flex", "flex-col", "items-center", "gap-2"], [1, "text-xs", "font-black", "text-slate-800", "uppercase", "tracking-[0.2em]"], [1, "w-48", "h-1", "bg-slate-100", "rounded-full", "overflow-hidden"], [1, "h-full", "bg-blue-600", "w-1/2", "animate-shimmer"]],
      template: function InquiryAboutStatement_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "label", 4)(5, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " \u0645\u062D\u0631\u0643 \u0627\u0644\u0628\u062D\u062B \u0628\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0622\u0644\u064A (Case ID) ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7)(9, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayListener"]("ngModelChange", function InquiryAboutStatement_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayBindingSet"](ctx.autoNumber, $event) || (ctx.autoNumber = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup.enter", function InquiryAboutStatement_Template_input_keyup_enter_9_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 11)(13, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InquiryAboutStatement_Template_button_click_13_listener() {
            return ctx.search();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, InquiryAboutStatement_span_14_Template, 3, 0, "span", 13)(15, InquiryAboutStatement_span_15_Template, 1, 0, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function InquiryAboutStatement_Template_button_click_16_listener() {
            return ctx.print();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, InquiryAboutStatement_div_20_Template, 45, 7, "div", 19)(21, InquiryAboutStatement_div_21_Template, 11, 0, "div", 20)(22, InquiryAboutStatement_div_22_Template, 9, 0, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtwoWayProperty"]("ngModel", ctx.autoNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.reportData);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.reportData);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.reportData && !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n    \n\n    --p-primary: 217 91% 60%;\n    \n\n    --p-secondary: 222 47% 11%;\n    \n\n    --p-accent: 199 89% 48%;\n    \n\n    --p-success: 142 71% 45%;\n    \n\n    --p-warning: 38 92% 50%;\n    \n\n    --p-bg-soft: 210 40% 98%;\n    --p-glass-border: rgba(226, 232, 240, 0.6);\n}\n\n.rightSide[_ngcontent-%COMP%] {\n    direction: rtl !important;\n    font-family: 'Outfit', 'Inter', system-ui, sans-serif;\n    padding: 1rem;\n}\n\n\n\n.premium-card[_ngcontent-%COMP%] {\n    background: #ffffff;\n    border: 1px solid #f1f5f9;\n    border-radius: 2rem !important;\n    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.04), 0 4px 6px -4px rgb(0 0 0 / 0.04);\n    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.premium-card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.05);\n}\n\n\n\n.premium-input[_ngcontent-%COMP%] {\n    background: #f8fafc !important;\n    border: 1.5px solid #e2e8f0 !important;\n    border-radius: 1.25rem !important;\n    padding: 1.25rem 1.5rem !important;\n    font-size: 1rem !important;\n    font-weight: 500 !important;\n    color: #1e293b !important;\n    transition: all 0.3s ease !important;\n}\n\n.premium-input[_ngcontent-%COMP%]:focus {\n    background: #ffffff !important;\n    border-color: hsl(var(--p-primary)) !important;\n    box-shadow: 0 0 0 4px hsla(var(--p-primary), 0.1) !important;\n}\n\n\n\n.premium-btn[_ngcontent-%COMP%] {\n    border-radius: 1.25rem !important;\n    font-weight: 850 !important;\n    font-size: 0.9rem !important;\n    text-transform: none !important;\n    letter-spacing: -0.01em;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.premium-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n    transform: translateY(-2px);\n    box-shadow: 0 10px 20px -5px hsla(var(--p-primary), 0.3);\n}\n\n.premium-btn[_ngcontent-%COMP%]:active {\n    transform: translateY(0);\n}\n\n\n\n.premium-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: separate;\n    border-spacing: 0;\n}\n\n.premium-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: #f8fafc !important;\n    color: #64748b !important;\n    font-weight: 850 !important;\n    font-size: 0.7rem !important;\n    text-transform: uppercase;\n    letter-spacing: 0.1em;\n    padding: 1.25rem 1rem !important;\n    border-bottom: 2px solid #f1f5f9 !important;\n}\n\n.premium-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    transition: all 0.2s ease;\n}\n\n.premium-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background-color: #fbfcfe;\n}\n\n.premium-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1.25rem 1rem !important;\n    border-bottom: 1px solid #f1f5f9;\n    font-size: 0.9rem;\n    color: #334155;\n    font-weight: 600;\n}\n\n\n\n.glass-badge[_ngcontent-%COMP%] {\n    background: hsla(var(--p-primary), 0.05);\n    color: hsl(var(--p-primary));\n    border: 1px solid hsla(var(--p-primary), 0.1);\n    border-radius: 1rem;\n    font-weight: 800;\n}\n\n.label-text-premium[_ngcontent-%COMP%] {\n    color: #64748b;\n    font-weight: 800;\n    font-size: 0.8rem;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    margin-right: 0.5rem;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_slideUpFade {\n    from {\n        opacity: 0;\n        transform: translateY(15px);\n    }\n\n    to {\n        opacity: 1;\n        transform: translateY(0);\n    }\n}\n\n.animate-fade-in[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_slideUpFade 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;\n}\n\n\n\n@media print {\n    .rightSide[_ngcontent-%COMP%] {\n        padding: 0;\n    }\n\n    .premium-btn[_ngcontent-%COMP%], \n   .premium-card[_ngcontent-%COMP%] {\n        box-shadow: none !important;\n    }\n\n    .premium-input[_ngcontent-%COMP%] {\n        border: 1px solid #000 !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL2NvbXBvbmVudHMvaW5xdWlyeS1hYm91dC1zdGF0ZW1lbnQvaW5xdWlyeS1hYm91dC1zdGF0ZW1lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFEQUFxRDtJQUNyRCxhQUFhO0FBQ2pCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGdGQUFnRjtJQUNoRixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSw4Q0FBOEM7QUFDbEQ7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0ksOEJBQThCO0lBQzlCLHNDQUFzQztJQUN0QyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qiw4Q0FBOEM7SUFDOUMsNERBQTREO0FBQ2hFOztBQUVBLHFCQUFxQjtBQUNyQjtJQUNJLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQSw0QkFBNEI7QUFDNUI7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdDQUFnQztJQUNoQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLHdDQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsNkNBQTZDO0lBQzdDLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSTtRQUNJLFVBQVU7UUFDViwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1Ysd0JBQXdCO0lBQzVCO0FBQ0o7O0FBRUE7SUFDSSxpRUFBaUU7QUFDckU7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7O1FBRUksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksaUNBQWlDO0lBQ3JDO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAvKiBQcmVtaXVtIERlc2lnbiBTeXN0ZW0gKi9cclxuICAgIC0tcC1wcmltYXJ5OiAyMTcgOTElIDYwJTtcclxuICAgIC8qIE1vZGVybiBibHVlICovXHJcbiAgICAtLXAtc2Vjb25kYXJ5OiAyMjIgNDclIDExJTtcclxuICAgIC8qIERlZXAgc2xhdGUgKi9cclxuICAgIC0tcC1hY2NlbnQ6IDE5OSA4OSUgNDglO1xyXG4gICAgLyogQ3lhbiBhY2NlbnQgKi9cclxuICAgIC0tcC1zdWNjZXNzOiAxNDIgNzElIDQ1JTtcclxuICAgIC8qIFZpYnJhbnQgZ3JlZW4gKi9cclxuICAgIC0tcC13YXJuaW5nOiAzOCA5MiUgNTAlO1xyXG4gICAgLyogV2FybSBhbWJlciAqL1xyXG4gICAgLS1wLWJnLXNvZnQ6IDIxMCA0MCUgOTglO1xyXG4gICAgLS1wLWdsYXNzLWJvcmRlcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAwLjYpO1xyXG59XHJcblxyXG4ucmlnaHRTaWRlIHtcclxuICAgIGRpcmVjdGlvbjogcnRsICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ091dGZpdCcsICdJbnRlcicsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi8qIMOiwpzChSBQcmVtaXVtIENhcmRzICovXHJcbi5wcmVtaXVtLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWY1Zjk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMDQpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjA0KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWNhcmQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2IoMCAwIDAgLyAwLjA1KTtcclxufVxyXG5cclxuLyogw6LCnMKFIEludGVyYWN0aXZlIElucHV0cyAqL1xyXG4ucHJlbWl1bS1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkICNlMmU4ZjAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjMWUyOTNiICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogaHNsKHZhcigtLXAtcHJpbWFyeSkpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggaHNsYSh2YXIoLS1wLXByaW1hcnkpLCAwLjEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIMOiwpzChSBBY3Rpb24gQnV0dG9ucyAqL1xyXG4ucHJlbWl1bS1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDg1MCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByZW1pdW0tYnRuOm5vdCg6ZGlzYWJsZWQpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC01cHggaHNsYSh2YXIoLS1wLXByaW1hcnkpLCAwLjMpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1idG46YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLyogw6LCnMKFIERhdGEgVGFibGUgUmVmaW5lbWVudCAqL1xyXG4ucHJlbWl1bS10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLnByZW1pdW0tdGFibGUgdGhlYWQgdGgge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmYyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4NTAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2YxZjVmOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWJsZSB0Ym9keSB0ciB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWJsZSB0Ym9keSB0cjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmY2ZlO1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDFyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmNWY5O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIMOiwpzChSBCYWRnZXMgJiBJbmRpY2F0b3JzICovXHJcbi5nbGFzcy1iYWRnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBoc2xhKHZhcigtLXAtcHJpbWFyeSksIDAuMDUpO1xyXG4gICAgY29sb3I6IGhzbCh2YXIoLS1wLXByaW1hcnkpKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbGEodmFyKC0tcC1wcmltYXJ5KSwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubGFiZWwtdGV4dC1wcmVtaXVtIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLyogw6LCnMKFIEFuaW1hdGlvbnMgKi9cclxuQGtleWZyYW1lcyBzbGlkZVVwRmFkZSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbmltYXRlLWZhZGUtaW4ge1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwRmFkZSAwLjVzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgZm9yd2FyZHM7XHJcbn1cclxuXHJcbi8qIMOiwpzChSBQcmludCBPcHRpbWl6YXRpb24gKi9cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5yaWdodFNpZGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByZW1pdW0tYnRuLFxyXG4gICAgLnByZW1pdW0tY2FyZCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcmVtaXVtLWlucHV0IHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return InquiryAboutStatement;
})();

/***/ }),

/***/ 43115:
/*!************************************************************************************************!*\
  !*** ./src/app/features/execution/components/inquiry-about-rejected/inquiry-about-rejected.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InquiryAboutRejected: () => (/* binding */ InquiryAboutRejected)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _shared_statement_form_statement_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/statement-form/statement-form */ 12963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);



let InquiryAboutRejected = /*#__PURE__*/(() => {
  class InquiryAboutRejected {
    statements = [];
    static ɵfac = function InquiryAboutRejected_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || InquiryAboutRejected)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: InquiryAboutRejected,
      selectors: [["app-inquiry-about-rejected"]],
      decls: 2,
      vars: 1,
      consts: [[1, "flex", "flex-col", "gap-6"], ["mode", "inquiry", 3, "statementsChange", "statements"]],
      template: function InquiryAboutRejected_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "app-statement-form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("statementsChange", function InquiryAboutRejected_Template_app_statement_form_statementsChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.statements, $event) || (ctx.statements = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("statements", ctx.statements);
        }
      },
      dependencies: [_shared_statement_form_statement_form__WEBPACK_IMPORTED_MODULE_1__.StatementForm, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return InquiryAboutRejected;
})();

/***/ }),

/***/ 83857:
/*!***********************************************************************!*\
  !*** ./src/app/features/execution/pages/custody-page/custody-page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustodyPage: () => (/* binding */ CustodyPage)
/* harmony export */ });
/* harmony import */ var _components_add_a_statement_add_a_statement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/add-a-statement/add-a-statement */ 3517);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _components_inquiry_about_rejected_inquiry_about_rejected__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/inquiry-about-rejected/inquiry-about-rejected */ 43115);
/* harmony import */ var _components_inquiry_about_statement_inquiry_about_statement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/inquiry-about-statement/inquiry-about-statement */ 19829);
/* harmony import */ var _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/go-back/go-back */ 9156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 85422);








function CustodyPage_app_add_a_statement_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-add-a-statement");
  }
}
function CustodyPage_app_inquiry_about_rejected_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-inquiry-about-rejected");
  }
}
function CustodyPage_app_inquiry_about_statement_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-inquiry-about-statement");
  }
}
let CustodyPage = /*#__PURE__*/(() => {
  class CustodyPage {
    route;
    router;
    activeTab = 'add';
    constructor(route, router) {
      this.route = route;
      this.router = router;
    }
    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        if (params['tab']) {
          this.activeTab = params['tab'];
        }
      });
    }
    setActiveTab(tab) {
      this.activeTab = tab;
      this.router.navigate([], {
        queryParams: {
          tab
        },
        queryParamsHandling: 'merge'
      });
    }
    static ɵfac = function CustodyPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustodyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CustodyPage,
      selectors: [["app-custody-page"]],
      decls: 22,
      vars: 9,
      consts: [[1, "page-container", "animate-slide-up"], [1, "page-header", "mt-8"], [1, "flex", "items-center", "gap-4"], [1, "header-icon-wrapper"], [1, "fas", "fa-wallet", "text-2xl"], [1, "tabs-nav"], [1, "tab-link", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "fas", "fa-file-invoice-dollar"], [1, "fas", "fa-pause-circle"], [1, "page-content"], [4, "ngIf"]],
      template: function CustodyPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-go-back");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1)(3, "h2", 2)(4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0647\u062F \u0648\u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustodyPage_Template_div_click_9_listener() {
            return ctx.setActiveTab("add");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " \u0625\u0636\u0627\u0641\u0629 \u0643\u0634\u0641 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustodyPage_Template_div_click_12_listener() {
            return ctx.setActiveTab("report");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustodyPage_Template_div_click_15_listener() {
            return ctx.setActiveTab("stopped");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " \u0627\u0644\u0645\u0648\u0642\u0648\u0641 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CustodyPage_app_add_a_statement_19_Template, 1, 0, "app-add-a-statement", 11)(20, CustodyPage_app_inquiry_about_rejected_20_Template, 1, 0, "app-inquiry-about-rejected", 11)(21, CustodyPage_app_inquiry_about_statement_21_Template, 1, 0, "app-inquiry-about-statement", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.activeTab === "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.activeTab === "report");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("active", ctx.activeTab === "stopped");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeTab === "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeTab === "stopped");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.activeTab === "report");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _components_add_a_statement_add_a_statement__WEBPACK_IMPORTED_MODULE_0__.AddAStatement, _components_inquiry_about_rejected_inquiry_about_rejected__WEBPACK_IMPORTED_MODULE_2__.InquiryAboutRejected, _components_inquiry_about_statement_inquiry_about_statement__WEBPACK_IMPORTED_MODULE_3__.InquiryAboutStatement, _shared_components_go_back_go_back__WEBPACK_IMPORTED_MODULE_4__.GoBack],
      styles: ["[_nghost-%COMP%] {\n    \n\n    --p-primary: 217 91% 60%;      \n\n    --p-secondary: 222 47% 11%;     \n\n    --p-accent: 199 89% 48%;       \n\n    --p-success: 142 71% 45%;      \n\n    --p-warning: 38 92% 50%;       \n\n    --p-danger: 0 84% 60%;         \n\n    \n    \n\n    --p-bg-soft: 210 40% 98%;\n    --p-card-bg: rgba(255, 255, 255, 0.8);\n    --p-glass-border: rgba(226, 232, 240, 0.6);\n    --p-shadow-sm: 0 4px 6px -1px rgb(0 0 0 / 0.05);\n    --p-shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.04);\n    --p-shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.03);\n    \n    \n\n    --p-font: 'Outfit', 'Inter', system-ui, sans-serif;\n}\n\n.page-container[_ngcontent-%COMP%] {\n    padding: 2rem;\n    font-family: var(--p-font);\n    background: radial-gradient(circle at top right, hsla(var(--p-primary), 0.03), transparent 40%),\n                radial-gradient(circle at bottom left, hsla(var(--p-accent), 0.03), transparent 40%);\n    min-height: 100vh;\n    direction: rtl;\n}\n\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n    font-weight: 850;\n    color: hsl(var(--p-secondary));\n    letter-spacing: -0.04em;\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-bottom: 2.5rem;\n}\n\n.header-icon-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 60px;\n    height: 60px;\n    background: linear-gradient(135deg, hsla(var(--p-primary), 0.1), hsla(var(--p-primary), 0.05));\n    border-radius: 1.25rem;\n    color: hsl(var(--p-primary));\n    box-shadow: inset 0 2px 4px hsla(var(--p-primary), 0.1);\n}\n\n.tabs-nav[_ngcontent-%COMP%] {\n    display: inline-flex;\n    background: rgba(241, 245, 249, 0.8);\n    padding: 0.4rem;\n    border-radius: 1.25rem;\n    border: 1px solid var(--p-glass-border);\n    -webkit-backdrop-filter: blur(8px);\n            backdrop-filter: blur(8px);\n    margin-bottom: 2.5rem;\n    gap: 0.25rem;\n}\n\n.tab-link[_ngcontent-%COMP%] {\n    cursor: pointer;\n    padding: 0.75rem 1.75rem;\n    border-radius: 1rem;\n    font-size: 0.95rem;\n    font-weight: 600;\n    color: #64748b;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    display: flex;\n    align-items: center;\n    gap: 0.6rem;\n    -webkit-user-select: none;\n            user-select: none;\n}\n\n.tab-link[_ngcontent-%COMP%]:hover:not(.active) {\n    background: rgba(255, 255, 255, 0.5);\n    color: hsl(var(--p-primary));\n}\n\n.tab-link.active[_ngcontent-%COMP%] {\n    background: #ffffff;\n    color: hsl(var(--p-primary));\n    box-shadow: var(--p-shadow-md), 0 0 0 1px rgba(0, 0, 0, 0.01);\n    transform: translateY(-1px);\n}\n\n.preview-container[_ngcontent-%COMP%] {\n    background: #fff;\n    border-radius: 1.5rem;\n    border: 1px solid var(--premium-border);\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n\n.preview-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n    border-bottom: 1px solid var(--premium-border);\n    background: rgba(248, 250, 252, 0.5);\n    font-weight: 700;\n    font-size: 0.875rem;\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.preview-placeholder[_ngcontent-%COMP%] {\n    padding: 3rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    color: #94a3b8;\n}\n\n.preview-placeholder[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    opacity: 0.2;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZXhlY3V0aW9uL3BhZ2VzL2N1c3RvZHktcGFnZS9jdXN0b2R5LXBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0RBQWtEO0lBQ2xELHdCQUF3QixPQUFPLGdCQUFnQjtJQUMvQywwQkFBMEIsTUFBTSxlQUFlO0lBQy9DLHVCQUF1QixRQUFRLGdCQUFnQjtJQUMvQyx3QkFBd0IsT0FBTyxrQkFBa0I7SUFDakQsdUJBQXVCLFFBQVEsZUFBZTtJQUM5QyxxQkFBcUIsVUFBVSxhQUFhOztJQUU1Qyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsK0NBQStDO0lBQy9DLGlEQUFpRDtJQUNqRCxpREFBaUQ7O0lBRWpELGVBQWU7SUFDZixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCO29HQUNnRztJQUNoRyxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhGQUE4RjtJQUM5RixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLHNCQUFzQjtJQUN0Qix1Q0FBdUM7SUFDdkMsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlEQUFpRDtJQUNqRCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkRBQTZEO0lBQzdELDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsdUNBQXVDO0lBQ3ZDLDhDQUE4QztJQUM5QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4Q0FBOEM7SUFDOUMsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAvKiBQcmVtaXVtIENvbG9yIFBhbGV0dGUgKEhTTCBiYXNlZCBmb3IgaGFybW9ueSkgKi9cclxuICAgIC0tcC1wcmltYXJ5OiAyMTcgOTElIDYwJTsgICAgICAvKiBNb2Rlcm4gYmx1ZSAqL1xyXG4gICAgLS1wLXNlY29uZGFyeTogMjIyIDQ3JSAxMSU7ICAgICAvKiBEZWVwIHNsYXRlICovXHJcbiAgICAtLXAtYWNjZW50OiAxOTkgODklIDQ4JTsgICAgICAgLyogQ3lhbiBhY2NlbnQgKi9cclxuICAgIC0tcC1zdWNjZXNzOiAxNDIgNzElIDQ1JTsgICAgICAvKiBWaWJyYW50IGdyZWVuICovXHJcbiAgICAtLXAtd2FybmluZzogMzggOTIlIDUwJTsgICAgICAgLyogV2FybSBhbWJlciAqL1xyXG4gICAgLS1wLWRhbmdlcjogMCA4NCUgNjAlOyAgICAgICAgIC8qIFNvZnQgcmVkICovXHJcbiAgICBcclxuICAgIC8qIFN1cmZhY2VzICYgR2xhc3Ntb3JwaGlzbSAqL1xyXG4gICAgLS1wLWJnLXNvZnQ6IDIxMCA0MCUgOTglO1xyXG4gICAgLS1wLWNhcmQtYmc6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICAgIC0tcC1nbGFzcy1ib3JkZXI6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMC42KTtcclxuICAgIC0tcC1zaGFkb3ctc206IDAgNHB4IDZweCAtMXB4IHJnYigwIDAgMCAvIDAuMDUpO1xyXG4gICAgLS1wLXNoYWRvdy1tZDogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjA0KTtcclxuICAgIC0tcC1zaGFkb3ctbGc6IDAgMjBweCAyNXB4IC01cHggcmdiKDAgMCAwIC8gMC4wMyk7XHJcbiAgICBcclxuICAgIC8qIFR5cG9ncmFwaHkgKi9cclxuICAgIC0tcC1mb250OiAnT3V0Zml0JywgJ0ludGVyJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1wLWZvbnQpO1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgcmlnaHQsIGhzbGEodmFyKC0tcC1wcmltYXJ5KSwgMC4wMyksIHRyYW5zcGFyZW50IDQwJSksXHJcbiAgICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGJvdHRvbSBsZWZ0LCBoc2xhKHZhcigtLXAtYWNjZW50KSwgMC4wMyksIHRyYW5zcGFyZW50IDQwJSk7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDg1MDtcclxuICAgIGNvbG9yOiBoc2wodmFyKC0tcC1zZWNvbmRhcnkpKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wNGVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbn1cclxuXHJcbi5oZWFkZXItaWNvbi13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGhzbGEodmFyKC0tcC1wcmltYXJ5KSwgMC4xKSwgaHNsYSh2YXIoLS1wLXByaW1hcnkpLCAwLjA1KSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjI1cmVtO1xyXG4gICAgY29sb3I6IGhzbCh2YXIoLS1wLXByaW1hcnkpKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMnB4IDRweCBoc2xhKHZhcigtLXAtcHJpbWFyeSksIDAuMSk7XHJcbn1cclxuXHJcbi50YWJzLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLCAyNDUsIDI0OSwgMC44KTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wLWdsYXNzLWJvcmRlcik7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgIGdhcDogMC4yNXJlbTtcclxufVxyXG5cclxuLnRhYi1saW5rIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNnJlbTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4udGFiLWxpbms6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGNvbG9yOiBoc2wodmFyKC0tcC1wcmltYXJ5KSk7XHJcbn1cclxuXHJcbi50YWItbGluay5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiBoc2wodmFyKC0tcC1wcmltYXJ5KSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1wLXNoYWRvdy1tZCksIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDEpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4ucHJldmlldy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXByZW1pdW0tYm9yZGVyKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wcmV2aWV3LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXByZW1pdW0tYm9yZGVyKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTAsIDI1MiwgMC41KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLnByZXZpZXctcGxhY2Vob2xkZXIge1xyXG4gICAgcGFkZGluZzogM3JlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbn1cclxuXHJcbi5wcmV2aWV3LXBsYWNlaG9sZGVyIGkge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CustodyPage;
})();

/***/ })

}]);
//# sourceMappingURL=3857.js.map