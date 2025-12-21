import { Component, ViewChild } from '@angular/core';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
interface Client {
  id: number;
  name: string;
}

interface Payment {
  id: number;
  code: string;
  name: string;
  reason: string;
  paid: number;
  voucherNumber: string;
  chequeNumber: string;
  paymentDate: string;
  collectionCommission: number;
  collectedAmount: number;
}

interface Fee {
  _id: number;
  code: string;
  name: string;
  amount: number;
  fees: number;
  attachDate: string;
}

@Component({
  selector: 'app-cars',
  imports: [LookupModal,FormsModule,CommonModule],
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {
@ViewChild('lookup') lookup!: LookupModal;

  // Lookup / اختيار الموكل
  selectedClient: Client | null = null;
  clients: Client[] = [
    { id: 1, name: 'أحمد محمد' },
    { id: 2, name: 'سارة علي' },
    { id: 3, name: 'محمود حسن' }
  ];
  clientColumns = ['id', 'name'];

  // التاريخ والبحث
  toDate: string = '';

  // Tabs
  activeTab: 'payments' | 'fees' = 'payments';

  // إجماليات
  totals = {
    company: 0,
    office: 0,
    cheques: 0,
    fees: 0
  };

  // عمولة التحصيل
  collectionCommission: number = 0;

  // بيانات السداد
  payments: Payment[] = [
    { id:1, code:'001', name:'أحمد', reason:'مديونية', paid:500, voucherNumber:'V001', chequeNumber:'C001', paymentDate:'2025-11-16', collectionCommission:50, collectedAmount:550 },
    { id:2, code:'002', name:'سارة', reason:'مديونية', paid:300, voucherNumber:'V002', chequeNumber:'C002', paymentDate:'2025-11-15', collectionCommission:30, collectedAmount:330 }
  ];

  // بيانات الرسوم
  fees: Fee[] = [
    { _id:1, code:'001', name:'أحمد', amount:500, fees:50, attachDate:'2025-11-16' },
    { _id:2, code:'002', name:'سارة', amount:300, fees:30, attachDate:'2025-11-15' }
  ];

  constructor() {
    this.calculateTotals();
  }

  // فتح Lookup
  openLookup() {
    this.lookup.open();
  }

  // عند اختيار الموكل من الـ Lookup
  onClientSelected(client: Client) {
    this.selectedClient = client;
  }

  // البحث
  search() {
    // مثال: تصفية حسب الموكل والتاريخ
    if (this.selectedClient) {
      this.payments = this.payments.filter(p => p.name === this.selectedClient!.name);
      this.fees = this.fees.filter(f => f.name === this.selectedClient!.name);
    }
    if (this.toDate) {
      this.payments = this.payments.filter(p => p.paymentDate <= this.toDate);
      this.fees = this.fees.filter(f => f.attachDate <= this.toDate);
    }
    this.calculateTotals();
  }

  // حساب الإجماليات
  calculateTotals() {
    this.totals.company = this.payments.reduce((sum, p) => sum + p.paid, 0);
    this.totals.office = this.payments.reduce((sum, p) => sum + p.collectedAmount, 0);
    this.totals.cheques = this.payments.reduce((sum, p) => sum + (p.chequeNumber ? 1 : 0), 0);
    this.totals.fees = this.fees.reduce((sum, f) => sum + f.fees, 0);
  }

  // أزرار الفاتورة
  markReviewed() {
    alert('تم مراجعة الفاتورة');
  }

  generateInvoice() {
    alert('تم إنشاء الفاتورة');
  }
}
