"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[1980],{

/***/ 21980:
/*!*****************************************************************!*\
  !*** ./src/app/features/discussions/pages/add-case/add-case.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddCase: () => (/* binding */ AddCase)
/* harmony export */ });
/* harmony import */ var _components_case_form_case_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/case-form/case-form */ 48516);
/* harmony import */ var _components_case_parties_table_case_parties_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/case-parties-table/case-parties-table */ 60046);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 85422);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);




let AddCase = /*#__PURE__*/(() => {
  class AddCase {
    showTransferTabs = false;
    onOpenTransfer() {
      this.showTransferTabs = true;
    }
    static ɵfac = function AddCase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AddCase)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AddCase,
      selectors: [["app-add-case"]],
      decls: 6,
      vars: 1,
      consts: [[1, "flex", "h-screen", "bg-base-200", "p-4", "gap-4"], [1, "flex-1", "bg-base-100", "shadow", "rounded-2xl", "p-4", "overflow-y-auto"], [3, "showTransferTabs"], [1, "w-1/2", "bg-base-100", "shadow", "rounded-2xl", "p-4", "flex", "flex-col", "right-form"]],
      template: function AddCase_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-case-parties-table", 2)(3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-case-form");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("showTransferTabs", ctx.showTransferTabs);
        }
      },
      dependencies: [_components_case_form_case_form__WEBPACK_IMPORTED_MODULE_0__.CaseForm, _components_case_parties_table_case_parties_table__WEBPACK_IMPORTED_MODULE_1__.CasePartiesTable, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: [".right-form[_ngcontent-%COMP%]{\n    direction: rtl !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGlzY3Vzc2lvbnMvcGFnZXMvYWRkLWNhc2UvYWRkLWNhc2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLnJpZ2h0LWZvcm17XHJcbiAgICBkaXJlY3Rpb246IHJ0bCAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return AddCase;
})();

/***/ }),

/***/ 48516:
/*!************************************************************************!*\
  !*** ./src/app/features/discussions/components/case-form/case-form.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaseForm: () => (/* binding */ CaseForm)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _services_discussions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/discussions.service */ 52311);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 85422);








function CaseForm_div_177_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_177_li_6_Template_li_click_0_listener() {
      const c_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("court", c_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r3.name);
  }
}
function CaseForm_div_177_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062D\u0643\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_177_li_6_Template, 2, 1, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_177_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("court"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.courts);
  }
}
function CaseForm_div_178_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_178_li_6_Template_li_click_0_listener() {
      const e_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("expert", e_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r7.name);
  }
}
function CaseForm_div_178_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062E\u0628\u064A\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_178_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_178_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("expert"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.experts);
  }
}
function CaseForm_div_179_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_179_li_6_Template_li_click_0_listener() {
      const p_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("client", p_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r10.name);
  }
}
function CaseForm_div_179_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_179_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_179_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("client"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.parties);
  }
}
function CaseForm_div_180_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_180_li_6_Template_li_click_0_listener() {
      const r_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("clientRole", r_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r13.name);
  }
}
function CaseForm_div_180_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_180_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_180_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("role"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.roles);
  }
}
function CaseForm_div_181_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_181_li_6_Template_li_click_0_listener() {
      const s_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("fileStatus", s_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r16.name);
  }
}
function CaseForm_div_181_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_181_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_181_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("fileStatus"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.fileStatuses);
  }
}
function CaseForm_div_182_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_182_li_6_Template_li_click_0_listener() {
      const l_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("lawyer", l_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const l_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](l_r19.name);
  }
}
function CaseForm_div_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062D\u0627\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_182_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_182_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("lawyer"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lawyers);
  }
}
function CaseForm_div_183_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_183_li_6_Template_li_click_0_listener() {
      const c_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("consultant", c_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r22.name);
  }
}
function CaseForm_div_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_183_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_183_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("consultant"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.consultants);
  }
}
function CaseForm_div_184_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_184_li_6_Template_li_click_0_listener() {
      const d_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("delegate", d_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](d_r25.name);
  }
}
function CaseForm_div_184_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u0644\u0645\u0646\u062F\u0648\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_184_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_184_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("delegate"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.delegates);
  }
}
function CaseForm_div_185_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_185_li_6_Template_li_click_0_listener() {
      const f_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("firstDegree", f_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const f_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](f_r28.name);
  }
}
function CaseForm_div_185_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0623\u0648\u0644 \u062F\u0631\u062C\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_185_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_185_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("firstDegree"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.firstDegrees);
  }
}
function CaseForm_div_186_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_186_li_6_Template_li_click_0_listener() {
      const a_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("appeal", a_r31));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](a_r31.name);
  }
}
function CaseForm_div_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u0644\u0627\u0633\u062A\u0626\u0646\u0627\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_186_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_186_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("appeal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.appeals);
  }
}
function CaseForm_div_187_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_187_li_6_Template_li_click_0_listener() {
      const cs_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("cassation", cs_r34));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cs_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cs_r34.name);
  }
}
function CaseForm_div_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u0644\u062A\u0645\u064A\u064A\u0632");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_187_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_187_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("cassation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.cassations);
  }
}
function CaseForm_div_188_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_188_li_6_Template_li_click_0_listener() {
      const ch_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.selectItem("chamber", ch_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ch_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ch_r37.name);
  }
}
function CaseForm_div_188_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "h3", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0627\u0644\u062F\u0627\u0626\u0631\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44)(5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CaseForm_div_188_li_6_Template, 2, 1, "li", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47)(8, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_div_188_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.closeModal("chamber"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.chambers);
  }
}
let CaseForm = /*#__PURE__*/(() => {
  class CaseForm {
    fb;
    svc;
    router;
    route;
    showModal = false;
    caseForm;
    openTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    // مودالات كل نوع
    modalVisible = {
      court: false,
      expert: false,
      client: false,
      role: false,
      fileStatus: false,
      lawyer: false,
      consultant: false,
      delegate: false,
      firstDegree: false,
      appeal: false,
      cassation: false,
      chamber: false
    };
    // بيانات المعارضات (source lists)
    courts = [];
    experts = [];
    parties = [];
    roles = [];
    fileStatuses = [];
    lawyers = [];
    consultants = [];
    delegates = [];
    firstDegrees = [];
    appeals = [];
    cassations = [];
    chambers = [];
    constructor(fb, svc, router, route) {
      this.fb = fb;
      this.svc = svc;
      this.router = router;
      this.route = route;
      this.caseForm = this.fb.group({
        serial: [''],
        floor: 0,
        shblona: 0,
        hall: 0,
        automaticNo: 0,
        court: [null],
        expert: [null],
        client: [null],
        clientRole: [null],
        fileStatus: [null],
        lawyer: [null],
        consultant: [null],
        delegate: [null],
        firstDegree: [null],
        firstDegreeNumber: [''],
        firstDegreeRaised: [''],
        appealNumber: [''],
        appealRaised: [''],
        cassationNumber: [''],
        cassationRaised: [''],
        chamber: [null],
        topic: [''],
        room: [''],
        notes: ['']
      });
    }
    ngOnInit() {
      this.svc.getCourts().subscribe(x => this.courts = x);
      this.svc.getExperts().subscribe(x => this.experts = x);
      this.svc.getParties().subscribe(x => this.parties = x);
      this.svc.getRoles().subscribe(x => this.roles = x);
      this.svc.getFileStatuses().subscribe(x => this.fileStatuses = x);
      this.svc.getLawyers().subscribe(x => this.lawyers = x);
      this.svc.getConsultants().subscribe(x => this.consultants = x);
      this.svc.getDelegates().subscribe(x => this.delegates = x);
      this.svc.getFirstDegrees().subscribe(x => this.firstDegrees = x);
      this.svc.getAppeals().subscribe(x => this.appeals = x);
      this.svc.getCassations().subscribe(x => this.cassations = x);
      this.svc.getChambers().subscribe(x => this.chambers = x);
    }
    openModal(key) {
      this.modalVisible[key] = true;
    }
    closeModal(key) {
      this.modalVisible[key] = false;
    }
    // اختيار عنصر من المودال وملئ الحقل
    selectItem(key, item) {
      // key is same as form control names for convenience mapping
      this.caseForm.patchValue({
        [key]: item
      });
      // أغلق المودال المناسب
      // بعض المفاتيح ليست مباشرة مثل clientRole => role
      const keyMap = {
        clientRole: 'role',
        fileStatus: 'fileStatus',
        firstDegree: 'firstDegree',
        appeal: 'appeal',
        cassation: 'cassation',
        chamber: 'chamber'
      };
      const modalKey = Object.keys(this.modalVisible).find(k => k === (keyMap[key] || key));
      if (modalKey) {
        this.modalVisible[modalKey] = false;
      }
    }
    submit() {
      console.log('Form value:', this.caseForm.value);
    }
    resetForm() {
      this.caseForm.reset();
    }
    openModalTransfer() {
      this.showModal = true;
    }
    closeModalTransfer() {
      this.showModal = false;
    }
    navigateToTransfer() {
      this.router.navigate(['discussions/add-case/transfer-sessions']);
    }
    onTransferClick() {
      this.openTransfer.emit();
    }
    static ɵfac = function CaseForm_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CaseForm)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_discussions_service__WEBPACK_IMPORTED_MODULE_4__.DiscussionsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CaseForm,
      selectors: [["app-case-form"]],
      outputs: {
        openTransfer: "openTransfer"
      },
      decls: 189,
      vars: 25,
      consts: [[1, "space-y-3"], [1, "text-lg", "font-bold", "text-center", "text-primary", "mb-2"], [1, "space-y-3", 3, "ngSubmit", "formGroup"], [1, "grid", "grid-cols-3", "gap-2"], [1, "form-control"], [1, "label"], [1, "label-text"], ["type", "text", "formControlName", "serial", 1, "input", "input-bordered", "input-sm"], ["type", "number", "formControlName", "floor", 1, "input", "input-bordered", "input-sm"], ["type", "number", "formControlName", "shblona", 1, "input", "input-bordered", "input-sm"], ["type", "number", "formControlName", "hall", 1, "input", "input-bordered", "input-sm"], [1, "flex", "gap-2"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062D\u0643\u0645\u0629", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["type", "button", 1, "btn", "btn-square", "btn-sm", 3, "click"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u062E\u0628\u064A\u0631", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0643\u0644", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0635\u0641\u0629", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["type", "number", "formControlName", "automaticNo", 1, "input", "input-bordered", "input-sm"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062D\u0627\u0645\u064A", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0646\u062F\u0648\u0628", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0623\u0648\u0644 \u062F\u0631\u062C\u0629", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["type", "text", "formControlName", "firstDegreeNumber", 1, "input", "input-bordered", "input-sm"], ["type", "date", "formControlName", "firstDegreeRaised", 1, "input", "input-bordered", "input-sm"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0627\u0633\u062A\u0626\u0646\u0627\u0641", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["type", "text", "formControlName", "appealNumber", 1, "input", "input-bordered", "input-sm"], ["type", "date", "formControlName", "appealRaised", 1, "input", "input-bordered", "input-sm"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u062A\u0645\u064A\u064A\u0632", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["type", "text", "formControlName", "cassationNumber", 1, "input", "input-bordered", "input-sm"], ["type", "date", "formControlName", "cassationRaised", 1, "input", "input-bordered", "input-sm"], ["readonly", "", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u062F\u0627\u0626\u0631\u0629", 1, "input", "input-bordered", "input-sm", "flex-1", 3, "value"], ["type", "text", "formControlName", "topic", 1, "input", "input-bordered", "input-sm"], ["formControlName", "notes", 1, "textarea", "textarea-bordered", "h-20"], [1, "flex", "gap-2", "justify-center", "m-3"], ["type", "button", 1, "btn", "btn-error", 3, "click"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-warning"], ["type", "button", 1, "btn", "btn-ghost"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "modal modal-open", 4, "ngIf"], [1, "modal", "modal-open"], [1, "modal-box", "max-w-md"], [1, "font-bold", "text-lg"], [1, "py-2"], [1, "menu", "w-full"], ["class", "hover:bg-base-200 cursor-pointer p-2 rounded", 3, "click", 4, "ngFor", "ngForOf"], [1, "modal-action"], [1, "btn", 3, "click"], [1, "hover:bg-base-200", "cursor-pointer", "p-2", "rounded", 3, "click"], ["class", "p-2 hover:bg-base-200 cursor-pointer rounded", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-2", "hover:bg-base-200", "cursor-pointer", "rounded", 3, "click"]],
      template: function CaseForm_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0625\u0636\u0627\u0641\u0629 \u0642\u0636\u064A\u0629 \u062C\u062F\u064A\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CaseForm_Template_form_ngSubmit_3_listener() {
            return ctx.submit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "label", 5)(7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0644\u0645\u0633\u0644\u0633\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "label", 5)(12, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0627\u0644\u0637\u0627\u0628\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4)(16, "label", 5)(17, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0644\u0634\u0628\u0644\u0648\u0646\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4)(21, "label", 5)(22, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0627\u0644\u0642\u0627\u0639\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4)(26, "label", 5)(27, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_31_listener() {
            return ctx.openModal("court");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4)(34, "label", 5)(35, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0627\u0644\u062E\u0628\u0631\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_39_listener() {
            return ctx.openModal("expert");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 4)(42, "label", 5)(43, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_47_listener() {
            return ctx.openModal("client");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 4)(50, "label", 5)(51, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u0635\u0641\u0629 \u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_55_listener() {
            return ctx.openModal("role");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 4)(58, "label", 5)(59, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0627\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 4)(63, "label", 5)(64, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_68_listener() {
            return ctx.openModal("fileStatus");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 4)(71, "label", 5)(72, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_76_listener() {
            return ctx.openModal("lawyer");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 4)(79, "label", 5)(80, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_84_listener() {
            return ctx.openModal("consultant");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 4)(87, "label", 5)(88, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\u0627\u0644\u0645\u0646\u062F\u0648\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_92_listener() {
            return ctx.openModal("delegate");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 4)(95, "label", 5)(96, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\u0623\u0648\u0644 \u062F\u0631\u062C\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_100_listener() {
            return ctx.openModal("firstDegree");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 4)(103, "label", 5)(104, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\u0631\u0642\u0645 \u0623\u0648\u0644 \u062F\u0631\u062C\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 4)(108, "label", 5)(109, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\u062A\u0627\u0631\u064A\u062E \u0631\u0641\u0639 \u0623\u0648\u0644 \u062F\u0631\u062C\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 4)(113, "label", 5)(114, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "\u0627\u0644\u0627\u0633\u062A\u0626\u0646\u0627\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_118_listener() {
            return ctx.openModal("appeal");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 4)(121, "label", 5)(122, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "\u0631\u0642\u0645 \u0627\u0644\u0627\u0633\u062A\u0626\u0646\u0627\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 4)(126, "label", 5)(127, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "\u062A\u0627\u0631\u064A\u062E \u0631\u0641\u0639 \u0627\u0644\u0627\u0633\u062A\u0626\u0646\u0627\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 4)(131, "label", 5)(132, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "\u0627\u0644\u062A\u0645\u064A\u064A\u0632");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_136_listener() {
            return ctx.openModal("cassation");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 4)(139, "label", 5)(140, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "\u0631\u0642\u0645 \u0627\u0644\u062A\u0645\u064A\u064A\u0632");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 4)(144, "label", 5)(145, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\u062A\u0627\u0631\u064A\u062E \u0631\u0641\u0639 \u0627\u0644\u062A\u0645\u064A\u064A\u0632");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 4)(149, "label", 5)(150, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "\u0627\u0644\u062F\u0627\u0626\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_154_listener() {
            return ctx.openModal("chamber");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 4)(157, "label", 5)(158, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u0642\u0636\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 4)(162, "label", 5)(163, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u0645\u0644\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "textarea", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 34)(167, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_167_listener() {
            return ctx.resetForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "\u062A\u0631\u0627\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "\u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "button", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "\u062A\u0639\u062F\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "button", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CaseForm_Template_button_click_175_listener() {
            return ctx.navigateToTransfer();
          })("click", function CaseForm_Template_button_click_175_listener() {
            return ctx.onTransferClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "\u062A\u0631\u062D\u064A\u0644 \u0627\u0644\u062C\u0644\u0633\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](177, CaseForm_div_177_Template, 10, 1, "div", 40)(178, CaseForm_div_178_Template, 10, 1, "div", 40)(179, CaseForm_div_179_Template, 10, 1, "div", 40)(180, CaseForm_div_180_Template, 10, 1, "div", 40)(181, CaseForm_div_181_Template, 10, 1, "div", 40)(182, CaseForm_div_182_Template, 10, 1, "div", 40)(183, CaseForm_div_183_Template, 10, 1, "div", 40)(184, CaseForm_div_184_Template, 10, 1, "div", 40)(185, CaseForm_div_185_Template, 10, 1, "div", 40)(186, CaseForm_div_186_Template, 10, 1, "div", 40)(187, CaseForm_div_187_Template, 10, 1, "div", 40)(188, CaseForm_div_188_Template, 10, 1, "div", 40);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.caseForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.court == null ? null : ctx.caseForm.value.court.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.expert == null ? null : ctx.caseForm.value.expert.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.client == null ? null : ctx.caseForm.value.client.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.clientRole == null ? null : ctx.caseForm.value.clientRole.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.fileStatus == null ? null : ctx.caseForm.value.fileStatus.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.lawyer == null ? null : ctx.caseForm.value.lawyer.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.consultant == null ? null : ctx.caseForm.value.consultant.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.delegate == null ? null : ctx.caseForm.value.delegate.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.firstDegree == null ? null : ctx.caseForm.value.firstDegree.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.appeals == null ? null : ctx.caseForm.value.appeals.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.cassation == null ? null : ctx.caseForm.value.cassation.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx.caseForm.value.chamber == null ? null : ctx.caseForm.value.chamber.name) || "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.court);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.expert);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.client);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.role);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.fileStatus);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.lawyer);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.consultant);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.delegate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.firstDegree);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.appeal);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.cassation);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modalVisible.chamber);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return CaseForm;
})();

/***/ }),

/***/ 52311:
/*!**********************************************************************!*\
  !*** ./src/app/features/discussions/services/discussions.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscussionsService: () => (/* binding */ DiscussionsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);


let DiscussionsService = /*#__PURE__*/(() => {
  class DiscussionsService {
    // محاكاة بيانات قاعدة البيانات
    courts = [{
      id: 1,
      name: 'محكمة العاصمة'
    }, {
      id: 2,
      name: 'محكمة الاستئناف'
    }];
    experts = [{
      id: 1,
      name: 'خبير محمود'
    }, {
      id: 2,
      name: 'خبيرة منى'
    }];
    parties = [{
      id: 1,
      name: 'أحمد علي'
    }, {
      id: 2,
      name: 'فهد سعود'
    }];
    roles = [{
      id: 1,
      name: 'مدعي'
    }, {
      id: 2,
      name: 'مدعى عليه'
    }];
    fileStatuses = [{
      id: 1,
      name: 'نشط'
    }, {
      id: 2,
      name: 'مغلق'
    }, {
      id: 3,
      name: 'مؤجل'
    }];
    lawyers = [{
      id: 1,
      name: 'م/ خالد'
    }, {
      id: 2,
      name: 'م/ سارة'
    }];
    consultants = [{
      id: 1,
      name: 'القاضي حسام'
    }];
    delegates = [{
      id: 1,
      name: 'المندوب 1'
    }];
    firstDegrees = [{
      id: 1,
      name: 'أول درجة - مدني'
    }];
    appeals = [{
      id: 1,
      name: 'استئناف - استئناف عام'
    }];
    cassations = [{
      id: 1,
      name: 'تمييز - موضوعي'
    }];
    chambers = [{
      id: 1,
      name: 'الدائرة الجنائية'
    }, {
      id: 2,
      name: 'الدائرة المدنية'
    }];
    getCourts() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.courts);
    }
    getExperts() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.experts);
    }
    getParties() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.parties);
    }
    getRoles() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.roles);
    }
    getFileStatuses() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.fileStatuses);
    }
    getLawyers() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.lawyers);
    }
    getConsultants() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.consultants);
    }
    getDelegates() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.delegates);
    }
    getFirstDegrees() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.firstDegrees);
    }
    getAppeals() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.appeals);
    }
    getCassations() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.cassations);
    }
    getChambers() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.chambers);
    }
    static ɵfac = function DiscussionsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DiscussionsService)();
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DiscussionsService,
      factory: DiscussionsService.ɵfac,
      providedIn: 'root'
    });
  }
  return DiscussionsService;
})();

/***/ }),

/***/ 60046:
/*!******************************************************************************************!*\
  !*** ./src/app/features/discussions/components/case-parties-table/case-parties-table.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CasePartiesTable: () => (/* binding */ CasePartiesTable)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 12481);




function CasePartiesTable_div_6_ng_container_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const party_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](party_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](party_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](party_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](party_r1.status);
  }
}
function CasePartiesTable_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 11)(2, "table", 12)(3, "thead")(4, "tr", 13)(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u0627\u0644\u0635\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CasePartiesTable_div_6_ng_container_1_tr_14_Template, 9, 4, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.parties);
  }
}
function CasePartiesTable_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CasePartiesTable_div_6_ng_container_1_Template, 15, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.selectedTab === "parties");
  }
}
function CasePartiesTable_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div");
  }
}
function CasePartiesTable_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td")(11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u0641\u062A\u062D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const fee_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fee_r3.expense);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fee_r3.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fee_r3.reportNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 4, fee_r3.date, "dd/MM/yyyy"));
  }
}
let CasePartiesTable = /*#__PURE__*/(() => {
  class CasePartiesTable {
    showTransferTabs = false;
    parties = [{
      code: 101,
      name: 'أحمد علي',
      role: 'مدعي',
      status: 'تنفيذ'
    }, {
      code: 102,
      name: 'فهد سعود',
      role: 'مدعى عليه',
      status: 'تنفيذ'
    }];
    selectedTab = 'parties';
    fees = [{
      expense: 'أتعاب محاماة',
      amount: 150,
      reportNumber: '12345',
      date: new Date()
    }, {
      expense: 'رسوم المحكمة',
      amount: 200,
      reportNumber: '67890',
      date: new Date()
    }];
    static ɵfac = function CasePartiesTable_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CasePartiesTable)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: CasePartiesTable,
      selectors: [["app-case-parties-table"]],
      inputs: {
        showTransferTabs: "showTransferTabs"
      },
      decls: 28,
      vars: 3,
      consts: [[1, "case-parties", "w-full"], [1, "text-lg", "font-bold", "text-primary", "text-center", "mb-3"], ["role", "tablist", 1, "tabs", "tabs-bordered"], ["type", "radio", "name", "caseTabs", "role", "tab", "aria-label", "\u0627\u0644\u0623\u0637\u0631\u0627\u0641", "checked", "", 1, "tab"], ["role", "tabpanel", 1, "tab-content", "p-4"], [4, "ngIf"], ["type", "radio", "name", "caseTabs", "role", "tab", "aria-label", "\u0627\u0644\u0631\u0633\u0648\u0645", 1, "tab"], [1, "table", "table-zebra", "w-full", "text-center"], [4, "ngFor", "ngForOf"], ["type", "radio", "name", "caseTabs", "role", "tab", "aria-label", "\u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629", 1, "tab"], [1, "text-gray-500", "text-center"], [1, "overflow-x-auto"], [1, "table", "table-sm", "table-zebra", "w-full", "text-center"], [1, "bg-base-300"], [1, "btn", "btn-outline", "btn-sm"]],
      template: function CasePartiesTable_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u0627\u0644\u0623\u0637\u0631\u0627\u0641 \u0641\u064A \u0627\u0644\u0642\u0636\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CasePartiesTable_div_6_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CasePartiesTable_div_8_Template, 1, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4)(10, "table", 7)(11, "thead")(12, "tr")(13, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u0627\u0644\u0645\u0635\u0631\u0648\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0631\u0642\u0645 \u0627\u0644\u0643\u0634\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CasePartiesTable_tr_23_Template, 13, 7, "tr", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4)(26, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0633\u064A\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u0631\u062A\u0628\u0637\u0629 \u0644\u0627\u062D\u0642\u064B\u0627...");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showTransferTabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showTransferTabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fees);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: [".case-parties[_ngcontent-%COMP%] {\n    direction: rtl !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGlzY3Vzc2lvbnMvY29tcG9uZW50cy9jYXNlLXBhcnRpZXMtdGFibGUvY2FzZS1wYXJ0aWVzLXRhYmxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXNlLXBhcnRpZXMge1xyXG4gICAgZGlyZWN0aW9uOiBydGwgIWltcG9ydGFudDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return CasePartiesTable;
})();

/***/ })

}]);
//# sourceMappingURL=1980.js.map