import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';
import { CommonModule, DatePipe } from '@angular/common';
import { GoBack } from '../../../../shared/components/go-back/go-back';

@Component({
  selector: 'app-announcing-formulas-page',
  imports: [CommonModule,ReactiveFormsModule,FormsModule,GoBack],
  templateUrl: './announcing-formulas-page.html',
  styleUrl: './announcing-formulas-page.css'
})
export class AnnouncingFormulasPage {
form = {
    code: '',
    name: '',
    autoNum: '',
    civilId: '',
    dates: ['', '', '', '', '']
  };

  dateLabels = [
    'تاريخ صدور الحكم',
    'استلام صورة طبق الأصل',
    'إعلان صورة طبق الأصل',
    'استلام صيغة طبق الأصل',
    'إعلان صيغة طبق الأصل'
  ];

  search = {
    fromDate: '',
    toDate: '',
    type: ''
  };

  searchTypes = ['الكود', 'الاسم', 'المدني', 'الرقم الآلي'];
  data: any[] = [];

  // 🔹 بيانات المودال
  showModal = false;
  modalTitle = '';
  modalData = { fileName: '', file: null as File | null };

  // 🔹 عمليات الحفظ والتعديل
  save() {
    console.log('تم الحفظ:', this.form);
    alert('✅ تم حفظ البيانات بنجاح');
  }

  edit() {
    console.log('تعديل:', this.form);
    alert('✏️ تم تعديل البيانات');
  }

  // 🔹 فتح المودال
  openModal(type: string) {
    const titles: Record<string, string> = {
      imageReceived: '📥 تم استلام صورة طبق الأصل',
      imageAnnounced: '📢 تم إعلان صورة طبق الأصل',
      copyReceived: '📥 تم استلام صيغة طبق الأصل',
      copyAnnounced: '📢 تم إعلان صيغة طبق الأصل'
    };
    this.modalTitle = titles[type];
    this.showModal = true;
  }

  // 🔹 إغلاق المودال
  closeModal() {
    this.showModal = false;
    this.modalData = { fileName: '', file: null };
  }

  // 🔹 تحميل الملف
  onFileSelected(event: any) {
    this.modalData.file = event.target.files[0];
  }

  // 🔹 حفظ المودال
  submitModal() {
    if (this.modalData.fileName && this.modalData.file) {
      console.log('📄 ملف محفوظ:', this.modalData);
      alert('✅ تم حفظ الملف بنجاح');
      this.closeModal();
    } else {
      alert('⚠️ الرجاء إدخال اسم الملف واختيار ملف قبل الحفظ');
    }
  }

  // 🔍 البحث
  doSearch() {
    console.log('بحث:', this.search);
    // نموذج تجريبي لنتائج البحث
    this.data = [
      {
        code: 'A-123',
        name: 'أحمد عبدالله',
        civilId: '298011122233',
        autoNum: '4567',
        dates: ['2024-01-12', '2024-02-01', '2024-02-10', '2024-03-01', '2024-03-10']
      }
    ];
  }
}
