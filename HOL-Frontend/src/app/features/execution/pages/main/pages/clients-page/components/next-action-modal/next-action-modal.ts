import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-next-action-modal',
  imports: [CommonModule, FormsModule],
  standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './next-action-modal.html',
  styleUrl: './next-action-modal.css'
})
export class NextActionModal {
 @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
  @Output() actionSelected = new EventEmitter<string>();


  actions = [
    { id: 1, name: 'تسليم مستندات' },
    { id: 2, name: 'متابعة جلسة' },
    { id: 3, name: 'تنفيذ حكم' },
  ];

  selectedActionId: number | null = null;
  selectedRow: any = null;

  dataMap: Record<number, any[]> = {
    1: [
      { id: 401, desc: 'تسليم مستندات التنفيذ', officer: 'محمد عادل' },
    ],
    2: [
      { id: 501, desc: 'جلسة 10 نوفمبر', officer: 'سالم يوسف' },
      { id: 502, desc: 'جلسة 25 نوفمبر', officer: 'بدر ناصر' },
    ],
    3: [
      { id: 601, desc: 'متابعة التنفيذ الميداني', officer: 'سعيد ماجد' },
    ],
  };

  get selectedData() {
    return this.selectedActionId ? this.dataMap[this.selectedActionId] : [];
  }

  open() {
    this.modal.nativeElement.showModal();
  }

  close() {
    this.modal.nativeElement.close();
  }
  
selectRow(row: any) {
  this.actionSelected.emit(row.desc);
  this.close();
}
}
