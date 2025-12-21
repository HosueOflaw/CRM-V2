import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Status = 'pending' | 'uploaded';


@Component({
  selector: 'app-upload-status',
  imports: [CommonModule],
  templateUrl: './upload-status.html',
  styleUrl: './upload-status.css'
})


export class UploadStatus {
 activeStatus: Status = 'pending';

  tableData: Record<Status, any[]> = {
    pending: [
      { id: 1, name: 'ملف 1', date: '2025-11-08', notes: 'قيد الرفع' },
      { id: 2, name: 'ملف 2', date: '2025-11-08', notes: 'قيد الرفع' },
    ],
    uploaded: [
      { id: 3, name: 'ملف 3', date: '2025-11-07', notes: 'تم الرفع' },
      { id: 4, name: 'ملف 4', date: '2025-11-06', notes: 'تم الرفع' },
    ],
  };

  get activeTableData() {
    return this.tableData[this.activeStatus];
  }

  filterStatus(status: Status) {
    this.activeStatus = status;
  }
}
