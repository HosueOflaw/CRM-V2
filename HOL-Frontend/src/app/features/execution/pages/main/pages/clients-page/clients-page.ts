import { Component, ViewChild } from '@angular/core';
import { SubTabs } from '../../shared/sub-tabs/sub-tabs';
import { MainTabs } from './clients-table/main-tabs';
import { WorkForm } from './forms/work-form/work-form';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainForm } from './forms/main-form/main-form';
import { LastActionModal } from './components/last-action-modal/last-action-modal';
import { DateModal } from './components/last-date-modal/last-date-modal';
import { NextActionModal } from './components/next-action-modal/next-action-modal';
import { NextDateModal } from './components/next-date-modal/next-date-modal';
import { JusticePortalForm } from './forms/justice-portal-form/justice-portal-form';
import { ClassificationForm } from './forms/classification-form/classification-form';
import { JudgmentForm } from "./forms/judgment-form/judgment-form";
import { AddressForm } from './forms/address-form/address-form';
import { SessionForm } from './forms/session-form/session-form';
import { ClaimValue } from './forms/claim-value/claim-value';
import { AttachmentsForm } from './forms/attachments-form/attachments-form';
import { ClientService, CreateClientDto } from '../../../../../finance/services/ClientService';
import { SweetAlertService } from '../../../../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-clients-page',
  imports: [SubTabs, MainTabs, WorkForm, CommonModule, FormsModule, ReactiveFormsModule, MainForm, LastActionModal, DateModal, NextDateModal, NextActionModal, JusticePortalForm, ClassificationForm, JudgmentForm, AddressForm, SessionForm, AttachmentsForm, ClaimValue],
  templateUrl: './clients-page.html',
  styleUrl: './clients-page.css'
})
export class ClientsPage {
  @ViewChild(LastActionModal) lastActionModal!: LastActionModal;
  @ViewChild(DateModal) lastActionDateModal!: DateModal;
  @ViewChild(NextActionModal) nextActionModal!: NextActionModal;
  @ViewChild(NextDateModal) nextActionDateModal!: NextDateModal;
  @ViewChild(JusticePortalForm) justicePortal!: JusticePortalForm;

  actionsForm: FormGroup;
  searchCode: string = '';
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    private swal: SweetAlertService
  ) {
    this.actionsForm = this.fb.group({
      lastAction: [''],
      lastActionDate: [''],
      nextAction: [''],
      nextActionDate: [''],
      fileLocation: [''],
      fileNumber: [''],
      summary: [''],
      notes: ['']
    });
  }

  selectedTab = 'الرئيسية';
  subTabs = ['الرئيسية', 'التصنيف', 'جهة العمل', 'منطوق الحكم', 'العنوان', 'الجلسات', 'الرسوم', 'قيمة المطالبة', 'المرفقات', 'الإجراءات'];

  client: CreateClientDto = {
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
    contractNo: '',
    department: '',
    deptCode: undefined,
    legalPlaintiff: '',
    contractDetails: '',
    patchNo: '',
    dateFinished: undefined,
    deptAmount: undefined,
    lawyerUser: undefined,
    courtUser: undefined,
    mdUser: undefined,
    legalAdvisorUser: undefined,
    phone1: '',
    phone1Owner: '',
    phone2: '',
    phone2Owner: '',
    financialAmount: undefined,
    financialType: '',
    contacts: [],
    financialDetails: [
      { category: 'اتعاب' },
      { category: 'ودي' },
      { category: 'تنفيذ' },
      { category: 'قضائي مدنى' },
      { category: 'قضائي مدعى عليه' },
      { category: 'خبراء' },
      { category: 'اجراء' }
    ]
  };

  addContact() {
    if (!this.client.contacts) this.client.contacts = [];
    this.client.contacts.push({ phone: '', relation: '' });
  }

  removeContact(index: number) {
    if (this.client.contacts) {
      this.client.contacts.splice(index, 1);
    }
  }

  form = {
    caseNumber: '',
    date: '',
    workSource: '',
    notes: '',
  };

  fees = { claimValue: 0, feesValue: 0, lawValue: 0 };
  feesTable = [
    { name: 'رسوم تسجيل', value: 150 },
    { name: 'رسوم محكمة', value: 300 },
  ];

  totals = {
    paid: 450,
    discount: 50,
    remaining: 100,
  };

  onSubTabChange(tab: string) {
    this.selectedTab = tab;
  }

  onSearch() {
    if (!this.searchCode) return;
    this.loading = true;
    this.clientService.getClientByCode(Number(this.searchCode)).subscribe({
      next: (data) => {
        this.client = data;
        this.loading = false;
        this.swal.success({ title: 'تم العثور', text: `تم تحميل بيانات الموكل: ${data.name}` });
      },
      error: (err) => {
        this.loading = false;
        this.swal.error({ title: 'خطأ', text: 'الموكل غير موجود أو حدث خطأ في النظام' });
      }
    });
  }

  save() {
    if (!this.client.id) {
      this.swal.error({ title: 'خطأ', text: 'لا يمكن حفظ بيانات موكل غير موجود' });
      return;
    }

    this.loading = true;
    this.clientService.updateClient(this.client.id!, this.client).subscribe({
      next: () => {
        this.loading = false;
        this.swal.success({ title: 'تم الحفظ', text: 'تم تحديث بيانات الموكل بنجاح' });
      },
      error: (err) => {
        this.loading = false;
        this.swal.error({ title: 'فشل الحفظ', text: err.error?.message || 'حدث خطأ أثناء الحفظ' });
      }
    });
  }

  openLastActionForm() {
    this.lastActionModal.open();
  }

  openNextActionForm() {
    this.nextActionModal.open();
  }

  setLastAction(action: any) {
    this.actionsForm.patchValue({ lastAction: action.desc });
  }

  setLastActionDate(date: string) {
    this.actionsForm.patchValue({ lastActionDate: date });
  }

  setNextAction(action: any) {
    this.actionsForm.patchValue({ nextAction: action.desc });
  }

  setNextActionDate(date: string) {
    this.actionsForm.patchValue({ nextActionDate: date });
  }

  onLastActionSelected(action: string) {
    this.actionsForm.patchValue({ lastAction: action });
    this.lastActionModal.close();
    setTimeout(() => this.lastActionDateModal.open(), 200);
  }

  onLastDateSelected(date: string) {
    this.actionsForm.patchValue({ lastActionDate: date });
    this.lastActionDateModal.close();
    setTimeout(() => this.nextActionModal.open(), 200);
  }

  onNextActionSelected(action: string) {
    this.actionsForm.patchValue({ nextAction: action });
    this.nextActionModal.close();
    setTimeout(() => this.nextActionDateModal.open(), 200);
  }

  onNextDateSelected(date: string) {
    this.actionsForm.patchValue({ nextActionDate: date });
    const { lastAction, lastActionDate, nextAction, nextActionDate, fileLocation } = this.actionsForm.value;
    const summaryText = `آخر إجراء: ${lastAction || '-'} بتاريخ ${lastActionDate || '-'}، 
الإجراء القادم: ${nextAction || '-'} بتاريخ ${nextActionDate || '-'}، 
مكان الملف: ${fileLocation || '-'}`;

    this.actionsForm.patchValue({
      summary: summaryText,
      notes: summaryText
    });
  }
}
