import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LoginHistoryRecord {
    id: number;
    userId: number;
    userName: string;
    role: string;
    email: string;
    loginTime: string;
    ipAddress: string;
    userAgent: string;
}

@Injectable({
    providedIn: 'root'
})
export class LoginHistoryService {
    private apiUrl = `${environment.apiUrl}/Users/login-history`;

    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        });
    }

    getLoginHistory(): Observable<LoginHistoryRecord[]> {
        return this.http.get<LoginHistoryRecord[]>(this.apiUrl, { headers: this.getHeaders() });
    }
}
