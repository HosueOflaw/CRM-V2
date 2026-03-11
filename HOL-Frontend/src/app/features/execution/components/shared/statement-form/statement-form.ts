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

  private fb = inject(FormBuilder);
  private custodyService = inject(CustodyService);
  private sanitizer = inject(DomSanitizer);
  private clientService = inject(ClientService);

  @ViewChild('clientLookup') clientLookup!: LookupModal;
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

  constructor() {
    this.statementForm = this.fb.group({
      id: [null],
      fileCode: [null],
      deptCode: [null],
      codeAutoNo: ['', [Validators.required]],
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

  // ✅ جلب السجلات برقم الكشف داخلياً
  private fetchStatements(stmtNo: string) {
    this.isLoading = true;
    this.custodyService.getByStatementNo(stmtNo).subscribe({
      next: (res) => {
        if (res && res.length > 0) {
          this.statements = res;
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

  // ✅ البحث برقم الكشف (للتعديل أو العرض)
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

  // ✅ حفظ
  async save() {
    if (this.statementForm.invalid) {
      this.statementForm.markAllAsTouched();
      return;
    }

    const data = this.statementForm.getRawValue();
    this.isLoading = true;

    try {
      const res: any = await this.custodyService.create(data).toPromise();
      if (res) {
        this.statements.push(res);
        this.statementsChange.emit(this.statements);
        // Keep statementNo for batch entry but reset others
        const currentStmtNo = this.statementForm.get('statementNo')?.value;
        this.statementForm.reset({
          statementNo: currentStmtNo,
          amount: 0,
          sendToACC: false
        });
        Swal.fire('نجاح', 'تم حفظ السجل بنجاح', 'success');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('خطأ', 'فشل حفظ السجل', 'error');
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
      sendToACC: false
    });
    this.statements = [];
    this.statementsChange.emit([]);
    this.filePreview.emit(null);
    this.selectedIndex = null;
  }

  // ✅ حذف عنصر من الجدول
  deleteStatement(i: number) {
    const stmt = this.statements[i];
    if (stmt.id) {
      Swal.fire({
        title: 'هل أنت متأكد؟',
        text: 'سيتم حذف السجل نهائياً من النظام',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'حذف',
        cancelButtonText: 'إلغاء'
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await this.custodyService.delete(stmt.id!).toPromise();
            this.statements.splice(i, 1);
            this.statementsChange.emit(this.statements);
            Swal.fire('نجاح', 'تم حذف السجل', 'success');
          } catch (err) {
            Swal.fire('خطأ', 'فشل حذف السجل', 'error');
          }
        }
      });
    } else {
      this.statements.splice(i, 1);
      this.statementsChange.emit(this.statements);
    }
  }

  cancel() {
    this.reset();
  }
}
