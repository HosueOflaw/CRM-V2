import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

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
    // Use real API endpoint: POST /api/Users/login
    const loginData = {
      username: username,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/Users/login`, loginData, { headers })
      .pipe(
        map((response: any) => {
          // Handle API response - LoginResponseDto from backend
          if (response && response.success) {
            return {
              status: 'success',
              token: response.token || response.userId?.toString(), // JWT Token from backend
              user: {
                id: response.userId,
                username: response.username,
                full_name: response.fullName,
                email: response.email,
                role: response.role,
                name: response.fullName || response.username
              },
              expiresIn: response.expiresIn || 3600,
              message: response.message || 'تم تسجيل الدخول بنجاح'
            };
          } else {
            throw new Error(response.message || 'فشل تسجيل الدخول');
          }
        }),
        catchError((error: any) => {
          // Handle different error types
          let errorMessage = 'اسم المستخدم أو كلمة المرور غير صحيحة';
          
          if (error.error) {
            if (error.error.message) {
              errorMessage = error.error.message;
            } else if (typeof error.error === 'string') {
              errorMessage = error.error;
            } else if (error.error.error) {
              errorMessage = error.error.error;
            }
          } else if (error.message) {
            errorMessage = error.message;
          }

          if (error.status === 401 || error.status === 403) {
            errorMessage = 'اسم المستخدم أو كلمة المرور غير صحيحة';
          } else if (error.status === 0) {
            errorMessage = 'خطأ في الاتصال بالخادم. تأكد من تشغيل الباك إند';
          } else if (error.status >= 500) {
            errorMessage = 'خطأ في الخادم. يرجى المحاولة مرة أخرى';
          }

          return throwError(() => new Error(errorMessage));
        })
      );
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
    sessionStorage.removeItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);
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
