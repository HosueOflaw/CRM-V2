import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin, of } from 'rxjs';
import { LookupModal } from "../../../../../../shared/components/lookup-modal/lookup-modal";
import { NegotiationsService } from '../../../../services/negotiations.service';
import * as XLSX from 'xlsx'; // استيراد مكتبة الإكسل
import Swal from 'sweetalert2';

interface ClientRow {
  // البيانات الأساسية
  id: number;
  code: string;
  name: string;
  fileStatus: string;       // حالة الملف
  debtReason: string;       // سبب المديونية
  batch: string;            // رقم الباتش
  contractNum: string;      // رقم العقد
  nationality: string;      // الجنسية
  civilId: string;          // الرقم المدني
  claim: number;            // قيمة المطالبة
  paid: number;             // المدفوع
  remaining: number;        // المتبقي
  address: string;          // العنوان
  client: string;           // الموكل

  // حالات المتابعة الجديدة
  followUpStatus: string;   // حالة المتابعة
  clientStatus: string;     // حالة العميل
  contactStatus: string;    // حالة التواصل
  cooperationStatus: string;// حالة التعاون
  civilStatus: string;      // حالة المدنية
  internalStatus: string;   // حالة الداخلية

  // بيانات السداد والإفادة
  lastPaymentAmount: number; // اخر سداد
  lastPaymentDate: string;   // تاريخ اخر سداد
  lastStatement: string;     // اخر افادة (نص)
  lastStatementDate: string; // تاريخ اخر افادة
  reviewDate: string;        // تاريخ المراجعة
}
// تعريف الواجهة لصف الإفادة
interface StatementRow {
  name: string;
  date: string;
  reviewDate: string;
  efada: string;
  employee: string;
  contactMethod: string;
  contactStatus: string;
  cooperationStatus: string;
  civilStatus: string;
  internalStatus: string;
  depositStatus: string;
  totalAmount: string;
  statementNumber: string;
  lastStatementDate: string;
  notes: string;
  civilId?: string; // إضافة الرقم المدني للربط
  // إضافة حقل الفلتر
  filterStatus: 'statements' | 'review' | 'paid' | 'group_paid' | 'general';
}


@Component({
  selector: 'app-main-content',
  imports: [CommonModule, FormsModule, LookupModal],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css'
})
export class MainContent {
  @ViewChild('lookupModal') lookupModal: any;
  @Input() clientRows: any[] = [];

  // UI Toggles for History Expansion (15+ categories)
  showAllClientMode: boolean = false;
  showAllClaimMode: boolean = false;
  showAllFileMode: boolean = false;
  showAllActionMode: boolean = false;
  showAllFollowupMode: boolean = false;
  showAllInternalMode: boolean = false;
  showAllCivilMode: boolean = false;
  showAllContactMode: boolean = false;
  showAllCooperationMode: boolean = false;
  showAllDiscountMode: boolean = false;
  showAllAcceptanceMode: boolean = false;
  showAllJobMode: boolean = false;
  showAllSalarydateMode: boolean = false;
  showAllIncomenotesMode: boolean = false;
  showAllComms_langMode: boolean = false;

  private _selectedPerson: any = null;
  @Input() set selectedPerson(val: any) {
    this._selectedPerson = val;
    if (val && (val.id || val.Id)) {
      this.ensureClassification();
      // History loading is now consolidated in ngOnChanges to prevent flicker
    }
  }
  get selectedPerson() { return this._selectedPerson; }

  @Input() financialData: any = null;
  @Input() attachments: any[] = [];
  @Input() payments: any[] = [];
  @Input() notes: any[] = [];
  @Input() additionalAmounts: any[] = [];
  @Input() audits: any[] = [];
  @Input() autoNumbers: any[] = [];
  @Input() callcenterStatements: any[] = [];
  @Input() classifications: any[] = [];
  @Input() statuses: any[] = [];
  fromDate: string = '2025-11-08';
  toDate: string = '2025-12-02';
  statementRows: StatementRow[] = [];
  allStatementRows: StatementRow[] = [];
  Math = Math;
  searchGeneral: string = '';
  selectedFile: any = null;
  private lastLoadedFileId: number | null = null;



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

  familyList: string[] = [];

  activeMainTab: any = 'main';
  loading: boolean = false;
  
  // Independent loading states for Classification Cards
  loadingDiscount: boolean = false;
  loadingJob: boolean = false;
  loadingIncome: boolean = false;
  
  // Track loading state per category field
  fieldLoading: { [key: string]: boolean } = {};
  selectedAction: string = ''; // هذا المتغير سيخزن الإختيار
  selectedNumber: string = '';
  selectedRelation: string = '';
  selectedResult: string = '';
  promiseToPayType: 'none' | 'full' | 'partial' = 'none';
  promiseToPayAmount: number | null = null;
  installmentAmount: number | null = null;
  installmentDate: string | null = null;
  acceptanceOptions: string[] = ['تم القبول', 'مرفوض', 'قيد المراجعة', 'موافقة مشروطة', 'مبلغ مقطوع'];
  reviewType: string = '';
  reviewNote: string = '';
  statementDetails: any = {
    notes: '',
    phoneNumber: '',
    phoneOwner: '',
    nextAction: '',
    nextDate: ''
  };

  // Pagination for Audits
  auditsPage: number = 1;
  auditsPageSize: number = 5;
  @Input() auditsTotal: number = 0;

  // Pagination for Call Center Statements (File Specific)
  statementsPage: number = 1;
  statementsPageSize: number = 5;
  @Input() statementsTotal: number = 0;

  // Pagination for Notes
  notesPage: number = 1;
  notesPageSize: number = 5;
  @Input() notesTotal: number = 0;

  // Pagination for Statuses
  historyPage: number = 1;
  historyPageSize: number = 5;
  @Input() statusesTotal: number = 0;

  // Pagination for Search Statements Tab
  searchStatementsPage: number = 1;
  searchStatementsPageSize: number = 20;
  searchStatementsTotal: number = 0;
  @Output() pageChange = new EventEmitter<{ type: 'audits' | 'statements' | 'notes' | 'statuses', page: number }>();
  @Output() loadClientRequest = new EventEmitter<any>(); // حدث جديد لتحميل ملف العميل المباشر

  constructor(private negotiationsService: NegotiationsService) { }

  handleResultClick(result: string) {
    if (this.selectedNumber) {
      this.statementDetails.phoneNumber = this.selectedNumber;
      this.statementDetails.phoneOwner = this.selectedRelation || '';
    }

    if (result === 'وعد بالسداد') {
      const modal = document.getElementById('promiseModal') as HTMLDialogElement;
      if (modal) modal.showModal();
    } else if (result === 'تقسيط') {
      const modal = document.getElementById('installmentModal') as HTMLDialogElement;
      if (modal) modal.showModal();
    } else if (result === 'مراجعة') {
      const modal = document.getElementById('reviewModal') as HTMLDialogElement;
      if (modal) modal.showModal();
    } else {
      this.selectedResult = result;
    }
  }

  // Lookup selections for dropdowns
  lookupLists: any = {
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
    comms_lang: [{ id: 1, name: 'العربية' }, { id: 2, name: 'English' }],
    gender: [{ id: 1, name: 'ذكر' }, { id: 2, name: 'أنثى' }]
  };

  // Category-specific history storage
  categoryHistories: { [key: string]: any[] } = {
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
  historyModalVisible: boolean = false;
  selectedHistoryTitle: string = '';
  selectedHistoryItems: any[] = [];

  openFullHistory(title: string, data: any[]) {
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

    const modal = document.getElementById('promiseModal') as HTMLDialogElement;
    if (modal) modal.close();
  }

  submitInstallment() {
    this.selectedResult = `تقسيط مبلغ ${this.installmentAmount} د.ك بتاريخ ${this.installmentDate}`;
    const modal = document.getElementById('installmentModal') as HTMLDialogElement;
    if (modal) modal.close();
  }

  submitReview() {
    let reviewTypeName = '';
    if (this.reviewType === 'company') reviewTypeName = 'مراجعة الشركة';
    else if (this.reviewType === 'admin') reviewTypeName = 'مراجعة المسؤل';
    else reviewTypeName = 'مراجعة الادارة';

    this.selectedResult = `${reviewTypeName}${this.reviewNote ? ' - ' + this.reviewNote : ''}`;
    const modal = document.getElementById('reviewModal') as HTMLDialogElement;
    if (modal) modal.close();
  }
  activeSubTabLower: string = 'notes';
  paymentForm = {
    code: '',
    name: '',
    amount: 0,
    civilId: '',
    phone: '',
    claimant: '',
    whatsapp: '',
    message: '',
    language: 'arabic' as 'arabic' | 'english',
    type: 'company' as 'company' | 'office'
  };
  companyLink: string = '';
  whatsAppNumber: string = '';
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
  @Input() statsData: any = { custodyCount: 0, filesCount: 0, totalFiles: 0, filesInCustody: 0, currentDayStatements: 0 };
  @Input() numbersSearchResults: any[] = [];
  @Input() bottomTable1: any[] = [];
  @Input() bottomTable2: any[] = [];

  // Variables for modals
  selectedPayment: any = null;
  selectedDebt: any = null;

  selectPaymentForModal(payment: any) {
    this.selectedPayment = payment;
  }

  selectDebtForModal(debt: any) {
    this.selectedDebt = debt;
  }
  @Output() saveSearch = new EventEmitter<any>();
  @Output() statusChanged = new EventEmitter<void>();
  @Output() onSaveComplete = new EventEmitter<void>();

  lookupData: any[] = [];



  @Input() searchNumbersForm: any = {
    clientCode: '', civilID: '', source: '', classification: '', type: '', number: '',
    discount: '', civilEndDate: '', guarantor: '', commercialReg: '', companyCivil: '',
    phone: '', email: '', partner1: '', partner2: '', partner3: '', membership: '', fax: ''
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

  populatePaymentForm(type: 'company' | 'office') {
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
    const baseUrl = this.paymentForm.type === 'office'
      ? 'https://pay.houseoflaw.com/office'
      : 'https://pay.houseoflaw.com/company';

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
      Swal.fire({
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
      Swal.fire('تنبيه', 'الرجاء التأكد من رقم الواتساب والرابط', 'warning');
      return;
    }

    const url = `https://wa.me/${this.paymentForm.whatsapp}?text=${encodeURIComponent(this.paymentForm.message)}`;
    window.open(url, '_blank');
  }


  setSubActiveLower(tab: string) {
    this.activeSubTabLower = tab;
  }



  ngOnInit(): void {
    const hashTab = window.location.hash.replace('#', '');
    if (['main', 'clients', 'searchNumbers', 'menuSearch', 'FeesAndCollection', 'notes', 'preview', 'newFiles', 'statements', 'searchStatements', 'stats'].includes(hashTab)) {
      this.setMainTab(hashTab as any);
    } else {
      this.setMainTab('main');
    }
    this.statsData = {
      custodyCount: 15,
      filesCount: 200,
      totalFiles: 350,
      filesInCustody: 10,
      currentDayStatements: 5
    };
    this.familyList = [
      'الاباالخيل', 'الاباالدعيات', 'الاباالصافي', 'الاباالصفا',
      'الاباالقلوب', 'الاباحسين', 'اباد', 'ابادي', 'ابراهيم',
      'ابراهيم الانصاري', 'ابراهيم البالول', 'بركه الجنوبي', 'ابريسم',
      'ابشاره', 'ابو طينة', 'ابل الكندري', 'ابن الشميم', 'ابن الشيخ',
    ];

    this.allStatementRows = this.generateMockStatements();
    this.searchStatements(1, false); // البحث الأولي بدون عرض تنبيه الانعدام
    this.fetchAllLookups();
  }

  fetchAllLookups() {
    console.log('MainContent: Fetching all lookups...');
    const types = [
      { key: 'client', type: 'CLIENT_STATUS' },
      { key: 'claim', type: 'CLAIM_STATUS' },
      { key: 'payment', type: 'PAYMENT_STATUS' },
      { key: 'file', type: 'FILE_STATUS' },
      { key: 'action', type: 'ACTION_STATUS' },
      { key: 'followup', type: 'FOLLOWUP_STATUS' },
      { key: 'interior', type: 'INTERNAL' },
      { key: 'civil', type: 'CIVIL' },
      { key: 'contact', type: 'CONTACT' },
      { key: 'cooperation', type: 'COOPERATION' },
      { key: 'comms_lang', type: 'COMMS_LANG' },
      { key: 'gender', type: 'GENDER' }
    ];

    types.forEach(item => {
      this.negotiationsService.getLookups(item.type).subscribe({
        next: (data: any[]) => {
          console.log(`MainContent: Loaded lookup [${item.key}]:`, data?.length || 0, 'items');
          if (data && data.length > 0) this.lookupLists[item.key] = data;
        },
        error: (err) => {
          console.error(`Error loading lookup ${item.type}:`, err);
        }
      });
    });
  }

  /**
   * Helper to get a stable ID regardless of property casing (id vs Id)
   */
  private getNormalizedId(obj: any): number | null {
    if (!obj) return null;
    const id = obj.id !== undefined ? obj.id : obj.Id;
    return id ? Number(id) : null;
  }

  loadCategoryHistory(fileCode: number, category: string) {
    if (!fileCode) return;

    const dedicatedCategories = [
      'client', 'claim', 'payment', 'file', 'action', 'followup',
      'internal', 'civil', 'contact', 'cooperation',
      'discount', 'acceptance', 'work', 'salarydate', 'incomenotes'
    ];

    const mapAudits = (data: any[]) => {
      return data.map(audit => {
        let name = audit.statusName || audit.StatusName || audit.description || audit.action || 'بدون تفاصيل';
        if (/^\d+$/.test(name) || (name.includes(':') && /^\d+$/.test(name.split(':').pop()?.trim() || ''))) {
          const valToFind = name.includes(':') ? name.split(':').pop()?.trim() : name;
          const listKey = this.getLookupKeyFromField(category);
          const found = this.lookupLists[listKey]?.find((x: any) => x.id === parseInt(valToFind || ''));
          if (found) {
            name = name.includes(':') ? `${name.split(':')[0]}: ${found.name}` : found.name;
          }
        }
        return {
          ...audit,
          dateAdded: audit.actionDate || audit.dateAdded || audit.DateAdded,
          userName: audit.userName || audit.user || audit.UserName,
          statusName: name
        };
      });
    };

    const keywordMap: { [key: string]: string[] } = {
      discount: ['discount', 'الخصم'],
      acceptance: ['accept', 'قبول', 'القبول', 'اعتماد', 'الاعتماد'],
      work: ['work', 'job', 'وظيفة', 'عمل', 'جهة'],
      salarydate: ['salary', 'راتب', 'الراتب', 'تاريخ'],
      incomenotes: ['income', 'دخل', 'الدخل', 'مصدر', 'ملاحظات']
    };
    const keywords = keywordMap[category] || [category];

    // Dual-fetch Strategy: Pull from dedicated history AND general audit logs
    const streams: any = {
      audit: this.negotiationsService.getFieldHistory(fileCode, keywords)
    };
    if (dedicatedCategories.includes(category)) {
      streams.dedicated = this.negotiationsService.getCategoryHistory(fileCode, category);
    }

    forkJoin(streams).subscribe({
      next: (res: any) => {
        const combined = [...(res.dedicated || []), ...(res.audit || [])];
        // Deduplicate by date and status name if they are identical
        const unique = combined.reduce((acc: any[], current: any) => {
          const dateStr = new Date(current.actionDate || current.dateAdded || current.DateAdded).toISOString();
          const isDup = acc.some(item => 
            new Date(item.actionDate || item.dateAdded || item.DateAdded).toISOString() === dateStr &&
            (item.statusName || item.StatusName) === (current.statusName || current.StatusName)
          );
          if (!isDup) acc.push(current);
          return acc;
        }, []);

        this.categoryHistories[category] = mapAudits(unique).sort((a, b) => 
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
      },
      error: (err) => console.error(`Error loading history for ${category}:`, err)
    });
  }

  loadAllCategoryHistories(fileCode: number, force: boolean = false) {
    if (!fileCode) return;

    // Guard against redundant loading of the same file ID
    if (!force && this.lastLoadedFileId === fileCode) {
      return;
    }

    this.lastLoadedFileId = fileCode;

    const categories = [
      'client', 'claim', 'payment', 'file', 'action', 'followup',
      'internal', 'civil', 'contact', 'cooperation',
      'discount', 'acceptance', 'work', 'salarydate', 'incomenotes'
    ];
    categories.forEach(cat => this.loadCategoryHistory(fileCode, cat));
  }

  negotiationMethodsRows = [
    { left: 'اتصال', right: 'رسالة' },
    { left: 'اتصال واتس', right: 'رسالة واتس' },
    { left: 'اتصال فايبر', right: 'رسالة فايبر' },
    { left: 'اتصال ايمو', right: 'رسالة ايمو' },
    { left: 'فاكس', right: 'ايميل' }
  ];

  @Output() statementSaved = new EventEmitter<any>();

  triggerSaveStatement() {
    if (!this.selectedAction || !this.selectedResult) {
      Swal.fire('تنبيه', 'الرجاء اختيار وسيلة التفاوض ونتيجة التفاوض أولاً', 'warning');
      return;
    }
    this.statementSaved.emit({
      contactMethod: this.selectedAction,
      connectedStatus: this.selectedResult,
      notes: this.statementDetails.notes || this.reviewNote || `تم التفاوض عن طريق ${this.selectedAction} والنتيجة ${this.selectedResult}`,
      promiseAmount: this.selectedResult.includes('تقسيط') ? this.installmentAmount : (this.selectedResult.includes('وعد بالسداد') && this.promiseToPayType !== 'none' ? this.promiseToPayAmount : null),
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


  activeTab: 'numbers' | 'add' = 'numbers';

  activeSubTab: 'main' | 'files' | 'payments' | 'legal' | 'attachments' | 'history' | 'callcenter' | 'classification' | 'totalFiles' | 'companyLink' | 'checks' = 'main';




  @Input() numbers: any[] = [];

  addForm = {
    phone: '',
    relation: '',
    source: '',
    status: 'نشط'
  };

  @Output() contactAdded = new EventEmitter<void>();

  saveNumber() {
    if (!this.addForm.phone) {
      Swal.fire('تنبيه', 'يرجى إدخال رقم الهاتف', 'warning');
      return;
    }

    const cid = this.selectedPerson?.nationalId || this.selectedPerson?.civilId;
    if (!cid) {
      Swal.fire('خطأ', 'لا يوجد معرف للعميل (رقم مدني)', 'error');
      return;
    }

    this.loading = true;
    this.negotiationsService.addContact(cid, this.addForm).subscribe({
      next: () => {
        this.loading = false;
        Swal.fire('تم الحفظ', 'تم إضافة الرقم بنجاح', 'success');
        this.activeTab = 'numbers';
        this.addForm = { phone: '', relation: '', source: '', status: 'نشط' };
        this.contactAdded.emit();
      },
      error: (err) => {
        this.loading = false;
        console.error('Error adding contact:', err);
        Swal.fire('خطأ', 'فشل في حفظ الرقم', 'error');
      }
    });
  }


  // تغيير التابات
  setMainTab(tab: 'clients' | 'main' | 'searchNumbers' | 'menuSearch' | 'FeesAndCollection' | 'notes' | 'preview' | 'newFiles' | 'statements' | 'stats' | 'searchStatements') {

    // حدّد الـ tab
    this.activeMainTab = tab;

    // حدّث الـ URL hash
    window.location.hash = tab;
  }

  selectAction(action: string) {
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
  updateField(field: string, value: any) {
    if (!this.selectedPerson?.id) return;
    this.fieldLoading[field] = true;
    this.ensureClassification();

    // Convert date or numeric values if needed
    let valStr = value?.toString();
    if (field === 'salarydate' && value) {
      // Ensure YYYY-MM-DD format for backend
      valStr = new Date(value).toISOString().split('T')[0];
    }

    this.negotiationsService.updateClientStatus(this.selectedPerson.id, field, undefined, valStr).subscribe({
      next: () => {
        const currentFileCode = this.selectedFile?.code ? Number(this.selectedFile.code) : (this.selectedPerson?.code ? Number(this.selectedPerson.code) : 0);
        if (currentFileCode) this.loadCategoryHistory(currentFileCode, field);
        this.statusChanged.emit();
        this.fieldLoading[field] = false;

        Swal.fire({
          title: 'تم التحديث',
          text: `تم حفظ ${this.getFriendlyFieldName(field)}`,
          icon: 'success',
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false
        });
      },
      error: (err) => {
        this.fieldLoading[field] = false;
        console.error(`Error updating ${field}:`, err);
        Swal.fire('خطأ', 'فشل في حفظ التعديلات', 'error');
      }
    });
  }

  private getFriendlyFieldName(field: string): string {
    switch (field.toLowerCase()) {
      case 'discount': return 'الخصم';
      case 'acceptance': return 'حالة القبول';
      case 'work': return 'الوظيفة';
      case 'salarydate': return 'تاريخ الراتب';
      case 'incomenotes': return 'ملاحظات الدخل';
      default: return field;
    }
  }

  private ensureClassification() {
    if (this.selectedPerson && !this.selectedPerson.classification) {
      this.selectedPerson.classification = {
        clientStatusId: null, claimStatusId: null, paymentStatusId: null,
        fileStatusId: null, actionStatusId: null, followUpStatusId: null,
        internalStatusId: null, civilStatusId: null,
        cooperationStatusId: null, contactStatusId: null,
        communicationLanguageId: null, genderId: null,
        discount: null, acceptance: '', salaryDate: null, incomeNotes: ''
      };
    }
  }


  changeTab(tab: typeof this.activeSubTab) {
    this.activeSubTab = tab;
  }


  openAttachment(file: any) {
    if (file.url) {
      window.open(file.url, '_blank');
    } else {
      Swal.fire('تنبيه', 'لا يوجد رابط لهذا الملف', 'info');
    }
  }
  formData = {
    secretaryClassification: '',
    sector: 'Telecom',
    lawyer: '',
    legalClaimant: 'شركة الاتصالات الكويتية - stc',
    court: { id: 1, name: 'الاحمدى' },
    internalStatus: { id: null, name: 'غير مصنف' },
    civilStatus: { id: null, name: 'غير مصنف' },
    traderDispatch: '',
    notes: {
      notes1: '0',
      notes2: '',
      notes3: '',
      notes4: '',
      secretary: '',
      notes6: ''
    },
  }

  openLookup(field: string) {
    this.currentField = field;
    let type = '';

    switch (field.toLowerCase()) {
      case 'cooperation': type = 'COOPERATION'; break;
      case 'contact': type = 'CONTACT'; break;
      case 'civil': type = 'CIVIL'; break;
      case 'interior': type = 'INTERNAL'; break;
      case 'court': type = 'COURT'; break;
      case 'client': type = 'CLIENT_STATUS'; break;
      case 'claim': type = 'CLAIM_STATUS'; break;
      case 'payment': type = 'PAYMENT_STATUS'; break;
      case 'file': type = 'FILE_STATUS'; break;
      case 'action': type = 'ACTION_STATUS'; break;
      case 'followup': type = 'FOLLOWUP_STATUS'; break;
      case 'comms_lang': type = 'COMMS_LANG'; break;
      case 'gender': type = 'GENDER'; break;
      default: return;
    }

    this.loading = true;
    (this.negotiationsService as any).getLookups(type).subscribe({
      next: (data: any[]) => {
        this.lookupData = data;
        this.loading = false;
        this.lookupModal.open();
      },
      error: (err: any) => {
        this.loading = false;
        Swal.fire('خطأ', 'فشل جلب البيانات', 'error');
      }
    });
  }

  onLookupSelected(item: any, fieldOverwrite?: string) {
    if (!this.selectedPerson?.id) {
      Swal.fire('تنبيه', 'الرجاء اختيار عميل أولاً', 'warning');
      return;
    }

    this.ensureClassification();
    const field = fieldOverwrite || this.currentField;

    this.negotiationsService.updateClientStatus(
      this.selectedPerson.id,
      field,
      item.id
    ).subscribe({
      next: (res: any) => {
        this.loading = false;
        this.statusChanged.emit(); // Notify parent to refresh history

        const fieldKey = field.toLowerCase();
        const displayKey = fieldKey === 'internal' || fieldKey === 'interior' ? 'internal' : fieldKey;

        // Reload specific history for this category
        if (this.selectedFile?.code) {
          const fileCode = typeof this.selectedFile.code === 'string' ? parseInt(this.selectedFile.code) : this.selectedFile.code;
          this.loadCategoryHistory(fileCode, displayKey);
        }

        // Update local state display names if available
        let name = item.name;
        if (!name && item.id) {
          const listKey = this.getLookupKeyFromField(fieldKey);
          const found = this.lookupLists[listKey]?.find((x: any) => x.id === item.id);
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
        this.syncLocalStatusDisplay();

        if (this.selectedPerson.classification) {
          const map: any = {
            'comms_lang': 'communicationLanguageId',
            'gender': 'genderId'
          };
          if (map[fieldKey]) this.selectedPerson.classification[map[fieldKey]] = item.id;
        }

        Swal.fire({
          title: 'تم التحديث',
          text: `تم تغيير التصنيف بنجاح`,
          icon: 'success',
          toast: true,
          position: 'top-end',
          timer: 2000,
          showConfirmButton: false
        });
      },
      error: (err: any) => {
        this.loading = false;
        Swal.fire('خطأ', err.message, 'error');
      }
    });
  }

  /**
   * Synchronizes local data structures after a classification change
   * to ensure the UI reflects the new state immediately.
   */
  private syncLocalStatusDisplay() {
    if (!this.selectedPerson) return;

    // Update the parent's table data (clientRows)
    if (this.clientRows && this.clientRows.length > 0) {
      this.clientRows = this.clientRows.map(row => ({
        ...row,
        clientStatus: this.selectedPerson.clientStatus,
        claimStatus: this.selectedPerson.claimStatus,
        paymentStatus: this.selectedPerson.paymentStatus,
        fileStatus: this.selectedPerson.fileStatus,
        followUpStatus: this.selectedPerson.followUpStatus,
        cooperationStatus: this.selectedPerson.cooperationStatus,
        contactStatus: this.selectedPerson.contactStatus,
        civilStatus: this.selectedPerson.civilStatus,
        internalStatus: this.selectedPerson.internalStatus,
        work: this.selectedPerson.jobType || this.selectedPerson.work,
        discount: this.selectedPerson.classification?.discount,
        acceptance: this.selectedPerson.classification?.acceptance
      }));
    }
  }

  saveAllClassifications() {
    if (!this.selectedPerson?.id) {
      Swal.fire('تنبيه', 'يرجى اختيار عميل أولاً', 'warning');
      return;
    }

    this.ensureClassification();
    this.loading = true;

    const c = this.selectedPerson.classification;
    const updates: any[] = [];

    // Map of classification object fields to service parameter 'field' names
    // These keys match the expected parameter names in the backend updateClientStatus method
    const fieldMap: any = {
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
        let valId: number | undefined = undefined;

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

    forkJoin(updates).subscribe({
      next: () => {
        const currentFileCode = this.selectedFile?.code ? Number(this.selectedFile.code) : (this.selectedPerson?.code ? Number(this.selectedPerson.code) : 0);
        if (currentFileCode) this.loadAllCategoryHistories(currentFileCode, true);
        this.loading = false;
        this.syncLocalStatusDisplay();
        this.statusChanged.emit(); // Refresh history
        Swal.fire({
          title: 'تم الحفظ',
          text: 'تم حفظ جميع تصنيفات الملف بنجاح (مزامنة كاملة)',
          icon: 'success',
          timer: 3000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false
        });
      },
      error: (err: any) => {
        this.loading = false;
        console.error('Error saving classifications:', err);
        Swal.fire('خطأ', 'فشل في مزامنة بعض الحالات لقاعدة البيانات', 'error');
      }
    });
  }

  saveDiscountAcceptance() {
    if (!this.selectedPerson?.id) return;
    this.loadingDiscount = true;
    const c = this.selectedPerson.classification;

    // Formatting status detail: [Option] - نسبة خصم [X]%
    const formattedAcceptance = c.acceptance ? `${c.acceptance}${c.discount ? ' - نسبة خصم ' + c.discount + '%' : ''}` : '';

    const updates = [
      this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'discount', undefined, c.discount?.toString()),
      this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'acceptance', undefined, formattedAcceptance)
    ];

    forkJoin(updates).subscribe({
      next: () => {
        const fileCode = this.selectedFile?.code ? Number(this.selectedFile.code) : (this.selectedPerson?.code ? Number(this.selectedPerson.code) : 0);
        if (fileCode) {
          this.loadCategoryHistory(fileCode, 'discount');
          this.loadCategoryHistory(fileCode, 'acceptance');
        }
        
        this.loadingDiscount = false;
        this.syncLocalStatusDisplay();
        this.statusChanged.emit();
        Swal.fire({
          title: 'تم الحفظ',
          text: 'تم حفظ بيانات الخصم والقبول بنجاح',
          icon: 'success',
          timer: 2000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false
        });
      },
      error: (err: any) => {
        this.loadingDiscount = false;
        Swal.fire('خطأ', 'فشل حفظ بيانات الخصم والقبول', 'error');
      }
    });
  }

  saveJobInfo() {
    if (!this.selectedPerson?.id) return;
    this.loadingJob = true;

    this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'work', undefined, this.selectedPerson.work).subscribe({
      next: () => {
        const currentFileCode = this.selectedFile?.code ? Number(this.selectedFile.code) : (this.selectedPerson?.code ? Number(this.selectedPerson.code) : 0);
        if (currentFileCode) this.loadCategoryHistory(currentFileCode, 'work');

        this.loadingJob = false;
        this.selectedPerson.jobType = this.selectedPerson.work;
        this.syncLocalStatusDisplay();
        this.statusChanged.emit();
        Swal.fire({
          title: 'تم الحفظ',
          text: 'تم حفظ بيانات الوظيفة بنجاح',
          icon: 'success',
          timer: 2000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false
        });
      },
      error: (err: any) => {
        this.loadingJob = false;
        Swal.fire('خطأ', 'فشل حفظ بيانات الوظيفة', 'error');
      }
    });
  }

  saveIncomeSalary() {
    if (!this.selectedPerson?.id) return;
    this.loadingIncome = true;

    const c = this.selectedPerson.classification;
    const formattedDate = c.salaryDate ? new Date(c.salaryDate).toLocaleDateString('ar-EG', { day: '2-digit', month: '2-digit' }) : '';
    const mergedNotes = `راتب بتاريخ: ${formattedDate}${c.incomeNotes ? ' | ملاحظات: ' + c.incomeNotes : ''}`;

    const updates = [
      this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'salarydate', undefined,
        c.salaryDate ? new Date(c.salaryDate).toISOString().split('T')[0] : undefined),
      this.negotiationsService.updateClientStatus(this.selectedPerson.id, 'incomenotes', undefined, mergedNotes)
    ];

    forkJoin(updates).subscribe({
      next: () => {
        const fileCode = this.selectedFile?.code ? Number(this.selectedFile.code) : (this.selectedPerson?.code ? Number(this.selectedPerson.code) : 0);
        if (fileCode) {
          this.loadCategoryHistory(fileCode, 'salarydate');
          this.loadCategoryHistory(fileCode, 'incomenotes');
        }

        this.loadingIncome = false;
        this.syncLocalStatusDisplay();
        this.statusChanged.emit();
        Swal.fire({
          title: 'تم الحفظ',
          text: 'تم حفظ بيانات الدخل والراتب بنجاح',
          icon: 'success',
          timer: 2000,
          toast: true,
          position: 'top-end',
          showConfirmButton: false
        });
      },
      error: (err: any) => {
        this.loadingIncome = false;
        Swal.fire('خطأ', 'فشل حفظ بيانات الدخل والراتب', 'error');
      }
    });
  }

  saveHousingIncome() {
    // Legacy mapping support
    this.saveJobInfo();
    this.saveIncomeSalary();
  }

  splitStatus(status: string): { type: string, value: string } {
    if (!status) return { type: '---', value: '---' };
    const parts = status.split(' | ');
    if (parts.length >= 2) {
      return { type: parts[0], value: parts[1] };
    }
    return { type: '---', value: status };
  }

  private getLookupKeyFromField(field: string): string {
    if (field === 'internal' || field === 'interior') return 'interior';
    return field;
  }

  notesData = [
    { code: 101, date: '2025-11-19', text: 'تم التواصل مع العميل.' },
    { code: 102, date: '2025-11-20', text: 'تم إرسال المستندات.' },
    { code: 103, date: '2025-11-21', text: 'تم متابعة الطلب.' }
  ];

  efadaData = [
    {
      serial: 1,
      efadaDate: '2025-11-19',
      efadaText: 'تم التفاوض مع العميل بخصوص التسوية.',
      reviewDate: '2025-12-01',
      nextAction: 'إرسال رسالة تذكير'
    },
    {
      serial: 2,
      efadaDate: '2025-11-20',
      efadaText: 'تم إرسال المستندات المطلوبة.',
      reviewDate: '2025-12-05',
      nextAction: 'مراجعة المستندات'
    }
  ];
  recordData = [
    { date: '2025-11-19', efada: 'تم التواصل مع العميل بخصوص الطلب.', review: 'مراجعة المستندات' },
    { date: '2025-11-20', efada: 'تم إرسال نسخة من العقد.', review: 'التأكد من الاستلام' },
    { date: '2025-11-21', efada: 'تم استكمال البيانات المطلوبة.', review: 'متابعة التسوية' }
  ];
  // parent.component.ts

  executionsData = [
    {
      date: '2025-11-19',
      lastAction: 'تم إرسال الطلب',
      lastActionDate: '2025-11-18',
      nextAction: 'متابعة العميل',
      nextActionDate: '2025-11-22',
      fileLocation: 'المكتب الرئيسي',
      notes: 'تم التواصل هاتفيًا',
      user: 'أحمد علي'
    },
    {
      date: '2025-11-20',
      lastAction: 'استلام المستندات',
      lastActionDate: '2025-11-19',
      nextAction: 'مراجعة المستندات',
      nextActionDate: '2025-11-23',
      fileLocation: 'الملف الإلكتروني',
      notes: 'تم حفظ نسخة PDF',
      user: 'سارة محمد'
    }
  ];

  // parent.component.ts

  traderData = [
    {
      efadaDate: '2025-11-19',
      sessionType: 'جلسة أولى',
      decision: 'تأجيل',
      nextSession: '2025-12-01',
      expertsTime: '10:00 صباحًا',
      notes: 'تم حضور المحامي فقط'
    },
    {
      efadaDate: '2025-11-20',
      sessionType: 'جلسة استماع',
      decision: 'قبول الطلب',
      nextSession: '2025-12-05',
      expertsTime: '11:30 صباحًا',
      notes: 'تم حضور جميع الأطراف'
    }
  ];
  // parent.component.ts

  filesData = [
    {
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
    },
    {
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
    }
  ];

  secretaryData = [
    { date: '2025-11-19', note: 'تم إرسال المستندات', name: 'أحمد علي' },
    { date: '2025-11-20', note: 'متابعة الطلب مع العميل', name: 'سارة محمد' },
    { date: '2025-11-21', note: 'تم تحديد موعد جديد', name: 'محمد يوسف' }
  ];


  searchMenu() {
    const term = this.menuSearchForm.civilId || this.menuSearchForm.fullName || this.menuSearchForm.firstName || this.menuSearchForm.phone;
    if (!term) return;

    this.loading = true;
    this.negotiationsService.search(term).subscribe({
      next: (results: any[]) => {
        this.loading = false;
        if (results && results.length > 0) {
          // If searching by Civil ID (12 digits), handle specialized history loading
          if (term.length === 12 && !isNaN(Number(term))) {
            this.handleCidSearchResult(results);
          } else {
            console.log('Search results:', results);
            // Optionally select the first one if we want auto-selection for generic search too
            // this.onClientSelected(results[0]);
          }
        } else {
          Swal.fire({
            title: 'تنبيه',
            text: 'لم يتم العثور على أي نتائج للبحث المدخل',
            icon: 'warning',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#6366f1'
          });
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Search error:', err);
        Swal.fire('خطأ', 'حدث خطأ أثناء البحث', 'error');
      }
    });
  }

  onSearchNumbers() {
    const term = this.searchNumbersForm.civilID || this.searchNumbersForm.number;
    if (!term) return;

    this.loading = true;
    this.negotiationsService.search(term).subscribe({
      next: (results: any[]) => {
        this.loading = false;
        if (results && results.length > 0) {
          // If searching by Civil ID (12 digits), handle specialized history loading
          if (term.length === 12 && !isNaN(Number(term))) {
            this.handleCidSearchResult(results);
          } else {
            console.log('Numbers search results:', results);
          }
        } else {
          Swal.fire({
            title: 'تنبيه',
            text: 'لم يتم العثور على أي نتائج للرقم المدني المدخل',
            icon: 'warning',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#6366f1'
          });
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Search error:', err);
        Swal.fire('خطأ', 'حدث خطأ أثناء البحث', 'error');
      }
    });
  }

  private handleCidSearchResult(results: any[]) {
    // Select the first file found (or most relevant)
    const file = results[0];
    this.selectedFile = file;
    this.loadClientRequest.emit(file); // Notify parent to load person details

    // Switch to Classification tab as requested
    this.activeSubTab = 'classification';

    if (file.code) {
      const fileCode = typeof file.code === 'string' ? parseInt(file.code) : file.code;
      this.loadAllCategoryHistories(fileCode, true);
    }

    Swal.fire({
      title: 'تم العثور على الملف',
      text: `تم تحميل بيانات الملف كود: ${file.code}`,
      icon: 'success',
      toast: true,
      position: 'top-end',
      timer: 3000,
      showConfirmButton: false
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
  activeFilter: 'statements' | 'review' | 'paid' | 'group_paid' | 'general' = 'general';

  generateMockStatements(): StatementRow[] {
    // تم تعديل البيانات لتشمل حقل filterStatus
    return Array.from({ length: 30 }, (_, i) => ({
      name: `محمد جمعة خالد - ${555 + i}`,
      date: `11/1${i < 10 ? '0' + i : i}/2025`,
      reviewDate: `11/1${i < 10 ? '0' + i : i}/2025`,
      efada: (i % 5 === 0) ? 'سداد مؤكد' : 'وعد بالسداد',
      employee: 'أحمد علي إبراهيم',
      contactMethod: (i % 2 === 0) ? 'هاتف' : 'رسالة',
      contactStatus: 'تم الاتصال',
      cooperationStatus: 'متعاون',
      civilStatus: 'غير مصنف',
      internalStatus: 'غير مصنف',
      depositStatus: 'غير مصنف',
      totalAmount: (25000 + i * 100).toFixed(3),
      statementNumber: (554446 + i).toString(),
      lastStatementDate: `11/0${i + 1}/2025`,
      notes: 'ملاحظة عامة...',
      filterStatus: (i % 5 === 0) ? 'paid' : (i % 3 === 0) ? 'review' : 'statements', // تعيين حالة وهمية
    }));
  }

  /**
   * دالة عامة للبحث والفلترة - الآن تتصل بالخدمة الحقيقية
   */
  searchStatements(page: number = 1, showWarningIfEmpty: boolean = true) {
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
      next: (res: any) => {
        this.loading = false;
        this.statementRows = (res.items || []).map((s: any) => ({
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
          Swal.fire({
            title: 'تنبيه',
            text: 'لم يتم العثور على أي نتائج للبحث المدخل',
            icon: 'warning',
            confirmButtonText: 'حسناً'
          });
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Error searching statements:', err);
        Swal.fire('خطأ', 'فشل البحث في الإفادات', 'error');
      }
    });
  }

  onAuditPageChange(page: number) {
    this.auditsPage = page;
    this.pageChange.emit({ type: 'audits', page: this.auditsPage });
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

  onStatementPageChange(page: number) {
    this.statementsPage = page;
    this.pageChange.emit({ type: 'statements', page: this.statementsPage });
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
      this.pageChange.emit({ type: 'notes', page: this.notesPage });
    }
  }

  nextNotesPage() {
    if (this.notesPage * this.notesPageSize < this.notesTotal) {
      this.notesPage++;
      this.pageChange.emit({ type: 'notes', page: this.notesPage });
    }
  }

  prevHistoryPage() {
    if (this.historyPage > 1) {
      this.historyPage--;
      this.pageChange.emit({ type: 'statuses', page: this.historyPage });
    }
  }

  nextHistoryPage() {
    if (this.historyPage * this.historyPageSize < this.statusesTotal) {
      this.historyPage++;
      this.pageChange.emit({ type: 'statuses', page: this.historyPage });
    }
  }

  /**
   * تحميل ملف العميل بالكامل من خلال الرقم المدني الموجود في الإفادة
   */
  loadClientProfile(row: StatementRow) {
    if (!row.civilId) {
      Swal.fire('خطأ', 'لا يوجد رقم مدني مرتبط بهذه الإفادة', 'error');
      return;
    }
    this.loading = true;
    this.negotiationsService.search(row.civilId).subscribe({
      next: (results: any[]) => {
        this.loading = false;
        if (results && results.length > 0) {
          // نطلب من المكون الأب تحميل هذا العميل
          this.loadClientRequest.emit(results[0]);
          Swal.fire({
            title: 'تم التحميل',
            text: `تم تحميل ملف: ${row.name} بنجاح`,
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          });
        } else {
          Swal.fire('تنبيه', 'لم يتم العثور على الملف الرئيسي لهذا المدني', 'warning');
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Error loading client profile:', err);
        Swal.fire('خطأ', 'فشل تحميل الملف', 'error');
      }
    });
  }

  /**
   * تصدير بيانات التبويب النشط إلى ملف إكسل
   */
  exportActiveTabToExcel() {
    let dataToExport: any[] = [];
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
        Swal.fire('تنبيه', 'لا يوجد بيانات لتصديرها لهذا التبويب', 'info');
        return;
    }

    if (dataToExport.length === 0) {
      Swal.fire('تنبيه', 'لا توجد سجلات لتصديرها في الوقت الحالي', 'info');
      return;
    }

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}_${new Date().toISOString().split('T')[0]}.xlsx`);
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
      'حالة التواصل': row.contactStatus,
      // ... (إضافة بقية الأعمدة التي تريدها)
    }));

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'الإفادات');
    XLSX.writeFile(wb, `Statements_${new Date().toISOString().split('T')[0]}.xlsx`);
    console.log('Exporting data to Excel...');
  }

  /**
   * دالة تعيين الفلتر والبحث الفوري
   */
  setFilterAndSearch(filter: 'statements' | 'review' | 'paid' | 'group_paid' | 'general') {
    this.activeFilter = filter;
    this.searchStatements();
  }

  selectFile(row: any) {
    this.selectedFile = row;
    this.activeSubTab = 'main'; // Switch to main tab to see details
    console.log('Selected file:', row);
    if (row && row.code) {
      const fileCode = typeof row.code === 'string' ? parseInt(row.code) : row.code;
      this.loadAllCategoryHistories(fileCode);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // Detect if a new primary person record was actually selected/changed
    const isNewPerson = changes['selectedPerson'] &&
      changes['selectedPerson'].currentValue?.id !== changes['selectedPerson'].previousValue?.id;

    if (isNewPerson) {
      if (!this.selectedPerson?.id) {
        // Totally cleared (no person) - reset everything
        this.selectedFile = null;
        this.categoryHistories = {
          client: [], claim: [], payment: [], file: [], action: [], followup: [],
          internal: [], civil: [], contact: [], cooperation: [],
          discount: [], acceptance: [], work: [], salarydate: [], incomenotes: []
        };
        this.lastLoadedFileId = 0;
      } else {
        // New person loaded - clear selection, will be auto-set by clientRows logic
        this.selectedFile = null;
      }
    }

    // If clientRows changes and we don't have a selected file, select the first one
    if (changes['clientRows'] && this.clientRows && this.clientRows.length > 0) {
      if (!this.selectedFile || !this.clientRows.find(x => x.id === this.selectedFile.id)) {
        this.selectedFile = this.clientRows[0];
        if (this.selectedFile?.code) {
          const fileCode = typeof this.selectedFile.code === 'string' ? parseInt(this.selectedFile.code) : this.selectedFile.code;
          this.loadAllCategoryHistories(fileCode);
        }
      } else {
        // Even if file is already selected, if clientRows changed (e.g. fresh search finish), refresh histories
        if (this.selectedFile?.code) {
          const fileCode = typeof this.selectedFile.code === 'string' ? parseInt(this.selectedFile.code) : this.selectedFile.code;
          this.loadAllCategoryHistories(fileCode);
        }
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
    const disc = this.categoryHistories['discount'] || [];
    const acc = this.categoryHistories['acceptance'] || [];
    const combined = [...disc, ...acc];

    // Priority Deduplication: If a record is just a number (discount), 
    // hide it if there's a detailed text record at the same time mentioning that number.
    return combined.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      .filter((item, index, self) => {
        const statusText = (item.statusName || '').toString().trim();
        // Check if status is numeric (e.g., "70")
        if (/^\d+(\.\d+)?$/.test(statusText)) {
          return !self.some(s => 
            s !== item && 
            Math.abs(new Date(s.dateAdded).getTime() - new Date(item.dateAdded).getTime()) < 2000 && // Within 2 seconds
            s.statusName.includes(statusText) &&
            s.statusName.length > statusText.length
          );
        }
        return true;
      });
  }

  get jobInfoHistory() {
    return (this.categoryHistories['work'] || [])
      .sort((a, b) => new Date(b.dateAdded || b.DateAdded).getTime() - new Date(a.dateAdded || a.DateAdded).getTime());
  }

  get incomeSalaryHistory() {
    const dates = this.categoryHistories['salarydate'] || [];
    const notes = this.categoryHistories['incomenotes'] || [];
    const combined = [...dates, ...notes];

    // 1. Sort by date descending
    // 2. Filter out raw date strings (Deduplication part A)
    // 3. Strict Deduplication (Deduplication part B): Hide identical content at the same time
    return combined.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      .filter((item, index, self) => {
        const text = (item.statusName || '').toString().trim();
        
        // Hide raw ISO date strings if a merged descriptive note exists
        if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
          const hasMerged = self.some(s => 
            s !== item && 
            Math.abs(new Date(s.dateAdded).getTime() - new Date(item.dateAdded).getTime()) < 2000 && 
            s.statusName.includes('راتب بتاريخ')
          );
          if (hasMerged) return false;
        }

        // Strict: If there's another record with IDENTICAL content, user and time (+/- 2s), keep only one
        const duplicateIndex = self.findIndex(s => 
           s !== item && 
           s.statusName === item.statusName && 
           s.userName === item.userName &&
           Math.abs(new Date(s.dateAdded).getTime() - new Date(item.dateAdded).getTime()) < 2000
        );
        
        if (duplicateIndex !== -1 && duplicateIndex < index) {
          return false; // Skip this one, we already kept the first occurrence
        }

        return true;
      });
  }

  get housingIncomeHistory() {
    return [
      ...this.jobInfoHistory,
      ...this.incomeSalaryHistory
    ].sort((a, b) => new Date(b.dateAdded || b.DateAdded).getTime() - new Date(a.dateAdded || a.DateAdded).getTime());
  }

  // Calculated Getters for UI Display
  get calculatedDiscountValue(): number {
    if (!this.selectedPerson?.classification?.discount || !this.selectedFile?.claim) return 0;
    return (this.selectedPerson.classification.discount / 100) * this.selectedFile.claim;
  }

  get remainingAfterDiscount(): number {
    if (!this.selectedFile?.claim) return 0;
    return this.selectedFile.claim - this.calculatedDiscountValue;
  }
}




