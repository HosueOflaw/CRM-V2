import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectNameDialogComponent } from '../select-name-dialog-component/select-name-dialog-component';

@Component({
  selector: 'app-classification-model',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule, CommonModule],
  templateUrl: './classification-model.html',
  styleUrl: './classification-model.css',
  providers: [DialogService]
})
export class ClassificationModel {
   form!: FormGroup;
   ref: DynamicDialogRef | undefined;

  categories = [
    { id: 1, name: 'تصنيف إداري' },
    { id: 2, name: 'تصنيف مالي' },
    { id: 3, name: 'تصنيف قضائي' },
  ];

  sectors = [
    { id: 1, name: 'القطاع القانوني' },
    { id: 2, name: 'القطاع الإداري' },
    { id: 3, name: 'القطاع المالي' },
  ];

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService,
    public dialogRef: DynamicDialogRef
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      category: ['', Validators.required],
      sector: ['', Validators.required],
      name: ['', Validators.required],
      code: [{ value: '', disabled: true }],
    });
  }

  openNameDialog() {
    const ref = this.dialogService.open(SelectNameDialogComponent, {
      header: 'اختيار الاسم',
      width: '600px',
      modal: true,
      dismissableMask: false
    });

    if (ref) {
      this.ref = ref;
      ref.onClose.subscribe((result) => {
        if (result) {
          this.form.patchValue({
            name: result.name,
            code: result.code,
          });
        }
      });
    }
  }

  newForm() {
    this.form.reset();
  }

  saveForm() {
    if (this.form.valid) {
      const data = this.form.getRawValue();
      console.log('✅ حفظ البيانات:', data);
      this.dialogRef.close(data);
    }
  }

  updateForm() {
    alert('🔄 تم تعديل البيانات');
  }

  cancelForm() {
    this.dialogRef.close();
  }
}