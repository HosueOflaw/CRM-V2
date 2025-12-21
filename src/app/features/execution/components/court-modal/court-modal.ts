import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-court-modal',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './court-modal.html',
  styleUrl: './court-modal.css'
})
export class CourtModal {
  @ViewChild('courtModal') courtModal!: ElementRef<HTMLDialogElement>;
  @Output() courtSelected = new EventEmitter<string>();

  courtSearch = '';
  courts = [
    { name: 'محكمة الجنايات الكبرى', city: 'الكويت', type: 'جنائية' },
    { name: 'محكمة الأسرة', city: 'الفروانية', type: 'مدنية' },
    { name: 'محكمة التنفيذ', city: 'حولي', type: 'مدنية' },
  ];
  filteredCourts = [...this.courts];

  open() {
    this.filteredCourts = [...this.courts];
    this.courtModal.nativeElement.showModal();
  }

  close() {
    this.courtModal.nativeElement.close();
  }

  filterCourts() {
    const query = this.courtSearch.toLowerCase();
    this.filteredCourts = this.courts.filter(c => c.name.toLowerCase().includes(query));
  }

  selectCourt(court: any) {
    this.courtSelected.emit(court.name);
    this.close();
  }
}
