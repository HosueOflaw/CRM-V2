"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[2076],{

/***/ 8053:
/*!*********************************************!*\
  !*** ./src/app/services/custody.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustodyService: () => (/* binding */ CustodyService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let CustodyService = /*#__PURE__*/(() => {
  class CustodyService {
    http;
    apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/CustodyStatements`;
    constructor(http) {
      this.http = http;
    }
    create(statement) {
      return this.http.post(this.apiUrl, statement);
    }
    getByStatementNo(statementNo) {
      return this.http.get(`${this.apiUrl}/statement/${statementNo}`);
    }
    getByAutoNo(autoNo) {
      return this.http.get(`${this.apiUrl}/auto-number/${autoNo}`);
    }
    getByUserId(userId) {
      return this.http.get(`${this.apiUrl}/by-user/${userId}`);
    }
    getNextStatementNo() {
      return this.http.get(`${this.apiUrl}/next-statement-no`);
    }
    getReportData(companyCode, expenseType) {
      let params = {};
      if (companyCode) params.companyCode = companyCode.toString();
      if (expenseType) params.expenseType = expenseType.toString();
      return this.http.get(`${this.apiUrl}/report`, {
        params
      });
    }
    bulkUpdateStatus(ids, toCompany, toOffice) {
      return this.http.post(`${this.apiUrl}/bulk-update`, {
        ids,
        toCompany,
        toOffice
      });
    }
    downloadZip(ids) {
      return this.http.post(`${this.apiUrl}/download-zip`, ids, {
        responseType: 'blob'
      });
    }
    sendToAcc(id) {
      return this.http.put(`${this.apiUrl}/${id}/send-to-acc`, {});
    }
    delete(id) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
    uploadAttachment(files, fileCode, deptCode) {
      const formData = new FormData();
      files.forEach(file => formData.append('files', file));
      if (fileCode) formData.append('fileCode', fileCode.toString());
      if (deptCode) formData.append('deptCode', deptCode.toString());
      return this.http.post(`${this.apiUrl}/upload-attachment`, formData);
    }
    static ɵfac = function CustodyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CustodyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CustodyService,
      factory: CustodyService.ɵfac,
      providedIn: 'root'
    });
  }
  return CustodyService;
})();

/***/ }),

/***/ 8564:
/*!*********************************************************!*\
  !*** ./node_modules/primeng/fesm2022/primeng-chart.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartClasses: () => (/* binding */ ChartClasses),
/* harmony export */   ChartModule: () => (/* binding */ ChartModule),
/* harmony export */   ChartStyle: () => (/* binding */ ChartStyle),
/* harmony export */   UIChart: () => (/* binding */ UIChart)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js/auto */ 43596);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ 17780);
/* harmony import */ var primeng_basecomponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/basecomponent */ 1504);
/* harmony import */ var primeng_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/base */ 82451);
/* harmony import */ var primeng_bind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/bind */ 55693);









const inlineStyles = {
  root: ({
    instance
  }) => ({
    display: 'block',
    position: 'relative',
    width: instance.width,
    height: instance.height
  })
};
const classes = {
  root: 'p-chart'
};
let ChartStyle = /*#__PURE__*/(() => {
  class ChartStyle extends primeng_base__WEBPACK_IMPORTED_MODULE_8__.BaseStyle {
    name = 'chart';
    classes = classes;
    inlineStyles = inlineStyles;
    static ɵfac = /* @__PURE__ */(() => {
      let ɵChartStyle_BaseFactory;
      return function ChartStyle_Factory(__ngFactoryType__) {
        return (ɵChartStyle_BaseFactory || (ɵChartStyle_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ChartStyle)))(__ngFactoryType__ || ChartStyle);
      };
    })();
    static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: ChartStyle,
      factory: ChartStyle.ɵfac
    });
  }
  return ChartStyle;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 *
 * Chart groups a collection of contents in tabs.
 *
 * [Live Demo](https://www.primeng.org/chart/)
 *
 * @module chartstyle
 *
 */
var ChartClasses = /*#__PURE__*/function (ChartClasses) {
  /**
   * Class name of the root element
   */
  ChartClasses["root"] = "p-chart";
  return ChartClasses;
}(ChartClasses || {});
const CHART_INSTANCE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('CHART_INSTANCE');
/**
 * Chart groups a collection of contents in tabs.
 * @group Components
 */
let UIChart = /*#__PURE__*/(() => {
  class UIChart extends primeng_basecomponent__WEBPACK_IMPORTED_MODULE_7__.BaseComponent {
    el;
    zone;
    $pcChart = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(CHART_INSTANCE, {
      optional: true,
      skipSelf: true
    }) ?? undefined;
    bindDirectiveInstance = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(primeng_bind__WEBPACK_IMPORTED_MODULE_9__.Bind, {
      self: true
    });
    onAfterViewChecked() {
      this.bindDirectiveInstance.setAttrs(this.ptms(['host', 'root']));
    }
    /**
     * Type of the chart.
     * @group Props
     */
    type;
    /**
     * Array of per-chart plugins to customize the chart behaviour.
     * @group Props
     */
    plugins = [];
    /**
     * Width of the chart.
     * @group Props
     */
    width;
    /**
     * Height of the chart.
     * @group Props
     */
    height;
    /**
     * Whether the chart is redrawn on screen size change.
     * @group Props
     */
    responsive = true;
    /**
     * Used to define a string that autocomplete attribute the current element.
     * @group Props
     */
    ariaLabel;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     * @group Props
     */
    ariaLabelledBy;
    /**
     * Data to display.
     * @group Props
     */
    get data() {
      return this._data;
    }
    set data(val) {
      this._data = val;
      this.reinit();
    }
    /**
     * Options to customize the chart.
     * @group Props
     */
    get options() {
      return this._options;
    }
    set options(val) {
      this._options = val;
      this.reinit();
    }
    /**
     * Callback to execute when an element on chart is clicked.
     * @group Emits
     */
    onDataSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    isBrowser = false;
    initialized;
    _data;
    _options = {};
    chart;
    _componentStyle = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(ChartStyle);
    constructor(el, zone) {
      super();
      this.el = el;
      this.zone = zone;
    }
    onAfterViewInit() {
      this.initChart();
      this.initialized = true;
    }
    onCanvasClick(event) {
      if (this.chart) {
        const element = this.chart.getElementsAtEventForMode(event, 'nearest', {
          intersect: true
        }, false);
        const dataset = this.chart.getElementsAtEventForMode(event, 'dataset', {
          intersect: true
        }, false);
        if (element && element[0] && dataset) {
          this.onDataSelect.emit({
            originalEvent: event,
            element: element[0],
            dataset: dataset
          });
        }
      }
    }
    initChart() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
        let opts = this.options || {};
        opts.responsive = this.responsive;
        // allows chart to resize in responsive mode
        if (opts.responsive && (this.height || this.width)) {
          opts.maintainAspectRatio = false;
        }
        this.zone.runOutsideAngular(() => {
          this.chart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_5__["default"](this.el.nativeElement.children[0], {
            type: this.type,
            data: this.data,
            options: this.options,
            plugins: this.plugins
          });
        });
      }
    }
    getCanvas() {
      return this.el.nativeElement.children[0];
    }
    getBase64Image() {
      return this.chart.toBase64Image();
    }
    generateLegend() {
      if (this.chart) {
        return this.chart.generateLegend();
      }
    }
    refresh() {
      if (this.chart) {
        this.chart.update();
      }
    }
    reinit() {
      if (this.chart) {
        this.chart.destroy();
        this.initChart();
      }
    }
    onDestroy() {
      if (this.chart) {
        this.chart.destroy();
        this.initialized = false;
        this.chart = null;
      }
    }
    static ɵfac = function UIChart_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UIChart)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    };
    static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: UIChart,
      selectors: [["p-chart"]],
      hostVars: 4,
      hostBindings: function UIChart_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](ctx.sx("root"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.cx("root"));
        }
      },
      inputs: {
        type: "type",
        plugins: "plugins",
        width: "width",
        height: "height",
        responsive: [2, "responsive", "responsive", _angular_core__WEBPACK_IMPORTED_MODULE_4__.booleanAttribute],
        ariaLabel: "ariaLabel",
        ariaLabelledBy: "ariaLabelledBy",
        data: "data",
        options: "options"
      },
      outputs: {
        onDataSelect: "onDataSelect"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([ChartStyle, {
        provide: CHART_INSTANCE,
        useExisting: UIChart
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵHostDirectivesFeature"]([primeng_bind__WEBPACK_IMPORTED_MODULE_9__.Bind]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 5,
      consts: [["role", "img", 3, "click", "pBind"]],
      template: function UIChart_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "canvas", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UIChart_Template_canvas_click_0_listener($event) {
            return ctx.onCanvasClick($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pBind", ctx.ptm("canvas"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("width", ctx.responsive && !ctx.width ? null : ctx.width)("height", ctx.responsive && !ctx.height ? null : ctx.height);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_bind__WEBPACK_IMPORTED_MODULE_9__.BindModule, primeng_bind__WEBPACK_IMPORTED_MODULE_9__.Bind],
      encapsulation: 2,
      changeDetection: 0
    });
  }
  return UIChart;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let ChartModule = /*#__PURE__*/(() => {
  class ChartModule {
    static ɵfac = function ChartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChartModule)();
    };
    static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: ChartModule
    });
    static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [UIChart, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule, primeng_api__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
    });
  }
  return ChartModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 43596:
/*!********************************************!*\
  !*** ./node_modules/chart.js/auto/auto.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Animation),
/* harmony export */   Animations: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Animations),
/* harmony export */   ArcElement: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.ArcElement),
/* harmony export */   BarController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BarController),
/* harmony export */   BarElement: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BarElement),
/* harmony export */   BasePlatform: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BasePlatform),
/* harmony export */   BasicPlatform: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BasicPlatform),
/* harmony export */   BubbleController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.BubbleController),
/* harmony export */   CategoryScale: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale),
/* harmony export */   Chart: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart),
/* harmony export */   Colors: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Colors),
/* harmony export */   DatasetController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.DatasetController),
/* harmony export */   Decimation: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Decimation),
/* harmony export */   DomPlatform: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.DomPlatform),
/* harmony export */   DoughnutController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.DoughnutController),
/* harmony export */   Element: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Element),
/* harmony export */   Filler: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Filler),
/* harmony export */   Interaction: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Interaction),
/* harmony export */   Legend: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend),
/* harmony export */   LineController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.LineController),
/* harmony export */   LineElement: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.LineElement),
/* harmony export */   LinearScale: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale),
/* harmony export */   LogarithmicScale: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.LogarithmicScale),
/* harmony export */   PieController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.PieController),
/* harmony export */   PointElement: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.PointElement),
/* harmony export */   PolarAreaController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.PolarAreaController),
/* harmony export */   RadarController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.RadarController),
/* harmony export */   RadialLinearScale: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.RadialLinearScale),
/* harmony export */   Scale: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Scale),
/* harmony export */   ScatterController: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.ScatterController),
/* harmony export */   SubTitle: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.SubTitle),
/* harmony export */   Ticks: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Ticks),
/* harmony export */   TimeScale: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.TimeScale),
/* harmony export */   TimeSeriesScale: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.TimeSeriesScale),
/* harmony export */   Title: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Title),
/* harmony export */   Tooltip: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip),
/* harmony export */   _adapters: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__._adapters),
/* harmony export */   _detectPlatform: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__._detectPlatform),
/* harmony export */   animator: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.animator),
/* harmony export */   controllers: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.controllers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaults: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.defaults),
/* harmony export */   elements: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.elements),
/* harmony export */   layouts: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.layouts),
/* harmony export */   plugins: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.plugins),
/* harmony export */   registerables: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables),
/* harmony export */   registry: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.registry),
/* harmony export */   scales: () => (/* reexport safe */ _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.scales)
/* harmony export */ });
/* harmony import */ var _dist_chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/chart.js */ 36792);

_dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(..._dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.registerables);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_dist_chart_js__WEBPACK_IMPORTED_MODULE_0__.Chart);

/***/ }),

/***/ 59068:
/*!***********************************************!*\
  !*** ./src/app/services/data-view.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataViewService: () => (/* binding */ DataViewService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let DataViewService = /*#__PURE__*/(() => {
  class DataViewService {
    http;
    apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/DataView`;
    constructor(http) {
      this.http = http;
    }
    createMainfile(data) {
      return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Mainfiles`, data);
    }
    getNextMainfileId() {
      return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Mainfiles/next-id`);
    }
    updateMainfile(id, data) {
      return this.http.put(`${this.apiUrl}/mainfiles/${id}`, data);
    }
    updateFileDetail(id, data) {
      return this.http.put(`${this.apiUrl}/filedetails/${id}`, data);
    }
    updateAutoNumber(id, data) {
      return this.http.put(`${this.apiUrl}/autonumbers/${id}`, data);
    }
    updatePayment(id, data) {
      return this.http.put(`${this.apiUrl}/payments/${id}`, data);
    }
    updateFileClassification(id, data) {
      return this.http.put(`${this.apiUrl}/fileclassifications/${id}`, data);
    }
    updateMail(id, data) {
      return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/DataView/mails/${id}`, data);
    }
    updateNote(id, data) {
      return this.http.put(`${this.apiUrl}/notes/${id}`, data);
    }
    updateAdditionalAmount(id, data) {
      return this.http.put(`${this.apiUrl}/additionalamounts/${id}`, data);
    }
    updateAttachment(id, data) {
      return this.http.put(`${this.apiUrl}/attachments/${id}`, data);
    }
    getMainfileById(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}`);
    }
    getMainfileByCode(code) {
      return this.http.get(`${this.apiUrl}/mainfiles/code/${code}`);
    }
    getMainfileDetails(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}/details`);
    }
    getMainfileAutoNumbers(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}/autonumbers`);
    }
    getMainfileClassifications(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}/fileclassifications`);
    }
    getMainfileNotes(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}/notes`);
    }
    getMainfileByAutoNumber(autoNumber) {
      return this.http.get(`${this.apiUrl}/mainfiles/autonumber/${autoNumber}`);
    }
    getMainfileByFileDetail(detail) {
      return this.http.get(`${this.apiUrl}/mainfiles/filedetail/${detail}`);
    }
    getFileDetailById(id) {
      return this.http.get(`${this.apiUrl}/filedetails/${id}`);
    }
    getAutoNumberById(id) {
      return this.http.get(`${this.apiUrl}/autonumbers/${id}`);
    }
    getFileClassificationById(id) {
      return this.http.get(`${this.apiUrl}/fileclassifications/${id}`);
    }
    getNoteById(id) {
      return this.http.get(`${this.apiUrl}/notes/${id}`);
    }
    getAdditionalAmountById(id) {
      return this.http.get(`${this.apiUrl}/additionalamounts/${id}`);
    }
    getAttachmentById(id) {
      return this.http.get(`${this.apiUrl}/attachments/${id}`);
    }
    searchFileDetails(term) {
      return this.http.get(`${this.apiUrl}/filedetails/search/${term}`);
    }
    searchAutoNumbers(term) {
      return this.http.get(`${this.apiUrl}/autonumbers/search/${term}`);
    }
    searchPayments(term) {
      return this.http.get(`${this.apiUrl}/payments/search/${term}`);
    }
    searchFileClassifications(term) {
      return this.http.get(`${this.apiUrl}/fileclassifications/search/${term}`);
    }
    searchNotes(term) {
      return this.http.get(`${this.apiUrl}/notes/search/${term}`);
    }
    searchAdditionalAmounts(term) {
      return this.http.get(`${this.apiUrl}/additionalamounts/search/${term}`);
    }
    searchAttachments(term) {
      return this.http.get(`${this.apiUrl}/attachments/search/${term}`);
    }
    getMainfileAttachments(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}/attachments`);
    }
    getMainfileMails(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}/mails`);
    }
    getMainfileAdditionalAmounts(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}/additionalamounts`);
    }
    getMainfilePaymentsByFileCode(id) {
      return this.http.get(`${this.apiUrl}/mainfiles/${id}/payments`);
    }
    static ɵfac = function DataViewService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DataViewService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DataViewService,
      factory: DataViewService.ɵfac,
      providedIn: 'root'
    });
  }
  return DataViewService;
})();

/***/ }),

/***/ 95776:
/*!************************************************************!*\
  !*** ./src/app/features/finance/services/ClientService.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientService: () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 63855);



let ClientService = /*#__PURE__*/(() => {
  class ClientService {
    http;
    apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/Clients`;
    constructor(http) {
      this.http = http;
    }
    createClient(clientData) {
      return this.http.post(this.apiUrl, clientData);
    }
    getAllClients() {
      return this.http.get(this.apiUrl);
    }
    updateClient(id, clientData) {
      return this.http.put(`${this.apiUrl}/${id}`, clientData);
    }
    getClientByCode(code) {
      return this.http.get(`${this.apiUrl}/code/${code}`);
    }
    getClientById(id) {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
    uploadAttachment(fileCode, file, note, deptCode = 1, userAdded = 1) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('note', note);
      formData.append('attachType', 'document');
      formData.append('deptCode', deptCode.toString());
      formData.append('userAdded', userAdded.toString());
      return this.http.post(`${this.apiUrl}/${fileCode}/attachments`, formData);
    }
    getClientAttachments(fileCode) {
      return this.http.get(`${this.apiUrl}/${fileCode}/attachments`);
    }
    getClientContacts(fileCode) {
      return this.http.get(`${this.apiUrl}/${fileCode}/contacts`);
    }
    deleteAttachment(attachmentId) {
      return this.http.delete(`${this.apiUrl}/attachments/${attachmentId}`);
    }
    downloadAttachment(attachmentId) {
      return this.http.get(`${this.apiUrl}/attachments/${attachmentId}/download`, {
        responseType: 'blob'
      });
    }
    static ɵfac = function ClientService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ClientService,
      factory: ClientService.ɵfac,
      providedIn: 'root'
    });
  }
  return ClientService;
})();

/***/ })

}]);
//# sourceMappingURL=common.js.map