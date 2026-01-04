import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export type ToastSeverity = 'success' | 'info' | 'warn' | 'error';

export interface ToastOptions {
  summary?: string;
  detail?: string;
  life?: number; // milliseconds
  closable?: boolean;
  sticky?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PrimeToastService {
  constructor(private messageService: MessageService) {}

  /**
   * Show success toast
   */
  success(message: string, title?: string, options?: ToastOptions) {
    this.show('success', message, title, options);
  }

  /**
   * Show error toast
   */
  error(message: string, title?: string, options?: ToastOptions) {
    this.show('error', message, title, options);
  }

  /**
   * Show warning toast
   */
  warning(message: string, title?: string, options?: ToastOptions) {
    this.show('warn', message, title, options);
  }

  /**
   * Show info toast
   */
  info(message: string, title?: string, options?: ToastOptions) {
    this.show('info', message, title, options);
  }

  /**
   * Show custom toast
   */
  show(
    severity: ToastSeverity,
    message: string,
    title?: string,
    options?: ToastOptions
  ) {
    this.messageService.add({
      severity,
      summary: title || this.getDefaultTitle(severity),
      detail: message,
      life: options?.life || 3000,
      closable: options?.closable !== false,
      sticky: options?.sticky || false
    });
  }

  /**
   * Clear all toasts
   */
  clear() {
    this.messageService.clear();
  }

  /**
   * Get default title based on severity
   */
  private getDefaultTitle(severity: ToastSeverity): string {
    const titles: Record<ToastSeverity, string> = {
      success: 'نجح!',
      error: 'خطأ',
      warn: 'تحذير',
      info: 'معلومة'
    };
    return titles[severity];
  }
}

