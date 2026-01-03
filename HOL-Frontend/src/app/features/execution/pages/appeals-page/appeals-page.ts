import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GoBack } from '../../../../shared/components/go-back/go-back';

@Component({
  selector: 'app-appeals-page',
  imports: [CommonModule, FormsModule,GoBack],
  templateUrl: './appeals-page.html',
  styleUrl: './appeals-page.css'
})
export class AppealsPage {
 caseData = {
    code: '',
    clientName: '',
    opponentName: '',
    caseSubject: '',
    caseNumber: '',
    court: '',
    judgmentType: '',
    judgmentDate: '',
    appealDeadline: '',
    reminderDate: '',
    autoNumber: '',
  };

  save() {
    console.log('Saving case:', this.caseData);
    alert('✅ تم حفظ البيانات بنجاح');
  }

  edit() {
    alert('✏️ يمكنك الآن تعديل البيانات');
  }

  delete() {
    const confirmDelete = confirm('هل أنت متأكد من حذف هذه الدعوى؟');
    if (confirmDelete) {
      this.caseData = {
        code: '',
        clientName: '',
        opponentName: '',
        caseSubject: '',
        caseNumber: '',
        court: '',
        judgmentType: '',
        judgmentDate: '',
        appealDeadline: '',
        reminderDate: '',
        autoNumber: '',
      };
      alert('🗑 تم حذف البيانات');
    }
  }
}
