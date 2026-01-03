import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DiscussionsService {
  // محاكاة بيانات قاعدة البيانات
  private courts = [
    { id: 1, name: 'محكمة العاصمة' },
    { id: 2, name: 'محكمة الاستئناف' }
  ];

  private experts = [
    { id: 1, name: 'خبير محمود' },
    { id: 2, name: 'خبيرة منى' }
  ];

  private parties = [
    { id: 1, name: 'أحمد علي' },
    { id: 2, name: 'فهد سعود' }
  ];

  private roles = [
    { id: 1, name: 'مدعي' },
    { id: 2, name: 'مدعى عليه' }
  ];

  private fileStatuses = [
    { id: 1, name: 'نشط' },
    { id: 2, name: 'مغلق' },
    { id: 3, name: 'مؤجل' }
  ];

  private lawyers = [
    { id: 1, name: 'م/ خالد' },
    { id: 2, name: 'م/ سارة' }
  ];

  private consultants = [
    { id: 1, name: 'القاضي حسام' }
  ];

  private delegates = [
    { id: 1, name: 'المندوب 1' }
  ];

  private firstDegrees = [
    { id: 1, name: 'أول درجة - مدني' }
  ];

  private appeals = [
    { id: 1, name: 'استئناف - استئناف عام' }
  ];

  private cassations = [
    { id: 1, name: 'تمييز - موضوعي' }
  ];

  private chambers = [
    { id: 1, name: 'الدائرة الجنائية' },
    { id: 2, name: 'الدائرة المدنية' }
  ];

  getCourts(): Observable<any[]> { return of(this.courts); }
  getExperts(): Observable<any[]> { return of(this.experts); }
  getParties(): Observable<any[]> { return of(this.parties); }
  getRoles(): Observable<any[]> { return of(this.roles); }
  getFileStatuses(): Observable<any[]> { return of(this.fileStatuses); }
  getLawyers(): Observable<any[]> { return of(this.lawyers); }
  getConsultants(): Observable<any[]> { return of(this.consultants); }
  getDelegates(): Observable<any[]> { return of(this.delegates); }
  getFirstDegrees(): Observable<any[]> { return of(this.firstDegrees); }
  getAppeals(): Observable<any[]> { return of(this.appeals); }
  getCassations(): Observable<any[]> { return of(this.cassations); }
  getChambers(): Observable<any[]> { return of(this.chambers); }
}
