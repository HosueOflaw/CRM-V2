import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Signalr } from '../../services/signalr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private signalr: Signalr
  ) { }

  /**
   * Universal Login - Authenticates users against the real API
   */
  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.apiUrl}/Users/login`, loginData, { headers })
      .pipe(
        map((response: any) => {
          if (response && response.success) {
            const token = response.token || response.userId?.toString();
            this.signalr.startConnection(token);

            return {
              status: 'success',
              token: token,
              user: {
                ...response,
                id: response.userId,
                username: response.username,
                full_name: response.fullName,
                email: response.email,
                role: response.role,
                department: response.department || response.section || response.Section || response.Group || response.group || response.Department,
                name: response.fullName || response.username
              },
              expiresIn: response.expiresIn || 3600,
              message: response.message || 'تم تسجيل الدخول بنجاح'
            };
          } else {
            throw new Error(response.message || 'فشل تسجيل الدخول');
          }
        }),
        catchError(this.handleError)
      );
  }

  loginAdmin(username: string, password: string): Observable<any> {
    return this.login(username, password);
  }

  loginEmployee(username: string, password: string): Observable<any> {
    return this.login(username, password);
  }

  loginClient(email: string, password: string): Observable<any> {
    return this.login(email, password);
  }

  loginViaHawiyati(): Observable<any> {
    return throwError(() => new Error('خدمة هويتي غير مفعلة حالياً على هذا النظام. يرجى تسجيل الدخول يدويأً.'));
  }

  private handleError(error: any) {
    let errorMessage = 'اسم المستخدم أو كلمة المرور غير صحيحة';
    if (error.error) {
      errorMessage = error.error.message || (typeof error.error === 'string' ? error.error : error.error.error) || errorMessage;
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
  }

  /**
   * Logout - Send POST request to backend and clear all authentication data
   */
  logout(): Observable<any> {
    const token = this.getToken();

    // Prepare headers with token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });

    // Send logout request to backend
    return this.http.post<any>(`${this.apiUrl}/Users/logout`, {}, { headers })
      .pipe(
        // Always clear local data regardless of backend response
        map((response: any) => {
          this.clearLocalAuthData();
          this.signalr.stopConnection();
          return response;
        }),
        catchError((error: any) => {
          // Clear local data even if backend request fails
          this.clearLocalAuthData();
          this.signalr.stopConnection();

          // Log error but don't throw (user should still be logged out locally)
          console.warn('Logout request failed, but local data cleared:', error);

          // Return success to allow logout to proceed
          return of({ success: true, message: 'تم تسجيل الخروج محلياً' });
        })
      );
  }

  /**
   * Logout without backend call (for force logout)
   */
  logoutLocal(): void {
    this.clearLocalAuthData();
    this.signalr.stopConnection();
  }

  /**
   * Initialize SignalR if user is logged in (for page refresh)
   */
  initSignalRIfLoggedIn(): void {
    if (this.isLoggedIn()) {
      const token = this.getToken();
      if (token) {
        this.signalr.startConnection(token);
      }
    }
  }

  /**
   * Clear all local authentication data
   */
  private clearLocalAuthData(): void {
    // Clear all localStorage items related to auth
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('token_expires_at');
    localStorage.removeItem('refresh_token');

    // Clear sessionStorage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.clear();

    // Clear any cached data
    localStorage.removeItem('failed_login_attempts');
    localStorage.removeItem('login_lockout');
  }

  /**
   * Save JWT Token with validation
   */
  saveToken(token: string): boolean {
    if (!token || typeof token !== 'string') {
      console.error('Invalid token provided');
      return false;
    }

    // Validate JWT format
    if (!this.isValidJWT(token)) {
      console.error('Invalid JWT token format');
      return false;
    }

    // Decode and validate JWT
    const decodedToken = this.decodeJWT(token);
    if (!decodedToken) {
      console.error('Failed to decode JWT token');
      return false;
    }

    // Check if token is expired
    if (this.isTokenExpired(decodedToken)) {
      console.error('Token is already expired');
      return false;
    }

    // Save token
    localStorage.setItem('token', token);
    sessionStorage.setItem('token', token);

    // Save expiration time
    if (decodedToken.exp) {
      const expiresAt = decodedToken.exp * 1000; // Convert to milliseconds
      localStorage.setItem('token_expires_at', expiresAt.toString());
    }

    return true;
  }

  /**
   * Save user data
   */
  saveUser(user: any): void {
    if (!user || typeof user !== 'object') {
      console.error('Invalid user data');
      return;
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Get JWT Token
   */
  getToken(): string | null {
    const token = localStorage.getItem('token');

    // Validate token if exists
    if (token && this.isValidJWT(token)) {
      const decodedToken = this.decodeJWT(token);
      if (decodedToken && !this.isTokenExpired(decodedToken)) {
        return token;
      } else {
        // Token expired, clear it locally
        this.logoutLocal();
        return null;
      }
    }

    return token;
  }

  /**
   * Get user data
   */
  getUser(): any {
    const user = localStorage.getItem('user');
    if (!user) return null;

    try {
      const parsedUser = JSON.parse(user);
      return parsedUser;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  }

  /**
   * Check if user is logged in and token is valid
   */
  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    const decodedToken = this.decodeJWT(token);
    if (!decodedToken) return false;

    return !this.isTokenExpired(decodedToken);
  }

  /**
   * Check if JWT token is valid format
   */
  private isValidJWT(token: string): boolean {
    if (!token || typeof token !== 'string') return false;

    // JWT format: header.payload.signature (3 parts separated by dots)
    const parts = token.split('.');
    if (parts.length !== 3) return false;

    // Check if parts are base64 encoded
    try {
      parts.forEach(part => {
        if (!part || part.length === 0) throw new Error('Empty part');
        // Base64 URL decode test
        atob(part.replace(/-/g, '+').replace(/_/g, '/'));
      });
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Decode JWT token
   */
  private decodeJWT(token: string): any | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;

      // Decode payload (second part)
      const payload = parts[1];
      const decoded = JSON.parse(
        atob(payload.replace(/-/g, '+').replace(/_/g, '/'))
      );

      return decoded;
    } catch (error) {
      console.error('Error decoding JWT:', error);
      return null;
    }
  }

  /**
   * Check if token is expired
   */
  private isTokenExpired(decodedToken: any): boolean {
    if (!decodedToken || !decodedToken.exp) return true;

    const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();

    return currentTime >= expirationTime;
  }

  /**
   * Get token expiration time
   */
  getTokenExpiration(): Date | null {
    const token = this.getToken();
    if (!token) return null;

    const decodedToken = this.decodeJWT(token);
    if (!decodedToken || !decodedToken.exp) return null;

    return new Date(decodedToken.exp * 1000);
  }

  /**
   * Check if token will expire soon (within 5 minutes)
   */
  isTokenExpiringSoon(): boolean {
    const expiration = this.getTokenExpiration();
    if (!expiration) return true;

    const fiveMinutes = 5 * 60 * 1000;
    return expiration.getTime() - Date.now() < fiveMinutes;
  }

  getCurrentUserName(): string {
    const user = this.getUser();
    return user?.name || user?.fullName || 'مستخدم';
  }

  /**
   * Check if current user is Admin
   */
  isAdmin(): boolean {
    const user = this.getUser();
    if (!user) return false;
    const role = (user.role || user.Role || user.userRole || user.UserRole || '').toLowerCase().trim();
    return role === 'admin' || role === 'administrator';
  }

  /**
   * Check if current user is Employee
   */
  isEmployee(): boolean {
    const user = this.getUser();
    if (!user) return false;
    const role = (user.role || user.Role || user.userRole || user.UserRole || '').toLowerCase().trim();
    return role === 'employee';
  }

  /**
   * Get current user's department
   */
  getUserDepartment(): string | null {
    const user = this.getUser();
    if (!user) return null;

    // Log available keys to help debug
    const dep = user.department || user.Department || user.section || user.Section ||
      user.group || user.Group || user.dept || user.Dept;

    console.log('AuthService: Detected Department:', dep, 'from user object:', user);
    return dep || null;
  }
}
