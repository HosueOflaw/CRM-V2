import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './work-form.html',
  styleUrl: './work-form.css'
})
export class WorkForm {
workForm = {
    name: '',
    address: '',
    militaryNumber: '',
  };

  save() {
    console.log('تم حفظ بيانات جهة العمل:', this.workForm);
    alert('✅ تم حفظ جهة العمل بنجاح');
  }

  cancel() {
    this.workForm = { name: '', address: '', militaryNumber: '' };
    console.log('تم إلغاء / إخلاء البيانات');
  }
}
