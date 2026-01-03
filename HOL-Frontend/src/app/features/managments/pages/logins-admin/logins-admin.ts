import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';

interface LoginRecord {
  id: number;
  username: string;
  email: string;
  loginType: 'employee' | 'client' | 'public';
  loginTime: Date;
  ipAddress: string;
  status: 'success' | 'failed';
  userAgent: string;
}

@Component({
  selector: 'app-logins-admin',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, InputTextModule, TagModule, FormsModule],
  templateUrl: './logins-admin.html',
  styleUrls: ['./logins-admin.css'],
})
export class LoginsAdminComponent implements OnInit {
  logins: LoginRecord[] = [];
  filteredLogins: LoginRecord[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.loadLogins();
  }

  loadLogins() {
    // Load from localStorage or API
    const storedLogins = localStorage.getItem('login_history');
    if (storedLogins) {
      this.logins = JSON.parse(storedLogins).map((login: any) => ({
        ...login,
        loginTime: new Date(login.loginTime),
      }));
    } else {
      // Sample data
      this.logins = [
        {
          id: 1,
          username: 'أحمد محمد',
          email: 'ahmed@example.com',
          loginType: 'employee',
          loginTime: new Date(),
          ipAddress: '192.168.1.1',
          status: 'success',
          userAgent: 'Chrome 120.0',
        },
        {
          id: 2,
          username: 'سارة علي',
          email: 'sara@example.com',
          loginType: 'client',
          loginTime: new Date(Date.now() - 3600000),
          ipAddress: '192.168.1.2',
          status: 'success',
          userAgent: 'Firefox 121.0',
        },
        {
          id: 3,
          username: 'محمد خالد',
          email: 'mohamed@example.com',
          loginType: 'public',
          loginTime: new Date(Date.now() - 7200000),
          ipAddress: '192.168.1.3',
          status: 'failed',
          userAgent: 'Safari 17.0',
        },
      ];
    }
    this.filteredLogins = [...this.logins];
  }

  onSearch() {
    if (!this.searchTerm) {
      this.filteredLogins = [...this.logins];
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredLogins = this.logins.filter(
      (login) =>
        login.username.toLowerCase().includes(term) ||
        login.email.toLowerCase().includes(term) ||
        login.ipAddress.includes(term)
    );
  }

  getSeverity(status: string) {
    return status === 'success' ? 'success' : 'danger';
  }

  getLoginTypeLabel(type: string) {
    const labels: Record<string, string> = {
      employee: 'موظف',
      client: 'عميل',
      public: 'عام',
    };
    return labels[type] || type;
  }

  exportToExcel() {
    // TODO: Implement Excel export
    console.log('Exporting to Excel...');
  }
}

