import { Component, ViewChild } from '@angular/core';
import { DataTable } from '../../components/shared/data-table/data-table';

@Component({
  selector: 'app-agencies-page',
  standalone: true,
  imports: [DataTable],
  templateUrl: './agencies-page.html',
  styleUrl: './agencies-page.css'
})
export class AgenciesPage {
  columns = [
    { header: 'رقم التوكيل', field: 'code' },
    { header: 'الوكيل', field: 'agent' },
    { header: 'الموكل', field: 'client' },
    { header: 'المحكمة', field: 'court' },
    { header: 'تاريخ الإصدار', field: 'issueDate' },
    { header: 'تاريخ الانتهاء', field: 'expiryDate' },
    { header: 'الحالة', field: 'status' },
  ];

  // 🔹 بيانات تجريبية
  results = [
    {
      code: 'T-001',
      agent: 'محمود خالد',
      client: 'شركة النور',
      court: 'محكمة شمال الرياض',
      issueDate: '2024-06-01',
      expiryDate: '2026-06-01',
      status: 'ساري',
    },
    {
      code: 'T-002',
      agent: 'سارة إبراهيم',
      client: 'محمد علي',
      court: 'محكمة شرق جدة',
      issueDate: '2023-05-10',
      expiryDate: '2025-05-10',
      status: 'منتهي',
    },
  ];

  // 🔹 إعدادات الـ Lookup Modal
  lookupConfig = {
  title: '🧾 اختر التوكيل',
  columns: ['name', 'city', 'type'],
  data: [
    { name: 'توكيل شمال الرياض', city: 'الرياض', type: 'عام' },
    { name: 'توكيل شرق جدة', city: 'جدة', type: 'خاص' },
  ],
  targetField: 'name',
};

  title = '📜 التوكيلات';
  filterLabel = 'المحكمة';
  searchPlaceholder = 'ابحث برقم التوكيل أو اسم الموكل أو المحكمة...';
}
