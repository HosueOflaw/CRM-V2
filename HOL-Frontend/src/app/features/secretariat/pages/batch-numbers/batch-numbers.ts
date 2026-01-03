import { Component, ViewChild } from '@angular/core';
import { LookupModal } from '../../../../shared/components/lookup-modal/lookup-modal';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-batch-numbers',
  imports: [CommonModule, FormsModule, LookupModal],
  templateUrl: './batch-numbers.html',
  styleUrl: './batch-numbers.css'
})
export class BatchNumbers {
 
  // الوصول للمودال
  @ViewChild('employeeLookup') employeeLookup!: LookupModal;

  // المتغيرات
  selectedEmployeeName: string = '';
  totalCustody: number = 0;

  // بيانات الموظفين (وهمية للتجربة)
  employeesData = [
    { code: '101', name: 'أحمد محمد علي', department: 'IT' },
    { code: '102', name: 'سارة خالد', department: 'HR' },
    { code: '103', name: 'محمود حسن', department: 'Finance' },
    { code: '104', name: 'علي مصطفى', department: 'Sales' },
  ];

  // فتح نافذة البحث عن موظف
  openEmployeeModal() {
    this.employeeLookup.open();
  }

  // عند اختيار موظف من المودال
  onEmployeeSelected(employee: any) {
    this.selectedEmployeeName = employee.name;
    console.log('Selected Employee:', employee);
  }

  // دوال الأزرار الأخرى
  search() {
    console.log('Searching...');
  }

  directExpense() {
    console.log('Directing Expense...');
  }

  markReceived() {
    console.log('Marked as Received...');
  }
}
