import { ChangeDetectionStrategy, Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// =================== واجهات البيانات ===================
// هيكل صف التقرير
interface PerformanceRow {
  company: string;          // اسم الشركة
  sector: string;           // قطاع الشركة
  totalSales: number;       // إجمالي المبيعات (وهمي)
  successRate: number;      // نسبة النجاح
}

// هيكل خيارات القطاعات
interface SectorOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-report-companies-performance',
  standalone: true,
  templateUrl: './report-companies-performance.html',
  styleUrls: ['./report-companies-performance.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [RouterModule, CommonModule, FormsModule],
})
export class ReportCompaniesPerformance implements OnInit {

  // =================== حالة المكون (Signals) ===================
  fromDate = signal<string>(''); // من تاريخ
  toDate = signal<string>('');   // إلى تاريخ
  selectedSector = signal<string>('all'); // القطاع المختار

  // الجدول فارغ في البداية
  reportData = signal<PerformanceRow[]>([]);

  // =================== خصائص المكون (Properties) ===================
  sectors: SectorOption[] = [
    { value: 'all', label: 'ALL' },
    { value: 'telecom', label: 'Telecom' },
    { value: 'cars', label: 'Cars' },
    { value: 'medical', label: 'Medical' },
    { value: 'retail', label: 'Retail' },
    { value: 'real-estate', label: 'Real estate' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'foodstuffs', label: 'Foodstuffs' },
    { value: 'education', label: 'Education' },
    { value: 'finance', label: 'Finance' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'soft-telecom', label: 'Soft Telecom' },
    { value: 'cars-big', label: 'Cars Big' },
    { value: 'cars-castle', label: 'Cars castle' },
    { value: 'retail-kw', label: 'Retail KW' },
    { value: 'soft-retail', label: 'Soft Retail' },
    { value: 'soft-retail-nk', label: 'Soft Retail NK' },
    { value: 'factory-owned', label: 'مصنع مملوك' },
    { value: 'sub-telecom', label: 'Sub Telecom' },
    { value: 'personal-real-estate', label: 'Personal Real estate' },
  ];

  // =================== دورة حياة المكون (Lifecycle Hooks) ===================
  constructor() {}

  ngOnInit(): void {
    // تعيين التواريخ الافتراضية
    const today = new Date().toISOString().split('T')[0];
    this.fromDate.set('2025-01-01'); // مثال لتاريخ سابق
    this.toDate.set(today);
  }

  // =================== منطق المكون (Methods) ===================

  // دالة تحميل التقرير (تحاكي استدعاء الـ API)
  loadReports(): void {
    console.log('Fetching Company Performance Report with parameters:', {
      from: this.fromDate(),
      to: this.toDate(),
      sector: this.selectedSector()
    });

    // يتم هنا استدعاء خدمة الباك إند

    // بيانات وهمية للعرض بعد الضغط على الزر
    const dummyData: PerformanceRow[] = this.generateDummyReport();
    this.reportData.set(dummyData);
  }

  // دالة لتوليد بيانات وهمية
  private generateDummyReport(): PerformanceRow[] {
    const data: PerformanceRow[] = [
      { company: 'Zain Telecom', sector: 'Telecom', totalSales: 520000, successRate: 85.5 },
      { company: 'Alghanim Motors', sector: 'Cars', totalSales: 180000, successRate: 78.2 },
      { company: 'Bayan Clinic', sector: 'Medical', totalSales: 95000, successRate: 92.0 },
      { company: 'Future Retail', sector: 'Retail', totalSales: 310000, successRate: 81.7 },
    ];
    // إضافة فلترة بسيطة للبيانات الوهمية
    const sectorFilter = this.selectedSector();
    if (sectorFilter !== 'all') {
        return data.filter(row => row.sector.toLowerCase() === sectorFilter.toLowerCase());
    }
    return data;
  }
}
