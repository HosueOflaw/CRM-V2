import { Component } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-login-public',
  imports: [CommonModule, FormsModule],
  standalone: true,
  styleUrl: './login-public.css',
  template: `
    <div class="login-page" dir="rtl">
      <div class="login-bg"></div>
      
      <div class="login-card">
        <button class="back-btn" (click)="goBack()">← رجوع</button>
        
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
      </div>
    </div>
  `,
})
export class LoginPublicComponent {
  civilId = '';
  started = false;
  txId = '';
  qr = '';
  personalLogin = false;
  status = '';

  constructor(
    private auth: AuthService, 
    private router: Router,
    private location: Location,
    private swal: SweetAlertService
  ) {}

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
