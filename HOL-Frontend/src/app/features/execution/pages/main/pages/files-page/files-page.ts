import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-files-page',
  imports: [CommonModule,FormsModule],
  templateUrl: './files-page.html',
  styleUrl: './files-page.css'
})
export class FilesPage {
showUploadModal = false;

  files = [
    { name: 'عقد إيجار 2025', type: 'PDF', date: '2025-11-01', note: 'تم الرفع من قسم العقود' },
    { name: 'كشف حساب', type: 'Excel', date: '2025-10-28', note: 'خاص بالإدارة المالية' },
  ];

  newFile = {
    name: '',
    type: '',
    note: '',
    fileData: null as File | null,
  };

  openUploadModal() {
    this.showUploadModal = true;
  }

  closeUploadModal() {
    this.showUploadModal = false;
    this.newFile = { name: '', type: '', note: '', fileData: null };
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) this.newFile.fileData = file;
  }

  uploadFile() {
    if (!this.newFile.name || !this.newFile.type || !this.newFile.fileData) return;

    const today = new Date().toISOString().split('T')[0];
    this.files.unshift({
      name: this.newFile.name,
      type: this.newFile.type,
      date: today,
      note: this.newFile.note,
    });

    this.closeUploadModal();
  }

  removeFile(file: any) {
    this.files = this.files.filter((f) => f !== file);
  }
}
