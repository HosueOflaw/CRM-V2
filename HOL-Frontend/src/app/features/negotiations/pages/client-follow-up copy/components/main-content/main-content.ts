import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LookupModal } from "../../../../../../shared/components/lookup-modal/lookup-modal";
import * as XLSX from 'xlsx'; // استيراد مكتبة الإكسل

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
  @Input() clientRows: ClientRow[] = [];
  fromDate: string = '2025-11-08';
  toDate: string = '2025-12-02';
  statementRows: StatementRow[] = [];
allStatementRows: StatementRow[] = [];
  


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

    familyList: string[] = [];

  activeMainTab:  'clients'| 'main' | 'searchNumbers' | 'menuSearch' | 'FeesAndCollection' | 'notes' | 'preview' | 'newFiles' | 'statements' | 'searchStatements' | 'stats' = 'main';
  loading: boolean = false;
  selectedAction: string = ''; // هذا المتغير سيخزن الإختيار
  selectedNumber: string = '45612378';
  selectedPerson: string = 'الام';
  selectedResult: string = '';
  activeSubTabLower: string = 'notes';
  companyLink: string = '';
  officeLink: string = 'https://office-link.com';
  defaultCompanyLink: string = 'https://company-link.com';
  whatsAppNumber: string = '';
  activeNoteTab=1;

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
  @Output() saveSearch = new EventEmitter<any>();

  @Input() searchNumbersForm: any = {
    clientCode: '', civilID: '', source: '', classification: '', type: '', number: '',
    discount: '', civilEndDate: '', guarantor: '', commercialReg: '', companyCivil: '',
    phone: '', email: '', partner1: '', partner2: '', partner3: '',membership:'',fax:''
  };

  onSave() {
    this.saveSearch.emit(this.searchNumbersForm);
  }

setOfficeLink() {
  this.companyLink = this.officeLink;
}

setCompanyLink() {
  this.companyLink = this.defaultCompanyLink;
}
  
saveSearchNumber() { console.log('Saving search entry:', this.searchNumbersForm); }


copyLink() {
  navigator.clipboard.writeText(this.companyLink).then(() => {
    alert('تم نسخ الرابط');
  });
}

sendWhatsApp() {
  if (!this.whatsAppNumber || !this.companyLink) {
    alert('الرجاء إدخال الرقم والرابط');
    return;
  }

  const url =
    `https://wa.me/${this.whatsAppNumber}?text=` +
    encodeURIComponent(`رابط الدفع: ${this.companyLink}`);

  window.open(url, '_blank');
}


setSubActiveLower(tab: string) {
  this.activeSubTabLower = tab;
}

  constructor() {}


  ngOnInit(): void {
  const hashTab = window.location.hash.replace('#', '');
  if (['main','clients','searchNumbers','menuSearch','FeesAndCollection','notes', 'preview','newFiles','statements','searchStatements','stats'].includes(hashTab)) {
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
    this.searchStatements(); // البحث الأولي

}

 negotiationMethods = [
    'اتصال', 'رسالة', 'اتصال واتس', 'رسالة واتس',
    'اتصال فيبر', 'رسالة فيبر', 'اتصال ايمو', 'رسالة ايمو',
    'فاكس', 'ايميل'
  ];

  negotiationResults = [
    'وعد بالسداد', 'تقسيط', 'طلب مهلة', 'فتح و إغلاق',
    'مراجعة', 'شكوى', 'رفض السداد', 'غير معترف',
    'أنكر نفسه', 'مغلق', 'لا يرد', 'مفصول',
    'لا يوجد رقم', 'مطلوب رقم 2', 'رقم خطأ',
    'مطلوب إجراء', 'تأجيل متابعة', 'رفع الإجراءات', 'خصم'
  ];

  activeTab: 'numbers' | 'add' = 'numbers';

  activeSubTab: 
  | 'main'
  | 'classification'
  | 'files'
  | 'company-link'
  | 'fees'
  | 'details'
  | 'checks'
  | 'attachments'
  | 'categories' = 'main';

  numbers = [
    { number: '10234', user: 'أحمد', status: 'نشط' },
    { number: '55433', user: 'منى', status: 'مغلق' },
  ];

  addForm = {
    user: '',
    source: ''
  };

  saveNumber() {
    if (!this.addForm.user || !this.addForm.source) {
      alert("من فضلك ادخل البيانات كاملة");
      return;
    }

    this.numbers.push({
      number: Math.floor(10000 + Math.random() * 90000).toString(),
      user: this.addForm.user,
      status: 'جديد'
    });

    // Reset form
    this.addForm = { user: '', source: '' };

    // رجع للتاب الأول
    this.activeTab = 'numbers';
  }

  // تغيير التابات
 setMainTab(tab: 'clients' |'main' | 'searchNumbers' | 'menuSearch' | 'FeesAndCollection' | 'notes' | 'preview'|'newFiles' | 'statements' | 'stats' | 'searchStatements' ) {

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

  // مثال زر حفظ
  saveClassification() {
    this.loading = true;
    setTimeout(() => {
      alert("تم الحفظ بنجاح");
      this.loading = false;
    }, 700);
  }

  changeTab(tab: typeof this.activeSubTab) {
  this.activeSubTab = tab;
}


detailsList = [
  { description: 'رسوم خدمات', amount: 150 },
  { description: 'مستحقات سابقة', amount: 320 },
  { description: 'دفعة أولى', amount: 500 },
];

openItem(item: any) {
  console.log('Open details:', item);
}

action(item: any) {
  console.log('Action on:', item);
}

attachments = [
  { id: 1, name: 'عقد الشركة.pdf', date: new Date(), url: '/assets/files/contract.pdf' },
  { id: 2, name: 'السجل التجاري.jpg', date: new Date(), url: '/assets/files/commercial.jpg' },
  { id: 3, name: 'فاتورة رقم 55.png', date: new Date(), url: '/assets/files/invoice.png' },
];

openAttachment(file: any) {
  window.open(file.url, '_blank');
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
    },}

openLookup(field: string) {
  this.currentField = field;
  this.lookupModal.open(field);   // ← بنفتح ميثود من الكمبوننت نفسه
}

onLookupSelected(value: any) {
  if (this.currentField === 'court') this.courtValue = value;
  if (this.currentField === 'interior') this.internalStatus = value;
  if (this.currentField === 'civil') this.civilStatus = value;
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
    console.log('Searching menu for:', this.menuSearchForm);
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

  addEntry() {
    console.log('Add button clicked - opening new entry form.');
  }


  // الفلتر النشط الذي يتم تعيينه بواسطة الأزرار
  activeFilter: 'statements' | 'review' | 'paid' | 'group_paid' | 'general' = 'general';

  generateMockStatements(): StatementRow[] {
    // تم تعديل البيانات لتشمل حقل filterStatus
    return Array.from({ length: 30 }, (_, i) => ({
      name: `محمد جمعة خالد - ${555 + i}`,
      date: `11/1${i < 10 ? '0'+i : i}/2025`,
      reviewDate: `11/1${i < 10 ? '0'+i : i}/2025`,
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
      lastStatementDate: `11/0${i+1}/2025`,
      notes: 'ملاحظة عامة...',
      filterStatus: (i % 5 === 0) ? 'paid' : (i % 3 === 0) ? 'review' : 'statements', // تعيين حالة وهمية
    }));
  }

  /**
   * دالة عامة للبحث والفلترة
   * تطبق الفلتر المحدد والتاريخ على البيانات
   */
  searchStatements() {
    console.log(`Searching for: ${this.activeFilter} from ${this.fromDate} to ${this.toDate}`);
    
    let filtered = this.allStatementRows;
    
    // 1. فلترة حسب الحالة (التي تم تعيينها بواسطة الأزرار)
    if (this.activeFilter !== 'general') {
      filtered = filtered.filter(row => row.filterStatus === this.activeFilter);
    }
    
    // 2. فلترة حسب التاريخ (يمكنك توسيع هذا المنطق ليتعامل مع التواريخ)
    const startDate = new Date(this.fromDate).getTime();
    const endDate = new Date(this.toDate).getTime();
    
    filtered = filtered.filter(row => {
      const rowDate = new Date(row.date).getTime();
      // منطق فلترة التاريخ الفعلي يجب أن يكون هنا
      return rowDate >= startDate && rowDate <= endDate; 
    });

    this.statementRows = filtered;
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

}
