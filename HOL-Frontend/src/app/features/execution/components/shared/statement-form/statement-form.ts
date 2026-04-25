import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustodyService, CustodyStatement } from '../../../../../services/custody.service';
import { DataViewService } from '../../../../../services/data-view.service';
import { LookupModal } from '../../../../../shared/components/lookup-modal/lookup-modal';
import { ClientService } from '../../../../finance/services/ClientService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-statement-form',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, LookupModal],
  templateUrl: './statement-form.html',
  styleUrl: './statement-form.css'
})
export class StatementForm implements OnInit {
  @Input() mode: 'add' | 'inquiry' = 'add';
  @Input() statements: CustodyStatement[] = [];
  @Output() statementsChange = new EventEmitter<CustodyStatement[]>();
  @Output() filePreview = new EventEmitter<string | null>();

  statementForm: FormGroup;
  selectedIndex: number | null = null;
  query = '';
  isLoading = false;
  selectedFiles: File[] = [];
  isUploading = false;
  previewUrl: SafeResourceUrl | null = null;
  
  // ✅ Pagination properties
  currentPage = 1;
  pageSize = 5;
  totalCount = 0;
  Math = Math;

  private fb = inject(FormBuilder);
  private custodyService = inject(CustodyService);
  private sanitizer = inject(DomSanitizer);
  private clientService = inject(ClientService);

  @ViewChild('clientLookup') clientLookup!: LookupModal;
  @ViewChild('expenseLookup') expenseLookup!: LookupModal;
  clientsData: any[] = [];

  // ✅ التسميات بالعربي
  labels: any = {
    statementNo: 'رقم الكشف',
    codeAutoNo: 'الرقم الآلي',
    codeAttach: 'كود المرفق',
    codeExpense: 'نوع المصروف',
    amount: 'المبلغ',
    codeStatus: 'الحالة',
    notes: 'ملاحظات',
    civilId: 'المدني',
    phoneNumber: 'رقم الهاتف',
    court: 'المحكمة',
    contractNo: 'رقم العقد',
    personName: 'الاسم'
  };

  expenseTypes = [
    { id: 1, name: 'اجراءات قضائية' },
    { id: 2, name: 'شهادات - معلومات مدنية' },
    { id: 3, name: 'رسوم قضائية' },
    { id: 4, name: 'تصوير ومصروفات ادارية' },
    { id: 5, name: 'ايجار كرين' },
    { id: 6, name: 'مصروفات غير مستردة' }
  ];

  courts = [
    'محكمة الرقعي (التحصيل)',
    'محكمة حولي',
    'محكمة الأحمدي',
    'محكمة الجهراء',
    'محكمة مبارك الكبير',
    'محكمة الفروانية',
    'قصر العدل',
    'الإدارة العامة للتنفيذ'
  ];

  constructor() {
    this.statementForm = this.fb.group({
      id: [null],
      fileCode: [null],
      deptCode: [null],
      codeAutoNo: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      statementNo: ['', [Validators.required]],
      codeAttach: [''],
      codeExpense: [null, [Validators.required]],
      amount: [0, [Validators.required, Validators.min(0)]],
      codeStatus: [''],
      notes: [''],
      clientName: [''],
      companyCode: [null],
      civilId: [''],
      phoneNumber: [''],
      court: [''],
      contractNo: [''],
      personName: [''],
      dateAdded: [new Date().toISOString().split('T')[0]],
      sendToACC: [false]
    });

    // ✅ التزامن التلقائي عند كتابة رقم الكشف لضمان ظهور السجلات حتى بعد التحديث
    this.statementForm.get('statementNo')?.valueChanges.subscribe(val => {
      if (val && val.length > 5) { // ننتظر قليلاً أو عدد معين من الحروف
        this.fetchStatements(val);
      }
    });

  }

  ngOnInit() {
    this.loadClients();
    if (this.mode === 'add') {
      this.fetchNextStatementNo();
      this.fetchPendingStatements();
    }
  }

  fetchNextStatementNo() {
    this.custodyService.getNextStatementNo().subscribe({
      next: (res) => {
        if (res && res.statementNo) {
          this.statementForm.patchValue({ statementNo: res.statementNo });
        }
      },
      error: (err) => console.error('Failed to fetch next statement no', err)
    });
  }

  fetchPendingStatements() {
    this.isLoading = true;
    this.custodyService.getPending(this.currentPage, this.pageSize).subscribe({
      next: (res: any) => {
        console.log('Pending statements fetched:', res);
        if (Array.isArray(res)) {
          this.statements.splice(0, this.statements.length, ...res);
          this.totalCount = res.length;
        } else if (res && res.items) {
          this.statements.splice(0, this.statements.length, ...res.items);
          this.totalCount = res.totalCount;
        }
        this.statementsChange.emit(this.statements);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch pending statements', err);
        this.isLoading = false;
      }
    });
  }

  loadClients() {
    this.clientService.getAllClients().subscribe({
      next: (clients) => {
        this.clientsData = clients;
      },
      error: (err) => console.error('Failed to load clients', err)
    });
  }

  openClientLookup() {
    this.clientLookup.title = 'اختر الشركة / الموكل';
    this.clientLookup.columns = ['id', 'name'];
    this.clientLookup.data = this.clientsData;
    this.clientLookup.open();
  }

  handleClientSelect(item: any) {
    this.statementForm.patchValue({
      clientName: item.name,
      companyCode: item.id
    });
  }

  openExpenseLookup() {
    this.expenseLookup.title = 'اختر نوع المصروف';
    this.expenseLookup.columns = ['id', 'name'];
    this.expenseLookup.data = this.expenseTypes;
    this.expenseLookup.open();
  }

  handleExpenseSelect(item: any) {
    this.statementForm.patchValue({
      codeExpense: item.id
    });
  }

  // ✅ جلب السجلات برقم الكشف داخلياً
  private fetchStatements(stmtNo: string) {
    this.isLoading = true;
    this.custodyService.getByStatementNo(stmtNo).subscribe({
      next: (res) => {
        if (res && res.length > 0) {
          this.statements.splice(0, this.statements.length, ...res);
          this.statementsChange.emit(this.statements);
        }
        this.isLoading = false;
      },
      error: () => this.isLoading = false
    });
  }

  // ✅ معالجة اختيار ملف واحد (PDF فقط)
  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type !== 'application/pdf') {
        Swal.fire('تنبيه', 'يرجى اختيار ملف PDF فقط', 'warning');
        return;
      }

      this.selectedFiles = [file];

      // ✅ توليد معاينة للملف PDF
      const fileURL = URL.createObjectURL(file);
      this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl(fileURL);
      this.filePreview.emit(fileURL);
    }
  }

  // ✅ رفع الملفات
  async uploadFile() {
    if (this.selectedFiles.length === 0) {
      Swal.fire('تنبيه', 'يرجى اختيار ملفات أولاً', 'info');
      return;
    }

    const fileCode = this.statementForm.get('codeAutoNo')?.value;
    const deptCode = this.statementForm.get('deptCode')?.value || 1;

    this.isUploading = true;
    try {
      const res = await this.custodyService.uploadAttachment(this.selectedFiles, fileCode, deptCode).toPromise();
      if (res && res.code) {
        this.statementForm.patchValue({ codeAttach: res.code });
        Swal.fire('نجاح', `تم رفع ${this.selectedFiles.length} مرفقات بنجاح`, 'success');
        this.selectedFiles = [];
      }
    } catch (err) {
      console.error(err);
      Swal.fire('خطأ', 'فشل رفع المرفقات', 'error');
    } finally {
      this.isUploading = false;
    }
  }

  searchByStatementNo(): void {
    const stmtNo = this.statementForm.get('statementNo')?.value;
    if (!stmtNo) {
      Swal.fire('تنبيه', 'يرجى إدخال رقم الكشف للبحث.', 'info');
      return;
    }

    this.isLoading = true;
    this.custodyService.getByStatementNo(stmtNo).subscribe({
      next: (res) => {
        if (res && res.length > 0) {
          this.statements = res;
          this.statementsChange.emit(this.statements);
          Swal.fire('نجاح', `تم العثور على ${res.length} سجلات لهذا الكشف`, 'success');
        } else {
          Swal.fire('تنبيه', 'لم يتم العثور على بيانات لهذا الكشف.', 'warning');
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        Swal.fire('خطأ', 'فشل البحث عن الكشف', 'error');
        this.isLoading = false;
      }
    });
  }

  async save() {
    if (this.statementForm.invalid) {
      this.statementForm.markAllAsTouched();
      return;
    }

    const data = this.statementForm.getRawValue();
    const statementId = data.id;
    this.isLoading = true;

    try {
      if (statementId) {
        // ✅ Update Mode
        await this.custodyService.updateStatement(statementId, data).toPromise();
        Swal.fire('تم التحديث', 'تم تحديث البيانات بنجاح', 'success');
        this.fetchPendingStatements();
        this.reset();
      } else {
        // ✅ Create Mode
        const res: any = await this.custodyService.create(data).toPromise();
        if (res) {
          this.statements.unshift(res);
          this.statementsChange.emit(this.statements);
          this.reset();
          Swal.fire('تم الحفظ', 'تم حفظ السجل بنجاح', 'success');
        }
      }
    } catch (err) {
      console.error(err);
      Swal.fire('خطأ', 'حدث خطأ أثناء تنفيذ العملية', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  // ✅ تسليم للمحاسبة
  async sendToAccounting(): Promise<void> {
    if (this.statements.length === 0) {
      Swal.fire('تنبيه', 'لا يوجد سجلات لتسليمها', 'warning');
      return;
    }

    const result = await Swal.fire({
      title: 'هل أنت متأكد؟',
      text: 'هل تريد تسليم هذا الكشف للمحاسبة بالكامل؟',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'نعم، قم بالتسليم',
      cancelButtonText: 'إلغاء'
    });

    if (result.isConfirmed) {
      this.isLoading = true;
      try {
        // In a real scenario, you might have a bulk endpoint, but here we loop or use the latest business logic
        // For now, let's assume we mark the whole batch as sent
        for (const stmt of this.statements) {
          if (stmt.id && !stmt.sendToACC) {
            await this.custodyService.sendToAcc(stmt.id).toPromise();
          }
        }
        Swal.fire('نجاح', 'تم تسليم الكشف للمحاسبة بنجاح', 'success');
        this.reset();
      } catch (err) {
        console.error(err);
        Swal.fire('خطأ', 'فشل تسليم الكشف', 'error');
      } finally {
        this.isLoading = false;
      }
    }
  }

  // ✅ طباعة
  print() {
    window.print();
  }

  // ✅ إعادة تعيين
  reset() {
    this.statementForm.reset({
      amount: 0,
      sendToACC: false,
      dateAdded: new Date().toISOString().split('T')[0]
    });
    this.statements = [];
    this.statementsChange.emit([]);
    this.previewUrl = null;
    this.filePreview.emit(null);
    this.selectedIndex = null;
    if (this.mode === 'add') {
      this.fetchNextStatementNo();
    }
  }

  // ✅ Pagination Logic (Server-side)
  get pagedStatements() {
    return this.statements; // Now the server only returns current page records
  }

  get totalPages() {
    return Math.ceil(this.totalCount / this.pageSize);
  }

  get pages() {
    const total = this.totalPages;
    if (total <= 1) return [];
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.fetchPendingStatements(); // Fetch new page from server
    }
  }

  // ✅ Table Actions Logic
  editStatement(s: CustodyStatement) {
    this.statementForm.patchValue(s);
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteStatement(s: CustodyStatement) {
    if (!s.id) return;
    
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "سيتم حذف هذا السجل نهائياً!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'نعم، احذف',
      cancelButtonText: 'إلغاء'
    }).then((result) => {
      if (result.isConfirmed) {
        this.custodyService.deleteStatement(s.id!).subscribe({
          next: () => {
            Swal.fire('تم الحذف!', 'تم حذف السجل بنجاح.', 'success');
            this.fetchPendingStatements();
          },
          error: (err) => {
            console.error('Failed to delete statement', err);
            Swal.fire('خطأ', 'فشل في حذف السجل', 'error');
          }
        });
      }
    });
  }

  transferSingle(s: CustodyStatement) {
    if (!s.id) return;
    
    Swal.fire({
      title: 'ترحيل السجل؟',
      text: "سيتم إرسال هذا السجل للمحاسبة فوراً.",
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'ترحيل',
      cancelButtonText: 'إلغاء'
    }).then((result) => {
      if (result.isConfirmed) {
        this.custodyService.sendToAcc(s.id!).subscribe({
          next: () => {
            Swal.fire('تم الترحيل!', 'تم إرسال السجل للمحاسبة.', 'success');
            this.fetchPendingStatements();
          },
          error: (err) => {
            console.error('Failed to transfer statement', err);
            Swal.fire('خطأ', 'فشل في ترحيل السجل', 'error');
          }
        });
      }
    });
  }

  cancel() {
    this.reset();
  }
}
