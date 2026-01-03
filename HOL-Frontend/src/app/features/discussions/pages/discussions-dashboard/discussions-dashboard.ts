import { Component } from '@angular/core';
import { DashboardLayout } from '../../../core/dashboard-layout/dashboard-layout';
import { DashboardAction } from '../../../../models/DashboardAction';
import { PermissionsForm } from '../../components/permissions-form/permissions-form';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-discussions-dashboard',
  standalone: true,
  imports: [DashboardLayout],
  templateUrl: './discussions-dashboard.html',
  styleUrl: './discussions-dashboard.css',
  providers: [DialogService]
})
export class DiscussionsDashboard {
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {}

  actions:DashboardAction[] =[
    {
      title:'إضافة قضية جديدة',
      type: 'navigate',
      value: '/discussions/add-case',
    },
    {
      title:'ترحيل جلسات ',
      type: 'navigate',
      value: '/discussions/add-case/transfer-sessions',
    },
    {
      title:'قضايا لم ترحل ',
      type: 'navigate',
      value: '/discussions/not-transferred-cases',
    },
    {
      title:'طباعة رول الجلسات ',
      type: 'navigate',
      value: '/discussions/rolls',
    },
    {
      title:'التقارير ', 
      type: 'navigate',
      value: '/discussions/reports'
    },
    {
      title:'قيد الرفع ', 
      type: 'navigate',
      value: '/discussions/upload-status'
    },
    {
      title:'كشف الطعون',
      type: 'navigate',
      value: '/discussions/appeals-overview'
    },
    {
      title:'صلاحيات الترحيل ',
      type: 'form',
      onClick: (dialog) => this.openPermissionForm(dialog),
    },
    {
      title:'التقارير العامة',
      type: 'navigate',
      value: '/discussions/general-reports'
    }, 
  ];

 openPermissionForm(dialog?: DialogService) {
    if (!dialog) return;
    const ref = dialog.open(PermissionsForm, {
      header: 'صلاحيات الترحيل',
      width: '400px',
      styleClass: 'rounded-lg',
      modal: true
    });
    if (ref) {
      this.ref = ref;
    }
  }
}
