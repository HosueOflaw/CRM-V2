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

    updateMainfile(id: number | string, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/mainfiles/${id}`, data);
    }

    updateFileDetail(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/filedetails/${id}`, data);
    }

    updateAutoNumber(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/autonumbers/${id}`, data);
    }
}
