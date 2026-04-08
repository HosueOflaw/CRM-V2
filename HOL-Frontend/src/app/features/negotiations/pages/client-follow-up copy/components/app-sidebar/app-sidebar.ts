import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainfileService } from '../../../../../../services/mainfile.service';
import { DataViewService } from '../../../../../../services/data-view.service';
import { MandateReport } from '../mandate-report/mandate-report';
import { FaxToWorkReport } from '../fax-to-work-report/fax-to-work-report';

@Component({
  selector: 'app-app-sidebar',
  imports: [FormsModule, CommonModule, MandateReport, FaxToWorkReport],
  standalone: true,
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.css'
})
export class AppSidebar {
  @ViewChild(MandateReport) mandateReport!: MandateReport;
  @ViewChild(FaxToWorkReport) faxToWorkReport!: FaxToWorkReport;

  @Output() previewToggle = new EventEmitter<{ type: 'mandate' | 'fax' | null, isPreview: boolean }>();
  @Output() search = new EventEmitter<any>();
  @Input() financialData: any = null;
  @Input() dashboardStats: any = null;

  searchCid = '';
  selectedClient: any = null;

  activeReport: 'mandate' | 'fax' | null = null;
  isPreviewMode = false;

  lawFirmName = 'بيت القانون';
  lawFirmPhone = '1818180';
  lawFirmAddress = 'شارع أحمد الجابر، برج وذرة، الدورين 3 & 6، شرق - الكويت';
  currentDate = new Date().toLocaleDateString('en-US');

  clientData: any = {
    clientName: '',
    agentName: '',
    contractNumber: '',
    claimValue: 0,
    caseNumber: '',
    address: '',
    nationality: '',
    employer: ''
  };

  representativeForm: any = {
    code: '',
    name: '',
    phone: '',
    amount: 0,
    contract: '',
    sendDate: new Date().toISOString().split('T')[0],
    notes: '',
    address: ''
  };

  constructor(
    private mainfileService: MainfileService,
    private dataViewService: DataViewService
  ) { }

  onSearchInput() {
    this.resetData();
    this.search.emit(null);
  }

  // دالة البحث (عند الضغط على زر البحث)
  searchClient(searchValue: string) {
    if (!searchValue) return;
    this.mainfileService.searchMainfiles(searchValue).subscribe({
      next: (results) => {
        if (results && results.length > 0) {
          const client = results[0];
          this.selectedClient = client;
          this.updateClientData(client);
          this.search.emit(client);
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
          this.resetData();
        }
      },
      error: (err) => {
        console.error('Search error:', err);
        this.resetData();
      }
    });
  }

  updateClientData(client: any) {
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

  togglePreview(type: 'mandate' | 'fax') {
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
    this.previewToggle.emit({ type: this.activeReport, isPreview: this.isPreviewMode });
  }

  fetchFinancialDetails(callback?: () => void) {
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
          phone: '', // Can be manually filled or fetched from contacts
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
      (document.getElementById('representativeModal') as any)?.showModal();
    });
  }

  submitRepresentativeForm() {
    console.log('Representative Form Submitted:', this.representativeForm);
    // Implementation for saving/sending to backend would go here
    import('sweetalert2').then(Swal => {
      Swal.default.fire({
        icon: 'success',
        title: 'تم الإرسال',
        text: 'تم إرسال استمارة المندوب بنجاح',
        confirmButtonText: 'حسناً'
      });
    });
    (document.getElementById('representativeModal') as any)?.close();
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

  private showWarning() {
    import('sweetalert2').then(Swal => {
      Swal.default.fire({
        icon: 'warning',
        title: 'تنبيه',
        text: 'يرجى البحث عن العميل أولاً للحصول على بيانات حقيقية، أو يمكنك مشاهدة القالب فقط من زر المعاينة',
        confirmButtonText: 'حسناً'
      });
    });
  }
}
