import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoBack } from '../../../../shared/components/go-back/go-back';

@Component({
  selector: 'app-reports-main',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule ,GoBack],
  templateUrl: './reports-main.html',
  styleUrls: ['./reports-main.css']
})
export class ReportsMainComponent {
  formsList: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formsList = [
      {
        name: 'report1',
        title: 'تصدير الإفادات',
        group: this.createForm(),
        showSector: true,
        showCompany: false,
        showEmployee: false,
        showStatus: false,
        showCourt: false,
        showGroup: false,
        showDateActionBtn: true,
        showDateReviewBtn: true,
        showReportBtn: false,
        showPayBtn: false,
        showSaleBtn: false,
                showmowkelBtn:false

      },
      {
        name: 'report2',
        title: 'تصدير السداد',
        group: this.createForm(),
        showSector: true,
        showCompany: true,
        showEmployee: false,
        showStatus: false,
        showCourt: false,
        showGroup: true,
        showDateActionBtn: false,
        showDateReviewBtn: false,
        showReportBtn: false,
        showPayBtn: true,
        showSaleBtn: true,
                showmowkelBtn:false

      },
      {
        name: 'report3',
        title: 'تصدير الإفادات الجديدة',
        group: this.createForm(),
        showSector: true,
        showCompany: true,
        showEmployee: false,
        showStatus: false,
        showCourt: false,
        showGroup: true,
        showDateActionBtn: true,
        showDateReviewBtn: true,
        showReportBtn: false,
        showPayBtn: false,
        showSaleBtn: false,
                showmowkelBtn:false

      },
      {
        name: 'report4',
        title: 'تصدير الشيكات',
        group: this.createForm(),
        showSector: true,
        showCompany: true,
        showEmployee: false,
        showStatus: false,
        showCourt: false,
        showGroup: true,
        showDateActionBtn: true,
        showDateReviewBtn: true,
        showReportBtn: false,
        showPayBtn: false,
        showSaleBtn: false,
                showmowkelBtn:false

      },
      {
        name: 'report5',
        title: 'تصدير الملفات',
        group: this.createForm(),
        showSector: true,
        showCompany: true,
        showEmployee: false,
        showStatus: false,
        showCourt: false,
        showGroup: false,
        showDateActionBtn: false,
        showDateReviewBtn: false,
        showReportBtn: true,
        showPayBtn: false,
        showSaleBtn: false,
                showmowkelBtn:false

      },
      {
        name: 'report6',
        title: 'المحول إلى الشركات',
        group: this.createForm(),
        showSector: false,
        showCompany: true,
        showEmployee: false,
        showStatus: false,
        showCourt: false,
        showGroup: false,
        showDateActionBtn: true,
        showDateReviewBtn: true,
        showReportBtn: true,
        showPayBtn: false,
        showSaleBtn: false,
        showmowkelBtn:false

      },
      {
        name: 'report7',
        title: 'تصدير كل الملفات',
        group: this.createForm(),
        showSector: true,
        showCompany: true,
        showEmployee: true,
        showStatus: true,
        showCourt: false,
        showGroup: false,
        showDateActionBtn: false,
        showDateReviewBtn: false,
        showReportBtn: true,
        showPayBtn: false,
        showSaleBtn: false,
                showmowkelBtn:false

      },
      {
        name: 'report8',
        title: '(التنفيذ) تصدير كل الملفات',
        group: this.createForm(),
        showSector: true,
        showCompany: true,
        showEmployee: true,
        showStatus: true,
        showCourt: true,
        showGroup: false,
        showDateActionBtn: false,
        showDateReviewBtn: false,
        showReportBtn: true,
        showPayBtn: false,
        showSaleBtn: false,
       showmowkelBtn:false

      },
      {
        name: 'report9',
        title: '(التنفيذ) الأرقام الآلية',
        group: this.createForm(),
        showSector: true,
        showCompany: true,
        showEmployee: false,
        showStatus: false,
        showCourt: true,
        showGroup: false,
        showDateActionBtn: false,
        showDateReviewBtn: false,
        showReportBtn: true,
        showPayBtn: false,
        showSaleBtn: false,
        showmowkelBtn:false

      },
      {
        name: 'report10',
        title: '(التنفيذ) الإجراءات',
        group: this.createForm(),
        showSector: true,
        showCompany: true,
        showEmployee: true,
        showStatus: true,
        showCourt: true,
        showGroup: false,
        showDateActionBtn: false,
        showDateReviewBtn: false,
        showReportBtn: true,
        showPayBtn: false,
        showSaleBtn: false,
        showmowkelBtn:true
      },
    ];
  }

  createForm(): FormGroup {
    return this.fb.group({
      sector: [''],
      company: [''],
      employee:[''],
      status: [''],
      court: [''],
      group: [''],
      fromDate: [''],
      toDate: [''],
    });
  }

  onSubmit(name: string) {
    console.log(`Form "${name}" submitted`);
  }
}
