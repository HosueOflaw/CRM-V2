import { Component, ViewChild } from '@angular/core';
import { LookupModal } from "../../../../shared/components/lookup-modal/lookup-modal";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custody-search',
  imports: [LookupModal,FormsModule,CommonModule],
  templateUrl: './custody-search.html',
  styleUrl: './custody-search.css'
})
export class CustodySearch {

  // للوصول إلى مكون Lookup Modal
  @ViewChild('lookupModal') lookupModal!: LookupModal;

  // متغيرات البحث
  selectedClientCode: string = '';
  selectedClientName: string = '';
  selectedConsultant: string = 'المستشار فهد'; // للمحاكاة

  // بيانات وهمية للموكلين ليتم عرضها في Lookup Modal
  clientsData = [
    { code: 'C101', name: 'الشركة الوطنية', type: 'مؤسسة' },
    { code: 'C102', name: 'بنك الخليج', type: 'بنك' },
    { code: 'C103', name: 'مؤسسة الأمان', type: 'مؤسسة' },
  ];

  // بيانات جدول العهد (وهمية)
  custodyRows: any[] = [];

  ngOnInit(): void {
    // تحميل البيانات الافتراضية للجدول
    this.custodyRows = this.generateMockCustodies();
  }

  generateMockCustodies() {
    return [
      { id: 1, date: '2025-11-01', type: 'شيك', amount: 5000, client: 'الوطنية', user: 'أحمد' },
      { id: 2, date: '2025-10-15', type: 'نقدي', amount: 1500, client: 'بنك الخليج', user: 'سارة' },
      { id: 3, date: '2025-09-20', type: 'تحويل', amount: 8000, client: 'مؤسسة الأمان', user: 'محمد' },
    ];
  }

  // ===================================
  // دوال الـ Lookup
  // ===================================
  openClientLookup() {
    // فتح المودال وتمرير بيانات الموكلين له
    this.lookupModal.title = 'بحث عن الموكل';
    this.lookupModal.columns = ['code', 'name', 'type'];
    this.lookupModal.data = this.clientsData;
    this.lookupModal.open();
  }

  onClientSelected(client: any) {
    this.selectedClientCode = client.code;
    this.selectedClientName = client.name;
    this.searchCustodies(); // البحث بعد اختيار الموكل
  }

  // ===================================
  // دوال البحث
  // ===================================
  searchCustodies() {
    console.log(`Searching custodies for client: ${this.selectedClientName} on consultant: ${this.selectedConsultant}`);
    // هنا يتم تطبيق منطق البحث الفعلي لملء custodyRows
    // (للتجربة: سنقوم بتحديث بسيط للجدول)
    this.custodyRows = this.custodyRows.filter(row => 
      row.client.includes(this.selectedClientName) || !this.selectedClientName
    );
  }
}
