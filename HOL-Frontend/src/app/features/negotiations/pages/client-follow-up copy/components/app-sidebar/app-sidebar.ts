import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainfileService } from '../../../../../../services/mainfile.service';

@Component({
  selector: 'app-app-sidebar',
  imports: [FormsModule, CommonModule],
  templateUrl: './app-sidebar.html',
  styleUrl: './app-sidebar.css'
})
export class AppSidebar {
  @Output() search = new EventEmitter<any>();
  @Input() financialData: any = null;
  searchCid = '';
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

  constructor(private mainfileService: MainfileService) { }

  // دالة البحث (عند الضغط على زر البحث)
  searchClient(searchValue: string) {
    if (!searchValue) return;

    this.mainfileService.searchMainfiles(searchValue).subscribe({
      next: (results) => {
        if (results && results.length > 0) {
          const client = results[0]; // Take first result
          this.clientData = {
            clientName: client.name || '',
            agentName: client.nationality || '',
            contractNumber: client.code?.toString() || '',
            claimValue: 0,
            caseNumber: client.cid || ''
          };
          this.search.emit(client);
        } else {
          import('sweetalert2').then(Swal => {
            Swal.default.fire({
              icon: 'info',
              title: 'غير موجود',
              text: 'لم يتم العثور على أي بيانات بهذا الرقم أو الاسم',
              confirmButtonText: 'حسناً',
              customClass: {
                confirmButton: 'btn btn-primary'
              },
              buttonsStyling: false
            });
          });
          this.resetData();
          this.search.emit(null);
        }
      },
      error: (err) => {
        console.error('Search error', err);
      }
    });
  }

  resetData() {
    this.clientData = {
      clientName: '',
      agentName: '',
      contractNumber: '',
      claimValue: 0,
      caseNumber: ''
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
