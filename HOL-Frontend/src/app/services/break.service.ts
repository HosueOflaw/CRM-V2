import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CacheService, CacheOptions } from './cache.service';
import { tap } from 'rxjs/operators';

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
    private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

    constructor(
        private http: HttpClient,
        private cacheService: CacheService
    ) { }

    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        });
    }

    startBreak(): Observable<any> {
        return this.http.post(`${this.apiUrl}/start`, {}, { headers: this.getHeaders() }).pipe(
            tap(() => this.clearBreaksCache())
        );
    }

    endBreak(): Observable<any> {
        return this.http.post(`${this.apiUrl}/end`, {}, { headers: this.getHeaders() }).pipe(
            tap(() => this.clearBreaksCache())
        );
    }

    getStatus(forceRefresh: boolean = false): Observable<BreakStatus> {
        const cacheKey = 'break_status_current';
        const options: CacheOptions = {
            ttl: this.CACHE_TTL,
            forceRefresh,
            key: cacheKey
        };

        return this.cacheService.get(
            cacheKey,
            () => this.http.get<BreakStatus>(`${this.apiUrl}/status`, { headers: this.getHeaders() }),
            options
        );
    }

    getActiveBreaks(forceRefresh: boolean = false): Observable<ActiveBreak[]> {
        const cacheKey = 'breaks_active_list';
        const options: CacheOptions = {
            ttl: this.CACHE_TTL,
            forceRefresh,
            key: cacheKey
        };

        return this.cacheService.get(
            cacheKey,
            () => this.http.get<ActiveBreak[]>(`${this.apiUrl}/active`, { headers: this.getHeaders() }),
            options
        );
    }

    getDailyReport(date?: string, forceRefresh: boolean = false): Observable<DailyBreakReport[]> {
        let url = `${this.apiUrl}/daily`;
        if (date) {
            url += `?date=${date}`;
        }

        const cacheKey = `breaks_daily_report_${date || 'today'}`;
        const options: CacheOptions = {
            ttl: this.CACHE_TTL,
            forceRefresh,
            key: cacheKey
        };

        return this.cacheService.get(
            cacheKey,
            () => this.http.get<DailyBreakReport[]>(url, { headers: this.getHeaders() }),
            options
        );
    }

    private clearBreaksCache(): void {
        this.cacheService.clear('break_status_current');
        this.cacheService.clear('breaks_active_list');
        this.cacheService.clearByPattern('breaks_daily_report');
    }
}
