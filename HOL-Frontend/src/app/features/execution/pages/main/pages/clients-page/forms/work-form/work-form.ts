import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateClientDto } from '../../../../../../../finance/services/ClientService';

@Component({
  selector: 'app-work-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './work-form.html',
  styleUrl: './work-form.css'
})
export class WorkForm {
  @Input() client!: CreateClientDto;

  save() {
    console.log('تم حفظ بيانات جهة العمل:', this.client.work);
  }

  cancel() {
    console.log('تم إلغاء / إخلاء البيانات');
  }
}
