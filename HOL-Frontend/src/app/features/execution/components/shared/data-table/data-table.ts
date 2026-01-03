import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { GoBack } from '../../../../../shared/components/go-back/go-back';
import { CommonModule } from '@angular/common';
import { LookupModal } from '../../../../../shared/components/lookup-modal/lookup-modal';

@Component({
  selector: 'app-data-table',
  imports: [GoBack,CommonModule, FormsModule, ReactiveFormsModule,LookupModal],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css'
})
export class DataTable {
 @ViewChild('lookup') lookup!: LookupModal;

  @Input() title = '';
  @Input() filterLabel = '';
  @Input() searchPlaceholder = '';
  @Input() columns: { header: string; field: string }[] = [];
  @Input() data: any[] = [];
  @Input() lookupConfig: {
    title: string;
    columns: string[];
    data: any[];
    targetField: string;
  } = { title: '', columns: [], data: [], targetField: '' };

  filterForm!: FormGroup;
  filteredResults: any[] = [];
  searchText = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      court: ['']
    });

    this.filteredResults = [...this.data];
  }

  openModal() {
    this.lookup.open();
  }

  handleSelect(item: any) {
    this.filterForm.patchValue({
      court: item[this.lookupConfig.targetField]
    });
  }

  searchByCourt() {
    const { court } = this.filterForm.value;
    this.filteredResults = this.data.filter(r =>
      court ? r.court === court : true
    );
  }

  exportToExcel() {
    const ws = XLSX.utils.json_to_sheet(this.filteredResults);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet');
    XLSX.writeFile(wb, `${this.title}.xlsx`);
  }

  reset() {
    this.filterForm.reset();
    this.searchText = '';
    this.filteredResults = [...this.data];
  }

  autoSearch() {
    const q = this.searchText.toLowerCase();
    this.filteredResults = this.data.filter(r =>
      Object.values(r).some(val => String(val).toLowerCase().includes(q))
    );
  }
}
