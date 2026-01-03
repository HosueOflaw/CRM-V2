import { CommonModule } from '@angular/common';
import { Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transfer-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './transfer-search.html',
  styleUrl: './transfer-search.css'
})
export class TransferSearch {
// الوصول إلى المودال Lookup (للمحاكاة)
  // يجب أن يكون هذا مرجعاً لمكون LookupModalComponent الحقيقي
  @ViewChild('clientLookup') lookupModal!: any; // نستخدم any هنا للتوافق في بيئة الكانفاس

  // حالة التبويبات العلوية (لم يحول / تم التحويل)
  activeStatusTab = signal<'pending' | 'transferred'>('pending');
  
  // نموذج البحث
  searchForm = {
    amountFilter: 'none', // 'none', 'less_than_50', 'less_than_100'
    dateFilter: 'none', // 'none', 'all_time', 'specific'
    specificDate: '2025-12-15',
    targetAmount: 0,
    searchQuery: '',
    selectedClient: '' // لتخزين اسم الموكل المختار
  };

  // بيانات الفلاتر المعقدة (المربعات المحددة)
  complexFilters = [
    { label: 'أقل من 100 وأكثر من 50', active: false, filterKey: 'range1' },
    { label: 'أقل من 50', active: false, filterKey: 'less_50' },
    { label: 'الإجمالي بالكامل', active: false, filterKey: 'total' },
    { label: 'أقل من 100', active: false, filterKey: 'less_100' },
  ];

  // نتائج الجدول
  transferRows = signal<any[]>([]);

  // بيانات وهمية للموكلين للـ Lookup
  clientsData = [
    { code: 'C101', name: 'الشركة الوطنية', type: 'مؤسسة' },
    { code: 'C102', name: 'بنك الخليج', type: 'بنك' },
    { code: 'C103', name: 'مؤسسة الأمان', type: 'مؤسسة' },
  ];


  ngOnInit(): void {
    this.generateMockData();
  }
  
  generateMockData() {
    this.transferRows.set([
      { id: 1, name: 'تحويل نقدي', amount: 65, date: '2025-12-01', user: 'Admin' },
      { id: 2, name: 'رسوم خدمة', amount: 40, date: '2025-12-05', user: 'Admin' },
      { id: 3, name: 'مصاريف إدارية', amount: 120, date: '2025-12-10', user: 'Admin' },
    ]);
  }

  toggleFilter(filter: any) {
    filter.active = !filter.active;
    this.runQuery();
  }

  // ===========================================
  // وظائف الـ Lookup
  // ===========================================
  openClientLookup() {
    if (this.lookupModal) {
      // إعداد بيانات المودال وفتحه
      this.lookupModal.title = 'بحث عن الموكل';
      this.lookupModal.columns = ['code', 'name', 'type'];
      this.lookupModal.data = this.clientsData;
      this.lookupModal.open();
    } else {
      console.warn("Lookup Modal is not accessible (Missing ViewChild or component).");
    }
  }

  onClientSelected(client: any) {
    // تحديث حقل البحث باسم الموكل المختار
    this.searchForm.selectedClient = client.name;
    this.runQuery();
  }
  
  // ===========================================
  // وظيفة رفع الإكسل
  // ===========================================
  uploadExcel(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
        const file = input.files[0];
        console.log('File selected for upload:', file.name);
        // *منطق قراءة ومعالجة ملف Excel هنا*
        // يمكن تصفير قيمة الـ input لتمكين اختيار نفس الملف مرة أخرى
        input.value = ''; 
    }
  }

  // ===========================================
  // وظيفة البحث الرئيسية (الاستعلام)
  // ===========================================
  runQuery() {
    console.log('Running query with status:', this.activeStatusTab());
    console.log('Filters:', this.complexFilters.filter(f => f.active));
    console.log('Search Text:', this.searchForm.searchQuery);
    console.log('Selected Client:', this.searchForm.selectedClient);

    // *منطق البحث الفعلي هنا*
    let results = this.transferRows();
    if (this.activeStatusTab() === 'pending') {
      results = results.filter(row => row.amount < 1000); 
    } else {
      results = results.filter(row => row.amount > 0);
    }

    this.transferRows.set(results); 
  }

  exportExcel() {
    console.log('Exporting current table results to Excel...');
    // منطق تصدير Excel هنا
  }
}
