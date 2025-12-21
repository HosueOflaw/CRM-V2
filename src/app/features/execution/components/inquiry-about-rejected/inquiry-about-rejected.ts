import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StatementForm } from '../shared/statement-form/statement-form';

@Component({
  selector: 'app-inquiry-about-rejected',
  imports: [StatementForm,CommonModule],
  templateUrl: './inquiry-about-rejected.html',
  styleUrl: './inquiry-about-rejected.css'
})
export class InquiryAboutRejected {
  statements: any[] = [];
}
