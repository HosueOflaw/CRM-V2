import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-modal',
  imports: [CommonModule, FormsModule],
  templateUrl: './select-modal.html',
  styleUrl: './select-modal.css'
})
export class SelectModal {
  @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;

  // 🔹 عنوان المودال
  @Input() title: string = 'اختيار العنصر';
  
  // 🔹 عناوين الأعمدة
  @Input() columns: { key: string; label: string }[] = [];

  // 🔹 البيانات المعروضة
  @Input() data: any[] = [];

  // 🔹 عند اختيار عنصر
  @Output() itemSelected = new EventEmitter<any>();

  search: string = '';
  filteredData: any[] = [];

  ngOnInit() {
    this.filteredData = [...this.data];
  }

  ngOnChanges() {
    this.filteredData = [...this.data];
  }

  open() {
    this.filteredData = [...this.data];
    this.modal.nativeElement.showModal();
  }

  close() {
    this.modal.nativeElement.close();
  }

  filter() {
    const query = this.search.toLowerCase();
    this.filteredData = this.data.filter(item =>
      Object.values(item).some((val: any) =>
        String(val).toLowerCase().includes(query)
      )
    );
  }

  select(item: any) {
    this.itemSelected.emit(item);
    this.close();
  }
}
