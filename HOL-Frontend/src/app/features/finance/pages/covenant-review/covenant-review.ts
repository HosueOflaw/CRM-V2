import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import { UserService } from '../../../../services/user.service';
import { CustodyService, CustodyStatement } from '../../../../services/custody.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-covenant-review',
  standalone: true,
  imports: [CommonModule, FormsModule, LookupModal],
  templateUrl: './covenant-review.html',
  styleUrl: './covenant-review.css'
})

export class CovenantReview implements OnInit {
  employeeSearch = '';
  selectedUser: any = null;
  rows: CustodyStatement[] = [];

  @ViewChild('lookup') lookup!: LookupModal;

  lookupConfig = {
    title: 'اختر الموظف',
    columns: ['الرقم', 'الاسم'],
    data: [] as any[],
    targetField: 'fullName'
  };

  constructor(
    private userService: UserService,
    private custodyService: CustodyService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (users: any[]) => {
        this.lookupConfig.data = users.map(u => ({
          id: u.id,
          fullName: u.fullName || u.userName,
          ...u
        }));
      },
      error: (err) => console.error('Error loading users', err)
    });
  }

  openModal() {
    this.lookup.open();
  }

  handleSelect(item: any) {
    this.selectedUser = item;
    this.employeeSearch = item.fullName;
  }

  fetchData() {
    if (!this.selectedUser) {
      Swal.fire('تنبيه', 'يرجى اختيار موظف أولاً', 'warning');
      return;
    }

    this.custodyService.getByUserId(this.selectedUser.id).subscribe({
      next: (data) => {
        this.rows = data;
      },
      error: (err) => {
        console.error('Error fetching custody statements', err);
        Swal.fire('خطأ', 'فشل في جلب البيانات', 'error');
      }
    });
  }

  viewAttachment(attachment: any) {
    if (!attachment || !attachment.fileContent) {
      Swal.fire('تنبيه', 'المرفق غير متوفر', 'info');
      return;
    }

    try {
      const byteCharacters = atob(attachment.fileContent);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      const fileURL = URL.createObjectURL(blob);
      window.open(fileURL, '_blank');
    } catch (e) {
      console.error('Error previewing PDF', e);
      Swal.fire('خطأ', 'حدث خطأ أثناء عرض الملف', 'error');
    }
  }

  get totalAmount() {
    return this.rows.reduce((sum, r) => sum + (r.amount || 0), 0);
  }
}
