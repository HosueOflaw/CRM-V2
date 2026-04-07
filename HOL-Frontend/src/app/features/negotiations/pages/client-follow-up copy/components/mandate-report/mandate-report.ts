import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, NO_ERRORS_SCHEMA, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mandate-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mandate-report.html',
  styleUrl: './mandate-report.css',
  encapsulation: ViewEncapsulation.None,
  schemas: [NO_ERRORS_SCHEMA]
})
export class MandateReport {
  @Input() clientData: any = {};
  @Input() isPreview: boolean = false;
  @Output() close = new EventEmitter<void>();

  // Format date as M/d/yyyy to match TAKLEF.html (e.g., 3/31/2026)
  currentDate: string = new Date().toLocaleDateString('en-US');

  lawFirmName: string = "بيت القانون للمحاماة والاستشارات القانونية";
  lawFirmAddress: string = "شارع أحمد الجابر، برج وذرة، الدورين 3 & 6، شرق - الكويت";
  lawFirmPhone: string = "1818180";

  // Helper function to handle printing
  printDocument() {
    window.print();
  }
}
