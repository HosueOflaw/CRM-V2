import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainContent } from "./components/main-content/main-content";
import { AppSidebar } from './components/app-sidebar/app-sidebar';
import { NegotiationsService } from '../../services/negotiations.service';

@Component({
  selector: 'app-client-follow-up',
  standalone: true,
  imports: [FormsModule, CommonModule, AppSidebar, MainContent],
  templateUrl: './client-follow-up.html',
  styleUrl: './client-follow-up.css'
})
export class ClientFollowUp implements OnInit {
  @ViewChild(MainContent) mainContent!: MainContent;
  searchQuery = '';
  loading = false;
  activeTab = 'main';

  sidebarActions = [
    'تكليف الوفاء', 'فاكس جهة العمل', 'العقد', 'المدنية', 'رسائل',
    'تحديث الملفات', 'استمارة مندوب', 'تارجيت الباتشات', 'صحيفة الدعوي'
  ];

  negotiationMethods = [
    'اتصال', 'رسالة', 'واتس اتصال', 'واتس رسالة', 'فايبر اتصال', 'فايبر رسالة', 'ايمو اتصال', 'ايمو رسالة', 'فاكس', 'ايميل'
  ];

  stats = { totalClients: 0, totalReports: 0, todayReports: 0, monthReports: 0 };

  selectedPerson: any = {
    clientName: '', customerName: '', nationalId: '', status: '', nationality: '', classification: '', contract: '',
    debt: '', autoNumbers: '', batch: '', address: '', clientStatus: '', claimStatus: '', paymentStatus: '', discount: '', acceptance: '', jobType: '', incomeNotes: '', salaryDate: ''
  };

  clientRows: any[] = [];
  attachments: any[] = [];
  additionalAmounts: any[] = [];
  audits: any[] = [];
  autoNumbers: any[] = [];
  callcenterStatements: any[] = [];
  classifications: any[] = [];
  statuses: any[] = [];
  dashboardStats: any = null;
  payments: any[] = [];
  contacts: any[] = [];
  notes: any[] = [];

  auditsTotal = 0;
  statementsTotal = 0;
  notesTotal = 0;
  statusesTotal = 0;
  currentAuditsPage = 1;
  currentStatementsPage = 1;
  currentNotesPage = 1;
  currentStatusesPage = 1;

  review = { date: '', notes: '' };
  negotiationResult = { status: '' };
  financial = { claimValue: 0, fees: 0, lawFees: 0 };
  activeSubTab = 'debts'; // 'debts', 'payments', 'legal', 'attachments', 'history', 'contacts'

  activeReport: 'mandate' | 'fax' | null = null;
  isPreviewMode = false;
  reportData: any = null;

  constructor(private negotiationsService: NegotiationsService) { }

  // البحث عن شخص باستخدام الرقم المدني أو الكود أو الاسم
  handleSearch(term: string) {
    if (!term) return;

    // Reset all data before starting a new search
    this.onClientSelected(null);

    this.loading = true;
    console.log('جاري البحث في قاعدة البيانات عن:', term);

    this.negotiationsService.search(term).subscribe({
      next: (results: any[]) => {
        this.loading = false;
        if (results && results.length > 0) {
          this.onClientSelected(results);
        } else {
          import('sweetalert2').then(Swal => {
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
      error: (err) => {
        this.loading = false;
        console.error('Search error:', err);
      }
    });
  }

  ngOnInit() {
    // Stats are now fetched dynamically per-client
  }

  fetchDashboardStats(fileCode: number) {
    this.negotiationsService.getDashboardStats(fileCode).subscribe(stats => {
      this.dashboardStats = stats;
    });
  }

  /**
   * جلب البيانات الإضافية للملف بكل تفاصيلها
   * نستخدم id لجلب FileDetails (المديونيات)
   * ونستخدم code لجلب بقية البيانات المرتبطة (Payments, Attachments, etc.)
   */
  fetchAdditionalData(mainfile: any) {
    // Use the first file for primary stats and header info
    const primaryFile = Array.isArray(mainfile) ? mainfile[0] : mainfile;
    const mainfileId = primaryFile.id || primaryFile.Id;
    const fileCode = primaryFile.code || primaryFile.Code;
    const classificationName = primaryFile.classification?.classification || '';

    console.log(`جاري جلب البيانات المرتبطة... عدد الملفات المستهدفة: ${Array.isArray(mainfile) ? mainfile.length : 1}`);

    // Fetch Dashboard Stats for the primary file
    this.fetchDashboardStats(fileCode);

    // Prepare to aggregate details from all selected files
    const allFiles = Array.isArray(mainfile) ? mainfile : [mainfile];
    this.clientRows = [];
    let processedCount = 0;

    allFiles.forEach(f => {
      const fId = f.id || f.Id;
      const fCode = f.code || f.Code;
      
      this.negotiationsService.getFileDetails(fId).subscribe({
        next: (details: any[]) => {
          const mappedDetails = details.map(fd => ({
            id: fd.id,
            code: fd.fileCode?.toString() || fd.id.toString(),
            name: fd.legalPlaintiff || 'غير معروف',
            fileStatus: f.fileStatus || 'نشط',
            debtReason: fd.reason || '',
            batch: fd.patchNo || '',
            classificationName: f.classification?.classification || '',
            contractNum: fd.contractNo || '',
            dateAdded: fd.dateAdded,
            dateFinished: fd.dateFinished,
            nationality: f.nationality || primaryFile.nationality,
            civilId: f.nationalId || primaryFile.nationalId,
            claim: fd.deptAmount || 0,
            paid: 0,
            remaining: fd.deptAmount || 0,
            address: f.address || primaryFile.address,
            client: fd.client || f.name || primaryFile.customerName,
            lawyerName: fd.lawyerUserName || 'غير محدد',
            courtName: fd.courtUserName || 'غير محدد',
            mdName: fd.mdUserName || 'غير محدد',
            advisorName: fd.legalAdvisorUserName || 'غير محدد',
            followUpStatus: f.followUpStatus || '',
            clientStatus: f.clientStatus || '',
            contactStatus: f.contactStatus || '',
            cooperationStatus: f.cooperationStatus || '',
            civilStatus: f.civilStatus || '',
            internalStatus: f.internalStatus || '',
            note1: fd.note1 || '',
            note2: fd.note2 || '',
            note3: fd.note3 || '',
            note4: fd.note4 || '',
            note5: fd.note5 || '',
            note6: fd.note6 || ''
          }));

          this.clientRows = [...this.clientRows, ...mappedDetails];
          this.financial.claimValue = this.clientRows.reduce((acc, curr) => acc + (curr.claim || 0), 0);
          this.selectedPerson.debt = this.financial.claimValue.toLocaleString() || '0';
          
          processedCount++;
          if (processedCount === allFiles.length) {
            this.loading = false;
          }
        },
        error: (err: any) => {
          console.error(`Error fetching details for file ${fId}:`, err);
          processedCount++;
          if (processedCount === allFiles.length) this.loading = false;
        }
      });

      // Fetch specific case data for each file code
      this.fetchUniversalCaseData(fId, fCode);
    });

    // 3. جلب إفادات الكول سنتر المرتبطة بـ كود الملف الرئيسي (لأغراض العرض العام)
    this.fetchCallcenterStatements(fileCode, 1);

    // 4. جلب الأرقام الخاصة بالعميل باستخدام الرقم المدني
    this.fetchContactsOnly();
  }

  fetchContactsOnly() {
    const civilId = this.selectedPerson?.nationalId || this.selectedPerson?.civilId;
    if (civilId) {
      this.negotiationsService.getContacts(civilId).subscribe(data => this.contacts = data);
    }
  }

  // جلب كافة البيانات المرتبطة برمز الملف (FileCode) لضمان توافقها مع السجلات التاريخية
  private fetchUniversalCaseData(id: number, fileCode: number) {
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
        this.selectedPerson.autoNumbers = data.map((n: any) => n.autoNumberValue).join(', ');
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
          clientStatusId: null, claimStatusId: null, paymentStatusId: null,
          fileStatusId: null, actionStatusId: null, followUpStatusId: null,
          internalStatusId: null, civilStatusId: null,
          cooperationStatusId: null, contactStatusId: null,
          discount: null, acceptance: '', salaryDate: null, incomeNotes: ''
        };
      }
    });
    this.fetchStatusesHistory(id, 1);
    this.fetchNotes(id, 1); // Notes also uses ID
  }

  private fetchStatusesHistory(fileCode: number, page: number = 1) {
    this.currentStatusesPage = page;
    this.negotiationsService.getStatusesHistory(fileCode, page, 5).subscribe(res => {
      this.statuses = res.items;
      this.statusesTotal = res.total;
    });
  }

  private fetchNotes(fileCode: number, page: number = 1) {
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

  private fetchCallcenterStatements(id: number, page: number = 1) {
    this.currentStatementsPage = page;
    this.negotiationsService.getCallcenterStatements(id, page, 5).subscribe(res => {
      const data = res.items;
      this.statementsTotal = res.total;

      const sorted = data.sort((a: any, b: any) => new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime());
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

  private fetchAudits(id: number, page: number = 1) {
    this.currentAuditsPage = page;
    this.negotiationsService.getAudits(id, page, 5).subscribe(res => {
      this.audits = res.items;
      this.auditsTotal = res.total;
    });
  }

  handlePageChange(event: { type: 'audits' | 'statements' | 'notes' | 'statuses', page: number }) {
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

  saveStatement(eventData: any) {
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
    import('sweetalert2').then(Swal => {
      this.negotiationsService.addStatement(payload).subscribe({
        next: () => {
          this.loading = false;
          Swal.default.fire('تم الحفظ', 'تم إضافة الإفادة بنجاح', 'success');
          this.fetchUniversalCaseData(this.selectedPerson.id, this.selectedPerson.code);
          this.fetchCallcenterStatements(this.selectedPerson.code);
        },
        error: (err) => {
          this.loading = false;
          console.error('Error saving statement:', err);
          Swal.default.fire('خطأ', 'حدث خطأ أثناء حفظ الإفادة', 'error');
        }
      });
    });
  }

  // البحث عن شخص
  onClientSelected(client: any) {
    if (client) {
      if (Array.isArray(client)) {
        // Multi-file selection (e.g. searching by Civil ID)
        const primary = client[0];
        this.setupPersonFromClient(primary);
        this.fetchAdditionalData(client);
      } else {
        // Individual file selection
        this.setupPersonFromClient(client);
        this.fetchAdditionalData(client);
      }

      // Switch back to main tab
      if (this.mainContent) {
        this.mainContent.setMainTab('main');
      }
    } else {
      this.resetAllData();
      if (this.mainContent) {
        this.mainContent.resetAllTables();
      }
    }
  }

  private setupPersonFromClient(client: any) {
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
      status: client.status || client.Status || (client.archive ? 'مؤرشف' : 'نشط'),
      nationality: client.nationality || client.Nationality || '',
      contract: code?.toString() || '',
      debt: '',
      autoNumbers: '',
      batch: '',
      address: client.address || client.Address || '',
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
      membership: client.membership || client.Membership || '',
      classification: client.classification ? {
        ...client.classification,
        salaryDate: client.classification.salaryDate ? client.classification.salaryDate.split('T')[0] : null
      } : null
    };

    console.log('Client base data setup:', this.selectedPerson.customerName);
  }

  resetAllData() {
    this.selectedPerson = {
      clientName: '', customerName: '', nationalId: '', status: '', nationality: '', classification: '', contract: '',
      debt: '', autoNumbers: '', batch: '', address: '', clientStatus: '', claimStatus: '', paymentStatus: '', discount: '', acceptance: '', jobType: '', incomeNotes: '', salaryDate: '', membership: ''
    };
    this.financial = { claimValue: 0, fees: 0, lawFees: 0 };
    this.dashboardStats = { totalClients: 0, totalStatements: 0, todayStatements: 0, monthStatements: 0 };
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
  performAction(action: string) {
    console.log('أداء إجراء:', action);
  }

  // التفاوض
  selectNegotiation(method: string) {
    console.log('وسيلة التفاوض:', method);
  }

  saveReview() { console.log('حفظ المراجعة'); }
  rollbackReview() { console.log('تراجع المراجعة'); }

  saveClassification() { console.log('حفظ التصنيف'); }
  saveDiscount() { console.log('حفظ الخصم'); }
  saveIncome() { console.log('حفظ مصدر الدخل'); }

  onPreviewToggle(event: { type: 'mandate' | 'fax' | null, isPreview: boolean, data?: any }) {
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

  printPage() { window.print(); }

  /**
   * Helper to translate status IDs into correct Arabic names, 
   * bypassing database encoding issues.
   */
  getLookupName(type: string, id: number | null | undefined): string {
    if (!id || id === 1) return 'غير مصنف';
    
    const idNum = Number(id);
    switch (type.toLowerCase()) {
      case 'cooperation':
        return {
          2: 'وعد بالسداد', 3: 'تقسيط', 4: 'متعاون', 5: 'غير متعاون',
          6: 'مماطل', 7: 'متردد', 8: 'غير قادر', 9: 'وعد ضعيف',
          10: 'وعد قوي', 11: 'رافض السداد', 12: 'لم نصل اليه'
        }[idNum] || id.toString();
        
      case 'contact':
        return {
          2: 'مع العميل', 3: 'غير متواصل', 4: 'لا يمكن التواصل',
          5: 'مع اخر', 6: 'مع العميل واخر'
        }[idNum] || id.toString();
        
      case 'civil':
        return {
          2: 'صالحة', 3: 'منتهية', 4: 'لاغية', 5: 'يتعذر',
          6: 'غير نشط', 7: 'وفاة'
        }[idNum] || id.toString();
        
      case 'internal':
      case 'interior':
        return {
          2: 'غير مخالف', 3: 'في قائمة الممنوعين', 4: 'مخالف اقامة',
          5: 'هجرة', 6: 'خارج البلاد'
        }[idNum] || id.toString();
        
      case 'client':
        return {
          2: 'مدني خطا', 3: 'نشط', 4: 'مسجون', 5: 'وفاه',
          6: 'مغادر نهائي', 7: 'سداد المحكمة', 8: 'سداد شركة', 9: 'سداد مندوب مكتب'
        }[idNum] || id.toString();
        
      case 'file':
        return { 2: 'ودي', 3: 'قضائي' }[idNum] || id.toString();
        
      case 'comms_lang':
        return { 2: 'عربي', 3: 'إنجليزي', 4: 'أوردو', 5: 'هندي', 6: 'تاغالوغ' }[idNum] || id.toString();
        
      case 'gender':
        return { 2: 'ذكر', 3: 'أنثى' }[idNum] || id.toString();
        
      default:
        return id.toString();
    }
  }
}

