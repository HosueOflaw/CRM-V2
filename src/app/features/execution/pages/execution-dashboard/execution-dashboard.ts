import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DashboardLayout } from '../../../core/dashboard-layout/dashboard-layout';
import { DashboardAction } from '../../../../models/DashboardAction';
import { ClassificationModel } from '../../components/classification-model/classification-model';

@Component({
  selector: 'app-execution-dashboard',
  imports: [DashboardLayout],
  standalone: true,
  templateUrl: './execution-dashboard.html',
  styleUrl: './execution-dashboard.css',
  providers: [DialogService]
})
export class ExecutionDashboard {
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) {}

  actions: DashboardAction[] = [
    {
      title: 'الصفحة الرئيسية',
      subtitle: 'عرض التفاصيل',
      icon: '📄',
      type: 'navigate',
      value: '/execution/main',
    },
    {
      title: 'العملاء',
      type: 'navigate',
      value: '/execution/main/clients',
    },
    {
      title: 'المراجعة',
      type: 'navigate',
      value: '/execution/main/review',
    },
    {
      title: 'رفع الإجراءات',
      type: 'navigate',
      value: '/execution/main/actions',
    },
    {
      title: 'منطوق الحكم',
      type: 'navigate',
      value: '/execution/main/judgment',
    },
    {
      title: 'الجلسات',
      type: 'navigate',
      value: '/execution/main/sessions',
    },
    {
      title: 'طلب العهدة',
      type: 'navigate',
      value: '/execution/main/requests',
    },
    {
      title: 'استلام الأحكام',
      type: 'navigate',
      value: '/execution/main/receive',
    },
    {
      title: 'الملفات الجديدة',
      type: 'navigate',
      value: '/execution/main/files',
    },
    {
      title: 'كشف الطعون',
      icon: '📝',
      type: 'navigate',
      value: '/execution/appeals',
    },
    {
      title: 'ادخال العهدة',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/custody',
    },
    {
      title: 'استلام و اعلان الصيغ',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/announcing-formulas',
    },
    {
      title: 'التوكيلات',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/agencies',
    },
    {
      title: 'اضافة التصنيفات',
      icon: '🔄',
      type: 'form',
      onClick:(dialog)=>this.openAddCategoryForm(dialog)
    },
    {
      title: 'استلام الاحكام',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/judgments',
    },
    {
      title: 'ملفات التنفيذ',
      icon: '🔄',
      type: 'navigate',
      value: '/execution/execution-statements',
    },
  ];

  openAddCategoryForm(dialog?: DialogService) {
    if (!dialog) return;
    const ref = dialog.open(ClassificationModel, {
      header: 'إضافة التصنيفات',
      width: '700px',
      modal: true,
      dismissableMask: false
    });
    if (ref) {
      this.ref = ref;
    }
  }


  callApi() {
    console.log('استدعاء API...');
  }
}
