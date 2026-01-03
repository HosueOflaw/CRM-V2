import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accounts-balances',
  imports: [CommonModule,FormsModule],
  templateUrl: './accounts-balances.html',
  styleUrl: './accounts-balances.css'
})
export class AccountsBalances {

  fromDate: string = '';
  toDate: string = '';
  data: any[] = [];


  search() {

    if (!this.fromDate || !this.toDate) {
      alert("برجاء اختيار التاريخ");
      return;
    }


  }
}
