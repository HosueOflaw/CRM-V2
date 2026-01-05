import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { BreakService, ActiveBreak, DailyBreakReport } from '../../../../services/break.service';
import { PrimeToastService } from '../../../../shared/services/prime-toast.service';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-daily-breaks',
  standalone: true,
  imports: [CommonModule, TableModule, CardModule, TagModule, ButtonModule, ToastModule, DatePickerModule, FormsModule],
  template: `
    <div class="p-6" dir="rtl">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h2 class="text-2xl font-bold text-primary">تقرير ساعة الراحة </h2>
          <p class="text-secondary">متابعة دقيقة لاستراحات الموظفين وحالات التأخير</p>
        </div>
        
        <div class="flex items-center gap-3">
          <span class="font-bold">تصفية بالتاريخ:</span>
          <p-datepicker [(ngModel)]="selectedDate" (onSelect)="onDateChange()" 
                      [showIcon]="true" dateFormat="yy-mm-dd" 
                      placeholder="اختر التاريخ" class="custom-pager"></p-datepicker>
          <button pButton icon="pi pi-refresh" [loading]="loadingDaily" (click)="loadData()" title="تحديث"></button>
        </div>
      </div>

      <!-- Active Breaks Section (Only for Today) -->
      <p-card header="موظفون في فترة راحة حالياً" class="mb-6 shadow-sm" *ngIf="isToday(selectedDate)">
        <p-table [value]="activeBreaks" [loading]="loadingActive" styleClass="p-datatable-striped">
          <ng-template pTemplate="header">
            <tr>
              <th class="text-center">الموظف</th>
              <th class="text-center">القسم</th>
              <th class="text-center">وقت البدء</th>
              <th class="text-center">المدة الحالية</th>
              <th class="text-center">الحالة</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-item>
            <tr>
              <td class="text-center">{{ getReportVal(item, 'fullName') }}</td>
              <td class="text-center">{{ getDeptLabel(getReportVal(item, 'department')) }}</td>
              <td class="text-center">{{ getReportVal(item, 'startTime') | date:'HH:mm:ss' }}</td>
              <td class="text-center">{{ formatMinutes(getReportVal(item, 'currentDuration')) }}</td>
              <td class="text-center">
                <p-tag [severity]="getReportVal(item, 'currentDuration') > 60 ? 'danger' : 'success'" 
                       [value]="getReportVal(item, 'currentDuration') > 60 ? 'متأخر' : 'في الراحة'"></p-tag>
              </td>
            </tr>
          </ng-template>
          <ng-template pTemplate="emptymessage">
            <tr>
              <td colspan="5" class="text-center p-4">لا يوجد موظفون في فترة راحة حالياً</td>
            </tr>
          </ng-template>
        </p-table>
      </p-card>

      <!-- Daily Report Section -->
      <p-card [header]="'سجل الاستراحات لليوم: ' + (selectedDate | date:'yyyy-MM-dd')" class="shadow-sm">
        <p-table [value]="dailyReports" [loading]="loadingDaily" [paginator]="true" [rows]="10" styleClass="p-datatable-gridlines">
          <ng-template pTemplate="header">
            <tr>
              <th class="text-center">الموظف</th>
              <th class="text-center">القسم</th>
              <th class="text-center">البداية</th>
              <th class="text-center">النهاية</th>
              <th class="text-center">الوقت المستهلك</th>
              <th class="text-center">وقت التأخير</th>
              <th class="text-center">الرصيد المتبقي</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-report>
            <tr>
              <td class="text-center font-bold" style="min-width: 150px">{{ getReportVal(report, 'fullName') }}</td>
              <td class="text-center">{{ getDeptLabel(getReportVal(report, 'department')) }}</td>
              <td class="text-center">{{ getReportVal(report, 'startTime') | date:'HH:mm:ss' }}</td>
              <td class="text-center">{{ getReportVal(report, 'endTime') ? (getReportVal(report, 'endTime') | date:'HH:mm:ss') : '-' }}</td>
              <td class="text-center">
                <span class="font-bold" [class.text-red-500]="getConsumed(report) > 60">
                  {{ formatMinutes(getConsumed(report)) }}
                </span>
              </td>
              <td class="text-center">
                <span *ngIf="getLate(report) > 0" class="text-red-500 font-bold">
                  {{ formatMinutes(getLate(report)) }}
                </span>
                <span *ngIf="getLate(report) <= 0">-</span>
              </td>
              <td class="text-center">
                <span *ngIf="getReportVal(report, 'endTime') && getUnused(report) > 0" class="text-green-700 font-bold">
                  {{ formatMinutes(getUnused(report)) }}
                </span>
                <span *ngIf="!getReportVal(report, 'endTime') || getUnused(report) <= 0">-</span>
              </td>
            </tr>
          </ng-template>
          <ng-template pTemplate="emptymessage">
            <tr>
              <td colspan="7" class="text-center p-4">لا توجد بيانات لهذا التاريخ</td>
            </tr>
          </ng-template>
        </p-table>
      </p-card>
    </div>
    <p-toast position="top-center"></p-toast>
  `,
  styles: [`
    :host ::ng-deep .p-card-title {
      color: var(--primary-color);
      font-size: 1.25rem;
    }
    .custom-pager {
      direction: ltr;
    }
  `]
})
export class DailyBreaksComponent implements OnInit {
  activeBreaks: ActiveBreak[] = [];
  dailyReports: DailyBreakReport[] = [];
  loadingActive = false;
  loadingDaily = false;
  selectedDate: Date = new Date();

  departments = [
    { label: 'المفاوضات', value: 'negotiations' },
    { label: 'السكرتارية', value: 'secretariat' },
    { label: 'التنفيذ', value: 'execution' },
    { label: 'الإدارة المالية', value: 'finance' },
    { label: 'المداولات', value: 'discussions' },
    { label: 'التقارير', value: 'reports' },
    { label: 'السيارات', value: 'car-management' },
    { label: 'شؤون إدارية', value: 'management' }
  ];

  constructor(
    private breakService: BreakService,
    private toast: PrimeToastService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  onDateChange() {
    this.loadData();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  }

  getDeptLabel(value: any): string {
    if (value === null || value === undefined || value === 0 || value === '0') return '-';
    const dept = this.departments.find(d => d.value === value);
    return dept ? dept.label : value;
  }

  formatMinutes(minutes: any): string {
    const mins = Number(minutes);
    if (isNaN(mins) || mins <= 0) return '0 ثانية';

    const totalSeconds = Math.round(mins * 60);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    let result = '';
    if (h > 0) result += `${h} ساعة `;
    if (m > 0) {
      if (result) result += 'و ';
      result += `${m} دقيقة `;
    }
    if (s > 0 && h === 0) {
      if (result) result += 'و ';
      result += `${s} ثانية`;
    }

    return result.trim() || '0 دقيقة';
  }

  getConsumed(report: any): number {
    // Priority: New Backend field -> Old Backend field -> Manual Calculation
    const val = this.getReportVal(report, 'durationMinutes') || this.getReportVal(report, 'totalMinutes');
    const total = Number(val);
    if (total > 0) return total;

    // Fallback to calculation if total is 0 but we have times
    const start = this.getReportVal(report, 'startTime');
    const end = this.getReportVal(report, 'endTime');
    if (start && end && start !== 0 && end !== 0) {
      const diff = (new Date(end).getTime() - new Date(start).getTime()) / 60000;
      return diff > 0 ? diff : 0;
    }
    return 0;
  }

  getLate(report: any): number {
    // Priority: Field from backend -> Manual calculation
    const late = Number(this.getReportVal(report, 'lateMinutes'));
    if (late > 0) return late;

    const consumed = this.getConsumed(report);
    return consumed > 60 ? consumed - 60 : 0;
  }

  getUnused(report: any): number {
    // Priority: Specific "unused" field from backend -> Manual balance
    const unused = this.getReportVal(report, 'unusedMinutes');
    if (unused !== null && unused !== undefined && Number(unused) > 0) return Number(unused);

    const consumed = this.getConsumed(report);
    return (consumed > 0 && consumed < 60) ? (60 - consumed) : 0;
  }

  getReportVal(report: any, field: string): any {
    if (!report) return null;
    const pascalField = field.charAt(0).toUpperCase() + field.slice(1);
    const lowercaseField = field.toLowerCase();

    const val = report[field] !== undefined ? report[field] :
      (report[pascalField] !== undefined ? report[pascalField] : report[lowercaseField]);

    return val !== undefined && val !== null ? val : null;
  }

  loadData() {
    this.toast.info('جاري تحديث البيانات...', 'تنبيه');
    if (this.isToday(this.selectedDate)) {
      this.loadActive();
    } else {
      this.activeBreaks = [];
    }
    this.loadDaily();
  }

  loadActive() {
    this.loadingActive = true;
    this.breakService.getActiveBreaks().subscribe({
      next: (data) => {
        this.activeBreaks = data;
        this.loadingActive = false;
      },
      error: () => this.loadingActive = false
    });
  }

  loadDaily() {
    this.loadingDaily = true;

    // Format date in local timezone YYYY-MM-DD
    const year = this.selectedDate.getFullYear();
    const month = String(this.selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(this.selectedDate.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    console.log('Fetching break reports for date:', dateStr);

    this.breakService.getDailyReport(dateStr).subscribe({
      next: (data) => {
        this.dailyReports = data;
        this.loadingDaily = false;
        if (data.length === 0) {
          this.toast.info('لا توجد بيانات مسجلة لهذا التاريخ', 'تنبيه');
        } else {
          this.toast.success(`تم تحميل ${data.length} سجل بنجاح`, 'تم التحديث');
        }
      },
      error: (err) => {
        this.loadingDaily = false;
        console.error('Error fetching reports:', err);
        this.toast.error('حدث خطأ أثناء جلب البيانات من السيرفر', 'خطأ');
      }
    });
  }
}
