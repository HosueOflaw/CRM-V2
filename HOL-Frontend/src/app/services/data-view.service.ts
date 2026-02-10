import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DataViewService {
    private apiUrl = `${environment.apiUrl}/DataView`;

    constructor(private http: HttpClient) { }

    createMainfile(data: any): Observable<any> {
        return this.http.post(`${environment.apiUrl}/Mainfiles`, data);
    }

    getNextMainfileId(): Observable<number> {
        return this.http.get<number>(`${environment.apiUrl}/Mainfiles/next-id`);
    }

    updateMainfile(id: number | string, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/mainfiles/${id}`, data);
    }

    updateFileDetail(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/filedetails/${id}`, data);
    }

    updateAutoNumber(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/autonumbers/${id}`, data);
    }

    updatePayment(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/payments/${id}`, data);
    }

    getMainfileById(id: number | string): Observable<any> {
        return this.http.get(`${this.apiUrl}/mainfiles/${id}`);
    }

    getMainfileByCode(code: number | string): Observable<any> {
        return this.http.get(`${this.apiUrl}/mainfiles/code/${code}`);
    }

    getMainfileDetails(id: number | string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/mainfiles/${id}/details`);
    }

    getMainfileAutoNumbers(id: number | string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/mainfiles/${id}/autonumbers`);
    }

    getMainfileByAutoNumber(autoNumber: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/mainfiles/autonumber/${autoNumber}`);
    }

    getMainfileByFileDetail(detail: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/mainfiles/filedetail/${detail}`);
    }

    getFileDetailById(id: number | string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/filedetails/${id}`);
    }

    getAutoNumberById(id: number | string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/autonumbers/${id}`);
    }

    searchFileDetails(term: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/filedetails/search/${term}`);
    }

    searchAutoNumbers(term: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/autonumbers/search/${term}`);
    }

    searchPayments(term: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/payments/search/${term}`);
    }
}
