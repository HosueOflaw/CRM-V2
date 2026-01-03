import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-waiting-clients',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './waiting-clients.html',
  styleUrl: './waiting-clients.css'
})
export class WaitingClients {
 searchTerm: string = '';
filteredClients: any[] = [];

 waitingClients: any[] = [
    {
      code: 'A001',
      name: 'محمد علي',
      batchNumber: 'B123',
      reason: 'تأخير السداد',
      client: 'موكل 1',
      employeeName: 'موظف 1',
      status: 'نشط',
      claimValue: 1500,
      paid: 500,
      remaining: 1000,
      nationality: 'سعودي',
      civilNumber: '1234567890',
      notes: 'لا توجد ملاحظات',
      employee: 'موظف 1',
      clientCode: 'C001',
      legalClaimant: 'المدعي القانوني 1'
    },
    {
      code: 'B002',
      name: 'سارة حسن',
      batchNumber: 'B124',
      reason: 'تأخير جزئي',
      client: 'موكل 2',
      employeeName: 'موظف 2',
      status: 'نشط',
      claimValue: 2000,
      paid: 1500,
      remaining: 500,
      nationality: 'كويتي',
      civilNumber: '0987654321',
      notes: 'تم التواصل',
      employee: 'موظف 2',
      clientCode: 'C002',
      legalClaimant: 'المدعي القانوني 2'
    }
  ];


ngOnInit() {
  this.filteredClients = this.waitingClients;
}

filterClients() {
  const term = this.searchTerm.trim().toLowerCase();
  this.filteredClients = this.waitingClients.filter(c =>
    c.code.toLowerCase().includes(term) || 
    c.name.toLowerCase().includes(term)
  );}
}
