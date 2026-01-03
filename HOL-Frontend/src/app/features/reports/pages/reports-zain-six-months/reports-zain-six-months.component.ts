import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoBack } from '../../../../shared/components/go-back/go-back';

@Component({
  selector: 'app-reports-zain-six-months',
  imports: [RouterModule, CommonModule, GoBack],
templateUrl: './reports-zain-six-months.component.html',
styleUrls: ['./reports-zain-six-months.component.css']
})
export class ReportsZainSixMonths {

  dataLoaded = false;
  tableData: any[] = [];

  onSelectType(type: 'KW' | 'NK') {
    this.dataLoaded = true;
    // 🔸 Placeholder data until backend is connected
    this.tableData = [
      { name: `${type} - العميل الأول`, value: 100 },
      { name: `${type} - العميل الثاني`, value: 200 },
      { name: `${type} - العميل الثالث`, value: 300 },
    ];
  }
}
