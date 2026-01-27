import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardLayout } from '../../../core/dashboard-layout/dashboard-layout';
import { DashboardAction } from '../../../../models/DashboardAction';
import { FormsModule } from '@angular/forms';
import { FileJson } from 'lucide-angular';
@Component({
  selector: 'app-secretariat-dashboard',
  imports: [DashboardLayout,FormsModule,CommonModule],
  templateUrl:'./secretariat-dashboard.html',
  styleUrl: './secretariat-dashboard.css',
})
export class SecretariatDashboard {

  selectedOption: string = '';
  currentFormTitle: string = '';
  showCommonDialog: boolean = false;
  showEditForm: boolean = false;
  showexitfile: boolean = false;
  showOnlyOne: boolean= false;
  currentAction: string = '';
  showEditFormOnly:boolean = false;
  showAddAutoNumberModal: boolean = false;
  showEditCodeForEmployees:boolean = false;
  showSearchNumbersModal: boolean = false;
  showAddPlaintiffModal: boolean = false;
  showEditPlaintiffFileModal: boolean = false;
  showEditEmployeeCodeModal: boolean = false;
    showAddClassificationModal: boolean = false;


  title = '';         
  formData: any = {};  

  plaintiffForm = {
    code: '1282', // قيمة افتراضية كما في الصورة
    name: ''
  };

  editEmployeeCodeForm = {
    code: '',
    employeeNumber: ''
  };
   // بيانات الفورم
  classificationForm = {
    sequence: '141', // قيمة افتراضية كما في الصورة
    name: '',
    status: ''
  };


autoNumberForm = {
    code: '',
    autoNumber: '',
    relatedTo: 0, // القيمة الافتراضية كما في الصورة
    type: '',
    claim: '',
    status: '',
    notes: ''
  };
  // فتح الفورم المستقل لتعديل اكواد الموظفين
  openEditCodeDialog(data: any = {}) {
    this.title = 'تعديل اكواد للموظفين';
    this.formData = { code: '', employeeNumber: '', ...data };
    this.showEditCodeForEmployees = true;
  }

  closeEditCodeDialog() {
    this.showEditCodeForEmployees = false;
  }

  saveEditCodeData() {
    console.log('تم تعديل البيانات:', this.formData);
    this.closeEditCodeDialog();
  }

  searchCode: string = '';
  codeData: any[] = [];

  showOptions: { onlyOne: boolean; manual: boolean; excel: boolean } = {
  onlyOne: false,
  manual: false,
  excel: false
};

editFormData = {
  code: '',
  autoNumber: '',
  status: ''
};
// بيانات الفورم
  editPlaintiffFileForm = {
    opponentCode: '',
    plaintiffCode: ''
  };

  // بيانات الفورم
  singlePaymentForm = {
    id: '',
    code: '',
    amount: '',
    date: '',
    employee: '',
    notes: ''
  };


  MOCK_DATA = [
  {
    _id: 1,
    code: 'A001',
    mainNumber: '12345',
    relatedNumber: '54321',
    type: 'نوع 1',
    status: 'نشط',
    claim: 'ادعاء 1',
    notes: 'ملاحظات 1',
    enteredBy: 'موظف 1',
    client: 'موكل 1'
  },
  {
    _id: 2,
    code: 'B002',
    mainNumber: '67890',
    relatedNumber: '09876',
    type: 'نوع 2',
    status: 'مغلق',
    claim: 'ادعاء 2',
    notes: 'ملاحظات 2',
    enteredBy: 'موظف 2',
    client: 'موكل 2'
  }
];

  actions:DashboardAction[] = [
  { title: 'رفع ملفات', type:'form' , onClick: () => this.openCommonForm('رفع ملفات')  },
  { title: 'الحضور' },
  { title: 'تنظيم الدخول العملاء',type:'navigate', value:"/secretariat/organizing-clients" },
  { title: 'بحث بالرقم في الافادات' },
  { title: 'مراجعة تنفيذ جديد' },
  { title: 'ادخال السداد', type:'form' , onClick: () => this.openCommonForm('ادخال السداد') },
  { title: 'ارقام هواتف',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'انتظار العملاء',type:'navigate', value:"/secretariat/waiting-clients" },
  { title: 'تعديل اكواد للموظفين باكسيل',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'تجميع ملفات الاقساط',type:'navigate', value:"/secretariat/installment-collection" },
  { title: 'تعديل اكواد للموظفين', type:'form' , onClick: () => this.openEditEmployeeCodeDialog() },
  { title: 'تعديل الحالات باكسيل',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'مراجعة الاستمارات',type:'navigate', value:"/secretariat/formslist" },
  { title: 'تحديث الحالات' },
  { title: 'ارقام الصادر والوارد',type:'navigate', value:"/secretariat/export-and-import-num" },
  { title: 'تعديل أكواد للمجموعات' },
  { title: 'اضافة مجموعة للموظف' },
  { title: 'رفع ارقام البة',type:'form' , onClick: () => this.openCommonForm('رفع ارقام البة')  },
  { title: 'اضافة ملاحظات 4' , type:'navigate', value:"/secretariat/upload-excel"  },
  { title: 'Bulk SMS' },
  { title: 'الرقم الموحد', type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'اغلاق ملف',type:'form',onClick: () => this.openCommonForm('اغلاق ملف') },
  { title: 'ملاحظات الملفات', type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'رفع الإجراءات', type:'navigate', value:"/secretariat/procedures" },
  { title: 'رفع افادات AutoDailer', type:'navigate', value:"/secretariat/upload-page"  },
  { title: 'رفع الارقام البة 2',type:'form' , onClick: () => this.openCommonForm('2 رفع ارقام البة')  },
  { title: 'اضافة تصنيف جديد', type:"form", onClick: () => this.openClassificationDialog() },
  { title: 'توزيع ملفات التنفيذ',type:'form' , onClick: () => this.openCommonForm('توزيع ملفات التنفيذ')   },
  { title: 'تاريخ البعثيات' ,type:'navigate', value:"/secretariat/upload-excel"},
  { title: 'طباعة ملفات من اكسيل',type:'navigate', value:"/secretariat/print-page" },
  { title: 'اضافة المحاكم',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'اضافة ملاحظات العمل',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'تحليل الاسم المدني',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'بحث ارقام',type:'form', onClick: () => this.openSearchNumbersDialog()  },
  { title: 'اضافة ملاحظات 1',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'طباعة ملفات فيفا',type:'navigate', value:"/secretariat/files-fifa-export" },
  { title: 'طباعة ملفات اوريدو',type:'navigate', value:"/secretariat/files-Ooredoo-export" },
  { title: 'طباعة ملفات زين',type:'navigate', value:"/secretariat/files-zein-export"  },
  { title: 'تصنيف الداخلية والمدنية',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'اضافة ملاحظات 2',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'طباعة التكاليف',type:'navigate', value:"/secretariat/costs-print" },
  { title: 'ادخال عهدة',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'نسخ الملفات من فولدر الي اخر' },
  { title: 'كشف حساب السيارات',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'اضافة ملاحظات 3',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'اعادة تسمية الملفات',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'مراجعة عهدة المناديب',type:'navigate', value:"/secretariat/batch-numbers" },
  { title: 'طباعة ملفات الأقساط' },
  { title: 'استلام الملفات من الموكلين',type:'navigate', value:"/secretariat/client-file-receipt" },
  { title: 'اضافة ملاحظات 6',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'المدعي القانوني',type:'form', onClick: () => this.openPlaintiffDialog() },
  { title: 'تعديل المدعي القانوني للملف',type:'form', onClick: () => this.openEditPlaintiffFileDialog() },
  { title: 'اضافة اسماء اخرى للملفات',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'رفع الشيكات',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'تعليل قيمة المطالبة',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'تاريخ الارسال الي المتداول',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'توزيع ملفات السيارات' },
  { title: 'رفع إجراءات بواية العمل',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'رفع الإجراءات القادمة',type:'navigate', value:"/secretariat/upload-excel" },
  { title: 'مرفقات ملفات الشركات',type:'navigate', value:"/secretariat/upload-excel" },
  ];


openCommonForm(title: string) {
  this.currentFormTitle = title;  
  this.currentAction = title;  
  this.selectedOption = '';
  this.showCommonDialog = true;

 // التحكم في أي خيارات تظهر
  switch(title) {
    case 'رفع ملفات':
      this.showOptions = { onlyOne: true, manual: false, excel: true };
      break;
    case 'ادخال السداد':
      this.showOptions = { onlyOne: true, manual: true, excel: true };
      break;
    case 'رفع أرقام البة':
      this.showOptions = { onlyOne: true, manual: true, excel: true };
      break;
    case 'اغلاق ملف':
      this.showOptions = { onlyOne: true, manual: true, excel: true };
      break;
    case '2 رفع ارقام البة':
      this.showOptions = { onlyOne: true, manual: true, excel: true };
      break;
    case 'توزيع ملفات التنفيذ':
      this.showOptions = { onlyOne: true, manual: true, excel: true };
      break;
    default:
      this.showOptions = { onlyOne: true, manual: true, excel: true };
  }

}

confirmCommonOption() {
  if (!this.selectedOption) return;

  this.showCommonDialog = false;

   if (this.currentAction === 'رفع ملفات') {
    if (this.selectedOption === 'onlyOne') {
      window.open('secretariat/upload-files', '_blank');
    } else if (this.selectedOption === 'excel') {
      window.open('secretariat/import-mainfiles', '_blank');
    }
  }

  if (this.currentAction === 'ادخال السداد') {
    if (this.selectedOption === 'onlyOne') {
      this.showOnlyOne = true;
    } else if (this.selectedOption === 'manual') {
      this.showEditForm = true;
    }
     else if (this.selectedOption === 'excel') {
      window.open('secretariat/upload-excel', '_blank');
    }
  }

   if (this.currentFormTitle === 'رفع ارقام البة') {
    if (this.selectedOption === 'onlyOne') {
      this.showEditFormOnly = true;
    } else if (this.selectedOption === 'manual') {
      this.showEditForm = true;
    } else if (this.selectedOption === 'excel') {
      window.open('secretariat/import-autonumbers', '_blank');
    }
  }
  if (this.currentFormTitle === 'اغلاق ملف') {
    if (this.selectedOption === 'onlyOne') {
      this.showexitfile = true;
    } else if (this.selectedOption === 'manual') {
      this.showEditForm = true;
    } else if (this.selectedOption === 'excel') {
      window.open('secretariat/upload-excel', '_blank');
    }
  }
  if (this.currentFormTitle === '2 رفع ارقام البة') {
    if (this.selectedOption === 'onlyOne') {
      this.showAddAutoNumberModal = true;
    } else if (this.selectedOption === 'manual') {
      this.showEditForm = true;
    } else if (this.selectedOption === 'excel') {
      window.open('secretariat/upload-excel', '_blank');
    }
  }
    if (this.currentFormTitle === 'توزيع ملفات التنفيذ') {
    if (this.selectedOption === 'onlyOne') {
      this.showEditCodeForEmployees = true;
    } else if (this.selectedOption === 'manual') {
      this.showEditForm = true;
    } else if (this.selectedOption === 'excel') {
      window.open('secretariat/upload-excel', '_blank');
    }
  }

}

statusOpen = false;

selectStatus(value: string) {
  this.editFormData.status = value; 
  this.statusOpen = false;        
}


cancelCommonOption() {
  this.showCommonDialog = false;
}

cancelSingleForm() {
  this.showOnlyOne = false;
}

exitfile() {
  this.showexitfile = false;
}
saveSingleForm() {
  console.log('Save Data:', this.singlePaymentForm);
  this.showOnlyOne = false;
}

editSingleForm() {
  console.log('Edit Data:', this.singlePaymentForm);
}

fetchCodeData() {
  if (!this.searchCode) {
    this.codeData = [];
    return;
  }
  this.codeData = this.MOCK_DATA.filter(d => d.code.includes(this.searchCode));
}

editSelectedRow() {
  if (this.codeData.length === 0) return;
  const row = this.codeData[0];
  console.log('تعديل:', row);
}

saveChanges() {
  console.log('حفظ البيانات:', this.codeData);
  this.showEditForm = false;
}

editAutoNumber() {
  console.log('تم تعديل البيانات:', this.editFormData);
  this.showEditFormOnly = false;
}

// إلغاء التعديل
cancelEditForm() {
  this.showEditFormOnly = false;
}

saveAutoNumber() {
    console.log('Saving Data:', this.autoNumberForm);
    // هنا تضع منطق الحفظ (API Call)
    this.closeAutoNumberDialog();
  }

  // دالة التراجع (إفراغ البيانات)
  resetAutoNumberForm() {
    this.autoNumberForm = {
      code: '',
      autoNumber: '',
      relatedTo: 0,
      type: '',
      claim: '',
      status: '',
      notes: ''
    };
  }

  // دالة الإغلاق
  closeAutoNumberDialog() {
    this.showAddAutoNumberModal = false;
  }
  
  // دالة لفتح المودال (للاختبار)
  openAutoNumberDialog() {
    this.showAddAutoNumberModal = true;
  }
// دالة لفتح المودال
  openSearchNumbersDialog() {
    this.showSearchNumbersModal = true;
  }
  
  // دالة للإغلاق
  closeSearchNumbersModal() {
    this.showSearchNumbersModal = false;
  }
  openPlaintiffDialog() {
    this.showAddPlaintiffModal = true;
  }

  closePlaintiffDialog() {
    this.showAddPlaintiffModal = false;
  }

  // دوال الأزرار
  newPlaintiff() {
    console.log('New clicked');
    this.plaintiffForm = { code: '', name: '' };
    // منطق توليد كود جديد هنا
  }

  addPlaintiff() {
    console.log('Add clicked', this.plaintiffForm);
    // منطق الإضافة لقاعدة البيانات
    this.closePlaintiffDialog();
  }

  updatePlaintiff() {
    console.log('Edit clicked', this.plaintiffForm);
    // منطق التعديل
  }
  openEditPlaintiffFileDialog() {
    this.showEditPlaintiffFileModal = true;
  }

  closeEditPlaintiffFileDialog() {
    this.showEditPlaintiffFileModal = false;
  }


  // دالة الحفظ
  saveEditPlaintiffFile() {
    console.log('Edit Data:', this.editPlaintiffFileForm);
    // منطق التعديل هنا
    this.closeEditPlaintiffFileDialog();
  }

  openEditEmployeeCodeDialog() {
    this.showEditEmployeeCodeModal = true;
  }

  closeEditEmployeeCodeDialog() {
    this.showEditEmployeeCodeModal = false;
  }

  // دالة الحفظ
  saveEditEmployeeCode() {
    console.log('Edit Data:', this.editEmployeeCodeForm);
    // منطق التعديل هنا
    this.closeEditEmployeeCodeDialog();
  }
   openClassificationDialog() {
    this.showAddClassificationModal = true;
  }

  // إغلاق المودال
  closeClassificationDialog() {
    this.showAddClassificationModal = false;
  }

  // حفظ
  saveClassification() {
    console.log('Saved:', this.classificationForm);
    this.closeClassificationDialog();
  }

  // تعديل
  updateClassification() {
    console.log('Updated:', this.classificationForm);
  }

  // تراجع (تصفير الحقول)
  resetForm() {
    this.classificationForm = {
      sequence: '141',
      name: '',
      status: ''
    };
  }
}
