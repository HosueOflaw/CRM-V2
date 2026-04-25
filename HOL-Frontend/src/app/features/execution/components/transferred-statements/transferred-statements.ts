import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CustodyService, CustodyStatement } from '../../../../services/custody.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transferred-statements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transferred-statements.html',
  styleUrl: './transferred-statements.css'
})
export class TransferredStatements implements OnInit {
  statements: CustodyStatement[] = [];
  isLoading = false;
  
  // Pagination
  currentPage = 1;
  pageSize = 5;
  totalCount = 0;
  Math = Math;

  private custodyService = inject(CustodyService);

  ngOnInit() {
    this.fetchTransferred();
  }

  fetchTransferred() {
    this.isLoading = true;
    this.custodyService.getTransferred(this.currentPage, this.pageSize).subscribe({
      next: (res: any) => {
        // Handle both old array format and new paginated object format
        if (Array.isArray(res)) {
          this.statements = res;
          this.totalCount = res.length;
        } else {
          this.statements = res.items || [];
          this.totalCount = res.totalCount || 0;
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        Swal.fire('خطأ', 'فشل تحميل العهد المرحلة', 'error');
        this.isLoading = false;
      }
    });
  }

  nextPage() {
    if (this.currentPage < Math.ceil(this.totalCount / this.pageSize)) {
      this.currentPage++;
      this.fetchTransferred();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchTransferred();
    }
  }
}
