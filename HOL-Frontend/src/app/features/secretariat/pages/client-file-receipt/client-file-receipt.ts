import { Component, ViewChild } from '@angular/core';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-file-receipt',
  imports: [CommonModule, FormsModule, LookupModal],
  templateUrl: './client-file-receipt.html',
  styleUrl: './client-file-receipt.css'
})
export class ClientFileReceipt {
 
  // الوصول للمودال
  @ViewChild('clientLookup') clientLookup!: LookupModal;

  // المتغيرات
  selectedClientName: string = '';
  searchText: string = '';

  // بيانات الموكلين (وهمية)
  clientsData = [
    { code: 'C-1001', name: 'الشركة الوطنية للاتصالات', type: 'شركات' },
    { code: 'C-1002', name: 'بنك الكويت الوطني', type: 'بنوك' },
    { code: 'C-1003', name: 'مؤسسة التمويل الحديثة', type: 'مؤسسات' },
    { code: 'C-1004', name: 'شركة السيارات المتحدة', type: 'شركات' },
    { code: 'C-1005', name: 'بيت التمويل الكويتي', type: 'بنوك' },
  ];

  // فتح نافذة البحث
  openClientModal() {
    this.clientLookup.open();
  }

  // عند اختيار موكل
  onClientSelected(client: any) {
    this.selectedClientName = client.name;
    console.log('تم اختيار الموكل:', client);
  }

  // دوال الأزرار
  search() {
    console.log('جاري البحث عن:', this.selectedClientName);
  }

  receiveFiles() {
    console.log('تم استلام الملفات...');
  }
}
