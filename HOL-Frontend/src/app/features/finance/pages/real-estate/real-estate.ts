import { Component, ViewChild } from '@angular/core';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Company {
  id: number;
  name: string;
}

interface Record {
  selected?: boolean;
  code: string;
  name: string;
  civil: string;
  fileStatus: string;
  reason: string;
  batchNumber: string;
  entryDate: string;
  client: string;
  contract: string;
  autoNumber: string;
  amount: number;
}

@Component({
  selector: 'app-real-estate',
  imports: [LookupModal,FormsModule,CommonModule],
  templateUrl: './real-estate.html',
  styleUrl: './real-estate.css'
})
export class RealEstate {
 @ViewChild('lookup') lookup!: LookupModal;

  // Lookup
  selectedCompanyAdvance: Company | null = null;
  selectedCompanyDelay: Company | null = null;
  companies: Company[] = [
    { id: 1, name: 'شركة A' },
    { id: 2, name: 'شركة B' },
  ];
  companyColumns = ['id', 'name'];

  advanceToDate: string = '';
  amount: number = 0;

  data: Record[] = [
    { code:'001', name:'أحمد', civil:'123456', fileStatus:'مفتوح', reason:'مديونية', batchNumber:'B001', entryDate:'2025-11-16', client:'شركة A', contract:'C001', autoNumber:'1001', amount:500 },
    { code:'002', name:'سارة', civil:'654321', fileStatus:'مغلق', reason:'مديونية', batchNumber:'B002', entryDate:'2025-11-15', client:'شركة B', contract:'C002', autoNumber:'1002', amount:300 }
  ];

  // فتح Lookup حسب نوع البحث
  openLookup(type: 'advance' | 'delay') {
    this.lookup.open();
    this.lookupType = type;
  }

  lookupType: 'advance' | 'delay' = 'advance';

  onCompanySelected(company: Company) {
    if (this.lookupType === 'advance') {
      this.selectedCompanyAdvance = company;
    } else {
      this.selectedCompanyDelay = company;
    }
  }

  searchAdvance() {
    this.data = this.data.filter(d => !this.selectedCompanyAdvance || d.client === this.selectedCompanyAdvance.name);
  }

  searchDelay() {
    this.data = this.data.filter(d => !this.selectedCompanyDelay || d.client === this.selectedCompanyDelay.name);
  }

  claimAdvance() {
    alert('تم المطالبة بالمقدم');
  }

  claimDelay() {
    alert('تم المطالبة بالمؤخر');
  }

  toggleAll(event: any) {
    const checked = event.target.checked;
    this.data.forEach(d => d.selected = checked);
  }
}
