import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ReportTemplate } from '../../reports/report-template/report-template';

@Component({
  selector: 'app-transfer-sessions',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,ReportTemplate],
  templateUrl: './transfer-sessions.html',
  styleUrl: './transfer-sessions.css'
})
export class TransferSessions {
  
  @Input() caseForm!: FormGroup; 
  @ViewChild('report') report!: ReportTemplate;
  @ViewChild('searchModal') searchModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('judgmentModal') judgmentModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('attachmentModal') attachmentModal!: ElementRef<HTMLDialogElement>;



  activeTab: string = 'sessions';
  subTab: string = 'court';
  
  sessionForm = new FormGroup({
    currentSession: new FormControl(''),
    nextSession: new FormControl(''),
    sessionNotes: new FormControl('')
  });

  
  courtSessions = [
    { id: 1, reportDate: '2025-01-01', type: 'ثانوية', decision: 'تأجيل', nextDate: '2025-02-01', expertTime: '10:00', notes: '...', user: 'Admin' },
  ];

  expertSessions = [
    { id: 1, reportDate: '2025-03-01', type: 'خبير هندسي', decision: 'مرفوض', nextDate: '2025-04-01', expertTime: '11:00', notes: '...', user: 'User1' },
  ];

  constructor(private fb: FormBuilder,private router: Router) {}

  ngOnInit() {
    // ✅ الطريقة الصحيحة للحصول على البيانات (لو أنت فعلاً بتمرر state)
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { caseData: any };

    if (state?.caseData) {
      this.caseForm = this.fb.group({
        caseNumber: [state.caseData.automaticNo || ''],
        clientName: [state.caseData.client || ''],
        court: [state.caseData.court || ''],
        currentSession: [''],
        nextSession: [''],
        sessionNotes: [''],
      });
    }
  }

  resetForm() {
    this.caseForm.reset();
  }

  onSubmit() {
    console.log(this.caseForm.value);
  }
  fileLocation: string = '';
fileNotes: string = '';

sections = ['الشؤون القانونية', 'المحفوظات', 'القضايا التجارية', 'المالية'];
fileLocations = [
  { date: '2025-11-05', location: 'المحفوظات', notes: 'تم التسليم اليوم', user: 'Admin' },
];

selectSection(section: string) {
  this.fileLocation = section;
  const modal = document.querySelector('dialog') as HTMLDialogElement;
  modal?.close();
}

saveFileLocation() {
  if (!this.fileLocation) return alert('يرجى اختيار مكان الملف');
  this.fileLocations.push({
    date: new Date().toISOString().split('T')[0],
    location: this.fileLocation,
    notes: this.fileNotes || '-',
    user: 'Admin',
  });
  this.fileLocation = '';
  this.fileNotes = '';
}

// 🧩 العمل الإداري
reviewTime: string = '';
adminNotes: string = '';
adminTasks = [
  { date: '2025-11-05', notes: 'مراجعة أولية', reviewTime: '2025-11-06T09:00', user: 'Admin' },
];

saveAdminTask() {
  if (!this.reviewTime && !this.adminNotes) {
    return alert('يرجى إدخال وقت المراجعة أو الملاحظات قبل الحفظ');
  }

  this.adminTasks.push({
    date: new Date().toISOString().split('T')[0],
    notes: this.adminNotes || '-',
    reviewTime: this.reviewTime || '-',
    user: 'Admin',
  });

  // تفريغ الحقول
  this.reviewTime = '';
  this.adminNotes = '';
}
searchTab = 'current';

searchFields = [
  { label: 'الشبلونة', value: '' },
  { label: 'المسلسل', value: '' },
  { label: 'الموكل', value: '' },
  { label: 'اسم الخصم', value: '' },
  { label: 'الرقم الآلي', value: '' },
  { label: 'المدني', value: '' },
  { label: 'الكود', value: '' },
];

searchResults = [
  { code: 'A-101', caseNumber: '2024/373', client: 'بيت القانون', opponent: 'أحمد عبد الرسول', date: '2024-11-01', court: 'الكويت' },
];

judgments = [
  { text: 'قبول الدعوى شكلاً ورفضها موضوعاً', date: '2024-05-22', level: 'استئناف', type: 'مدني', court: 'التمييز' },
];

attachment = { statement: '', file: null };

openSectionModal() {
  (document.querySelector('#sectionModal') as HTMLDialogElement)?.showModal();
}

openSearchModal() {
    this.searchModal.nativeElement.showModal();
  }

  openJudgmentModal() {
    this.judgmentModal.nativeElement.showModal();
  }

  openAttachmentModal() {
    this.attachmentModal.nativeElement.showModal();
  }

  onFileSelected(event: any) {
    this.attachment.file = event.target.files[0];
  }

  saveAttachment() {
    console.log('Attachment saved:', this.attachment);
  }

  updateAttachment() {
    console.log('Attachment updated:', this.attachment);
  }

  printReport() {
    this.report.printReport();
  }

}
