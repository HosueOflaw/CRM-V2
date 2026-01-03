import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sessions-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './sessions-page.html',
  styleUrl: './sessions-page.css'
})
export class SessionsPage {
startDate?: string;
  endDate?: string;
  selectedSessionType: string = '';

  sessions = [
    {
      sessionNumber: 'S-001',
      date: '2025-11-01',
      type: 'استلام صيغة تنفيذ',
      court: 'محكمة العاصمة',
      client: 'مكتب العدالة',
      notes: 'تم الاستلام بنجاح',
    },
    {
      sessionNumber: 'S-002',
      date: '2025-11-02',
      type: 'استلام حكم',
      court: 'محكمة الفروانية',
      client: 'مكتب السلام',
      notes: 'بانتظار اعتماد الحكم',
    },
    {
      sessionNumber: 'S-003',
      date: '2025-10-30',
      type: 'شطب الدعوى',
      court: 'محكمة الأحمدي',
      client: 'مكتب الوفاء',
      notes: 'تم الشطب بناءً على طلب المدعي',
    },
    {
      sessionNumber: 'S-004',
      date: '2025-11-03',
      type: 'وقف الدعوى',
      court: 'محكمة الجهراء',
      client: 'مكتب النور',
      notes: 'تم الوقف لحين استكمال المستندات',
    },
  ];

  filteredSessions = [...this.sessions];

  applyFilters() {
    this.filteredSessions = this.sessions.filter((s) => {
      const matchesType = !this.selectedSessionType || s.type === this.selectedSessionType;
      const matchesDate =
        (!this.startDate || new Date(s.date) >= new Date(this.startDate)) &&
        (!this.endDate || new Date(s.date) <= new Date(this.endDate));
      return matchesType && matchesDate;
    });
  }
}
