import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface BreakStatus {
    isOnBreak: boolean;
    startTime?: string;
    durationMinutes?: number;
}

export interface ActiveBreak {
    userId: number;
    fullName: string;
    department?: string;
    startTime: string;
    currentDuration: number;
}

export interface DailyBreakReport {
    userId: number;
    fullName: string;
    department?: string;
    startTime: string;
    endTime?: string;
    totalMinutes?: number; // Keep for backward compatibility
    durationMinutes?: number; // New from User JSON
    lateMinutes: number;
    unusedMinutes?: number; // New from User JSON
    isCompleted?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class BreakService {
    private apiUrl = `${environment.apiUrl}/breaks`;

    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        });
    }

    startBreak(): Observable<any> {
        return this.http.post(`${this.apiUrl}/start`, {}, { headers: this.getHeaders() });
    }

    endBreak(): Observable<any> {
        return this.http.post(`${this.apiUrl}/end`, {}, { headers: this.getHeaders() });
    }

    getStatus(): Observable<BreakStatus> {
        return this.http.get<BreakStatus>(`${this.apiUrl}/status`, { headers: this.getHeaders() });
    }

    getActiveBreaks(): Observable<ActiveBreak[]> {
        return this.http.get<ActiveBreak[]>(`${this.apiUrl}/active`, { headers: this.getHeaders() });
    }

    getDailyReport(date?: string): Observable<DailyBreakReport[]> {
        let url = `${this.apiUrl}/daily`;
        if (date) {
            url += `?date=${date}`;
        }
        return this.http.get<DailyBreakReport[]>(url, { headers: this.getHeaders() });
    }
}
