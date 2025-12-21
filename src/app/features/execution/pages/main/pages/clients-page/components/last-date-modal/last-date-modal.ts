import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-modal',
  imports: [FormsModule],
  standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './last-date-modal.html',
  styleUrl: './last-date-modal.css'
})
export class DateModal {
  
   @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
  @Output() nextStep = new EventEmitter<void>();
  selectedDate: string = '';
  @Output() dateSelected = new EventEmitter<string>();


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
