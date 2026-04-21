"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4566],{

/***/ 24566:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/discussions/pages/not-transferred-cases/not-transferred-cases.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotTransferredCases: () => (/* binding */ NotTransferredCases)
/* harmony export */ });
/* harmony import */ var C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 81890);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 12481);








const _c0 = a0 => ({
  "btn-primary": a0
});
function NotTransferredCases_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function NotTransferredCases_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotTransferredCases_button_8_Template_button_click_0_listener() {
      const t_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.filterSessions(t_r3.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r0.activeTab === t_r3.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", t_r3.label, " ");
  }
}
function NotTransferredCases_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function NotTransferredCases_div_16_th_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0.sortDirection === "asc" ? "\u25B2" : "\u25BC", " ");
  }
}
function NotTransferredCases_div_16_th_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotTransferredCases_div_16_th_4_Template_th_click_0_listener() {
      const header_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.sortBy(header_r5.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, NotTransferredCases_div_16_th_4_span_2_Template, 2, 1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", header_r5.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.sortColumn === header_r5.key);
  }
}
function NotTransferredCases_div_16_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 26)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.court);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.sessionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.session);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.decision);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.fileStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.autoNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.decisionNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.legalPlaintiff);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.opponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.attendance);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.expert);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r6.department);
  }
}
function NotTransferredCases_div_16_tr_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0644\u0639\u0631\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function NotTransferredCases_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19)(1, "table", 20)(2, "thead", 21)(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, NotTransferredCases_div_16_th_4_Template, 3, 2, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, NotTransferredCases_div_16_tr_6_Template, 35, 17, "tr", 23)(7, NotTransferredCases_div_16_tr_7_Template, 3, 0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.tableHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.paginatedRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.paginatedRecords.length === 0);
  }
}
function NotTransferredCases_div_17_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotTransferredCases_div_17_button_3_Template_button_click_0_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.changePage(p_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, ctx_r0.currentPage === p_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", p_r9, " ");
  }
}
function NotTransferredCases_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotTransferredCases_div_17_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.changePage(ctx_r0.currentPage - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " \u00AB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, NotTransferredCases_div_17_button_3_Template, 2, 4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotTransferredCases_div_17_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.changePage(ctx_r0.currentPage + 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " \u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.currentPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.totalPagesArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.currentPage === ctx_r0.totalPages);
  }
}
let NotTransferredCases = /*#__PURE__*/(() => {
  class NotTransferredCases {
    lookupModal;
    selectedCourt = '';
    activeTab = 'all';
    errorMessage = '';
    isLoading = false;
    allRecords = [];
    displayedRecords = [];
    paginatedRecords = [];
    pageSize = 10;
    currentPage = 1;
    totalPages = 1;
    sortColumn = '';
    sortDirection = 'asc';
    courts = [{
      name: 'محكمة العاصمة'
    }, {
      name: 'محكمة الجهراء'
    }, {
      name: 'محكمة الأحمدي'
    }, {
      name: 'محكمة حولي'
    }, {
      name: 'محكمة الفروانية'
    }];
    tabs = [{
      key: 'pending',
      label: 'الجلسات المعلقة'
    }, {
      key: 'all',
      label: 'بحث عن الكل'
    }, {
      key: 'court',
      label: 'جلسات المحكمة'
    }, {
      key: 'court-save',
      label: 'مطلوب الحفظ - جلسات المحكمة'
    }, {
      key: 'experts',
      label: 'جلسات الخبراء'
    }, {
      key: 'experts-save',
      label: 'مطلوب الحفظ - جلسات الخبراء'
    }];
    tableHeaders = [{
      key: 'id',
      label: 'المسلسل'
    }, {
      key: 'template',
      label: 'الشبلونة'
    }, {
      key: 'court',
      label: 'المحكمة'
    }, {
      key: 'sessionDate',
      label: 'تاريخ الجلسة'
    }, {
      key: 'client',
      label: 'الموكل'
    }, {
      key: 'session',
      label: 'الجلسة'
    }, {
      key: 'decision',
      label: 'القرار'
    }, {
      key: 'fileStatus',
      label: 'حالة الملف'
    }, {
      key: 'autoNum',
      label: 'الرقم الآلي'
    }, {
      key: 'subject',
      label: 'الموضوع'
    }, {
      key: 'decisionNotes',
      label: 'ملاحظات القرار'
    }, {
      key: 'level',
      label: 'الدرجة'
    }, {
      key: 'legalPlaintiff',
      label: 'المدعي القانوني'
    }, {
      key: 'opponent',
      label: 'الخصم'
    }, {
      key: 'attendance',
      label: 'الظهور'
    }, {
      key: 'expert',
      label: 'الخبراء'
    }, {
      key: 'department',
      label: 'الدائرة'
    }];
    constructor() {
      // Dummy data
      this.allRecords = [{
        id: 1,
        template: '29',
        court: 'محكمة العاصمة',
        sessionDate: '2025-11-06',
        client: 'بيت التمويل الكويتي',
        session: 'جلسة أولى',
        decision: 'تأجيل',
        fileStatus: 'مدخول',
        autoNum: '124567890',
        subject: 'قرض متعثر',
        decisionNotes: 'متابعة لاحقة',
        level: 'استئناف',
        legalPlaintiff: 'محمد فؤاد',
        opponent: 'سارة ناصر',
        attendance: 'حاضر',
        expert: 'خالد محمود',
        department: 'الدائرة 3'
      }, {
        id: 2,
        template: '29',
        court: 'محكمة الجهراء',
        sessionDate: '2025-10-25',
        client: 'شركة الخليج',
        session: 'جلسة استئناف',
        decision: 'حكم',
        fileStatus: 'منتهي',
        autoNum: '223344556',
        subject: 'مطالبة مالية',
        decisionNotes: 'حكم نهائي',
        level: 'نهائي',
        legalPlaintiff: 'عبد الله صالح',
        opponent: 'مؤسسة الشروق',
        attendance: 'غياب',
        expert: 'لا يوجد',
        department: 'الدائرة 1'
      }];
    }
    openCourtsModal() {
      this.errorMessage = '';
      this.lookupModal.title = 'اختيار المحكمة';
      this.lookupModal.columns = ['name'];
      this.lookupModal.data = this.courts;
      this.lookupModal.open();
    }
    onCourtSelected(item) {
      this.selectedCourt = item?.name || '';
      this.filterSessions(this.activeTab);
    }
    filterSessions(type) {
      var _this = this;
      return (0,C_CRM_V2_HOL_Frontend_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        _this.errorMessage = '';
        if (!_this.selectedCourt) {
          _this.errorMessage = 'اختر المحكمة أولاً من الزر (...) ثم حاول مجدداً.';
          _this.openCourtsModal();
          return;
        }
        _this.activeTab = type;
        _this.isLoading = true;
        // Simulate API delay
        yield new Promise(res => setTimeout(res, 700));
        const byCourt = _this.allRecords.filter(r => r.court === _this.selectedCourt);
        switch (type) {
          case 'pending':
            _this.displayedRecords = byCourt.filter(r => r.fileStatus === 'مدخول');
            break;
          case 'court-save':
            _this.displayedRecords = byCourt.filter(r => r.level === 'نهائي');
            break;
          case 'experts':
            _this.displayedRecords = byCourt.filter(r => r.expert && r.expert !== 'لا يوجد');
            break;
          case 'experts-save':
            _this.displayedRecords = byCourt.filter(r => r.expert && r.fileStatus === 'منتهي');
            break;
          default:
            _this.displayedRecords = byCourt;
        }
        _this.currentPage = 1;
        _this.updatePagination();
        _this.isLoading = false;
      })();
    }
    updatePagination() {
      this.totalPages = Math.ceil(this.displayedRecords.length / this.pageSize);
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.paginatedRecords = this.displayedRecords.slice(start, end);
    }
    get totalPagesArray() {
      return Array.from({
        length: this.totalPages
      }, (_, i) => i + 1);
    }
    changePage(page) {
      this.currentPage = page;
      this.updatePagination();
    }
    sortBy(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
      this.displayedRecords.sort((a, b) => {
        if (a[column] < b[column]) return this.sortDirection === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return this.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      this.updatePagination();
    }
    printTable() {
      if (!this.selectedCourt) {
        this.errorMessage = 'اختر المحكمة أولاً ثم اطبع.';
        return;
      }
      const tableHtml = document.querySelector('table')?.outerHTML;
      if (!tableHtml) return;
      const w = window.open('', '', 'width=1000,height=700');
      if (!w) return;
      w.document.write(`
      <html><head><title>طباعة الجلسات - ${this.selectedCourt}</title>
      <style>
        table{width:100%;border-collapse:collapse}
        th,td{border:1px solid #ccc;padding:6px;text-align:center}
        th{background:#eee}
      </style>
      </head><body dir="rtl">${tableHtml}</body></html>
    `);
      w.document.close();
      w.print();
    }
    onFileSelected(event) {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        const data = new Uint8Array(e.target.result);
        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_3__.read(data, {
          type: 'array'
        });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx__WEBPACK_IMPORTED_MODULE_3__.utils.sheet_to_json(worksheet);
        this.displayedRecords = json;
        this.updatePagination();
      };
      reader.readAsArrayBuffer(file);
    }
    static ɵfac = function NotTransferredCases_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NotTransferredCases)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: NotTransferredCases,
      selectors: [["app-not-transferred-cases"]],
      viewQuery: function NotTransferredCases_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_2__.LookupModal, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.lookupModal = _t.first);
        }
      },
      decls: 19,
      vars: 6,
      consts: [[1, "not-transferred", "p-6", "bg-base-200", "min-h-screen"], ["class", "mb-3 text-sm text-red-600", 4, "ngIf"], [1, "flex", "flex-wrap", "gap-2", "items-center", "mb-4", "justify-center"], [1, "flex", "items-center", "gap-2"], ["type", "text", "placeholder", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u062D\u0643\u0645\u0629", "readonly", "", 1, "input", "input-bordered", "input-sm", "w-48", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-sm", 3, "click"], [1, "flex", "flex-wrap", "gap-2"], ["class", "btn btn-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline", 3, "click"], [1, "btn", "btn-sm", "btn-success", "cursor-pointer"], ["type", "file", "accept", ".xlsx, .xls", "hidden", "", 3, "change"], ["class", "flex justify-center my-8", 4, "ngIf"], ["class", "overflow-x-auto bg-base-100 rounded-xl shadow", 4, "ngIf"], ["class", "join flex justify-center mt-6", 4, "ngIf"], [3, "itemSelected"], [1, "mb-3", "text-sm", "text-red-600"], [1, "btn", "btn-sm", 3, "click", "ngClass"], [1, "flex", "justify-center", "my-8"], [1, "loading", "loading-spinner", "loading-lg", "text-primary"], [1, "overflow-x-auto", "bg-base-100", "rounded-xl", "shadow"], [1, "table", "table-sm", "w-full", "text-sm"], [1, "bg-base-300", "text-base", "font-semibold"], ["class", "cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["class", "hover:bg-base-200", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "cursor-pointer", 3, "click"], [1, "hover:bg-base-200"], ["colspan", "17", 1, "text-center", "p-4"], [1, "join", "flex", "justify-center", "mt-6"], [1, "join-item", "btn", "btn-sm", 3, "click", "disabled"], ["class", "join-item btn btn-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "join-item", "btn", "btn-sm", 3, "click", "ngClass"]],
      template: function NotTransferredCases_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, NotTransferredCases_div_1_Template, 2, 1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayListener"]("ngModelChange", function NotTransferredCases_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayBindingSet"](ctx.selectedCourt, $event) || (ctx.selectedCourt = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotTransferredCases_Template_button_click_5_listener() {
            return ctx.openCourtsModal();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, NotTransferredCases_button_8_Template, 2, 4, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 3)(10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function NotTransferredCases_Template_button_click_10_listener() {
            return ctx.printTable();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\uD83D\uDDA8\uFE0F \u0637\u0628\u0627\u0639\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " \uD83D\uDCC2 Excel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function NotTransferredCases_Template_input_change_14_listener($event) {
            return ctx.onFileSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, NotTransferredCases_div_15_Template, 2, 0, "div", 11)(16, NotTransferredCases_div_16_Template, 8, 3, "div", 12)(17, NotTransferredCases_div_17_Template, 6, 3, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "app-lookup-modal", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("itemSelected", function NotTransferredCases_Template_app_lookup_modal_itemSelected_18_listener($event) {
            return ctx.onCourtSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCourt);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.tabs);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.displayedRecords.length > ctx.pageSize);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_2__.LookupModal, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: ["table[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.not-transferred[_ngcontent-%COMP%] {\n    direction: rtl !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGlzY3Vzc2lvbnMvcGFnZXMvbm90LXRyYW5zZmVycmVkLWNhc2VzL25vdC10cmFuc2ZlcnJlZC1jYXNlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxudGgsIHRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5vdC10cmFuc2ZlcnJlZCB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bCAhaW1wb3J0YW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return NotTransferredCases;
})();

/***/ })

}]);
//# sourceMappingURL=4566.js.map