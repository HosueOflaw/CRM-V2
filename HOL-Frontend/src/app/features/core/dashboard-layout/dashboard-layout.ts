import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DashboardAction } from '../../../models/DashboardAction';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ButtonModule],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
  providers: [DialogService]
})
export class DashboardLayout {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() actions: DashboardAction[] = [];
  ref: DynamicDialogRef | undefined;
 
  constructor(private router: Router, private dialogService: DialogService) {}
 
  handleAction(action: DashboardAction) {
    switch (action.type) {
      case 'navigate':
        if (action.value) this.router.navigateByUrl(action.value);
        break;

      case 'form':
        if (action.onClick) {
          // Check if the function expects a parameter by checking its length
          const funcLength = action.onClick.length;
          if (funcLength === 0) {
            // Function doesn't expect any parameters, call it directly
            (action.onClick as () => void)();
          } else {
            // Function expects a parameter, pass dialogService
            action.onClick(this.dialogService);
          }
        }
        break;

      case 'api':
        if (action.onClick) action.onClick(undefined);
        break;

      default:
        // If no type is specified, try to call onClick if it exists
        if (action.onClick) {
          const funcLength = action.onClick.length;
          if (funcLength === 0) {
            (action.onClick as () => void)();
          } else {
            action.onClick(this.dialogService);
          }
        } else {
          console.warn('Unknown action type:', action);
        }
    }
  }
}
