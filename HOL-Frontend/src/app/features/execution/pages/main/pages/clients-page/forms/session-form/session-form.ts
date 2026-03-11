import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateClientDto } from '../../../../../../../finance/services/ClientService';

@Component({
  selector: 'app-session-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './session-form.html',
  styleUrl: './session-form.css'
})
export class SessionForm {
  @Input() client!: CreateClientDto;
  sessions = [
    {
      name: 'جلسة أولى',
      date: new Date('2025-10-20'),
      status: 'منعقدة',
      type: 'مدنية',
      attachment: 'https://example.com/file1.pdf',
    },
    {
      name: 'جلسة استئناف',
      date: new Date('2025-11-05'),
      status: 'مؤجلة',
      type: 'جنائية',
      attachment: '',
    },
  ];

  newSession: any = {
    name: '',
    date: '',
    status: '',
    type: '',
    attachment: '',
  };

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.newSession.attachment = URL.createObjectURL(file);
    }
  }

  addSession() {
    this.sessions.push({ ...this.newSession });
    this.resetForm();
  }

  resetForm() {
    this.newSession = { name: '', date: '', status: '', type: '', attachment: '' };
    this.selectedFile = null;
  }

  deleteSession(index: number) {
    this.sessions.splice(index, 1);
  }
}
