"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[2704],{

/***/ 72704:
/*!***********************************************************************!*\
  !*** ./src/app/features/secretariat/pages/upload-page/upload-page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UploadPage: () => (/* binding */ UploadPage)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);

 // استدعاء المكتبة


const _c0 = ["fileInput"];
function UploadPage_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0627\u0644\u0631\u062C\u0627\u0621 \u0631\u0641\u0639 \u0645\u0644\u0641 Excel \u0644\u0639\u0631\u0636 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function UploadPage_table_18_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](header_r2);
  }
}
function UploadPage_table_18_tr_5_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r3 = ctx.$implicit;
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r4[header_r3], " ");
  }
}
function UploadPage_table_18_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, UploadPage_table_18_tr_5_td_1_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r5 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.tableHeaders);
  }
}
function UploadPage_table_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 18)(1, "thead")(2, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UploadPage_table_18_th_3_Template, 2, 1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, UploadPage_table_18_tr_5_Template, 2, 3, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.tableHeaders);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.excelData);
  }
}
let UploadPage = /*#__PURE__*/(() => {
  class UploadPage {
    // للوصول إلى عنصر الـ input المخفي
    fileInput;
    // لتخزين البيانات القادمة من الإكسل
    excelData = [];
    // أسماء الأعمدة (سيتم استخراجها تلقائياً من أول صف في الإكسل)
    tableHeaders = [];
    // دالة النقر على زر Upload
    triggerFileUpload() {
      this.fileInput.nativeElement.click();
    }
    // دالة معالجة الملف عند اختياره
    onFileChange(evt) {
      const target = evt.target;
      // التأكد من اختيار ملف واحد فقط
      if (target.files.length !== 1) throw new Error('Cannot use multiple files');
      const reader = new FileReader();
      reader.onload = e => {
        // 1. قراءة البيانات كـ Binary String
        const bstr = e.target.result;
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__.read(bstr, {
          type: 'binary'
        });
        // 2. الحصول على اسم أول ورقة (Sheet)
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        // 3. تحويل البيانات إلى JSON
        this.excelData = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.sheet_to_json(ws);
        // 4. استخراج العناوين ديناميكياً (اختياري)
        if (this.excelData.length > 0) {
          this.tableHeaders = Object.keys(this.excelData[0]);
        }
        console.log(this.excelData); // للتأكد في الكونسول
      };
      reader.readAsBinaryString(target.files[0]);
    }
    // دالة زر Excel (تحميل نموذج فارغ مثلاً)
    downloadTemplate() {
      // بيانات وهمية كعنوان للأعمدة
      const template = [{
        'الكود': '',
        'الاسم': '',
        'الرقم المدني': '',
        'المبلغ': ''
      }];
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(template);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.book_append_sheet(wb, ws, 'Template');
      // حفظ الملف
      xlsx__WEBPACK_IMPORTED_MODULE_1__.writeFile(wb, 'Upload_Template.xlsx');
    }
    static ɵfac = function UploadPage_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UploadPage)();
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: UploadPage,
      selectors: [["app-upload-page"]],
      viewQuery: function UploadPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 19,
      vars: 2,
      consts: [["fileInput", ""], ["dir", "rtl", 1, "flex", "flex-col", "h-screen", "font-sans", "text-sm", 2, "background-color", "var(--surface-ground)"], [1, "border-b", "p-2", "flex", "justify-between", "items-center", "shadow-sm", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "flex", "items-center", "gap-3"], [1, "text-lg", "font-bold", "px-2", "border-l", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "cursor-pointer", 2, "color", "var(--text-color-secondary)"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"], [1, "flex", "gap-2"], ["type", "file", "hidden", "", "accept", ".xlsx, .xls", 3, "change"], [1, "btn", "btn-sm", "btn-outline", "btn-info", "px-6", "rounded-none", 2, "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], [1, "btn", "btn-sm", "px-6", "rounded-none", 2, "background-color", "var(--surface-hover)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], [1, "border-b", "p-1", "text-xs", "text-left", "px-4", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)", "color", "var(--text-color-secondary)"], [1, "flex-grow", "overflow-auto", "p-4", 2, "background-color", "var(--surface-card)"], ["class", "h-full flex flex-col items-center justify-center", "style", "color: var(--text-color-secondary);", 4, "ngIf"], ["class", "table table-xs table-pin-rows table-zebra w-full border", "style", "border-color: var(--surface-border);", 4, "ngIf"], [1, "h-full", "flex", "flex-col", "items-center", "justify-center", 2, "color", "var(--text-color-secondary)"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-24", "w-24", "mb-4", "opacity-20"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "table", "table-xs", "table-pin-rows", "table-zebra", "w-full", "border", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], ["style", "color: var(--text-color);", 4, "ngFor", "ngForOf"], ["style", "color: var(--text-color);", 3, "background-color", 4, "ngFor", "ngForOf"], [2, "color", "var(--text-color)"], [4, "ngFor", "ngForOf"]],
      template: function UploadPage_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u0631\u0641\u0639 \u0627\u0641\u0627\u062F\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7)(8, "input", 8, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UploadPage_Template_input_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onFileChange($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadPage_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.downloadTemplate());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " EXCEL ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UploadPage_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.triggerFileUpload());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " UPLOAD ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Drag a column header here to group by that column ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, UploadPage_div_17_Template, 5, 0, "div", 13)(18, UploadPage_table_18_Template, 6, 2, "table", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.excelData.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.excelData.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return UploadPage;
})();

/***/ })

}]);
//# sourceMappingURL=2704.js.map