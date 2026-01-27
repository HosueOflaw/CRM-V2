import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientService, CreateClientDto } from '../../services/ClientService';
import { LookupModal } from "../../../../shared/components/lookup-modal/lookup-modal";
import Swal from 'sweetalert2';
// import { Subscription } from 'rxjs';


@Component({
  selector: 'app-add-client-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LookupModal],
  templateUrl: './add-client-form.html',
  styleUrl: './add-client-form.css'
})
export class AddClientForm {
  @Input() showModal!: any;
  // private signalRService = inject(SignalRService);
  // private signalRSubscription?: Subscription;

  activeTab = signal<'basic' | 'contacts' | 'financial' | 'attachments'>('basic');

  financialEntries = signal<Array<{ type: string; values: Record<string, string> }>>([]);

  isSaving = signal(false);

  clientForm = {
    code: 0,
    name: '',
    cid: '',
    address: '',
    nationality: '',
    work: '',
    membership: '',
    companyEmail: '',
    companyFax: '',
    companyRegister: '',
    partner1: '',
    partner2: '',
    partner3: '',
    registerType: '',
    note: '',
    contractNumber: '',
    contractYear: new Date().getFullYear(),
    sector: '',
    legalClaimant: '',
    contractDetails: '',
    patchNo: '',
    dateFinished: null as Date | null,
    deptAmount: 0,
    lawyerUser: 0,
    courtUser: 0,
    mdUser: 0,
    legalAdvisorUser: 0
  };

  financialTypes = [
    'مقدم',
    'مؤخر',
    'عمولة تحصيل',
  ];

  contacts: Array<{ phone: string; relation: string }> = [];
  newContact = { phone: '', relation: '' };

  attachments: Array<{ file: File; note: string }> = [];
  selectedFile: File | null = null;
  attachmentNote = '';

  newFinancialEntry = { type: '' };

  years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i);
  sectors = ['تجاري', 'مدني', 'جنائي'];

  clientsData = [
    { code: 'C001', name: 'محمد أحمد' },
    { code: 'C002', name: 'سارة علي' },
    { code: 'C003', name: 'خالد حسن' },
  ];

  financialCols: { key: string; label: string }[] = [
    { key: 'fees', label: 'اتعاب' },
    { key: 'deposit', label: 'ودي' },
    { key: 'execution', label: 'تنفيذ' },
    { key: 'civil', label: 'قضائي مدنى' },
    { key: 'defendant', label: 'قضائي مدعى عليه' },
    { key: 'experts', label: 'خبراء' },
    { key: 'action', label: 'اجراء' }
  ];

  constructor(private clientService: ClientService) { }

  openModal() {
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
    this.resetForm();
  }

  resetForm() {
    this.clientForm = {
      code: 0,
      name: '',
      cid: '',
      address: '',
      nationality: '',
      work: '',
      membership: '',
      companyEmail: '',
      companyFax: '',
      companyRegister: '',
      partner1: '',
      partner2: '',
      partner3: '',
      registerType: '',
      note: '',
      contractNumber: '',
      contractYear: new Date().getFullYear(),
      sector: '',
      legalClaimant: '',
      contractDetails: '',
      patchNo: '',
      dateFinished: null,
      deptAmount: 0,
      lawyerUser: 0,
      courtUser: 0,
      mdUser: 0,
      legalAdvisorUser: 0
    };
    this.contacts = [];
    this.attachments = [];
    this.selectedFile = null;
    this.attachmentNote = '';
    this.financialEntries.set([]);
  }

  addContact() {
    if (this.newContact.phone && this.newContact.relation) {
      this.contacts.push({ ...this.newContact });
      this.newContact = { phone: '', relation: '' };
    }
  }

  removeContact(contact: any) {
    this.contacts = this.contacts.filter(c => c !== contact);

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.attachmentNote = this.selectedFile.name;
    }
  }

  addAttachmentToQueue() {
    if (this.selectedFile) {
      this.attachments.push({
        file: this.selectedFile,
        note: this.attachmentNote
      });
      this.selectedFile = null;
      this.attachmentNote = '';

      const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }
  }


  removeAttachment(att: any) {
    this.attachments = this.attachments.filter(a => a !== att);
  }

  addFinancialEntry() {
    if (!this.newFinancialEntry.type) {
      Swal.fire({
        icon: 'warning',
        title: 'تحذير',
        text: 'يرجى اختيار نوع القيد المالي',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    // ✅ منع التكرار - التحقق من وجود النوع
    const existingTypes = this.financialEntries().map(e => e.type);
    if (existingTypes.includes(this.newFinancialEntry.type)) {
      Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: `نوع "${this.newFinancialEntry.type}" موجود بالفعل!`,
        confirmButtonText: 'حسناً'
      });
      return;
    }

    // ✅ إضافة النوع الجديد
    this.financialEntries.update(entries => [...entries, {
      type: this.newFinancialEntry.type,
      values: {} // Initialize empty values
    }]);
    this.newFinancialEntry = { type: '' };
  }

  deleteFinancialEntry(entry: any) {
    this.financialEntries.update(entries => entries.filter(e => e !== entry));
  }
  updateFinancialValue(event: any, entry: any, colKey: string) {
    const value = event.target.textContent?.trim() || '';
    entry.values = entry.values || {};
    entry.values[colKey] = value;
  }

  onClientSelected(selected: any) {
    this.clientForm.code = parseInt(selected.code) || 0;
    this.clientForm.name = selected.name || '';
  }


  async addClient() {
    if (!this.clientForm.code || !this.clientForm.name) {
      await Swal.fire({
        icon: 'warning',
        title: 'تحذير',
        text: 'كود الموكل واسم الموكل مطلوبان',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    this.isSaving.set(true);

    // Show loading
    Swal.fire({
      title: 'جاري الحفظ...',
      text: 'يرجى الانتظار',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      // Prepare client data with ALL fields
      const clientData: CreateClientDto = {
        code: this.clientForm.code,
        name: this.clientForm.name,
        cid: this.clientForm.cid || undefined,
        address: this.clientForm.address || undefined,
        nationality: this.clientForm.nationality || undefined,
        work: this.clientForm.work || undefined,
        membership: this.clientForm.membership || undefined,
        companyEmail: this.clientForm.companyEmail || undefined,
        companyFax: this.clientForm.companyFax || undefined,
        companyRegister: this.clientForm.companyRegister || undefined,
        partner1: this.clientForm.partner1 || undefined,
        partner2: this.clientForm.partner2 || undefined,
        partner3: this.clientForm.partner3 || undefined,
        registerType: this.clientForm.registerType || undefined,
        note: this.clientForm.note || undefined,
        contractNumber: this.clientForm.contractNumber || undefined,
        contractYear: this.clientForm.contractYear,
        sector: this.clientForm.sector || undefined,
        legalClaimant: this.clientForm.legalClaimant || undefined,
        contractDetails: this.clientForm.contractDetails || undefined,
        patchNo: this.clientForm.patchNo || undefined,
        dateFinished: this.clientForm.dateFinished || undefined,
        deptAmount: this.clientForm.deptAmount || undefined,
        lawyerUser: this.clientForm.lawyerUser || undefined,
        courtUser: this.clientForm.courtUser || undefined,
        mdUser: this.clientForm.mdUser || undefined,
        legalAdvisorUser: this.clientForm.legalAdvisorUser || undefined,
        contacts: this.contacts,
        financialEntries: this.financialEntries().map(e => ({
          type: e.type,
          values: e.values
        })),
        deptCode: 1,
        userAdded: 1
      };

      // Create client
      const response: any = await this.clientService.createClient(clientData).toPromise();
      const fileCode = response?.id || response?.Id;
      const fileCodeNumber = Number(fileCode);

      if (!fileCodeNumber || isNaN(fileCodeNumber)) {
        throw new Error('لم يتم الحصول على كود الملف من الخادم');
      }

      // Upload attachments
      let uploadedCount = 0;
      let failedCount = 0;

      for (const att of this.attachments) {
        try {
          await this.clientService.uploadAttachment(
            fileCodeNumber,
            att.file,
            att.note || '',
            1,
            1
          ).toPromise();
          uploadedCount++;
        } catch (error) {
          console.error('Error uploading attachment:', error);
          failedCount++;
        }
      }

      // Success message
      let successMessage = 'تم إضافة الموكل بنجاح!';
      if (this.attachments.length > 0) {
        successMessage += `\nتم رفع ${uploadedCount} من ${this.attachments.length} مرفق`;
        if (failedCount > 0) {
          successMessage += `\nفشل رفع ${failedCount} مرفق`;
        }
      }

      await Swal.fire({
        icon: 'success',
        title: 'نجح!',
        text: successMessage,
        confirmButtonText: 'حسناً'
      });

      this.closeModal();
    } catch (error: any) {
      console.error('Error:', error);

      let errorMessage = 'حدث خطأ غير متوقع';
      if (error.error?.error) {
        errorMessage = error.error.error;
      } else if (error.error?.message) {
        errorMessage = error.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }

      await Swal.fire({
        icon: 'error',
        title: 'خطأ',
        text: errorMessage,
        confirmButtonText: 'حسناً'
      });
    } finally {
      this.isSaving.set(false);
    }
  }

}
