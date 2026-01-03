import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { LayoutService } from '../../layout/service/layout.service';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  constructor(private layoutService: LayoutService) {}

  /**
   * Get SweetAlert2 configuration with dark mode support
   */
  private getSwalConfig(options: SweetAlertOptions = {}): SweetAlertOptions {
    // Check if dark mode is active by checking document class
    const isDark = document.documentElement.classList.contains('app-dark') || 
                   document.body.classList.contains('app-dark') ||
                   this.layoutService.isDarkTheme();
    
    return {
      ...options,
      customClass: {
        popup: isDark ? 'swal2-dark' : '',
        title: isDark ? 'swal2-title-dark' : '',
        htmlContainer: isDark ? 'swal2-html-dark' : '',
        confirmButton: isDark ? 'swal2-confirm-dark' : '',
        cancelButton: isDark ? 'swal2-cancel-dark' : '',
        ...options.customClass
      }
    };
  }

  /**
   * Show success alert
   */
  success(options: SweetAlertOptions) {
    return Swal.fire(this.getSwalConfig({
      icon: 'success',
      ...options
    }));
  }

  /**
   * Show error alert
   */
  error(options: SweetAlertOptions) {
    return Swal.fire(this.getSwalConfig({
      icon: 'error',
      ...options
    }));
  }

  /**
   * Show warning alert
   */
  warning(options: SweetAlertOptions) {
    return Swal.fire(this.getSwalConfig({
      icon: 'warning',
      ...options
    }));
  }

  /**
   * Show info alert
   */
  info(options: SweetAlertOptions) {
    return Swal.fire(this.getSwalConfig({
      icon: 'info',
      ...options
    }));
  }

  /**
   * Show question alert
   */
  question(options: SweetAlertOptions) {
    return Swal.fire(this.getSwalConfig({
      icon: 'question',
      ...options
    }));
  }

  /**
   * Show custom alert with full control
   */
  fire(options: SweetAlertOptions) {
    return Swal.fire(this.getSwalConfig(options));
  }

  /**
   * Show loading indicator
   */
  showLoading() {
    return Swal.showLoading();
  }
}

