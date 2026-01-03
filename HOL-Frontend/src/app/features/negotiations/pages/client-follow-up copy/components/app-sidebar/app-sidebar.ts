import { Component } from '@angular/core';

@Component({
  selector: 'app-app-sidebar',
  imports: [],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.css'
})
export class AppSidebar {
showPrintArea = false;

lawFirmName = 'بيت القانون';
lawFirmPhone = '22223333';
lawFirmAddress = 'الكويت - السالمية';
currentDate = new Date().toLocaleDateString('ar-KW');

clientData = {
  clientName: '',
  agentName: '',
  contractNumber: '',
  claimValue: 0,
  caseNumber: ''
};

// دالة البحث (عند الضغط على زر البحث)
searchClient(searchValue: string) {
  // استدعاء API أو جلب داتا ثابتة للتجربة
  this.clientData = {
    clientName: 'أحمد علي',
    agentName: 'شركة الاتصالات الكويتية',
    contractNumber: '1000173537',
    claimValue: 1250.50,
    caseNumber: '140268930'
  };
}

// دالة عرض الصفحة للطباعة
generateExecutionOrder() {
  if (!this.clientData.clientName) {
    alert('يرجى البحث عن العميل أولاً');
    return;
  }
  this.showPrintArea = true;
  setTimeout(() => {
    window.print();
  }, 100); // طباعة بعد قليل لإظهار الصفحة
}

}
