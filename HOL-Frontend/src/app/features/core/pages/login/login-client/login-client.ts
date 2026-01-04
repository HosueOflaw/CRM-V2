import { Component } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth';
import { LoginFormComponent } from '../login-form/login-form';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-login-client',
  standalone: true,
  imports: [LoginFormComponent],
  styleUrl: './login-client.css',
  template: `
    <app-login-form
      title="تسجيل دخول العملاء"
      logo="/assets/client-logo.svg"
      (submitForm)="login($event)"
    >
    </app-login-form>
  `,
})
export class LoginClientComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private swal: SweetAlertService
  ) { }

  login(data: { usernameOrEmail: string; password: string }) {
    const email = data.usernameOrEmail;
    this.authService.loginClient(email, data.password).subscribe({
      next: (res: any) => {
        this.authService.saveToken(res.token);
        this.authService.saveUser(res.user);
        this.recordLogin(email, 'client', 'success');

        this.swal.success({
          title: 'مرحباً!',
          text: res.message || 'تم تسجيل الدخول بنجاح',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/']);
        });
      },
      error: (err) => {
        this.recordLogin(email, 'client', 'failed');
        this.swal.error({
          title: 'خطأ',
          text: err.message || 'اسم المستخدم أو كلمة المرور غير صحيحة',
          confirmButtonText: 'حسناً'
        });
      },
    });
  }

  private recordLogin(email: string, type: string, status: string) {
    const loginRecord = {
      id: Date.now(),
      username: email,
      email: email,
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
