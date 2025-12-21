import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateModal } from '../last-date-modal/last-date-modal';

@Component({
  selector: 'app-last-action-modal',
  imports: [CommonModule,FormsModule],
  standalone:true,
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './last-action-modal.html',
  styleUrl: './last-action-modal.css'
})
export class LastActionModal {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
  @ViewChild(DateModal) dateModal!: DateModal;

  @Output() actionSelected = new EventEmitter<string>();


  actions = [
    { id: 1, name: 'إجراء تسليم' },
    { id: 2, name: 'إجراء إخطار' },
    { id: 3, name: 'إجراء تنفيذ' },
  ];

  selectedActionId: number | null = null;
  selectedRow: any = null;

  // بيانات تجريبية
  
  dataMap: Record<number, any[]> = {
    1: [
      { id: 101, desc: 'تم التسليم للمدعي', officer: 'محمد علي' },
      { id: 102, desc: 'لم يتم التسليم', officer: 'سلمان عبدالله' },
    ],
    2: [
      { id: 201, desc: 'تم الإخطار بالبريد', officer: 'عبدالعزيز فهد' },
    ],
    3: [
      { id: 301, desc: 'تم التنفيذ الميداني', officer: 'نايف سالم' },
      { id: 302, desc: 'قيد التنفيذ', officer: 'ناصر راشد' },
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
