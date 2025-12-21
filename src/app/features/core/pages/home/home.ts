import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [RouterModule, CommonModule, InputTextModule, ButtonModule],
})
export class HomePage {
  departments = [
    { name: 'المفاوضات', icon: '📞', route: '/negotiations', color: 'primary' },
    { name: 'الموارد البشرية', icon: '👥', route: '/hr', color: 'secondary' },
    { name: 'المالية', icon: '💰', route: '/finance', color: 'accent' },
    { name: 'التقارير', icon: '📊', route: '/reports', color: 'info' },
    {
      name: 'السيارات',
      icon: '🚗',
      route: '/car-management',
      color: 'warning',
    },
    { name: 'الإدارة', icon: '🏢', route: '/admin', color: 'success' },
  ];
}
