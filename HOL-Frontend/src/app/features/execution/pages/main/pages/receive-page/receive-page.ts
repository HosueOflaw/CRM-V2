import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-receive-page',
  imports: [CommonModule,FormsModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' })),
      ]),
    ]),
  ],
  templateUrl: './receive-page.html',
  styleUrl: './receive-page.css'
})
export class ReceivePage {
 selectedTab: 'new' | 'ended' = 'new';

  newRulings = [
    { title: 'حكم ضد شركة ABC', caseNumber: '2025/101', court: 'محكمة التمييز', date: '2025-11-02' },
    { title: 'حكم لصالح السيد خالد', caseNumber: '2025/102', court: 'محكمة الأسرة', date: '2025-11-01' },
    { title: 'حكم ضد المؤسسة الوطنية', caseNumber: '2025/103', court: 'محكمة الاستئناف', date: '2025-10-30' },
  ];

  endedRulings = [
    { caseNumber: '2025/090', court: 'محكمة التمييز', date: '2025-10-20', result: 'مقبول' },
    { caseNumber: '2025/091', court: 'محكمة الأسرة', date: '2025-09-15', result: 'مرفوض' },
    { caseNumber: '2025/092', court: 'محكمة الجنايات', date: '2025-09-10', result: 'مقبول' },
  ];

  switchTab(tab: 'new' | 'ended') {
    this.selectedTab = tab;
  }
    filters = {
    from: '',
    to: '',
    court: 'all',
  };

  courts = ['الكل', 'التمييز', 'الاستئناف', 'الجنايات', 'الأسرة'];

  rulings = [
    {
      caseNumber: '2025/090',
      title: 'قضية ضد شركة النور للتجارة',
      court: 'محكمة التمييز',
      date: '2025-10-20',
      result: 'مقبول',
      summary: 'تم قبول الدعوى وتأكيد الحكم الابتدائي لصالح المدعي.',
    },
    {
      caseNumber: '2025/091',
      title: 'دعوى بين السيدة مريم وشركة ABC',
      court: 'محكمة الأسرة',
      date: '2025-09-15',
      result: 'مرفوض',
      summary: 'تم رفض الدعوى لعدم كفاية الأدلة المقدمة.',
    },
    {
      caseNumber: '2025/092',
      title: 'قضية تعويض ضد وزارة المالية',
      court: 'محكمة الجنايات',
      date: '2025-09-10',
      result: 'مقبول',
      summary: 'تم قبول الدعوى وتعويض المدعي بمبلغ 50,000 د.ك.',
    },
  ];

  filteredRulings = [...this.rulings];

  search() {
    this.filteredRulings = this.rulings.filter((r) => {
      const matchCourt =
        this.filters.court === 'all' || r.court === this.filters.court;
      const matchFrom = !this.filters.from || r.date >= this.filters.from;
      const matchTo = !this.filters.to || r.date <= this.filters.to;
      return matchCourt && matchFrom && matchTo;
    });
}
}