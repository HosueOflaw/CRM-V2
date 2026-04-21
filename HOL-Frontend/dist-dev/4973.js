"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[4973],{

/***/ 4973:
/*!***************************************************************************!*\
  !*** ./src/app/features/finance/pages/daily-clearance/daily-clearance.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DailyClearance: () => (/* binding */ DailyClearance)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 85422);






const _c0 = ["printModal"];
function DailyClearance_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 14)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r3 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.sheetNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.companyPay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.officePay);
  }
}
function DailyClearance_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 14)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", i_r5 % 2 === 0 ? "var(--surface-card)" : "var(--surface-ground)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.sheetNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.companyPay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.officePay);
  }
}
let DailyClearance = /*#__PURE__*/(() => {
  class DailyClearance {
    router;
    printModal;
    constructor(router) {
      this.router = router;
    }
    // مجموعات
    receiveDate = '';
    netReceived = 0;
    totalExpenses = 0;
    dueAmount = 0;
    custodyNumber = '';
    tableSearch = '';
    rows = [];
    filteredRows = [];
    openPrintDialog() {
      this.printModal.nativeElement.showModal();
    }
    closePrintDialog() {
      this.printModal.nativeElement.close();
    }
    selectedEmployee = {
      name: 'أحمد'
    };
    printModalContent() {
      const logoUrl = '/Logo.png';
      const tableRows = this.filteredRows.map((row, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${row.company}</td>
      <td>${row.sheetNumber}</td>
      <td>${row.date}</td>
      <td>${row.amount}</td>
      <td>${row.companyPay}</td>
      <td>${row.officePay}</td>
    </tr>
  `).join('');
      const printHTML = `
  <html>
  <head>
    <title>كشف تصفية عهدة</title>
    <style>
      body {
        direction: rtl;
        font-family: Arial, sans-serif;
        padding: 40px;
        font-size: 16px;
      }

      .logo {
        display: block;
        margin: 0 auto 20px;
        width: 600px;
        height: auto;
      }

      h1 {
        text-align: center;
        margin-bottom: 25px;
        font-size: 30px;
      }

      .info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        font-size: 18px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
      }

      th, td {
        border: 1px solid #000;
        padding: 8px;
        text-align: center;
      }

      th {
        background: #f2f2f2;
      }

      .totals-table td {
        font-size: 18px;
        padding: 10px;
      }

      .footer {
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        font-size: 18px;
      }

      .footer div {
        font-weight: bold;
      }

      .line {
        margin-top: 10px;
        font-weight: normal;
      }
    </style>
  </head>

  <body>

    <img src="${logoUrl}" class="logo" />

    <h1>كشف تصفية عهدة</h1>

    <div class="info">
      <div>الاسم: <strong>${this.selectedEmployee.name}</strong></div>
      <div>قيد رقم: <strong>${this.custodyNumber}</strong></div>
      <div>التاريخ: <strong>${this.receiveDate}</strong></div>
    </div>

    <table>
      <thead>
        <tr>
          <th>م</th>
          <th>اسم الشركة</th>
          <th>رقم الكشف</th>
          <th>التاريخ</th>
          <th>المبلغ</th>
          <th>تتحملها الشركة</th>
          <th>يتحملها المكتب</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>

    <br><br>

    <table class="totals-table">
      <tbody>
        <tr>
          <td><strong>اجمالي المصروفات</strong></td>
          <td>${this.totalExpenses}</td>
        </tr>
        <tr>
          <td><strong>صافى العهدة المستلمة</strong></td>
          <td>${this.netReceived}</td>
        </tr>
        <tr>
          <td><strong>المستحق</strong></td>
          <td>${this.dueAmount}</td>
        </tr>
      </tbody>
    </table>

    <div class="footer">
      <div>
        الادارة
        <div class="line">.........................</div>
      </div>
      <div>
        روجع
        <div class="line">.........................</div>
      </div>
      <div>
        الموظف
        <div class="line">.........................</div>
      </div>
    </div>

  </body>
  </html>
  `;
      const printWindow = window.open('', '_blank', 'width=1200,height=900');
      printWindow.document.open();
      printWindow.document.write(printHTML);
      printWindow.document.close();
      setTimeout(() => {
        printWindow.print();
      }, 400);
    }
    goBack() {
      this.router.navigate(['/finance']);
    }
    search() {
      // TODO: Replace with API
      this.rows = [{
        company: "شركة A",
        sheetNumber: "123",
        date: "10-11-2025",
        amount: 500,
        companyPay: 200,
        officePay: 300
      }];
      this.filteredRows = this.rows;
      // حساب المجاميع
      this.totalExpenses = this.rows.reduce((acc, x) => acc + x.amount, 0);
      this.netReceived = 1500;
      this.dueAmount = this.netReceived - this.totalExpenses;
      this.receiveDate = "15-11-2025";
    }
    // فلترة داخل الجدول
    ngOnChanges() {
      this.filteredRows = this.rows.filter(r => Object.values(r).some(val => String(val).includes(this.tableSearch)));
    }
    static ɵfac = function DailyClearance_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DailyClearance)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DailyClearance,
      selectors: [["app-daily-clearance"]],
      viewQuery: function DailyClearance_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.printModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 119,
      vars: 14,
      consts: [["printModal", ""], [1, "p-6", 2, "direction", "rtl", "background-color", "var(--surface-ground)"], [1, "flex", "justify-between", "items-center", "mb-6"], [1, "text-2xl", "font-bold", 2, "color", "var(--text-color)"], [1, "btn", "btn-outline", "btn-error", 3, "click"], [1, "flex", "items-center", "gap-3", "mb-6"], ["type", "text", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u0639\u0647\u062F\u0629", 1, "input", "input-bordered", "w-64", "text-right", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click"], [1, "grid", "grid-cols-4", "gap-4"], [1, "col-span-3", "border", "rounded-xl", "p-3", "h-[600px]", "overflow-auto", 2, "background-color", "var(--surface-card)", "border-color", "var(--surface-border)"], [1, "flex", "justify-end", "mb-3"], ["placeholder", "\u0628\u062D\u062B \u062F\u0627\u062E\u0644 \u0627\u0644\u062C\u062F\u0648\u0644", 1, "input", "input-bordered", "w-64", "text-right", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-ground)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], [1, "table", "table-zebra", "text-right", 2, "border-color", "var(--surface-border)"], [2, "background-color", "var(--surface-section)"], [2, "color", "var(--text-color)"], ["style", "color: var(--text-color);", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "border", "rounded-xl", "p-4", 2, "background-color", "var(--surface-section)", "border-color", "var(--surface-border)"], [1, "text-lg", "font-bold", "mb-2", 2, "color", "var(--text-color)"], [1, "space-y-2", "text-right", 2, "color", "var(--text-color)"], [1, "font-bold"], [1, "my-3", 2, "border-color", "var(--surface-border)"], [1, "text-xl", "font-bold"], [1, "my-4", 2, "border-color", "var(--surface-border)"], [1, "btn", "btn-success", "w-full", 3, "click"], [1, "modal"], [1, "modal-box", "w-full", "max-w-6xl", "p-6", 2, "background-color", "var(--surface-card)"], [1, "text-center", "mb-6"], ["src", "Logo.png", "alt", "Logo", 1, "w-full", "h-full", "object-contain", "mb-2"], [1, "text-3xl", "font-bold", 2, "color", "var(--text-color)"], [1, "flex", "justify-between", "mb-4", "text-right", 2, "color", "var(--text-color)"], [1, "table", "w-full", "table-zebra", "mb-4", "text-right", 2, "border-color", "var(--surface-border)"], [1, "grid", "grid-cols-3", "text-right", "mb-6", 2, "color", "var(--text-color)"], [1, "grid", "grid-cols-3", "text-right", "mt-12", 2, "color", "var(--text-color)"], [1, "modal-action", "mt-4"], [1, "btn", "btn-outline", 3, "click"]],
      template: function DailyClearance_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0639\u0646 \u0627\u0644\u0643\u0634\u0648\u0641 \u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DailyClearance_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.goBack());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0631\u062C\u0648\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DailyClearance_Template_input_ngModelChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.custodyNumber, $event) || (ctx.custodyNumber = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DailyClearance_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.search());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u0628\u062D\u062B");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function DailyClearance_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.tableSearch, $event) || (ctx.tableSearch = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "table", 12)(15, "thead")(16, "tr", 13)(17, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u0627\u0644\u0634\u0631\u0643\u0629 / \u0627\u0644\u0645\u0648\u0643\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\u0631\u0642\u0645 \u0627\u0644\u0643\u0634\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0643\u0634\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\u062A\u062A\u062D\u0645\u0644\u0647 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "\u064A\u062A\u062D\u0645\u0644\u0647 \u0627\u0644\u0645\u0643\u062A\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, DailyClearance_tr_32_Template, 15, 9, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 16)(34, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 18)(37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\u0635\u0627\u0641\u064A \u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0629: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0635\u0631\u0648\u0641: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "hr", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "hr", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DailyClearance_Template_button_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openPrintDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "dialog", 24, 0)(57, "div", 25)(58, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "img", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "h1", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\u0643\u0634\u0641 \u062A\u0635\u0641\u064A\u0629 \u0639\u0647\u062F\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 29)(63, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\u0627\u0644\u0627\u0633\u0645: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\u0642\u064A\u062F \u0631\u0642\u0645: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "table", 30)(76, "thead")(77, "tr", 13)(78, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\u0631\u0642\u0645 \u0627\u0644\u0643\u0634\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "\u062A\u062A\u062D\u0645\u0644\u0647\u0627 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "th", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "\u064A\u062A\u062D\u0645\u0644\u0647\u0627 \u0627\u0644\u0645\u0643\u062A\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](93, DailyClearance_tr_93_Template, 15, 9, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 31)(95, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "\u0627\u062C\u0645\u0627\u0644\u0649 \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0627\u062A: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "\u0635\u0627\u0641\u0649 \u0627\u0644\u0639\u0647\u062F\u0629 \u0627\u0644\u0645\u0633\u062A\u0644\u0645\u0629: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "\u0627\u0644\u0645\u0633\u062A\u062D\u0642: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 32)(108, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "\u0627\u0644\u0627\u062F\u0627\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "\u0631\u0648\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "\u0627\u0644\u0645\u0648\u0638\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 33)(115, "button", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DailyClearance_Template_button_click_115_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.closePrintDialog());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "\u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DailyClearance_Template_button_click_117_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.printModalContent());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "\u0637\u0628\u0627\u0639\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.custodyNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.tableSearch);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredRows);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.receiveDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.netReceived);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalExpenses);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u0627\u0644\u0645\u0633\u062A\u062D\u0642: ", ctx.dueAmount);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.selectedEmployee.name || "---");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.custodyNumber);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.receiveDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filteredRows);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.totalExpenses);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.netReceived);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.dueAmount);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: ["\n\n@media print {\n  body[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n  .print-area[_ngcontent-%COMP%], .print-area[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    visibility: visible;\n  }\n  .print-area[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n  }\n  table[_ngcontent-%COMP%] {\n    page-break-inside: auto;\n  }\n  tr[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n    page-break-after: auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmluYW5jZS9wYWdlcy9kYWlseS1jbGVhcmFuY2UvZGFpbHktY2xlYXJhbmNlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvREFBb0Q7QUFDcEQ7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7RUFDWDtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsc0JBQXNCO0VBQ3hCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIaWRlIGV2ZXJ5dGhpbmcgZXhjZXB0IHByaW50LWFyZWEgd2hlbiBwcmludGluZyAqL1xyXG5AbWVkaWEgcHJpbnQge1xyXG4gIGJvZHkgKiB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5wcmludC1hcmVhLCAucHJpbnQtYXJlYSAqIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIC5wcmludC1hcmVhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIHRhYmxlIHtcclxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdXRvO1xyXG4gIH1cclxuICB0ciB7XHJcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XHJcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdXRvO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return DailyClearance;
})();

/***/ })

}]);
//# sourceMappingURL=4973.js.map