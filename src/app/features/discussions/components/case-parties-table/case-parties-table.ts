import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-case-parties-table',
  imports: [FormsModule,CommonModule],
  templateUrl: './case-parties-table.html',
  styleUrl: './case-parties-table.css'
})
export class CasePartiesTable {
    @Input() showTransferTabs = false;

parties = [
    { code: 101, name: 'أحمد علي', role: 'مدعي' , status : 'تنفيذ' },
    { code: 102, name: 'فهد سعود', role: 'مدعى عليه', status: 'تنفيذ' },
  ];
  selectedTab: string = 'parties';

  fees = [
    { expense: 'أتعاب محاماة', amount: 150, reportNumber: '12345', date: new Date() },
    { expense: 'رسوم المحكمة', amount: 200, reportNumber: '67890', date: new Date() },
  ];
}
