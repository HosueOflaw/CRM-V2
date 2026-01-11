import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Signalr } from '../../services/signalr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;
  private userUpdatedSubject = new Subject<any>();
  public userUpdated$ = this.userUpdatedSubject.asObservable();

  constructor(
    private http: HttpClient,
    private signalr: Signalr
  ) { }

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
            console.log('--- Raw Login Response from API ---', response);
            const token = response.token || response.userId?.toString();

            // Start SignalR connection (Role-based channel joining happens internally)
            this.signalr.startConnection(token);

            // --- Robust extraction of accessible departments ---
            let rawDeps = response.accessibleDepartments || response.AccessibleDepartments || [];

            // Case 1: If it's a string (e.g. "secretariat,negotiations"), split it
            if (typeof rawDeps === 'string') {
              rawDeps = rawDeps.split(',').map((d: string) => d.trim()).filter((d: string) => !!d);
            }

            // Case 2: Even if still empty, check the JWT token
            if ((!rawDeps || (Array.isArray(rawDeps) && rawDeps.length === 0)) && token) {
              const decoded = this.decodeJWT(token);
              if (decoded && decoded.AccessibleDepartments) {
                rawDeps = typeof decoded.AccessibleDepartments === 'string'
                  ? decoded.AccessibleDepartments.split(',')
                  : decoded.AccessibleDepartments;
              }
            }

            // Case 3: Ensure array of strings (Preserve Case for matching!)
            const finalDeps = Array.isArray(rawDeps) ? rawDeps.map((d: any) => String(d).trim()) : [];

            return {
              status: 'success',
              token: token, // JWT Token from backend
              user: {
                ...response, // Include all fields from API response
                id: response.userId,
                username: response.username,
                full_name: response.fullName,
                email: response.email,
                role: (response.role || '').toLowerCase().trim(),
                department: response.department || response.section || response.Section || response.Group || response.group || response.Department,
                name: response.fullName || response.username,
                accessibleDepartments: finalDeps,
                // Ensure we capture strict supervision department if available
                supervisedDepartment: response.supervisedDepartment || response.SupervisedDepartment || response.department
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
   * Start SignalR if user is logged in
   */
  initSignalRIfLoggedIn(): void {
    const token = this.getToken();
    if (token) {
      this.signalr.startConnection(token);

      // Listen for SignalR messages
      this.signalr.message$.subscribe(msg => {
        if (msg.type === 'reconnected') {
          // SignalR service handles automatic re-join of role-based channels
          console.log('🔄 SignalR reconnected event acknowledged.');
        }
        if (
          msg.type === 'permissions_updated' ||
          msg.type === 'ApprovePermission' ||
          msg.type === 'permission_request_processed' ||
          msg.type === 'permissions_delegated'
        ) {
          console.log('🔄 Permission update notification received via SignalR. Refreshing user data...');
          this.refreshCurrentUser().subscribe();
        }
      });
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
   * Save user data and notify listeners
   */
  saveUser(user: any): void {
    if (!user || typeof user !== 'object') {
      console.error('Invalid user data');
      return;
    }
    localStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('user', JSON.stringify(user));
    this.userUpdatedSubject.next(user);
  }

  /**
   * Refresh the current user's data from the backend
   * This is useful after a permission request is approved
   */
  refreshCurrentUser(): Observable<any> {
    const user = this.getUser();
    if (!user || !user.id) return of(null);

    const token = this.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    });

    return this.http.get<any>(`${this.apiUrl}/Users/${user.id}`, { headers }).pipe(
      map(updatedUser => {
        console.log('--- RAW REFRESH RESPONSE FROM SERVER ---', updatedUser);
        if (updatedUser) {
          // --- Robust extraction of accessible departments ---
          let rawDeps = updatedUser.accessibleDepartments || updatedUser.AccessibleDepartments || user.accessibleDepartments || user.AccessibleDepartments || [];

          // Case 1: If it's a string (e.g. "secretariat,negotiations"), split it
          if (typeof rawDeps === 'string') {
            rawDeps = rawDeps.split(',').map(d => d.trim()).filter(d => !!d);
          }

          // Case 2: Even if still null/empty, check the JWT token just in case
          if ((!rawDeps || rawDeps.length === 0) && updatedUser.token) {
            const decoded = this.decodeJWT(updatedUser.token);
            if (decoded && decoded.AccessibleDepartments) {
              rawDeps = typeof decoded.AccessibleDepartments === 'string'
                ? decoded.AccessibleDepartments.split(',')
                : decoded.AccessibleDepartments;
            }
          }

          // Case 3: Ensure we have an array of strings (Preserve Case)
          const finalDeps = Array.isArray(rawDeps) ? rawDeps.map(d => String(d).trim()) : [];

          const normalizedUser = {
            ...user, // Keep token/metadata
            ...updatedUser,
            id: updatedUser.id || updatedUser.userId || user.id,
            role: (updatedUser.role || updatedUser.Role || user.role || '').toLowerCase().trim(),
            department: updatedUser.department || updatedUser.Section || updatedUser.Department || user.department,
            supervisedDepartment: updatedUser.supervisedDepartment || updatedUser.SupervisedDepartment || updatedUser.department,
            accessibleDepartments: finalDeps
          };

          console.log('--- NORMALIZED USER AFTER REFRESH ---', normalizedUser);
          this.saveUser(normalizedUser);
          return normalizedUser;
        }
        return null;
      }),
      catchError(err => {
        console.error('refreshCurrentUser error:', err);
        return of(null);
      })
    );
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
    const role = (user.role || user.Role || '').toLowerCase().trim();
    return role === 'admin' || role === 'administrator';
  }

  /**
   * Check if current user is Supervisor
   */
  isSupervisor(): boolean {
    const user = this.getUser();
    if (!user) return false;
    const role = (user.role || user.Role || '').toLowerCase().trim();
    return role === 'supervisor';
  }

  /**
   * Check if current user is Employee
   */
  isEmployee(): boolean {
    const user = this.getUser();
    if (!user) return false;
    const role = (user.role || user.Role || '').toLowerCase().trim();
    return role === 'employee';
  }

  /**
   * Get current user's primary department
   */
  getUserDepartment(): string | null {
    const user = this.getUser();
    if (!user) return null;
    return user.department || user.Department || user.supervisedDepartment || user.SupervisedDepartment || null;
  }

  /**
   * Check if a specific department is accessible (Primary or Additional)
   */
  canAccessDepartment(deptName: string): boolean {
    if (this.isAdmin()) return true;

    const user = this.getUser();
    if (!user) return false;

    // Mapping for normalization
    const depAliases: { [key: string]: string } = {
      'negotiations': 'negotiations', 'المفاوضات': 'negotiations',
      'execution': 'execution', 'التنفيذ': 'execution',
      'finance': 'finance', 'المالية': 'finance', 'الإدارة المالية': 'finance',
      'discussions': 'discussions', 'المداولات': 'discussions',
      'reports': 'reports', 'التقارير': 'reports', 'report': 'reports',
      'car-management': 'car-management', 'السيارات': 'car-management',
      'secretariat': 'secretariat', 'السكرتارية': 'secretariat',
      'management': 'management', 'الشؤون الإدارية': 'management', 'managment': 'management'
    };

    const primaryDept = (this.getUserDepartment() || '').toLowerCase().trim();
    const targetDept = (deptName || '').toLowerCase().trim();

    const normalizedPrimary = depAliases[primaryDept] || primaryDept;
    const normalizedTarget = depAliases[targetDept] || targetDept;

    if (normalizedPrimary === normalizedTarget) return true;

    // Check additional accessible departments (from approved requests)
    const accessibleDepts: string[] = user.accessibleDepartments || user.AccessibleDepartments || [];
    return accessibleDepts.some(d => {
      const norm = depAliases[d.toLowerCase().trim()] || d.toLowerCase().trim();
      return norm === normalizedTarget;
    });
  }

  /**
   * Check if user has a specific feature permission
   */
  hasFeature(featureCode: string): boolean {
    if (this.isAdmin()) return true;

    const user = this.getUser();
    if (!user) return false;

    const features: string[] = user.accessibleFeatures || [];
    return features.includes(featureCode);
  }
}
