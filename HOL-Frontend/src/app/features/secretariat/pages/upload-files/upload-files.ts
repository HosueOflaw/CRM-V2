import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataViewService } from '../../../../services/data-view.service';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './upload-files.html',
  styleUrl: './upload-files.css'
})
export class UploadFiles implements OnInit {
  mainfile: any = {
    id: null,
    code: null,
    name: '',
    cid: '',
    address: '',
    dateAdded: null,
    nationality: '',
    archive: false,
    note: '',
    work: '',
    membership: '',
    companyEmail: '',
    companyFax: '',
    companyRegister: '',
    partner1: '',
    partner2: '',
    partner3: '',
    registerType: '',
    addedBy: null
  };

  constructor(
    private dataViewService: DataViewService,
    private swal: SweetAlertService
  ) { }

  @HostListener('document:click', ['$event'])
  onGlobalClick(event: MouseEvent) {
    console.log('--- GLOBAL CLICK LOG ---');
    console.log('Target:', event.target);
    const target = event.target as HTMLElement;
    if (target.innerText && (target.innerText.includes('حفظ') || target.innerText.includes('جديد'))) {
      console.log('CLICKED BUTTON TEXT:', target.innerText);
    }
  }

  ngOnInit() {
    this.getNextId();
  }

  getNextId() {
    this.dataViewService.getNextMainfileId().subscribe({
      next: (id) => {
        this.mainfile.id = id;
      },
      error: (err) => {
        console.error('Error fetching next ID', err);
        this.swal.error({ title: 'خطأ', text: 'فشل في جلب الرقم التالي' });
      }
    });
  }

  save() {
    // Validation
    if (!this.mainfile.code || !this.mainfile.name) {
      console.log('Validation failed - missing code or name');
      this.swal.error({ title: 'خطأ', text: 'الرجاء إدخال الكود والاسم على الأقل' });
      return;
    }

    console.log('Validation passed, showing loading...');
    this.swal.showLoading();

    // Map to Mainfile entity - send only what exists in Mainfile.cs
    const payload = {
      code: this.mainfile.code,
      name: this.mainfile.name,
      cid: this.mainfile.cid,
      address: this.mainfile.address,
      nationality: this.mainfile.nationality,
      archive: this.mainfile.archive,
      note: this.mainfile.note,
      work: this.mainfile.work,
      membership: this.mainfile.membership,
      companyEmail: this.mainfile.companyEmail,
      companyFax: this.mainfile.companyFax,
      companyRegister: this.mainfile.companyRegister,
      partner1: this.mainfile.partner1,
      partner2: this.mainfile.partner2,
      partner3: this.mainfile.partner3,
      registerType: this.mainfile.registerType
    };

    console.log('Sending payload to backend:', payload);

    this.dataViewService.createMainfile(payload).subscribe({
      next: (res) => {
        console.log('Save successful, response:', res);
        this.swal.close();
        this.swal.success({ title: 'تم الحفظ', text: 'تم إضافة الملف بنجاح' });
        this.clear();
      },
      error: (err) => {
        console.error('Save failed, error:', err);
        this.swal.close();
        this.swal.error({ title: 'خطأ', text: err.error?.message || 'فشل الحفظ' });
      }
    });
  }

  clear() {
    this.mainfile = {
      id: null,
      code: null,
      name: '',
      cid: '',
      address: '',
      dateAdded: null,
      nationality: '',
      archive: false,
      note: '',
      work: '',
      membership: '',
      companyEmail: '',
      companyFax: '',
      companyRegister: '',
      partner1: '',
      partner2: '',
      partner3: '',
      registerType: '',
      addedBy: null
    };
    this.getNextId();
  }
}
