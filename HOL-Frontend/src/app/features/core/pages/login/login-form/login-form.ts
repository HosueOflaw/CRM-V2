import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { UserService } from '../../../../../services/user.service';
import { PrimeToastService } from '../../../../../shared/services/prime-toast.service';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, DialogModule, InputTextModule, ButtonModule, SkeletonModule],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css'],
})
export class LoginFormComponent {
  @Input() title = '';
  @Input() logo = '/assets/logo.svg';
  @Input() disabled = false;
  @Input() initialLoading = false;
  @Output() submitForm = new EventEmitter<{
    usernameOrEmail: string;
    password: string;
  }>();

  constructor(
    private location: Location,
    private userService: UserService,
    private toast: PrimeToastService
  ) { }

  usernameOrEmail = '';
  password = '';
  showPassword = false;

  // Forgot Password State
  showForgotPassword = false;
  forgotPasswordStep = 1; // 1: Email, 2: Token & New Password
  resetEmail = '';
  resetToken = '';
  newPassword = '';
  isRequesting = false;

  openForgotPassword() {
    this.showForgotPassword = true;
    this.forgotPasswordStep = 1;
    this.resetEmail = '';
    this.resetToken = '';
    this.newPassword = '';
  }

  closeForgotPassword() {
    this.showForgotPassword = false;
  }

  requestResetCode() {
    if (!this.resetEmail) {
      this.toast.error('يرجى إدخال البريد الإلكتروني', 'بيانات ناقصة');
      return;
    }

    this.isRequesting = true;
    this.userService.forgotPassword({ email: this.resetEmail }).subscribe({
      next: () => {
        this.isRequesting = false;
        this.forgotPasswordStep = 2;
        this.toast.success('تم إرسال كود التحقق بنجاح', 'نجاح');
      },
      error: (err) => {
        this.isRequesting = false;
        const msg = err.error?.message || 'فشل إرسال الكود. تأكد من صحة البريد الإلكتروني';
        this.toast.error(msg, 'خطأ');
      }
    });
  }

  submitNewPassword() {
    if (!this.resetToken || !this.newPassword) {
      this.toast.error('يرجى إكمال جميع البيانات', 'بيانات ناقصة');
      return;
    }

    this.isRequesting = true;
    this.userService.resetPassword({
      email: this.resetEmail,
      token: this.resetToken,
      newPassword: this.newPassword
    }).subscribe({
      next: () => {
        this.isRequesting = false;
        this.toast.success('تم إعادة تعيين كلمة المرور بنجاح', 'نجاح');
        this.closeForgotPassword();
      },
      error: (err) => {
        this.isRequesting = false;
        const msg = err.error?.message || 'فشل إعادة تعيين كلمة المرور. تأكد من صحة الكود';
        this.toast.error(msg, 'خطأ');
      }
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (!this.disabled) {
      this.submitForm.emit({ usernameOrEmail: this.usernameOrEmail, password: this.password });
    }
  }
  goBack() {
    this.location.back();
  }
}
