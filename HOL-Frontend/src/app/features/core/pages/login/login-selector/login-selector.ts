import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-login-selector',
  standalone: true,
  imports: [CommonModule, RouterModule, SkeletonModule],
  template: `
    <div class="login-page" dir="rtl">
      <!-- Background -->
      <div class="login-bg"></div>
      
      <div class="login-container">
        <!-- CRM Info Section -->
        <div class="crm-info">
          <!-- Skeleton Loading for Logo Section -->
          <div *ngIf="loading" class="logo-section">
             <div class="flex justify-center mb-4"><p-skeleton shape="circle" size="4rem" styleClass="bg-white/20"></p-skeleton></div>
             <div class="flex justify-center mb-2"><p-skeleton width="12rem" height="2.5rem" styleClass="bg-white/20"></p-skeleton></div>
             <div class="flex justify-center"><p-skeleton width="8rem" styleClass="bg-white/20"></p-skeleton></div>
          </div>

          <div *ngIf="!loading" class="logo-section">
            <div class="logo-icon">⚖️</div>
            <h1>بيت القانون</h1>
            <p class="tagline">نظام إدارة المحاماة المتكامل</p>
          </div>
          
          <!-- Skeleton Loading for Features -->
           <div *ngIf="loading" class="features">
              <div class="feature" *ngFor="let i of [1,2,3]">
                 <p-skeleton shape="circle" size="2rem" styleClass="bg-white/20"></p-skeleton>
                 <div class="flex-1">
                    <p-skeleton width="6rem" styleClass="mb-2 bg-white/20"></p-skeleton>
                    <p-skeleton width="10rem" height="0.8rem" styleClass="bg-white/20"></p-skeleton>
                 </div>
              </div>
           </div>

          <div *ngIf="!loading" class="features">
            <div class="feature">
              <span class="feature-icon">📋</span>
              <div>
                <h3>إدارة القضايا</h3>
                <p>متابعة شاملة لجميع القضايا والملفات</p>
              </div>
            </div>
            <div class="feature">
              <span class="feature-icon">💰</span>
              <div>
                <h3>الإدارة المالية</h3>
                <p>تتبع المدفوعات والمستحقات</p>
              </div>
            </div>
            <div class="feature">
              <span class="feature-icon">📊</span>
              <div>
                <h3>التقارير</h3>
                <p>تقارير تفصيلية وإحصائيات</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Login Selector Section -->
        <div class="selector-section">
          <!-- Skeleton Loading for Header -->
          <div *ngIf="loading">
             <p-skeleton width="15rem" height="2rem" styleClass="mb-2"></p-skeleton>
             <p-skeleton width="10rem" styleClass="mb-8"></p-skeleton>
             
             <div class="flex flex-col gap-4">
                <div class="p-4 border border-gray-100 rounded-xl flex items-center gap-4" *ngFor="let i of [1,2,3]">
                   <div class="flex-1">
                      <p-skeleton width="8rem" height="1.2rem" styleClass="mb-2"></p-skeleton>
                      <p-skeleton width="6rem" height="0.8rem"></p-skeleton>
                   </div>
                   <p-skeleton shape="circle" size="1.5rem"></p-skeleton>
                </div>
             </div>
             
             <div class="mt-8 pt-6 border-t border-gray-100 flex flex-col items-center gap-2">
                <p-skeleton width="12rem"></p-skeleton>
                <p-skeleton width="8rem"></p-skeleton>
             </div>
          </div>

          <ng-container *ngIf="!loading">
            <h2>اختر طريقة الدخول</h2>
            <p class="subtitle">يرجى اختيار نوع الحساب للمتابعة</p>
            
            <div class="login-options">
              <a routerLink="/login/employee" class="login-option employee">
                <div class="option-content">
                  <h3>دخول الموظفين</h3>
                  <p>للموظفين والمحامين</p>
                </div>
                <span class="arrow">←</span>
              </a>

              <a routerLink="/login/client" class="login-option client">
                <div class="option-content">
                  <h3>دخول الموكلين</h3>
                  <p>للعملاء والموكلين</p>
                </div>
                <span class="arrow">←</span>
              </a>

              <a routerLink="/login/public" class="login-option public">
                <div class="option-content">
                  <h3>دخول عام (هويتي)</h3>
                  <p>التحقق عبر هويتي</p>
                </div>
                <span class="arrow">←</span>
              </a>
            </div>

            <div class="help-text">
              <p>للمساعدة يرجى التواصل مع الدعم الفني</p>
              <a href="tel:+96599999999">+965 9999 9999</a>
            </div>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 2rem;
    }

    .login-bg {
      position: fixed;
      inset: 0;
      background: linear-gradient(135deg, #1a365d 0%, #2d3748 50%, #1a202c 100%);
      z-index: -1;
    }

    .app-dark .login-bg {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0a0e1a 100%);
    }

    .login-bg::before {
      content: '';
      position: absolute;
      inset: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .login-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 1000px;
      width: 100%;
      background: var(--surface-card);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }

    .crm-info {
      background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
      color: white;
      padding: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .logo-section {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .logo-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .logo-section h1 {
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0;
    }

    .tagline {
      font-size: 1rem;
      opacity: 0.9;
      margin-top: 0.5rem;
    }

    .features {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .feature {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }

    .feature-icon {
      font-size: 2rem;
    }

    .feature h3 {
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0 0.25rem 0;
    }

    .feature p {
      font-size: 0.875rem;
      opacity: 0.85;
      margin: 0;
    }

    .selector-section {
      padding: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--surface-card);
    }

    .selector-section h2 {
      font-size: 1.75rem;
      font-weight: bold;
      color: var(--text-color);
      margin: 0 0 0.5rem 0;
    }

    .subtitle {
      color: var(--text-color-secondary);
      margin: 0 0 2rem 0;
    }

    .login-options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .login-option {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      border: 2px solid var(--surface-border);
      border-radius: 12px;
      text-decoration: none;
      color: var(--text-color);
      background: var(--surface-card);
      transition: all 0.3s ease;
    }

    .login-option:hover {
      border-color: #3182ce;
      transform: translateX(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .login-option.employee:hover {
      border-color: #3182ce;
      background: rgba(49, 130, 206, 0.05);
    }

    .login-option.client:hover {
      border-color: #38a169;
      background: rgba(56, 161, 105, 0.05);
    }

    .login-option.public:hover {
      border-color: #d69e2e;
      background: rgba(214, 158, 46, 0.05);
    }

    .option-icon {
      font-size: 2.5rem;
    }

    .option-content {
      flex: 1;
    }

    .option-content h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0 0 0.25rem 0;
      color: var(--text-color);
    }

    .option-content p {
      font-size: 0.875rem;
      color: var(--text-color-secondary);
      margin: 0;
    }

    .arrow {
      font-size: 1.5rem;
      color: var(--text-color-secondary);
      transition: transform 0.3s ease;
    }

    .login-option:hover .arrow {
      transform: translateX(-4px);
      color: #3182ce;
    }

    .help-text {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--surface-border);
      text-align: center;
    }

    .help-text p {
      font-size: 0.875rem;
      color: var(--text-color-secondary);
      margin: 0 0 0.5rem 0;
    }

    .help-text a {
      color: var(--primary-color, #3b82f6);
      font-weight: 600;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      .login-container {
        grid-template-columns: 1fr;
      }

      .crm-info {
        padding: 2rem;
      }

      .selector-section {
        padding: 2rem;
      }
    }
  `]
})
export class LoginSelectorComponent implements OnInit {
  loading = true;

  ngOnInit() {
    // Simulate initial loading for effect as requested
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
