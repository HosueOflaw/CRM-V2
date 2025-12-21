import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-files',
  imports: [RouterModule, CommonModule, LookupModal,FormsModule],
  templateUrl: './upload-files.html',
  styleUrl: './upload-files.css'
})
export class UploadFiles {
@ViewChild(LookupModal) lookup!: LookupModal;

clientList: any[] = [];      
sectors: any[] = [];  
employees:any[] = [];     


selectedClient: string = '';   
selectedSector: string = '';  


openLookup(type: string) {
  if (type === 'client') {
    this.lookup.title = 'اختيار الموكل';
    this.lookup.columns = ['code', 'name'];
    this.lookup.data = this.clientList;
  }

  if (type === 'sector') {
    this.lookup.title = 'اختيار القطاع';
    this.lookup.columns = ['id', 'sectorName'];
    this.lookup.data = this.sectors;
  }

   if (type === 'employee') {
    this.lookup.title = 'اختيار الموظف';
    this.lookup.columns = ['id', 'sectorName'];
    this.lookup.data = this.employees;
  }

  this.lookup.open();
}

// استقبال النتيجة
onItemSelected(item: any) {
  if (this.lookup.title === 'اختيار الموكل') {
    this.selectedClient = item.name;
  }

  if (this.lookup.title === 'اختيار القطاع') {
    this.selectedSector = item.sectorName;
  }
}

}
