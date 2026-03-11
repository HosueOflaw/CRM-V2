import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateClientDto } from '../../../../../../../finance/services/ClientService';

@Component({
  selector: 'app-claim-value',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './claim-value.html',
  styleUrl: './claim-value.css'
})
export class ClaimValue {
  @Input() client!: CreateClientDto;
  claims = [
    { statement: 'مطالبة بأتعاب محاماة', amount: 250.0 },
    { statement: 'مطالبة بتعويض مادي', amount: 1200.5 },
    { statement: 'مطالبة بمصاريف قضائية', amount: 480.75 },
  ];

  newClaim = {
    statement: '',
    amount: 0,
  };

  addClaim() {
    this.claims.push({ ...this.newClaim });
    this.newClaim = { statement: '', amount: 0 };
  }

  openClaim(claim: any) {
    alert(`تم فتح المطالبة:\n\n${claim.statement}\nالمبلغ: ${claim.amount} د.ك`);
  }
}
