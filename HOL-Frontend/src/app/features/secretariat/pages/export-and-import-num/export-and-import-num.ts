import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// استيراد logAction الحقيقي من ActionsPage
function logAction(message: string): void {
  console.log("LOG:", message);
}

@Component({
  selector: 'app-export-and-import-num',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './export-and-import-num.html',
  styleUrl: './export-and-import-num.css'
})
export class ExportAndImportNum {

  entity = signal<string>('');
  faxNumber = signal<string>('Re O/1642/2025');
  subject = signal<string>('رسالة رسمية');
  date = signal<string>('2025-11-25');
  notes = signal<string>('');

  constructor() {
    // لو التاريخ فاضي، نحط تاريخ اليوم
    if (!this.date()) {
      this.date.set(new Date().toISOString().split('T')[0]);
    }
  }

  // دالة الحفظ
  onSave(): void {
    logAction('حفظ البيانات');

    alert('تم محاكاة عملية الحفظ بنجاح! تحقق من Console لرؤية البيانات.');

    console.log('Saving data:', {
      entity: this.entity(),
      faxNumber: this.faxNumber(),
      subject: this.subject(),
      date: this.date(),
      notes: this.notes()
    });
  }

  // دالة تفريغ الحقول
  onNew(): void {
    logAction('تفريغ النموذج (جديد)');

    this.entity.set('');
    this.faxNumber.set('');
    this.subject.set('');
    this.date.set(new Date().toISOString().split('T')[0]);
    this.notes.set('');

    alert('تم تفريغ النموذج بنجاح!');
  }
}
