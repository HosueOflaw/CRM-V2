import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../theme/theme.service';

interface Department {
  name: string;
  route: string;
  icon?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent implements OnInit {

  isSidebarHidden = true;
  currentTheme: 'light' | 'dark' = 'light';

  departments: Department[] = [
    { name: 'المفاوضات', route: '/negotiations' },
    { name: 'السكرتارية',  route: '/secretariat' },
    { name: 'التنفيذ',  route: '/execution' },
    { name: 'ضبط السيارات',  route: '/car-management' },
    { name: 'التقارير',  route: '/reports' },
    { name: 'الإدارة المالية',  route: '/finance' },
    { name: 'المداولات',  route: '/discussions' },
    { name: 'الشؤون الإدارية', route: '/management' },
  ];

  constructor(private renderer: Renderer2, public themeService: ThemeService) {}

  ngOnInit() {
  const saved = localStorage.getItem('theme');

  // نجبر القيمة على أن تكون "light" أو "dark"
  this.currentTheme = saved === 'dark' ? 'dark' : 'light';

  // تطبيق الثيم
  this.themeService.applyTheme(this.currentTheme);
}



  toggleSidebar() {
    this.isSidebarHidden = !this.isSidebarHidden;
  }

  applyTheme() {
    this.renderer.setAttribute(
      document.documentElement,
      'data-theme',
      this.currentTheme
    );
  }

 toggleTheme() {
  // تغيير الثيم
  this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';

  // حفظه في localStorage
  localStorage.setItem('theme', this.currentTheme);

  // تطبيقه عبر ThemeService
  this.themeService.applyTheme(this.currentTheme);
}

}
