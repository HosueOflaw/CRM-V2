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
  isLoading = false;

  // Pagination
  currentPage = 1;
  pageSize = 10;
  totalCount = 0;
  Math = Math;

  // Filters
  fromDate: string = '';
  toDate: string = '';
  statusFilter: string = ''; // '', 'true', 'false'
  searchText: string = '';

  @ViewChild('lookup') lookup!: LookupModal;

  lookupConfig = {
    title: 'اختر الموظف',
    columns: ['id', 'fullName'],
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

    this.isLoading = true;
    const filters = {
      fromDate: this.fromDate,
      toDate: this.toDate,
      isReceived: this.statusFilter
    };

    this.custodyService.getByUserId(this.selectedUser.id, this.currentPage, this.pageSize, filters).subscribe({
      next: (res: any) => {
        // Handle both old array format and new paginated object format
        if (Array.isArray(res)) {
          this.rows = res;
          this.totalCount = res.length;
        } else {
          this.rows = res.items || [];
          this.totalCount = res.totalCount || 0;
        }
        this.isLoading = false;
      },
      error: (err: any) => {
        console.error('Error fetching custody statements', err);
        Swal.fire('خطأ', 'فشل في جلب البيانات', 'error');
        this.isLoading = false;
      }
    });
  }

  getReceivedCount() {
    return this.rows.filter(r => r.receiveAcc).length;
  }

  get totalAmount() {
    return this.rows.reduce((sum, r) => sum + (r.amount || 0), 0);
  }

  resetFilters() {
    this.fromDate = '';
    this.toDate = '';
    this.statusFilter = '';
    this.searchText = '';
    this.currentPage = 1;
    this.rows = [];
    this.totalCount = 0;
    this.selectedUser = null;
    this.employeeSearch = '';
  }

  // Check if employee is selected before allowing filter changes
  validateSelection() {
    if (!this.selectedUser) {
      Swal.fire('تنبيه', 'يرجى اختيار الموظف أولاً لتتمكن من استخدام الفلاتر', 'warning');
      return false;
    }
    return true;
  }

  // Local filtering for search text, status, and dates
  get filteredRows() {
    let filtered = [...this.rows];

    // Status Filter
    if (this.statusFilter === 'true') {
      filtered = filtered.filter(r => r.receiveAcc === true);
    } else if (this.statusFilter === 'false') {
      filtered = filtered.filter(r => r.receiveAcc === false);
    }

    // Date Filter
    if (this.fromDate) {
      const from = new Date(this.fromDate);
      from.setHours(0, 0, 0, 0);
      filtered = filtered.filter(r => r.dateAdded && new Date(r.dateAdded) >= from);
    }
    if (this.toDate) {
      const to = new Date(this.toDate);
      to.setHours(23, 59, 59, 999);
      filtered = filtered.filter(r => r.dateAdded && new Date(r.dateAdded) <= to);
    }

    // Search Text
    if (this.searchText) {
      const search = this.searchText.toLowerCase();
      filtered = filtered.filter(r => 
        (r.statementNo && r.statementNo.toLowerCase().includes(search)) ||
        (r.clientName && r.clientName.toLowerCase().includes(search)) ||
        (r.personName && r.personName.toLowerCase().includes(search))
      );
    }

    return filtered;
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.totalCount / this.pageSize)) {
      this.currentPage++;
      this.fetchData();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchData();
    }
  }

  receiveStatement(row: any) {
    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: "سيتم تغيير حالة العهدة إلى (مستلمة)",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'نعم، استلام',
      cancelButtonText: 'إلغاء'
    }).then((result) => {
      if (result.isConfirmed) {
        this.custodyService.receiveAcc(row.id).subscribe({
          next: () => {
            row.receiveAcc = true;
            Swal.fire('تم!', 'تم استلام العهدة بنجاح', 'success');
          },
          error: (err: any) => {
            console.error('Error receiving statement', err);
            Swal.fire('خطأ', 'فشل في استلام العهدة', 'error');
          }
        });
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

}
