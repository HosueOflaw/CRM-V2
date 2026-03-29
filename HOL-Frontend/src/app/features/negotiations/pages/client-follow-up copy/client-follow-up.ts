import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class ClientFollowUp {

  searchQuery = '';
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
  payments: any[] = [];

  review = { date: '', notes: '' };
  negotiationResult = { status: '' };
  financial = { claimValue: 0, fees: 0, lawFees: 0 };
  loading = false;
  activeSubTab = 'debts'; // 'debts', 'payments', 'legal', 'attachments', 'history', 'contacts'

  constructor(private negotiationsService: NegotiationsService) { }

  // البحث عن شخص باستخدام الرقم المدني أو الكود أو الاسم
  handleSearch(term: string) {
    if (!term) return;

    this.loading = true;
    console.log('جاري البحث في قاعدة البيانات عن:', term);

    this.negotiationsService.search(term).subscribe({
      next: (results: any[]) => {
        this.loading = false;
        if (results && results.length > 0) {
          // نأخذ النتيجة الأولى لأن الباك اند يقوم بترتيبها حسب الأولوية (تطابق الكود أولاً)
          const mainfile = results[0];

          this.onClientSelected(mainfile);

          this.selectedPerson = {
            id: mainfile.id,
            clientName: mainfile.name || 'غير معروف',
            customerName: mainfile.name || 'غير معروف',
            nationalId: mainfile.cid,
            status: mainfile.archive ? 'مؤرشف' : 'نشط',
            nationality: mainfile.nationality || 'غير محدد',
            classification: '',
            contract: mainfile.code?.toString() || '',
            debt: '0',
            autoNumbers: '',
            batch: '',
            address: mainfile.address || 'لا يوجد عنوان',
            cooperationStatus: '',
            contactStatus: '',
            civilStatus: '',
            internalStatus: '',
            jobType: mainfile.work || '',
            incomeNotes: mainfile.note_ || ''
          };
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Search error:', err);
      }
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
          advisorName: f.legalAdvisorUserName || 'غير محدد'
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

    // 2. جلب بقية البيانات المرتبطة بـ fileCode (من المين فايل مباشرة كما طلب العميل)
    if (fileCode) {
      this.fetchUniversalCaseData(fileCode);
    }

    // 3. جلب إفادات الكول سنتر المرتبطة بـ fileCode
    if (fileCode) {
      this.fetchCallcenterStatements(fileCode);
    }
  }

  // جلب كافة البيانات المرتبطة بالكود البرمجي للملف
  private fetchUniversalCaseData(fileCode: number) {
    this.negotiationsService.getAttachments(fileCode).subscribe(data => this.attachments = data);
    this.negotiationsService.getPayments(fileCode).subscribe(data => this.payments = data);
    this.negotiationsService.getAdditionalAmounts(fileCode).subscribe(data => this.additionalAmounts = data);
    this.negotiationsService.getAudits(fileCode).subscribe(data => this.audits = data);
    this.negotiationsService.getAutoNumbers(fileCode).subscribe(data => this.autoNumbers = data);
    this.negotiationsService.getClassifications(fileCode).subscribe(data => this.classifications = data);
    this.negotiationsService.getStatusesHistory(fileCode).subscribe(data => this.statuses = data);
  }

  private fetchCallcenterStatements(fileCode: number) {
    this.negotiationsService.getCallcenterStatements(fileCode).subscribe(data => this.callcenterStatements = data);
  }
  // جلب الإفادات
  // this.negotiationsService.getStatements(fileId).subscribe(statements => { ... });

  // البحث عن شخص
  onClientSelected(client: any) {
    if (client) {
      this.selectedPerson = {
        id: client.id,
        clientName: client.name || '',
        customerName: client.name || '',
        nationalId: client.cid || '',
        status: client.archive ? 'مؤرشف' : 'نشط',
        nationality: client.nationality || '',
        classification: '',
        contract: client.code?.toString() || '',
        debt: '',
        autoNumbers: '',
        batch: '',
        address: client.address || '',
        cooperationStatus: '',
        contactStatus: '',
        civilStatus: '',
        internalStatus: '',
        jobType: client.work || '',
        incomeNotes: client.note_ || ''
      };

      // Trigger search for related details (stats, file records, etc.)
      this.fetchAdditionalData(client);
      console.log('Client loaded:', client);
    } else {
      this.resetAllData();
    }
  }

  resetAllData() {
    this.selectedPerson = {
      clientName: '', customerName: '', nationalId: '', status: '', nationality: '', classification: '', contract: '',
      debt: '', autoNumbers: '', batch: '', address: '', clientStatus: '', claimStatus: '', paymentStatus: '', discount: '', acceptance: '', jobType: '', incomeNotes: '', salaryDate: ''
    };
    this.clientRows = [];
    this.searchQuery = '';
    console.log('All fields cleared');
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

  printPage() { window.print(); }
}
