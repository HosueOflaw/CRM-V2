import { Component, ViewChild } from '@angular/core';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-disclosure',
  imports: [CommonModule,LookupModal],
  templateUrl: './employee-disclosure.html',
  styleUrl: './employee-disclosure.css'
})
export class EmployeeDisclosure {
 @ViewChild('lookup') lookupModal!: LookupModal;

  selectedEmployee: any = null;

  // بيانات الموظفين للمودال
  employees = [
    { id: 1, name: 'أحمد' },
    { id: 2, name: 'محمود' },
    { id: 3, name: 'سارة' },
  ];
  employeeColumns = ['id', 'name'];

  // بيانات الكشوف
  data = [
    { code: '001', employeeName: 'أحمد', date: '2025-11-16', amount: 500 },
    { code: '002', employeeName: 'محمود', date: '2025-11-15', amount: 300 },
    { code: '003', employeeName: 'سارة', date: '2025-11-14', amount: 450 },
  ];
  filteredData = [...this.data];

  openLookup() {
    this.lookupModal.open();
  }

  onEmployeeSelected(emp: any) {
    this.selectedEmployee = emp;
  }

  search() {
    if (!this.selectedEmployee) return;
    this.filteredData = this.data.filter(d =>
      d.employeeName === this.selectedEmployee.name
    );
  }

}
