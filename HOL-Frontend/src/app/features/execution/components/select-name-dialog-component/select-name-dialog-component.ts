import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-select-name-dialog-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-name-dialog-component.html',
  styleUrl: './select-name-dialog-component.css'
})
export class SelectNameDialogComponent {
names = [
    { id: 1, name: 'ملف تنفيذ رقم 123', code: 'EXE-123', lastAction: 'تم القبول' },
    { id: 2, name: 'ملف تنفيذ رقم 456', code: 'EXE-456', lastAction: 'بانتظار الدفع' },
    { id: 3, name: 'ملف تنفيذ رقم 789', code: 'EXE-789', lastAction: 'جاهز للإرسال' },
  ];

  constructor(public ref: DynamicDialogRef) {}

  selectName(item: any) {
    this.ref.close(item);
  }

  close() {
    this.ref.close();
  }
}
