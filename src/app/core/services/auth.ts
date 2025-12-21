import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '';

  constructor(private http: HttpClient) { }

  // Admin login (temporary - works with admin/123456)
  loginAdmin(username: string, password: string): Observable<any> {
    if (username === 'admin' && password === '123456') {
      const response = {
        status: 'success',
        token: 'admin-token-' + Date.now(),
        user: {
          id: 1,
          username: 'admin',
          name: 'مدير النظام',
          role: 'admin'
        },
        message: 'تم تسجيل الدخول بنجاح'
      };
      return of(response);
    } else {
      return throwError(() => new Error('اسم المستخدم أو كلمة المرور غير صحيحة'));
    }
  }

  loginEmployee(username: string, password: string): Observable<any> {
    // Temporary: use admin credentials
    return this.loginAdmin(username, password);
  }

  loginClient(email: string, password: string): Observable<any> {
    // Temporary: use admin credentials (email as username)
    return this.loginAdmin(email, password);
  }

  loginViaHawiyati(): Observable<any> {
    const simulatedResponse = {
      status: 'success',
      token: 'hawiyati-token-' + Date.now(),
      name: 'أحمد محمد',
      nationalId: '1234567890',
      message: 'تم تسجيل الدخول بنجاح (محاكاة هويتي)'
    };
    return of(simulatedResponse);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  saveUser(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getCurrentUserName(): string {
    const user = this.getUser();
    return user?.name || 'مستخدم';
  }
}
