  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import * as XLSX from 'xlsx';
  import { NgxPaginationModule } from 'ngx-pagination';

  @Component({
    selector: 'app-upload-excel',
    imports: [CommonModule,FormsModule,NgxPaginationModule],
    templateUrl: './upload-excel.html',
    styleUrl: './upload-excel.css'
  })
  export class UploadExcel {
  excelData: any[] = [];
    displayedColumns: string[] = [];
    allSelected = false;
    searchText = '';
    currentPage = 1;
    pageSize = 10;
    options = ['خيار 1','خيار 2','خيار 3'];
    selectedOption = '';

    onFileChange(event: any) {
      const target: DataTransfer = <DataTransfer>(event.target);
      if (!target.files.length) return;

      const file = target.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        const data: any[] = XLSX.utils.sheet_to_json(ws, { defval: '' });

        this.excelData = data.map((row: Record<string, any>) => ({ ...row, selected: false }));


        if (data.length) this.displayedColumns = Object.keys(data[0]);
      };

      reader.readAsBinaryString(file);
    }

    toggleAll() {
      this.excelData.forEach(row => row.selected = this.allSelected);
    }

    filteredData() {
      if (!this.searchText) return this.excelData;
      return this.excelData.filter(row =>
        this.displayedColumns.some(col =>
          String(row[col]).toLowerCase().includes(this.searchText.toLowerCase())
        )
      );
    }

    confirmSelected() { console.log('Confirm', this.excelData.filter(r => r.selected)); }
    unconfirmSelected() { console.log('UnConfirm', this.excelData.filter(r => r.selected)); }
    deleteSelected() { this.excelData = this.excelData.filter(r => !r.selected); }
    editSelected() { console.log('Edit', this.excelData.filter(r => r.selected)); }
    saveSelected() { console.log('Save', this.excelData.filter(r => r.selected)); }

  }
