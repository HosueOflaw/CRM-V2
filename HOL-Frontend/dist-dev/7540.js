"use strict";
(self["webpackChunkhouseoflaw"] = self["webpackChunkhouseoflaw"] || []).push([[7540],{

/***/ 7540:
/*!***************************************************************************************!*\
  !*** ./src/app/features/negotiations/pages/client-follow-up copy/client-follow-up.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientFollowUp: () => (/* binding */ ClientFollowUp)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _components_main_content_main_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-content/main-content */ 8947);
/* harmony import */ var _components_app_sidebar_app_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/app-sidebar/app-sidebar */ 83967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _services_negotiations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/negotiations.service */ 54601);







function ClientFollowUp_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u062C\u0627\u0631\u064A \u062C\u0644\u0628 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
let ClientFollowUp = /*#__PURE__*/(() => {
  class ClientFollowUp {
    negotiationsService;
    mainContent;
    searchQuery = '';
    loading = false;
    activeTab = 'main';
    sidebarActions = ['تكليف الوفاء', 'فاكس جهة العمل', 'العقد', 'المدنية', 'رسائل', 'تحديث الملفات', 'استمارة مندوب', 'تارجيت الباتشات', 'صحيفة الدعوي'];
    negotiationMethods = ['اتصال', 'رسالة', 'واتس اتصال', 'واتس رسالة', 'فايبر اتصال', 'فايبر رسالة', 'ايمو اتصال', 'ايمو رسالة', 'فاكس', 'ايميل'];
    stats = {
      totalClients: 0,
      totalReports: 0,
      todayReports: 0,
      monthReports: 0
    };
    selectedPerson = {
      clientName: '',
      customerName: '',
      nationalId: '',
      status: '',
      nationality: '',
      classification: '',
      contract: '',
      debt: '',
      autoNumbers: '',
      batch: '',
      address: '',
      clientStatus: '',
      claimStatus: '',
      paymentStatus: '',
      discount: '',
      acceptance: '',
      jobType: '',
      incomeNotes: '',
      salaryDate: ''
    };
    clientRows = [];
    attachments = [];
    additionalAmounts = [];
    audits = [];
    autoNumbers = [];
    callcenterStatements = [];
    classifications = [];
    statuses = [];
    dashboardStats = null;
    payments = [];
    contacts = [];
    notes = [];
    auditsTotal = 0;
    statementsTotal = 0;
    notesTotal = 0;
    statusesTotal = 0;
    currentAuditsPage = 1;
    currentStatementsPage = 1;
    currentNotesPage = 1;
    currentStatusesPage = 1;
    review = {
      date: '',
      notes: ''
    };
    negotiationResult = {
      status: ''
    };
    financial = {
      claimValue: 0,
      fees: 0,
      lawFees: 0
    };
    activeSubTab = 'debts'; // 'debts', 'payments', 'legal', 'attachments', 'history', 'contacts'
    activeReport = null;
    isPreviewMode = false;
    reportData = null;
    constructor(negotiationsService) {
      this.negotiationsService = negotiationsService;
    }
    // البحث عن شخص باستخدام الرقم المدني أو الكود أو الاسم
    handleSearch(term) {
      if (!term) return;
      // Reset all data before starting a new search
      this.onClientSelected(null);
      this.loading = true;
      console.log('جاري البحث في قاعدة البيانات عن:', term);
      this.negotiationsService.search(term).subscribe({
        next: results => {
          this.loading = false;
          if (results && results.length > 0) {
            this.onClientSelected(results[0]);
          } else {
            Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert2 */ 37581, 23)).then(Swal => {
              Swal.default.fire({
                title: 'تنبيه',
                text: 'لم يتم العثور على أي نتائج للبحث المدخل',
                icon: 'warning',
                confirmButtonText: 'حسناً',
                confirmButtonColor: '#6366f1'
              });
            });
          }
        },
        error: err => {
          this.loading = false;
          console.error('Search error:', err);
        }
      });
    }
    ngOnInit() {
      // Stats are now fetched dynamically per-client
    }
    fetchDashboardStats(fileCode) {
      this.negotiationsService.getDashboardStats(fileCode).subscribe(stats => {
        this.dashboardStats = stats;
      });
    }
    /**
     * جلب البيانات الإضافية للملف بكل تفاصيلها
     * نستخدم id لجلب FileDetails (المديونيات)
     * ونستخدم code لجلب بقية البيانات المرتبطة (Payments, Attachments, etc.)
     */
    fetchAdditionalData(mainfile) {
      const id = mainfile.id || mainfile.Id;
      if (!mainfile || !id) return;
      this.loading = true;
      const mainfileId = mainfile.id || mainfile.Id;
      const fileCode = mainfile.code || mainfile.Code;
      const classificationName = mainfile.classification?.classification || '';
      console.log(`جاري جلب البيانات المرتبطة للكود: ${fileCode} والمعرف: ${mainfileId}`);
      // Fetch Dashboard Stats specifically for this file
      this.fetchDashboardStats(fileCode);
      // 1. جلب تفاصيل المديونيات (بحث عن طريق معرف المين فايل)
      this.negotiationsService.getFileDetails(mainfileId).subscribe({
        next: details => {
          this.loading = false;
          // Set the primary batch for the details card from the first file detail
          if (details && details.length > 0) {
            this.selectedPerson.batch = details[0].patchNo || '';
          }
          this.clientRows = details.map((f, i) => ({
            id: f.id,
            code: f.fileCode?.toString() || f.id.toString(),
            name: f.legalPlaintiff || 'غير معروف',
            fileStatus: this.selectedPerson.fileStatus || 'نشط',
            debtReason: f.reason || '',
            batch: f.patchNo || '',
            classificationName: classificationName,
            contractNum: f.contractNo || '',
            dateAdded: f.dateAdded,
            dateFinished: f.dateFinished,
            nationality: this.selectedPerson.nationality,
            civilId: this.selectedPerson.nationalId,
            claim: f.deptAmount || 0,
            paid: 0,
            remaining: f.deptAmount || 0,
            address: this.selectedPerson.address,
            client: f.client || this.selectedPerson.customerName,
            lawyerName: f.lawyerUserName || 'غير محدد',
            courtName: f.courtUserName || 'غير محدد',
            mdName: f.mdUserName || 'غير محدد',
            advisorName: f.legalAdvisorUserName || 'غير محدد',
            followUpStatus: this.selectedPerson.followUpStatus || '',
            clientStatus: this.selectedPerson.clientStatus || '',
            contactStatus: this.selectedPerson.contactStatus || '',
            cooperationStatus: this.selectedPerson.cooperationStatus || '',
            civilStatus: this.selectedPerson.civilStatus || '',
            internalStatus: this.selectedPerson.internalStatus || '',
            note1: f.note1 || '',
            note2: f.note2 || '',
            note3: f.note3 || '',
            note4: f.note4 || '',
            note5: f.note5 || '',
            note6: f.note6 || ''
          }));
          if (details && details.length > 0) {
            this.financial.claimValue = details.reduce((acc, curr) => acc + (curr.deptAmount || 0), 0);
            this.selectedPerson.customerName = details[0].legalPlaintiff || this.selectedPerson.customerName;
            this.selectedPerson.contract = details[0].contractNo || this.selectedPerson.contract;
            this.selectedPerson.debt = this.financial.claimValue.toLocaleString() || '0';
          }
        },
        error: err => {
          this.loading = false;
          console.error('Error fetching details:', err);
        }
      });
      // 2. جلب بقية البيانات المرتبطة بـ كود الملف (FileCode) لضمان الدقة وتوافق السجلات التاريخية
      this.fetchUniversalCaseData(mainfileId, fileCode);
      // 3. جلب إفادات الكول سنتر المرتبطة بـ كود الملف (FileCode)
      this.fetchCallcenterStatements(fileCode, 1);
      // 4. جلب الأرقام الخاصة بالعميل (الخصم) باستخدام الرقم المدني
      this.fetchContactsOnly();
    }
    fetchContactsOnly() {
      const civilId = this.selectedPerson?.nationalId || this.selectedPerson?.civilId;
      if (civilId) {
        this.negotiationsService.getContacts(civilId).subscribe(data => this.contacts = data);
      }
    }
    // جلب كافة البيانات المرتبطة برمز الملف (FileCode) لضمان توافقها مع السجلات التاريخية
    fetchUniversalCaseData(id, fileCode) {
      this.negotiationsService.getPayments(fileCode).subscribe(data => {
        this.payments = data;
        // تحديث المبالغ المسددة في جدول الديون المرتبط بهذا الملف
        const totalPaidForThisCode = data.reduce((acc, p) => acc + (p.value || 0), 0);
        this.clientRows = this.clientRows.map(row => {
          const sortedPayments = [...data].sort((a, b) => new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime());
          const latestPayment = sortedPayments[0];
          return {
            ...row,
            paid: totalPaidForThisCode,
            remaining: (row.claim || 0) - totalPaidForThisCode,
            lastPaymentAmount: latestPayment?.value || 0,
            lastPaymentDate: latestPayment?.dateAdded
          };
        });
        // السداد الكلي (مجموع السدادات لكل الديون المعروضة)
        const totalPaidGlobal = this.clientRows.reduce((acc, row) => acc + (row.paid || 0), 0);
        this.financial.fees = totalPaidGlobal;
        this.financial.lawFees = this.financial.claimValue - totalPaidGlobal;
      });
      this.negotiationsService.getAttachments(fileCode).subscribe(data => this.attachments = data);
      this.negotiationsService.getAdditionalAmounts(fileCode).subscribe(data => this.additionalAmounts = data);
      this.fetchAudits(fileCode, 1);
      this.negotiationsService.getAutoNumbers(fileCode).subscribe(data => {
        this.autoNumbers = data;
        if (this.selectedPerson && data.length > 0) {
          this.selectedPerson.autoNumbers = data.map(n => n.autoNumberValue).join(', ');
        }
      });
      this.negotiationsService.getClassifications(fileCode).subscribe(data => {
        this.classifications = data;
        // If classification data exists and was NOT already set by search, map the latest record
        if (this.selectedPerson && data && data.length > 0) {
          this.selectedPerson.classification = {
            ...data[0],
            salaryDate: data[0].salaryDate ? data[0].salaryDate.split('T')[0] : null
          };
        } else if (this.selectedPerson && !this.selectedPerson.classification) {
          this.selectedPerson.classification = {
            clientStatusId: null,
            claimStatusId: null,
            paymentStatusId: null,
            fileStatusId: null,
            actionStatusId: null,
            followUpStatusId: null,
            internalStatusId: null,
            civilStatusId: null,
            cooperationStatusId: null,
            contactStatusId: null,
            discount: null,
            acceptance: '',
            salaryDate: null,
            incomeNotes: ''
          };
        }
      });
      this.fetchStatusesHistory(id, 1);
      this.fetchNotes(id, 1); // Notes also uses ID
    }
    fetchStatusesHistory(fileCode, page = 1) {
      this.currentStatusesPage = page;
      this.negotiationsService.getStatusesHistory(fileCode, page, 5).subscribe(res => {
        this.statuses = res.items;
        this.statusesTotal = res.total;
      });
    }
    fetchNotes(fileCode, page = 1) {
      this.currentNotesPage = page;
      this.negotiationsService.getNotes(fileCode, page, 5).subscribe(res => {
        this.notes = res.items;
        this.notesTotal = res.total;
      });
    }
    handleStatusChanged() {
      if (this.selectedPerson?.code) {
        this.fetchStatusesHistory(Number(this.selectedPerson.code), 1);
      }
    }
    fetchCallcenterStatements(id, page = 1) {
      this.currentStatementsPage = page;
      this.negotiationsService.getCallcenterStatements(id, page, 5).subscribe(res => {
        const data = res.items;
        this.statementsTotal = res.total;
        const sorted = data.sort((a, b) => new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime());
        this.callcenterStatements = sorted;
        if (sorted.length > 0 && page === 1) {
          this.clientRows = this.clientRows.map(row => ({
            ...row,
            lastStatement: sorted[0].notes,
            lastStatementDate: sorted[0].dateAdded
          }));
        }
      });
    }
    fetchAudits(id, page = 1) {
      this.currentAuditsPage = page;
      this.negotiationsService.getAudits(id, page, 5).subscribe(res => {
        this.audits = res.items;
        this.auditsTotal = res.total;
      });
    }
    handlePageChange(event) {
      if (!this.selectedPerson?.code) return;
      const code = Number(this.selectedPerson.code);
      if (event.type === 'audits') {
        this.fetchAudits(code, event.page);
      } else if (event.type === 'statements') {
        this.fetchCallcenterStatements(code, event.page);
      } else if (event.type === 'notes') {
        this.fetchNotes(code, event.page);
      } else if (event.type === 'statuses') {
        this.fetchStatusesHistory(code, event.page);
      }
    }
    // جلب الإفادات
    // this.negotiationsService.getStatements(fileId).subscribe(statements => { ... });
    saveStatement(eventData) {
      if (!this.selectedPerson?.code) return;
      const payload = {
        fileCode: this.selectedPerson.code,
        deptCode: this.selectedPerson.departmentId,
        contactMethod: eventData.contactMethod,
        connectedStatus: eventData.connectedStatus,
        notes: eventData.notes,
        phoneNumber: eventData.phoneNumber || this.selectedPerson.phone1 || 'لا يوجد رقم',
        phoneOwner: eventData.phoneOwner,
        promiseAmount: eventData.promiseAmount,
        nextDate: eventData.nextDate,
        nextAction: eventData.nextAction
      };
      this.loading = true;
      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert2 */ 37581, 23)).then(Swal => {
        this.negotiationsService.addStatement(payload).subscribe({
          next: () => {
            this.loading = false;
            Swal.default.fire('تم الحفظ', 'تم إضافة الإفادة بنجاح', 'success');
            this.fetchUniversalCaseData(this.selectedPerson.id, this.selectedPerson.code);
            this.fetchCallcenterStatements(this.selectedPerson.code);
          },
          error: err => {
            this.loading = false;
            console.error('Error saving statement:', err);
            Swal.default.fire('خطأ', 'حدث خطأ أثناء حفظ الإفادة', 'error');
          }
        });
      });
    }
    // البحث عن شخص
    onClientSelected(client) {
      if (client) {
        const id = client.id || client.Id;
        const code = client.code || client.Code;
        const cid = client.cid || client.Cid || client.nationalId;
        const classification = client.classification || {};
        this.selectedPerson = {
          id: id,
          code: code?.toString() || '',
          departmentId: client.departmentId,
          clientName: client.name || client.Name || '',
          customerName: client.name || client.Name || '',
          nationalId: cid || '',
          status: client.archive ? 'مؤرشف' : 'نشط',
          nationality: client.nationality || client.Nationality || '',
          contract: code?.toString() || '',
          debt: '',
          autoNumbers: '',
          batch: '',
          address: client.address || client.Address || '',
          // Use helper to ensure correct Arabic encoding
          cooperationStatus: this.getLookupName('cooperation', classification.cooperationStatusId) || client.cooperationStatus || '',
          contactStatus: this.getLookupName('contact', classification.contactStatusId) || client.contactStatus || '',
          civilStatus: this.getLookupName('civil', classification.civilStatusId) || client.civilStatus || '',
          internalStatus: this.getLookupName('internal', classification.internalStatusId) || client.internalStatus || '',
          followUpStatus: this.getLookupName('followup', classification.followUpStatusId) || client.followUpStatus || '',
          clientStatus: this.getLookupName('client', classification.clientStatusId) || client.clientStatus || '',
          fileStatus: this.getLookupName('file', classification.fileStatusId) || client.fileStatus || 'نشط',
          jobType: client.work || client.Work || '',
          gender: this.getLookupName('gender', classification.genderId) || client.gender || '',
          communicationLanguage: this.getLookupName('comms_lang', classification.communicationLanguageId) || client.communicationLanguage || '',
          incomeNotes: classification.incomeNotes || '',
          classification: client.classification ? {
            ...client.classification,
            salaryDate: client.classification.salaryDate ? client.classification.salaryDate.split('T')[0] : null
          } : null
        };
        // Trigger search for related details (stats, file records, etc.)
        this.fetchAdditionalData(client);
        // Switch back to main tab to show results
        if (this.mainContent) {
          this.mainContent.setMainTab('main');
        }
        console.log('Client loaded:', client);
      } else {
        this.resetAllData();
        if (this.mainContent) {
          this.mainContent.resetAllTables();
        }
      }
    }
    resetAllData() {
      this.selectedPerson = {
        clientName: '',
        customerName: '',
        nationalId: '',
        status: '',
        nationality: '',
        classification: '',
        contract: '',
        debt: '',
        autoNumbers: '',
        batch: '',
        address: '',
        clientStatus: '',
        claimStatus: '',
        paymentStatus: '',
        discount: '',
        acceptance: '',
        jobType: '',
        incomeNotes: '',
        salaryDate: ''
      };
      this.financial = {
        claimValue: 0,
        fees: 0,
        lawFees: 0
      };
      this.dashboardStats = {
        totalClients: 0,
        totalStatements: 0,
        todayStatements: 0,
        monthStatements: 0
      };
      this.clientRows = [];
      this.attachments = [];
      this.additionalAmounts = [];
      this.audits = [];
      this.autoNumbers = [];
      this.callcenterStatements = [];
      this.classifications = [];
      this.statuses = [];
      this.payments = [];
      this.contacts = [];
      this.notes = [];
      this.searchQuery = '';
      // Reset pagination totals
      this.auditsTotal = 0;
      this.statementsTotal = 0;
      this.notesTotal = 0;
      this.statusesTotal = 0;
      console.log('All fields and child tables cleared');
    }
    // أزرار Sidebar
    performAction(action) {
      console.log('أداء إجراء:', action);
    }
    // التفاوض
    selectNegotiation(method) {
      console.log('وسيلة التفاوض:', method);
    }
    saveReview() {
      console.log('حفظ المراجعة');
    }
    rollbackReview() {
      console.log('تراجع المراجعة');
    }
    saveClassification() {
      console.log('حفظ التصنيف');
    }
    saveDiscount() {
      console.log('حفظ الخصم');
    }
    saveIncome() {
      console.log('حفظ مصدر الدخل');
    }
    onPreviewToggle(event) {
      this.activeReport = event.type;
      this.isPreviewMode = event.isPreview;
      if (event.data) {
        this.reportData = event.data;
      }
    }
    closePreview() {
      this.isPreviewMode = false;
      this.activeReport = null;
    }
    printPage() {
      window.print();
    }
    /**
     * Helper to translate status IDs into correct Arabic names,
     * bypassing database encoding issues.
     */
    getLookupName(type, id) {
      if (!id || id === 1) return 'غير مصنف';
      const idNum = Number(id);
      switch (type.toLowerCase()) {
        case 'cooperation':
          return {
            2: 'وعد بالسداد',
            3: 'تقسيط',
            4: 'متعاون',
            5: 'غير متعاون',
            6: 'مماطل',
            7: 'متردد',
            8: 'غير قادر',
            9: 'وعد ضعيف',
            10: 'وعد قوي',
            11: 'رافض السداد',
            12: 'لم نصل اليه'
          }[idNum] || id.toString();
        case 'contact':
          return {
            2: 'مع العميل',
            3: 'غير متواصل',
            4: 'لا يمكن التواصل',
            5: 'مع اخر',
            6: 'مع العميل واخر'
          }[idNum] || id.toString();
        case 'civil':
          return {
            2: 'صالحة',
            3: 'منتهية',
            4: 'لاغية',
            5: 'يتعذر',
            6: 'غير نشط',
            7: 'وفاة'
          }[idNum] || id.toString();
        case 'internal':
        case 'interior':
          return {
            2: 'غير مخالف',
            3: 'في قائمة الممنوعين',
            4: 'مخالف اقامة',
            5: 'هجرة',
            6: 'خارج البلاد'
          }[idNum] || id.toString();
        case 'client':
          return {
            2: 'مدني خطا',
            3: 'نشط',
            4: 'مسجون',
            5: 'وفاه',
            6: 'مغادر نهائي',
            7: 'سداد المحكمة',
            8: 'سداد شركة',
            9: 'سداد مندوب مكتب'
          }[idNum] || id.toString();
        case 'file':
          return {
            2: 'ودي',
            3: 'قضائي'
          }[idNum] || id.toString();
        case 'comms_lang':
          return {
            2: 'عربي',
            3: 'إنجليزي',
            4: 'أوردو',
            5: 'هندي',
            6: 'تاغالوغ'
          }[idNum] || id.toString();
        case 'gender':
          return {
            2: 'ذكر',
            3: 'أنثى'
          }[idNum] || id.toString();
        default:
          return id.toString();
      }
    }
    static ɵfac = function ClientFollowUp_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientFollowUp)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_negotiations_service__WEBPACK_IMPORTED_MODULE_5__.NegotiationsService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ClientFollowUp,
      selectors: [["app-client-follow-up"]],
      viewQuery: function ClientFollowUp_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_components_main_content_main_content__WEBPACK_IMPORTED_MODULE_2__.MainContent, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mainContent = _t.first);
        }
      },
      decls: 6,
      vars: 20,
      consts: [["dir", "rtl", 1, "grid", "grid-cols-12", "gap-4", "p-1", "bg-base-200", "min-h-screen"], [1, "col-span-12", "md:col-span-2"], [3, "search", "financialData", "dashboardStats"], [1, "col-span-12", "md:col-span-10", "relative"], ["class", "absolute inset-0 bg-white/50 backdrop-blur-[2px] z-50 flex items-center justify-center rounded-2xl", 4, "ngIf"], [3, "contactAdded", "statementSaved", "statusChanged", "loadClientRequest", "pageChange", "selectedPerson", "financialData", "clientRows", "attachments", "payments", "additionalAmounts", "audits", "autoNumbers", "callcenterStatements", "classifications", "statuses", "numbers", "notes", "notesTotal", "statusesTotal", "auditsTotal", "statementsTotal"], [1, "absolute", "inset-0", "bg-white/50", "backdrop-blur-[2px]", "z-50", "flex", "items-center", "justify-center", "rounded-2xl"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "loading", "loading-spinner", "loading-lg", "text-primary"], [1, "text-sm", "font-bold", "text-primary", "animate-pulse"]],
      template: function ClientFollowUp_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-app-sidebar", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("search", function ClientFollowUp_Template_app_app_sidebar_search_2_listener($event) {
            return ctx.onClientSelected($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ClientFollowUp_div_4_Template, 5, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-main-content", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("contactAdded", function ClientFollowUp_Template_app_main_content_contactAdded_5_listener() {
            return ctx.fetchContactsOnly();
          })("statementSaved", function ClientFollowUp_Template_app_main_content_statementSaved_5_listener($event) {
            return ctx.saveStatement($event);
          })("statusChanged", function ClientFollowUp_Template_app_main_content_statusChanged_5_listener() {
            return ctx.handleStatusChanged();
          })("loadClientRequest", function ClientFollowUp_Template_app_main_content_loadClientRequest_5_listener($event) {
            return ctx.onClientSelected($event);
          })("pageChange", function ClientFollowUp_Template_app_main_content_pageChange_5_listener($event) {
            return ctx.handlePageChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("financialData", ctx.financial)("dashboardStats", ctx.dashboardStats);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedPerson", ctx.selectedPerson)("financialData", ctx.financial)("clientRows", ctx.clientRows)("attachments", ctx.attachments)("payments", ctx.payments)("additionalAmounts", ctx.additionalAmounts)("audits", ctx.audits)("autoNumbers", ctx.autoNumbers)("callcenterStatements", ctx.callcenterStatements)("classifications", ctx.classifications)("statuses", ctx.statuses)("numbers", ctx.contacts)("notes", ctx.notes)("notesTotal", ctx.notesTotal)("statusesTotal", ctx.statusesTotal)("auditsTotal", ctx.auditsTotal)("statementsTotal", ctx.statementsTotal);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _components_app_sidebar_app_sidebar__WEBPACK_IMPORTED_MODULE_3__.AppSidebar, _components_main_content_main_content__WEBPACK_IMPORTED_MODULE_2__.MainContent],
      styles: [".client-follow-up[_ngcontent-%COMP%] {\n  background: var(--b1);\n  min-height: 100vh;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Cairo\", sans-serif;\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbmVnb3RpYXRpb25zL3BhZ2VzL2NsaWVudC1mb2xsb3ctdXAgY29weS9jbGllbnQtZm9sbG93LXVwLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC1mb2xsb3ctdXAge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWIxKTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2Fpcm9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
  return ClientFollowUp;
})();

/***/ }),

/***/ 8947:
/*!***********************************************************************************************************!*\
  !*** ./src/app/features/negotiations/pages/client-follow-up copy/components/main-content/main-content.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainContent: () => (/* binding */ MainContent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/components/lookup-modal/lookup-modal */ 15234);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ 13857);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _services_negotiations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/negotiations.service */ 54601);





 // استيراد مكتبة الإكسل





const _c0 = ["lookupModal"];
const _c1 = () => ["Id", "Code", "Name"];
const _c2 = () => ["ADD", "INSERT", "UPDATE", "DELETE"];
const _c3 = (a0, a1, a2, a3) => ({
  "bg-emerald-100 text-emerald-700": a0,
  "bg-blue-100 text-blue-700": a1,
  "bg-rose-100 text-rose-700": a2,
  "bg-slate-100 text-slate-600": a3
});
const _c4 = (a0, a1, a2) => ({
  "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400": a0,
  "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400": a1,
  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400": a2
});
const _c5 = (a0, a1) => ({
  "bg-emerald-100 text-emerald-700": a0,
  "bg-slate-100 text-slate-600": a1
});
function MainContent_div_25_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_25_tr_34_Template_tr_click_0_listener() {
      const row_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.selectFile(row_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", row_r3.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.followUpStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.clientStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.contactStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.cooperationStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.civilStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.internalStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 16, row_r3.lastPaymentAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.lastPaymentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", row_r3.lastStatement);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", row_r3.lastStatement, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.lastStatementDate);
  }
}
function MainContent_div_25_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 102)(2, "div", 103)(3, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u062C\u0644\u0627\u062A \u0645\u0637\u0627\u0628\u0642\u0629 \u0644\u0644\u0628\u062D\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function MainContent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "table", 88)(3, "thead")(4, "tr", 89)(5, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0639\u0627\u0648\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062F\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0627\u062E\u0631 \u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u062A\u0627\u0631\u064A\u062E \u0627\u062E\u0631 \u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0627\u062E\u0631 \u0627\u0641\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u062A\u0627\u0631\u064A\u062E \u0627\u062E\u0631 \u0627\u0641\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MainContent_div_25_tr_34_Template, 30, 18, "tr", 92)(35, MainContent_div_25_tr_35_Template, 7, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.clientRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.clientRows || ctx_r3.clientRows.length === 0);
  }
}
function MainContent_div_26_div_82_textarea_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 210);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.note1) || "");
  }
}
function MainContent_div_26_div_82_textarea_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 210);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.note2) || "");
  }
}
function MainContent_div_26_div_82_textarea_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 210);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.note3) || "");
  }
}
function MainContent_div_26_div_82_textarea_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 210);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.note4) || "");
  }
}
function MainContent_div_26_div_82_textarea_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 210);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.note5) || "");
  }
}
function MainContent_div_26_div_82_textarea_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "textarea", 210);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.note6) || "");
  }
}
function MainContent_div_26_div_82_label_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_label_70_Template_label_click_0_listener() {
      const item_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected(item_r9, "comms_lang"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.classification == null ? null : ctx_r3.selectedPerson.classification.communicationLanguageId) === item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r9.id)("checked", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.classification == null ? null : ctx_r3.selectedPerson.classification.communicationLanguageId) === item_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r9.name);
  }
}
function MainContent_div_26_div_82_label_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_label_76_Template_label_click_0_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected(item_r11, "gender"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.classification == null ? null : ctx_r3.selectedPerson.classification.genderId) === item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", item_r11.id)("checked", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.classification == null ? null : ctx_r3.selectedPerson.classification.genderId) === item_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r11.name);
  }
}
function MainContent_div_26_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 185)(2, "div", 186)(3, "div", 187)(4, "div", 111)(5, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0627\u0644\u0642\u0637\u0627\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 111)(9, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 111)(13, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 111)(17, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0644\u0645\u0633\u062A\u0634\u0627\u0631 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 189)(21, "div", 190)(22, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeNoteTab = 1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeNoteTab = 2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeNoteTab = 3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeNoteTab = 4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A 4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_Template_button_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeNoteTab = 5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u0627\u0644\u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeNoteTab = 6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A 6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MainContent_div_26_div_82_textarea_34_Template, 1, 1, "textarea", 192)(35, MainContent_div_26_div_82_textarea_35_Template, 1, 1, "textarea", 192)(36, MainContent_div_26_div_82_textarea_36_Template, 1, 1, "textarea", 192)(37, MainContent_div_26_div_82_textarea_37_Template, 1, 1, "textarea", 192)(38, MainContent_div_26_div_82_textarea_38_Template, 1, 1, "textarea", 192)(39, MainContent_div_26_div_82_textarea_39_Template, 1, 1, "textarea", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 193)(41, "div", 194)(42, "div", 144)(43, "div", 195)(44, "div", 111)(45, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0648\u0631\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 111)(50, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u0644\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 111)(55, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0633\u062D\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 111)(60, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u062A\u0627\u0631\u064A\u062E \u0623\u0648\u0644 \u0648\u0631\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 197)(65, "div", 198)(66, "div", 144)(67, "label", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "\u0644\u063A\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, MainContent_div_26_div_82_label_70_Template, 4, 5, "label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 198)(72, "div", 144)(73, "label", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, MainContent_div_26_div_82_label_76_Template, 4, 5, "label", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 202)(78, "div", 189)(79, "div", 203)(80, "div", 111)(81, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_82_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openLookup("court"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 189)(88, "h3", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0633\u0631\u064A\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 35)(91, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "\u062D\u0641\u0638");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "\u0643\u0634\u0641 \u062D\u0633\u0627\u0628 \u0633\u064A\u0627\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\u0628\u0631\u0627\u0621\u0629 \u0630\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "\u0627\u0633\u062A\u0645\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "button", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0639\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.mdName) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.lawyerName) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.name) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.advisorName) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeNoteTab === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeNoteTab === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeNoteTab === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeNoteTab === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeNoteTab === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeNoteTab === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeNoteTab === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeNoteTab === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeNoteTab === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeNoteTab === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeNoteTab === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeNoteTab === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](48, 29, ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.dateAdded, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](53, 32, ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.dateAdded, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](58, 35, ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.dateFinished, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](63, 38, ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.dateAdded, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.comms_lang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.courtName) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
  }
}
function MainContent_div_26_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 214)(1, "div", 215)(2, "div", 216)(3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629 \u0644\u0643\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0645\u0633\u062F\u062F \u0644\u0643\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0643\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0627\u0644\u0631\u0633\u0648\u0645 \u0644\u0643\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0634\u0627\u0645\u0644 \u0627\u0644\u0631\u0633\u0648\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u0627\u0644\u0627\u062C\u0631\u0627\u0621\u0627\u062A \u0644\u0643\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0643\u0644 \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 216)(38, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629 \u0644\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u0627\u0644\u0645\u0633\u062F\u062F \u0644\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u0627\u0644\u0631\u0633\u0648\u0645 \u0644\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0634\u0627\u0645\u0644 \u0627\u0644\u0631\u0633\u0648\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u0627\u0644\u0627\u062C\u0631\u0627\u0621\u0627\u062A \u0644\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0644\u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 14, ctx_r3.totals.claimAll, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 17, ctx_r3.totals.paidAll, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 20, ctx_r3.totals.remainingAll, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 23, ctx_r3.totals.feesAll, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 26, ctx_r3.totals.remainingAll + ctx_r3.totals.feesAll, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.totals.proceduresAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](34, 29, ctx_r3.totals.remainingAll, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](40, 32, (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.claim) || 0, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](45, 35, (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.paid) || 0, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](50, 38, (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.remaining) || 0, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](55, 41, (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.fees) || 0, "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](60, 44, ((ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.remaining) || 0) + ((ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.fees) || 0), "1.3-3"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](69, 47, (ctx_r3.selectedFile == null ? null : ctx_r3.selectedFile.remaining) || 0, "1.3-3"));
  }
}
function MainContent_div_26_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 225)(1, "div", 226)(2, "div", 227)(3, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "h3", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u062A\u0648\u0644\u064A\u062F \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0642\u0645 \u0628\u0625\u0639\u062F\u0627\u062F \u0648\u062A\u062C\u0647\u064A\u0632 \u0631\u0627\u0628\u0637 \u0627\u0644\u062F\u0641\u0639 \u0644\u0625\u0631\u0633\u0627\u0644\u0647 \u0644\u0644\u0639\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 204)(12, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_84_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      ctx_r3.paymentForm.type = "company";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.generateLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " \u0631\u0627\u0628\u0637 \u0627\u0644\u0634\u0631\u0643\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_84_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      ctx_r3.paymentForm.type = "office";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.generateLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0643\u062A\u0628 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 234)(17, "div", 216)(18, "div", 195)(19, "div", 235)(20, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0643\u0648\u062F \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 235)(24, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 235)(28, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 195)(32, "div", 235)(33, "label", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u0627\u0644\u0645\u0628\u0644\u063A (\u062F.\u0643)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_84_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.paymentForm.amount, $event) || (ctx_r3.paymentForm.amount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MainContent_div_26_div_84_Template_input_ngModelChange_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.generateLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 235)(37, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u0627\u0644\u0645\u0633\u062A\u0641\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 216)(41, "div", 235)(42, "label", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u0631\u0642\u0645 \u0627\u0644\u0648\u0627\u062A\u0633\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 44)(45, "input", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_84_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.paymentForm.whatsapp, $event) || (ctx_r3.paymentForm.whatsapp = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "svg", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "path", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 246)(49, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\u0627\u0644\u0644\u063A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 204)(52, "button", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_84_Template_button_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      ctx_r3.paymentForm.language = "arabic";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.generateLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " \u0627\u0644\u0639\u0631\u0628\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_84_Template_button_click_54_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      ctx_r3.paymentForm.language = "english";
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.generateLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 248)(57, "label", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "\u0627\u0644\u0631\u0627\u0628\u0637 \u0627\u0644\u0645\u0648\u0644\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_84_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.copyLink());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "svg", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 246)(65, "label", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u0646\u0635 \u0627\u0644\u0631\u0633\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "textarea", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_84_Template_textarea_ngModelChange_67_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.paymentForm.message, $event) || (ctx_r3.paymentForm.message = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 254)(69, "button", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_84_Template_button_click_69_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.sendWhatsApp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "svg", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "path", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u0625\u0631\u0633\u0627\u0644 \u0639\u0628\u0631 \u0648\u0627\u062A\u0633\u0627\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-indigo-600", ctx_r3.paymentForm.type === "company")("text-white", ctx_r3.paymentForm.type === "company")("bg-slate-100", ctx_r3.paymentForm.type !== "company")("text-slate-600", ctx_r3.paymentForm.type !== "company");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-indigo-600", ctx_r3.paymentForm.type === "office")("text-white", ctx_r3.paymentForm.type === "office")("bg-slate-100", ctx_r3.paymentForm.type !== "office")("text-slate-600", ctx_r3.paymentForm.type !== "office");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.paymentForm.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.paymentForm.civilId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.paymentForm.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.paymentForm.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.paymentForm.claimant);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.paymentForm.whatsapp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-slate-800", ctx_r3.paymentForm.language === "arabic")("border-slate-800", ctx_r3.paymentForm.language === "arabic")("text-white", ctx_r3.paymentForm.language === "arabic")("bg-white", ctx_r3.paymentForm.language !== "arabic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-slate-800", ctx_r3.paymentForm.language === "english")("border-slate-800", ctx_r3.paymentForm.language === "english")("text-white", ctx_r3.paymentForm.language === "english")("bg-white", ctx_r3.paymentForm.language !== "english");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.companyLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.paymentForm.message);
  }
}
function MainContent_div_26_div_85_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_85_tr_22_Template_tr_click_0_listener() {
      const row_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      const debtModal_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](56);
      ctx_r3.selectFile(row_r14);
      ctx_r3.selectDebtForModal(row_r14);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](debtModal_r15.showModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r14.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r14.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r14.debtReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, row_r14.claim));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, row_r14.paid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, row_r14.remaining));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r14.lawyerName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r14.courtName);
  }
}
function MainContent_div_26_div_85_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u064A\u0648\u0646 \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0647 \u0627\u0644\u0641\u0626\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 258)(1, "div", 87)(2, "table", 88)(3, "thead")(4, "tr", 89)(5, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0633\u0628\u0628 \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0627\u0644\u0645\u0633\u062F\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0644\u0645\u062D\u0627\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MainContent_div_26_div_85_tr_22_Template, 20, 14, "tr", 259)(23, MainContent_div_26_div_85_tr_23_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.clientRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.clientRows || ctx_r3.clientRows.length === 0);
  }
}
function MainContent_div_26_div_86_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_86_tr_25_Template_tr_click_0_listener() {
      const p_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      const paymentModal_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
      ctx_r3.selectPaymentForModal(p_r17);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](paymentModal_r18.showModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 276)(16, "span", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, p_r17.dateAdded, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 10, p_r17.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r17.paymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r17.userAddedName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r17.salesAgent || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r17.jouralEntry || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r17.fileStatusAfter || "-", " ");
  }
}
function MainContent_div_26_div_86_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u062F\u0641\u0639\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_86_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 279)(1, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const a_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, a_r19.dateAdded, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, a_r19.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](a_r19.amountType);
  }
}
function MainContent_div_26_div_86_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0628\u0627\u0644\u063A \u0625\u0636\u0627\u0641\u064A\u0629 \u0645\u0633\u062C\u0644\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 266)(1, "div")(2, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0633\u062C\u0644 \u0627\u0644\u062F\u0641\u0639\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 87)(7, "table", 88)(8, "thead")(9, "tr", 89)(10, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0627\u0644\u0645\u0628\u0644\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0627\u0644\u0648\u0633\u064A\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0628\u0648\u0627\u0633\u0637\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0645\u0646\u062F\u0648\u0628 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0631\u0642\u0645 \u0627\u0644\u0633\u0646\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641 \u0628\u0639\u062F \u0627\u0644\u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MainContent_div_26_div_86_tr_25_Template, 18, 12, "tr", 270)(26, MainContent_div_26_div_86_tr_26_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div")(28, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0625\u0636\u0627\u0641\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 87)(33, "table", 88)(34, "thead")(35, "tr", 89)(36, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\u0627\u0644\u0645\u0628\u0644\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, MainContent_div_26_div_86_tr_43_Template, 9, 8, "tr", 272)(44, MainContent_div_26_div_86_tr_44_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.payments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.payments || ctx_r3.payments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.additionalAmounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.additionalAmounts || ctx_r3.additionalAmounts.length === 0);
  }
}
function MainContent_div_26_div_87_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 288)(1, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const n_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r20.autoNumberValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r20.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r20.caseRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r20.claimant);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](n_r20.note);
  }
}
function MainContent_div_26_div_87_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0642\u0627\u0645 \u0622\u0644\u064A\u0629 \u0645\u0633\u062C\u0644\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_87_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 292)(1, "div", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", c_r21.department, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r21.classification);
  }
}
function MainContent_div_26_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 266)(1, "div")(2, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0622\u0644\u064A\u0629 \u0648\u0627\u0644\u0645\u0631\u0627\u062C\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 87)(7, "table", 88)(8, "thead")(9, "tr", 89)(10, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0627\u0644\u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0627\u0644\u0645\u0631\u062C\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0627\u0644\u062E\u0635\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MainContent_div_26_div_87_tr_21_Template, 11, 5, "tr", 284)(22, MainContent_div_26_div_87_tr_22_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div")(24, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "span", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MainContent_div_26_div_87_div_29_Template, 5, 2, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.autoNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.autoNumbers || ctx_r3.autoNumbers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.classifications);
  }
}
function MainContent_div_26_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0634\u064A\u0643\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u062D\u0627\u0644\u064A\u0627\u064B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MainContent_div_26_div_89_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 299)(1, "div", 227)(2, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\uD83D\uDCC4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_89_div_2_Template_button_click_10_listener() {
      const file_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openAttachment(file_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0641\u062A\u062D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", file_r23.attachType || "\u0645\u0631\u0641\u0642", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 2, file_r23.dateAdded, "yyyy-MM-dd"));
  }
}
function MainContent_div_26_div_89_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0631\u0641\u0642\u0627\u062A \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MainContent_div_26_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 258)(1, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainContent_div_26_div_89_div_2_Template, 12, 5, "div", 297)(3, MainContent_div_26_div_89_div_3_Template, 2, 0, "div", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.attachments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.attachments || ctx_r3.attachments.length === 0);
  }
}
function MainContent_div_26_div_90_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 288)(1, "td", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 276)(5, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 276)(10, "div", 256)(11, "span", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const a_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 6, a_r24.actionDate, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](10, _c3, a_r24.action === "ADD" || a_r24.action === "INSERT", a_r24.action === "UPDATE", a_r24.action === "DELETE", !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2).includes(a_r24.action)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](a_r24.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](a_r24.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((a_r24.userName == null ? null : a_r24.userName.charAt(0)) || "U");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](a_r24.userName);
  }
}
function MainContent_div_26_div_90_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u062C\u0644\u0627\u062A \u062A\u062F\u0642\u064A\u0642 \u0645\u062A\u0627\u062D\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 266)(1, "div")(2, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0633\u062C\u0644 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A (Audit)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 87)(7, "table", 88)(8, "thead")(9, "tr", 89)(10, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0627\u0644\u0648\u0635\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MainContent_div_26_div_90_tr_19_Template, 15, 15, "tr", 284)(20, MainContent_div_26_div_90_tr_20_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.audits);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.audits || ctx_r3.audits.length === 0);
  }
}
function MainContent_div_26_div_91_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 313)(1, "div", 314)(2, "div", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 318)(11, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0628\u0648\u0627\u0633\u0637\u0629:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 320)(15, "div", 321)(16, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0627\u0644\u0648\u0633\u064A\u0644\u0629:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 321)(21, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const s_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 8, s_r25.dateAdded, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](14, _c4, s_r25.connectedStatus === "\u062A\u0645 \u0627\u0644\u0627\u062A\u0635\u0627\u0644", s_r25.connectedStatus === "\u0644\u0627 \u064A\u0631\u062F", s_r25.connectedStatus === "\u0631\u0642\u0645 \u062E\u0637\u0623"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r25.connectedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 11, s_r25.promiseAmount, "1.3-3"), " \u062F.\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r25.userAddedName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r25.contactMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r25.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r25.notes || "\u0644\u0627 \u064A\u0648\u062C\u062F \u0645\u0644\u0627\u062D\u0638\u0627\u062A", " ");
  }
}
function MainContent_div_26_div_91_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 325)(1, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u0641\u0627\u062F\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MainContent_div_26_div_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 258)(1, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MainContent_div_26_div_91_div_2_Template, 27, 18, "div", 311)(3, MainContent_div_26_div_91_div_3_Template, 4, 0, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.callcenterStatements);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.callcenterStatements.length === 0);
  }
}
function MainContent_div_26_div_92_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 375);
  }
}
function MainContent_div_26_div_92_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MainContent_div_26_div_92_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r27.name);
  }
}
function MainContent_div_26_div_92_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r28.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r28.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r28.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r28.statusName);
  }
}
function MainContent_div_26_div_92_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_49_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0645\u064A\u0644", ctx_r3.categoryHistories["client"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["client"] == null ? null : ctx_r3.categoryHistories["client"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r30.name);
  }
}
function MainContent_div_26_div_92_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r31.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r31.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r31.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r31.statusName);
  }
}
function MainContent_div_26_div_92_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_82_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629", ctx_r3.categoryHistories["claim"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["claim"] == null ? null : ctx_r3.categoryHistories["claim"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r33.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r33.name);
  }
}
function MainContent_div_26_div_92_tr_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r34.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r34.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r34.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r34.statusName);
  }
}
function MainContent_div_26_div_92_tr_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_115_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u062D\u0627\u0644\u0629 \u0627\u0644\u0633\u062F\u0627\u062F", ctx_r3.categoryHistories["payment"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["payment"] == null ? null : ctx_r3.categoryHistories["payment"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_130_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r36.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r36.name);
  }
}
function MainContent_div_26_div_92_tr_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r37.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r37.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r37.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r37.statusName);
  }
}
function MainContent_div_26_div_92_tr_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_148_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641", ctx_r3.categoryHistories["file"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["file"] == null ? null : ctx_r3.categoryHistories["file"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r39.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r39.name);
  }
}
function MainContent_div_26_div_92_tr_179_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r40.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r40.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r40.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r40.statusName);
  }
}
function MainContent_div_26_div_92_tr_180_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_181_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_181_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0627\u0644\u0625\u062C\u0631\u0627\u0621", ctx_r3.categoryHistories["action"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["action"] == null ? null : ctx_r3.categoryHistories["action"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r42.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r42.name);
  }
}
function MainContent_div_26_div_92_tr_212_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r43.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r43.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r43.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r43.statusName);
  }
}
function MainContent_div_26_div_92_tr_213_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_214_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_214_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629", ctx_r3.categoryHistories["followup"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["followup"] == null ? null : ctx_r3.categoryHistories["followup"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_229_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r45.name);
  }
}
function MainContent_div_26_div_92_tr_245_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r46.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r46.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r46.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r46.statusName);
  }
}
function MainContent_div_26_div_92_tr_246_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_247_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_247_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629", ctx_r3.categoryHistories["internal"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["internal"] == null ? null : ctx_r3.categoryHistories["internal"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_262_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r48.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r48.name);
  }
}
function MainContent_div_26_div_92_tr_278_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r49.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r49.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r49.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r49.statusName);
  }
}
function MainContent_div_26_div_92_tr_279_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_280_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_280_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r50);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062F\u0646\u064A\u0629", ctx_r3.categoryHistories["civil"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["civil"] == null ? null : ctx_r3.categoryHistories["civil"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_295_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r51.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r51.name);
  }
}
function MainContent_div_26_div_92_tr_311_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r52.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r52.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r52.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r52.statusName);
  }
}
function MainContent_div_26_div_92_tr_312_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_313_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_313_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644", ctx_r3.categoryHistories["contact"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["contact"] == null ? null : ctx_r3.categoryHistories["contact"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_328_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r54.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r54.name);
  }
}
function MainContent_div_26_div_92_tr_344_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r55.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r55.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r55.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r55.statusName);
  }
}
function MainContent_div_26_div_92_tr_345_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_346_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_346_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r56);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0639\u0627\u0648\u0646", ctx_r3.categoryHistories["cooperation"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["cooperation"] == null ? null : ctx_r3.categoryHistories["cooperation"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_391_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r57.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r57.name);
  }
}
function MainContent_div_26_div_92_tr_407_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r58.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r58.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r58.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r58.statusName);
  }
}
function MainContent_div_26_div_92_tr_408_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_409_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_409_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062F\u0646\u064A\u0629", ctx_r3.categoryHistories["civil"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["civil"] == null ? null : ctx_r3.categoryHistories["civil"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_424_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r60.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r60.name);
  }
}
function MainContent_div_26_div_92_tr_440_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r61.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r61.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r61.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r61.statusName);
  }
}
function MainContent_div_26_div_92_tr_441_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_442_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_442_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r62);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644", ctx_r3.categoryHistories["contact"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["contact"] == null ? null : ctx_r3.categoryHistories["contact"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_option_457_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", item_r63.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r63.name);
  }
}
function MainContent_div_26_div_92_tr_473_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "span", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, h_r64.dateAdded, "dd/MM"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", h_r64.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r64.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r64.statusName);
  }
}
function MainContent_div_26_div_92_tr_474_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_92_div_475_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 379)(1, "button", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_div_475_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r65);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0639\u0627\u0648\u0646", ctx_r3.categoryHistories["cooperation"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0632\u064A\u062F (", (ctx_r3.categoryHistories["cooperation"] == null ? null : ctx_r3.categoryHistories["cooperation"].length) || 0, ") ");
  }
}
function MainContent_div_26_div_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 327)(1, "div", 328)(2, "div", 227)(3, "div", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \uD83C\uDFF7\uFE0F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "h2", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0644\u0648\u062D\u0629 \u062A\u062D\u0643\u0645 \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u062F\u0627\u0631\u0629 \u062D\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 256)(11, "button", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.saveAllClassifications());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MainContent_div_26_div_92_span_12_Template, 1, 0, "span", 333)(13, MainContent_div_26_div_92_span_13_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u0643\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 334)(17, "div", 335)(18, "div", 336)(19, "div", 256)(20, "div", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\uD83D\uDC64");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0639\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Client Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 204)(28, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.clientStatusId, $event) || (ctx_r3.selectedPerson.classification.clientStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MainContent_div_26_div_92_option_31_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.clientStatusId,
        name: ""
      }, "client"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 344)(36, "div", 345)(37, "table", 346)(38, "thead")(39, "tr")(40, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, MainContent_div_26_div_92_tr_47_Template, 9, 7, "tr", 153)(48, MainContent_div_26_div_92_tr_48_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, MainContent_div_26_div_92_div_49_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 335)(51, "div", 336)(52, "div", 256)(53, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u2696\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div")(56, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Claim Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 204)(61, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_61_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.claimStatusId, $event) || (ctx_r3.selectedPerson.classification.claimStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, MainContent_div_26_div_92_option_64_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.claimStatusId,
        name: ""
      }, "claim"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 344)(69, "div", 345)(70, "table", 346)(71, "thead")(72, "tr")(73, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, MainContent_div_26_div_92_tr_80_Template, 9, 7, "tr", 153)(81, MainContent_div_26_div_92_tr_81_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, MainContent_div_26_div_92_div_82_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 335)(84, "div", 336)(85, "div", 256)(86, "div", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\uD83D\uDCB0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div")(89, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Payment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 204)(94, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_94_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.paymentStatusId, $event) || (ctx_r3.selectedPerson.classification.paymentStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, MainContent_div_26_div_92_option_97_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_98_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.paymentStatusId,
        name: ""
      }, "payment"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 344)(102, "div", 345)(103, "table", 346)(104, "thead")(105, "tr")(106, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, MainContent_div_26_div_92_tr_113_Template, 9, 7, "tr", 153)(114, MainContent_div_26_div_92_tr_114_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, MainContent_div_26_div_92_div_115_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 335)(117, "div", 336)(118, "div", 256)(119, "div", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "\uD83D\uDCC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div")(122, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "File Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 204)(127, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_127_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.fileStatusId, $event) || (ctx_r3.selectedPerson.classification.fileStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](130, MainContent_div_26_div_92_option_130_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_131_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.fileStatusId,
        name: ""
      }, "file"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 344)(135, "div", 345)(136, "table", 346)(137, "thead")(138, "tr")(139, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](146, MainContent_div_26_div_92_tr_146_Template, 9, 7, "tr", 153)(147, MainContent_div_26_div_92_tr_147_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, MainContent_div_26_div_92_div_148_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 335)(150, "div", 336)(151, "div", 256)(152, "div", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "\u26A1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div")(155, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Action Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 204)(160, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_160_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.actionStatusId, $event) || (ctx_r3.selectedPerson.classification.actionStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](163, MainContent_div_26_div_92_option_163_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_164_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.actionStatusId,
        name: ""
      }, "action"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 344)(168, "div", 345)(169, "table", 346)(170, "thead")(171, "tr")(172, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](179, MainContent_div_26_div_92_tr_179_Template, 9, 7, "tr", 153)(180, MainContent_div_26_div_92_tr_180_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](181, MainContent_div_26_div_92_div_181_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 335)(183, "div", 336)(184, "div", 256)(185, "div", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "\uD83D\uDCE1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div")(188, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Follow-up Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 204)(193, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_193_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.followUpStatusId, $event) || (ctx_r3.selectedPerson.classification.followUpStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](196, MainContent_div_26_div_92_option_196_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_197_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.followUpStatusId,
        name: ""
      }, "followup"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 344)(201, "div", 345)(202, "table", 346)(203, "thead")(204, "tr")(205, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](206, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](212, MainContent_div_26_div_92_tr_212_Template, 9, 7, "tr", 153)(213, MainContent_div_26_div_92_tr_213_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](214, MainContent_div_26_div_92_div_214_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 335)(216, "div", 336)(217, "div", 256)(218, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "\uD83C\uDFE0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div")(221, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, "Internal Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 204)(226, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_226_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.internalStatusId, $event) || (ctx_r3.selectedPerson.classification.internalStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](229, MainContent_div_26_div_92_option_229_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_230_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.internalStatusId,
        name: ""
      }, "internal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "div", 344)(234, "div", 345)(235, "table", 346)(236, "thead")(237, "tr")(238, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](245, MainContent_div_26_div_92_tr_245_Template, 9, 7, "tr", 153)(246, MainContent_div_26_div_92_tr_246_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](247, MainContent_div_26_div_92_div_247_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 335)(249, "div", 336)(250, "div", 256)(251, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "\uD83D\uDCDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div")(254, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062F\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "Civil Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "div", 204)(259, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_259_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.civilStatusId, $event) || (ctx_r3.selectedPerson.classification.civilStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](262, MainContent_div_26_div_92_option_262_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_263_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.civilStatusId,
        name: ""
      }, "civil"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 344)(267, "div", 345)(268, "table", 346)(269, "thead")(270, "tr")(271, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](278, MainContent_div_26_div_92_tr_278_Template, 9, 7, "tr", 153)(279, MainContent_div_26_div_92_tr_279_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](280, MainContent_div_26_div_92_div_280_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 335)(282, "div", 336)(283, "div", 256)(284, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "\uD83D\uDCDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div")(287, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Contact Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 204)(292, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_292_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.contactStatusId, $event) || (ctx_r3.selectedPerson.classification.contactStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](295, MainContent_div_26_div_92_option_295_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](296, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_296_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.contactStatusId,
        name: ""
      }, "contact"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 344)(300, "div", 345)(301, "table", 346)(302, "thead")(303, "tr")(304, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](311, MainContent_div_26_div_92_tr_311_Template, 9, 7, "tr", 153)(312, MainContent_div_26_div_92_tr_312_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](313, MainContent_div_26_div_92_div_313_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 335)(315, "div", 336)(316, "div", 256)(317, "div", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "\uD83E\uDD1D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div")(320, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0639\u0627\u0648\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Cooperation Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "div", 204)(325, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_325_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.cooperationStatusId, $event) || (ctx_r3.selectedPerson.classification.cooperationStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](328, MainContent_div_26_div_92_option_328_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_329_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.cooperationStatusId,
        name: ""
      }, "cooperation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "div", 344)(333, "div", 345)(334, "table", 346)(335, "thead")(336, "tr")(337, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](344, MainContent_div_26_div_92_tr_344_Template, 9, 7, "tr", 153)(345, MainContent_div_26_div_92_tr_345_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](346, MainContent_div_26_div_92_div_346_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 358)(348, "div", 359)(349, "div", 256)(350, "div", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, "\uD83C\uDFF7\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "div")(353, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "\u0627\u0644\u062E\u0635\u0645 \u0648\u0627\u0644\u0642\u0628\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "Discount & Acceptance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "button", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_357_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0633\u062C\u0644 \u0627\u0644\u062E\u0635\u0645 \u0648\u0627\u0644\u0642\u0628\u0648\u0644", ctx_r3.discountAcceptanceHistory));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, " \uD83D\uDD5D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "div", 246)(360, "div", 204)(361, "div", 361)(362, "input", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_input_ngModelChange_362_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.discount, $event) || (ctx_r3.selectedPerson.classification.discount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "span", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "select", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_365_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.acceptance, $event) || (ctx_r3.selectedPerson.classification.acceptance = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "option", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "\u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "option", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "\u2705 \u0642\u0628\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "option", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](371, "\u274C \u0631\u0641\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "option", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "\u23F3 \u0645\u0639\u0644\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "button", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_374_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.saveDiscountAcceptance());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](376, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 335)(378, "div", 336)(379, "div", 256)(380, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "\uD83D\uDCDC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "div")(383, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](384, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u062F\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Civil Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 204)(388, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_388_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.civilStatusId, $event) || (ctx_r3.selectedPerson.classification.civilStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](390, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](391, MainContent_div_26_div_92_option_391_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_392_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.civilStatusId,
        name: ""
      }, "civil"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 344)(396, "div", 345)(397, "table", 346)(398, "thead")(399, "tr")(400, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](407, MainContent_div_26_div_92_tr_407_Template, 9, 7, "tr", 153)(408, MainContent_div_26_div_92_tr_408_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](409, MainContent_div_26_div_92_div_409_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "div", 335)(411, "div", 336)(412, "div", 256)(413, "div", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "\uD83D\uDCDE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "div")(416, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0648\u0627\u0635\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Contact Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div", 204)(421, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_421_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.contactStatusId, $event) || (ctx_r3.selectedPerson.classification.contactStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](424, MainContent_div_26_div_92_option_424_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_425_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.contactStatusId,
        name: ""
      }, "contact"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "div", 344)(429, "div", 345)(430, "table", 346)(431, "thead")(432, "tr")(433, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](440, MainContent_div_26_div_92_tr_440_Template, 9, 7, "tr", 153)(441, MainContent_div_26_div_92_tr_441_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](442, MainContent_div_26_div_92_div_442_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "div", 335)(444, "div", 336)(445, "div", 256)(446, "div", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "\uD83E\uDD1D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "div")(449, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "\u062D\u0627\u0644\u0629 \u0627\u0644\u062A\u0639\u0627\u0648\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Cooperation Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 204)(454, "select", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_454_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.cooperationStatusId, $event) || (ctx_r3.selectedPerson.classification.cooperationStatusId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "option", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](457, MainContent_div_26_div_92_option_457_Template, 2, 2, "option", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_458_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onLookupSelected({
        id: ctx_r3.selectedPerson.classification.cooperationStatusId,
        name: ""
      }, "cooperation"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 344)(462, "div", 345)(463, "table", 346)(464, "thead")(465, "tr")(466, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](473, MainContent_div_26_div_92_tr_473_Template, 9, 7, "tr", 153)(474, MainContent_div_26_div_92_tr_474_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](475, MainContent_div_26_div_92_div_475_Template, 3, 1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 358)(477, "div", 359)(478, "div", 256)(479, "div", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "\uD83C\uDFF7\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "div")(482, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "\u0627\u0644\u062E\u0635\u0645 \u0648\u0627\u0644\u0642\u0628\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Discount & Acceptance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "button", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_486_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0633\u062C\u0644 \u0627\u0644\u062E\u0635\u0645 \u0648\u0627\u0644\u0642\u0628\u0648\u0644", ctx_r3.discountAcceptanceHistory));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, " \uD83D\uDD5D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "div", 246)(489, "div", 204)(490, "div", 361)(491, "input", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_input_ngModelChange_491_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.discount, $event) || (ctx_r3.selectedPerson.classification.discount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "span", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "select", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_select_ngModelChange_494_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.acceptance, $event) || (ctx_r3.selectedPerson.classification.acceptance = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "option", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "\u0627\u0644\u062D\u0627\u0644\u0629...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "option", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](498, "\u2705 \u0642\u0628\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "option", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "\u274C \u0631\u0641\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "option", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, "\u23F3 \u0645\u0639\u0644\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "button", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_503_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.saveDiscountAcceptance());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "div", 358)(507, "div", 359)(508, "div", 256)(509, "div", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, "\uD83D\uDCBC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "div")(512, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](513, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0648\u0638\u064A\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](515, "Job Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "button", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_516_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0633\u062C\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0648\u0638\u064A\u0641\u0629", ctx_r3.categoryHistories["work"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, " \uD83D\uDD5D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "div", 204)(519, "input", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_input_ngModelChange_519_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.work, $event) || (ctx_r3.selectedPerson.work = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "button", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_520_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.saveHousingIncome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "div", 358)(524, "div", 359)(525, "div", 256)(526, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "\uD83D\uDCB0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "div")(529, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "\u0627\u0644\u062F\u062E\u0644 \u0648\u0627\u0644\u0631\u0627\u062A\u0628");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](532, "Income & Salary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "button", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_533_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.openFullHistory("\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0644 \u0648\u0627\u0644\u0631\u0627\u062A\u0628", ctx_r3.housingIncomeHistory));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](534, " \uD83D\uDD5D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](535, "div", 246)(536, "div", 204)(537, "input", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_input_ngModelChange_537_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.salaryDate, $event) || (ctx_r3.selectedPerson.classification.salaryDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](538, "button", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_92_Template_button_click_538_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.saveHousingIncome());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "textarea", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_92_Template_textarea_ngModelChange_541_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.selectedPerson.classification.incomeNotes, $event) || (ctx_r3.selectedPerson.classification.incomeNotes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.clientStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["client"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["client"] == null ? null : ctx_r3.categoryHistories["client"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["client"] == null ? null : ctx_r3.categoryHistories["client"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.claimStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.claim);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["claim"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["claim"] == null ? null : ctx_r3.categoryHistories["claim"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["claim"] == null ? null : ctx_r3.categoryHistories["claim"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.paymentStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.payment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["payment"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["payment"] == null ? null : ctx_r3.categoryHistories["payment"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["payment"] == null ? null : ctx_r3.categoryHistories["payment"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.fileStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["file"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["file"] == null ? null : ctx_r3.categoryHistories["file"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["file"] == null ? null : ctx_r3.categoryHistories["file"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.actionStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["action"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["action"] == null ? null : ctx_r3.categoryHistories["action"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["action"] == null ? null : ctx_r3.categoryHistories["action"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.followUpStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.followup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["followup"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["followup"] == null ? null : ctx_r3.categoryHistories["followup"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["followup"] == null ? null : ctx_r3.categoryHistories["followup"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.internalStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.interior);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["internal"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["internal"] == null ? null : ctx_r3.categoryHistories["internal"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["internal"] == null ? null : ctx_r3.categoryHistories["internal"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.civilStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.civil);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["civil"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["civil"] == null ? null : ctx_r3.categoryHistories["civil"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["civil"] == null ? null : ctx_r3.categoryHistories["civil"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.contactStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["contact"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["contact"] == null ? null : ctx_r3.categoryHistories["contact"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["contact"] == null ? null : ctx_r3.categoryHistories["contact"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.cooperationStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.cooperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["cooperation"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["cooperation"] == null ? null : ctx_r3.categoryHistories["cooperation"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["cooperation"] == null ? null : ctx_r3.categoryHistories["cooperation"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.acceptance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.civilStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.civil);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["civil"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["civil"] == null ? null : ctx_r3.categoryHistories["civil"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["civil"] == null ? null : ctx_r3.categoryHistories["civil"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.contactStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["contact"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["contact"] == null ? null : ctx_r3.categoryHistories["contact"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["contact"] == null ? null : ctx_r3.categoryHistories["contact"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.cooperationStatusId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.lookupLists.cooperation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.categoryHistories["cooperation"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r3.categoryHistories["cooperation"] == null ? null : ctx_r3.categoryHistories["cooperation"].length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx_r3.categoryHistories["cooperation"] == null ? null : ctx_r3.categoryHistories["cooperation"].length) || 0) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.acceptance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.work);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.salaryDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.selectedPerson.classification.incomeNotes);
  }
}
function MainContent_div_26_div_123_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 403)(10, "span", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r66 = ctx.$implicit;
    const i_r67 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r67 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r66.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r66.relation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r66.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c5, row_r66.status === "\u0646\u0634\u0637", row_r66.status !== "\u0646\u0634\u0637"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r66.status, " ");
  }
}
function MainContent_div_26_div_123_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0642\u0627\u0645 \u0645\u0633\u062C\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 399)(1, "div", 400)(2, "table", 401)(3, "thead")(4, "tr")(5, "th", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0644\u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0627\u0644\u0639\u0644\u0627\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0645\u0635\u062F\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MainContent_div_26_div_123_tr_16_Template, 12, 9, "tr", 153)(17, MainContent_div_26_div_123_tr_17_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.numbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.numbers || ctx_r3.numbers.length === 0);
  }
}
function MainContent_div_26_div_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 408)(1, "div", 409)(2, "div", 111)(3, "label", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_124_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.addForm.phone, $event) || (ctx_r3.addForm.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 111)(7, "label", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0644\u0639\u0644\u0627\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_124_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.addForm.relation, $event) || (ctx_r3.addForm.relation = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 111)(11, "label", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0645\u0635\u062F\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_124_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.addForm.source, $event) || (ctx_r3.addForm.source = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 111)(15, "label", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "select", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_div_124_Template_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.addForm.status, $event) || (ctx_r3.addForm.status = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "option", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0646\u0634\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u063A\u064A\u0631 \u0646\u0634\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0645\u063A\u0644\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 418)(25, "button", 419);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_124_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeTab = "numbers");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0625\u0644\u063A\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_124_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r68);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.saveNumber());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\uD83D\uDCBE \u062D\u0641\u0638 \u0627\u0644\u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.addForm.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.addForm.relation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.addForm.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.addForm.status);
  }
}
function MainContent_div_26_ng_container_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_ng_container_132_Template_button_click_1_listener() {
      const row_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r69).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.selectAction(row_r70.left));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_ng_container_132_Template_button_click_3_listener() {
      const row_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r69).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.selectAction(row_r70.right));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r70 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-primary", ctx_r3.selectedAction === row_r70.left)("border-primary", ctx_r3.selectedAction === row_r70.left)("text-white", ctx_r3.selectedAction === row_r70.left)("bg-white", ctx_r3.selectedAction !== row_r70.left)("dark:bg-slate-800", ctx_r3.selectedAction !== row_r70.left)("border-slate-200", ctx_r3.selectedAction !== row_r70.left)("dark:border-slate-700", ctx_r3.selectedAction !== row_r70.left)("text-slate-700", ctx_r3.selectedAction !== row_r70.left)("dark:text-slate-300", ctx_r3.selectedAction !== row_r70.left);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r70.left, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-primary", ctx_r3.selectedAction === row_r70.right)("border-primary", ctx_r3.selectedAction === row_r70.right)("text-white", ctx_r3.selectedAction === row_r70.right)("bg-white", ctx_r3.selectedAction !== row_r70.right)("dark:bg-slate-800", ctx_r3.selectedAction !== row_r70.right)("border-slate-200", ctx_r3.selectedAction !== row_r70.right)("dark:border-slate-700", ctx_r3.selectedAction !== row_r70.right)("text-slate-700", ctx_r3.selectedAction !== row_r70.right)("dark:text-slate-300", ctx_r3.selectedAction !== row_r70.right);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r70.right, " ");
  }
}
function MainContent_div_26_div_249_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 288)(1, "td", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 427);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 428);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const note_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](note_r72.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, note_r72.dateAdded, "yyyy-MM-dd HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](note_r72.noteText);
  }
}
function MainContent_div_26_div_249_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u0633\u062C\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_249_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 423)(2, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 256)(7, "button", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_249_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r71);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.prevNotesPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u25C0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_249_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r71);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.nextNotesPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 87)(18, "table", 88)(19, "thead")(20, "tr", 89)(21, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MainContent_div_26_div_249_tr_28_Template, 8, 6, "tr", 284)(29, MainContent_div_26_div_249_tr_29_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.notesPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u0635\u0641\u062D\u0629 ", ctx_r3.notesPage, " \u0645\u0646 ", ctx_r3.Math.ceil(ctx_r3.notesTotal / ctx_r3.notesPageSize) || 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.notesPage * ctx_r3.notesPageSize >= ctx_r3.notesTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.notes || ctx_r3.notes.length === 0);
  }
}
function MainContent_div_26_div_250_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 432)(1, "td", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 433);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 276)(7, "span", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 276)(26, "div", 438)(27, "span", 439);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ef_r74 = ctx.$implicit;
    const i_r75 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r75 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 12, ef_r74.dateAdded, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ef_r74.connectedStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ef_r74.contactMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ef_r74.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ef_r74.phoneOwner || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 15, ef_r74.promiseAmount) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ef_r74.nextAction || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 17, ef_r74.nextDate, "dd/MM/yyyy") || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", ef_r74.notes || "\u0628\u062F\u0648\u0646 \u0645\u0644\u0627\u062D\u0638\u0627\u062A", "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ef_r74.userAddedName == null ? null : ef_r74.userAddedName.charAt(0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ef_r74.userAddedName);
  }
}
function MainContent_div_26_div_250_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u0641\u0627\u062F\u0627\u062A \u0645\u0633\u062C\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_250_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 429)(2, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0627\u0644\u0625\u0641\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 256)(7, "button", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_250_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r73);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.prevStatementsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u25C0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_250_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r73);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.nextStatementsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 87)(18, "table", 88)(19, "thead")(20, "tr", 89)(21, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0641\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0627\u0644\u0648\u0633\u064A\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u0635\u0627\u062D\u0628 \u0627\u0644\u0647\u0627\u062A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u0627\u0644\u0645\u0628\u0644\u063A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, MainContent_div_26_div_250_tr_44_Template, 31, 20, "tr", 431)(45, MainContent_div_26_div_250_tr_45_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.statementsPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u0635\u0641\u062D\u0629 ", ctx_r3.statementsPage, " \u0645\u0646 ", ctx_r3.Math.ceil(ctx_r3.statementsTotal / ctx_r3.statementsPageSize) || 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.statementsPage * ctx_r3.statementsPageSize >= ctx_r3.statementsTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.callcenterStatements);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.callcenterStatements || ctx_r3.callcenterStatements.length === 0);
  }
}
function MainContent_div_26_div_251_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 446)(1, "td", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 447);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const audit_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, audit_r77.actionDate, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](audit_r77.action);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](audit_r77.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](audit_r77.userName);
  }
}
function MainContent_div_26_div_251_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644 \u0639\u0645\u0644\u064A\u0627\u062A \u0645\u0633\u062C\u0644 \u0644\u0647\u0630\u0647 \u0627\u0644\u0642\u0636\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_251_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 441)(2, "h3", 442);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 256)(5, "button", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_251_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.prevAuditsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u25C0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_251_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r76);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.nextAuditsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "table", 401)(16, "thead")(17, "tr", 443)(18, "th", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0627\u0644\u062D\u062F\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u0627\u0644\u0648\u0635\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, MainContent_div_26_div_251_tr_27_Template, 10, 7, "tr", 445)(28, MainContent_div_26_div_251_tr_28_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.auditsPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u0635\u0641\u062D\u0629 ", ctx_r3.auditsPage, " \u0645\u0646 ", ctx_r3.Math.ceil(ctx_r3.auditsTotal / ctx_r3.auditsPageSize) || 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.auditsPage * ctx_r3.auditsPageSize >= ctx_r3.auditsTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.audits);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.audits.length === 0);
  }
}
function MainContent_div_26_div_252_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 432)(1, "td", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 459)(7, "div", 256)(8, "div", 460);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 461);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 459)(13, "span", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 459)(16, "span", 463);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r79 = ctx.$implicit;
    const i_r80 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx_r3.historyPage - 1) * ctx_r3.historyPageSize + i_r80 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 6, s_r79.dateAdded, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (s_r79.userName == null ? null : s_r79.userName.charAt(0)) || "U", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r79.userName || "\u0645\u0648\u0638\u0641 \u0627\u0644\u0646\u0638\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.splitStatus(s_r79.status).type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.splitStatus(s_r79.status).value, " ");
  }
}
function MainContent_div_26_div_252_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 464)(2, "div", 465)(3, "span", 466);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0633\u062C\u0644 \u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0645\u0633\u062C\u0644 \u0644\u0647\u0630\u0647 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u062D\u062A\u0649 \u0627\u0644\u0622\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function MainContent_div_26_div_252_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 451)(2, "div", 227)(3, "div", 452);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \uD83D\uDCDC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0633\u062C\u0644 \u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 256)(8, "button", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_252_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r78);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.prevHistoryPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u25C0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 455);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_div_252_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r78);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.nextHistoryPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 456)(19, "table", 88)(20, "thead")(21, "tr", 89)(22, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u0648\u0642\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0646\u0648\u0639 \u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u062C\u062F\u064A\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, MainContent_div_26_div_252_tr_33_Template, 18, 9, "tr", 431)(34, MainContent_div_26_div_252_tr_34_Template, 7, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.historyPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u0635\u0641\u062D\u0629 ", ctx_r3.historyPage, " \u0645\u0646 ", ctx_r3.Math.ceil(ctx_r3.statusesTotal / ctx_r3.historyPageSize) || 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.historyPage * ctx_r3.historyPageSize >= ctx_r3.statusesTotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.statuses);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.statuses || ctx_r3.statuses.length === 0);
  }
}
function MainContent_div_26_div_253_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 469)(1, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exec_r81 = ctx.$implicit;
    const i_r82 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r82 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exec_r81.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exec_r81.lastAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exec_r81.lastActionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exec_r81.nextAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exec_r81.nextActionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exec_r81.fileLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exec_r81.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](exec_r81.user);
  }
}
function MainContent_div_26_div_253_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u062A\u0646\u0641\u064A\u0630 \u0645\u062A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_253_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 467);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u062A\u0646\u0641\u064A\u0630\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 87)(6, "table", 88)(7, "thead")(8, "tr", 89)(9, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u062A\u0627\u0631\u064A\u062E \u0622\u062E\u0631 \u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MainContent_div_26_div_253_tr_28_Template, 19, 9, "tr", 468)(29, MainContent_div_26_div_253_tr_29_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.executionsData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.executionsData || ctx_r3.executionsData.length === 0);
  }
}
function MainContent_div_26_div_254_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 469)(1, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const session_r83 = ctx.$implicit;
    const i_r84 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r84 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r83.efadaDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r83.sessionType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r83.decision);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r83.nextSession);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r83.expertsTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](session_r83.notes);
  }
}
function MainContent_div_26_div_254_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A \u0645\u0633\u062C\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_254_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u062C\u0644\u0633\u0627\u062A \u0627\u0644\u0645\u062A\u062F\u0627\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 87)(6, "table", 88)(7, "thead")(8, "tr", 89)(9, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0641\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0646\u0648\u0639 \u0627\u0644\u062C\u0644\u0633\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0627\u0644\u0642\u0631\u0627\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0644\u062C\u0644\u0633\u0629 \u0627\u0644\u0642\u0627\u062F\u0645\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u062A\u0648\u0642\u064A\u062A \u0627\u0644\u062E\u0628\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u062C\u0644\u0633\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MainContent_div_26_div_254_tr_24_Template, 15, 7, "tr", 468)(25, MainContent_div_26_div_254_tr_25_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.traderData);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.traderData || ctx_r3.traderData.length === 0);
  }
}
function MainContent_div_26_div_255_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "h3", 472);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0644\u064A\u0646\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_256_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 475)(1, "td", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 276)(8, "span", 476);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "td", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const file_r85 = ctx.$implicit;
    const i_r86 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r86 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r85.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r85.debtReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", file_r85.fileStatus, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r85.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r85.contractNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, file_r85.claim) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 13, file_r85.paid) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 15, file_r85.remaining) || "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r85.batch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r85.lawyerName);
  }
}
function MainContent_div_26_div_256_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0644\u0641\u0627\u062A \u0645\u062F\u064A\u0648\u0646\u064A\u0629 \u0645\u062A\u0627\u062D\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_256_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 473);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 87)(6, "table", 88)(7, "thead")(8, "tr", 89)(9, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0643\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0633\u0628\u0628 \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0627\u0644\u0645\u062F\u0641\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0631\u0642\u0645 \u0627\u0644\u0628\u0627\u062A\u0634");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0627\u0644\u0645\u0648\u0638\u0641/\u0627\u0644\u0645\u062D\u0627\u0645\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, MainContent_div_26_div_256_tr_32_Template, 27, 17, "tr", 474)(33, MainContent_div_26_div_256_tr_33_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.clientRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.clientRows || ctx_r3.clientRows.length === 0);
  }
}
function MainContent_div_26_div_257_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "h3", 472);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0633\u064A\u062A\u0645 \u0639\u0631\u0636 \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B \u0628\u0639\u062F \u0627\u062E\u062A\u064A\u0627\u0631 \u0627\u0644\u0631\u0642\u0645\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_258_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 469)(1, "td", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 479);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 276)(7, "div", 438)(8, "span", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const sec_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, sec_r87.dateAdded, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sec_r87.noteText);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((sec_r87.userName == null ? null : sec_r87.userName.charAt(0)) || "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sec_r87.userName || "System");
  }
}
function MainContent_div_26_div_258_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_258_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0627\u0644\u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 87)(6, "table", 88)(7, "thead")(8, "tr", 89)(9, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MainContent_div_26_div_258_tr_16_Template, 12, 7, "tr", 468)(17, MainContent_div_26_div_258_tr_17_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.notes || ctx_r3.notes.length === 0);
  }
}
function MainContent_div_26_div_259_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 482)(1, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 483);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const auto_r88 = ctx.$implicit;
    const i_r89 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r89 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](auto_r88.autoNumberValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](auto_r88.type || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](auto_r88.caseRef || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](auto_r88.claimant || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](auto_r88.note || "---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 7, auto_r88.dateAdded, "dd/MM/yyyy"));
  }
}
function MainContent_div_26_div_259_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 485);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0631\u0642\u0627\u0645 \u0622\u0644\u064A\u0629 \u0645\u0633\u062C\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_26_div_259_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 422)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0623\u0631\u0642\u0627\u0645 \u0622\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 87)(6, "table", 88)(7, "thead")(8, "tr", 89)(9, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0627\u0644\u0646\u0648\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0627\u0644\u0645\u0631\u062C\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0644\u0645\u0637\u0627\u0644\u0628/\u0627\u0644\u062E\u0635\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0645\u0644\u0627\u062D\u0638\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MainContent_div_26_div_259_tr_24_Template, 16, 10, "tr", 481)(25, MainContent_div_26_div_259_tr_25_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.autoNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.autoNumbers || ctx_r3.autoNumbers.length === 0);
  }
}
function MainContent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86)(1, "div", 106)(2, "div", 107)(3, "div", 108)(4, "div", 109)(5, "div", 110)(6, "div", 111)(7, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u0627\u0644\u0645\u0648\u0643\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 111)(11, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u0627\u0644\u0639\u0645\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 111)(15, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0627\u0644\u0645\u062F\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 111)(19, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 111)(23, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0627\u0644\u062C\u0646\u0633\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 111)(27, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 111)(31, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u0627\u0644\u0639\u0642\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 111)(35, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 111)(39, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0622\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 111)(43, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u0627\u0644\u0628\u0627\u062A\u0634");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 114)(47, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 115)(51, "div", 109)(52, "div", 4)(53, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("main"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("classification"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " \u062A\u0635\u0646\u064A\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("totalFiles"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " \u0627\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0644\u0641\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("companyLink"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " \u0631\u0627\u0628\u0637 \u0627\u0644\u0634\u0631\u0643\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("legal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " \u0627\u0644\u0631\u0633\u0648\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("files"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_65_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("checks"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " \u0627\u0644\u0634\u064A\u0643\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("attachments"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " \u0627\u0644\u0645\u0631\u0641\u0642\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_69_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("history"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " \u0627\u0644\u062A\u0635\u0646\u064A\u0641\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.changeTab("callcenter"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " \u0625\u0641\u0627\u062F\u0627\u062A \u0627\u0644\u0643\u0648\u0644 \u0633\u0646\u062A\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.exportActiveTabToExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u062A\u0635\u062F\u064A\u0631 \u0625\u0643\u0633\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "svg", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "path", 118)(78, "polyline", 119)(79, "line", 120)(80, "line", 121)(81, "polyline", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, MainContent_div_26_div_82_Template, 101, 41, "div", 7)(83, MainContent_div_26_div_83_Template, 72, 50, "div", 123)(84, MainContent_div_26_div_84_Template, 75, 40, "div", 124)(85, MainContent_div_26_div_85_Template, 24, 2, "div", 125)(86, MainContent_div_26_div_86_Template, 45, 4, "div", 126)(87, MainContent_div_26_div_87_Template, 30, 3, "div", 126)(88, MainContent_div_26_div_88_Template, 2, 0, "div", 127)(89, MainContent_div_26_div_89_Template, 4, 2, "div", 125)(90, MainContent_div_26_div_90_Template, 21, 2, "div", 126)(91, MainContent_div_26_div_91_Template, 4, 2, "div", 125)(92, MainContent_div_26_div_92_Template, 542, 88, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 129)(94, "div", 130)(95, "div", 131)(96, "h3", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " \u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0633\u0631\u064A\u0639\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 35)(100, "button", 134)(101, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "\u2795");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " \u0627\u0636\u0627\u0641\u0629 \u0643\u0634\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 136)(105, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " \u0628\u062D\u062B \u0623\u0631\u0642\u0627\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 137)(109, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\u0628\u062D\u062B \u0633\u0631\u064A\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "\uD83D\uDD0D");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 141)(116, "div", 142)(117, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_117_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeTab = "numbers");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " \u0627\u0644\u0631\u0642\u0645 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_119_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.activeTab = "add");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, " \u0625\u0636\u0627\u0641\u0629 \u0631\u0642\u0645 \u062C\u062F\u064A\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 143)(122, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, MainContent_div_26_div_123_Template, 18, 2, "div", 145)(124, MainContent_div_26_div_124_Template, 29, 4, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 147)(126, "div", 148)(127, "div", 149)(128, "h3", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "\u0648\u0633\u064A\u0644\u0629 \u0627\u0644\u062A\u0641\u0627\u0648\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 151)(131, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](132, MainContent_div_26_ng_container_132_Template, 5, 38, "ng-container", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 154)(134, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "\u062A\u062D\u0644\u064A\u0644 \u0627\u0644\u0625\u0641\u0627\u062F\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 156)(137, "div", 149)(138, "h3", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u062A\u0641\u0627\u0648\u0636");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 151)(141, "div", 158)(142, "div", 159)(143, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_143_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0637\u0644\u0628 \u0645\u0647\u0644\u0629"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_145_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u062A\u0642\u0633\u064A\u0637"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\u062A\u0642\u0633\u064A\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_147_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 159)(150, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_150_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0634\u0643\u0648\u0649"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "\u0634\u0643\u0648\u0649");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_152_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0645\u0631\u0627\u062C\u0639\u0629"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "\u0645\u0631\u0627\u062C\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_154_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 159)(157, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_157_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_159_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_161_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u062E\u0635\u0645"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "\u062E\u0635\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 159)(164, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_164_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0645\u0641\u0635\u0648\u0644"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "\u0645\u0641\u0635\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_166_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0644\u0627 \u064A\u0631\u062F"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "\u0644\u0627 \u064A\u0631\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_168_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0645\u063A\u0644\u0642"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "\u0645\u063A\u0644\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 159)(171, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_171_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_173_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0631\u0642\u0645 \u062E\u0637\u0623"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "\u0631\u0642\u0645 \u062E\u0637\u0623");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_175_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 159)(178, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_178_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_180_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "button", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_182_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.handleResultClick("\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 161)(185, "h5", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, " \u062A\u0641\u0627\u0635\u064A\u0644 \u0625\u0636\u0627\u0641\u064A\u0629 \u0644\u0644\u0625\u0641\u0627\u062F\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 164)(189, "div", 165)(190, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0647");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 44)(193, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_Template_input_ngModelChange_193_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.statementDetails.phoneNumber, $event) || (ctx_r3.statementDetails.phoneNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 165)(195, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "\u0635\u0627\u062D\u0628 \u0627\u0644\u0647\u0627\u062A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "input", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_Template_input_ngModelChange_197_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.statementDetails.phoneOwner, $event) || (ctx_r3.statementDetails.phoneOwner = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 165)(199, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "\u0627\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u0642\u0627\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_Template_input_ngModelChange_201_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.statementDetails.nextAction, $event) || (ctx_r3.statementDetails.nextAction = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 165)(203, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u062A\u0627\u0628\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "input", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_Template_input_ngModelChange_205_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.statementDetails.nextDate, $event) || (ctx_r3.statementDetails.nextDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 165)(207, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A (Notes)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "textarea", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_26_Template_textarea_ngModelChange_209_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.statementDetails.notes, $event) || (ctx_r3.statementDetails.notes = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 172)(211, "div", 173)(212, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "\u0627\u0644\u0645\u0644\u062E\u0635:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "span", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_button_click_220_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.triggerSaveStatement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "span", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "\uD83D\uDCBE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, " \u062D\u0641\u0638 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 180)(225, "div", 181)(226, "div", 182)(227, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_227_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("notes"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, " \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_229_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("efada"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, " \u0627\u0644\u0625\u0641\u0627\u062F\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_231_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("record"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " \u0633\u062C\u0644 \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_233_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("statusHistory"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, " \u0633\u062C\u0644 \u062A\u062D\u062F\u064A\u062B\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_235_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("executions"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, " \u0625\u0641\u0627\u062F\u0627\u062A \u0627\u0644\u062A\u0646\u0641\u064A\u0630 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_237_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("trader"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, " \u0625\u0641\u0627\u062F\u0627\u062A \u0627\u0644\u0645\u062A\u062F\u0627\u0648\u0644 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_239_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("link"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, " \u0627\u0644\u0631\u0627\u0628\u0637 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_241_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("files"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " \u0645\u0644\u0641\u0627\u062A \u0623\u062E\u0631\u0649 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_243_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("results"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, " \u0646\u062A\u0627\u0626\u062C \u0627\u0644\u0628\u062D\u062B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_245_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("secretary"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " \u0627\u0644\u0633\u0643\u0631\u062A\u0627\u0631\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "a", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_26_Template_a_click_247_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setSubActiveLower("autoNumbers"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, " \u0623\u0631\u0642\u0627\u0645 \u0622\u0644\u064A\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](249, MainContent_div_26_div_249_Template, 30, 6, "div", 184)(250, MainContent_div_26_div_250_Template, 46, 6, "div", 184)(251, MainContent_div_26_div_251_Template, 29, 6, "div", 184)(252, MainContent_div_26_div_252_Template, 35, 6, "div", 184)(253, MainContent_div_26_div_253_Template, 30, 2, "div", 184)(254, MainContent_div_26_div_254_Template, 26, 2, "div", 184)(255, MainContent_div_26_div_255_Template, 5, 0, "div", 184)(256, MainContent_div_26_div_256_Template, 34, 2, "div", 184)(257, MainContent_div_26_div_257_Template, 5, 0, "div", 184)(258, MainContent_div_26_div_258_Template, 18, 2, "div", 184)(259, MainContent_div_26_div_259_Template, 26, 2, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.clientName) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.customerName) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.nationalId) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.status) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.nationality) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.classification == null ? null : ctx_r3.selectedPerson.classification.classification) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.contract) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.debt) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.autoNumbers) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.batch) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", (ctx_r3.selectedPerson == null ? null : ctx_r3.selectedPerson.address) || "\u063A\u064A\u0631 \u0645\u0648\u062C\u0648\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "classification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "totalFiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "companyLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "checks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTab === "callcenter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "totalFiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "companyLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "checks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "attachments");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "callcenter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTab === "classification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeTab === "numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeTab === "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeTab === "numbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeTab === "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.negotiationMethodsRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-emerald-600", ctx_r3.selectedResult === "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("border-emerald-600", ctx_r3.selectedResult === "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("text-white", ctx_r3.selectedResult === "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("scale-[1", ctx_r3.selectedResult === "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("bg-white", ctx_r3.selectedResult !== "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("border-emerald-100", ctx_r3.selectedResult !== "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("dark:border-emerald-900/30", ctx_r3.selectedResult !== "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("text-emerald-700", ctx_r3.selectedResult !== "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629")("dark:text-emerald-400", ctx_r3.selectedResult !== "\u0637\u0644\u0628 \u0645\u0647\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-emerald-600", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637"))("border-emerald-600", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637"))("text-white", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637"))("scale-[1", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637"))("bg-white", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637") === false)("dark:bg-slate-800", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637") === false)("border-emerald-100", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637") === false)("dark:border-emerald-900/30", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637") === false)("text-emerald-700", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637") === false)("dark:text-emerald-400", ctx_r3.selectedResult.includes("\u062A\u0642\u0633\u064A\u0637") === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-emerald-600", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F"))("border-emerald-600", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F"))("text-white", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F"))("scale-[1", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F"))("bg-white", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F") === false)("dark:bg-slate-800", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F") === false)("border-emerald-100", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F") === false)("dark:border-emerald-900/30", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F") === false)("text-emerald-700", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F") === false)("dark:text-emerald-400", ctx_r3.selectedResult.includes("\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F") === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-blue-600", ctx_r3.selectedResult === "\u0634\u0643\u0648\u0649")("border-blue-600", ctx_r3.selectedResult === "\u0634\u0643\u0648\u0649")("text-white", ctx_r3.selectedResult === "\u0634\u0643\u0648\u0649")("bg-white", ctx_r3.selectedResult !== "\u0634\u0643\u0648\u0649")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0634\u0643\u0648\u0649")("border-blue-100", ctx_r3.selectedResult !== "\u0634\u0643\u0648\u0649")("dark:border-blue-900/30", ctx_r3.selectedResult !== "\u0634\u0643\u0648\u0649")("text-blue-700", ctx_r3.selectedResult !== "\u0634\u0643\u0648\u0649")("dark:text-blue-400", ctx_r3.selectedResult !== "\u0634\u0643\u0648\u0649");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-indigo-600", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629"))("border-indigo-600", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629"))("text-white", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629"))("bg-white", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629") === false)("dark:bg-slate-800", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629") === false)("border-indigo-100", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629") === false)("dark:border-indigo-900/30", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629") === false)("text-indigo-700", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629") === false)("dark:text-indigo-400", ctx_r3.selectedResult.includes("\u0645\u0631\u0627\u062C\u0639\u0629") === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-blue-600", ctx_r3.selectedResult === "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642")("border-blue-600", ctx_r3.selectedResult === "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642")("text-white", ctx_r3.selectedResult === "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642")("bg-white", ctx_r3.selectedResult !== "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642")("border-blue-100", ctx_r3.selectedResult !== "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642")("dark:border-blue-900/30", ctx_r3.selectedResult !== "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642")("text-blue-700", ctx_r3.selectedResult !== "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642")("dark:text-blue-400", ctx_r3.selectedResult !== "\u0641\u062A\u062D \u0648 \u0625\u063A\u0644\u0627\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-rose-600", ctx_r3.selectedResult === "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647")("border-rose-600", ctx_r3.selectedResult === "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647")("text-white", ctx_r3.selectedResult === "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647")("bg-white", ctx_r3.selectedResult !== "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647")("border-rose-100", ctx_r3.selectedResult !== "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647")("dark:border-rose-900/30", ctx_r3.selectedResult !== "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647")("text-rose-700", ctx_r3.selectedResult !== "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647")("dark:text-rose-400", ctx_r3.selectedResult !== "\u0623\u0646\u0643\u0631 \u0646\u0641\u0633\u0647");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-rose-600", ctx_r3.selectedResult === "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641")("border-rose-600", ctx_r3.selectedResult === "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641")("text-white", ctx_r3.selectedResult === "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641")("bg-white", ctx_r3.selectedResult !== "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641")("border-rose-100", ctx_r3.selectedResult !== "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641")("dark:border-rose-900/30", ctx_r3.selectedResult !== "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641")("text-rose-700", ctx_r3.selectedResult !== "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641")("dark:text-rose-400", ctx_r3.selectedResult !== "\u063A\u064A\u0631 \u0645\u0639\u062A\u0631\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-emerald-600", ctx_r3.selectedResult === "\u062E\u0635\u0645")("border-emerald-600", ctx_r3.selectedResult === "\u062E\u0635\u0645")("text-white", ctx_r3.selectedResult === "\u062E\u0635\u0645")("bg-white", ctx_r3.selectedResult !== "\u062E\u0635\u0645")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u062E\u0635\u0645")("border-emerald-100", ctx_r3.selectedResult !== "\u062E\u0635\u0645")("dark:border-emerald-900/30", ctx_r3.selectedResult !== "\u062E\u0635\u0645")("text-emerald-700", ctx_r3.selectedResult !== "\u062E\u0635\u0645")("dark:text-emerald-400", ctx_r3.selectedResult !== "\u062E\u0635\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-amber-600", ctx_r3.selectedResult === "\u0645\u0641\u0635\u0648\u0644")("border-amber-600", ctx_r3.selectedResult === "\u0645\u0641\u0635\u0648\u0644")("text-white", ctx_r3.selectedResult === "\u0645\u0641\u0635\u0648\u0644")("bg-white", ctx_r3.selectedResult !== "\u0645\u0641\u0635\u0648\u0644")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0645\u0641\u0635\u0648\u0644")("border-amber-100", ctx_r3.selectedResult !== "\u0645\u0641\u0635\u0648\u0644")("dark:border-amber-900/30", ctx_r3.selectedResult !== "\u0645\u0641\u0635\u0648\u0644")("text-amber-700", ctx_r3.selectedResult !== "\u0645\u0641\u0635\u0648\u0644")("dark:text-amber-400", ctx_r3.selectedResult !== "\u0645\u0641\u0635\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-amber-600", ctx_r3.selectedResult === "\u0644\u0627 \u064A\u0631\u062F")("border-amber-600", ctx_r3.selectedResult === "\u0644\u0627 \u064A\u0631\u062F")("text-white", ctx_r3.selectedResult === "\u0644\u0627 \u064A\u0631\u062F")("bg-white", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0631\u062F")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0631\u062F")("border-amber-100", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0631\u062F")("dark:border-amber-900/30", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0631\u062F")("text-amber-700", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0631\u062F")("dark:text-amber-400", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0631\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-amber-600", ctx_r3.selectedResult === "\u0645\u063A\u0644\u0642")("border-amber-600", ctx_r3.selectedResult === "\u0645\u063A\u0644\u0642")("text-white", ctx_r3.selectedResult === "\u0645\u063A\u0644\u0642")("bg-white", ctx_r3.selectedResult !== "\u0645\u063A\u0644\u0642")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0645\u063A\u0644\u0642")("border-amber-100", ctx_r3.selectedResult !== "\u0645\u063A\u0644\u0642")("dark:border-amber-900/30", ctx_r3.selectedResult !== "\u0645\u063A\u0644\u0642")("text-amber-700", ctx_r3.selectedResult !== "\u0645\u063A\u0644\u0642")("dark:text-amber-400", ctx_r3.selectedResult !== "\u0645\u063A\u0644\u0642");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-rose-600", ctx_r3.selectedResult === "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F")("border-rose-600", ctx_r3.selectedResult === "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F")("text-white", ctx_r3.selectedResult === "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F")("bg-white", ctx_r3.selectedResult !== "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F")("border-rose-100", ctx_r3.selectedResult !== "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F")("dark:border-rose-900/30", ctx_r3.selectedResult !== "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F")("text-rose-700", ctx_r3.selectedResult !== "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F")("dark:text-rose-400", ctx_r3.selectedResult !== "\u0631\u0641\u0636 \u0627\u0644\u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-rose-600", ctx_r3.selectedResult === "\u0631\u0642\u0645 \u062E\u0637\u0623")("border-rose-600", ctx_r3.selectedResult === "\u0631\u0642\u0645 \u062E\u0637\u0623")("text-white", ctx_r3.selectedResult === "\u0631\u0642\u0645 \u062E\u0637\u0623")("bg-white", ctx_r3.selectedResult !== "\u0631\u0642\u0645 \u062E\u0637\u0623")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0631\u0642\u0645 \u062E\u0637\u0623")("border-rose-100", ctx_r3.selectedResult !== "\u0631\u0642\u0645 \u062E\u0637\u0623")("dark:border-rose-900/30", ctx_r3.selectedResult !== "\u0631\u0642\u0645 \u062E\u0637\u0623")("text-rose-700", ctx_r3.selectedResult !== "\u0631\u0642\u0645 \u062E\u0637\u0623")("dark:text-rose-400", ctx_r3.selectedResult !== "\u0631\u0642\u0645 \u062E\u0637\u0623");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-rose-600", ctx_r3.selectedResult === "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645")("border-rose-600", ctx_r3.selectedResult === "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645")("text-white", ctx_r3.selectedResult === "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645")("bg-white", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645")("border-rose-100", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645")("dark:border-rose-900/30", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645")("text-rose-700", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645")("dark:text-rose-400", ctx_r3.selectedResult !== "\u0644\u0627 \u064A\u0648\u062C\u062F \u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-slate-600", ctx_r3.selectedResult === "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A")("border-slate-600", ctx_r3.selectedResult === "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A")("text-white", ctx_r3.selectedResult === "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A")("bg-slate-50", ctx_r3.selectedResult !== "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A")("border-slate-200", ctx_r3.selectedResult !== "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A")("dark:border-slate-700", ctx_r3.selectedResult !== "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A")("text-slate-600", ctx_r3.selectedResult !== "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A")("dark:text-slate-400", ctx_r3.selectedResult !== "\u0631\u0641\u0639 \u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-slate-600", ctx_r3.selectedResult === "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629")("border-slate-600", ctx_r3.selectedResult === "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629")("text-white", ctx_r3.selectedResult === "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629")("bg-slate-50", ctx_r3.selectedResult !== "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629")("border-slate-200", ctx_r3.selectedResult !== "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629")("dark:border-slate-700", ctx_r3.selectedResult !== "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629")("text-slate-600", ctx_r3.selectedResult !== "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629")("dark:text-slate-400", ctx_r3.selectedResult !== "\u062A\u0623\u062C\u064A\u0644 \u0645\u062A\u0627\u0628\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-slate-600", ctx_r3.selectedResult === "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621")("border-slate-600", ctx_r3.selectedResult === "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621")("text-white", ctx_r3.selectedResult === "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621")("bg-slate-50", ctx_r3.selectedResult !== "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621")("dark:bg-slate-800", ctx_r3.selectedResult !== "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621")("border-slate-200", ctx_r3.selectedResult !== "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621")("dark:border-slate-700", ctx_r3.selectedResult !== "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621")("text-slate-600", ctx_r3.selectedResult !== "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621")("dark:text-slate-400", ctx_r3.selectedResult !== "\u0645\u0637\u0644\u0648\u0628 \u0625\u062C\u0631\u0627\u0621");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.statementDetails.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.statementDetails.phoneOwner);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.statementDetails.nextAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.statementDetails.nextDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.statementDetails.notes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedAction ? ctx_r3.selectedAction : "\u0627\u062E\u062A\u0631 \u0648\u0633\u064A\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedResult ? ctx_r3.selectedResult : "\u0627\u0644\u0646\u062A\u064A\u062C\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "efada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "record");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "statusHistory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "executions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "trader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "secretary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r3.activeSubTabLower === "autoNumbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "efada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "record");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "statusHistory");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "executions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "trader");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "results");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "secretary");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.activeSubTabLower === "autoNumbers");
  }
}
function MainContent_div_27_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 288)(1, "td", 483);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 276)(16, "span", 514);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r91.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r91.civilID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r91.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r91.classification);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r91.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r91.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r91.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r91.status, " ");
  }
}
function MainContent_div_27_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0646\u062A\u0627\u0626\u062C \u0628\u062D\u062B \u0645\u062A\u0627\u062D\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_27_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 469)(1, "td", 515);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 516);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r92.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r92.type);
  }
}
function MainContent_div_27_tr_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_27_tr_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 469)(1, "td", 515);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 516);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r93.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r93.source);
  }
}
function MainContent_div_27_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 517);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 486)(2, "div", 487)(3, "div", 488)(4, "div", 489)(5, "label", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0627\u0644\u062E\u0635\u0645 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.discount, $event) || (ctx_r3.searchNumbersForm.discount = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 489)(9, "label", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0627\u0644\u0645\u062F\u0646\u064A :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.civilID, $event) || (ctx_r3.searchNumbersForm.civilID = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_27_Template_input_keyup_enter_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onSearchNumbers());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 489)(13, "label", 493);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u062A\u0627\u0631\u064A\u062E \u0627\u0646\u062A\u0647\u0627\u0621 \u0627\u0644\u0645\u062F\u0646\u064A\u0629 :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.civilEndDate, $event) || (ctx_r3.searchNumbersForm.civilEndDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 495)(17, "h4", 496);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0643\u0641\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 489)(20, "label", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0627\u0644\u0643\u0641\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.guarantor, $event) || (ctx_r3.searchNumbersForm.guarantor = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 489)(24, "label", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0627\u0644\u063A\u0627\u0643\u0633");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.fax, $event) || (ctx_r3.searchNumbersForm.fax = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 489)(28, "label", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.commercialReg, $event) || (ctx_r3.searchNumbersForm.commercialReg = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 489)(32, "label", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0631\u0642\u0645 \u0645\u062F\u0646\u064A \u0627\u0644\u0634\u0631\u0643\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.companyCivil, $event) || (ctx_r3.searchNumbersForm.companyCivil = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 489)(36, "label", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u0646\u0648\u0639 \u0627\u0644\u0639\u0636\u0648\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.membership, $event) || (ctx_r3.searchNumbersForm.membership = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 489)(40, "label", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0627\u0644\u0647\u0627\u062A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.phone, $event) || (ctx_r3.searchNumbersForm.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 489)(44, "label", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u0627\u0644\u0628\u0631\u064A\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.email, $event) || (ctx_r3.searchNumbersForm.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 489)(48, "label", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u0634\u0631\u064A\u0643 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_50_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.partner1, $event) || (ctx_r3.searchNumbersForm.partner1 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 489)(52, "label", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u0634\u0631\u064A\u0643 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.partner2, $event) || (ctx_r3.searchNumbersForm.partner2 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 489)(56, "label", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\u0634\u0631\u064A\u0643 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_27_Template_input_ngModelChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchNumbersForm.partner3, $event) || (ctx_r3.searchNumbersForm.partner3 = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 499)(60, "button", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u0625\u0643\u0633\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "button", 501);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_27_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u062D\u0641\u0638");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 502)(65, "label", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u0627\u062A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 504);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u0627\u0644\u0645\u062F\u0646\u064A \u0644\u0645\u0627\u0644\u0643 \u0627\u0644\u0647\u0648\u0627\u062A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 504);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "select", 505);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "label", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\u0627\u0644\u0645\u0635\u062F\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "select", 505);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "label", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "select", 505);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "label", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\u0646\u0648\u0639 \u0627\u0644\u062E\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "select", 505);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "label", 503);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "select", 505);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 499)(87, "button", 506);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u062A\u0631\u0627\u062C\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "button", 506);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\u062A\u0639\u062F\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "button", 506);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "\u062D\u0641\u0638");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 507)(94, "div", 508)(95, "div", 509)(96, "table", 88)(97, "thead")(98, "tr", 89)(99, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "\u0627\u0644\u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "\u0627\u0644\u0645\u062F\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "\u0627\u0644\u062A\u0635\u0646\u064A\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "\u0627\u0644\u0645\u0635\u062F\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "\u0646\u0648\u0639 \u0627\u0644\u062E\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0636\u0627\u0641\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, MainContent_div_27_tr_116_Template, 18, 8, "tr", 284)(117, MainContent_div_27_tr_117_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 510)(119, "div", 511)(120, "table", 88)(121, "thead")(122, "tr", 89)(123, "th", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "\u0627\u0644\u0639\u062F\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "th", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "\u0646\u0648\u0639 \u0627\u0644\u062E\u0637");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, MainContent_div_27_tr_128_Template, 5, 2, "tr", 468)(129, MainContent_div_27_tr_129_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 511)(131, "table", 88)(132, "thead")(133, "tr", 89)(134, "th", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "\u0627\u0644\u0639\u062F\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "th", 512);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "\u0627\u0644\u0645\u0635\u062F\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](139, MainContent_div_27_tr_139_Template, 5, 2, "tr", 468)(140, MainContent_div_27_tr_140_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.discount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.civilID);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.civilEndDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.guarantor);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.fax);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.commercialReg);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.companyCivil);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.membership);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.partner1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.partner2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchNumbersForm.partner3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.numbersSearchResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.numbersSearchResults || ctx_r3.numbersSearchResults.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.bottomTable1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.bottomTable1 || ctx_r3.bottomTable1.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.bottomTable2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.bottomTable2 || ctx_r3.bottomTable2.length === 0);
  }
}
function MainContent_div_28_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 542);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const family_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", family_r95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", family_r95, " ");
  }
}
function MainContent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 518)(1, "h3", 519);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062D\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 520)(4, "div", 521)(5, "label", 522);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0627\u0644\u0627\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 523);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.fullName, $event) || (ctx_r3.menuSearchForm.fullName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_28_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 524)(9, "label", 525);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 526);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.firstName, $event) || (ctx_r3.menuSearchForm.firstName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_28_Template_input_keyup_enter_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 527);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.middleName, $event) || (ctx_r3.menuSearchForm.middleName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_28_Template_input_keyup_enter_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 528);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_input_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.lastName, $event) || (ctx_r3.menuSearchForm.lastName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_28_Template_input_keyup_enter_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 529);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0627\u0644\u0639\u0627\u0626\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 530);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_select_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.familyName, $event) || (ctx_r3.menuSearchForm.familyName = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 531);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "--- \u0627\u062E\u062A\u0631 \u0627\u0644\u0639\u0627\u0626\u0644\u0629 ---");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MainContent_div_28_option_19_Template, 2, 2, "option", 532);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 533)(21, "label", 534);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0627\u0644\u0645\u062F\u0646\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 535);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.civilId, $event) || (ctx_r3.menuSearchForm.civilId = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_28_Template_input_keyup_enter_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 534);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0627\u0644\u0645\u0648\u062D\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 536);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.unifiedNumber, $event) || (ctx_r3.menuSearchForm.unifiedNumber = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_28_Template_input_keyup_enter_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 521)(28, "label", 522);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0627\u0644\u0631\u0642\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 537);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_input_ngModelChange_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.phone, $event) || (ctx_r3.menuSearchForm.phone = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_28_Template_input_keyup_enter_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 521)(32, "label", 522);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "input", 538);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_28_Template_input_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.menuSearchForm.address, $event) || (ctx_r3.menuSearchForm.address = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_28_Template_input_keyup_enter_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 539)(36, "button", 540);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_28_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u0628\u062D\u062B");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 541);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " \u0625\u0636\u0627\u0641\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 540);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_28_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r94);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.resetMenuSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u062A\u0631\u0627\u062C\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.middleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.familyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.familyList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.civilId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.unifiedNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.menuSearchForm.address);
  }
}
function MainContent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0627\u0644\u0639\u0645\u0648\u0644\u0627\u062A \u0648 \u0627\u0644\u062A\u062D\u0635\u064A\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "newFiles");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_33_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 288)(1, "td", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 561);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 513);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 428)(9, "div", 562);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td", 563);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 564);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 565)(18, "button", 566);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_tr_55_Template_button_click_18_listener() {
      const row_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r97).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.loadClientProfile(row_r98));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\uD83D\uDCC2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " \u0641\u062A\u062D \u0627\u0644\u0645\u0644\u0641 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r98 = ctx.$implicit;
    const i_r99 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r99 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r98.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 8, row_r98.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", row_r98.efada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r98.efada);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r98.employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r98.totalAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r98.notes);
  }
}
function MainContent_div_33_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 567);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u0641\u0627\u062F\u0627\u062A \u0645\u0633\u062C\u0644\u0629 \u0644\u0644\u0628\u062D\u062B \u0627\u0644\u062D\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 544)(2, "div", 545)(3, "div", 546)(4, "div", 489)(5, "label", 547);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0627\u0644\u0645\u062F\u0646\u064A / \u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 548);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_33_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchStatementsForm.name, $event) || (ctx_r3.searchStatementsForm.name = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_33_Template_input_keyup_enter_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchStatements());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 438)(9, "label", 549);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u0645\u0646 \u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 550);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_33_Template_input_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchStatementsForm.fromDate, $event) || (ctx_r3.searchStatementsForm.fromDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_33_Template_input_keyup_enter_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchStatements());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 438)(13, "label", 549);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0627\u0644\u0649 \u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 550);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_div_33_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.searchStatementsForm.toDate, $event) || (ctx_r3.searchStatementsForm.toDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function MainContent_div_33_Template_input_keyup_enter_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchStatements());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 551);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.searchStatements());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0628\u062D\u062B \u0639\u0627\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 489)(19, "button", 552);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setFilterAndSearch("statements"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " \u0625\u0641\u0627\u062F\u0627\u062A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 552);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setFilterAndSearch("review"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u0645\u0631\u0627\u062C\u0639\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 552);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setFilterAndSearch("paid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u0627\u0644\u0633\u062F\u0627\u062F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 552);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setFilterAndSearch("group_paid"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u0633\u062F\u0627\u062F \u0627\u0644\u0645\u062C\u0645\u0648\u0639\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 553);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.exportToExcel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 554);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0637\u0628\u0627\u0639\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 554);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u062D\u0630\u0641 \u0627\u0644\u0625\u0641\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 508)(34, "div", 509)(35, "table", 88)(36, "thead")(37, "tr", 89)(38, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0627\u0644\u0627\u0633\u0645");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0625\u0641\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u0627\u0644\u0625\u0641\u0627\u062F\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "th", 555);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " \u0642\u064A\u0645\u0629 \u0627\u0644\u0625\u062C\u0645\u0627\u0644\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "th", 556);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "th", 557);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "tbody", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, MainContent_div_33_tr_55_Template, 22, 11, "tr", 284)(56, MainContent_div_33_tr_56_Template, 3, 0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 558)(58, "div", 559);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 256)(61, "button", 560);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.prevSearchStatementsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\u25C0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, " \u0627\u0644\u0633\u0627\u0628\u0642 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 455);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 560);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_33_Template_button_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.nextSearchStatementsPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " \u0627\u0644\u062A\u0627\u0644\u064A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "\u25B6\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchStatementsForm.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchStatementsForm.fromDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.searchStatementsForm.toDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r3.activeFilter === "statements" ? "var(--primary-color)" : "var(--surface-hover)")("color", ctx_r3.activeFilter === "statements" ? "#ffffff" : "var(--text-color)")("border-color", "var(--surface-border)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r3.activeFilter === "review" ? "var(--primary-color)" : "var(--surface-hover)")("color", ctx_r3.activeFilter === "review" ? "#ffffff" : "var(--text-color)")("border-color", "var(--surface-border)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r3.activeFilter === "paid" ? "var(--primary-color)" : "var(--surface-hover)")("color", ctx_r3.activeFilter === "paid" ? "#ffffff" : "var(--text-color)")("border-color", "var(--surface-border)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r3.activeFilter === "group_paid" ? "var(--primary-color)" : "var(--surface-hover)")("color", ctx_r3.activeFilter === "group_paid" ? "#ffffff" : "var(--text-color)")("border-color", "var(--surface-border)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.statementRows);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.statementRows || ctx_r3.statementRows.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0646\u062A\u0627\u0626\u062C: ", ctx_r3.searchStatementsTotal, " \u0625\u0641\u0627\u062F\u0629 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.searchStatementsPage === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" \u0635\u0641\u062D\u0629 ", ctx_r3.searchStatementsPage, " \u0645\u0646 ", ctx_r3.Math.ceil(ctx_r3.searchStatementsTotal / ctx_r3.searchStatementsPageSize) || 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.searchStatementsPage * ctx_r3.searchStatementsPageSize >= ctx_r3.searchStatementsTotal);
  }
}
function MainContent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2", 543);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MainContent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 568);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 569);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MainContent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 570)(1, "div", 571)(2, "div", 572)(3, "div", 573);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \uD83D\uDCB0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "label", 574);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0645\u0628\u0644\u063A \u0627\u0644\u0633\u062F\u0627\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 575);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 576);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u062F.\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 577)(14, "div", 573);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " \uD83D\uDCC5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0639\u0627\u0645\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 579);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 580)(23, "div", 165)(24, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\u0648\u0633\u064A\u0644\u0629 \u0627\u0644\u062F\u0641\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 581);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 582);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 165)(30, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u0633\u0624\u0648\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 583);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 165)(35, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0631\u0642\u0645 \u0627\u0644\u0642\u064A\u062F/\u0627\u0644\u0633\u0646\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 584);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 165)(40, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0645\u0646\u062F\u0648\u0628 \u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 583);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 585)(45, "label", 586);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0644\u0641 \u0628\u0639\u062F \u0647\u0630\u0647 \u0627\u0644\u0639\u0645\u0644\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 587)(48, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 588);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, ctx_r3.selectedPayment.value), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](21, 10, ctx_r3.selectedPayment.dateAdded, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedPayment.paymentMethod, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedPayment.userAddedName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r3.selectedPayment.jouralEntry || "---", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedPayment.salesAgent || "\u063A\u064A\u0631 \u0645\u0633\u062C\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedPayment.fileStatusAfter || "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u063A\u064A\u064A\u0631\u0627\u062A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("REF: ", ctx_r3.selectedPayment.id);
  }
}
function MainContent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 570)(1, "div", 572)(2, "div", 589);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 590);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 591)(7, "div", 592)(8, "label", 593);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0637\u0627\u0644\u0628\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 594);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 576);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u062F.\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 595);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 596);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 597)(18, "label", 574);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062F\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 598);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 576);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u062F.\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 599);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 600);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 601)(28, "label", 602);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\u0627\u0644\u0645\u0628\u0644\u063A \u0627\u0644\u0645\u062A\u0628\u0642\u064A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 603);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 576);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u062F.\u0643");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 604);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u0635\u0627\u0641\u064A \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0627\u0644\u0645\u0633\u062A\u062D\u0642\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 605)(38, "h4", 606);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "span", 607);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Legal Case Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 608)(42, "div", 165)(43, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u0627\u0644\u0645\u062D\u0627\u0645\u0649 \u0627\u0644\u0645\u062A\u0627\u0628\u0639");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 165)(48, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u0627\u0644\u0645\u062D\u0643\u0645\u0629 / \u0627\u0644\u062C\u0647\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 165)(53, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u0633\u0628\u0628 \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 609)(58, "label", 578);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "\u0627\u0633\u0645 \u0627\u0644\u0645\u062F\u0639\u064A \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A \u0627\u0644\u0643\u0627\u0645\u0644");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 610);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0645\u0644\u0641 \u0631\u0642\u0645: ", ctx_r3.selectedDebt.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0627\u0644\u0645\u0648\u0643\u0644: ", ctx_r3.selectedDebt.client);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 11, ctx_r3.selectedDebt.claim), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 13, ctx_r3.selectedDebt.paid), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r3.selectedDebt.paid / ctx_r3.selectedDebt.claim * 100 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 15, ctx_r3.selectedDebt.remaining), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedDebt.lawyerName || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedDebt.courtName || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedDebt.debtReason || "\u063A\u064A\u0631 \u0645\u062D\u062F\u062F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.selectedDebt.name);
  }
}
function MainContent_div_173_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 625)(1, "td", 626);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 627);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 628)(7, "span", 629);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 3, h_r101.dateAdded, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r101.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](h_r101.statusName);
  }
}
function MainContent_div_173_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 611);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_173_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.historyModalVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 612);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_173_Template_div_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event.stopPropagation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 613)(3, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 614);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 615);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 616);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_173_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.historyModalVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 617)(10, "table", 618)(11, "thead")(12, "tr", 619)(13, "th", 620);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 620);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u0627\u0644\u0645\u0648\u0638\u0641");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 620);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0627\u0644\u062D\u0627\u0644\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tbody", 621);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MainContent_div_173_tr_20_Template, 9, 6, "tr", 622);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 623)(22, "button", 624);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_div_173_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r100);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.historyModalVisible = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " \u0625\u063A\u0644\u0627\u0642 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u0633\u062C\u0644 ", ctx_r3.selectedHistoryTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.selectedHistoryItems);
  }
}
let MainContent = /*#__PURE__*/(() => {
  class MainContent {
    negotiationsService;
    lookupModal;
    clientRows = [];
    _selectedPerson = null;
    set selectedPerson(val) {
      this._selectedPerson = val;
      if (val && val.id) {
        console.log('MainContent: New person selected, id=', val.id);
        this.ensureClassification();
        this.loadAllCategoryHistories(val.id);
      }
    }
    get selectedPerson() {
      return this._selectedPerson;
    }
    financialData = null;
    attachments = [];
    payments = [];
    notes = [];
    additionalAmounts = [];
    audits = [];
    autoNumbers = [];
    callcenterStatements = [];
    classifications = [];
    statuses = [];
    fromDate = '2025-11-08';
    toDate = '2025-12-02';
    statementRows = [];
    allStatementRows = [];
    Math = Math;
    searchGeneral = '';
    selectedFile = null;
    menuSearchForm = {
      fullName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      familyName: '',
      civilId: '',
      unifiedNumber: '',
      phone: '',
      address: ''
    };
    // Search Statements Form
    searchStatementsForm = {
      civilId: '',
      name: '',
      fromDate: '2025-11-08',
      toDate: '2025-12-02'
    };
    familyList = [];
    activeMainTab = 'main';
    loading = false;
    selectedAction = ''; // هذا المتغير سيخزن الإختيار
    selectedNumber = '';
    selectedRelation = '';
    selectedResult = '';
    promiseToPayType = 'none';
    promiseToPayAmount = null;
    installmentAmount = null;
    installmentDate = null;
    reviewType = '';
    reviewNote = '';
    statementDetails = {
      notes: '',
      phoneNumber: '',
      phoneOwner: '',
      nextAction: '',
      nextDate: ''
    };
    // Pagination for Audits
    auditsPage = 1;
    auditsPageSize = 5;
    auditsTotal = 0;
    // Pagination for Call Center Statements (File Specific)
    statementsPage = 1;
    statementsPageSize = 5;
    statementsTotal = 0;
    // Pagination for Notes
    notesPage = 1;
    notesPageSize = 5;
    notesTotal = 0;
    // Pagination for Statuses
    historyPage = 1;
    historyPageSize = 5;
    statusesTotal = 0;
    // Pagination for Search Statements Tab
    searchStatementsPage = 1;
    searchStatementsPageSize = 20;
    searchStatementsTotal = 0;
    pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    loadClientRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // حدث جديد لتحميل ملف العميل المباشر
    constructor(negotiationsService) {
      this.negotiationsService = negotiationsService;
    }
    handleResultClick(result) {
      if (this.selectedNumber) {
        this.statementDetails.phoneNumber = this.selectedNumber;
        this.statementDetails.phoneOwner = this.selectedRelation || '';
      }
      if (result === 'وعد بالسداد') {
        const modal = document.getElementById('promiseModal');
        if (modal) modal.showModal();
      } else if (result === 'تقسيط') {
        const modal = document.getElementById('installmentModal');
        if (modal) modal.showModal();
      } else if (result === 'مراجعة') {
        const modal = document.getElementById('reviewModal');
        if (modal) modal.showModal();
      } else {
        this.selectedResult = result;
      }
    }
    // Lookup selections for dropdowns
    lookupLists = {
      client: [],
      claim: [],
      payment: [],
      file: [],
      action: [],
      followup: [],
      interior: [],
      civil: [],
      contact: [],
      cooperation: [],
      comms_lang: [],
      gender: []
    };
    // Category-specific history storage
    categoryHistories = {
      client: [],
      claim: [],
      payment: [],
      file: [],
      action: [],
      followup: [],
      internal: [],
      civil: [],
      contact: [],
      cooperation: [],
      discount: [],
      acceptance: [],
      work: [],
      salarydate: [],
      incomenotes: []
    };
    // History Modal State
    historyModalVisible = false;
    selectedHistoryTitle = '';
    selectedHistoryItems = [];
    openFullHistory(title, data) {
      this.selectedHistoryTitle = title;
      this.selectedHistoryItems = data || [];
      this.historyModalVisible = true;
    }
    submitPromiseToPay() {
      let resultText = 'وعد بالسداد';
      if (this.promiseToPayType === 'none') {
        resultText = 'وعد بالسداد';
      } else if (this.promiseToPayType === 'full') {
        resultText = `وعد بالسداد كلى مبلغ ${this.promiseToPayAmount} د.ك`;
      } else {
        resultText = `وعد بالسداد جزئى مبلغ ${this.promiseToPayAmount} د.ك`;
      }
      this.selectedResult = resultText;
      const modal = document.getElementById('promiseModal');
      if (modal) modal.close();
    }
    submitInstallment() {
      this.selectedResult = `تقسيط مبلغ ${this.installmentAmount} د.ك بتاريخ ${this.installmentDate}`;
      const modal = document.getElementById('installmentModal');
      if (modal) modal.close();
    }
    submitReview() {
      let reviewTypeName = '';
      if (this.reviewType === 'company') reviewTypeName = 'مراجعة الشركة';else if (this.reviewType === 'admin') reviewTypeName = 'مراجعة المسؤل';else reviewTypeName = 'مراجعة الادارة';
      this.selectedResult = `${reviewTypeName}${this.reviewNote ? ' - ' + this.reviewNote : ''}`;
      const modal = document.getElementById('reviewModal');
      if (modal) modal.close();
    }
    activeSubTabLower = 'notes';
    paymentForm = {
      code: '',
      name: '',
      amount: 0,
      civilId: '',
      phone: '',
      claimant: '',
      whatsapp: '',
      message: '',
      language: 'arabic',
      type: 'company'
    };
    companyLink = '';
    whatsAppNumber = '';
    activeNoteTab = 1;
    currentField = '';
    courtValue = '';
    internalStatus = '';
    civilStatus = '';
    files = {
      claimAll: 0,
      claimCurrent: 0,
      paidAll: 0,
      paidCurrent: 0,
      remainingAll: 0,
      remainingCurrent: 0,
      feesAll: 0,
      feesCurrent: 0,
      remainingWithFeesAll: 0,
      remainingWithFeesCurrent: 0,
      actionsAll: 0,
      actionsCurrent: 0
    };
    statsData = {
      custodyCount: 0,
      filesCount: 0,
      totalFiles: 0,
      filesInCustody: 0,
      currentDayStatements: 0
    };
    numbersSearchResults = [];
    bottomTable1 = [];
    bottomTable2 = [];
    // Variables for modals
    selectedPayment = null;
    selectedDebt = null;
    selectPaymentForModal(payment) {
      this.selectedPayment = payment;
    }
    selectDebtForModal(debt) {
      this.selectedDebt = debt;
    }
    saveSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    statusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    onSaveComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    lookupData = [];
    searchNumbersForm = {
      clientCode: '',
      civilID: '',
      source: '',
      classification: '',
      type: '',
      number: '',
      discount: '',
      civilEndDate: '',
      guarantor: '',
      commercialReg: '',
      companyCivil: '',
      phone: '',
      email: '',
      partner1: '',
      partner2: '',
      partner3: '',
      membership: '',
      fax: ''
    };
    onSave() {
      this.saveSearch.emit(this.searchNumbersForm);
    }
    setOfficeLink() {
      this.populatePaymentForm('office');
    }
    setCompanyLink() {
      this.populatePaymentForm('company');
    }
    populatePaymentForm(type) {
      this.paymentForm.type = type;
      this.paymentForm.code = this.selectedFile?.code || '';
      this.paymentForm.name = this.selectedPerson?.customerName || '';
      this.paymentForm.civilId = this.selectedPerson?.nationalId || '';
      this.paymentForm.phone = this.selectedPerson?.phone || '';
      this.paymentForm.claimant = this.selectedFile?.client || '';
      this.paymentForm.amount = this.selectedFile?.remaining || 0;
      this.paymentForm.whatsapp = this.selectedPerson?.phone || '';
      this.generateLink();
      this.activeSubTab = 'companyLink';
    }
    generateLink() {
      const baseUrl = this.paymentForm.type === 'office' ? 'https://pay.houseoflaw.com/office' : 'https://pay.houseoflaw.com/company';
      const langParam = this.paymentForm.language === 'english' ? '&lang=en' : '';
      const amountParam = this.paymentForm.amount > 0 ? `&amount=${this.paymentForm.amount}` : '';
      this.companyLink = `${baseUrl}?code=${this.paymentForm.code}${amountParam}${langParam}`;
      this.updatePaymentMessage();
    }
    updatePaymentMessage() {
      const lang = this.paymentForm.language;
      if (lang === 'arabic') {
        this.paymentForm.message = `السادة المحترمين، يرجى سداد مبلغ (${this.paymentForm.amount}) د.ك المتبقي على ملفكم رقم ${this.paymentForm.code} من خلال الرابط التالي: ${this.companyLink}`;
      } else {
        this.paymentForm.message = `Dear customer, please pay the remaining amount (${this.paymentForm.amount}) KWD for your file #${this.paymentForm.code} via the following link: ${this.companyLink}`;
      }
    }
    copyLink() {
      navigator.clipboard.writeText(this.companyLink).then(() => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
          title: 'تم النسخ',
          text: 'تم نسخ الرابط بنجاح',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      });
    }
    sendWhatsApp() {
      if (!this.paymentForm.whatsapp || !this.companyLink) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'الرجاء التأكد من رقم الواتساب والرابط', 'warning');
        return;
      }
      const url = `https://wa.me/${this.paymentForm.whatsapp}?text=${encodeURIComponent(this.paymentForm.message)}`;
      window.open(url, '_blank');
    }
    setSubActiveLower(tab) {
      this.activeSubTabLower = tab;
    }
    ngOnInit() {
      // NOTE: Don't read the URL fragment here; it can contain router state in hash-based navigation.
      // const hashTab = window.location.hash.replace('#', '');
      this.statsData = {
        custodyCount: 15,
        filesCount: 200,
        totalFiles: 350,
        filesInCustody: 10,
        currentDayStatements: 5
      };
      this.familyList = ['الاباالخيل', 'الاباالدعيات', 'الاباالصافي', 'الاباالصفا', 'الاباالقلوب', 'الاباحسين', 'اباد', 'ابادي', 'ابراهيم', 'ابراهيم الانصاري', 'ابراهيم البالول', 'بركه الجنوبي', 'ابريسم', 'ابشاره', 'ابو طينة', 'ابل الكندري', 'ابن الشميم', 'ابن الشيخ'];
      this.allStatementRows = this.generateMockStatements();
      this.searchStatements(1, false); // البحث الأولي بدون عرض تنبيه الانعدام
      this.fetchAllLookups();
    }
    fetchAllLookups() {
      console.log('MainContent: Fetching all lookups...');
      const types = [{
        key: 'client',
        type: 'CLIENT_STATUS'
      }, {
        key: 'claim',
        type: 'CLAIM_STATUS'
      }, {
        key: 'payment',
        type: 'PAYMENT_STATUS'
      }, {
        key: 'file',
        type: 'FILE_STATUS'
      }, {
        key: 'action',
        type: 'ACTION_STATUS'
      }, {
        key: 'followup',
        type: 'FOLLOWUP_STATUS'
      }, {
        key: 'interior',
        type: 'INTERNAL'
      }, {
        key: 'civil',
        type: 'CIVIL'
      }, {
        key: 'contact',
        type: 'CONTACT'
      }, {
        key: 'cooperation',
        type: 'COOPERATION'
      }, {
        key: 'comms_lang',
        type: 'COMMS_LANG'
      }, {
        key: 'gender',
        type: 'GENDER'
      }];
      types.forEach(item => {
        this.negotiationsService.getLookups(item.type).subscribe({
          next: data => {
            console.log(`MainContent: Loaded lookup [${item.key}]:`, data?.length || 0, 'items');
            this.lookupLists[item.key] = data;
          },
          error: err => {
            console.error(`Error loading lookup ${item.type}:`, err);
          }
        });
      });
    }
    loadCategoryHistory(fileCode, category) {
      if (!fileCode) return;
      // Check if it's a standard status category or a generic field
      const genericFields = ['discount', 'acceptance', 'work', 'salarydate', 'incomenotes'];
      if (genericFields.includes(category)) {
        this.negotiationsService.getFieldHistory(fileCode, category).subscribe({
          next: data => this.categoryHistories[category] = data,
          error: err => console.error(`Error loading field history for ${category}:`, err)
        });
      } else {
        this.negotiationsService.getCategoryHistory(fileCode, category).subscribe({
          next: data => this.categoryHistories[category] = data,
          error: err => console.error(`Error loading history for ${category}:`, err)
        });
      }
    }
    loadAllCategoryHistories(fileCode) {
      if (!fileCode) return;
      const categories = ['client', 'claim', 'payment', 'file', 'action', 'followup', 'internal', 'civil', 'contact', 'cooperation', 'discount', 'acceptance', 'work', 'salarydate', 'incomenotes'];
      categories.forEach(cat => this.loadCategoryHistory(fileCode, cat));
    }
    negotiationMethodsRows = [{
      left: 'اتصال',
      right: 'رسالة'
    }, {
      left: 'اتصال واتس',
      right: 'رسالة واتس'
    }, {
      left: 'اتصال فايبر',
      right: 'رسالة فايبر'
    }, {
      left: 'اتصال ايمو',
      right: 'رسالة ايمو'
    }, {
      left: 'فاكس',
      right: 'ايميل'
    }];
    statementSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    triggerSaveStatement() {
      if (!this.selectedAction || !this.selectedResult) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'الرجاء اختيار وسيلة التفاوض ونتيجة التفاوض أولاً', 'warning');
        return;
      }
      this.statementSaved.emit({
        contactMethod: this.selectedAction,
        connectedStatus: this.selectedResult,
        notes: this.statementDetails.notes || this.reviewNote || `تم التفاوض عن طريق ${this.selectedAction} والنتيجة ${this.selectedResult}`,
        promiseAmount: this.selectedResult.includes('تقسيط') ? this.installmentAmount : this.selectedResult.includes('وعد بالسداد') && this.promiseToPayType !== 'none' ? this.promiseToPayAmount : null,
        nextDate: this.statementDetails.nextDate || (this.selectedResult.includes('تقسيط') ? this.installmentDate : null),
        phoneNumber: this.statementDetails.phoneNumber,
        phoneOwner: this.statementDetails.phoneOwner,
        nextAction: this.statementDetails.nextAction
      });
      // Reset local details after emitting
      this.statementDetails = {
        notes: '',
        phoneNumber: '',
        phoneOwner: '',
        nextAction: '',
        nextDate: ''
      };
      this.reviewNote = '';
    }
    activeTab = 'numbers';
    activeSubTab = 'main';
    numbers = [];
    addForm = {
      phone: '',
      relation: '',
      source: '',
      status: 'نشط'
    };
    contactAdded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    saveNumber() {
      if (!this.addForm.phone) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'يرجى إدخال رقم الهاتف', 'warning');
        return;
      }
      const cid = this.selectedPerson?.nationalId || this.selectedPerson?.civilId;
      if (!cid) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'لا يوجد معرف للعميل (رقم مدني)', 'error');
        return;
      }
      this.loading = true;
      this.negotiationsService.addContact(cid, this.addForm).subscribe({
        next: () => {
          this.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تم الحفظ', 'تم إضافة الرقم بنجاح', 'success');
          this.activeTab = 'numbers';
          this.addForm = {
            phone: '',
            relation: '',
            source: '',
            status: 'نشط'
          };
          this.contactAdded.emit();
        },
        error: err => {
          this.loading = false;
          console.error('Error adding contact:', err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل في حفظ الرقم', 'error');
        }
      });
    }
    // تغيير التابات
    setMainTab(tab) {
      // حدّد الـ tab
      this.activeMainTab = tab;
      // حدّث الـ URL hash
      // NOTE: Don't touch URL fragment here; it can break routing if the app uses hash-based navigation.
      // window.location.hash = tab;
    }
    selectAction(action) {
      this.selectedAction = action;
    }
    // ============================
    // LOADING & FETCH METHODS
    // ============================
    loadInitialData() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 800);
    }
    // تحديث حقل واحد تلقائياً (Auto-save)
    updateField(field, value) {
      if (!this.selectedPerson?.id) return;
      this.ensureClassification();
      // Convert date or numeric values if needed
      let valStr = value?.toString();
      if (field === 'salarydate' && value) {
        // Ensure YYYY-MM-DD format for backend
        valStr = new Date(value).toISOString().split('T')[0];
      }
      this.negotiationsService.updateClientStatus(this.selectedPerson.id, field, undefined, valStr).subscribe({
        next: () => {
          this.statusChanged.emit(); // Refresh history
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'تم التحديث',
            text: `تم حفظ ${this.getFriendlyFieldName(field)}`,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 2000,
            showConfirmButton: false
          });
        },
        error: err => {
          console.error(`Error updating ${field}:`, err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل في حفظ التعديلات', 'error');
        }
      });
    }
    getFriendlyFieldName(field) {
      switch (field.toLowerCase()) {
        case 'discount':
          return 'الخصم';
        case 'acceptance':
          return 'حالة القبول';
        case 'work':
          return 'الوظيفة';
        case 'salarydate':
          return 'تاريخ الراتب';
        case 'incomenotes':
          return 'ملاحظات الدخل';
        default:
          return field;
      }
    }
    ensureClassification() {
      if (this.selectedPerson && !this.selectedPerson.classification) {
        this.selectedPerson.classification = {
          clientStatusId: null,
          claimStatusId: null,
          paymentStatusId: null,
          fileStatusId: null,
          actionStatusId: null,
          followUpStatusId: null,
          internalStatusId: null,
          civilStatusId: null,
          cooperationStatusId: null,
          contactStatusId: null,
          communicationLanguageId: null,
          genderId: null,
          discount: null,
          acceptance: '',
          salaryDate: null,
          incomeNotes: ''
        };
      }
    }
    changeTab(tab) {
      this.activeSubTab = tab;
    }
    openAttachment(file) {
      if (file.url) {
        window.open(file.url, '_blank');
      } else {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'لا يوجد رابط لهذا الملف', 'info');
      }
    }
    formData = {
      secretaryClassification: '',
      sector: 'Telecom',
      lawyer: '',
      legalClaimant: 'شركة الاتصالات الكويتية - stc',
      court: {
        id: 1,
        name: 'الاحمدى'
      },
      internalStatus: {
        id: null,
        name: 'غير مصنف'
      },
      civilStatus: {
        id: null,
        name: 'غير مصنف'
      },
      traderDispatch: '',
      notes: {
        notes1: '0',
        notes2: '',
        notes3: '',
        notes4: '',
        secretary: '',
        notes6: ''
      }
    };
    openLookup(field) {
      this.currentField = field;
      let type = '';
      switch (field.toLowerCase()) {
        case 'cooperation':
          type = 'COOPERATION';
          break;
        case 'contact':
          type = 'CONTACT';
          break;
        case 'civil':
          type = 'CIVIL';
          break;
        case 'interior':
          type = 'INTERNAL';
          break;
        case 'court':
          type = 'COURT';
          break;
        case 'client':
          type = 'CLIENT_STATUS';
          break;
        case 'claim':
          type = 'CLAIM_STATUS';
          break;
        case 'payment':
          type = 'PAYMENT_STATUS';
          break;
        case 'file':
          type = 'FILE_STATUS';
          break;
        case 'action':
          type = 'ACTION_STATUS';
          break;
        case 'followup':
          type = 'FOLLOWUP_STATUS';
          break;
        case 'comms_lang':
          type = 'COMMS_LANG';
          break;
        case 'gender':
          type = 'GENDER';
          break;
        default:
          return;
      }
      this.loading = true;
      this.negotiationsService.getLookups(type).subscribe({
        next: data => {
          this.lookupData = data;
          this.loading = false;
          this.lookupModal.open();
        },
        error: err => {
          this.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل جلب البيانات', 'error');
        }
      });
    }
    onLookupSelected(item, fieldOverwrite) {
      if (!this.selectedPerson?.id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'الرجاء اختيار عميل أولاً', 'warning');
        return;
      }
      this.ensureClassification();
      const field = fieldOverwrite || this.currentField;
      this.negotiationsService.updateClientStatus(this.selectedPerson.id, field, item.id).subscribe({
        next: res => {
          this.loading = false;
          this.statusChanged.emit(); // Notify parent to refresh history
          const fieldKey = field.toLowerCase();
          const displayKey = fieldKey === 'internal' || fieldKey === 'interior' ? 'internal' : fieldKey;
          // Reload specific history for this category
          this.loadCategoryHistory(this.selectedPerson.id, displayKey);
          // Update local state display names if available
          let name = item.name;
          if (!name && item.id) {
            const listKey = this.getLookupKeyFromField(fieldKey);
            const found = this.lookupLists[listKey]?.find(x => x.id === item.id);
            if (found) name = found.name;
          }
          if (fieldKey === 'cooperation') this.selectedPerson.cooperationStatus = name;
          if (fieldKey === 'contact') this.selectedPerson.contactStatus = name;
          if (fieldKey === 'civil') this.selectedPerson.civilStatus = name;
          if (fieldKey === 'internal' || fieldKey === 'interior') this.selectedPerson.internalStatus = name;
          if (fieldKey === 'client') this.selectedPerson.clientStatus = name;
          if (fieldKey === 'claim') this.selectedPerson.claimStatus = name;
          if (fieldKey === 'payment') this.selectedPerson.paymentStatus = name;
          if (fieldKey === 'file') this.selectedPerson.fileStatus = name;
          if (fieldKey === 'action') this.selectedPerson.actionStatus = name;
          if (fieldKey === 'followup') this.selectedPerson.followUpStatus = name;
          if (fieldKey === 'comms_lang') this.selectedPerson.communicationLanguage = name;
          if (fieldKey === 'gender') this.selectedPerson.gender = name;
          // Sync change with clientRows
          if (this.clientRows && this.clientRows.length > 0) {
            this.clientRows = this.clientRows.map(row => ({
              ...row,
              cooperationStatus: this.selectedPerson.cooperationStatus,
              contactStatus: this.selectedPerson.contactStatus,
              civilStatus: this.selectedPerson.civilStatus,
              internalStatus: this.selectedPerson.internalStatus,
              clientStatus: this.selectedPerson.clientStatus,
              followUpStatus: this.selectedPerson.followUpStatus,
              fileStatus: this.selectedPerson.fileStatus
            }));
          }
          if (this.selectedPerson.classification) {
            const map = {
              'comms_lang': 'communicationLanguageId',
              'gender': 'genderId'
            };
            if (map[fieldKey]) this.selectedPerson.classification[map[fieldKey]] = item.id;
          }
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'تم التحديث',
            text: `تم تغيير التصنيف بنجاح`,
            icon: 'success',
            toast: true,
            position: 'top-end',
            timer: 2000,
            showConfirmButton: false
          });
        },
        error: err => {
          this.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', err.message, 'error');
        }
      });
    }
    saveAllClassifications() {
      if (!this.selectedPerson?.id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'يرجى اختيار عميل أولاً', 'warning');
        return;
      }
      this.ensureClassification();
      this.loading = true;
      const c = this.selectedPerson.classification;
      const updates = [];
      // Map of classification object fields to service parameter 'field' names
      // These keys match the expected parameter names in the backend updateClientStatus method
      const fieldMap = {
        clientStatusId: 'client',
        claimStatusId: 'claim',
        paymentStatusId: 'payment',
        fileStatusId: 'file',
        actionStatusId: 'action',
        internalStatusId: 'internal',
        civilStatusId: 'civil',
        cooperationStatusId: 'cooperation',
        contactStatusId: 'contact',
        followUpStatusId: 'followup',
        discount: 'discount',
        acceptance: 'acceptance',
        work: 'work',
        salaryDate: 'salarydate',
        incomeNotes: 'incomenotes'
      };
      // Build the array of update observables for status fields
      Object.keys(fieldMap).forEach(key => {
        const fieldName = fieldMap[key];
        const val = c[key];
        if (val !== undefined && val !== null) {
          let valStr = val?.toString();
          let valId = undefined;
          // If it's a "StatusId" field, pass it as the valueId parameter
          if (key.toLowerCase().endsWith('statusid')) {
            valId = val;
            valStr = undefined;
          }
          updates.push(this.negotiationsService.updateClientStatus(this.selectedPerson.id, fieldName, valId, valStr));
        }
      });
      // Add metadata/linking fields explicitly to ensure they are NOT NULL in DB
      if (this.selectedPerson.code) {
        updates.push(this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'code', undefined, this.selectedPerson.code));
        updates.push(this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'file_code', undefined, this.selectedPerson.code));
      }
      if (this.selectedPerson.departmentId) {
        updates.push(this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'dept_code', undefined, this.selectedPerson.departmentId.toString()));
      }
      // Also send the main classification text if available
      const mainClass = this.selectedPerson.classification?.classification || this.selectedPerson.classification?.classificationText;
      if (mainClass) {
        updates.push(this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'classification', undefined, mainClass.toString()));
      }
      // Explicitly add 'Work' and 'IncomeNotes' from the selectedPerson root (where UI is bound)
      if (this.selectedPerson.jobType) {
        updates.push(this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'work', undefined, this.selectedPerson.jobType));
      }
      if (this.selectedPerson.incomeNotes) {
        updates.push(this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'incomenotes', undefined, this.selectedPerson.incomeNotes));
      }
      if (updates.length === 0) {
        this.loading = false;
        return;
      }
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(updates).subscribe({
        next: () => {
          this.loading = false;
          this.statusChanged.emit(); // Refresh history
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'تم الحفظ',
            text: 'تم حفظ جميع تصنيفات الملف بنجاح (مزامنة كاملة)',
            icon: 'success',
            timer: 3000,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
          });
        },
        error: err => {
          this.loading = false;
          console.error('Error saving classifications:', err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل في مزامنة بعض الحالات لقاعدة البيانات', 'error');
        }
      });
    }
    saveDiscountAcceptance() {
      if (!this.selectedPerson?.id) return;
      this.loading = true;
      const c = this.selectedPerson.classification;
      const updates = [this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'discount', undefined, c.discount?.toString()), this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'acceptance', undefined, c.acceptance)];
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(updates).subscribe({
        next: () => {
          this.loading = false;
          this.loadCategoryHistory(this.selectedPerson.id, 'discount');
          this.loadCategoryHistory(this.selectedPerson.id, 'acceptance');
          this.statusChanged.emit();
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'تم الحفظ',
            text: 'تم حفظ بيانات الخصم والقبول بنجاح',
            icon: 'success',
            timer: 2000,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
          });
        },
        error: err => {
          this.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل حفظ بيانات الخصم والقبول', 'error');
        }
      });
    }
    saveHousingIncome() {
      if (!this.selectedPerson?.id) return;
      this.loading = true;
      // We update 'work' (from work), 'salarydate', and 'incomenotes' (from classification.incomeNotes)
      const updates = [this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'work', undefined, this.selectedPerson.work), this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'salarydate', undefined, this.selectedPerson.classification?.salaryDate ? new Date(this.selectedPerson.classification.salaryDate).toISOString().split('T')[0] : undefined), this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'incomenotes', undefined, this.selectedPerson.classification?.incomeNotes)];
      (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(updates).subscribe({
        next: () => {
          this.loading = false;
          this.loadCategoryHistory(this.selectedPerson.id, 'work');
          this.loadCategoryHistory(this.selectedPerson.id, 'salarydate');
          this.loadCategoryHistory(this.selectedPerson.id, 'incomenotes');
          this.statusChanged.emit();
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
            title: 'تم الحفظ',
            text: 'تم حفظ بيانات السكن والدخل بنجاح',
            icon: 'success',
            timer: 2000,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
          });
        },
        error: err => {
          this.loading = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل حفظ بيانات السكن والدخل', 'error');
        }
      });
    }
    splitStatus(status) {
      if (!status) return {
        type: '---',
        value: '---'
      };
      const parts = status.split(' | ');
      if (parts.length >= 2) {
        return {
          type: parts[0],
          value: parts[1]
        };
      }
      return {
        type: '---',
        value: status
      };
    }
    getLookupKeyFromField(field) {
      if (field === 'internal' || field === 'interior') return 'interior';
      return field;
    }
    notesData = [{
      code: 101,
      date: '2025-11-19',
      text: 'تم التواصل مع العميل.'
    }, {
      code: 102,
      date: '2025-11-20',
      text: 'تم إرسال المستندات.'
    }, {
      code: 103,
      date: '2025-11-21',
      text: 'تم متابعة الطلب.'
    }];
    efadaData = [{
      serial: 1,
      efadaDate: '2025-11-19',
      efadaText: 'تم التفاوض مع العميل بخصوص التسوية.',
      reviewDate: '2025-12-01',
      nextAction: 'إرسال رسالة تذكير'
    }, {
      serial: 2,
      efadaDate: '2025-11-20',
      efadaText: 'تم إرسال المستندات المطلوبة.',
      reviewDate: '2025-12-05',
      nextAction: 'مراجعة المستندات'
    }];
    recordData = [{
      date: '2025-11-19',
      efada: 'تم التواصل مع العميل بخصوص الطلب.',
      review: 'مراجعة المستندات'
    }, {
      date: '2025-11-20',
      efada: 'تم إرسال نسخة من العقد.',
      review: 'التأكد من الاستلام'
    }, {
      date: '2025-11-21',
      efada: 'تم استكمال البيانات المطلوبة.',
      review: 'متابعة التسوية'
    }];
    // parent.component.ts
    executionsData = [{
      date: '2025-11-19',
      lastAction: 'تم إرسال الطلب',
      lastActionDate: '2025-11-18',
      nextAction: 'متابعة العميل',
      nextActionDate: '2025-11-22',
      fileLocation: 'المكتب الرئيسي',
      notes: 'تم التواصل هاتفيًا',
      user: 'أحمد علي'
    }, {
      date: '2025-11-20',
      lastAction: 'استلام المستندات',
      lastActionDate: '2025-11-19',
      nextAction: 'مراجعة المستندات',
      nextActionDate: '2025-11-23',
      fileLocation: 'الملف الإلكتروني',
      notes: 'تم حفظ نسخة PDF',
      user: 'سارة محمد'
    }];
    // parent.component.ts
    traderData = [{
      efadaDate: '2025-11-19',
      sessionType: 'جلسة أولى',
      decision: 'تأجيل',
      nextSession: '2025-12-01',
      expertsTime: '10:00 صباحًا',
      notes: 'تم حضور المحامي فقط'
    }, {
      efadaDate: '2025-11-20',
      sessionType: 'جلسة استماع',
      decision: 'قبول الطلب',
      nextSession: '2025-12-05',
      expertsTime: '11:30 صباحًا',
      notes: 'تم حضور جميع الأطراف'
    }];
    // parent.component.ts
    filesData = [{
      code: 'F001',
      debtReason: 'تأخر السداد',
      civil: 'ساري',
      fileStatus: 'مفتوح',
      client: 'شركة ABC',
      contractNumber: '12345',
      claimAmount: 5000,
      paid: 2000,
      remaining: 3000,
      subClient: 'فرع 1',
      employee: 'أحمد علي',
      batchNumber: 'B001',
      caseClient: 'CL001',
      codeClient: 'C001',
      employeeCode: 'E001'
    }, {
      code: 'F002',
      debtReason: 'تأخير دفع',
      civil: 'موقوف',
      fileStatus: 'مغلق',
      client: 'شركة XYZ',
      contractNumber: '67890',
      claimAmount: 8000,
      paid: 5000,
      remaining: 3000,
      subClient: 'فرع 2',
      employee: 'سارة محمد',
      batchNumber: 'B002',
      caseClient: 'CL002',
      codeClient: 'C002',
      employeeCode: 'E002'
    }];
    secretaryData = [{
      date: '2025-11-19',
      note: 'تم إرسال المستندات',
      name: 'أحمد علي'
    }, {
      date: '2025-11-20',
      note: 'متابعة الطلب مع العميل',
      name: 'سارة محمد'
    }, {
      date: '2025-11-21',
      note: 'تم تحديد موعد جديد',
      name: 'محمد يوسف'
    }];
    searchMenu() {
      const term = this.menuSearchForm.fullName || this.menuSearchForm.firstName || this.menuSearchForm.civilId || this.menuSearchForm.phone;
      if (!term) return;
      this.negotiationsService.search(term).subscribe({
        next: results => {
          if (results && results.length > 0) {
            // If we found results, we can either select the first one or show a list
            // For now, let's emit the first one to the parent like the sidebar does
            // Or handle it locally. The user just asked for the alert if NOT found.
            console.log('Search results:', results);
            // Optional: this.onClientSelected(results[0]);
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              title: 'تنبيه',
              text: 'لم يتم العثور على أي نتائج للبحث المدخل',
              icon: 'warning',
              confirmButtonText: 'حسناً',
              confirmButtonColor: '#6366f1'
            });
          }
        },
        error: err => {
          console.error('Search error:', err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'حدث خطأ أثناء البحث', 'error');
        }
      });
    }
    onSearchNumbers() {
      const term = this.searchNumbersForm.civilID || this.searchNumbersForm.number;
      if (!term) return;
      this.negotiationsService.search(term).subscribe({
        next: results => {
          if (results && results.length > 0) {
            // Found results
            console.log('Numbers search results:', results);
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              title: 'تنبيه',
              text: 'لم يتم العثور على أي نتائج للرقم المدني المدخل',
              icon: 'warning',
              confirmButtonText: 'حسناً',
              confirmButtonColor: '#6366f1'
            });
          }
        },
        error: err => {
          console.error('Search error:', err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'حدث خطأ أثناء البحث', 'error');
        }
      });
    }
    resetMenuSearch() {
      this.menuSearchForm = {
        fullName: '',
        firstName: '',
        middleName: '',
        lastName: '',
        familyName: '',
        civilId: '',
        unifiedNumber: '',
        phone: '',
        address: ''
      };
      console.log('Form reset.');
    }
    resetAllTables() {
      this.clientRows = [];
      this.attachments = [];
      this.payments = [];
      this.notes = [];
      this.additionalAmounts = [];
      this.audits = [];
      this.autoNumbers = [];
      this.callcenterStatements = [];
      this.statementRows = [];
      this.allStatementRows = [];
      this.searchStatementsTotal = 0;
      console.log('All tables reset.');
    }
    addEntry() {
      console.log('Add button clicked - opening new entry form.');
    }
    // الفلتر النشط الذي يتم تعيينه بواسطة الأزرار
    activeFilter = 'general';
    generateMockStatements() {
      // تم تعديل البيانات لتشمل حقل filterStatus
      return Array.from({
        length: 30
      }, (_, i) => ({
        name: `محمد جمعة خالد - ${555 + i}`,
        date: `11/1${i < 10 ? '0' + i : i}/2025`,
        reviewDate: `11/1${i < 10 ? '0' + i : i}/2025`,
        efada: i % 5 === 0 ? 'سداد مؤكد' : 'وعد بالسداد',
        employee: 'أحمد علي إبراهيم',
        contactMethod: i % 2 === 0 ? 'هاتف' : 'رسالة',
        contactStatus: 'تم الاتصال',
        cooperationStatus: 'متعاون',
        civilStatus: 'غير مصنف',
        internalStatus: 'غير مصنف',
        depositStatus: 'غير مصنف',
        totalAmount: (25000 + i * 100).toFixed(3),
        statementNumber: (554446 + i).toString(),
        lastStatementDate: `11/0${i + 1}/2025`,
        notes: 'ملاحظة عامة...',
        filterStatus: i % 5 === 0 ? 'paid' : i % 3 === 0 ? 'review' : 'statements' // تعيين حالة وهمية
      }));
    }
    /**
     * دالة عامة للبحث والفلترة - الآن تتصل بالخدمة الحقيقية
     */
    searchStatements(page = 1, showWarningIfEmpty = true) {
      this.searchStatementsPage = page;
      this.loading = true;
      const params = {
        cid: this.searchStatementsForm.civilId,
        name: this.searchStatementsForm.name,
        fromDate: this.searchStatementsForm.fromDate,
        toDate: this.searchStatementsForm.toDate,
        page: this.searchStatementsPage,
        pageSize: this.searchStatementsPageSize
      };
      console.log('Searching statements with params:', params);
      this.negotiationsService.searchCallcenterStatements(params).subscribe({
        next: res => {
          this.loading = false;
          this.statementRows = (res.items || []).map(s => ({
            name: s.clientName || 'غير معروف',
            date: s.dateAdded,
            reviewDate: s.nextDate,
            efada: s.connectedStatus,
            employee: s.userAddedName,
            contactMethod: s.contactMethod,
            contactStatus: s.connectedStatus,
            cooperationStatus: '',
            civilStatus: '',
            internalStatus: '',
            depositStatus: '',
            totalAmount: s.promiseAmount ? s.promiseAmount.toString() : '0',
            statementNumber: s.id?.toString() || s.Id?.toString() || '',
            lastStatementDate: s.dateAdded || s.DateAdded,
            notes: s.notes || s.Notes,
            civilId: s.civilID || s.civilId || s.CivilId || s.CivilID || '',
            filterStatus: 'general'
          }));
          this.searchStatementsTotal = res.totalCount || res.total || 0;
          if (this.statementRows.length === 0 && showWarningIfEmpty) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              title: 'تنبيه',
              text: 'لم يتم العثور على أي نتائج للبحث المدخل',
              icon: 'warning',
              confirmButtonText: 'حسناً'
            });
          }
        },
        error: err => {
          this.loading = false;
          console.error('Error searching statements:', err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل البحث في الإفادات', 'error');
        }
      });
    }
    onAuditPageChange(page) {
      this.auditsPage = page;
      this.pageChange.emit({
        type: 'audits',
        page: this.auditsPage
      });
    }
    prevAuditsPage() {
      if (this.auditsPage > 1) {
        this.onAuditPageChange(this.auditsPage - 1);
      }
    }
    nextAuditsPage() {
      if (this.auditsPage * this.auditsPageSize < this.auditsTotal) {
        this.onAuditPageChange(this.auditsPage + 1);
      }
    }
    onStatementPageChange(page) {
      this.statementsPage = page;
      this.pageChange.emit({
        type: 'statements',
        page: this.statementsPage
      });
    }
    prevStatementsPage() {
      if (this.statementsPage > 1) {
        this.onStatementPageChange(this.statementsPage - 1);
      }
    }
    nextStatementsPage() {
      if (this.statementsPage * this.statementsPageSize < this.statementsTotal) {
        this.onStatementPageChange(this.statementsPage + 1);
      }
    }
    prevSearchStatementsPage() {
      if (this.searchStatementsPage > 1) {
        this.searchStatements(this.searchStatementsPage - 1);
      }
    }
    nextSearchStatementsPage() {
      if (this.searchStatementsPage * this.searchStatementsPageSize < this.searchStatementsTotal) {
        this.searchStatements(this.searchStatementsPage + 1);
      }
    }
    prevNotesPage() {
      if (this.notesPage > 1) {
        this.notesPage--;
        this.pageChange.emit({
          type: 'notes',
          page: this.notesPage
        });
      }
    }
    nextNotesPage() {
      if (this.notesPage * this.notesPageSize < this.notesTotal) {
        this.notesPage++;
        this.pageChange.emit({
          type: 'notes',
          page: this.notesPage
        });
      }
    }
    prevHistoryPage() {
      if (this.historyPage > 1) {
        this.historyPage--;
        this.pageChange.emit({
          type: 'statuses',
          page: this.historyPage
        });
      }
    }
    nextHistoryPage() {
      if (this.historyPage * this.historyPageSize < this.statusesTotal) {
        this.historyPage++;
        this.pageChange.emit({
          type: 'statuses',
          page: this.historyPage
        });
      }
    }
    /**
     * تحميل ملف العميل بالكامل من خلال الرقم المدني الموجود في الإفادة
     */
    loadClientProfile(row) {
      if (!row.civilId) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'لا يوجد رقم مدني مرتبط بهذه الإفادة', 'error');
        return;
      }
      this.loading = true;
      this.negotiationsService.search(row.civilId).subscribe({
        next: results => {
          this.loading = false;
          if (results && results.length > 0) {
            // نطلب من المكون الأب تحميل هذا العميل
            this.loadClientRequest.emit(results[0]);
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              title: 'تم التحميل',
              text: `تم تحميل ملف: ${row.name} بنجاح`,
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'لم يتم العثور على الملف الرئيسي لهذا المدني', 'warning');
          }
        },
        error: err => {
          this.loading = false;
          console.error('Error loading client profile:', err);
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('خطأ', 'فشل تحميل الملف', 'error');
        }
      });
    }
    /**
     * تصدير بيانات التبويب النشط إلى ملف إكسل
     */
    exportActiveTabToExcel() {
      let dataToExport = [];
      let fileName = 'Export';
      let sheetName = 'Sheet1';
      switch (this.activeSubTab) {
        case 'files':
          dataToExport = this.clientRows.map(r => ({
            'كود الملف': r.code,
            'الاسم': r.name,
            'رقم العقد': r.contractNum,
            'المطالبة': r.claim,
            'المتبقي': r.remaining,
            'المحامي': r.lawyerName,
            'المحكمة': r.courtName
          }));
          fileName = `المديونيات_${this.selectedPerson?.clientName || ''}`;
          sheetName = 'المديونيات';
          break;
        case 'payments':
          dataToExport = this.payments.map(p => ({
            'التاريخ': p.dateAdded ? new Date(p.dateAdded).toLocaleDateString('ar-KW') : '',
            'المبلغ': p.value,
            'طريقة الدفع': p.paymentMethod,
            'بواسطة': p.userAddedName
          }));
          fileName = `الدفعات_${this.selectedPerson?.clientName || ''}`;
          sheetName = 'الدفعات';
          break;
        case 'attachments':
          dataToExport = this.attachments.map(a => ({
            'كود المرفق': a.attachCode,
            'النوع': a.attachType,
            'القيمة': a.value,
            'ملاحظات': a.notes,
            'التاريخ': a.dateAdded ? new Date(a.dateAdded).toLocaleDateString('ar-KW') : ''
          }));
          fileName = `المرفقات_${this.selectedPerson?.clientName || ''}`;
          sheetName = 'المرفقات';
          break;
        case 'history':
          dataToExport = this.audits.map(a => ({
            'الحدث': a.action,
            'الوصـف': a.description,
            'الحالة السابقة': a.previousState,
            'الحالة الحالية': a.currentState,
            'المستخدم': a.userName,
            'التاريخ': a.actionDate ? new Date(a.actionDate).toLocaleString('ar-KW') : ''
          }));
          fileName = `السجل_${this.selectedPerson?.clientName || ''}`;
          sheetName = 'سجل التدقيق';
          break;
        case 'callcenter':
          dataToExport = this.callcenterStatements.map(s => ({
            'التاريخ': s.dateAdded ? new Date(s.dateAdded).toLocaleDateString('ar-KW') : '',
            'المبلغ الموعود': s.promiseAmount,
            'الوسيلة': s.contactMethod,
            'الحالة': s.connectedStatus,
            'رقم الهاتف': s.phoneNumber,
            'صاحب الهاتف': s.phoneOwner,
            'الإجراء القادم': s.nextAction,
            'تاريخ الإجراء': s.nextDate ? new Date(s.nextDate).toLocaleDateString('ar-KW') : '',
            'الملاحظات': s.notes,
            'المستخدم': s.userAddedName
          }));
          fileName = `إفادات_الكول_سنتر_${this.selectedPerson?.clientName || ''}`;
          sheetName = 'إفادات الكول سنتر';
          break;
        default:
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'لا يوجد بيانات لتصديرها لهذا التبويب', 'info');
          return;
      }
      if (dataToExport.length === 0) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('تنبيه', 'لا توجد سجلات لتصديرها في الوقت الحالي', 'info');
        return;
      }
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.json_to_sheet(dataToExport);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(wb, ws, sheetName);
      xlsx__WEBPACK_IMPORTED_MODULE_5__.writeFile(wb, `${fileName}_${new Date().toISOString().split('T')[0]}.xlsx`);
    }
    /**
     * دالة لتنزيل نتائج البحث الحالية إلى ملف Excel
     */
    exportToExcel() {
      const dataToExport = this.statementRows.map(row => ({
        'الاسم': row.name,
        'تاريخ الإفادة': row.date,
        'الإفادة': row.efada,
        'قيمة المبلغ': row.totalAmount,
        'حالة التواصل': row.contactStatus
        // ... (إضافة بقية الأعمدة التي تريدها)
      }));
      const ws = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.json_to_sheet(dataToExport);
      const wb = xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_new();
      xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.book_append_sheet(wb, ws, 'الإفادات');
      xlsx__WEBPACK_IMPORTED_MODULE_5__.writeFile(wb, `Statements_${new Date().toISOString().split('T')[0]}.xlsx`);
      console.log('Exporting data to Excel...');
    }
    /**
     * دالة تعيين الفلتر والبحث الفوري
     */
    setFilterAndSearch(filter) {
      this.activeFilter = filter;
      this.searchStatements();
    }
    selectFile(row) {
      this.selectedFile = row;
      this.activeMainTab = 'main'; // Switch to main tab to see details
      console.log('Selected file:', row);
    }
    ngOnChanges(changes) {
      // If clientRows changes and we don't have a selected file, select the first one
      if (changes['clientRows'] && this.clientRows && this.clientRows.length > 0) {
        if (!this.selectedFile || !this.clientRows.find(x => x.id === this.selectedFile.id)) {
          this.selectedFile = this.clientRows[0];
        }
      }
      // Reset internal selection if selectedPerson changes (meaning a new client was loaded)
      if (changes['selectedPerson'] && changes['selectedPerson'].currentValue) {
        this.selectedFile = null;
        if (this.selectedPerson?.id) {
          this.loadAllCategoryHistories(this.selectedPerson.id);
        }
      }
    }
    // Getters for Total Files Summary
    get totals() {
      return {
        claimAll: this.clientRows.reduce((sum, r) => sum + (r.claim || 0), 0),
        paidAll: this.clientRows.reduce((sum, r) => sum + (r.paid || 0), 0),
        remainingAll: this.clientRows.reduce((sum, r) => sum + (r.remaining || 0), 0),
        feesAll: (this.financialData?.fees || 0) + (this.financialData?.lawFees || 0),
        proceduresAll: this.auditsTotal || 0
      };
    }
    get discountAcceptanceHistory() {
      return [...(this.categoryHistories['discount'] || []), ...(this.categoryHistories['acceptance'] || [])].sort((a, b) => new Date(b.dateAdded || b.DateAdded).getTime() - new Date(a.dateAdded || a.DateAdded).getTime());
    }
    get housingIncomeHistory() {
      return [...(this.categoryHistories['work'] || []), ...(this.categoryHistories['salarydate'] || []), ...(this.categoryHistories['incomenotes'] || [])].sort((a, b) => new Date(b.dateAdded || b.DateAdded).getTime() - new Date(a.dateAdded || a.DateAdded).getTime());
    }
    static ɵfac = function MainContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MainContent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_negotiations_service__WEBPACK_IMPORTED_MODULE_8__.NegotiationsService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MainContent,
      selectors: [["app-main-content"]],
      viewQuery: function MainContent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.lookupModal = _t.first);
        }
      },
      inputs: {
        clientRows: "clientRows",
        selectedPerson: "selectedPerson",
        financialData: "financialData",
        attachments: "attachments",
        payments: "payments",
        notes: "notes",
        additionalAmounts: "additionalAmounts",
        audits: "audits",
        autoNumbers: "autoNumbers",
        callcenterStatements: "callcenterStatements",
        classifications: "classifications",
        statuses: "statuses",
        auditsTotal: "auditsTotal",
        statementsTotal: "statementsTotal",
        notesTotal: "notesTotal",
        statusesTotal: "statusesTotal",
        statsData: "statsData",
        numbersSearchResults: "numbersSearchResults",
        bottomTable1: "bottomTable1",
        bottomTable2: "bottomTable2",
        searchNumbersForm: "searchNumbersForm",
        numbers: "numbers"
      },
      outputs: {
        pageChange: "pageChange",
        loadClientRequest: "loadClientRequest",
        saveSearch: "saveSearch",
        statusChanged: "statusChanged",
        onSaveComplete: "onSaveComplete",
        statementSaved: "statementSaved",
        contactAdded: "contactAdded"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 174,
      vars: 85,
      consts: [["lookupModal", ""], ["paymentModal", ""], ["debtModal", ""], [3, "itemSelected", "title", "columns", "data"], [1, "premium-tabs-container", "w-full", "overflow-x-auto"], [1, "premium-tab", 3, "click"], ["class", "page-content", 4, "ngIf"], [4, "ngIf"], ["dir", "rtl", "class", "p-6 rounded-lg shadow-md w-full", "style", "background-color: var(--surface-ground); border: 1px solid var(--surface-border);", 4, "ngIf"], ["class", "flex justify-center my-10", 4, "ngIf"], ["dir", "rtl", 1, "modal"], [1, "premium-modal-box", "bg-white", "dark:bg-slate-900", "text-slate-800", "dark:text-slate-200", "border", "dark:border-slate-800", "w-11/12", "max-w-4xl", "relative", "animate-in", "fade-in", "zoom-in", "duration-300", "shadow-2xl", "dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]"], [1, "absolute", "left-6", "top-6", "w-10", "h-10", "rounded-full", "flex", "items-center", "justify-center", "hover:bg-slate-100", "dark:hover:bg-slate-800", "transition-colors", "text-slate-400", "dark:text-slate-500", 3, "click"], [1, "text-xl"], [1, "modal-header", "border-b", "border-slate-100", "dark:border-slate-800", "pb-5", "mb-5", "dark:bg-transparent"], [1, "modal-header-icon", "shadow-lg", "shadow-emerald-100", "dark:shadow-none", "dark:bg-slate-800", "flex", "items-center", "justify-center", "w-14", "h-14", "rounded-2xl", "text-2xl"], [1, "font-black", "text-2xl", "tracking-tight", "text-emerald-600", "dark:text-emerald-400"], [1, "text-[10px]", "text-slate-400", "dark:text-slate-500", "font-bold", "uppercase", "tracking-[0.2em]"], ["class", "space-y-8 p-4", 4, "ngIf"], [1, "mt-8", "pt-4", "border-t", "border-slate-100", "dark:border-slate-800", "flex", "justify-end", "px-4"], ["method", "dialog"], [1, "bg-emerald-500", "hover:bg-emerald-600", "text-white", "w-full", "md:w-auto", "px-12", "h-12", "rounded-xl", "text-sm", "font-bold", "shadow-lg", "shadow-emerald-500/20", "active:scale-95", "transition-all"], [1, "premium-modal-box", "bg-white", "dark:bg-slate-900", "border", "dark:border-slate-800", "text-slate-800", "dark:text-slate-200", "w-11/12", "max-w-5xl", "relative", "animate-in", "fade-in", "zoom-in", "duration-300", "shadow-2xl", "dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]"], [1, "modal-header-icon", "shadow-lg", "shadow-blue-100", "dark:shadow-none", "dark:bg-slate-800", "flex", "flex-center", "w-14", "h-14", "rounded-2xl", "text-2xl", "items-center", "justify-center"], [1, "font-black", "text-2xl", "tracking-tight", "text-blue-600", "dark:text-blue-400"], [1, "mt-8", "pt-4", "border-t", "border-slate-100", "dark:border-slate-800", "flex", "justify-end", "px-4", "mb-2"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "w-full", "md:w-auto", "px-12", "h-12", "rounded-xl", "text-sm", "font-bold", "shadow-lg", "shadow-blue-500/20", "active:scale-95", "transition-all", 3, "click"], ["id", "promiseModal", "dir", "rtl", 1, "modal"], [1, "modal-box", "p-0", "w-[300px]", "max-w-[90vw]", "rounded-2xl", "shadow-2xl", "dark:shadow-[0_0_40px_rgba(0,0,0,0.5)]", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-900", "overflow-hidden", "text-slate-800", "dark:text-slate-200"], [1, "bg-slate-50", "dark:bg-slate-800", "px-4", "py-3", "border-b", "border-slate-100", "dark:border-slate-700", "flex", "justify-between", "items-center"], [1, "font-bold", "text-sm", "tracking-wide", "flex", "items-center", "gap-2", "text-slate-800", "dark:text-slate-100"], [1, "fas", "fa-handshake", "text-emerald-500"], ["onclick", "document.getElementById('promiseModal').close()", 1, "w-6", "h-6", "rounded-full", "hover:bg-slate-200", "dark:hover:bg-slate-700", "text-slate-400", "flex", "items-center", "justify-center", "transition-colors"], [1, "fas", "fa-times", "text-xs"], [1, "p-5", "space-y-4"], [1, "flex", "flex-col", "gap-3"], [1, "flex", "items-center", "gap-3", "cursor-pointer", "group"], ["type", "radio", "name", "promiseType", "value", "full", 1, "radio", "radio-sm", "radio-success", "border-slate-300", "dark:border-slate-600", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-bold", "text-slate-700", "dark:text-slate-300", "group-hover:text-emerald-600", "dark:group-hover:text-emerald-400", "transition-colors"], ["type", "radio", "name", "promiseType", "value", "partial", 1, "radio", "radio-sm", "radio-primary", "border-slate-300", "dark:border-slate-600", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-bold", "text-slate-700", "dark:text-slate-300", "group-hover:text-blue-600", "dark:group-hover:text-blue-400", "transition-colors"], ["type", "radio", "name", "promiseType", "value", "none", 1, "radio", "radio-sm", "radio-neutral", "border-slate-300", "dark:border-slate-600", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-bold", "text-slate-700", "dark:text-slate-300", "transition-colors"], [1, "mt-2", "transition-all", "duration-300"], [1, "relative"], ["type", "number", "dir", "ltr", "placeholder", "0.000", 1, "w-full", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-10", "px-3", "text-center", "text-lg", "font-black", "text-emerald-600", "dark:text-emerald-400", "shadow-inner", "focus:outline-none", "focus:border-emerald-500", "focus:ring-1", "focus:ring-emerald-500", "transition-all", 3, "ngModelChange", "ngModel", "disabled"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-xs", "font-bold", "text-slate-400"], [1, "bg-gray-50", "dark:bg-slate-800/50", "px-4", "py-3", "border-t", "border-slate-100", "dark:border-slate-700", "flex", "gap-2"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "flex-1", "h-9", "rounded-lg", "text-sm", "font-bold", "shadow-md", "active:scale-95", "transition-all", 3, "click"], ["onclick", "document.getElementById('promiseModal').close()", 1, "bg-white", "dark:bg-slate-800", "hover:bg-rose-50", "dark:hover:bg-rose-500/10", "text-rose-500", "dark:text-rose-400", "border", "border-slate-200", "dark:border-slate-700", "flex-1", "h-9", "rounded-lg", "text-sm", "font-bold", "active:scale-95", "transition-all"], ["id", "installmentModal", "dir", "rtl", 1, "modal"], [1, "modal-box", "p-0", "w-[400px]", "max-w-[90vw]", "rounded-2xl", "shadow-2xl", "dark:shadow-[0_0_40px_rgba(0,0,0,0.5)]", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-900", "overflow-hidden", "text-slate-800", "dark:text-slate-200"], [1, "fas", "fa-calendar-alt", "text-blue-500", "border", "border-blue-500/20", "p-1.5", "rounded", "bg-blue-50", "dark:bg-blue-900/30"], ["onclick", "document.getElementById('installmentModal').close()", 1, "w-6", "h-6", "rounded-full", "hover:bg-slate-200", "dark:hover:bg-slate-700", "text-slate-400", "flex", "items-center", "justify-center", "transition-colors"], [1, "flex", "items-center", "justify-between", "gap-4"], [1, "text-sm", "font-bold", "text-slate-700", "dark:text-slate-300", "w-24"], [1, "relative", "flex-1"], ["type", "number", "dir", "ltr", "placeholder", "0.000", 1, "w-full", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-9", "px-3", "pr-4", "text-left", "text-sm", "font-black", "text-emerald-600", "dark:text-emerald-400", "shadow-inner", "focus:outline-none", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", "transition-all", 3, "ngModelChange", "ngModel"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-xs", "font-bold", "text-slate-400"], ["type", "date", 1, "w-full", "flex-1", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-9", "px-3", "text-sm", "font-bold", "text-slate-700", "dark:text-slate-200", "shadow-inner", "focus:outline-none", "focus:border-blue-500", "focus:ring-1", "focus:ring-blue-500", "transition-all", 3, "ngModelChange", "ngModel"], [1, "bg-gray-50", "dark:bg-slate-800/50", "px-4", "py-3", "border-t", "border-slate-100", "dark:border-slate-700", "flex", "gap-2", "justify-center"], ["onclick", "document.getElementById('installmentModal').close()", 1, "bg-white", "dark:bg-slate-800", "hover:bg-rose-50", "dark:hover:bg-rose-500/10", "text-rose-500", "dark:text-rose-400", "border", "border-slate-200", "dark:border-slate-700", "w-28", "h-9", "rounded-lg", "text-sm", "font-bold", "active:scale-95", "transition-all", "shadow-sm"], [1, "bg-blue-600", "hover:bg-blue-700", "text-white", "w-28", "h-9", "rounded-lg", "text-sm", "font-bold", "shadow-md", "active:scale-95", "transition-all", 3, "click"], ["id", "reviewModal", "dir", "rtl", 1, "modal"], [1, "modal-box", "p-0", "w-[500px]", "max-w-[95vw]", "rounded-2xl", "shadow-2xl", "dark:shadow-[0_0_40px_rgba(0,0,0,0.5)]", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-900", "overflow-hidden", "text-slate-800", "dark:text-slate-200"], [1, "bg-slate-50", "dark:bg-slate-800", "px-5", "py-4", "border-b", "border-slate-100", "dark:border-slate-700", "flex", "justify-between", "items-center"], [1, "font-bold", "text-base", "tracking-wide", "flex", "items-center", "gap-3", "text-slate-800", "dark:text-slate-100"], [1, "fas", "fa-search-dollar", "text-purple-500", "border", "border-purple-500/20", "p-2", "rounded-lg", "bg-purple-50", "dark:bg-purple-900/30"], ["onclick", "document.getElementById('reviewModal').close()", 1, "w-8", "h-8", "rounded-full", "hover:bg-slate-200", "dark:hover:bg-slate-700", "text-slate-400", "flex", "items-center", "justify-center", "transition-colors"], [1, "fas", "fa-times"], [1, "p-5", "space-y-5"], [1, "space-y-3"], [1, "flex", "items-start", "gap-4", "p-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "hover:border-purple-300", "dark:hover:border-purple-600", "hover:bg-purple-50/50", "dark:hover:bg-purple-900/10", "cursor-pointer", "transition-all", "group"], ["type", "radio", "name", "reviewType", "value", "company", 1, "radio", "radio-sm", "radio-primary", "mt-1", "border-slate-300", "dark:border-slate-600", 3, "ngModelChange", "ngModel"], [1, "text-sm", "font-bold", "text-slate-800", "dark:text-slate-200", "group-hover:text-purple-700", "dark:group-hover:text-purple-400", "transition-colors"], [1, "text-xs", "font-medium", "text-slate-500", "dark:text-slate-400", "mt-1", "leading-relaxed"], ["type", "radio", "name", "reviewType", "value", "admin", 1, "radio", "radio-sm", "radio-primary", "mt-1", "border-slate-300", "dark:border-slate-600", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "reviewType", "value", "management", 1, "radio", "radio-sm", "radio-primary", "mt-1", "border-slate-300", "dark:border-slate-600", 3, "ngModelChange", "ngModel"], [1, "space-y-2", "pt-2"], [1, "text-xs", "font-bold", "text-slate-600", "dark:text-slate-400"], ["placeholder", "\u0627\u0643\u062A\u0628 \u0645\u0644\u0627\u062D\u0638\u0627\u062A\u0643 \u0647\u0646\u0627 \u0644\u064A\u062A\u0645 \u0625\u0631\u0641\u0627\u0642\u0647\u0627 \u0628\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629...", 1, "w-full", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "p-3", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-200", "shadow-inner", "focus:outline-none", "focus:border-purple-500", "focus:ring-1", "focus:ring-purple-500", "transition-all", "min-h-[80px]", "resize-none", 3, "ngModelChange", "ngModel"], [1, "bg-gray-50", "dark:bg-slate-800/50", "px-5", "py-4", "border-t", "border-slate-100", "dark:border-slate-700", "flex", "gap-3", "justify-center"], ["onclick", "document.getElementById('reviewModal').close()", 1, "bg-white", "dark:bg-slate-800", "hover:bg-rose-50", "dark:hover:bg-rose-500/10", "text-rose-500", "dark:text-rose-400", "border", "border-slate-200", "dark:border-slate-700", "w-32", "h-10", "rounded-lg", "text-sm", "font-bold", "active:scale-95", "transition-all", "shadow-sm"], [1, "bg-purple-600", "hover:bg-purple-700", "text-white", "w-32", "h-10", "rounded-lg", "text-sm", "font-bold", "shadow-md", "shadow-purple-500/20", "active:scale-95", "transition-all", 3, "click"], [3, "itemSelected"], ["class", "glass-modal-overlay", 3, "click", 4, "ngIf"], [1, "page-content"], [1, "overflow-hidden", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "shadow-sm", "bg-white", "dark:bg-slate-800", "overflow-x-auto"], [1, "premium-table", "w-full"], [1, "bg-indigo-50", "dark:bg-indigo-900/20", "text-[10px]", "uppercase", "font-bold", "text-indigo-600", "dark:text-indigo-400"], [1, "py-3", "px-4", "border-b", "border-indigo-100", "dark:border-indigo-800/50", "text-right"], [1, "text-[11px]"], ["class", "border-b border-slate-50 dark:border-slate-800 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 cursor-pointer transition-colors", 3, "click", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "dark:border-slate-800", "hover:bg-blue-50/50", "dark:hover:bg-blue-900/10", "cursor-pointer", "transition-colors", 3, "click"], [1, "py-2", "px-3", "text-center", "text-slate-400", "font-mono"], [1, "py-2", "px-3", "font-medium", "text-slate-600", "dark:text-slate-400"], [1, "py-2", "px-3", "font-bold", "text-indigo-600", "dark:text-indigo-400"], [1, "py-2", "px-3", "text-slate-400", "max-w-[100px]", "truncate", 3, "title"], [1, "py-2", "px-3", "italic"], [1, "py-2", "px-3", "text-emerald-500", "font-bold"], [1, "py-2", "px-3", "text-slate-400"], [1, "py-2", "px-3", "text-slate-400", "truncate", "max-w-[150px]", 3, "title"], ["colspan", "29", 1, "text-center", "py-20", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "flex", "flex-col", "items-center", "gap-3"], [1, "text-4xl", "grayscale", "opacity-50"], [1, "text-slate-400", "italic"], [1, "flex", "flex-col", "gap-4"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-3", "premium-card"], [1, "card-body"], [1, "form-grid"], [1, "form-field"], [1, "form-label"], ["type", "text", "readonly", "", 1, "form-input", 3, "value"], [1, "form-field", "form-field-full"], [1, "col-span-9", "premium-card"], ["title", "\u062A\u0635\u062F\u064A\u0631 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062D\u0627\u0644\u064A\u0629 \u0625\u0644\u0649 \u0645\u0644\u0641 \u0625\u0643\u0633\u0644", 1, "btn-excel", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"], ["points", "14 2 14 8 20 8"], ["x1", "16", "y1", "13", "x2", "8", "y2", "13"], ["x1", "16", "y1", "17", "x2", "8", "y2", "17"], ["points", "10 9 9 9 8 9"], ["class", "p-6", 4, "ngIf"], ["class", "p-6 space-y-6", "dir", "rtl", 4, "ngIf"], ["class", "p-2", 4, "ngIf"], ["class", "p-2 space-y-6", 4, "ngIf"], ["class", "p-8 text-center text-slate-400 italic", 4, "ngIf"], ["class", "p-4 animate-in fade-in duration-500 min-h-[400px]", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-6", "mt-4"], [1, "col-span-12", "lg:col-span-3"], [1, "premium-card", "h-full", "p-4"], [1, "text-sm", "font-bold", "mb-4", "flex", "items-center", "gap-2"], [1, "w-2", "h-6", "bg-primary", "rounded-full"], ["routerLink", "/report/add-number", 1, "premium-btn", "premium-btn-primary", "w-full"], [1, "text-lg"], ["routerLink", "/report/numbers", 1, "premium-btn", "premium-btn-secondary", "w-full"], [1, "mt-4", "pt-4", "border-t", "border-dashed", "border-slate-200"], [1, "form-label", "text-[11px]", "uppercase", "tracking-wider"], ["type", "text", "placeholder", "\u0627\u062F\u062E\u0644 \u0631\u0642\u0645 \u0627\u0644\u0643\u0634\u0641...", 1, "premium-input", "pr-10"], [1, "absolute", "right-3", "top-1/2", "-translate-y-1/2", "text-slate-400"], [1, "col-span-12", "lg:col-span-9"], [1, "premium-tabs-container", "mb-4"], [1, "premium-card", "p-0", "overflow-hidden"], [1, "card-body", "p-0"], ["class", "animate-in fade-in duration-300", 4, "ngIf"], ["class", "p-6 animate-in slide-in-from-bottom-2 duration-300", 4, "ngIf"], [1, "grid", "grid-cols-12", "gap-4", "mt-6"], [1, "col-span-12", "lg:col-span-4", "premium-card", "p-0"], [1, "card-header", "py-2", "px-3"], [1, "text-sm", "font-bold"], [1, "card-body", "p-3"], [1, "grid", "grid-cols-2", "gap-2", "mb-2"], [4, "ngFor", "ngForOf"], [1, "mt-2", "text-center"], [1, "premium-btn", "premium-btn-outline", "w-full", "py-1.5", "text-xs"], [1, "col-span-12", "lg:col-span-8", "premium-card", "p-0"], [1, "text-sm", "font-bold", "w-full", "text-center"], [1, "flex", "flex-col", "gap-2.5"], [1, "grid", "grid-cols-3", "gap-2"], [1, "premium-btn", "py-2", "px-1", "text-[11px]", "font-bold", "rounded-lg", "border", "transition-all", "duration-200", "w-full", "shadow-sm", 3, "click"], [1, "mt-4", "pt-4", "border-t", "border-slate-100", "dark:border-slate-800", "space-y-4"], [1, "text-[10px]", "font-black", "uppercase", "tracking-widest", "text-slate-400", "dark:text-slate-500", "flex", "items-center", "gap-2", "mb-2"], [1, "fas", "fa-edit"], [1, "grid", "grid-cols-2", "gap-3"], [1, "space-y-1.5"], [1, "text-[10px]", "font-bold", "text-slate-500", "dark:text-slate-400", "uppercase"], ["type", "text", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641...", 1, "w-full", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-8", "px-2", "text-xs", "font-bold", "text-blue-600", "dark:text-blue-400", "focus:outline-none", "focus:border-blue-500", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u0627\u0644\u0645\u0648\u0643\u0644\u060C \u0627\u0644\u0627\u0628\u060C \u0627\u0644\u062E...", 1, "w-full", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-8", "px-2", "text-xs", "font-bold", "text-slate-700", "dark:text-slate-300", "focus:outline-none", "focus:border-blue-500", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u0625\u0639\u0627\u062F\u0629 \u0627\u062A\u0635\u0627\u0644\u060C \u0631\u0641\u0639 \u0625\u062C\u0631\u0627\u0621...", 1, "w-full", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-8", "px-2", "text-xs", "font-bold", "text-slate-700", "dark:text-slate-300", "focus:outline-none", "focus:border-blue-500", "transition-all", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "w-full", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-8", "px-2", "text-xs", "font-bold", "text-slate-700", "dark:text-slate-300", "focus:outline-none", "focus:border-blue-500", "transition-all", 3, "ngModelChange", "ngModel"], ["placeholder", "\u0627\u0643\u062A\u0628 \u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u0643\u0627\u0644\u0645\u0629 \u0623\u0648 \u0623\u064A \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0623\u062E\u0631\u0649 \u0647\u0646\u0627...", 1, "w-full", "bg-slate-50", "dark:bg-slate-950", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "p-2", "text-xs", "font-semibold", "text-slate-700", "dark:text-slate-200", "shadow-inner", "focus:outline-none", "focus:border-blue-500", "min-h-[50px]", "resize-none", "transition-all", 3, "ngModelChange", "ngModel"], [1, "bg-slate-50/80", "dark:bg-slate-800/80", "mt-4", "rounded-xl", "p-3", "border", "border-slate-100", "dark:border-slate-700", "transition-all", "flex", "items-center", "justify-between", "shadow-inner"], [1, "flex", "items-center", "gap-3", "text-[11px]"], [1, "font-bold", "text-slate-700", "dark:text-slate-300"], [1, "text-slate-500", "dark:text-slate-400", "font-medium", "px-2", "py-1", "bg-white", "dark:bg-slate-900", "rounded", "border", "border-slate-200", "dark:border-slate-700", "shadow-sm", "min-w-24", "text-center"], [1, "text-slate-400"], [1, "text-slate-500", "dark:text-slate-400", "font-medium", "px-2", "py-1", "bg-white", "dark:bg-slate-900", "rounded", "border", "border-slate-200", "dark:border-slate-700", "shadow-sm", "min-w-32", "text-center", "text-primary", "dark:text-primary"], [1, "premium-btn", "premium-btn-primary", "py-1", "px-4", "text-xs", "font-bold", "shadow-md", "hover:shadow-lg", "transition-all", 3, "click"], [1, "ml-1", "text-sm"], [1, "premium-card", "mt-6"], [1, "card-body", "p-0", "md:p-4"], [1, "premium-tabs-container", "w-full", "overflow-x-auto", "mb-4", 2, "margin-bottom", "1.5rem"], ["role", "tab", 1, "premium-tab", 3, "click"], ["class", "mt-4", 4, "ngIf"], ["dir", "rtl", 1, "grid", "grid-cols-12", "gap-6", "p-2"], [1, "col-span-12", "lg:col-span-8", "space-y-6"], [1, "form-grid", "form-grid-3"], ["type", "text", "readonly", "", 1, "premium-input", 3, "value"], [1, "premium-card", "p-4"], [1, "premium-tabs-container", "w-full", "overflow-x-auto", "mb-4", 2, "margin-bottom", "1rem", "padding", "0.25rem"], [1, "premium-tab", "text-sm", 3, "click"], ["class", "premium-input", "rows", "4", "readonly", "", 3, "value", 4, "ngIf"], [1, "flex", "flex-col", "xl:flex-row", "justify-between", "gap-6"], [1, "premium-card", 2, "flex", "2", "margin-bottom", "0 !important"], [1, "grid", "grid-cols-2", "gap-4"], ["type", "date", "readonly", "", 1, "premium-input", 3, "value"], [1, "flex", "flex-col", "gap-4", 2, "flex", "1"], [1, "premium-card", "p-4", 2, "margin-bottom", "0 !important"], [1, "form-label", "mb-3"], [1, "premium-radio-group"], ["class", "premium-radio-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-span-12", "lg:col-span-4", "space-y-6"], [1, "form-grid", "grid-cols-1"], [1, "flex", "gap-2"], ["type", "text", "readonly", "", 1, "premium-input", 2, "flex", "1", 3, "value"], [1, "premium-btn", "premium-btn-outline", "px-4", 3, "click"], [1, "form-label", "mb-4"], [1, "premium-btn", "bg-emerald-500", "hover:bg-emerald-600", "text-white", "border-none", "shadow-sm", "w-full"], [1, "premium-btn", "premium-btn-secondary", "w-full"], ["rows", "4", "readonly", "", 1, "premium-input", 3, "value"], [1, "premium-radio-item", 3, "click"], ["type", "radio", "name", "comms_lang", 3, "value", "checked"], ["type", "radio", "name", "gender", 3, "value", "checked"], [1, "p-6"], ["dir", "rtl", 1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-x-12", "gap-y-4"], [1, "space-y-4"], ["type", "text", "readonly", "", 1, "premium-input", "text-center", "font-bold", "text-indigo-600", "bg-slate-50/50", 3, "value"], [1, "text-sm", "font-bold", "text-slate-700", "w-40", "text-right"], ["type", "text", "readonly", "", 1, "premium-input", "text-center", "font-bold", "text-emerald-600", "bg-slate-50/50", 3, "value"], ["type", "text", "readonly", "", 1, "premium-input", "text-center", "font-bold", "text-rose-600", "bg-slate-50/50", 3, "value"], ["type", "text", "readonly", "", 1, "premium-input", "text-center", "font-bold", "text-slate-600", "bg-slate-50/50", 3, "value"], ["type", "text", "readonly", "", 1, "premium-input", "text-center", "font-bold", "text-indigo-800", "bg-slate-50/50", 3, "value"], ["type", "text", "readonly", "", 1, "premium-input", "text-center", "font-bold", "text-slate-500", "bg-slate-50/50", 3, "value"], ["type", "text", "readonly", "", 1, "premium-input", "text-center", "font-bold", "text-rose-800", "bg-slate-50/50", 3, "value"], ["dir", "rtl", 1, "p-6", "space-y-6"], [1, "flex", "items-center", "justify-between", "border-b", "border-slate-100", "pb-4"], [1, "flex", "items-center", "gap-3"], [1, "p-2", "bg-indigo-50", "rounded-xl"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5", "text-indigo-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.826c.001-.001 0-1.101 0-1.101m0 0l4-4a4 4 0 015.656 5.656l-1.1 1.1"], [1, "text-lg", "font-bold", "text-slate-800"], [1, "text-xs", "text-slate-500"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "rounded-lg", "text-sm", "font-bold", "transition-all", 3, "click"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-8"], [1, "space-y-1"], [1, "text-[10px]", "font-black", "text-slate-400", "uppercase", "tracking-widest"], ["type", "text", "readonly", "", 1, "premium-input", "bg-slate-50", "font-bold", 3, "value"], ["type", "text", "readonly", "", 1, "premium-input", "bg-slate-50", "font-mono", 3, "value"], [1, "text-[10px]", "font-black", "text-indigo-500", "uppercase", "tracking-widest"], ["type", "number", 1, "premium-input", "bg-indigo-50/50", "border-indigo-200", "text-indigo-700", "font-black", "text-lg", 3, "ngModelChange", "ngModel"], ["type", "text", "readonly", "", 1, "premium-input", "bg-slate-50", 3, "value"], [1, "text-[10px]", "font-black", "text-emerald-500", "uppercase", "tracking-widest"], ["type", "text", 1, "premium-input", "pl-10", "bg-emerald-50/30", "border-emerald-100", "text-emerald-700", "font-bold", 3, "ngModelChange", "ngModel"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "absolute", "left-3", "top-2.5", "text-emerald-400"], ["d", "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.44-9.89 9.886-.001 2.15.614 3.735 1.648 5.41l-.999 3.647 3.841-.986zm11.387-5.477c-.31-.156-1.834-.905-2.112-1.006-.277-.101-.48-.151-.68.151-.202.303-.778 1.006-.955 1.208-.177.202-.355.226-.665.071-1.297-.648-2.13-1.153-2.969-2.585-.23-.393-.23-.393.103-.79.314-.374.68-.813.882-1.006l.325-.494c.156-.303.078-.567-.039-.79-.117-.224-.68-1.641-.933-2.25-.246-.591-.497-.504-.68-.514l-.578-.01c-.202 0-.528.077-.803.376-.276.301-1.054 1.03-1.054 2.513 0 1.485 1.079 2.918 1.229 3.12.151.201 2.126 3.245 5.15 4.549 3.023 1.305 3.023.87 3.578.82.555-.05 1.833-.749 2.091-1.478.257-.73.257-1.359.18-1.484-.076-.126-.28-.203-.591-.359z"], [1, "space-y-2"], [1, "flex-1", "py-2", "rounded-lg", "text-sm", "font-bold", "border", "transition-all", 3, "click"], [1, "space-y-1", "pt-2"], ["type", "text", "readonly", "", 1, "premium-input", "bg-slate-50", "text-xs", "font-mono", "text-indigo-600", "flex-1", 3, "value"], ["title", "\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637", 1, "p-2.5", "bg-slate-100", "hover:bg-slate-200", "text-slate-600", "rounded-lg", "transition-colors", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M8 5H6a2 2 0 00-2 2v12a2 2 0 00 2 2h10a2 2 0 00 2-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"], [1, "premium-input", "w-full", "min-h-[120px]", "bg-slate-50", "text-sm", "leading-relaxed", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "gap-3", "pt-4"], [1, "premium-btn", "bg-emerald-600", "hover:bg-emerald-700", "text-white", "border-none", "py-3", "px-10", "shadow-lg", "shadow-emerald-200", 3, "click"], [1, "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], [1, "p-2"], ["class", "border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-700/30 cursor-pointer transition-colors", 3, "click", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "dark:border-slate-800", "hover:bg-slate-50/80", "dark:hover:bg-slate-700/30", "cursor-pointer", "transition-colors", 3, "click"], [1, "py-2", "px-3", "text-slate-500"], [1, "py-2", "px-3", "font-bold", "text-rose-600"], [1, "py-2", "px-3", "font-bold", "text-emerald-600"], [1, "py-2", "px-3", "font-bold", "text-indigo-600"], ["colspan", "8", 1, "text-center", "py-12", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "p-2", "space-y-6"], [1, "flex", "items-center", "gap-2", "mb-3"], [1, "w-1.5", "h-4", "bg-emerald-500", "rounded-full"], [1, "text-xs", "font-black", "text-slate-500", "uppercase", "tracking-wider"], ["class", "border-b border-slate-50 dark:border-slate-800 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/10 cursor-pointer transition-colors", 3, "click", 4, "ngFor", "ngForOf"], [1, "w-1.5", "h-4", "bg-amber-500", "rounded-full"], ["class", "border-b border-slate-50 dark:border-slate-800 hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-colors", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "dark:border-slate-800", "hover:bg-emerald-50/30", "dark:hover:bg-emerald-900/10", "cursor-pointer", "transition-colors", 3, "click"], [1, "py-2", "px-3", "font-medium", "text-slate-600"], [1, "py-2", "px-3", "text-slate-400", "font-mono"], [1, "py-2", "px-3"], [1, "px-2", "py-0.5", "rounded-lg", "bg-indigo-50", "dark:bg-indigo-900/30", "text-indigo-600", "dark:text-indigo-300", "text-[10px]", "font-bold"], ["colspan", "7", 1, "text-center", "py-10", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "border-b", "border-slate-50", "dark:border-slate-800", "hover:bg-amber-50/30", "dark:hover:bg-amber-900/10", "transition-colors"], [1, "py-2", "px-3", "font-bold", "text-amber-600"], [1, "py-2", "px-3", "text-slate-500", "font-medium"], ["colspan", "3", 1, "text-center", "py-10", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "w-1.5", "h-4", "bg-indigo-500", "rounded-full"], ["class", "border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "w-1.5", "h-4", "bg-slate-400", "rounded-full"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-4"], ["class", "p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 transition-all hover:border-indigo-200", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "dark:border-slate-800", "hover:bg-slate-50/50", "transition-colors"], [1, "py-2", "px-3", "text-slate-400", "font-mono", "text-[10px]"], [1, "py-2", "px-3", "text-slate-400", "italic"], ["colspan", "5", 1, "text-center", "py-10", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "p-4", "rounded-2xl", "bg-slate-50/50", "dark:bg-slate-800/50", "border", "border-slate-100", "dark:border-slate-700", "transition-all", "hover:border-indigo-200"], [1, "text-[9px]", "uppercase", "text-slate-400", "dark:text-slate-500", "font-bold", "mb-1"], [1, "text-sm", "font-bold", "text-slate-700", "dark:text-slate-300"], [1, "p-8", "text-center", "text-slate-400", "italic"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["class", "flex items-center justify-between p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all", 4, "ngFor", "ngForOf"], ["class", "col-span-2 text-center p-12 bg-slate-50/20 dark:bg-slate-900/10 rounded-2xl text-slate-400 italic", 4, "ngIf"], [1, "flex", "items-center", "justify-between", "p-3", "rounded-xl", "bg-white", "dark:bg-slate-800", "border", "border-slate-100", "dark:border-slate-700", "shadow-sm", "hover:shadow-md", "transition-all"], [1, "w-10", "h-10", "rounded-lg", "bg-primary/10", "flex", "items-center", "justify-center", "text-primary"], [1, "text-[10px]", "text-slate-400", "dark:text-slate-500"], [1, "premium-btn", "premium-btn-outline", "text-xs", 3, "click"], [1, "col-span-2", "text-center", "p-12", "bg-slate-50/20", "dark:bg-slate-900/10", "rounded-2xl", "text-slate-400", "italic"], [1, "py-2", "px-3", "text-slate-400", "text-[10px]", "font-mono"], [1, "px-2", "py-0.5", "rounded", "text-[9px]", "font-black", "uppercase", "tracking-tighter", 3, "ngClass"], [1, "py-2", "px-3", "text-slate-600", "dark:text-slate-400", "text-xs"], [1, "w-5", "h-5", "rounded-full", "bg-indigo-50", "flex", "items-center", "justify-center", "text-[9px]", "font-bold", "text-indigo-600", "border", "border-indigo-100"], [1, "font-medium", "text-slate-500"], ["colspan", "4", 1, "text-center", "py-12", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-4"], ["class", "p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary transition-all group", 4, "ngFor", "ngForOf"], ["class", "col-span-full text-center p-12 bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500", 4, "ngIf"], [1, "p-4", "rounded-2xl", "bg-gradient-to-br", "from-white", "to-slate-50", "dark:from-slate-800", "dark:to-slate-800", "border", "border-slate-100", "dark:border-slate-700", "shadow-sm", "hover:border-primary", "transition-all", "group"], [1, "flex", "justify-between", "items-start", "mb-3"], [1, "text-[10px]", "text-slate-400", "dark:text-slate-500", "font-bold", "uppercase", "tracking-wider"], [1, "px-2", "py-0.5", "rounded", "text-[10px]", "font-bold", 3, "ngClass"], [1, "text-lg", "font-bold", "text-primary", "dark:text-primary-focus", "mb-1"], [1, "text-xs", "text-slate-600", "dark:text-slate-400", "mb-3", "flex", "items-center", "gap-1"], [1, "opacity-50"], [1, "space-y-2", "text-sm", "border-t", "border-slate-50", "dark:border-slate-700", "pt-3"], [1, "flex", "justify-between"], [1, "text-slate-400", "dark:text-slate-500"], [1, "font-medium", "text-slate-700", "dark:text-slate-300"], [1, "mt-4", "p-2", "bg-slate-50", "dark:bg-slate-700/50", "rounded-xl", "text-xs", "text-slate-500", "dark:text-slate-400", "italic"], [1, "col-span-full", "text-center", "p-12", "bg-slate-50", "dark:bg-slate-800", "rounded-3xl", "border-2", "border-dashed", "border-slate-200", "dark:border-slate-700", "text-slate-400", "dark:text-slate-500"], [1, "text-4xl", "mb-2"], [1, "p-4", "animate-in", "fade-in", "duration-500", "min-h-[400px]"], [1, "flex", "items-center", "justify-between", "mb-6"], [1, "w-10", "h-10", "rounded-xl", "bg-primary/10", "flex", "items-center", "justify-center", "text-primary", "shadow-inner"], [1, "text-lg", "font-black", "text-slate-800", "tracking-tight", "font-sans"], [1, "text-[10px]", "text-slate-400", "font-bold", "uppercase", "tracking-widest"], [1, "premium-btn", "premium-btn-primary", "flex", "items-center", "gap-2", "px-6", "py-2", "group", "text-xs", 3, "click", "disabled"], ["class", "w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin", 4, "ngIf"], [1, "classification-grid"], [1, "premium-card", "status-card"], [1, "status-card-header", "mb-2"], [1, "status-icon-box", "bg-blue-50", "text-blue-500"], [1, "status-label-main", "text-[11px]"], [1, "status-sub-label"], [1, "premium-input", "text-[11px]", "font-bold", "h-9", "flex-grow", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "mini-save-btn", 3, "click"], [1, "status-history-area"], [1, "micro-history-container", "custom-scrollbar", "overflow-y-auto", "mt-2"], [1, "micro-history-table"], ["class", "flex justify-center mt-2", 4, "ngIf"], [1, "status-icon-box", "bg-emerald-50", "text-emerald-500"], [1, "status-icon-box", "bg-amber-50", "text-amber-500"], [1, "status-icon-box", "bg-purple-50", "text-purple-500"], [1, "status-icon-box", "bg-rose-50", "text-rose-500"], [1, "status-icon-box", "bg-indigo-50", "text-indigo-500"], [1, "status-icon-box", "bg-slate-50", "text-slate-500"], [1, "status-icon-box", "bg-cyan-50", "text-cyan-500"], [1, "status-icon-box", "bg-teal-50", "text-teal-500"], [1, "status-icon-box", "bg-lime-50", "text-lime-500"], [1, "status-sub-label", "text-[9px]", "opacity-70"], [1, "premium-card", "status-card", "status-card-marked"], [1, "status-card-header", "mb-2", "border-b-0", "flex", "justify-between", "items-center"], ["title", "\u0639\u0631\u0636 \u0627\u0644\u0633\u062C\u0644", 1, "text-[10px]", "p-1.5", "rounded-full", "hover:bg-amber-50", "text-amber-500", "transition-colors", 3, "click"], [1, "relative", "flex-grow"], ["type", "number", "placeholder", "0%", 1, "premium-input", "text-[11px]", "font-bold", "h-9", "pr-7", 3, "ngModelChange", "ngModel"], [1, "absolute", "right-2", "top-1/2", "-translate-y-1/2", "text-[10px]", "text-slate-400", "font-bold"], [1, "premium-input", "text-[11px]", "font-bold", "h-9", "w-24", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "\u0642\u0628\u0648\u0644"], ["value", "\u0631\u0641\u0636"], ["value", "\u0645\u0639\u0644\u0642"], ["title", "\u062D\u0641\u0638", 1, "mini-save-btn", 3, "click"], ["title", "\u0639\u0631\u0636 \u0627\u0644\u0633\u062C\u0644", 1, "text-[10px]", "p-1.5", "rounded-full", "hover:bg-slate-100", "text-slate-400", "transition-colors", 3, "click"], ["type", "text", "placeholder", "\u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644...", 1, "premium-input", "text-[11px]", "font-bold", "h-9", "flex-grow", 3, "ngModelChange", "ngModel"], ["title", "\u0639\u0631\u0636 \u0627\u0644\u0633\u062C\u0644", 1, "text-[10px]", "p-1.5", "rounded-full", "hover:bg-emerald-50", "text-emerald-500", "transition-colors", 3, "click"], ["type", "date", 1, "premium-input", "text-[10px]", "font-bold", "h-9", "flex-grow", 3, "ngModelChange", "ngModel"], ["placeholder", "\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0627\u0644\u062F\u062E\u0644...", 1, "premium-input", "text-[10px]", "h-10", "py-1", "mt-1", 3, "ngModelChange", "ngModel"], [1, "w-3", "h-3", "border-2", "border-white/30", "border-t-white", "rounded-full", "animate-spin"], [1, "truncate", "max-w-[50px]", 3, "title"], [1, "status-badge-mini", "bg-blue-50", "text-blue-600"], ["colspan", "3", 1, "text-center", "py-2", "text-slate-400", "italic", "text-[10px]"], [1, "flex", "justify-center", "mt-2"], [1, "text-[10px]", "font-bold", "text-blue-500", "hover:text-blue-700", "bg-blue-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-emerald-50", "text-emerald-600"], [1, "text-[10px]", "font-bold", "text-emerald-500", "hover:text-emerald-700", "bg-emerald-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-amber-50", "text-amber-600"], [1, "text-[10px]", "font-bold", "text-amber-500", "hover:text-amber-700", "bg-amber-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-purple-50", "text-purple-600"], [1, "text-[10px]", "font-bold", "text-purple-500", "hover:text-purple-700", "bg-purple-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-rose-50", "text-rose-600"], [1, "text-[10px]", "font-bold", "text-rose-500", "hover:text-rose-700", "bg-rose-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-indigo-50", "text-indigo-600"], [1, "text-[10px]", "font-bold", "text-indigo-500", "hover:text-indigo-700", "bg-indigo-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-slate-100", "text-slate-600"], [1, "text-[10px]", "font-bold", "text-slate-500", "hover:text-slate-700", "bg-slate-100/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-cyan-50", "text-cyan-600"], [1, "text-[10px]", "font-bold", "text-cyan-500", "hover:text-cyan-700", "bg-cyan-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-teal-50", "text-teal-600"], [1, "text-[10px]", "font-bold", "text-teal-500", "hover:text-teal-700", "bg-teal-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "status-badge-mini", "bg-lime-50", "text-lime-600"], [1, "text-[10px]", "font-bold", "text-lime-500", "hover:text-lime-700", "bg-lime-50/50", "px-3", "py-1", "rounded-lg", "transition-all", "active:scale-95", 3, "click"], [1, "animate-in", "fade-in", "duration-300"], [1, "overflow-x-auto"], [1, "premium-table"], [1, "text-center", "w-16"], [1, "text-center"], [1, "text-center", "text-slate-400", "font-mono", "text-xs"], [1, "font-bold", "text-slate-700"], [1, "px-2", "py-1", "rounded-full", "text-[10px]", "font-bold", 3, "ngClass"], ["colspan", "5", 1, "text-center", "py-4", "text-slate-500"], [1, "p-6", "animate-in", "slide-in-from-bottom-2", "duration-300"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "max-w-2xl"], [1, "form-label", "text-xs", "uppercase", "tracking-wider", "text-slate-500", "font-bold", "mb-1"], ["type", "text", "name", "phone", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0644\u0631\u0642\u0645...", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "relation", "placeholder", "\u0645\u062B\u0644: \u0635\u0627\u062D\u0628 \u0627\u0644\u0631\u0642\u0645\u060C \u0623\u062E\u060C \u0623\u0628...", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "source", "placeholder", "\u062A\u062D\u062F\u064A\u062F \u0627\u0644\u0645\u0635\u062F\u0631...", 1, "premium-input", 3, "ngModelChange", "ngModel"], ["name", "status", 1, "premium-input", "bg-white", "cursor-pointer", "hover:bg-slate-50", "transition-colors", 3, "ngModelChange", "ngModel"], ["value", "\u0646\u0634\u0637"], ["value", "\u063A\u064A\u0631 \u0646\u0634\u0637"], ["value", "\u0645\u063A\u0644\u0642"], [1, "md:col-span-2", "flex", "justify-end", "gap-3", "mt-4"], [1, "premium-btn", "premium-btn-secondary", "px-8", 3, "click"], [1, "premium-btn", "premium-btn-primary", "px-8", 3, "click"], [1, "premium-btn", "py-2", "px-1", "text-[11px]", "font-bold", "rounded-lg", "border", "transition-all", "duration-200", "shadow-sm", 3, "click"], [1, "mt-4"], [1, "flex", "items-center", "justify-between", "mb-3", "bg-indigo-50/50", "dark:bg-indigo-900/10", "p-3", "rounded-xl", "border", "border-indigo-100", "dark:border-indigo-800/30"], [1, "premium-btn", "premium-btn-outline", "px-3", "py-1", "text-[10px]", "flex", "items-center", "gap-1", 3, "click", "disabled"], [1, "px-2", "py-1", "bg-white", "dark:bg-slate-800", "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", "text-[10px]", "font-bold", "text-slate-600", "dark:text-slate-300", "shadow-sm"], [1, "py-2", "px-3", "font-mono", "text-slate-400"], ["dir", "ltr", 1, "py-2", "px-3", "text-slate-500"], [1, "py-2", "px-3", "text-slate-700", "dark:text-slate-300"], [1, "flex", "items-center", "justify-between", "mb-3", "bg-emerald-50/50", "dark:bg-emerald-900/10", "p-3", "rounded-xl", "border", "border-emerald-100", "dark:border-emerald-800/30"], [1, "py-3", "px-4", "border-b", "border-indigo-100", "dark:border-indigo-800/50", "text-right", "w-1/4"], ["class", "border-b border-slate-50 dark:border-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-700/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "dark:border-slate-800", "hover:bg-slate-50/80", "dark:hover:bg-slate-700/30", "transition-colors"], [1, "py-2", "px-3", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "px-2", "py-0.5", "rounded-lg", "bg-blue-50", "dark:bg-blue-900/30", "text-blue-600", "dark:text-blue-300", "font-bold", "border", "border-blue-100", "dark:border-blue-800/50", "text-[10px]"], [1, "py-2", "px-3", "font-mono", "text-indigo-600"], [1, "py-2", "px-3", "font-black", "text-emerald-600"], [1, "py-2", "px-3", "text-slate-500", "italic"], [1, "flex", "items-center", "gap-1"], [1, "w-4", "h-4", "rounded-full", "bg-slate-100", "flex", "items-center", "justify-center", "text-[8px]", "font-bold", "text-slate-500", "border", "border-slate-200"], ["colspan", "11", 1, "text-center", "py-12", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "flex", "items-center", "justify-between", "mb-3", "bg-slate-50/50", "dark:bg-slate-800/50", "p-3", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700"], [1, "font-bold", "text-sm"], [1, "bg-slate-50", "dark:bg-slate-800/50", "text-[10px]", "uppercase", "font-bold", "text-slate-500"], [1, "py-2", "px-3", "border-b", "border-slate-100", "dark:border-slate-700", "text-right"], ["class", "border-b border-slate-50 dark:border-slate-800", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "dark:border-slate-800"], [1, "py-2", "px-3", "font-bold", "text-blue-600", "dark:text-blue-400"], [1, "py-2", "px-3", "text-slate-600", "dark:text-slate-300"], [1, "py-2", "px-3", "font-semibold", "text-slate-500"], ["colspan", "4", 1, "text-center", "py-6", "text-slate-400", "italic", "bg-slate-50/30", "dark:bg-slate-900/10"], [1, "flex", "items-center", "justify-between", "mb-4", "bg-indigo-50/50", "dark:bg-indigo-900/10", "p-3", "rounded-xl", "border", "border-indigo-100", "dark:border-indigo-800/30"], [1, "w-8", "h-8", "rounded-lg", "bg-indigo-600", "flex", "items-center", "justify-center", "text-white", "shadow-lg"], [1, "font-bold", "text-indigo-900", "dark:text-indigo-100"], [1, "premium-btn", "premium-btn-outline", "px-3", "py-1.5", "text-xs", "flex", "items-center", "gap-1", 3, "click", "disabled"], [1, "px-3", "py-1.5", "bg-white", "dark:bg-slate-800", "rounded-lg", "border", "border-slate-200", "dark:border-slate-700", "text-xs", "font-bold", "text-slate-600", "dark:text-slate-300", "shadow-sm"], [1, "overflow-hidden", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "shadow-sm", "bg-white", "dark:bg-slate-800"], [1, "py-3", "px-4", "font-mono", "text-slate-400"], [1, "py-3", "px-4", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "py-3", "px-4"], [1, "w-6", "h-6", "rounded-full", "bg-slate-100", "dark:bg-slate-700", "flex", "items-center", "justify-center", "text-[10px]", "text-slate-500", "font-bold", "border", "border-slate-200", "dark:border-slate-600"], [1, "font-medium", "text-slate-600", "dark:text-slate-400"], [1, "px-2", "py-0.5", "rounded", "text-[10px]", "bg-indigo-50", "dark:bg-indigo-900/30", "text-indigo-600", "dark:text-indigo-400", "border", "border-indigo-100", "dark:border-indigo-800/50", "font-bold"], [1, "px-3", "py-1", "rounded-lg", "bg-emerald-50", "dark:bg-emerald-900/30", "text-emerald-700", "dark:text-emerald-300", "font-bold", "border", "border-emerald-100", "dark:border-emerald-800/50", "shadow-sm"], ["colspan", "5", 1, "text-center", "py-12", "text-slate-400", "italic", "bg-slate-50/30", "dark:bg-slate-900/5"], [1, "flex", "flex-col", "items-center", "gap-2"], [1, "text-2xl"], [1, "w-1.5", "h-4", "bg-rose-500", "rounded-full"], ["class", "border-b border-slate-50 hover:bg-slate-50/50 transition-colors", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "hover:bg-slate-50/50", "transition-colors"], ["colspan", "9", 1, "text-center", "py-10", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "py-2", "px-3", "text-slate-700"], [1, "font-bold", "mb-2"], [1, "w-1.5", "h-4", "bg-blue-500", "rounded-full"], ["class", "border-b border-slate-50 dark:border-slate-800 hover:bg-blue-50/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "dark:border-slate-800", "hover:bg-blue-50/30", "transition-colors"], [1, "px-2", "py-0.5", "rounded-lg", "bg-emerald-50", "text-emerald-600", "border", "border-emerald-100", "text-[10px]", "font-bold"], [1, "py-2", "px-3", "font-bold", "text-slate-700"], [1, "py-2", "px-3", "font-black", "text-rose-600"], [1, "py-2", "px-3", "text-slate-700", "dark:text-slate-300", "leading-relaxed"], [1, "w-4", "h-4", "rounded-full", "bg-indigo-50", "flex", "items-center", "justify-center", "text-[8px]", "font-bold", "text-indigo-600", "border", "border-indigo-100"], ["class", "border-b border-slate-50 dark:border-slate-800 hover:bg-indigo-50/30 transition-colors", 4, "ngFor", "ngForOf"], [1, "border-b", "border-slate-50", "dark:border-slate-800", "hover:bg-indigo-50/30", "transition-colors"], [1, "py-2", "px-3", "font-mono", "font-bold", "text-indigo-600"], [1, "py-2", "px-3", "font-semibold", "text-slate-600", "dark:text-slate-300"], ["colspan", "7", 1, "text-center", "py-12", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "flex", "h-full", "gap-4", "p-2"], [1, "w-100", "flex", "flex-col", "gap-3", "shrink-0", "bg-gray-50", "p-3", "border", "border-gray-300", "rounded-lg", "shadow-md", "overflow-y-auto"], [1, "space-y-2", "pb-3"], [1, "flex", "items-center", "gap-2", "text-xs"], [1, "font-bold", "text-gray-700", "w-12"], ["type", "text", 1, "input", "input-xs", "input-bordered", "w-full", "rounded-none", "h-6", "border-gray-400", 3, "ngModelChange", "ngModel"], ["type", "text", 1, "input", "input-xs", "input-bordered", "w-full", "rounded-none", "h-6", "border-gray-400", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "font-bold", "text-gray-700", "w-24"], ["type", "date", 1, "input", "input-xs", "input-bordered", "w-full", "rounded-none", "h-6", "border-gray-400", 3, "ngModelChange", "ngModel"], [1, "space-y-2", "border-b", "pb-3", "border-gray-300"], [1, "font-bold", "text-gray-800", "text-sm", "border-b", "border-gray-400", "pb-1"], [1, "font-bold", "text-gray-700", "w-16"], [1, "font-bold", "text-gray-700", "w-28"], [1, "flex", "justify-center", "gap-2", "shrink-0", "mt-3"], [1, "btn", "btn-sm", "bg-green-700", "hover:bg-green-800", "text-white", "shadow-sm", "rounded-none", "h-8", "min-h-0", "px-6"], [1, "btn", "btn-sm", "bg-green-700", "hover:bg-green-800", "text-white", "shadow-sm", "rounded-none", "h-8", "min-h-0", "px-6", 3, "click"], [1, "space-y-2", "border-t", "pt-3", "border-gray-300"], [1, "font-bold", "text-gray-700", "block"], ["type", "text", 1, "input", "input-xs", "input-bordered", "w-full", "rounded-none", "h-6"], [1, "select", "select-xs", "select-bordered", "w-full", "rounded-none", "border-gray-400", "h-6", "min-h-0", "bg-white"], [1, "btn", "btn-xs", "bg-gray-200", "hover:bg-gray-300", "text-gray-700", "border-gray-400", "shadow-sm", "rounded-none", "h-6", "min-h-0", "px-4"], [1, "flex-grow", "flex", "flex-col", "gap-4"], [1, "flex-grow", "overflow-hidden", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "shadow-sm", "bg-white", "dark:bg-slate-800"], [1, "overflow-auto", "h-full"], [1, "flex", "gap-4", "shrink-0", "h-48", "mb-2"], [1, "flex-1", "overflow-hidden", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700", "shadow-sm", "bg-white", "dark:bg-slate-800"], [1, "py-2", "px-4", "border-b", "border-indigo-100", "dark:border-indigo-800/50", "text-right"], [1, "py-2", "px-3", "text-slate-500", "font-mono"], [1, "px-2", "py-0.5", "rounded", "bg-slate-50", "dark:bg-slate-900", "border", "border-slate-200", "dark:border-slate-700", "text-[10px]", "font-bold", "text-slate-500"], [1, "py-2", "px-4", "font-bold", "text-indigo-600"], [1, "py-2", "px-4", "text-slate-500"], ["colspan", "2", 1, "text-center", "py-6", "text-slate-400", "italic"], ["dir", "rtl", 1, "p-6", "rounded-lg", "shadow-md", "w-full", 2, "background-color", "var(--surface-ground)", "border", "1px solid var(--surface-border)"], [1, "text-xl", "font-bold", "mb-6", 2, "color", "var(--text-color)"], [1, "grid", "grid-cols-2", "gap-4", "w-full", "max-w-3xl", "text-sm"], [1, "col-span-2", "flex", "items-center", "gap-4"], [1, "w-32", "font-bold", 2, "color", "var(--text-color)"], ["type", "text", "name", "fullName", 1, "input", "input-sm", "w-full", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-span-2", "grid", "grid-cols-12", "gap-4", "items-center"], [1, "w-32", "font-bold", "col-span-2", "flex", "items-center", 2, "color", "var(--text-color)"], ["type", "text", "placeholder", "\u0627\u0644\u0627\u0633\u0645", "name", "firstName", 1, "col-span-2", "input", "input-sm", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "text", "placeholder", "\u0627\u0644\u0623\u0628", "name", "middleName", 1, "col-span-2", "input", "input-sm", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "text", "placeholder", "\u0627\u0644\u062C\u062F", "name", "lastName", 1, "col-span-2", "input", "input-sm", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "font-bold", "col-span-2", "flex", "items-center", 2, "color", "var(--text-color)"], ["name", "familyName", 1, "col-span-2", "select", "select-sm", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "ngModel"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-span-2", "grid", "grid-cols-8", "gap-4", "items-center"], [1, "w-32", "font-bold", "col-span-2", 2, "color", "var(--text-color)"], ["type", "text", "name", "civilId", 1, "col-span-2", "input", "input-sm", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "text", "name", "unifiedNumber", 1, "col-span-2", "input", "input-sm", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "text", "name", "phone", 1, "input", "input-sm", "w-full", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "text", "name", "address", 1, "input", "input-sm", "w-full", "rounded-none", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "flex", "gap-3", "mt-6", "w-full", "max-w-3xl"], [1, "btn", "btn-sm", "rounded-none", "shadow-sm", "h-8", "min-h-0", "px-6", 2, "background-color", "var(--surface-hover)", "color", "var(--text-color)", "border-color", "var(--surface-border)", 3, "click"], [1, "btn", "btn-sm", "rounded-none", "shadow-sm", "h-8", "min-h-0", "px-6", 2, "background-color", "var(--surface-hover)", "color", "var(--text-color)", "border-color", "var(--surface-border)"], [3, "value"], [1, "text-xl", "font-bold"], [1, "flex", "flex-col", "h-full", "overflow-hidden"], [1, "flex", "flex-wrap", "justify-between", "items-center", "p-2", "rounded-lg", "shadow-sm", "shrink-0", "mb-3", "gap-2", 2, "background-color", "var(--surface-section)", "border", "1px solid var(--surface-border)"], [1, "flex", "items-center", "gap-4", "text-xs", "shrink-0"], [1, "font-bold", "text-gray-700", "w-16", 2, "color", "var(--text-color)"], ["type", "text", 1, "input", "input-xs", "input-bordered", "w-full", "rounded-none", "h-6", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "font-bold", 2, "color", "var(--text-color)"], ["type", "date", 1, "input", "input-xs", "input-bordered", "rounded-none", "h-6", 2, "border-color", "var(--surface-border)", "background-color", "var(--surface-premium-card)", "color", "var(--text-color)", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn", "btn-xs", "premium-btn-primary", "rounded-none", "h-6", "min-h-0", "px-4", 3, "click"], [1, "btn", "btn-xs", "rounded-none", "h-6", "min-h-0", "px-4", 3, "click"], [1, "btn", "btn-xs", "rounded-none", "h-6", "min-h-0", "px-4", 2, "background-color", "var(--green-500)", "color", "#ffffff", 3, "click"], [1, "btn", "btn-xs", "rounded-none", "h-6", "min-h-0", 2, "background-color", "var(--surface-hover)", "color", "var(--text-color)", "border-color", "var(--surface-border)"], [1, "py-3", "px-4", "border-b", "border-indigo-100", "dark:border-indigo-800/50", "text-right", "text-emerald-600"], [1, "py-3", "px-4", "border-b", "border-indigo-100", "dark:border-indigo-800/50", "text-right", "w-1/5"], [1, "py-3", "px-4", "border-b", "border-indigo-100", "dark:border-indigo-800/50", "text-center"], [1, "flex", "items-center", "justify-between", "mt-4", "p-3", "bg-slate-50", "dark:bg-slate-800/50", "rounded-xl", "border", "border-slate-200", "dark:border-slate-700"], [1, "text-[10px]", "font-bold", "text-slate-500"], [1, "premium-btn", "premium-btn-outline", "px-4", "py-1.5", "text-xs", "flex", "items-center", "gap-1", 3, "click", "disabled"], [1, "py-2", "px-3", "font-bold", "text-indigo-700", "dark:text-indigo-400"], [1, "truncate", "max-w-[200px]", 3, "title"], [1, "py-2", "px-3", "font-black", "text-emerald-600", "font-mono"], [1, "py-2", "px-3", "text-slate-500", "italic", "text-[10px]"], [1, "py-2", "px-3", "text-center"], ["title", "\u0641\u062A\u062D \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u064A\u0644 \u0627\u0644\u0643\u0627\u0645\u0644", 1, "premium-btn", "premium-btn-secondary", "px-3", "py-1", "text-[10px]", "flex", "items-center", "gap-1", "mx-auto", "shadow-sm", 3, "click"], ["colspan", "8", 1, "text-center", "py-16", "text-slate-400", "italic", "bg-slate-50/20", "dark:bg-slate-900/10"], [1, "flex", "justify-center", "my-10"], [1, "loading", "loading-spinner", "loading-lg"], [1, "space-y-8", "p-4"], [1, "p-6", "rounded-3xl", "bg-emerald-50/50", "dark:bg-emerald-900/10", "border", "border-emerald-100/50", "dark:border-emerald-800/30", "grid", "grid-cols-1", "md:grid-cols-2", "gap-6", "items-center", "transition-colors"], [1, "flex", "items-center", "gap-4"], [1, "w-12", "h-12", "rounded-2xl", "bg-white", "dark:bg-slate-800", "shadow-sm", "flex", "items-center", "justify-center", "text-xl"], [1, "text-xs", "font-bold", "text-emerald-600/70", "dark:text-emerald-400/70", "uppercase"], [1, "text-3xl", "font-black", "text-emerald-600", "dark:text-emerald-400"], [1, "text-sm"], [1, "flex", "items-center", "gap-4", "md:border-r", "border-emerald-100", "dark:border-emerald-800/50", "md:pr-6"], [1, "text-xs", "font-bold", "text-slate-500", "dark:text-slate-400", "uppercase"], [1, "text-xl", "font-bold", "text-slate-700", "dark:text-slate-200"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "font-bold", "text-slate-800", "dark:text-slate-200", "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", "bg-primary", "animate-pulse"], [1, "font-bold", "text-slate-800", "dark:text-slate-200"], [1, "font-bold", "text-primary", "dark:text-blue-400", "font-mono"], [1, "col-span-full", "mt-4"], [1, "text-xs", "font-bold", "text-slate-500", "dark:text-slate-400", "uppercase", "mb-2", "block"], [1, "p-4", "rounded-2xl", "bg-slate-50", "dark:bg-slate-800/50", "border", "border-slate-100", "dark:border-slate-700", "flex", "items-center", "justify-between", "transition-colors"], [1, "px-3", "py-1", "rounded-full", "bg-white", "dark:bg-slate-900", "border", "border-slate-200", "dark:border-slate-700", "text-[10px]", "font-mono", "text-slate-400", "dark:text-slate-500"], [1, "px-6", "py-2", "rounded-2xl", "bg-slate-900", "text-white", "dark:bg-slate-800", "font-black", "text-lg", "shadow-lg"], [1, "px-6", "py-2", "rounded-2xl", "bg-blue-50", "text-blue-700", "border", "border-blue-100", "dark:bg-blue-900/20", "dark:border-blue-800/50", "dark:text-blue-300", "font-bold", "delay-100", "transition-colors"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-6"], [1, "p-6", "rounded-3xl", "bg-amber-50/50", "dark:bg-amber-900/10", "border", "border-amber-100/50", "dark:border-amber-800/30", "transition-colors"], [1, "text-xs", "font-bold", "text-amber-600/70", "dark:text-amber-400/70", "uppercase"], [1, "text-3xl", "font-black", "text-amber-600", "dark:text-amber-500", "mt-1"], [1, "h-1", "w-full", "bg-amber-100", "dark:bg-amber-950", "rounded-full", "mt-4", "overflow-hidden"], [1, "h-full", "bg-amber-500", "w-full", "opacity-30"], [1, "p-6", "rounded-3xl", "bg-emerald-50/50", "dark:bg-emerald-900/10", "border", "border-emerald-100/50", "dark:border-emerald-800/30", "transition-colors"], [1, "text-3xl", "font-black", "text-emerald-600", "dark:text-emerald-400", "mt-1"], [1, "h-1", "w-full", "bg-emerald-100", "dark:bg-emerald-950", "rounded-full", "mt-4", "overflow-hidden"], [1, "h-full", "bg-emerald-500"], [1, "p-6", "rounded-3xl", "bg-blue-500", "dark:bg-blue-600", "shadow-xl", "shadow-blue-200", "dark:shadow-none", "text-white", "transition-colors"], [1, "text-xs", "font-bold", "text-blue-100", "dark:text-blue-200", "uppercase"], [1, "text-3xl", "font-black", "mt-1"], [1, "text-[10px]", "mt-4", "font-bold", "opacity-80"], [1, "bg-slate-50/50", "dark:bg-slate-800/30", "rounded-3xl", "p-8", "border", "border-slate-100", "dark:border-slate-700/50", "transition-colors"], [1, "text-xs", "font-black", "uppercase", "tracking-widest", "text-slate-400", "dark:text-slate-500", "mb-6", "flex", "items-center", "gap-2"], [1, "w-2", "h-2", "rounded-full", "bg-slate-300", "dark:bg-slate-600"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-8"], [1, "col-span-full", "border-t", "border-slate-100", "dark:border-slate-700/50", "pt-6", "mt-2", "space-y-1.5"], [1, "font-black", "text-slate-900", "dark:text-white", "text-xl"], [1, "glass-modal-overlay", 3, "click"], [1, "glass-modal-container", "max-w-md", "w-full", 3, "click"], [1, "flex", "justify-between", "items-center", "mb-4", "pb-3", "border-b", "border-slate-200"], [1, "w-2", "h-5", "bg-blue-500", "rounded-full"], [1, "text-base", "font-bold", "text-slate-700"], [1, "w-8", "h-8", "rounded-full", "hover:bg-slate-100", "flex", "items-center", "justify-center", "text-slate-400", "transition-colors", 3, "click"], [1, "max-h-[50vh]", "overflow-y-auto", "pr-1", "custom-scrollbar"], [1, "w-full", "text-right", "border-collapse"], [1, "text-[11px]", "text-slate-400", "uppercase", "font-black", "border-b", "border-slate-100"], [1, "py-2"], [1, "text-[12px]"], ["class", "border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors", 4, "ngFor", "ngForOf"], [1, "mt-5", "flex", "justify-end"], [1, "px-6", "py-2", "bg-slate-100", "hover:bg-slate-200", "text-slate-600", "rounded-xl", "font-bold", "text-xs", "transition-all", 3, "click"], [1, "border-b", "border-slate-50", "last:border-0", "hover:bg-slate-50", "transition-colors"], [1, "py-3", "font-bold", "text-slate-600"], [1, "py-3", "font-bold", "text-slate-500"], [1, "py-3"], [1, "px-3", "py-1", "rounded-full", "bg-blue-50", "text-blue-600", "font-black"]],
      template: function MainContent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-lookup-modal", 3, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemSelected", function MainContent_Template_app_lookup_modal_itemSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onLookupSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("clients"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u0627\u0644\u0639\u0645\u0644\u0627\u0621 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("main"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("searchNumbers"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u0628\u062D\u062B \u0623\u0631\u0642\u0627\u0645 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("menuSearch"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u062D\u062B ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("FeesAndCollection"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u0627\u0644\u0631\u0633\u0648\u0645 \u0648\u0627\u0644\u062A\u062D\u0635\u064A\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("notes"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " \u0645\u0644\u0627\u062D\u0638\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("preview"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Preview ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("newFiles"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " \u0627\u0644\u0645\u0644\u0641\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("statements"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " \u0627\u0644\u0627\u0641\u0627\u062F\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("searchStatements"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " \u0628\u062D\u062B \u0627\u0644\u0627\u0641\u0627\u062F\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.setMainTab("stats"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u0627\u0644\u0627\u062D\u0635\u0627\u0626\u064A\u0627\u062A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, MainContent_div_25_Template, 36, 2, "div", 6)(26, MainContent_div_26_Template, 260, 419, "div", 6)(27, MainContent_div_27_Template, 141, 19, "div", 7)(28, MainContent_div_28_Template, 42, 10, "div", 8)(29, MainContent_div_29_Template, 3, 0, "div", 7)(30, MainContent_div_30_Template, 3, 0, "div", 7)(31, MainContent_div_31_Template, 3, 0, "div", 7)(32, MainContent_div_32_Template, 3, 0, "div", 7)(33, MainContent_div_33_Template, 71, 34, "div", 7)(34, MainContent_div_34_Template, 3, 0, "div", 7)(35, MainContent_div_35_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "dialog", 10, 1)(38, "div", 11)(39, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            const paymentModal_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](paymentModal_r18.close());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14)(43, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " \uD83D\uDCB3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div")(46, "h3", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0633\u062F\u0627\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Payment Transaction Record");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, MainContent_div_50_Template, 52, 13, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19)(52, "form", 20)(53, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\u0641\u0647\u0645\u062A\u060C \u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "dialog", 10, 2)(57, "div", 22)(58, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_58_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            const debtModal_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](56);
            debtModal_r15.close();
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.selectedDebt = null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\u2715");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 14)(62, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " \uD83D\uDCC2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div")(65, "h3", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Comprehensive Debt & Legal Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, MainContent_div_69_Template, 62, 17, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 25)(71, "form", 20)(72, "button", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_72_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.selectedDebt = null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u062A\u0645\u062A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629\u060C \u0625\u063A\u0644\u0627\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "dialog", 27)(75, "div", 28)(76, "div", 29)(77, "h3", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " \u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0648\u0639\u062F \u0628\u0627\u0644\u0633\u062F\u0627\u062F ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 34)(83, "div", 35)(84, "label", 36)(85, "input", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_85_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.promiseToPayType, $event) || (ctx.promiseToPayType = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u0633\u062F\u0627\u062F \u0643\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "label", 36)(89, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_89_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.promiseToPayType, $event) || (ctx.promiseToPayType = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u0633\u062F\u0627\u062F \u062C\u0632\u0626\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 36)(93, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_93_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.promiseToPayType, $event) || (ctx.promiseToPayType = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\u0628\u062F\u0648\u0646 \u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 43)(97, "div", 44)(98, "input", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_98_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.promiseToPayAmount, $event) || (ctx.promiseToPayAmount = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "\u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 47)(102, "button", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_102_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.submitPromiseToPay());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\u0645\u0648\u0627\u0641\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "dialog", 50)(107, "div", 51)(108, "div", 29)(109, "h3", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " \u062E\u064A\u0627\u0631\u0627\u062A \u062A\u0642\u0633\u064A\u0637 \u0627\u0644\u0645\u0628\u0644\u063A ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "button", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 34)(115, "div", 54)(116, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "\u0627\u0644\u0645\u0628\u0644\u063A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 56)(119, "input", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_119_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.installmentAmount, $event) || (ctx.installmentAmount = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "\u062F.\u0643");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 54)(123, "label", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0642\u0633\u0637");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "input", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_125_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.installmentDate, $event) || (ctx.installmentDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 60)(127, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_129_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.submitInstallment());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "\u0645\u0648\u0627\u0641\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "dialog", 63)(132, "div", 64)(133, "div", 65)(134, "h3", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, " \u062E\u064A\u0627\u0631\u0627\u062A \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "i", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 70)(140, "div", 71)(141, "label", 72)(142, "input", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_142_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.reviewType, $event) || (ctx.reviewType = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div")(144, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, " \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0634\u0631\u0643\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "\u0641\u0649 \u062D\u0627\u0644\u0629 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0634\u0631\u0643\u0629 \u0633\u064A\u062A\u0645 \u062A\u0631\u062D\u064A\u0644\u0647\u0627 \u0627\u0644\u0649 \u0627\u0644\u0625\u0641\u0627\u062F\u0627\u062A.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "label", 72)(149, "input", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_149_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.reviewType, $event) || (ctx.reviewType = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div")(151, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u0633\u0626\u0648\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "\u0641\u0649 \u062D\u0627\u0644\u0629 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0645\u0633\u0626\u0648\u0644 \u0633\u064A\u062A\u0645 \u062A\u0631\u062D\u064A\u0644\u0647\u0627 \u0627\u0644\u0649 \u0627\u0644\u0645\u0633\u0626\u0648\u0644 \u0643\u0625\u062C\u0631\u0627\u0621.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "label", 72)(156, "input", 77);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_input_ngModelChange_156_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.reviewType, $event) || (ctx.reviewType = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div")(158, "div", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, " \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "\u0641\u0649 \u062D\u0627\u0644\u0629 \u0627\u062E\u062A\u064A\u0627\u0631 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0633\u064A\u062A\u0645 \u062A\u0631\u062D\u064A\u0644\u0647\u0627 \u0627\u0644\u0649 \u0627\u0644\u0625\u062F\u0627\u0631\u0629 \u0641\u0648\u0631\u0627\u064B \u0644\u0644\u0625\u062C\u0631\u0627\u0621 \u0627\u0644\u062D\u0627\u0633\u0645.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 78)(163, "label", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "\u0623\u064A \u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629\u061F (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "textarea", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function MainContent_Template_textarea_ngModelChange_165_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.reviewNote, $event) || (ctx.reviewNote = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 81)(167, "button", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "\u0625\u0644\u063A\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "button", 83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainContent_Template_button_click_169_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.submitReview());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "\u0645\u0648\u0627\u0641\u0642");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "app-lookup-modal", 84, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("itemSelected", function MainContent_Template_app_lookup_modal_itemSelected_171_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.onLookupSelected($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](173, MainContent_div_173_Template, 24, 2, "div", 85);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "\u0627\u062E\u062A\u064A\u0627\u0631 " + ctx.currentField)("columns", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](84, _c1))("data", ctx.lookupData);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "searchNumbers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "menuSearch");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "FeesAndCollection");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "preview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "newFiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "searchStatements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeMainTab === "stats");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "clients");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "searchNumbers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "menuSearch");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "FeesAndCollection");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "notes");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "preview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "newFiles");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeMainTab === "stats");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedPayment);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedDebt);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.promiseToPayType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.promiseToPayType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.promiseToPayType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opacity-50", ctx.promiseToPayType === "none")("pointer-events-none", ctx.promiseToPayType === "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.promiseToPayAmount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.promiseToPayType === "none");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.installmentAmount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.installmentDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-purple-50", ctx.reviewType === "company")("border-purple-400", ctx.reviewType === "company")("dark:bg-purple-900", ctx.reviewType === "company")("dark:bg-opacity-20", ctx.reviewType === "company")("dark:border-purple-500", ctx.reviewType === "company");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.reviewType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-purple-50", ctx.reviewType === "admin")("border-purple-400", ctx.reviewType === "admin")("dark:bg-purple-900", ctx.reviewType === "admin")("dark:bg-opacity-20", ctx.reviewType === "admin")("dark:border-purple-500", ctx.reviewType === "admin");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.reviewType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-purple-50", ctx.reviewType === "management")("border-purple-400", ctx.reviewType === "management")("dark:bg-purple-900", ctx.reviewType === "management")("dark:bg-opacity-20", ctx.reviewType === "management")("dark:border-purple-500", ctx.reviewType === "management");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.reviewType);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.reviewNote);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.historyModalVisible);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _shared_components_lookup_modal_lookup_modal__WEBPACK_IMPORTED_MODULE_4__.LookupModal, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe],
      styles: ["[_nghost-%COMP%] {\n    --p-primary: 221 83% 53%;\n    --p-primary-soft: 221 83% 96%;\n    --p-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n    --p-shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --p-shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n}\n\n.premium-card[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.7);\n    backdrop-filter: blur(12px) saturate(180%);\n    -webkit-backdrop-filter: blur(12px) saturate(180%);\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    border-radius: 1.5rem !important;\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07) !important;\n    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n    margin-bottom: 1.5rem !important;\n    padding: 1.5rem !important;\n    position: relative;\n    overflow: hidden;\n    color: var(--text-color);\n}\n\n[data-theme='dark'][_ngcontent-%COMP%]   .premium-card[_ngcontent-%COMP%] {\n    background: rgba(30, 41, 59, 0.45);\n    border-color: rgba(255, 255, 255, 0.08) !important;\n    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2) !important;\n}\n\n.premium-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.12) !important;\n    border-color: var(--primary-color) !important;\n}\n\n\n.premium-input[_ngcontent-%COMP%] {\n    background: var(--surface-ground) !important;\n    border: 1.5px solid var(--surface-border) !important;\n    border-radius: 0.75rem !important;\n    padding: 0.5rem 1rem !important;\n    font-size: 0.95rem !important;\n    font-weight: 500 !important;\n    color: var(--text-color) !important;\n    transition: all 0.2s ease !important;\n    width: 100%;\n}\n\nselect.premium-input[_ngcontent-%COMP%] {\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='var(--text-color)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\") !important;\n    background-repeat: no-repeat !important;\n    background-position: left 1rem center !important;\n    background-size: 1em !important;\n    padding-left: 2.5rem !important;\n    cursor: pointer;\n}\n\nselect.premium-input[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n    padding: 10px;\n    background: var(--surface-card);\n    color: var(--text-color);\n    font-size: 0.95rem;\n}\n\n.premium-input[_ngcontent-%COMP%]:focus {\n    background: var(--surface-card) !important;\n    border-color: var(--primary-color) !important;\n    box-shadow: 0 0 0 2px var(--primary-color) !important;\n    outline: none !important;\n}\n\n.premium-btn[_ngcontent-%COMP%] {\n    border-radius: 0.75rem !important;\n    font-weight: 700 !important;\n    font-size: 0.95rem !important;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n    padding: 0.75rem 1.5rem !important;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    cursor: pointer;\n}\n\n.premium-btn-primary[_ngcontent-%COMP%] {\n    background-color: var(--primary-color) !important;\n    color: var(--primary-color-text) !important;\n    border: none !important;\n}\n\n.premium-btn-primary[_ngcontent-%COMP%]:hover {\n    filter: brightness(0.9);\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.premium-btn-secondary[_ngcontent-%COMP%] {\n    background-color: var(--surface-ground) !important;\n    color: var(--text-color) !important;\n    border: 1px solid var(--surface-border) !important;\n}\n\n.premium-btn-secondary[_ngcontent-%COMP%]:hover {\n    background-color: var(--surface-hover) !important;\n    transform: translateY(-2px);\n}\n\n.premium-btn-outline[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n    color: var(--primary-color) !important;\n    border: 1.5px solid var(--primary-color) !important;\n}\n\n.premium-btn-outline[_ngcontent-%COMP%]:hover {\n    background-color: var(--surface-hover) !important;\n    transform: translateY(-2px);\n}\n\n.premium-table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-spacing: 0;\n    border-collapse: separate;\n}\n\n.premium-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: var(--surface-ground) !important;\n    color: var(--text-color-secondary) !important;\n    font-weight: 800 !important;\n    font-size: 0.8rem !important;\n    padding: 1rem 1.25rem !important;\n    border-bottom: 2px solid var(--surface-border) !important;\n    text-align: right;\n    white-space: nowrap;\n}\n\n.premium-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    transition: all 0.2s ease;\n}\n\n.premium-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n    background: var(--surface-hover);\n    transform: scale(1.002);\n}\n\n.premium-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1.25rem !important;\n    border-bottom: 1px solid var(--surface-border);\n    font-size: 0.925rem;\n    color: var(--text-color);\n    white-space: nowrap;\n}\n\n\n\n.premium-tabs-container[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    gap: 0.5rem;\n    background: var(--surface-ground);\n    padding: 0.5rem;\n    border-radius: 1.25rem;\n    border: 1px solid var(--surface-border);\n    margin-bottom: 2rem;\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.04);\n}\n\n.premium-tabs-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n    height: 6px;\n}\n\n.premium-tabs-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: var(--surface-border);\n    border-radius: 10px;\n}\n\n.premium-tab[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.5rem;\n    border-radius: 1rem;\n    font-weight: 700;\n    color: var(--text-color-secondary);\n    cursor: pointer;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid transparent;\n    background: transparent;\n    white-space: nowrap;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.premium-tab[_ngcontent-%COMP%]:hover {\n    background: var(--surface-hover);\n    color: var(--text-color);\n}\n\n.premium-tab.active[_ngcontent-%COMP%] {\n    background: var(--primary-color);\n    color: var(--primary-color-text) !important;\n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\n    border-color: var(--primary-color);\n    transform: translateY(-1px);\n}\n\n.form-label[_ngcontent-%COMP%] {\n    display: block;\n    color: var(--text-color-secondary);\n    font-weight: 800;\n    font-size: 0.85rem;\n    margin-bottom: 0.5rem;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1.5rem;\n    align-items: end;\n}\n\n\n\n.btn-excel[_ngcontent-%COMP%] {\n    background-color: #217346 !important;\n    color: #ffffff !important;\n    border: none !important;\n    border-radius: 0.75rem !important;\n    padding: 0.5rem 1.25rem !important;\n    font-weight: 700 !important;\n    font-size: 0.85rem !important;\n    display: inline-flex;\n    align-items: center;\n    gap: 0.5rem;\n    cursor: pointer;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n    margin-right: auto;\n}\n\n.btn-excel[_ngcontent-%COMP%]:hover {\n    background-color: #1a5c38 !important;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 10px rgba(33, 115, 70, 0.3);\n}\n\n\n\n.premium-modal-box[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.8) !important;\n    backdrop-filter: blur(16px) saturate(180%) !important;\n    -webkit-backdrop-filter: blur(16px) saturate(180%) !important;\n    border: 1px solid rgba(255, 255, 255, 0.3) !important;\n    border-radius: 2rem !important;\n    box-shadow: var(--p-shadow-lg) !important;\n    padding: 2.5rem !important;\n    overflow: hidden !important;\n}\n\n[data-theme='dark'][_ngcontent-%COMP%]   .premium-modal-box[_ngcontent-%COMP%] {\n    background: rgba(30, 41, 59, 0.7) !important;\n    border-color: rgba(255, 255, 255, 0.1) !important;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-bottom: 2rem;\n    padding-bottom: 1.5rem;\n    border-bottom: 1px solid var(--surface-border);\n}\n\n.modal-header-icon[_ngcontent-%COMP%] {\n    width: 3.5rem;\n    height: 3.5rem;\n    background: var(--p-primary-soft);\n    border-radius: 1rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    color: var(--primary-color);\n}\n\n.modal-info-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n    gap: 2rem;\n}\n\n.modal-info-item[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.modal-label[_ngcontent-%COMP%] {\n    font-size: 0.75rem !important;\n    text-transform: uppercase !important;\n    letter-spacing: 0.05em !important;\n    color: var(--text-color-secondary) !important;\n    font-weight: 800 !important;\n}\n\n.modal-value[_ngcontent-%COMP%] {\n    font-size: 1.1rem !important;\n    font-weight: 700 !important;\n    color: var(--text-color) !important;\n    padding-bottom: 0.5rem;\n    border-bottom: 2px solid var(--surface-border);\n    transition: border-color 0.2s ease;\n}\n\n.modal-info-item[_ngcontent-%COMP%]:hover   .modal-value[_ngcontent-%COMP%] {\n    border-color: var(--primary-color);\n}\n\n.divider-premium[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    height: 1px;\n    background: linear-gradient(to left, var(--surface-border), transparent);\n    margin: 1rem 0;\n}\n\n.badge-premium[_ngcontent-%COMP%] {\n    padding: 0.5rem 1rem !important;\n    border-radius: 0.75rem !important;\n    font-weight: 700 !important;\n    font-size: 0.85rem !important;\n}\n\n.modal-action[_ngcontent-%COMP%]   .premium-btn[_ngcontent-%COMP%] {\n    min-width: 120px;\n}\n\n\n\n.premium-radio-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n    background: rgba(255, 255, 255, 0.05);\n    padding: 0.4rem;\n    border-radius: 1rem;\n    border: 1px solid var(--surface-border);\n    -webkit-backdrop-filter: blur(8px);\n            backdrop-filter: blur(8px);\n}\n\n.premium-radio-item[_ngcontent-%COMP%] {\n    position: relative;\n    flex: 1;\n    min-width: 80px;\n    height: 2.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border-radius: 0.75rem;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    font-size: 0.85rem;\n    font-weight: 700;\n    color: var(--text-color-secondary);\n    -webkit-user-select: none;\n            user-select: none;\n    border: 1px solid transparent;\n}\n\n.premium-radio-item[_ngcontent-%COMP%]:hover {\n    background: var(--surface-hover);\n    color: var(--text-color);\n}\n\n.premium-radio-item.active[_ngcontent-%COMP%] {\n    background: var(--primary-color);\n    color: var(--primary-color-text) !important;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    border-color: var(--primary-color);\n    transform: translateY(-1px);\n}\n\n.premium-radio-item[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n}\n\n\n\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 4px;\n}\n\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    background: rgba(0, 0, 0, 0.02);\n    border-radius: 10px;\n}\n\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n}\n\n[data-theme='dark'][_ngcontent-%COMP%]   .custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background: rgba(255, 255, 255, 0.1);\n}\n\n.custom-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n    background: var(--primary-color);\n}\n\n\n\n\n\n\n.classification-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n    gap: 1rem;\n}\n\n.status-card[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: auto;\n    padding: 0.85rem !important;\n    background: rgba(255, 255, 255, 0.45);\n    border: 1px solid rgba(255, 255, 255, 0.5) !important;\n}\n\n[data-theme='dark'][_ngcontent-%COMP%]   .status-card[_ngcontent-%COMP%] {\n    background: rgba(30, 41, 59, 0.4);\n    border-color: rgba(255, 255, 255, 0.05) !important;\n}\n\n.status-card-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  padding-bottom: 8px;\n}\n\n\n\n.status-card-marked[_ngcontent-%COMP%] {\n  border: 1px solid rgba(var(--primary-rgb), 0.3) !important;\n  box-shadow: 0 0 15px rgba(var(--primary-rgb), 0.05);\n  position: relative;\n  overflow: hidden;\n}\n\n.status-card-marked[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 4px;\n  height: 100%;\n  background: var(--primary-color);\n  opacity: 0.6;\n}\n\n.status-icon-box[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n    border-radius: 0.6rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1rem;\n    box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n}\n\n.status-history-area[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n.micro-history-container[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.03);\n    border-radius: 0.6rem;\n    overflow-y: auto;\n    max-height: 80px;\n    border: 1px solid var(--surface-border);\n}\n\n[data-theme='dark'][_ngcontent-%COMP%]   .micro-history-container[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.02);\n}\n\n.micro-history-table[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: 0.7rem;\n    border-collapse: collapse;\n}\n\n.micro-history-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background: var(--surface-ground);\n    padding: 0.4rem 0.5rem;\n    text-align: right;\n    color: var(--text-color-secondary);\n    font-weight: 800;\n    text-transform: uppercase;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n}\n\n.micro-history-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.6rem;\n    border-bottom: 1px solid var(--surface-border);\n    color: var(--text-color);\n    font-size: 11px;\n    font-weight: 600;\n}\n\n.micro-history-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n    border-bottom: none;\n}\n\n.status-badge-mini[_ngcontent-%COMP%] {\n    padding: 0.2rem 0.6rem;\n    border-radius: 0.5rem;\n    font-weight: 800;\n    font-size: 11px;\n    line-height: 1;\n    display: inline-block;\n    min-width: 50px;\n    text-align: center;\n    box-shadow: 0 1px 2px rgba(0,0,0,0.05);\n}\n\n.status-label-main[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    font-weight: 800;\n    color: var(--text-color);\n    line-height: 1.2;\n}\n\n.status-sub-label[_ngcontent-%COMP%] {\n    font-size: 0.65rem;\n    color: var(--text-color-secondary);\n    font-weight: 600;\n}\n\n.mini-save-btn[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.85rem;\n    font-size: 0.8rem;\n    font-weight: 800;\n    border-radius: 0.6rem;\n    background: var(--primary-color);\n    color: white;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s ease;\n    display: flex;\n    align-items: center;\n    gap: 0.4rem;\n    height: 36px;\n}\n\n\n\n.section-save-btn[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.75rem;\n    border-radius: 0.5rem;\n    font-size: 10px;\n    font-weight: 800;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n    display: flex;\n    align-items: center;\n    gap: 0.35rem;\n    border: 1px solid transparent;\n}\n\n.section-save-btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n}\n\n.section-save-btn[_ngcontent-%COMP%]:active {\n    transform: translateY(0);\n}\n\n.mini-save-btn[_ngcontent-%COMP%]:hover {\n    filter: brightness(1.1);\n    transform: translateY(-1px);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.mini-save-btn[_ngcontent-%COMP%]:active {\n    transform: translateY(0);\n}\n\n\n\n.glass-modal-overlay[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(15, 23, 42, 0.4);\n    -webkit-backdrop-filter: blur(8px);\n            backdrop-filter: blur(8px);\n    z-index: 9999;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem;\n    animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n\n.glass-modal-container[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.9);\n    -webkit-backdrop-filter: blur(12px);\n            backdrop-filter: blur(12px);\n    border: 1px solid rgba(255, 255, 255, 0.4);\n    border-radius: 1.5rem;\n    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n    padding: 1.5rem;\n    animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn { from { opacity: 0; } to { opacity: 1; } }\n@keyframes _ngcontent-%COMP%_slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbmVnb3RpYXRpb25zL3BhZ2VzL2NsaWVudC1mb2xsb3ctdXAgY29weS9jb21wb25lbnRzL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3Qiw0Q0FBNEM7SUFDNUMsaUZBQWlGO0lBQ2pGLGtGQUFrRjtBQUN0Rjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQywwQ0FBMEM7SUFDMUMsa0RBQWtEO0lBQ2xELHFEQUFxRDtJQUNyRCxnQ0FBZ0M7SUFDaEMsMkRBQTJEO0lBQzNELGlEQUFpRDtJQUNqRCxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtEQUFrRDtJQUNsRCxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNERBQTREO0lBQzVELDZDQUE2QztBQUNqRDs7O0FBR0E7SUFDSSw0Q0FBNEM7SUFDNUMsb0RBQW9EO0lBQ3BELGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLDJTQUEyUztJQUMzUyx1Q0FBdUM7SUFDdkMsZ0RBQWdEO0lBQ2hELCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0Isd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyw2Q0FBNkM7SUFDN0MscURBQXFEO0lBQ3JELHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLDREQUE0RDtJQUM1RCxrQ0FBa0M7SUFDbEMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsMkNBQTJDO0lBQzNDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELG1DQUFtQztJQUNuQyxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLHNDQUFzQztJQUN0QyxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsNkNBQTZDO0lBQzdDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLHlEQUF5RDtJQUN6RCxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixpREFBaUQ7SUFDakQsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQyx5Q0FBeUM7SUFDekMsa0NBQWtDO0lBQ2xDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQywyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7SUFDZiw0REFBNEQ7SUFDNUQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDJCQUEyQjtJQUMzQiw2Q0FBNkM7QUFDakQ7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksK0NBQStDO0lBQy9DLHFEQUFxRDtJQUNyRCw2REFBNkQ7SUFDN0QscURBQXFEO0lBQ3JELDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsMEJBQTBCO0lBQzFCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsaUNBQWlDO0lBQ2pDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLDZDQUE2QztJQUM3QywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyxzQkFBc0I7SUFDdEIsOENBQThDO0lBQzlDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0VBQXdFO0lBQ3hFLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsNENBQTRDO0FBQzVDO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGVBQWU7SUFDZixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixpREFBaUQ7SUFDakQsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMseUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLDJDQUEyQztJQUMzQywwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTs7aUVBRWlFOztBQUVqRTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHFDQUFxQztJQUNyQyxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0RBQWtEO0FBQ3REOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLG1CQUFtQjtBQUNyQjs7QUFFQSxvQ0FBb0M7QUFDcEM7RUFDRSwwREFBMEQ7RUFDMUQsbURBQW1EO0VBQ25ELGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLDhDQUE4QztJQUM5Qyx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBLGtDQUFrQztBQUNsQztJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpREFBaUQ7SUFDakQsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDZDQUE2QztBQUNqRDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0Isd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLG9DQUFvQztBQUNwQztJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBQ3JCLGlEQUFpRDtJQUNqRCxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBLG9CQUFvQixPQUFPLFVBQVUsRUFBRSxFQUFFLEtBQUssVUFBVSxFQUFFLEVBQUU7QUFDNUQscUJBQXFCLE9BQU8sMkJBQTJCLEVBQUUsVUFBVSxFQUFFLEVBQUUsS0FBSyx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC0tcC1wcmltYXJ5OiAyMjEgODMlIDUzJTtcclxuICAgIC0tcC1wcmltYXJ5LXNvZnQ6IDIyMSA4MyUgOTYlO1xyXG4gICAgLS1wLXNoYWRvdy1zbTogMCAxcHggMnB4IDAgcmdiKDAgMCAwIC8gMC4wNSk7XHJcbiAgICAtLXAtc2hhZG93LW1kOiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XHJcbiAgICAtLXAtc2hhZG93LWxnOiAwIDIwcHggMjVweCAtNXB4IHJnYigwIDAgMCAvIDAuMSksIDAgOHB4IDEwcHggLTZweCByZ2IoMCAwIDAgLyAwLjEpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjA3KSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG5bZGF0YS10aGVtZT0nZGFyayddIC5wcmVtaXVtLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgNDEsIDU5LCAwLjQ1KTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJlbWl1bS1jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCA0MHB4IDAgcmdiYSgzMSwgMzgsIDEzNSwgMC4xMikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5wcmVtaXVtLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNlbGVjdC5wcmVtaXVtLWlucHV0IHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ndmFyKC0tdGV4dC1jb2xvciknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzZSUzY3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNlJTNjL3BvbHlsaW5lJTNlJTNjL3N2ZyUzZVwiKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAxcmVtIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNlbGVjdC5wcmVtaXVtLWlucHV0IG9wdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLnByZW1pdW0taW5wdXQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJlbWl1bS1idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJlbWl1bS1idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1idG4tc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByZW1pdW0tYnRuLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWhvdmVyKSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1idG4tb3V0bGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWJ0bi1vdXRsaW5lOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtaG92ZXIpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5wcmVtaXVtLXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWJsZSB0aGVhZCB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcikgIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnByZW1pdW0tdGFibGUgdGJvZHkgdHIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnByZW1pdW0tdGFibGUgdGJvZHkgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDAyKTtcclxufVxyXG5cclxuLnByZW1pdW0tdGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgIGZvbnQtc2l6ZTogMC45MjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vKiBDdXN0b20gbW9kZXJuIHRhYnMgKi9cclxuLnByZW1pdW0tdGFicy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG5cclxuLnByZW1pdW0tdGFicy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGhlaWdodDogNnB4O1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWJzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnByZW1pdW0tdGFiIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByZW1pdW0tdGFiOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4ucHJlbWl1bS10YWIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3ItdGV4dCkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuXHJcbi8qIEV4Y2VsIEJ1dHRvbiBTdHlsZSAqL1xyXG4uYnRuLWV4Y2VsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTczNDYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW0gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnRuLWV4Y2VsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTVjMzggIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgzMywgMTE1LCA3MCwgMC4zKTtcclxufVxyXG5cclxuLyogTW9kYWwgU3R5bGVzICovXHJcbi5wcmVtaXVtLW1vZGFsLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkgIWltcG9ydGFudDtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNnB4KSBzYXR1cmF0ZSgxODAlKSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMTgwJSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tcC1zaGFkb3ctbGcpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuW2RhdGEtdGhlbWU9J2RhcmsnXSAucHJlbWl1bS1tb2RhbC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgNDEsIDU5LCAwLjcpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyLWljb24ge1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICAgIGhlaWdodDogMy41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcC1wcmltYXJ5LXNvZnQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLm1vZGFsLWluZm8tZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5tb2RhbC1pbmZvLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLm1vZGFsLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtdmFsdWUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ubW9kYWwtaW5mby1pdGVtOmhvdmVyIC5tb2RhbC12YWx1ZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4uZGl2aWRlci1wcmVtaXVtIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgICBoZWlnaHQ6IDFweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS1zdXJmYWNlLWJvcmRlciksIHRyYW5zcGFyZW50KTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4uYmFkZ2UtcHJlbWl1bSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1hY3Rpb24gLnByZW1pdW0tYnRuIHtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi8qIFByZW1pdW0gUmFkaW8gR3JvdXAgKFNlZ21lbnRlZCBDb250cm9sKSAqL1xyXG4ucHJlbWl1bS1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xyXG4gICAgcGFkZGluZzogMC40cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1yYWRpby1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnByZW1pdW0tcmFkaW8taXRlbTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLnByZW1pdW0tcmFkaW8taXRlbS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci10ZXh0KSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLnByZW1pdW0tcmFkaW8taXRlbSBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQ3VzdG9tIFNjcm9sbGJhciBmb3IgSGlzdG9yeSBMb2dzICovXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5bZGF0YS10aGVtZT0nZGFyayddIC5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5jdXN0b20tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgIENsYXNzaWZpY2F0aW9uIE1vZGVybiBEYXNoYm9hcmQgU3R5bGVzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLmNsYXNzaWZpY2F0aW9uLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLnN0YXR1cy1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDAuODVyZW0gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuW2RhdGEtdGhlbWU9J2RhcmsnXSAuc3RhdHVzLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMCwgNDEsIDU5LCAwLjQpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0dXMtY2FyZC1oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi8qIE1hcmtlZCBzdGF0dXMgY2FyZHMgZGlzdGluY3Rpb24gKi9cclxuLnN0YXR1cy1jYXJkLW1hcmtlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiksIDAuMykgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKHZhcigtLXByaW1hcnktcmdiKSwgMC4wNSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdGF0dXMtY2FyZC1tYXJrZWQ6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLnN0YXR1cy1pY29uLWJveCB7XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uc3RhdHVzLWhpc3RvcnktYXJlYSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5taWNyby1oaXN0b3J5LWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XHJcbn1cclxuXHJcbltkYXRhLXRoZW1lPSdkYXJrJ10gLm1pY3JvLWhpc3RvcnktY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMik7XHJcbn1cclxuXHJcbi5taWNyby1oaXN0b3J5LXRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4ubWljcm8taGlzdG9yeS10YWJsZSB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCk7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5taWNyby1oaXN0b3J5LXRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjZyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLm1pY3JvLWhpc3RvcnktdGFibGUgdHI6bGFzdC1jaGlsZCB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uc3RhdHVzLWJhZGdlLW1pbmkge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNnJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDUpO1xyXG59XHJcblxyXG4uc3RhdHVzLWxhYmVsLW1haW4ge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLnN0YXR1cy1zdWItbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5taW5pLXNhdmUtYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjg1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNHJlbTtcclxuICAgIGhlaWdodDogMzZweDtcclxufVxyXG5cclxuLyogU2VjdGlvbi1zcGVjaWZpYyBTYXZlIEJ1dHRvbnMgKi9cclxuLnNlY3Rpb24tc2F2ZS1idG4ge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4zNXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2VjdGlvbi1zYXZlLWJ0bjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXNhdmUtYnRuOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcbi5taW5pLXNhdmUtYnRuOmhvdmVyIHtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjEpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm1pbmktc2F2ZS1idG46YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLyogR2xhc3MgTW9kYWwgZm9yIEhpc3RvcnkgRGV0YWlscyAqL1xyXG4uZ2xhc3MtbW9kYWwtb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNCk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmdsYXNzLW1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgZWFzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTogMDsgfSB0byB7IG9wYWNpdHk6IDE7IH0gfVxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAgeyBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyBvcGFjaXR5OiAwOyB9IHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9IH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
  return MainContent;
})();

/***/ }),

/***/ 54601:
/*!************************************************************************!*\
  !*** ./src/app/features/negotiations/services/negotiations.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NegotiationsService: () => (/* binding */ NegotiationsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 63855);




let NegotiationsService = /*#__PURE__*/(() => {
  class NegotiationsService {
    http;
    apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl;
    constructor(http) {
      this.http = http;
    }
    /**
     * Search for mainfiles by a general search term (Name, Cid, or Code)
     */
    search(term) {
      return this.http.get(`${this.apiUrl}/Mainfiles?search=${term}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        console.error('Error searching:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('حدث خطأ أثناء البحث'));
      }));
    }
    /**
     * Search for a mainfile by Civil ID (Cid) - Exact Match
     */
    searchByCid(cid) {
      return this.http.get(`${this.apiUrl}/Mainfiles/cid/${cid}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        console.error('Error searching by Cid:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('لم يتم العثور على الملف أو حدث خطأ في النظام'));
      }));
    }
    /**
     * Get file details (debt reason, plaintiff, etc.)
     * @param fileCode The file ID/code
     */
    getFileDetails(fileCode) {
      return this.http.get(`${this.apiUrl}/DataView/mainfiles/${fileCode}/details`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        console.error('Error getting file details:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('فشل جلب تفاصيل الملف'));
      }));
    }
    /**
     * Get call center statements / history
     * @param fileCode The file ID/code
     */
    getStatements(fileCode) {
      return this.http.get(`${this.apiUrl}/DataView/mainfiles/${fileCode}/statements`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        console.error('Error getting statements:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('فشل جلب الإفادات'));
      }));
    }
    /**
     * Get lookup values by type (COOPERATION, CONTACT, CIVIL, INTERNAL)
     */
    getLookups(type) {
      return this.http.get(`${this.apiUrl}/Lookups/${type}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        console.error(`Error getting lookups for ${type}:`, error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('فشل جلب قائمة الخيارات'));
      }));
    }
    /**
     * Update a specific status field for a client
     */
    updateClientStatus(id, field, valueId, valueText) {
      const body = {
        field,
        newValueId: valueId,
        newValueText: valueText
      };
      return this.http.put(`${this.apiUrl}/Mainfiles/${id}/status`, body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
        console.error(`Error updating ${field}:`, error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(() => new Error('فشل تحديث الحالة'));
      }));
    }
    /**
     * Get file attachments
     */
    getAttachments(fileCode) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/attachments`);
    }
    /**
     * Get file audit history with pagination
     */
    getAudits(fileCode, page = 1, pageSize = 5) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/audits?page=${page}&pageSize=${pageSize}`);
    }
    /**
     * Get file payments
     */
    getPayments(fileCode) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/payments`);
    }
    /**
     * Get additional amounts
     */
    getAdditionalAmounts(fileCode) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/additional-amounts`);
    }
    /**
     * Get auto numbers
     */
    getAutoNumbers(fileCode) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/auto-numbers`);
    }
    /**
     * Get client notes
     */
    getNotes(fileCode, page = 1, pageSize = 5) {
      return this.http.get(`${this.apiUrl}/DataView/mainfiles/${fileCode}/notes?page=${page}&pageSize=${pageSize}`);
    }
    /**
     * Get client contacts
     */
    getContacts(cid) {
      return this.http.get(`${this.apiUrl}/DataView/files/${cid}/contacts`);
    }
    addContact(cid, payload) {
      return this.http.post(`${this.apiUrl}/DataView/files/${cid}/contacts`, payload);
    }
    /**
     * Get call center statements with pagination
     */
    getCallcenterStatements(fileCode, page = 1, pageSize = 5) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/callcenter-statements?page=${page}&pageSize=${pageSize}`);
    }
    /**
     * Search call center statements across all files
     */
    searchCallcenterStatements(params) {
      let query = `page=${params.page}&pageSize=${params.pageSize}`;
      if (params.cid) query += `&cid=${params.cid}`;
      if (params.name) query += `&name=${params.name}`;
      if (params.fromDate) query += `&fromDate=${params.fromDate}`;
      if (params.toDate) query += `&toDate=${params.toDate}`;
      return this.http.get(`${this.apiUrl}/DataView/callcenter-statements/search?${query}`);
    }
    addStatement(payload) {
      return this.http.post(`${this.apiUrl}/DataView/files/callcenter-statements`, payload);
    }
    /**
     * Get file classifications
     */
    getClassifications(fileCode) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/classifications`);
    }
    /**
     * Get file statuses
     */
    getStatusesHistory(fileCode, page = 1, pageSize = 5) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/statuses?page=${page}&pageSize=${pageSize}`);
    }
    /**
     * Get file-specific dashboard stats
     */
    getDashboardStats(fileCode) {
      return this.http.get(`${this.apiUrl}/DataView/files/${fileCode}/dashboard-stats`);
    }
    getCategoryHistory(fileCode, category) {
      return this.http.get(`${this.apiUrl}/DataView/mainfiles/${fileCode}/status-history/${category}`);
    }
    getFieldHistory(fileCode, field) {
      return this.http.get(`${this.apiUrl}/DataView/mainfiles/${fileCode}/field-history/${field}`);
    }
    static ɵfac = function NegotiationsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NegotiationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: NegotiationsService,
      factory: NegotiationsService.ɵfac,
      providedIn: 'root'
    });
  }
  return NegotiationsService;
})();

/***/ }),

/***/ 56722:
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpService: () => (/* binding */ HttpService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 63855);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.service */ 8020);





let HttpService = /*#__PURE__*/(() => {
  class HttpService {
    http;
    cacheService;
    constructor(http, cacheService) {
      this.http = http;
      this.cacheService = cacheService;
    }
    BASE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiUrl;
    getHeaders() {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');
      return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      });
    }
    /**
     * GET request with optional caching
     * @param endpoint API endpoint
     * @param options Cache options (if provided, caching will be enabled)
     */
    get(endpoint, options) {
      const cacheKey = `GET_${endpoint}`;
      // If cache options provided, use caching
      if (options !== undefined) {
        return this.cacheService.get(cacheKey, () => this.httpRequest(endpoint, 'get'), {
          ...options,
          key: cacheKey
        });
      }
      // Otherwise, normal request without cache
      return this.httpRequest(endpoint, 'get');
    }
    /**
     * POST request (no caching by default, as POST usually modifies data)
     * @param endpoint API endpoint
     * @param data Request body
     * @param clearCachePattern Optional pattern to clear cache after POST
     */
    post(endpoint, data, clearCachePattern) {
      const result = this.httpRequest(endpoint, 'post', data);
      // Clear cache if pattern provided
      if (clearCachePattern) {
        result.subscribe({
          next: () => this.cacheService.clearByPattern(clearCachePattern),
          error: () => {} // Don't clear cache on error
        });
      }
      return result;
    }
    /**
     * PUT request (no caching by default, as PUT usually modifies data)
     * @param endpoint API endpoint
     * @param data Request body
     * @param clearCachePattern Optional pattern to clear cache after PUT
     */
    put(endpoint, data, clearCachePattern) {
      const result = this.httpRequest(endpoint, 'put', data);
      // Clear cache if pattern provided
      if (clearCachePattern) {
        result.subscribe({
          next: () => this.cacheService.clearByPattern(clearCachePattern),
          error: () => {} // Don't clear cache on error
        });
      }
      return result;
    }
    /**
     * DELETE request (no caching by default, as DELETE modifies data)
     * @param endpoint API endpoint
     * @param data Request body
     * @param clearCachePattern Optional pattern to clear cache after DELETE
     */
    delete(endpoint, data, clearCachePattern) {
      const result = this.httpRequest(endpoint, 'delete', data);
      // Clear cache if pattern provided
      if (clearCachePattern) {
        result.subscribe({
          next: () => this.cacheService.clearByPattern(clearCachePattern),
          error: () => {} // Don't clear cache on error
        });
      }
      return result;
    }
    httpRequest(endpoint, method, data = null) {
      const options = {
        body: data,
        headers: this.getHeaders()
      };
      const url = this.BASE_URL.endsWith('/') ? `${this.BASE_URL}${endpoint}` : `${this.BASE_URL}/${endpoint}`;
      return this.http.request(method, url, options);
    }
    /**
     * Clear cache for specific endpoint pattern
     */
    clearCache(pattern) {
      this.cacheService.clearByPattern(pattern);
    }
    /**
     * Clear all cache
     */
    clearAllCache() {
      this.cacheService.clearAll();
    }
    static ɵfac = function HttpService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_cache_service__WEBPACK_IMPORTED_MODULE_3__.CacheService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
  }
  return HttpService;
})();

/***/ }),

/***/ 68325:
/*!**********************************************!*\
  !*** ./src/app/services/mainfile.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainfileService: () => (/* binding */ MainfileService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ 56722);


let MainfileService = /*#__PURE__*/(() => {
  class MainfileService {
    http;
    endpoint = 'Mainfiles';
    constructor(http) {
      this.http = http;
    }
    searchMainfiles(query) {
      return this.http.get(`${this.endpoint}?search=${encodeURIComponent(query)}`);
    }
    getMainfileByCode(code) {
      return this.http.get(`${this.endpoint}/code/${code}`);
    }
    getMainfileById(id) {
      return this.http.get(`${this.endpoint}/${id}`);
    }
    static ɵfac = function MainfileService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MainfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.HttpService));
    };
    static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MainfileService,
      factory: MainfileService.ɵfac,
      providedIn: 'root'
    });
  }
  return MainfileService;
})();

/***/ }),

/***/ 83967:
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/negotiations/pages/client-follow-up copy/components/app-sidebar/app-sidebar.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSidebar: () => (/* binding */ AppSidebar)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 93683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 12481);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _mandate_report_mandate_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mandate-report/mandate-report */ 6195);
/* harmony import */ var _fax_to_work_report_fax_to_work_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fax-to-work-report/fax-to-work-report */ 64097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 34205);
/* harmony import */ var _services_mainfile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../services/mainfile.service */ 68325);
/* harmony import */ var _services_data_view_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../services/data-view.service */ 59068);










function AppSidebar_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-mandate-report", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function AppSidebar_Conditional_124_Template_app_mandate_report_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.togglePreview("mandate"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clientData", ctx_r3.clientData)("isPreview", true);
  }
}
function AppSidebar_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-fax-to-work-report", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("close", function AppSidebar_Conditional_125_Template_app_fax_to_work_report_close_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.togglePreview("fax"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("clientData", ctx_r3.clientData)("isPreview", true);
  }
}
let AppSidebar = /*#__PURE__*/(() => {
  class AppSidebar {
    mainfileService;
    dataViewService;
    mandateReport;
    faxToWorkReport;
    previewToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    financialData = null;
    dashboardStats = null;
    searchCid = '';
    selectedClient = null;
    activeReport = null;
    isPreviewMode = false;
    lawFirmName = 'بيت القانون';
    lawFirmPhone = '1818180';
    lawFirmAddress = 'شارع أحمد الجابر، برج وذرة، الدورين 3 & 6، شرق - الكويت';
    currentDate = new Date().toLocaleDateString('en-US');
    clientData = {
      clientName: '',
      agentName: '',
      contractNumber: '',
      claimValue: 0,
      caseNumber: '',
      address: '',
      nationality: '',
      employer: ''
    };
    representativeForm = {
      code: '',
      name: '',
      phone: '',
      amount: 0,
      contract: '',
      sendDate: new Date().toISOString().split('T')[0],
      notes: '',
      address: ''
    };
    constructor(mainfileService, dataViewService) {
      this.mainfileService = mainfileService;
      this.dataViewService = dataViewService;
    }
    onSearchInput() {
      this.resetData();
      this.search.emit(null);
    }
    // دالة البحث (عند الضغط على زر البحث)
    searchClient(searchValue) {
      if (!searchValue) return;
      this.mainfileService.searchMainfiles(searchValue).subscribe({
        next: results => {
          if (results && results.length > 0) {
            const client = results[0];
            this.selectedClient = client;
            this.updateClientData(client);
            this.search.emit(client);
          } else {
            Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert2 */ 37581, 23)).then(Swal => {
              Swal.default.fire({
                title: 'تنبيه',
                text: 'لم يتم العثور على أي نتائج للبحث المدخل',
                icon: 'warning',
                confirmButtonText: 'حسناً',
                confirmButtonColor: '#6366f1'
              });
            });
            this.resetData();
          }
        },
        error: err => {
          console.error('Search error:', err);
          this.resetData();
        }
      });
    }
    updateClientData(client) {
      const id = client.id || client.Id;
      const code = client.code || client.Code;
      const cid = client.cid || client.Cid;
      this.clientData = {
        clientName: client.name || client.Name || '',
        agentName: client.nationality || client.Nationality || 'شركة الاتصالات الكويتية - stc',
        contractNumber: code?.toString() || '',
        claimValue: 0,
        caseNumber: cid || '',
        address: client.address || client.Address || '',
        nationality: client.nationality || client.Nationality || '',
        employer: client.work || client.Work || ''
      };
    }
    resetData() {
      this.selectedClient = null;
      this.clientData = {
        clientName: '',
        agentName: '',
        contractNumber: '',
        claimValue: 0,
        caseNumber: '',
        address: '',
        nationality: '',
        employer: ''
      };
    }
    togglePreview(type) {
      if (this.activeReport === type && this.isPreviewMode) {
        this.isPreviewMode = false;
        this.activeReport = null;
      } else {
        this.activeReport = type;
        this.isPreviewMode = true;
        if (this.selectedClient) {
          this.fetchFinancialDetails();
        }
      }
      this.previewToggle.emit({
        type: this.activeReport,
        isPreview: this.isPreviewMode
      });
    }
    fetchFinancialDetails(callback) {
      const id = this.selectedClient.id || this.selectedClient.Id;
      const code = this.selectedClient.code || this.selectedClient.Code;
      this.dataViewService.getMainfileDetails(id).subscribe(details => {
        this.dataViewService.getMainfilePaymentsByFileCode(code).subscribe(payments => {
          const totalDebt = details.reduce((sum, d) => sum + (d.deptAmount || 0), 0);
          const totalPaid = (payments || []).reduce((sum, p) => sum + (p.amount || 0), 0);
          const netDebt = totalDebt - totalPaid;
          const representativeDetail = details[0] || {};
          this.clientData = {
            clientName: this.selectedClient.name || '',
            agentName: representativeDetail.legalPlaintiff || this.selectedClient.nationality || 'شركة الاتصالات الكويتية - stc',
            contractNumber: representativeDetail.contractNo || this.selectedClient.code?.toString() || '',
            claimValue: netDebt,
            caseNumber: this.selectedClient.cid || '',
            address: this.selectedClient.address || '',
            nationality: this.selectedClient.nationality || '',
            employer: this.selectedClient.work || representativeDetail.work || ''
          };
          // Sync representative form
          this.representativeForm = {
            code: this.selectedClient.code?.toString() || '',
            name: this.selectedClient.name || '',
            phone: '',
            // Can be manually filled or fetched from contacts
            amount: netDebt,
            contract: representativeDetail.contractNo || this.selectedClient.code?.toString() || '',
            sendDate: new Date().toISOString().split('T')[0],
            notes: '',
            address: this.selectedClient.address || ''
          };
          if (callback) callback();
        });
      });
    }
    openRepresentativeModal() {
      if (!this.selectedClient) {
        this.showWarning();
        return;
      }
      this.fetchFinancialDetails(() => {
        document.getElementById('representativeModal')?.showModal();
      });
    }
    submitRepresentativeForm() {
      console.log('Representative Form Submitted:', this.representativeForm);
      // Implementation for saving/sending to backend would go here
      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert2 */ 37581, 23)).then(Swal => {
        Swal.default.fire({
          icon: 'success',
          title: 'تم الإرسال',
          text: 'تم إرسال استمارة المندوب بنجاح',
          confirmButtonText: 'حسناً'
        });
      });
      document.getElementById('representativeModal')?.close();
    }
    generateExecutionOrder() {
      if (!this.selectedClient) {
        this.showWarning();
        return;
      }
      this.fetchFinancialDetails(() => {
        const q = this.clientData;
        const url = `/print/mandate?name=${encodeURIComponent(q.clientName)}&agent=${encodeURIComponent(q.agentName)}&contract=${encodeURIComponent(q.contractNumber)}&amount=${q.claimValue}&cid=${encodeURIComponent(q.caseNumber)}&address=${encodeURIComponent(q.address)}&nationality=${encodeURIComponent(q.nationality)}&employer=${encodeURIComponent(q.employer)}`;
        window.open(url, '_blank');
      });
    }
    generateFaxToWork() {
      if (!this.selectedClient) {
        this.showWarning();
        return;
      }
      this.fetchFinancialDetails(() => {
        const q = this.clientData;
        const url = `/print/fax?name=${encodeURIComponent(q.clientName)}&agent=${encodeURIComponent(q.agentName)}&contract=${encodeURIComponent(q.contractNumber)}&amount=${q.claimValue}&cid=${encodeURIComponent(q.caseNumber)}&address=${encodeURIComponent(q.address)}&nationality=${encodeURIComponent(q.nationality)}&employer=${encodeURIComponent(q.employer)}`;
        window.open(url, '_blank');
      });
    }
    showWarning() {
      Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! sweetalert2 */ 37581, 23)).then(Swal => {
        Swal.default.fire({
          icon: 'warning',
          title: 'تنبيه',
          text: 'يرجى البحث عن العميل أولاً للحصول على بيانات حقيقية، أو يمكنك مشاهدة القالب فقط من زر المعاينة',
          confirmButtonText: 'حسناً'
        });
      });
    }
    static ɵfac = function AppSidebar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppSidebar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mainfile_service__WEBPACK_IMPORTED_MODULE_6__.MainfileService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_view_service__WEBPACK_IMPORTED_MODULE_7__.DataViewService));
    };
    static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppSidebar,
      selectors: [["app-app-sidebar"]],
      viewQuery: function AppSidebar_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_mandate_report_mandate_report__WEBPACK_IMPORTED_MODULE_3__.MandateReport, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_fax_to_work_report_fax_to_work_report__WEBPACK_IMPORTED_MODULE_4__.FaxToWorkReport, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mandateReport = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.faxToWorkReport = _t.first);
        }
      },
      inputs: {
        financialData: "financialData",
        dashboardStats: "dashboardStats"
      },
      outputs: {
        previewToggle: "previewToggle",
        search: "search"
      },
      decls: 186,
      vars: 28,
      consts: [["searchInput", ""], [1, "flex", "flex-col", "gap-4", "h-full"], [1, "premium-card"], [1, "join", "w-full"], ["placeholder", "\u0627\u0628\u062D\u062B \u0628\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A \u0623\u0648 \u0627\u0644\u0627\u0633\u0645...", 1, "input", "input-bordered", "join-item", "w-full", 3, "input", "keyup.enter"], [1, "btn", "join-item", "rounded-r-full", 3, "click"], [1, "font-bold", "text-slate-700", "mb-4", "text-sm", "tracking-wide"], [1, "grid", "grid-cols-2", "gap-2"], [1, "col-span-2", "flex", "gap-1"], [1, "premium-btn", "premium-btn-secondary", "text-xs", "p-2", "flex-grow", 3, "click"], ["title", "\u0645\u0639\u0627\u064A\u0646\u0629", 1, "premium-btn", "premium-btn-secondary", "text-xs", "p-2", "aspect-square", "flex", "items-center", "justify-center", 3, "click"], [1, "fas", "fa-eye", "text-xs"], [1, "premium-btn", "premium-btn-secondary", "text-xs", "p-2"], [1, "premium-btn", "premium-btn-secondary", "text-xs", "p-2", 3, "click"], [1, "premium-btn", "premium-btn-primary", "col-span-2", "text-sm", "p-3", "mt-2", "shadow-sm", "font-black"], [1, "flex", "flex-col", "space-y-3", "pb-2"], [1, "flex", "items-center", "justify-between", "px-2", "pb-3", "border-b", "border-white/20"], [1, "text-3xl", "font-black", "tracking-tight"], [1, "text-sm", "font-semibold", "opacity-90"], [1, "flex", "items-center", "justify-between", "px-2", "pt-1"], [1, "premium-card", "shadow-lg", 2, "background", "linear-gradient(135deg, #0f172a, #1e293b)", "color", "white", "border", "none !important"], [1, "space-y-3", "text-sm", "font-medium"], [1, "flex", "justify-between", "items-center", "opacity-90"], [1, "font-bold", "text-base", "text-blue-200"], [1, "font-bold", "text-base", "text-emerald-300"], [1, "flex", "justify-between", "items-center", "opacity-90", "font-black", "text-rose-300"], [1, "font-bold", "text-base"], [2, "border-top", "1px solid rgba(255,255,255,0.15)", "margin", "0.75rem 0"], [1, "p-3", "rounded-xl", 2, "background", "rgba(255,255,255,0.08)", "border", "1px solid rgba(255,255,255,0.1)"], [1, "flex", "justify-between", "font-black", "text-emerald-400", "text-lg", "mb-1"], [1, "flex", "justify-between", "text-xs", "opacity-70"], [1, "pt-2", "space-y-3"], [1, "flex", "justify-between", "items-center", "opacity-90", "border-t", "border-white/10", "pt-3"], [1, "badge", "badge-sm", 3, "ngClass"], [1, "font-bold", "text-base", "text-yellow-300"], [1, "flex", "justify-between", "font-black", "text-rose-400", "text-lg", "mt-2", "pt-2", 2, "border-top", "1px dashed rgba(255,255,255,0.15)"], [1, "flex", "flex-col", "gap-3"], [1, "w-full"], [1, "form-label"], ["type", "date", 1, "premium-input", 2, "padding-right", "1rem", "padding-left", "1rem"], [1, "flex", "gap-2", "mt-2"], [1, "premium-btn", "premium-btn-primary", "flex-1", "shadow-sm"], [1, "premium-btn", "premium-btn-secondary", "flex-1"], [1, "premium-card", "mt-auto", "transition-colors", "hover:bg-slate-50", "cursor-pointer", "text-center", "text-slate-600", "font-bold", "p-0", "overflow-hidden", 2, "padding", "0 !important"], [1, "w-full", "h-full", "flex", "items-center", "justify-center", "gap-2", "p-4", "outline-none", "hover:text-blue-600", "transition-colors"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"], [3, "clientData", "isPreview"], ["id", "representativeModal", "dir", "rtl", 1, "modal"], [1, "modal-box", "p-0", "w-full", "max-w-lg", "rounded-2xl", "shadow-2xl", "dark:shadow-[0_0_40px_rgba(0,0,0,0.5)]", "border", "border-slate-200", "dark:border-slate-700", "bg-white", "dark:bg-slate-900", "overflow-hidden", "text-slate-800", "dark:text-slate-200", "transition-colors", "duration-300"], [1, "bg-gradient-to-l", "from-slate-50", "to-white", "dark:from-slate-800", "dark:to-slate-900", "px-5", "py-4", "border-b", "border-slate-100", "dark:border-slate-800", "flex", "justify-between", "items-center", "transition-colors", "duration-300"], [1, "flex", "items-center", "gap-3"], [1, "w-8", "h-8", "rounded-full", "bg-blue-50", "dark:bg-emerald-500/20", "flex", "items-center", "justify-center"], [1, "fas", "fa-file-signature", "text-blue-500", "dark:text-emerald-400", "text-sm"], [1, "font-bold", "text-sm", "tracking-wide", "text-slate-800", "dark:text-white"], [1, "text-[10px]", "text-slate-500", "dark:text-slate-400", "font-medium", "tracking-wider"], ["onclick", "this.closest('dialog').close()", "title", "\u0625\u063A\u0644\u0627\u0642", 1, "w-8", "h-8", "rounded-full", "bg-slate-50", "dark:bg-slate-800", "hover:bg-rose-50", "dark:hover:bg-rose-500/20", "text-slate-400", "dark:text-slate-500", "hover:text-rose-500", "dark:hover:text-rose-400", "transition-colors", "flex", "items-center", "justify-center", "border", "border-transparent", "dark:border-white/5"], [1, "fas", "fa-times"], [1, "p-5", "space-y-4"], [1, "grid", "grid-cols-2", "gap-4"], [1, "space-y-1.5"], [1, "text-xs", "font-bold", "text-slate-500", "dark:text-slate-400", "pr-1"], ["type", "text", "readonly", "", 1, "w-full", "bg-slate-50", "dark:bg-slate-950/50", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-9", "px-3", "text-sm", "text-center", "font-bold", "text-blue-600", "dark:text-emerald-400", "shadow-sm", "dark:shadow-inner", "transition-colors", "duration-300", 3, "ngModelChange", "ngModel"], ["type", "text", "readonly", "", 1, "w-full", "bg-slate-50", "dark:bg-slate-950/50", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-9", "px-3", "text-sm", "text-center", "font-mono", "text-slate-600", "dark:text-blue-300", "shadow-sm", "dark:shadow-inner", "transition-colors", "duration-300", 3, "ngModelChange", "ngModel"], ["type", "text", "readonly", "", 1, "w-full", "bg-slate-50", "dark:bg-slate-950/50", "border", "border-slate-200", "dark:border-slate-800", "rounded-lg", "h-9", "px-3", "text-sm", "font-semibold", "text-slate-700", "dark:text-slate-200", "shadow-sm", "dark:shadow-inner", "transition-colors", "duration-300", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", 1, "w-full", "bg-white", "dark:bg-slate-800", "border", "border-slate-300", "dark:border-slate-700/50", "rounded-lg", "h-9", "px-3", "text-sm", "text-slate-800", "dark:text-white", "shadow-sm", "focus:border-blue-500", "dark:focus:border-blue-500/50", "focus:ring-1", "focus:ring-blue-500", "dark:focus:ring-blue-500/50", "transition-all", "outline-none", "duration-300", 3, "ngModelChange", "ngModel"], ["type", "number", "dir", "ltr", 1, "w-full", "bg-white", "dark:bg-slate-800", "border", "border-slate-300", "dark:border-slate-700/50", "rounded-lg", "h-9", "px-3", "text-sm", "text-rose-500", "dark:text-rose-400", "font-bold", "shadow-sm", "focus:border-rose-500", "dark:focus:border-rose-500/50", "focus:ring-1", "focus:ring-rose-500", "dark:focus:ring-rose-500/50", "transition-all", "outline-none", "text-left", "duration-300", 3, "ngModelChange", "ngModel"], ["type", "date", 1, "w-full", "bg-white", "dark:bg-slate-800", "border", "border-slate-300", "dark:border-slate-700/50", "rounded-lg", "h-9", "px-3", "text-sm", "text-slate-800", "dark:text-white", "shadow-sm", "focus:border-blue-500", "dark:focus:border-blue-500/50", "outline-none", "duration-300", "transition-colors", 3, "ngModelChange", "ngModel"], ["placeholder", "\u0627\u0643\u062A\u0628 \u0645\u0644\u0627\u062D\u0638\u0627\u062A\u0643...", 1, "w-full", "bg-white", "dark:bg-slate-800", "border", "border-slate-300", "dark:border-slate-700/50", "rounded-lg", "p-3", "text-sm", "text-slate-800", "dark:text-white", "shadow-sm", "focus:border-blue-500", "dark:focus:border-blue-500/50", "resize-none", "outline-none", "min-h-[60px]", "duration-300", "transition-colors", 3, "ngModelChange", "ngModel"], ["placeholder", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646...", 1, "w-full", "bg-white", "dark:bg-slate-800", "border", "border-slate-300", "dark:border-slate-700/50", "rounded-lg", "p-3", "text-sm", "text-slate-800", "dark:text-white", "shadow-sm", "focus:border-blue-500", "dark:focus:border-blue-500/50", "resize-none", "outline-none", "min-h-[70px]", "duration-300", "transition-colors", 3, "ngModelChange", "ngModel"], [1, "bg-gray-50", "dark:bg-slate-950/50", "px-5", "py-4", "border-t", "border-slate-100", "dark:border-white/5", "flex", "gap-3", "transition-colors", "duration-300"], [1, "bg-blue-600", "dark:bg-emerald-500", "hover:bg-blue-700", "dark:hover:bg-emerald-400", "text-white", "dark:text-slate-950", "flex-1", "h-10", "rounded-lg", "text-sm", "font-bold", "transition-all", "shadow-md", "shadow-blue-500/20", "dark:shadow-[0_0_15px_rgba(16,185,129,0.2)]", "active:scale-95", 3, "click"], [1, "fas", "fa-paper-plane", "px-1", "dark:hidden"], [1, "fas", "fa-paper-plane", "ml-2", "hidden", "dark:inline"], [1, "bg-slate-200", "dark:bg-slate-700", "hover:bg-slate-300", "dark:hover:bg-slate-600", "text-slate-700", "dark:text-white", "flex-1", "h-10", "rounded-lg", "text-sm", "font-bold", "transition-all", "active:scale-95", 3, "click"], [1, "fas", "fa-edit", "px-1", "dark:hidden"], [1, "fas", "fa-edit", "ml-2", "hidden", "dark:inline"], ["method", "dialog"], [1, "bg-white", "dark:bg-rose-500/10", "hover:bg-rose-50", "dark:hover:bg-rose-500/20", "text-rose-500", "dark:text-rose-400", "border", "border-slate-200", "dark:border-rose-500/20", "w-20", "h-10", "rounded-lg", "text-sm", "font-bold", "transition-all", "active:scale-95", "shadow-sm", "dark:shadow-none"], [3, "close", "clientData", "isPreview"]],
      template: function AppSidebar_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "input", 4, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function AppSidebar_Template_input_input_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.onSearchInput());
          })("keyup.enter", function AppSidebar_Template_input_keyup_enter_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            const searchInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.searchClient(searchInput_r2.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppSidebar_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            const searchInput_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.searchClient(searchInput_r2.value));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0628\u062D\u062B");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2)(8, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A \u0633\u0631\u064A\u0639\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppSidebar_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.generateExecutionOrder());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u062A\u0643\u0644\u064A\u0641 \u0628\u0627\u0644\u0648\u0641\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppSidebar_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.togglePreview("mandate"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8)(17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppSidebar_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.generateFaxToWork());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u0641\u0627\u0643\u0633 \u062C\u0647\u0629 \u0627\u0644\u0639\u0645\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppSidebar_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.togglePreview("fax"));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\u0627\u0644\u0639\u0642\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u0627\u0644\u0645\u062F\u0646\u064A\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u0631\u0633\u0627\u0626\u0644");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0645\u0644\u0641\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppSidebar_Template_button_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openRepresentativeModal());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0627\u0633\u062A\u0645\u0627\u0631\u0629 \u0645\u0646\u062F\u0648\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u062A\u0627\u0631\u062C\u064A\u062A \u0627\u0644\u0628\u0627\u062A\u0634\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u0635\u062D\u064A\u0641\u0629 \u0627\u0644\u062F\u0639\u0648\u0649");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 2)(36, "div", 15)(37, "div", 16)(38, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\u0639\u062F\u062F \u0627\u0644\u0639\u0645\u0644\u0627\u0621");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16)(43, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\u0639\u062F\u062F \u0627\u0644\u0625\u0641\u0627\u062F\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 16)(48, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\u0627\u0644\u0625\u0641\u0627\u062F\u0627\u062A \u062E\u0644\u0627\u0644 \u0627\u0644\u064A\u0648\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 19)(53, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "\u0627\u0644\u0625\u0641\u0627\u062F\u0627\u062A \u062E\u0644\u0627\u0644 \u0627\u0644\u0634\u0647\u0631");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 20)(58, "div", 21)(59, "div", 22)(60, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u062F\u064A\u0648\u0646\u064A\u0629:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](64, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 22)(66, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0633\u062F\u062F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 25)(72, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0627\u0644\u0643\u0644\u064A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 28)(79, "div", 29)(80, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "\u0627\u0644\u0645\u0633\u062F\u062F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 30)(86, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0645\u0627\u0644\u064A\u0629 \u0644\u0644\u0639\u0645\u064A\u0644:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "\u0645\u062D\u062F\u0651\u062B \u0627\u0644\u0622\u0646");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 31)(91, "div", 32)(92, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "\u062D\u0627\u0644\u0629 \u0627\u0644\u0633\u062F\u0627\u062F:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 22)(97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062A\u062E\u0641\u064A\u0636:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "span", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "0.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 35)(102, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\u0627\u0644\u0645\u062A\u0628\u0642\u064A:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "0.000");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 2)(107, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "\u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 36)(110, "div", 37)(111, "label", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0631\u0627\u062C\u0639\u0629");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 40)(115, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "\u062D\u0641\u0638");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "\u062A\u0631\u0627\u062C\u0639");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 43)(120, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "svg", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "path", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, " \u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u062A\u0642\u0631\u064A\u0631 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](124, AppSidebar_Conditional_124_Template, 1, 2, "app-mandate-report", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditionalCreate"](125, AppSidebar_Conditional_125_Template, 1, 2, "app-fax-to-work-report", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "dialog", 48)(127, "div", 49)(128, "div", 50)(129, "div", 51)(130, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "i", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div")(133, "h3", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "\u0627\u0633\u062A\u0645\u0627\u0631\u0629 \u0645\u0646\u062F\u0648\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "p", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "REPRESENTATIVE FORM");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "i", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 58)(140, "div", 59)(141, "div", 60)(142, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "\u0627\u0644\u0643\u0648\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "input", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppSidebar_Template_input_ngModelChange_144_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.representativeForm.code, $event) || (ctx.representativeForm.code = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 60)(146, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "\u0631\u0642\u0645 \u0627\u0644\u0639\u0642\u062F");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "input", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppSidebar_Template_input_ngModelChange_148_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.representativeForm.contract, $event) || (ctx.representativeForm.contract = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 60)(150, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "\u0627\u0644\u0627\u0633\u0645");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "input", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppSidebar_Template_input_ngModelChange_152_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.representativeForm.name, $event) || (ctx.representativeForm.name = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 59)(154, "div", 60)(155, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "\u0627\u0644\u0647\u0627\u062A\u0641");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "input", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppSidebar_Template_input_ngModelChange_157_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.representativeForm.phone, $event) || (ctx.representativeForm.phone = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 60)(159, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "\u0627\u0644\u0645\u0628\u0644\u063A (\u062F.\u0643)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "input", 66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppSidebar_Template_input_ngModelChange_161_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.representativeForm.amount, $event) || (ctx.representativeForm.amount = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 60)(163, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "\u062A\u0627\u0631\u064A\u062E \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0645\u0646\u062F\u0648\u0628");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "input", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppSidebar_Template_input_ngModelChange_165_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.representativeForm.sendDate, $event) || (ctx.representativeForm.sendDate = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 60)(167, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "\u0645\u0644\u0627\u062D\u0638\u0627\u062A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "textarea", 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppSidebar_Template_textarea_ngModelChange_169_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.representativeForm.notes, $event) || (ctx.representativeForm.notes = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 60)(171, "label", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062A\u0641\u0635\u064A\u0644\u064A");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "textarea", 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function AppSidebar_Template_textarea_ngModelChange_173_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.representativeForm.address, $event) || (ctx.representativeForm.address = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 70)(175, "button", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppSidebar_Template_button_click_175_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.submitRepresentativeForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "i", 72)(177, "i", 73);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, " \u0625\u0631\u0633\u0627\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "button", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppSidebar_Template_button_click_179_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.submitRepresentativeForm());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "i", 75)(181, "i", 76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, " \u062A\u0639\u062F\u064A\u0644 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "form", 77)(184, "button", 78);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, " \u0625\u0644\u063A\u0627\u0621 ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.dashboardStats == null ? null : ctx.dashboardStats.totalClients) || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.dashboardStats == null ? null : ctx.dashboardStats.totalStatements) || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.dashboardStats == null ? null : ctx.dashboardStats.todayStatements) || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.dashboardStats == null ? null : ctx.dashboardStats.monthStatements) || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](64, 20, (ctx.financialData == null ? null : ctx.financialData.claimValue) || 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 22, (ctx.financialData == null ? null : ctx.financialData.fees) || 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 24, (ctx.financialData == null ? null : ctx.financialData.lawFees) || 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 26, (ctx.financialData == null ? null : ctx.financialData.fees) || 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", (ctx.financialData == null ? null : ctx.financialData.lawFees) > 0 ? "badge-warning" : "badge-success");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.financialData == null ? null : ctx.financialData.lawFees) > 0 ? "\u0628\u0627\u0646\u062A\u0638\u0627\u0631 \u0633\u062F\u0627\u062F" : "\u0645\u0633\u062F\u062F \u0628\u0627\u0644\u0643\u0627\u0645\u0644", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isPreviewMode && ctx.activeReport === "mandate" ? 124 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.isPreviewMode && ctx.activeReport === "fax" ? 125 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.representativeForm.code);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.representativeForm.contract);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.representativeForm.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.representativeForm.phone);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.representativeForm.amount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.representativeForm.sendDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.representativeForm.notes);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.representativeForm.address);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _mandate_report_mandate_report__WEBPACK_IMPORTED_MODULE_3__.MandateReport, _fax_to_work_report_fax_to_work_report__WEBPACK_IMPORTED_MODULE_4__.FaxToWorkReport, _angular_common__WEBPACK_IMPORTED_MODULE_0__.DecimalPipe],
      styles: [".premium-card[_ngcontent-%COMP%] {\n    background: var(--surface-card);\n    border: 1px solid var(--surface-border) !important;\n    border-radius: 1.5rem !important;\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    margin-bottom: 1.5rem !important;\n    padding: 1.5rem !important;\n    position: relative;\n    overflow: hidden;\n    color: var(--text-color);\n}\n\n.premium-card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;\n    border-color: var(--primary-color) !important;\n}\n\n.premium-input[_ngcontent-%COMP%] {\n    background: var(--surface-ground) !important;\n    border: 1.5px solid var(--surface-border) !important;\n    border-radius: 0.75rem !important;\n    padding: 0.5rem 1rem !important;\n    font-size: 0.95rem !important;\n    font-weight: 500 !important;\n    color: var(--text-color) !important;\n    transition: all 0.2s ease !important;\n    width: 100%;\n}\n\nselect.premium-input[_ngcontent-%COMP%] {\n    appearance: none;\n    -webkit-appearance: none;\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='var(--text-color)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\") !important;\n    background-repeat: no-repeat !important;\n    background-position: left 1rem center !important;\n    background-size: 1em !important;\n    padding-left: 2.5rem !important;\n    cursor: pointer;\n}\n\n.premium-input[_ngcontent-%COMP%]:focus {\n    background: var(--surface-card) !important;\n    border-color: var(--primary-color) !important;\n    box-shadow: 0 0 0 2px var(--primary-color) !important;\n    outline: none !important;\n}\n\n.premium-btn[_ngcontent-%COMP%] {\n    border-radius: 0.75rem !important;\n    font-weight: 700 !important;\n    font-size: 0.95rem !important;\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n    padding: 0.75rem 1.5rem !important;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    cursor: pointer;\n}\n\n.premium-btn-primary[_ngcontent-%COMP%] {\n    background-color: var(--primary-color) !important;\n    color: var(--primary-color-text) !important;\n    border: none !important;\n}\n\n.premium-btn-primary[_ngcontent-%COMP%]:hover {\n    filter: brightness(0.9);\n    transform: translateY(-2px);\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.premium-btn-secondary[_ngcontent-%COMP%] {\n    background-color: var(--surface-ground) !important;\n    color: var(--text-color) !important;\n    border: 1px solid var(--surface-border) !important;\n}\n\n.premium-btn-secondary[_ngcontent-%COMP%]:hover {\n    background-color: var(--surface-hover) !important;\n    transform: translateY(-2px);\n}\n\n.form-label[_ngcontent-%COMP%] {\n    display: block;\n    color: var(--text-color-secondary);\n    font-weight: 800;\n    font-size: 0.85rem;\n    margin-bottom: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbmVnb3RpYXRpb25zL3BhZ2VzL2NsaWVudC1mb2xsb3ctdXAgY29weS9jb21wb25lbnRzL2FwcC1zaWRlYmFyL2FwcC1zaWRlYmFyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixrREFBa0Q7SUFDbEQsZ0NBQWdDO0lBQ2hDLDRGQUE0RjtJQUM1RixpREFBaUQ7SUFDakQsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLDhGQUE4RjtJQUM5Riw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsb0RBQW9EO0lBQ3BELGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsMlNBQTJTO0lBQzNTLHVDQUF1QztJQUN2QyxnREFBZ0Q7SUFDaEQsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLDZDQUE2QztJQUM3QyxxREFBcUQ7SUFDckQsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsNERBQTREO0lBQzVELGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCwyQ0FBMkM7SUFDM0MsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsbUNBQW1DO0lBQ25DLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLnByZW1pdW0tY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW0gIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4ucHJlbWl1bS1jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNlbGVjdC5wcmVtaXVtLWlucHV0IHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0ndmFyKC0tdGV4dC1jb2xvciknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyUzZSUzY3BvbHlsaW5lIHBvaW50cz0nNiA5IDEyIDE1IDE4IDknJTNlJTNjL3BvbHlsaW5lJTNlJTNjL3N2ZyUzZVwiKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAxcmVtIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHJlbWl1bS1idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByZW1pdW0tYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLXRleHQpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnByZW1pdW0tYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLnByZW1pdW0tYnRuLXNlY29uZGFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWdyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcmVtaXVtLWJ0bi1zZWNvbmRhcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1ob3ZlcikgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
  return AppSidebar;
})();

/***/ })

}]);
//# sourceMappingURL=7540.js.map