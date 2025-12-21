import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-management-main',
  imports: [CommonModule,FormsModule],
  templateUrl: './car-management-main.html',
  styleUrl: './car-management-main.css'
})
export class CarManagementMain {
 
  // ==========================================
  // 1. التحكم في التبويبات (State Management)
  // ==========================================
  activeMainTab: string = 'main';      // التبويب العلوي الرئيسي: 'main' | 'clients'
  activeInnerTab: string = 'main_view'; // التبويب الداخلي: 'main_view' (الرئيسية) | 'fees' (الرسوم)
  activeBottomTab: string = 'statements'; // التبويب السفلي: 'statements' | 'search' | 'auto_num' ...

  // ==========================================
  // 2. البيانات (Data Models)
  // ==========================================
  
  // بيانات الشريط الجانبي
  sidebarData = {
    client: '',
    customer: '',
    civilId: '',
    status: '',
    autoNumCount: '0',
    debt: '',
    researcher: '',
    address: ''
  };

  // بيانات الإفادة
  statementData = {
    text: '',
    reviewDate: '2023-02-03',
    lastAction: '0',
    lastActionDate: '0',
    nextAction: '0',
    nextActionDate: '0'
  };

  // بيانات قسم السداد (اللوحة اليسرى)
  paymentData = {
    claimValue: '0',
    fees: '0',
    lawyerFees: '0',
    totalPaid: '0',
    totalDiscount: '0',
    remaining: '0'
  };

  // بيانات الجدول (وهمية)
  clientRows = Array.from({ length: 2 }, (_, i) => ({
    id: 121044 + i,
    name: 'عميل تجريبي ' + (i + 1),
    autoNum: '266120400' + i,
    expense: 'استعلام سيارات',
    client: 'شركة الاتصالات...',
    status: 'Telecom',
    debt: (1000 + i * 100).toString(),
    date: '11/16/2024',
    batch: 'HD45',
    emp: 'غير موزع',
    receivedDate: '1/15/2018',
    court: 'الجهراء',
    contractNum: '100441406',
    claim: '221.8',
    nationality: 'كويتي',
    address: 'مدينة سعد العبدالله...',
    notes:"Test"
  }));


  // ==========================================
  // 3. دوال التحكم (Methods)
  // ==========================================
  setMainTab(tab: string) { this.activeMainTab = tab; }
  setInnerTab(tab: string) { this.activeInnerTab = tab; }
  setBottomTab(tab: string) { this.activeBottomTab = tab; }

  saveStatement() { console.log('Saving...', this.statementData); }
}
