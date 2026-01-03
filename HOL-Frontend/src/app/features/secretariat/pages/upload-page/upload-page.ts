import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx'; // استدعاء المكتبة
@Component({
  selector: 'app-upload-page',
  imports: [CommonModule],
  templateUrl: './upload-page.html',
  styleUrl: './upload-page.css'
})
export class UploadPage {
// للوصول إلى عنصر الـ input المخفي
  @ViewChild('fileInput') fileInput!: ElementRef;

  // لتخزين البيانات القادمة من الإكسل
  excelData: any[] = [];
  
  // أسماء الأعمدة (سيتم استخراجها تلقائياً من أول صف في الإكسل)
  tableHeaders: string[] = [];

  // دالة النقر على زر Upload
  triggerFileUpload() {
    this.fileInput.nativeElement.click();
  }

  // دالة معالجة الملف عند اختياره
  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    
    // التأكد من اختيار ملف واحد فقط
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();
    
    reader.onload = (e: any) => {
      // 1. قراءة البيانات كـ Binary String
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      // 2. الحصول على اسم أول ورقة (Sheet)
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      // 3. تحويل البيانات إلى JSON
      this.excelData = XLSX.utils.sheet_to_json(ws);

      // 4. استخراج العناوين ديناميكياً (اختياري)
      if (this.excelData.length > 0) {
        this.tableHeaders = Object.keys(this.excelData[0]);
      }
      
      console.log(this.excelData); // للتأكد في الكونسول
    };

    reader.readAsBinaryString(target.files[0]);
  }

  // دالة زر Excel (تحميل نموذج فارغ مثلاً)
  downloadTemplate() {
    // بيانات وهمية كعنوان للأعمدة
    const template = [
      { 'الكود': '', 'الاسم': '', 'الرقم المدني': '', 'المبلغ': '' }
    ];
    
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(template);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Template');
    
    // حفظ الملف
    XLSX.writeFile(wb, 'Upload_Template.xlsx');
  }
}
