"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[3289],{

/***/ 53289:
/*!***************************************************************************!*\
  !*** ./src/app/features/finance/pages/transfer-search/transfer-search.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransferSearch: () => (/* binding */ TransferSearch)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);






const _c0 = ["clientLookup"];
function TransferSearch_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6)(2, "label", 22)(3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TransferSearch_ng_container_8_Template_input_change_3_listener() {
      const filter_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.toggleFilter(filter_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", filter_r2.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](filter_r2.label);
  }
}
function TransferSearch_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.user);
  }
}
function TransferSearch_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0641\u0644\u062A\u0631 \u0627\u0644\u0628\u062D\u062B. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
let TransferSearch = /*#__PURE__*/(() => {
  class TransferSearch {
    // الوصول إلى المودال Lookup (للمحاكاة)
    // يجب أن يكون هذا مرجعاً لمكون LookupModalComponent الحقيقي
    lookupModal; // نستخدم any هنا للتوافق في بيئة الكانفاس
    // حالة التبويبات العلوية (لم يحول / تم التحويل)
    activeStatusTab = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)('pending', ...(ngDevMode ? [{
      debugName: "activeStatusTab"
    }] : []));
    // نموذج البحث
    searchForm = {
      amountFilter: 'none',
      // 'none', 'less_than_50', 'less_than_100'
      dateFilter: 'none',
      // 'none', 'all_time', 'specific'
      specificDate: '2025-12-15',
      targetAmount: 0,
      searchQuery: '',
      selectedClient: '' // لتخزين اسم الموكل المختار
    };
    // بيانات الفلاتر المعقدة (المربعات المحددة)
    complexFilters = [{
      label: 'أقل من 100 وأكثر من 50',
      active: false,
      filterKey: 'range1'
    }, {
      label: 'أقل من 50',
      active: false,
      filterKey: 'less_50'
    }, {
      label: 'الإجمالي بالكامل',
      active: false,
      filterKey: 'total'
    }, {
      label: 'أقل من 100',
      active: false,
      filterKey: 'less_100'
    }];
    // نتائج الجدول
    transferRows = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([], ...(ngDevMode ? [{
      debugName: "transferRows"
    }] : []));
    // بيانات وهمية للموكلين للـ Lookup
    clientsData = [{
      code: 'C101',
      name: 'الشركة الوطنية',
      type: 'مؤسسة'
    }, {
      code: 'C102',
      name: 'بنك الخليج',
      type: 'بنك'
    }, {
      code: 'C103',
      name: 'مؤسسة الأمان',
      type: 'مؤسسة'
    }];
    ngOnInit() {
      this.generateMockData();
    }
    generateMockData() {
      this.transferRows.set([{
        id: 1,
        name: 'تحويل نقدي',
        amount: 65,
        date: '2025-12-01',
        user: 'Admin'
      }, {
        id: 2,
        name: 'رسوم خدمة',
        amount: 40,
        date: '2025-12-05',
        user: 'Admin'
      }, {
        id: 3,
        name: 'مصاريف إدارية',
        amount: 120,
        date: '2025-12-10',
        user: 'Admin'
      }]);
    }
    toggleFilter(filter) {
      filter.active = !filter.active;
      this.runQuery();
    }
    // ===========================================
    // وظائف الـ Lookup
    // ===========================================
    openClientLookup() {
      if (this.lookupModal) {
        // إعداد بيانات المودال وفتحه
        this.lookupModal.title = 'بحث عن الموكل';
        this.lookupModal.columns = ['code', 'name', 'type'];
        this.lookupModal.data = this.clientsData;
        this.lookupModal.open();
      } else {
        console.warn("Lookup Modal is not accessible (Missing ViewChild or component).");
      }
    }
    onClientSelected(client) {
      // تحديث حقل البحث باسم الموكل المختار
      this.searchForm.selectedClient = client.name;
      this.runQuery();
    }
    // ===========================================
    // وظيفة رفع الإكسل
    // ===========================================
    uploadExcel(event) {
      const input = event.target;
      if (input.files && input.files.length > 0) {
        const file = input.files[0];
        console.log('File selected for upload:', file.name);
        // *منطق قراءة ومعالجة ملف Excel هنا*
        // يمكن تصفير قيمة الـ input لتمكين اختيار نفس الملف مرة أخرى
        input.value = '';
      }
    }
    // ===========================================
    // وظيفة البحث الرئيسية (الاستعلام)
    // ===========================================
    runQuery() {
      console.log('Running query with status:', this.activeStatusTab());
      console.log('Filters:', this.complexFilters.filter(f => f.active));
      console.log('Search Text:', this.searchForm.searchQuery);
      console.log('Selected Client:', this.searchForm.selectedClient);
      // *منطق البحث الفعلي هنا*
      let results = this.transferRows();
      if (this.activeStatusTab() === 'pending') {
        results = results.filter(row => row.amount < 1000);
      } else {
        results = results.filter(row => row.amount > 0);
      }
      this.transferRows.set(results);
    }
    exportExcel() {
      console.log('Exporting current table results to Excel...');
      // منطق تصدير Excel هنا
    }
    static ɵfac = function TransferSearch_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TransferSearch)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TransferSearch,
      selectors: [["app-transfer-search"]],
      viewQuery: function TransferSearch_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.lookupModal = _t.first);
        }
      },
      decls: 50,
      vars: 10,
      consts: [[1, "page-container"], [1, "tabs", "tabs-boxed"], [1, "tab", 3, "click"], [1, "search-section"], [1, "search-filters"], [4, "ngFor", "ngForOf"], [1, "form-field"], [1, "form-label"], ["type", "date", "name", "specificDate", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "searchQuery", "placeholder", "\u0628\u062D\u062B \u0639\u0627\u0645 \u0623\u0648 \u0627\u0633\u0645 \u0645\u0648\u0643\u0644...", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["type", "text", "name", "selectedClient", "placeholder", "\u0627\u0644\u0645\u0648\u0643\u0644", "readonly", "", 1, "form-input", 2, "flex", "1", 3, "ngModelChange", "ngModel"], [1, "form-button", "form-button-outline", 3, "click"], [1, "search-actions"], [1, "form-button", "form-button-secondary", 2, "cursor", "pointer"], ["type", "file", "hidden", "", 3, "change"], [1, "form-button", "form-button-success", 3, "click"], [1, "form-button", "form-button-primary", 3, "click"], [1, "page-content"], [1, "table-container"], [1, "table"], [4, "ngIf"], [1, "checkbox-group"], ["type", "checkbox", 1, "checkbox", 3, "change", "checked"], [2, "font-family", "monospace"], ["colspan", "5", 1, "text-center", 2, "color", "var(--text-color-secondary)", "padding", "2rem"]],
      template: function TransferSearch_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransferSearch_Template_a_click_2_listener() {
            ctx.activeStatusTab.set("pending");
            return ctx.runQuery();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u0644\u0645 \u064A\u062D\u0648\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransferSearch_Template_a_click_4_listener() {
            ctx.activeStatusTab.set("transferred");
            return ctx.runQuery();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u062A\u0645 \u0627\u0644\u062A\u062D\u0648\u064A\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TransferSearch_ng_container_8_Template, 6, 2, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\u062A\u0627\u0631\u064A\u062E \u0645\u062D\u062F\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function TransferSearch_Template_input_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchForm.specificDate, $event) || (ctx.searchForm.specificDate = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0628\u062D\u062B \u0639\u0627\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function TransferSearch_Template_input_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchForm.searchQuery, $event) || (ctx.searchForm.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 6)(18, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 10)(21, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function TransferSearch_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchForm.selectedClient, $event) || (ctx.searchForm.selectedClient = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransferSearch_Template_button_click_22_listener() {
            return ctx.openClientLookup();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "...");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13)(25, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " \u0631\u0641\u0639 \u0645\u0646 \u0625\u0643\u0633\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function TransferSearch_Template_input_change_27_listener($event) {
            return ctx.uploadExcel($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransferSearch_Template_button_click_28_listener() {
            return ctx.exportExcel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\u0625\u0643\u0633\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TransferSearch_Template_button_click_30_listener() {
            return ctx.runQuery();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\u0627\u0633\u062A\u0639\u0644\u0627\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 18)(33, "div", 19)(34, "table", 20)(35, "thead")(36, "tr")(37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "#");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\u0627\u0644\u0627\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, TransferSearch_tr_48_Template, 11, 5, "tr", 5)(49, TransferSearch_tr_49_Template, 3, 0, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("tab-active", ctx.activeStatusTab() === "pending");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("tab-active", ctx.activeStatusTab() === "transferred");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.complexFilters);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchForm.specificDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchForm.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchForm.selectedClient);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.transferRows());
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.transferRows().length === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return TransferSearch;
})();

/***/ })

}]);
//# sourceMappingURL=3289.js.map