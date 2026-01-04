import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../../core/services/auth';
import { LoginFormComponent } from '../login-form/login-form';
import { Router } from '@angular/router';
import { PrimeToastService } from '../../../../../shared/services/prime-toast.service';
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
  private readonly MAX_LOGIN_ATTEMPTS = 5;
  private readonly LOCKOUT_DURATION = 15 * 60 * 1000; // 15 minutes
  private readonly MAX_INPUT_LENGTH = 255;
  private readonly MIN_PASSWORD_LENGTH = 6;
  private readonly REQUEST_TIMEOUT = 30000; // 30 seconds

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toast: PrimeToastService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login(data: { usernameOrEmail: string; password: string }): void {
    // Security: Input validation
    if (!this.validateInput(data)) {
      return;
    }

    // Security: Rate limiting check
    if (this.isAccountLocked()) {
      const remainingTime = this.getLockoutRemainingTime();
      this.toast.error(
        `تم تجاوز عدد المحاولات المسموح بها. يرجى المحاولة بعد ${remainingTime} دقيقة`,
        'حساب مقفل مؤقتاً'
      );
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
          
          this.toast.success('تم تسجيل الدخول بنجاح', 'مرحباً!', {
            life: 1500
          });
          
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1500);
        },
        error: (err: any) => {
          clearTimeout(timeout);
          this.isLoading = false;
          
          // Security: Record failed attempt
          this.recordFailedAttempt();
          
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
   * Security: Rate limiting - Check if account is locked
   */
  private isAccountLocked(): boolean {
    const lockoutData = localStorage.getItem('login_lockout');
    if (!lockoutData) return false;

    try {
      const lockout = JSON.parse(lockoutData);
      if (Date.now() < lockout.until) {
        return true;
      } else {
        localStorage.removeItem('login_lockout');
        localStorage.removeItem('failed_login_attempts');
        return false;
      }
    } catch {
      localStorage.removeItem('login_lockout');
      return false;
    }
  }

  /**
   * Security: Get remaining lockout time in minutes
   */
  private getLockoutRemainingTime(): number {
    const lockoutData = localStorage.getItem('login_lockout');
    if (!lockoutData) return 0;

    try {
      const lockout = JSON.parse(lockoutData);
      const remaining = Math.ceil((lockout.until - Date.now()) / (60 * 1000));
      return remaining > 0 ? remaining : 0;
    } catch {
      return 0;
    }
  }

  /**
   * Security: Record failed login attempt
   */
  private recordFailedAttempt(): void {
    const attempts = this.getFailedAttempts();
    attempts.count++;
    attempts.lastAttempt = Date.now();
    
    localStorage.setItem('failed_login_attempts', JSON.stringify(attempts));

    // Lock account after max attempts
    if (attempts.count >= this.MAX_LOGIN_ATTEMPTS) {
      const lockout = {
        until: Date.now() + this.LOCKOUT_DURATION,
        reason: 'too_many_attempts'
      };
      localStorage.setItem('login_lockout', JSON.stringify(lockout));
    }
  }

  /**
   * Security: Get failed login attempts
   */
  private getFailedAttempts(): { count: number; lastAttempt: number } {
    const attemptsData = localStorage.getItem('failed_login_attempts');
    if (!attemptsData) {
      return { count: 0, lastAttempt: 0 };
    }

    try {
      const attempts = JSON.parse(attemptsData);
      // Reset attempts if last attempt was more than 1 hour ago
      if (Date.now() - attempts.lastAttempt > 60 * 60 * 1000) {
        return { count: 0, lastAttempt: 0 };
      }
      return attempts;
    } catch {
      return { count: 0, lastAttempt: 0 };
    }
  }

  /**
   * Security: Clear failed attempts on successful login
   */
  private clearFailedAttempts(): void {
    localStorage.removeItem('failed_login_attempts');
    localStorage.removeItem('login_lockout');
  }
}
