import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css'],
})
export class LoginFormComponent {
  @Input() title = '';
  @Input() logo = '/assets/logo.svg';
  @Input() disabled = false;
  @Output() submitForm = new EventEmitter<{
    usernameOrEmail: string;
    password: string;
  }>();

  constructor(private location: Location) {}

  usernameOrEmail = '';
  password = '';

  onSubmit() {
    if (!this.disabled) {
      this.submitForm.emit({ usernameOrEmail: this.usernameOrEmail, password: this.password });
    }
  }
  goBack() {
    this.location.back();
  }
}
