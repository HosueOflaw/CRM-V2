import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lookup-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './lookup-modal.html',
  styleUrl: './lookup-modal.css'
})
export class LookupModal {
  @ViewChild('lookupModal') lookupModal!: ElementRef<HTMLDialogElement>;
  @Input() title = '';
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Output() itemSelected = new EventEmitter<any>();

  search = '';
  filteredData: any[] = [];

  open() {
    this.filteredData = [...this.data];
    this.lookupModal.nativeElement.showModal();
  }

  close() {
    this.lookupModal.nativeElement.close();
  }

  filterData() {
    const q = this.search.toLowerCase();
    this.filteredData = this.data.filter(d =>
      Object.values(d).some(v => String(v).toLowerCase().includes(q))
    );
  }

  selectItem(item: any) {
    this.itemSelected.emit(item);
    this.close();
  }
}
