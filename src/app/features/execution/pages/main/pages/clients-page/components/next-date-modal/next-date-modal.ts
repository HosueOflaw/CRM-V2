import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-next-date-modal',
  imports: [CommonModule, FormsModule],
  standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './next-date-modal.html',
  styleUrl: './next-date-modal.css'
})
export class NextDateModal {

    @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  @Output() dateSelected = new EventEmitter<string>();

  selectedDate: string = '';

  open() {
    this.modal.nativeElement.showModal();
  }

  close() {
    this.modal.nativeElement.close();
  }
 
  save() {
  this.dateSelected.emit(this.selectedDate);
  this.close();
}
}
