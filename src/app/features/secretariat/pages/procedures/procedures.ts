import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx'; // استيراد المكتبة بعد تثبيتها
interface ReportRow {
  id: string;
  code: string;
  name: string;
  date: string;
  action: string;
  notes: string;
  client: string;
  status: string;
  secretary: string;
  delegateStatus: string;
  autoNumber: string;
  uploadDate: string;
  reference: string; // المراجع
  reviewDate: string;
  debtReason: string;
  court: string;
}

@Component({
  selector: 'app-procedures',
  imports: [CommonModule, FormsModule],
  templateUrl: './procedures.html',
  styleUrl: './procedures.css'
})
export class Procedures {
activeTab: number = 1;

  // متغيرات الفلترة في تبويب التقارير
  reportFromDate: string = new Date().toISOString().split('T')[0];
  reportToDate: string = new Date().toISOString().split('T')[0];
  lookupValue: string = ''; // القيمة المرتبطة بزر الـ ...

  // بيانات الفورم (تبويب 1)
  formData = {
    code: '',
    court:'',
    name: '',
    civilId: '',
    contract: '',
    amount: '',
    subClient: '',
    procedure: '',
    reason: '',
    notes: '',
    client:'',
    legal_prosecutor:'',
    autoNumber:''
  };

  openLookupModal() {
    console.log('Opening Lookup Modal...');
  }

  searchByCode() {
    if (!this.formData.code) return;

    // محاكاة جلب بيانات من السيرفر
    console.log('Searching for code:', this.formData.code);
    
    // هنا تضع كود الـ Service الحقيقي، سأقوم بوضع بيانات وهمية للتجربة
    this.formData = {
      ...this.formData,
      name: 'محمد أحمد محمود',
      civilId: '290010101234',
      contract: 'CONT-2025-99',
      client:'شركة الاتصالات الكويتية - stc',
      amount: '500.000',
      subClient: 'الشركة الدولية',
      court: 'الأحمدي',
      legal_prosecutor: 'سداد',
      procedure: 'حفظ',
      reason: 'سداد',
      notes: 'تم الاتفاق على السداد',
      autoNumber: '998877'
    };
  }

  // دالة التراجع (مسح البيانات)
  resetForm() {
    this.formData = {
    code: '',
    court:'',
    name: '',
    civilId: '',
    contract: '',
    amount: '',
    subClient: '',
    procedure: '',
    reason: '',
    notes: '',
    client:'',
    legal_prosecutor:'',
    autoNumber:''
    };
  }


  // =========================
  // Tab 2: متغيرات ومنطق التقارير
  // =========================
  reportFilters = {
    fromDate: '2025-11-01',
    toDate: '2025-11-29',
    lookup: '',
    status: 'all' // all, uploaded, not_uploaded
  };

  // بيانات وهمية للجدول الكبير (مطابقة للصورة الجديدة)
  reportRows: ReportRow[] = [
    { id: '16357', code: '863414', name: 'منيرة محمد سعد...', date: '11/1/2025', action: 'جميع الإجراءات', notes: 'يرجى رفع كافة الإج...', client: 'شركة مستشفى...', status: 'حفظ', secretary: 'Ahmed Abdallah', delegateStatus: 'المندوب لم يستلم', autoNumber: '240784270', uploadDate: 'تم الرفع', reference: '', reviewDate: '', debtReason: 'سداد', court: 'الاحمدي' },
    { id: '16358', code: '863420', name: 'ريم نوري هلال...', date: '11/1/2025', action: 'تم التنفيذ', notes: 'يرجى اغلاق الملف...', client: 'شركة مستشفى...', status: 'حفظ', secretary: 'Ahmed Allam', delegateStatus: 'المندوب لم يستلم', autoNumber: '224050720', uploadDate: 'لم يتم الرفع', reference: '', reviewDate: '', debtReason: 'سداد', court: 'الاحمدي' },
    { id: '16367', code: '1118837', name: 'بركة حمدان منور...', date: '11/1/2025', action: 'منع سفر', notes: 'رفع منع السفر فقط...', client: 'شركة الاتصالات...', status: 'تسوية', secretary: 'Ahmed Saad', delegateStatus: 'المندوب لم يستلم', autoNumber: '241201400', uploadDate: 'تم الرفع', reference: '697', reviewDate: '11/3/2025', debtReason: 'تسوية', court: 'الجهراء' },
    // ... يمكنك نسخ المزيد من البيانات
  ];

  filteredReports: ReportRow[] = [...this.reportRows];

  // دالة البحث في التقارير
  searchReports() {
    // فلترة بسيطة للتجربة
    this.filteredReports = this.reportRows.filter(row => {
        // يمكنك إضافة شروط التاريخ هنا
        if(this.reportFilters.status === 'uploaded' && row.uploadDate !== 'تم الرفع') return false;
        if(this.reportFilters.status === 'not_uploaded' && row.uploadDate !== 'لم يتم الرفع') return false;
        return true;
    });
  }

  // دالة تصدير الإكسل
  exportToExcel() {
    /* يجب تثبيت المكتبة: npm install xlsx 
       إذا لم ترد تثبيتها الآن، يمكنك استخدام كود الـ CSV البسيط، ولكن هذا الكود هو الأفضل
    */
    
    // 1. تجهيز البيانات (يمكنك اختيار الأعمدة التي تريد تصديرها فقط)
    const dataToExport = this.filteredReports.map(row => ({
      'ID': row.id,
      'الكود': row.code,
      'الاسم': row.name,
      'تاريخ الرفع': row.date,
      'الاجراء': row.action,
      'الملاحظات': row.notes,
      'الموكل': row.client,
      'الحالة': row.status,
      'السكرتارية': row.secretary,
      'استلام المندوب': row.delegateStatus,
      'الرقم الآلي': row.autoNumber,
      'الرفع': row.uploadDate,
      'المراجع': row.reference,
      'تاريخ المراجعة': row.reviewDate,
      'سبب الرفع': row.debtReason,
      'المحكمة': row.court
    }));

    // 2. إنشاء Worksheet
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);

    // 3. إنشاء Workbook
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reports');

    // 4. الحفظ
    XLSX.writeFile(wb, `Reports_${new Date().getTime()}.xlsx`);
  }

  setActiveTab(tabId: number) {
    this.activeTab = tabId;
  }
}
