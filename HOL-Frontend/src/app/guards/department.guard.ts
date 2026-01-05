import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../core/services/auth';
import Swal from 'sweetalert2';

export const departmentGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    // Admins have access to everything
    if (authService.isAdmin()) {
        return true;
    }

    // Check if user is an employee
    if (authService.isEmployee()) {
        const userDepartment = (authService.getUserDepartment() || '').toLowerCase().trim();
        const segment = (route.routeConfig?.path || '').toLowerCase();

        console.log('--- Guard Debug Start ---');
        console.log('User Department raw:', authService.getUserDepartment());
        console.log('User Department clean:', userDepartment);
        console.log('Target Segment:', segment);

        // Robust mapping for aliases
        const depAliases: { [key: string]: string } = {
            'negotiations': 'negotiations',
            'المفاوضات': 'negotiations',
            'execution': 'execution',
            'التنفيذ': 'execution',
            'finance': 'finance',
            'المالية': 'finance',
            'الإدارة المالية': 'finance',
            'discussions': 'discussions',
            'المداولات': 'discussions',
            'reports': 'reports',
            'التقارير': 'reports',
            'report': 'reports',
            'car-management': 'car-management',
            'السيارات': 'car-management',
            'secretariat': 'secretariat',
            'السكرتارية': 'secretariat',
            'management': 'management',
            'الشؤون الإدارية': 'management',
            'managment': 'management'
        };

        const normalizedDep = depAliases[userDepartment] || userDepartment;
        console.log('Normalized Dep:', normalizedDep);

        // Access allowed if matching department or home page
        const isMatch = (normalizedDep && (segment.includes(normalizedDep) || normalizedDep.includes(segment))) || segment === '';

        console.log('Is Match:', isMatch);
        console.log('--- Guard Debug End ---');

        if (isMatch) {
            return true;
        }

        // Deny access
        Swal.fire({
            icon: 'error',
            title: 'غير مصرح',
            text: 'عذراً، ليس لديك صلاحية الوصول إلى هذا القسم.',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#3085d6'
        }).then(() => {
            router.navigate(['/']);
        });

        return false;
    }

    // Regular users - limited access (can be refined)
    // For now, allow home page, but deny department sections unless specifically allowed
    const path = route.routeConfig?.path;
    if (!path || path === 'settings') {
        return true;
    }

    return false;
};
