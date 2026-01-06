import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth';
import { LoginFormComponent } from '../login-form/login-form';
import { Router } from '@angular/router';
import { PrimeToastService } from '../../../../../shared/services/prime-toast.service';
import { SweetAlertService } from '../../../../../shared/services/sweet-alert.service';
import { ToastModule } from 'primeng/toast';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-employee',
  standalone: true,
  imports: [LoginFormComponent, ToastModule],
  template: `
    <app-login-form
      title="تسجيل دخول الموظفين"
      logo="/assets/employee-logo.svg"
      (submitForm)="login($event)"
      [disabled]="isLoading"
    >
    </app-login-form>
    <p-toast position="top-center"></p-toast>
  `,
  styleUrls: ['./login-employee.css'],
})
export class LoginEmployeeComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  isLoading = false;

  // Security constants
  private readonly MAX_INPUT_LENGTH = 255;
  private readonly MIN_PASSWORD_LENGTH = 6;
  private readonly REQUEST_TIMEOUT = 30000; // 30 seconds

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: PrimeToastService,
    private swal: SweetAlertService
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login(data: { usernameOrEmail: string; password: string }): void {
    // Security: Input validation
    if (!this.validateInput(data)) {
      return;
    }

    // Security: Sanitize inputs
    const sanitizedData = this.sanitizeInput(data);

    this.isLoading = true;

    // Security: Timeout protection
    const timeout = setTimeout(() => {
      this.isLoading = false;
      this.toast.error('انتهت مهلة الاتصال. يرجى المحاولة مرة أخرى', 'خطأ في الاتصال');
    }, this.REQUEST_TIMEOUT);

    this.authService.loginEmployee(sanitizedData.usernameOrEmail, sanitizedData.password)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: any) => {
          clearTimeout(timeout);
          this.isLoading = false;

          // Security: Validate response
          if (!this.validateResponse(res)) {
            this.toast.error('استجابة غير صحيحة من الخادم', 'خطأ في الأمان');
            return;
          }

          // Security: Validate and save JWT token
          if (!res.token) {
            this.toast.error('لم يتم استلام Token من الخادم', 'خطأ في الأمان');
            return;
          }

          // Security: Clear failed attempts on success
          this.clearFailedAttempts();

          // Save token with validation
          const tokenSaved = this.authService.saveToken(res.token);
          if (!tokenSaved) {
            this.toast.error('فشل حفظ Token. يرجى المحاولة مرة أخرى', 'خطأ في الأمان');
            return;
          }

          // Save user data
          this.authService.saveUser(res.user);

          // Get message from server or use default
          const msg = res.message || 'تم تسجيل الدخول بنجاح';

          // If the message is a security warning (account open elsewhere), show a prominent Alert
          if (msg.includes('مفتوح') || msg.includes('جلسة') || msg.includes('جهاز') || msg.includes('secured')) {
            this.swal.success({
              title: 'تم تأمين الحساب',
              text: msg,
              confirmButtonText: 'حسناً، استكمال العمل',
              confirmButtonColor: '#10b981'
            });
          } else {
            this.toast.success(msg, 'مرحباً!', {
              life: 3000
            });
          }

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1500);
        },
        error: (err: any) => {
          clearTimeout(timeout);
          this.isLoading = false;


          // Security: Generic error message
          const errorMessage = this.getSecureErrorMessage(err);
          this.toast.error(errorMessage, 'خطأ في تسجيل الدخول');
        },
      });
  }

  /**
   * Security: Validate input data
   */
  private validateInput(data: { usernameOrEmail: string; password: string }): boolean {
    if (!data || !data.usernameOrEmail || !data.password) {
      this.toast.error('يرجى إدخال جميع البيانات المطلوبة', 'بيانات ناقصة');
      return false;
    }

    const usernameOrEmail = data.usernameOrEmail.trim();
    const password = data.password.trim();

    // Check length limits
    if (usernameOrEmail.length === 0 || usernameOrEmail.length > this.MAX_INPUT_LENGTH) {
      this.toast.error('اسم المستخدم أو البريد الإلكتروني غير صحيح', 'خطأ في الإدخال');
      return false;
    }

    if (password.length < this.MIN_PASSWORD_LENGTH || password.length > this.MAX_INPUT_LENGTH) {
      this.toast.error(`كلمة المرور يجب أن تكون بين ${this.MIN_PASSWORD_LENGTH} و ${this.MAX_INPUT_LENGTH} حرف`, 'خطأ في الإدخال');
      return false;
    }

    // Check for malicious input
    if (this.containsMaliciousInput(usernameOrEmail) || this.containsMaliciousInput(password)) {
      this.toast.error('يحتوي الإدخال على أحرف غير مسموح بها', 'خطأ في الأمان');
      return false;
    }

    return true;
  }

  /**
   * Security: Sanitize input to prevent XSS
   */
  private sanitizeInput(data: { usernameOrEmail: string; password: string }): { usernameOrEmail: string; password: string } {
    return {
      usernameOrEmail: this.sanitizeString(data.usernameOrEmail),
      password: data.password // Don't sanitize password to preserve special characters
    };
  }

  /**
   * Security: Sanitize string
   */
  private sanitizeString(input: string): string {
    return input
      .trim()
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+=/gi, '');
  }

  /**
   * Security: Check for malicious input patterns
   */
  private containsMaliciousInput(input: string): boolean {
    const maliciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\(/i,
      /expression\(/i
    ];
    return maliciousPatterns.some(pattern => pattern.test(input));
  }

  /**
   * Security: Validate API response
   */
  private validateResponse(res: any): boolean {
    if (!res) return false;

    // Validate token exists and is a string
    if (!res.token || typeof res.token !== 'string') return false;

    // Validate JWT format (should have 3 parts separated by dots)
    const tokenParts = res.token.split('.');
    if (tokenParts.length !== 3) return false;

    // Validate token length (JWT should be at least 50 characters)
    if (res.token.length < 50) return false;

    // Validate user object exists
    if (!res.user || typeof res.user !== 'object') return false;

    return true;
  }

  /**
   * Security: Get secure error message
   */
  private getSecureErrorMessage(err: any): string {
    // If err is an Error object (from AuthService.handleError), use its message
    if (err instanceof Error) return err.message;

    // Priority: Return the exact message from backend if available
    if (err.error?.message) return err.error.message;
    if (err.error && typeof err.error === 'string') return err.error;
    if (err.message && !err.message.includes('Http failure response')) return err.message;

    if (err.status === 401 || err.status === 403) {
      return 'اسم المستخدم أو كلمة المرور غير صحيحة';
    } else if (err.status === 429) {
      return 'تم تجاوز عدد المحاولات المسموح بها. يرجى المحاولة لاحقاً';
    } else if (err.status === 0 || !err.status) {
      return 'خطأ في الاتصال بالخادم. يرجى التحقق من الاتصال بالإنترنت';
    } else if (err.status >= 500) {
      return 'خطأ في الخادم. يرجى المحاولة لاحقاً';
    } else {
      return 'حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى';
    }
  }

  /**
   * Security: Clear any legacy lockout data
   */
  private clearFailedAttempts(): void {
    localStorage.removeItem('failed_login_attempts');
    localStorage.removeItem('login_lockout');
  }
}
