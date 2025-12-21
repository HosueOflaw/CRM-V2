import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';

@Component({
  selector: 'app-permissions-form',
  imports: [CommonModule,FormsModule,LookupModal],
  templateUrl: './permissions-form.html',
  styleUrl: './permissions-form.css'
})
export class PermissionsForm {

 @ViewChild('lookup') lookup!: LookupModal;

  lookupTitle = '';
  lookupColumns: string[] = [];
  lookupData: any[] = [];

  selectedEmployee: any;
  selectedCourt: any;
  selectedDepartment: any;

  openLookup(type: 'employee' | 'court' | 'department') {
    if (type === 'employee') {
      this.lookupTitle = 'اختيار الموظف';
      this.lookupColumns = ['id', 'الاسم', 'الوظيفة'];
      this.lookupData = [
        { id: 1, الاسم: 'أحمد سالم', الوظيفة: 'محامي' },
        { id: 2, الاسم: 'منى خالد', الوظيفة: 'كاتب' },
      ];
    } else if (type === 'court') {
      this.lookupTitle = 'اختيار المحكمة';
      this.lookupColumns = ['id', 'الاسم', 'المكان'];
      this.lookupData = [
        { id: 1, الاسم: 'محكمة الجنايات', المكان: 'الكويت' },
        { id: 2, الاسم: 'محكمة الأسرة', المكان: 'الفروانية' },
      ];
    } else {
      this.lookupTitle = 'اختيار الدائرة';
      this.lookupColumns = ['id', 'الاسم'];
      this.lookupData = [
        { id: 1, الاسم: 'الدائرة 1' },
        { id: 2, الاسم: 'الدائرة 2' },
      ];
    }

    this.lookup.open();
  }

  handleLookupSelection(item: any) {
    if (this.lookupTitle.includes('الموظف')) this.selectedEmployee = item;
    else if (this.lookupTitle.includes('المحكمة')) this.selectedCourt = item;
    else if (this.lookupTitle.includes('الدائرة')) this.selectedDepartment = item;
  }

  assignedItems: any[] = [];

// إضافة محكمة واحدة
addCourt() {
  if (!this.selectedEmployee || !this.selectedCourt) return alert('اختر الموظف والمحكمة أولاً');
  this.assignedItems.push({
    employee: this.selectedEmployee,
    court: this.selectedCourt,
    department: null,
  });
}

// إضافة كل المحاكم
addAllCourts() {
  if (!this.selectedEmployee) return alert('اختر الموظف أولاً');
  const allCourts = [
    { id: 1, الاسم: 'محكمة الجنايات' },
    { id: 2, الاسم: 'محكمة الأسرة' },
    { id: 3, الاسم: 'محكمة الاستئناف' },
  ];
  allCourts.forEach(court => {
    this.assignedItems.push({
      employee: this.selectedEmployee,
      court,
      department: null,
    });
  });
}

// إضافة دائرة واحدة
addDepartment() {
  if (!this.selectedEmployee || !this.selectedCourt || !this.selectedDepartment)
    return alert('اختر الموظف والمحكمة والدائرة أولاً');
  this.assignedItems.push({
    employee: this.selectedEmployee,
    court: this.selectedCourt,
    department: this.selectedDepartment,
  });
}

// إضافة كل الدوائر
addAllDepartments() {
  if (!this.selectedEmployee || !this.selectedCourt) return alert('اختر الموظف والمحكمة أولاً');
  const allDepartments = [
    { id: 1, الاسم: 'الدائرة 1' },
    { id: 2, الاسم: 'الدائرة 2' },
    { id: 3, الاسم: 'الدائرة 3' },
  ];
  allDepartments.forEach(dep => {
    this.assignedItems.push({
      employee: this.selectedEmployee,
      court: this.selectedCourt,
      department: dep,
    });
  });
}

// حذف صف
removeItem(index: number) {
  this.assignedItems.splice(index, 1);
}
}
