import { Component, ViewChild } from '@angular/core';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Client {
  id: number;
  name: string;
}

interface Record {
  id: number;
  code: string;
  expense: string;
  amount: number;
  client: string;
  employee: string;
  date: string;
  arhdaNumber: string;
  defendantName: string;
  autoNumber: string;
  civilNumber: string;
}

@Component({
  selector: 'app-office-not-load',
  imports: [LookupModal,FormsModule,CommonModule],
  templateUrl: './office-not-load.html',
  styleUrl: './office-not-load.css'
})
export class OfficeNotLoad {
@ViewChild('lookup') lookup!: LookupModal;

  // Lookup الموكل
  selectedClient: Client | null = null;
  clients: Client[] = [
    { id: 1, name: 'أحمد محمد' },
    { id: 2, name: 'سارة علي' },
  ];
  clientColumns = ['id', 'name'];



  // بيانات الجدول
  data: Record[] = [
    {
      id: 1, code: '001', expense: 'مصاريف', amount: 500,
      client: 'أحمد محمد', employee: 'محمد حسن', date: '2025-11-16',
       arhdaNumber: 'A001', defendantName: 'الخصم 1',
      autoNumber: '1001', civilNumber: '123456'
    },
    {
      id: 2, code: '002', expense: 'مصاريف', amount: 300,
      client: 'سارة علي', employee: 'علي محمود', date: '2025-11-15',
      arhdaNumber: 'A002', defendantName: 'الخصم 2',
      autoNumber: '1002', civilNumber: '654321'
    }
  ];

  // فتح Lookup
  openLookup() {
    this.lookup.open();
  }

  // عند اختيار الموكل
  onClientSelected(client: Client) {
    this.selectedClient = client;
  }

  // البحث
  search() {
    this.data = this.data.filter(d =>
      (!this.selectedClient || d.client === this.selectedClient.name) 
    );
  }

  // استعلام على الكل
  getAll() {
    // هنا استرجع كل البيانات من الـ API أو reset للمثال الحالي
    // حالياً نعيد بيانات ثابتة
    this.data = [
      {
        id: 1, code: '001', expense: 'مصاريف', amount: 500,
        client: 'أحمد محمد', employee: 'محمد حسن', date: '2025-11-16',
        arhdaNumber: 'A001', defendantName: 'الخصم 1',
        autoNumber: '1001', civilNumber: '123456'
      },
      {
        id: 2, code: '002', expense: 'مصاريف', amount: 300,
        client: 'سارة علي', employee: 'علي محمود', date: '2025-11-15',
         arhdaNumber: 'A002', defendantName: 'الخصم 2',
        autoNumber: '1002', civilNumber: '654321'
      }
    ];
  }
}
