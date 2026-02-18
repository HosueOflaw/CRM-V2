import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attachments-form',
  imports: [CommonModule],
  templateUrl: './attachments-form.html',
  styleUrl: './attachments-form.css'
})
export class AttachmentsForm {
  attachments = [
    {
      action: 'تقديم لائحة اعتراضية',
      date: new Date('2024-10-12'),
      file: 'https://example.com/files/objection.pdf'
    },
    {
      action: 'استلام الحكم الابتدائي',
      date: new Date('2024-11-05'),
      file: 'https://example.com/files/verdict.pdf'
    },
    {
      action: 'تقديم استئناف',
      date: new Date('2024-12-01'),
      file: 'https://example.com/files/appeal.pdf'
    }
  ];

  deleteAttachment(index: number) {
    this.attachments.splice(index, 1);
  }
}
