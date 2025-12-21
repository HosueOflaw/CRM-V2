import { Component } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth';
import { LoginFormComponent } from '../login-form/login-form';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-employee',
  standalone: true,
  imports: [LoginFormComponent],
  template: `
    <app-login-form
      title="تسجيل دخول الموظفين"
      logo="/assets/employee-logo.svg"
      (submitForm)="login($event)"
    >
    </app-login-form>
  `,
  styleUrls: ['./login-employee.css'],
})
export class LoginEmployeeComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(data: { email: string; password: string }) {
    this.authService.loginEmployee(data.email, data.password).subscribe({
      next: (res: any) => {
        this.authService.saveToken(res.token);
        this.authService.saveUser(res.user);
        this.recordLogin(data.email, 'employee', 'success');
        
        Swal.fire({
          icon: 'success',
          title: 'مرحباً!',
          text: res.message || 'تم تسجيل الدخول بنجاح',
          timer: 1500,
          showConfirmButton: false
        }).then(() => {
          this.router.navigate(['/']);
        });
      },
      error: (err) => {
        this.recordLogin(data.email, 'employee', 'failed');
        Swal.fire({
          icon: 'error',
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
