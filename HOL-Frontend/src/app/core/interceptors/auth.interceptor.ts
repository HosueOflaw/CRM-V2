import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(AuthService);
    const router = inject(Router);
    const token = authService.getToken();

    let clonedReq = req;
    if (token) {
        clonedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    return next(clonedReq).pipe(
        catchError((error: HttpErrorResponse) => {
            // 401 Unauthorized means the token is invalid (expired or invalidated by single session rule)
            // But we should skip the redirect if the user is ALREADY trying to login
            const isLoginRequest = req.url.includes('/login');

            if (error.status === 401 && !isLoginRequest) {
                console.warn('Unauthorized request (401). Redirecting to login...');
                authService.logoutLocal();
                router.navigate(['/login']);
            }
            return throwError(() => error);
        })
    );
};
