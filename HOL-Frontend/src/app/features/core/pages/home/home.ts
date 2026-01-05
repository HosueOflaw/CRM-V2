import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../../core/services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [RouterModule, CommonModule, InputTextModule, ButtonModule],
})
export class HomePage {
  currentUser: any;
  filteredDepartments: any[] = [];

  departments = [
    { name: 'المفاوضات', icon: '📞', route: '/negotiations', color: 'primary', key: 'negotiations' },
    { name: 'الشؤون الإدارية', icon: '👥', route: '/management', color: 'secondary', key: 'management' },
    { name: 'المالية', icon: '💰', route: '/finance', color: 'accent', key: 'finance' },
    { name: 'التقارير', icon: '📊', route: '/reports', color: 'info', key: 'reports' },
    { name: 'السيارات', icon: '🚗', route: '/car-management', color: 'warning', key: 'car-management' },
    { name: 'السكرتارية', icon: '📝', route: '/secretariat', color: 'success', key: 'secretariat' },
    { name: 'التنفيذ', icon: '⚙️', route: '/execution', color: 'error', key: 'execution' },
    { name: 'المداولات', icon: '⚖️', route: '/discussions', color: 'help', key: 'discussions' },
  ];

  constructor(public authService: AuthService) {
    this.currentUser = this.authService.getUser();
    this.filterDepartments();
  }

  filterDepartments() {
    const isAdmin = this.authService.isAdmin();
    const isEmployee = this.authService.isEmployee();
    const userDep = (this.authService.getUserDepartment() || '').toLowerCase().trim();

    console.log('--- Home Filtering Debug ---');
    console.log({ isAdmin, isEmployee, userDep });

    if (isAdmin) {
      this.filteredDepartments = this.departments;
    } else if (isEmployee) {
      // Robust matching with aliases and substring support
      const depAliases: { [key: string]: string } = {
        'negotiations': 'negotiations',
        'المفاوضات': 'negotiations',
        'secretariat': 'secretariat',
        'secretary': 'secretariat',
        'secrtrya': 'secretariat',
        'السكرتارية': 'secretariat',
        'execution': 'execution',
        'التنفيذ': 'execution',
        'finance': 'finance',
        'المالية': 'finance',
        'الإدارة المالية': 'finance',
        'discussions': 'discussions',
        'المداولات': 'discussions',
        'reports': 'reports',
        'التقارير': 'reports',
        'report': 'reports',
        'car-management': 'car-management',
        'السيارات': 'car-management',
        'management': 'management',
        'الشؤون الإدارية': 'management',
        'شؤون إدارية': 'management',
        'hr': 'management'
      };

      const matchedKey = userDep ? (depAliases[userDep] || depAliases[Object.keys(depAliases).find(k => k.length > 0 && k.includes(userDep)) || '']) : null;
      this.filteredDepartments = this.departments.filter(d => d.key === matchedKey);
      console.log('Home matched department:', matchedKey);
    } else {
      this.filteredDepartments = [];
    }
  }
}
