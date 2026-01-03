import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mandate-report',
  imports: [CommonModule],
  templateUrl: './mandate-report.html',
  styleUrl: './mandate-report.css'
})
export class MandateReport {
@Input() clientData: any = {};
  
  // Dummy data for the document content
  currentDate: string = new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: '2-digit', day: '2-digit' });
  lawFirmName: string = "بيت القانون للمحاماة والاستشارات القانونية";
  lawFirmAddress: string = "شارع أحمد الجابر، برج وذرة، الدورين 3 & 6، شرق - الكويت";
  lawFirmPhone: string = "1818180";
  
  // Helper function to handle printing
  printDocument() {
    window.print();
  }
}
