import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainContent } from "./components/main-content/main-content";
import { AppSidebar } from './components/app-sidebar/app-sidebar';

@Component({
  selector: 'app-client-follow-up',
  standalone:true,
  imports: [FormsModule, CommonModule, AppSidebar, MainContent],
  templateUrl: './client-follow-up.html',
  styleUrl: './client-follow-up.css'
})
export class ClientFollowUp {

  searchQuery = '';
  activeTab = 'main';

  sidebarActions = [
    'تكليف الوفاء', 'فاكس جهة العمل', 'العقد', 'المدنية', 'رسائل',
    'تحديث الملفات', 'استمارة مندوب', 'تارجيت الباتشات', 'صحيفة الدعوي'
  ];

  negotiationMethods = [
    'اتصال','رسالة','واتس اتصال','واتس رسالة','فايبر اتصال','فايبر رسالة','ايمو اتصال','ايمو رسالة','فاكس','ايميل'
  ];

  stats = { totalClients: 0, totalReports: 0, todayReports: 0, monthReports: 0 };

  selectedPerson: any = {
    clientName:'', customerName:'', nationalId:'', status:'', nationality:'', classification:'', contract:'',
    debt:'', autoNumbers:'', batch:'', address:'', clientStatus:'', claimStatus:'', paymentStatus:'', discount:'', acceptance:'', jobType:'', incomeNotes:'', salaryDate:''
  };

  review = { date:'', notes:'' };
  negotiationResult = { status:'' };
  financial = { claimValue:0, fees:0, lawFees:0 };

  // البحث عن شخص
  searchPerson() {
    console.log('بحث عن:', this.searchQuery);
    // TODO: جلب بيانات من API
  }

  // أزرار Sidebar
  performAction(action: string) {
    console.log('أداء إجراء:', action);
  }

  // التفاوض
  selectNegotiation(method: string) {
    console.log('وسيلة التفاوض:', method);
  }

  saveReview() { console.log('حفظ المراجعة'); }
  rollbackReview() { console.log('تراجع المراجعة'); }

  saveClassification() { console.log('حفظ التصنيف'); }
  saveDiscount() { console.log('حفظ الخصم'); }
  saveIncome() { console.log('حفظ مصدر الدخل'); }

  printPage() { window.print(); }
}
