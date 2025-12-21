import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-justice-portal-form',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './justice-portal-form.html',
  styleUrl: './justice-portal-form.css'
})
export class JusticePortalForm {
@ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      code: [''],
      client: [''],
      opponent: [''],
      civil: [''],
      autoNumber: [''],
      rightNotes: [''],
      leftNotes: ['']
    });
  }

  open() {
    this.modal.nativeElement.showModal();
  }

  close() {
    this.modal.nativeElement.close();
  }

  submit() {
    console.log('Form submitted:', this.form.value);
  }
}
