"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4168],{

/***/ 84168:
/*!***********************************************************************************!*\
  !*** ./src/app/features/secretariat/pages/files-fifa-export/files-fifa-export.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesFifaExport: () => (/* binding */ FilesFifaExport)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 85422);






function FilesFifaExport_div_9_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesFifaExport_div_9_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.mainSearchText = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \u2715 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function FilesFifaExport_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesFifaExport_div_9_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.searchMain());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Find ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 13)(5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FilesFifaExport_div_9_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.mainSearchText, $event) || (ctx_r1.mainSearchText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FilesFifaExport_div_9_button_6_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 16)(8, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function FilesFifaExport_div_9_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.selectedDate, $event) || (ctx_r1.selectedDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.mainSearchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.mainSearchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.selectedDate);
  }
}
function FilesFifaExport_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesFifaExport_div_10_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.exportExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " \u062A\u0635\u062F\u064A\u0631 \u0627\u0643\u0633\u064A\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesFifaExport_div_10_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.deleteErrors());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " \u062D\u0630\u0641 \u0627\u0644\u0627\u062E\u0637\u0627\u0621 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesFifaExport_div_10_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.showErrors());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " \u0627\u0644\u0627\u062E\u0637\u0627\u0621 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
let FilesFifaExport = /*#__PURE__*/(() => {
  class FilesFifaExport {
    route;
    // ==========================================
    // متغير العنوان: الآن يستقبل قيمة افتراضية ويمكن تغييره ديناميكياً
    // ==========================================
    title = 'تصدير ملفات فيفا';
    // التبويب النشط (1: الرئيسية، 2: الأخطاء)
    activeTab = 1;
    // متغيرات تبويب "الرئيسية"
    mainSearchText = '';
    selectedDate = '2025-11-15';
    // حقن ActivatedRoute للوصول لبيانات الراوتر
    constructor(route) {
      this.route = route;
    }
    ngOnInit() {
      // 1. فحص الـ State (للحالات التي يتم فيها النقل بالكود مع تمرير بيانات)
      // مثال: router.navigate(['...'], { state: { title: 'طباعة ملفات فيفا' } })
      if (history.state && history.state.title) {
        this.title = history.state.title;
      }
      // 2. فحص الـ Route Data (إذا كان العنوان معرفاً في ملف التوجيه app.routes.ts)
      // مثال: { path: '...', component: ..., data: { title: '...' } }
      this.route.data.subscribe(data => {
        if (data['title']) {
          this.title = data['title'];
        }
      });
      // 3. فحص الـ Query Params (اختياري، لو الرابط فيه ?title=...)
      this.route.queryParams.subscribe(params => {
        if (params['title']) {
          this.title = params['title'];
        }
      });
    }
    // دالة تغيير التبويب
    setActiveTab(tabId) {
      this.activeTab = tabId;
    }
    // دوال الأزرار
    exportExcel() {
      console.log('Exporting Excel...');
    }
    deleteErrors() {
      console.log('Deleting Errors...');
    }
    showErrors() {
      console.log('Showing Errors...');
    }
    searchMain() {
      console.log('Searching for:', this.mainSearchText);
    }
    static ɵfac = function FilesFifaExport_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FilesFifaExport)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FilesFifaExport,
      selectors: [["app-files-fifa-export"]],
      inputs: {
        title: "title"
      },
      decls: 16,
      vars: 15,
      consts: [[1, "flex", "flex-col", "h-screen", "font-sans", "text-sm", 2, "background-color", "var(--surface-ground)"], [1, "border-b", "flex", "justify-between", "items-end", "px-2", "pt-2", "shadow-sm", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "font-bold", "pb-2", "px-2", 2, "color", "var(--text-color)"], [1, "tabs", "tabs-lifted", "tabs-sm", "-mb-px", 2, "direction", "rtl"], [1, "tab", "tab-bordered", 3, "click"], ["class", "border-b p-2 flex justify-between items-center", "style", "background-color: var(--surface-section); border-color: var(--surface-border);", 4, "ngIf"], ["class", "border-b p-2 flex items-center gap-2", "style", "background-color: var(--surface-section); border-color: var(--surface-border);", 4, "ngIf"], [1, "border-b", "p-1", "px-2", "text-xs", "flex", "items-center", "gap-2", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)", "color", "var(--text-color-secondary)"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-4", "w-4", 2, "color", "var(--text-color-secondary)"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "border-b", "p-2", "flex", "justify-between", "items-center", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], ["dir", "ltr", 1, "flex", "items-center", "gap-1"], [1, "btn", "btn-xs", "btn-outline", "px-4", "rounded-none", "font-normal", 2, "background-color", "var(--surface-card)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], [1, "relative", "w-64"], ["type", "text", "placeholder", "...Enter text to search", 1, "input", "input-xs", "input-bordered", "w-full", "rounded-none", "focus:outline-none", "pr-6", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["class", "absolute right-1 top-1/2 -translate-y-1/2", "style", "color: var(--text-color-secondary);", 3, "click", 4, "ngIf"], [1, "flex", "items-center", "gap-2"], ["type", "date", 1, "input", "input-xs", "input-bordered", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "absolute", "right-1", "top-1/2", "-translate-y-1/2", 2, "color", "var(--text-color-secondary)", 3, "click"], [1, "border-b", "p-2", "flex", "items-center", "gap-2", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], ["dir", "ltr", 1, "flex", "items-center", "gap-2", "w-full"], [1, "btn", "btn-xs", "btn-outline", "px-4", "rounded-none", "font-normal", 2, "background-color", "var(--surface-hover)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"]],
      template: function FilesFifaExport_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesFifaExport_Template_a_click_5_listener() {
            return ctx.setActiveTab(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilesFifaExport_Template_a_click_7_listener() {
            return ctx.setActiveTab(2);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " \u0627\u0644\u0627\u062E\u0637\u0627\u0621 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FilesFifaExport_div_9_Template, 9, 3, "div", 5)(10, FilesFifaExport_div_10_Template, 8, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "svg", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "path", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Drag a column header here to group by that column");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("tab-active", ctx.activeTab === 1)("font-bold", ctx.activeTab === 1)("bg-white", ctx.activeTab === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("tab-active", ctx.activeTab === 2)("font-bold", ctx.activeTab === 2)("bg-white", ctx.activeTab === 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.activeTab === 2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return FilesFifaExport;
})();

/***/ })

}]);
//# sourceMappingURL=4168.js.map