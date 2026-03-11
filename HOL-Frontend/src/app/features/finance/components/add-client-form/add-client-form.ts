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
  activeTab = signal<'basic' | 'contacts' | 'financial' | 'attachments'>('basic');
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
    dateFinished: undefined as Date | undefined,
    deptAmount: 0,
    lawyerUser: 0,
    courtUser: 0,
    mdUser: 0,
    legalAdvisorUser: 0,
    contacts: [] as any[],
    financialDetails: [
      { category: 'اتعاب', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
      { category: 'ودي', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
      { category: 'تنفيذ', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
      { category: 'قضائي مدنى', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
      { category: 'قضائي مدعى عليه', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
      { category: 'خبراء', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
      { category: 'اجراء', downPayment: 0, finalPayment: 0, collectionCommission: 0 }
    ]
  };

  newContact = { phone: '', relation: '' };
  attachments: Array<{ file: File; note: string }> = [];
  selectedFile: File | null = null;
  attachmentNote = '';

  years = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() - i);
  sectors = ['تجاري', 'مدني', 'جنائي'];
  clientsData = []; // To be loaded from service if needed

  constructor(private clientService: ClientService) { }

  openModal() {
    this.showModal.set(true);
    this.resetForm();
  }

  closeModal() {
    this.showModal.set(false);
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
      dateFinished: undefined,
      deptAmount: 0,
      lawyerUser: 0,
      courtUser: 0,
      mdUser: 0,
      legalAdvisorUser: 0,
      contacts: [],
      financialDetails: [
        { category: 'اتعاب', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
        { category: 'ودي', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
        { category: 'تنفيذ', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
        { category: 'قضائي مدنى', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
        { category: 'قضائي مدعى عليه', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
        { category: 'خبراء', downPayment: 0, finalPayment: 0, collectionCommission: 0 },
        { category: 'اجراء', downPayment: 0, finalPayment: 0, collectionCommission: 0 }
      ]
    };
    this.attachments = [];
    this.selectedFile = null;
    this.attachmentNote = '';
    this.activeTab.set('basic');
  }

  addContact() {
    if (this.newContact.phone) {
      this.clientForm.contacts.push({ ...this.newContact });
      this.newContact = { phone: '', relation: '' };
    }
  }

  removeContact(contact: any) {
    this.clientForm.contacts = this.clientForm.contacts.filter(c => c !== contact);
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

  onClientSelected(selected: any) {
    this.clientForm.code = parseInt(selected.code) || 0;
    this.clientForm.name = selected.name || '';
  }

  async addClient() {
    if (!this.clientForm.code || !this.clientForm.name) {
      Swal.fire({ icon: 'warning', title: 'تحذير', text: 'كود الموكل واسم الموكل مطلوبان' });
      return;
    }

    this.isSaving.set(true);
    Swal.fire({
      title: 'جاري الحفظ...',
      didOpen: () => Swal.showLoading()
    });

    try {
      const clientData: CreateClientDto = {
        ...this.clientForm,
        deptCode: 1,
        userAdded: 1
      };

      const response: any = await this.clientService.createClient(clientData).toPromise();
      const fileCode = response?.id || response?.Id;

      if (fileCode && this.attachments.length > 0) {
        for (const att of this.attachments) {
          await this.clientService.uploadAttachment(Number(fileCode), att.file, att.note, 1, 1).toPromise();
        }
      }

      Swal.fire({ icon: 'success', title: 'نجح!', text: 'تم إضافة الموكل بنجاح' });
      this.closeModal();
    } catch (error: any) {
      Swal.fire({ icon: 'error', title: 'خطأ', text: error.message || 'حدث خطأ غير متوقع' });
    } finally {
      this.isSaving.set(false);
    }
  }
}
