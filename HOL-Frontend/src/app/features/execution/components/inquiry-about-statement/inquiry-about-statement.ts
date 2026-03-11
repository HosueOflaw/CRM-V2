import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustodyService, CustodyStatement } from '../../../../services/custody.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inquiry-about-statement',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inquiry-about-statement.html',
  styleUrl: './inquiry-about-statement.css'
})
export class InquiryAboutStatement {
  autoNumber: string = '';
  lastSearchedAutoNo: string = '';
  reportData: CustodyStatement[] | null = null;
  isLoading = false;

  private custodyService = inject(CustodyService);
  private sanitizer = inject(DomSanitizer);

  // وظيفة البحث عن الكشف بالرقم الآلي
  async search() {
    if (!this.autoNumber.trim()) {
      Swal.fire('تنبيه', 'الرجاء إدخال الرقم الآلي للبحث', 'info');
      return;
    }

    const searchVal = this.autoNumber.trim();
    this.isLoading = true;
    try {
      const res = await this.custodyService.getByAutoNo(searchVal).toPromise();
      if (res && res.length > 0) {
        // Strict client-side filter as an extra safeguard
        this.reportData = res.filter(item => item.codeAutoNo?.toString() === searchVal);
        this.lastSearchedAutoNo = searchVal;
        
        if (this.reportData.length === 0) {
          this.reportData = null;
          Swal.fire('تنبيه', 'لم يتم العثور على مطابقة تامة لهذا الرقم الآلي', 'warning');
        }
      } else {
        this.reportData = null;
        Swal.fire('تنبيه', 'لم يتم العثور على بيانات لهذا الرقم الآلي', 'warning');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('خطأ', 'فشل البحث عن الرقم الآلي', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  // معاينة الملف المرفق
  viewAttachment(fileContent: string) {
    if (!fileContent) return;
    // Create a blob from base64
    const byteCharacters = atob(fileContent);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(blob);
    window.open(fileURL, '_blank');
  }

  // حساب المجموع الكلي
  getTotalAmount() {
    if (!this.reportData) return 0;
    return this.reportData.reduce((sum, item) => sum + (item.amount || 0), 0);
  }

  // وظيفة الطباعة
  print(): void {
    if (!this.reportData) {
      Swal.fire('تنبيه', 'لا يوجد بيانات للطباعة', 'info');
      return;
    }
    window.print();
  }
}
