import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../../../../shared/services/sweet-alert.service';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-login-public',
  imports: [CommonModule, FormsModule, SkeletonModule],
  standalone: true,
  styleUrl: './login-public.css',
  template: `
    <div class="login-page" dir="rtl">
      <div class="login-bg"></div>
      
      <div class="login-card">
        <button class="back-btn" (click)="goBack()">← رجوع</button>
        
        <!-- Skeleton Loading State -->
        <div *ngIf="loading" class="animate-pulse">
            <div class="login-header">
                <div class="flex justify-center mb-4"><p-skeleton shape="circle" size="4rem"></p-skeleton></div>
                <div class="flex justify-center mb-2"><p-skeleton width="12rem" height="2rem"></p-skeleton></div>
                <div class="flex justify-center"><p-skeleton width="10rem"></p-skeleton></div>
            </div>

            <div class="login-form">
                <div class="form-field mb-4">
                    <p-skeleton width="6rem" styleClass="mb-2"></p-skeleton>
                    <p-skeleton width="100%" height="3rem" borderRadius="0.75rem"></p-skeleton>
                </div>

                <div class="checkbox-field mb-6 flex gap-2 items-center">
                    <p-skeleton width="1.5rem" height="1.5rem" borderRadius="0.25rem"></p-skeleton>
                    <p-skeleton width="6rem"></p-skeleton>
                </div>
                
                <div class="hint-box mb-6 border border-gray-100 p-3 rounded-lg flex items-center gap-3">
                    <p-skeleton shape="circle" size="1.5rem"></p-skeleton>
                    <p-skeleton width="100%" styleClass="bg-gray-50"></p-skeleton>
                </div>

                <p-skeleton width="100%" height="3.5rem" borderRadius="0.75rem"></p-skeleton>
            </div>
        </div>

        <!-- Real Content -->
        <ng-container *ngIf="!loading">
            <div class="login-header">
            <div class="login-icon">🪪</div>
            <h2>تسجيل الدخول العام</h2>
            <p class="subtitle">الدخول عبر الهوية الرقمية</p>
            </div>
            
            <form (ngSubmit)="onSubmit()" class="login-form">
            <div class="form-field">
                <label class="form-label">الرقم المدني</label>
                <input
                type="text"
                class="form-input"
                placeholder="أدخل الرقم المدني"
                [(ngModel)]="civilId"
                name="civilId"
                required
                />
            </div>

            <div class="checkbox-field">
                <label>
                <input type="checkbox" [(ngModel)]="personalLogin" name="personalLogin" />
                <span>دخول شخصي</span>
                </label>
            </div>

            <div class="hint-box">
                <span>🔐</span>
                <span>سيتم التحقق عبر تطبيق هويتي - يمكنك إدخال أي رقم مدني للاختبار</span>
            </div>

            <button type="submit" class="form-button form-button-primary submit-btn">
                تسجيل الدخول عبر هويتي
            </button>
            </form>

            <div *ngIf="started" class="qr-section">
            <p>امسح رمز QR من تطبيق هويتي</p>
            <img [src]="qr" alt="QR Code" class="qr-code" />
            <p class="status" [class.success]="status === 'approved'" [class.error]="status === 'rejected'">
                {{ status === 'pending' ? 'في انتظار التأكيد...' : 
                status === 'approved' ? 'تم التأكيد ✓' : 
                'تم الرفض ✗' }}
            </p>
            </div>
        </ng-container>
      </div>
    </div>
  `,
})
export class LoginPublicComponent implements OnInit {
  civilId = '';
  started = false;
  txId = '';
  qr = '';
  personalLogin = false;
  status = '';
  loading = true;

  constructor(
    private auth: AuthService,
    private router: Router,
    private location: Location,
    private swal: SweetAlertService
  ) { }

  ngOnInit() {
    // Simulate initial loading for requested skeleton effect
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    if (!this.civilId) {
      this.swal.warning({
        title: 'تنبيه',
        text: 'يرجى إدخال الرقم المدني',
        confirmButtonText: 'حسناً'
      });
      return;
    }

    this.auth.loginViaHawiyati().subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token || 'hawiyati-token-' + Date.now());
        this.auth.saveUser({
          id: 1,
          username: this.civilId,
          name: res.name || 'مستخدم هويتي',
          role: 'public'
        });
        this.recordLogin(this.civilId, 'public', 'success');

        this.swal.success({
          title: 'مرحباً!',
          text: res.message || 'تم تسجيل الدخول بنجاح',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/']);
        });
      },
      error: () => {
        this.recordLogin(this.civilId, 'public', 'failed');
        this.swal.error({
          title: 'خطأ',
          text: 'حدث خطأ أثناء التحقق',
          confirmButtonText: 'حسناً'
        });
      },
    });
  }

  private recordLogin(civilId: string, type: string, status: string) {
    const loginRecord = {
      id: Date.now(),
      username: 'Civil ID: ' + civilId,
      email: '',
      loginType: type,
      loginTime: new Date().toISOString(),
      ipAddress: '192.168.1.1',
      status: status,
      userAgent: navigator.userAgent,
    };

    const logins = JSON.parse(localStorage.getItem('login_history') || '[]');
    logins.unshift(loginRecord);
    if (logins.length > 100) {
      logins.pop();
    }
    localStorage.setItem('login_history', JSON.stringify(logins));
  }
}
