import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';
import { LoginHistoryService, LoginHistoryRecord } from '../../../../services/login-history.service';

interface LoginRecord {
  id: number;
  username: string;
  email: string;
  loginType: 'employee' | 'client' | 'public' | 'admin';
  loginTime: Date;
  ipAddress: string;
  status: 'success' | 'failed';
  userAgent: string;
  browser?: string;
  os?: string;
  country?: string;
}

@Component({
  selector: 'app-logins-admin',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    TooltipModule,
    FormsModule,
    SkeletonModule
  ],
  templateUrl: './logins-admin.html',
  styleUrls: ['./logins-admin.css'],
})
export class LoginsAdminComponent implements OnInit {
  logins: LoginRecord[] = [];
  loading: boolean = true;
  searchTerm: string = '';

  // Filters
  statuses = [
    { label: 'الكل', value: null },
    { label: 'نجح', value: 'success' },
    { label: 'فشل', value: 'failed' }
  ];
  selectedStatus: any = null;

  // Date filters (HTML date input returns string in YYYY-MM-DD format)
  startDate: string | null = null;
  endDate: string | null = null;

  constructor(private loginHistoryService: LoginHistoryService) { }

  ngOnInit() {
    this.loadLogins();
  }

  loadLogins() {
    this.loading = true;

    // Fetch real login history from backend
    this.loginHistoryService.getLoginHistory().subscribe({
      next: (history) => {
        this.processLoginHistory(history);
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch login history', err);
        this.logins = [];
        this.loading = false;
      }
    });
  }

  processLoginHistory(history: LoginHistoryRecord[]) {
    this.logins = history.map((record) => {
      // Parse user agent to extract browser and OS
      const ua = record.userAgent || '';
      let browser = 'Unknown';
      let os = 'Unknown';

      // Simple browser detection
      if (ua.includes('Chrome')) browser = 'Chrome';
      else if (ua.includes('Firefox')) browser = 'Firefox';
      else if (ua.includes('Safari')) browser = 'Safari';
      else if (ua.includes('Edge')) browser = 'Edge';

      // Simple OS detection
      if (ua.includes('Windows')) os = 'Windows';
      else if (ua.includes('Mac')) os = 'macOS';
      else if (ua.includes('Linux')) os = 'Linux';
      else if (ua.includes('Android')) os = 'Android';
      else if (ua.includes('iOS') || ua.includes('iPhone')) os = 'iOS';

      // Map role to loginType
      let type: any = 'employee';
      if (record.role) {
        const r = record.role.toLowerCase();
        if (r.includes('admin')) type = 'admin';
        else if (r.includes('client')) type = 'client';
        else if (r.includes('supervisor')) type = 'employee';
        else type = 'employee';
      }

      return {
        id: record.id,
        username: record.userName || 'مستخدم',
        email: record.email || '',
        loginType: type,
        loginTime: new Date(record.loginTime),
        ipAddress: record.ipAddress || 'N/A',
        status: 'success' as 'success' | 'failed',
        userAgent: record.userAgent || '',
        browser: browser,
        os: os,
        country: 'Saudi Arabia'
      };
    }).sort((a, b) => b.loginTime.getTime() - a.loginTime.getTime());
  }

  getSeverity(status: string) {
    return status === 'success' ? 'success' : 'danger';
  }

  getStatusLabel(status: string) {
    return status === 'success' ? 'ناجح' : 'فشل';
  }

  getLoginTypeLabel(type: string) {
    const labels: Record<string, string> = {
      employee: 'موظف',
      client: 'عميل',
      public: 'عام',
      admin: 'مدير نظام'
    };
    return labels[type] || type;
  }

  getLoginTypeSeverity(type: string) {
    switch (type) {
      case 'admin': return 'danger';
      case 'employee': return 'info';
      case 'client': return 'warn';
      default: return 'secondary';
    }
  }

  exportToExcel() {
    // Mock export
    console.log('Exporting data...', this.logins);
  }

  applyDateFilter(dt: any) {
    // Convert string dates to Date objects for comparison
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;

    if (start || end) {
      // Filter manually since PrimeNG doesn't have built-in date range filter
      const filtered = this.logins.filter(login => {
        const loginDate = new Date(login.loginTime);
        loginDate.setHours(0, 0, 0, 0); // Reset time for date-only comparison

        if (start && end) {
          return loginDate >= start && loginDate <= end;
        } else if (start) {
          return loginDate >= start;
        } else if (end) {
          return loginDate <= end;
        }
        return true;
      });

      dt.value = filtered;
    } else {
      // Reset to original data
      dt.value = this.logins;
    }
  }

  refresh() {
    this.loadLogins();
  }
}

