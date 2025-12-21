import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-organizing-clients',
  imports: [CommonModule,FormsModule],
  templateUrl: './organizing-clients.html',
  styleUrl: './organizing-clients.css'
})
export class OrganizingClients {
 visitType = '';
  client = {
    code: '',
    name: '',
    civilNumber: '',
    transactions: ''
  };

  claimValue = 0;
  totalFees = 0;
  paid = 0;

  get remaining() {
    return (this.claimValue + this.totalFees) - this.paid;
  }

  searchClient() {
    // هنا يمكن ربط البحث بقاعدة البيانات أو API
    console.log('بحث عن العميل:', this.client);
  }

  incrementClaim() {
    this.claimValue += 100; // مثال
  }

  decrementFees() {
    if(this.totalFees > 0) this.totalFees -= 50; // مثال
  }
}
