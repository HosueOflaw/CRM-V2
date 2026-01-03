import { DialogService } from 'primeng/dynamicdialog';

export interface DashboardAction {
  title?: string;
  subtitle?: string;
  icon?: string;
  type?: 'navigate' | 'form' | 'api';
  value?: string;
  onClick?: (dialog?: DialogService) => void;
}
