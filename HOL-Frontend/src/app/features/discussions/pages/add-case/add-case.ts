import { Component } from '@angular/core';
import { CaseForm } from '../../components/case-form/case-form';
import { CasePartiesTable } from '../../components/case-parties-table/case-parties-table';
import {  RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-case',
  imports: [CaseForm,CasePartiesTable,RouterOutlet],
  templateUrl: './add-case.html',
  styleUrl: './add-case.css'
})
export class AddCase {
  showTransferTabs = false;

  onOpenTransfer() {
    this.showTransferTabs = true; 
  }
}
