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
          this.onClientSelected(results[0]);
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
    this.fetchDashboardStats();
  }

  fetchDashboardStats() {
    this.negotiationsService.getDashboardStats().subscribe(stats => {
      this.dashboardStats = stats;
    });
  }

  /**
   * جلب البيانات الإضافية للملف بكل تفاصيلها
   * نستخدم id لجلب FileDetails (المديونيات)
   * ونستخدم code لجلب بقية البيانات المرتبطة (Payments, Attachments, etc.)
   */
  private fetchAdditionalData(mainfile: any) {
    if (!mainfile || !mainfile.id) return;
    this.loading = true;

    const mainfileId = mainfile.id;
    const fileCode = mainfile.code;

    console.log(`جاري جلب البيانات المرتبطة للكود: ${fileCode} والمعرف: ${mainfileId}`);

    // 1. جلب تفاصيل المديونيات (بحث عن طريق معرف المين فايل)
    this.negotiationsService.getFileDetails(mainfileId).subscribe({
      next: (details: any[]) => {
        this.loading = false;
        this.clientRows = details.map((f, i) => ({
          id: f.id,
          code: f.fileCode?.toString() || f.id.toString(),
          name: f.legalPlaintiff || 'غير معروف',
          fileStatus: 'نشط',
          debtReason: f.reason || '',
          batch: f.patchNo || '',
          contractNum: f.contractNo || '',
          dateAdded: f.dateAdded,
          dateFinished: f.dateFinished,
          nationality: this.selectedPerson.nationality,
          civilId: this.selectedPerson.nationalId,
          claim: f.deptAmount || 0,
          paid: 0,
          remaining: f.deptAmount || 0,
          address: this.selectedPerson.address,
          client: f.client || '',
          lawyerName: f.lawyerUserName || 'غير محدد',
          courtName: f.courtUserName || 'غير محدد',
          mdName: f.mdUserName || 'غير محدد',
          advisorName: f.legalAdvisorUserName || 'غير محدد',
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
      error: (err) => {
        this.loading = false;
        console.error('Error fetching details:', err);
      }
    });

    // 2. جلب بقية البيانات المرتبطة بـ Id المين فايل لضمان الدقة
    this.fetchUniversalCaseData(mainfileId);

    // 3. جلب إفادات الكول سنتر المرتبطة بـ Id المين فايل
    this.fetchCallcenterStatements(mainfileId);

    // 4. جلب الأرقام الخاصة بالعميل (الخصم) باستخدام الرقم المدني
    this.fetchContactsOnly();
  }

  fetchContactsOnly() {
    const civilId = this.selectedPerson?.nationalId || this.selectedPerson?.civilId;
    if (civilId) {
      this.negotiationsService.getContacts(civilId).subscribe(data => this.contacts = data);
    }
  }

  // جلب كافة البيانات المرتبطة بالمعرف الداخلي للملف لضمان الدقة
  private fetchUniversalCaseData(id: number) {
    this.negotiationsService.getPayments(id).subscribe(data => {
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

    this.negotiationsService.getAttachments(id).subscribe(data => this.attachments = data);
    this.negotiationsService.getAdditionalAmounts(id).subscribe(data => this.additionalAmounts = data);
    this.negotiationsService.getAudits(id).subscribe(data => this.audits = data);
    this.negotiationsService.getAutoNumbers(id).subscribe(data => {
      this.autoNumbers = data;
      if (this.selectedPerson && data.length > 0) {
        this.selectedPerson.autoNumbers = data.map(n => n.autoNumberValue).join(', ');
      }
    });

    this.negotiationsService.getClassifications(id).subscribe(data => {
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
    this.negotiationsService.getStatusesHistory(id).subscribe(data => this.statuses = data);
    this.negotiationsService.getNotes(id).subscribe(data => this.notes = data);
  }

  handleStatusChanged() {
    if (this.selectedPerson?.id) {
      this.negotiationsService.getStatusesHistory(this.selectedPerson.id).subscribe(data => this.statuses = data);
    }
  }

  private fetchCallcenterStatements(id: number) {
    this.negotiationsService.getCallcenterStatements(id).subscribe(data => {
      const sorted = data.sort((a, b) => new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime());
      this.callcenterStatements = sorted;

      if (sorted.length > 0) {
        this.clientRows = this.clientRows.map(row => ({
          ...row,
          lastStatement: sorted[0].notes,
          lastStatementDate: sorted[0].dateAdded
        }));
      }
    });
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
          this.fetchUniversalCaseData(this.selectedPerson.code);
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
      this.selectedPerson = {
        id: client.id,
        code: client.code?.toString() || '',
        departmentId: client.departmentId,
        clientName: client.name || '',
        customerName: client.name || '',
        nationalId: client.cid || '',
        status: client.archive ? 'مؤرشف' : 'نشط',
        nationality: client.nationality || '',
        contract: client.code?.toString() || '',
        debt: '',
        autoNumbers: '',
        batch: '',
        address: client.address || '',
        cooperationStatus: client.cooperationStatus || '',
        contactStatus: client.contactStatus || '',
        civilStatus: client.civilStatus || '',
        internalStatus: client.internalStatus || '',
        jobType: client.work || '',
        incomeNotes: client.note_ || '',
        classification: client.classification ? {
          ...client.classification,
          salaryDate: client.classification.salaryDate ? client.classification.salaryDate.split('T')[0] : null
        } : null
      };

      // Trigger search for related details (stats, file records, etc.)
      this.fetchAdditionalData(client);
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
      clientName: '', customerName: '', nationalId: '', status: '', nationality: '', classification: '', contract: '',
      debt: '', autoNumbers: '', batch: '', address: '', clientStatus: '', claimStatus: '', paymentStatus: '', discount: '', acceptance: '', jobType: '', incomeNotes: '', salaryDate: ''
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
}
