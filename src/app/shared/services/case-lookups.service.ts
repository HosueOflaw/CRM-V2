import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LookupsModalService {
    private baseUrl = 'https://your-api-url.com/api'; // غيّرها حسب رابط API بتاعك

  constructor(private http: HttpClient) {}

  getCourts(): Observable<any[]> {
    return of([
      { name: 'محكمة الجنايات الكبرى', city: 'الكويت', type: 'جنائية' },
      { name: 'محكمة الأسرة', city: 'الفروانية', type: 'مدنية' },
      { name: 'محكمة التنفيذ', city: 'حولي', type: 'مدنية' },
    ]);
  }

  getLawyers(): Observable<any[]> {
    return of([
      { name: 'أحمد العوضي', phone: '99999999' },
      { name: 'فهد المطيري', phone: '66666666' },
    ]);
  }

  getClients(): Observable<any[]> {
    return of([
      { name: 'شركة الخليج', type: 'مؤسسة' },
      { name: 'محمد السالم', type: 'فرد' },
    ]);
  }

  getExperts(): Observable<any[]> {
    return of([
      { name: 'د. خالد الحربي', specialty: 'مالي' },
      { name: 'م. ناصر العنزي', specialty: 'هندسي' },
    ]);
  }

  getOpponents(): Observable<any[]> {
    return of([
      { name: 'مؤسسة النور', type: 'شركة' },
      { name: 'سالم العتيبي', type: 'شخص' },
    ]);
  }

  getStatuses(): Observable<any[]> {
    return of([
      { name: 'قيد النظر' },
      { name: 'محفوظ' },
      { name: 'مغلق' },
    ]);
  }
}
