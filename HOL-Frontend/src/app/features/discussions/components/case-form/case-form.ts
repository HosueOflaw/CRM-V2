import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiscussionsService } from '../../services/discussions.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-case-form',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './case-form.html',
  styleUrl: './case-form.css'
})
export class CaseForm implements OnInit{
    showModal = false;
  caseForm: FormGroup;
    @Output() openTransfer = new EventEmitter<void>();


  // مودالات كل نوع
  modalVisible = {
    court: false,
    expert: false,
    client: false,
    role: false,
    fileStatus: false,
    lawyer: false,
    consultant: false,
    delegate: false,
    firstDegree: false,
    appeal: false,
    cassation: false,
    chamber: false
  };

  // بيانات المعارضات (source lists)
  courts: any[] = [];
  experts: any[] = [];
  parties: any[] = [];
  roles: any[] = [];
  fileStatuses: any[] = [];
  lawyers: any[] = [];
  consultants: any[] = [];
  delegates: any[] = [];
  firstDegrees: any[] = [];
  appeals: any[] = [];
  cassations: any[] = [];
  chambers: any[] = [];

  constructor(private fb: FormBuilder,private svc: DiscussionsService,private router: Router,private route: ActivatedRoute) {
    this.caseForm = this.fb.group({
      serial: [''],
      floor: 0,
      shblona:0,
      hall:0,
      automaticNo:0,
      court: [null],
      expert: [null],
      client: [null],
      clientRole: [null],
      fileStatus: [null],
      lawyer: [null],
      consultant: [null],
      delegate: [null],
      firstDegree: [null],
      firstDegreeNumber: [''],
      firstDegreeRaised: [''],
      appealNumber: [''],
      appealRaised: [''],
      cassationNumber: [''],
      cassationRaised: [''],
      chamber: [null],
      topic: [''],
      room: [''],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.svc.getCourts().subscribe(x => this.courts = x);
    this.svc.getExperts().subscribe(x => this.experts = x);
    this.svc.getParties().subscribe(x => this.parties = x);
    this.svc.getRoles().subscribe(x => this.roles = x);
    this.svc.getFileStatuses().subscribe(x => this.fileStatuses = x);
    this.svc.getLawyers().subscribe(x => this.lawyers = x);
    this.svc.getConsultants().subscribe(x => this.consultants = x);
    this.svc.getDelegates().subscribe(x => this.delegates = x);
    this.svc.getFirstDegrees().subscribe(x => this.firstDegrees = x);
    this.svc.getAppeals().subscribe(x => this.appeals = x);
    this.svc.getCassations().subscribe(x => this.cassations = x);
    this.svc.getChambers().subscribe(x => this.chambers = x);
  }

  openModal(key: keyof typeof this.modalVisible) {
    this.modalVisible[key] = true;
  }

  closeModal(key: keyof typeof this.modalVisible) {
    this.modalVisible[key] = false;
  }

  // اختيار عنصر من المودال وملئ الحقل
  selectItem(key: string, item: any) {
    // key is same as form control names for convenience mapping
    this.caseForm.patchValue({ [key]: item });
    // أغلق المودال المناسب
    // بعض المفاتيح ليست مباشرة مثل clientRole => role
    const keyMap: any = {
      clientRole: 'role',
      fileStatus: 'fileStatus',
      firstDegree: 'firstDegree',
      appeal: 'appeal',
      cassation: 'cassation',
      chamber: 'chamber'
    };
    const modalKey = Object.keys(this.modalVisible).find(k => k === (keyMap[key] || key));
    if (modalKey) { this.modalVisible[modalKey as keyof typeof this.modalVisible] = false; }
  }

  submit() {
    console.log('Form value:', this.caseForm.value);
  }
  resetForm() {
  this.caseForm.reset();
}
  openModalTransfer() {
    this.showModal = true;
  }

  closeModalTransfer() {
    this.showModal = false;
  }

  navigateToTransfer() {
    this.router.navigate(['discussions/add-case/transfer-sessions']);
}
onTransferClick() {
    this.openTransfer.emit();
  }
}