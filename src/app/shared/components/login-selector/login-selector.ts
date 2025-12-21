import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-selector',
  imports: [CommonModule],
  templateUrl: './login-selector.html',
  styleUrl: './login-selector.css'
})
export class LoginSelector {
    constructor(private router: Router) {}

 goTo(path: string) {
    this.router.navigate([path]);
  }
}
