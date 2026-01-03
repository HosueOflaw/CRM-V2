import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';

Chart.register(...registerables);

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './managments-dashboard.html',
  styleUrls: ['./managments-dashboard.css'],
})
export class ManagementDashboard implements OnInit {

  selectedChart: string | null = null;

  chartTitles: Record<string, string> = {
    companyChart: '📊 مقارنة الشركات',
    employeeChart: '📈 أداء الموظفين',
    debtChart: '📉 مديونية الشركات',
    clientsGrowthChart: '📆 نمو العملاء',
    monthlyRevenueChart: '💰 الإيرادات الشهرية',
    casesSolvedChart: '⚖️ القضايا المنجزة',
  };

  ngOnInit(): void {
    this.createCharts();
  }

  openChart(chartId: string) {
    this.selectedChart = chartId;

    // ننتظر DOM يرندر الكانفاس داخل المودال
    setTimeout(() => {
      this.renderPopupChart(chartId);
    }, 0);
  }

  closeChart() {
    this.selectedChart = null;
  }

  renderPopupChart(chartId: string) {
    const chartDataMap: Record<string, ChartConfiguration> = {
      companyChart: {
        type: 'bar',
        data: {
          labels: ['شركة ألف', 'شركة باء', 'شركة جيم'],
          datasets: [{
            label: 'عدد الملفات',
            data: [45, 32, 60],
            backgroundColor: ['#4f46e5', '#06b6d4', '#10b981'],
          }],
        },
        options: { responsive: true, maintainAspectRatio: false },
      },
      employeeChart: {
        type: 'line',
        data: {
          labels: ['أحمد', 'منى', 'سارة', 'خالد', 'محمد'],
          datasets: [{
            label: 'أداء الموظفين',
            data: [6, 8, 4, 9, 5],
            borderColor: '#6366f1',
            tension: 0.3,
            fill: true,
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
          }],
        },
        options: { responsive: true, maintainAspectRatio: false },
      },
      debtChart: {
        type: 'doughnut',
        data: {
          labels: ['شركة ألف', 'شركة باء', 'شركة جيم'],
          datasets: [{
            data: [25000, 18000, 12000],
            backgroundColor: ['#06b6d4', '#f97316', '#8b5cf6'],
          }],
        },
        options: { responsive: true, maintainAspectRatio: false },
      },
      clientsGrowthChart: {
        type: 'line',
        data: {
          labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
          datasets: [{
            label: 'نسبة النمو الشهري',
            data: [5, 8, 12, 20, 28, 35],
            borderColor: '#16a34a',
            backgroundColor: 'rgba(22, 163, 74, 0.1)',
            tension: 0.3,
            fill: true,
          }],
        },
        options: { responsive: true, maintainAspectRatio: false },
      },
      monthlyRevenueChart: {
        type: 'bar',
        data: {
          labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
          datasets: [{
            label: 'الإيرادات (د.ك)',
            data: [12000, 18000, 22000, 30000, 42000, 56000],
            backgroundColor: '#3b82f6',
          }],
        },
        options: { responsive: true, maintainAspectRatio: false },
      },
      casesSolvedChart: {
        type: 'doughnut',
        data: {
          labels: ['منجزة', 'قيد التنفيذ', 'معلقة'],
          datasets: [{
            data: [87, 10, 3],
            backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
          }],
        },
        options: { responsive: true, maintainAspectRatio: false },
      },
    };

    const canvasId = `${chartId}_popup`;
    const ctx = document.getElementById(canvasId) as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, chartDataMap[chartId]);
    }
  }

  createCharts() {
    const chartsConfig = [
      { id: 'companyChart', type: 'bar', data: { labels: ['شركة ألف', 'شركة باء', 'شركة جيم'], datasets: [{ label: 'عدد الملفات', data: [45, 32, 60], backgroundColor: ['#4f46e5', '#06b6d4', '#10b981'] }] } },
      { id: 'statusChart', type: 'pie', data: { labels: ['جاهزة', 'قيد المراجعة', 'مرفوضة'], datasets: [{ data: [12, 8, 4], backgroundColor: ['#10b981', '#f59e0b', '#ef4444'] }] } },
      { id: 'employeeChart', type: 'line', data: { labels: ['أحمد', 'منى', 'سارة', 'خالد', 'محمد'], datasets: [{ label: 'عدد الملفات اليوم', data: [6, 8, 4, 9, 5], borderColor: '#6366f1', tension: 0.3, fill: true, backgroundColor: 'rgba(99, 102, 241, 0.1)' }] } },
      { id: 'debtChart', type: 'doughnut', data: { labels: ['شركة ألف', 'شركة باء', 'شركة جيم'], datasets: [{ data: [25000, 18000, 12000], backgroundColor: ['#06b6d4', '#f97316', '#8b5cf6'] }] } },
      { id: 'casesChart', type: 'bar', data: { labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'], datasets: [{ label: 'عدد القضايا', data: [20, 15, 25, 18, 30, 22], backgroundColor: '#4f46e5' }] } },
      { id: 'departmentChart', type: 'radar', data: { labels: ['قانوني', 'مالي', 'موارد بشرية', 'تسويق', 'إداري'], datasets: [{ label: 'مستوى الأداء', data: [80, 70, 90, 60, 75], backgroundColor: 'rgba(99, 102, 241, 0.2)', borderColor: '#6366f1', pointBackgroundColor: '#4f46e5' }] } },
    ];

    chartsConfig.forEach(cfg => {
      const ctx = document.getElementById(cfg.id) as HTMLCanvasElement;
      if (ctx) new Chart(ctx, { type: cfg.type as any, data: cfg.data, options: { responsive: true, maintainAspectRatio: false } });
    });
  }
}
