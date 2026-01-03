import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-judgment-form',
  imports: [CommonModule,FormsModule],
  standalone:true,
  templateUrl: './judgment-form.html',
  styleUrl: './judgment-form.css'
})
export class JudgmentForm {
judgments: any[] = [];
  newJudgment: any = {
    statement: '',
    date: '',
    level: '',
    type: '',
    court: '',
    attachment: '',
  };

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // مثال: تحويل الملف إلى URL مؤقت للعرض
      this.newJudgment.attachment = URL.createObjectURL(file);
    }
  }

  addJudgment() {
    this.judgments.push({ ...this.newJudgment });
    this.newJudgment = {
      statement: '',
      date: '',
      level: '',
      type: '',
      court: '',
      attachment: '',
    };
  }

  deleteJudgment(index: number) {
    this.judgments.splice(index, 1);
  }
}
