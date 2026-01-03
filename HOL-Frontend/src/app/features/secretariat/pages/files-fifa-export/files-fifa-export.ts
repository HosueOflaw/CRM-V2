import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-files-fifa-export',
  imports: [CommonModule, FormsModule],
  templateUrl: './files-fifa-export.html',
  styleUrl: './files-fifa-export.css'
})
export class FilesFifaExport {
 
  // ==========================================
  // متغير العنوان: الآن يستقبل قيمة افتراضية ويمكن تغييره ديناميكياً
  // ==========================================
  @Input() title: string = 'تصدير ملفات فيفا';

  // التبويب النشط (1: الرئيسية، 2: الأخطاء)
  activeTab: number = 1;

  // متغيرات تبويب "الرئيسية"
  mainSearchText: string = '';
  selectedDate: string = '2025-11-15';

  // حقن ActivatedRoute للوصول لبيانات الراوتر
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 1. فحص الـ State (للحالات التي يتم فيها النقل بالكود مع تمرير بيانات)
    // مثال: router.navigate(['...'], { state: { title: 'طباعة ملفات فيفا' } })
    if (history.state && history.state.title) {
      this.title = history.state.title;
    }

    // 2. فحص الـ Route Data (إذا كان العنوان معرفاً في ملف التوجيه app.routes.ts)
    // مثال: { path: '...', component: ..., data: { title: '...' } }
    this.route.data.subscribe(data => {
      if (data['title']) {
        this.title = data['title'];
      }
    });

    // 3. فحص الـ Query Params (اختياري، لو الرابط فيه ?title=...)
    this.route.queryParams.subscribe(params => {
      if (params['title']) {
        this.title = params['title'];
      }
    });
  }

  // دالة تغيير التبويب
  setActiveTab(tabId: number) {
    this.activeTab = tabId;
  }

  // دوال الأزرار
  exportExcel() {
    console.log('Exporting Excel...');
  }

  deleteErrors() {
    console.log('Deleting Errors...');
  }

  showErrors() {
    console.log('Showing Errors...');
  }

  searchMain() {
    console.log('Searching for:', this.mainSearchText);
  }
}
