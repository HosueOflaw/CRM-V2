import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../core/services/auth';
import Swal from 'sweetalert2';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Expected roles are passed via route.data.roles
    const expectedRoles: string[] = route.data['roles'] || [];
    const user = authService.getUser();

    if (!user) {
        router.navigate(['/login']);
        return false;
    }

    const userRole = (user.role || '').toLowerCase();

    // Admin always has access
    if (userRole === 'admin') return true;

    // Check if user's role is in the allowed list
    const hasRole = expectedRoles.some(role => role.toLowerCase() === userRole);

    if (hasRole) {
        return true;
    }

    // Deny access with a polite message
    Swal.fire({
        icon: 'warning',
        title: 'غير مصرح',
        text: 'هذه الصفحة مخصصة الإدارة فقط.',
        confirmButtonText: 'فهمت',
        confirmButtonColor: '#f59e0b'
    }).then(() => {
        router.navigate(['/']);
    });

    return false;
};
