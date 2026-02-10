import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelImportService } from '../../../../services/excel-import.service';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-import-dashboard',
  standalone: true,
  imports: [CommonModule, ChartModule, CardModule, SkeletonModule],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 flex justify-center">
      <!-- Summary Cards -->
      <p-card styleClass="shadow-sm border-0 bg-blue-50 dark:bg-blue-900/10">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500 mb-1">إجمالي العمليات</span>
          <span class="text-2xl font-bold" *ngIf="!loading">{{ stats?.summary?.totalJobs }}</span>
          <p-skeleton width="3rem" height="2rem" *ngIf="loading"></p-skeleton>
        </div>
      </p-card>

      <p-card styleClass="shadow-sm border-0 bg-indigo-50 dark:bg-indigo-900/10">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500 mb-1">إجمالي السجلات في الملفات</span>
          <span class="text-2xl font-bold text-indigo-600" *ngIf="!loading">{{ stats?.summary?.totalRowsAttempted?.toLocaleString() }}</span>
          <p-skeleton width="3rem" height="2rem" *ngIf="loading"></p-skeleton>
        </div>
      </p-card>

      <p-card styleClass="shadow-sm border-0 bg-green-50 dark:bg-green-900/10">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500 mb-1">السجلات المضافة بنجاح</span>
          <span class="text-2xl font-bold text-green-600" *ngIf="!loading">{{ stats?.summary?.totalSuccessfulRows?.toLocaleString() }}</span>
          <p-skeleton width="3rem" height="2rem" *ngIf="loading"></p-skeleton>
        </div>
      </p-card>

      <p-card styleClass="shadow-sm border-0 bg-red-50 dark:bg-red-900/10">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500 mb-1">إجمالي السجلات المرفوضة (أخطاء)</span>
          <span class="text-2xl font-bold text-red-600" *ngIf="!loading">{{ stats?.summary?.totalErrorCount?.toLocaleString() }}</span>
          <p-skeleton width="3rem" height="2rem" *ngIf="loading"></p-skeleton>
        </div>
      </p-card>

      <p-card styleClass="shadow-sm border-0 bg-purple-50 dark:bg-purple-900/10">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500 mb-1">نسبة النجاح</span>
          <span class="text-2xl font-bold text-purple-600" *ngIf="!loading">{{ stats?.summary?.successRate?.toFixed(1) }}%</span>
          <p-skeleton width="3rem" height="2rem" *ngIf="loading"></p-skeleton>
        </div>
      </p-card>
    </div>

  `
})
export class ImportDashboardComponent implements OnInit {
  @Input() jobType?: string;

  stats: any;
  loading = true;

  pieData: any;
  pieOptions: any;
  barData: any;
  barOptions: any;

  constructor(private importService: ExcelImportService) { }

  ngOnInit() {
    this.loadStats();
  }

  loadStats() {
    this.loading = true;
    this.importService.getImportStats(this.jobType).subscribe({
      next: (data) => {
        this.stats = data;
        this.prepareCharts();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching stats', err);
        this.loading = false;
      }
    });
  }

  prepareCharts() {
    const documentStyle = getComputedStyle(document.documentElement);

    // Status Pie Chart
    this.pieData = {
      labels: ['ناجح', 'فشل', 'قيد المعالجة'],
      datasets: [
        {
          data: [this.stats.summary.successfulJobs, this.stats.summary.failedJobs, this.stats.summary.processingJobs],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500') || '#22c55e',
            documentStyle.getPropertyValue('--red-500') || '#ef4444',
            documentStyle.getPropertyValue('--blue-500') || '#3b82f6'
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-400') || '#4ade80',
            documentStyle.getPropertyValue('--red-400') || '#f87171',
            documentStyle.getPropertyValue('--blue-400') || '#60a5fa'
          ]
        }
      ]
    };

    this.pieOptions = {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            font: { family: 'inherit' }
          }
        }
      },
      maintainAspectRatio: false
    };

    // Monthly Growth Bar Chart
    const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

    const labels = this.stats.monthlyGrowth.map((m: any) => monthNames[m.month - 1]);
    const rowCounts = this.stats.monthlyGrowth.map((m: any) => m.totalRows);

    this.barData = {
      labels: labels,
      datasets: [
        {
          label: 'عدد السجلات المستوردة',
          backgroundColor: documentStyle.getPropertyValue('--blue-500') || '#3b82f6',
          borderColor: documentStyle.getPropertyValue('--blue-500') || '#3b82f6',
          data: rowCounts
        }
      ]
    };

    this.barOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { family: 'inherit' } }
        },
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(0,0,0,0.05)' },
          ticks: { font: { family: 'inherit' } }
        }
      }
    };
  }
}
