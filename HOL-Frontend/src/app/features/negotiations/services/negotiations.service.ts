import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class NegotiationsService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    /**
     * Search for mainfiles by a general search term (Name, Cid, or Code)
     */
    search(term: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/Mainfiles?search=${term}`).pipe(
            catchError(error => {
                console.error('Error searching:', error);
                return throwError(() => new Error('حدث خطأ أثناء البحث'));
            })
        );
    }

    /**
     * Search for a mainfile by Civil ID (Cid) - Exact Match
     */
    searchByCid(cid: string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/Mainfiles/cid/${cid}`).pipe(
            catchError(error => {
                console.error('Error searching by Cid:', error);
                return throwError(() => new Error('لم يتم العثور على الملف أو حدث خطأ في النظام'));
            })
        );
    }

    /**
     * Get file details (debt reason, plaintiff, etc.)
     * @param fileCode The file ID/code
     */
    getFileDetails(fileCode: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/DataView/mainfiles/${fileCode}/details`).pipe(
            catchError(error => {
                console.error('Error getting file details:', error);
                return throwError(() => new Error('فشل جلب تفاصيل الملف'));
            })
        );
    }

    /**
     * Get call center statements / history
     * @param fileCode The file ID/code
     */
    getStatements(fileCode: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/DataView/mainfiles/${fileCode}/statements`).pipe(
            catchError(error => {
                console.error('Error getting statements:', error);
                return throwError(() => new Error('فشل جلب الإفادات'));
            })
        );
    }


    /**
     * Get lookup values by type (COOPERATION, CONTACT, CIVIL, INTERNAL)
     */
    getLookups(type: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/Lookups/${type}`).pipe(
            catchError(error => {
                console.error(`Error getting lookups for ${type}:`, error);
                return throwError(() => new Error('فشل جلب قائمة الخيارات'));
            })
        );
    }

    /**
     * Update a specific status field for a client
     */
    updateClientStatus(id: number, field: string, valueId?: number, valueText?: string): Observable<any> {
        const body = { field, newValueId: valueId, newValueText: valueText };
        return this.http.put<any>(`${this.apiUrl}/Mainfiles/${id}/status`, body).pipe(
            catchError(error => {
                console.error(`Error updating ${field}:`, error);
                return throwError(() => new Error('فشل تحديث الحالة'));
            })
        );
    }

    /**
     * Get file attachments
     */
    getAttachments(fileCode: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/DataView/files/${fileCode}/attachments`);
    }

    /**
     * Get file audit history with pagination
     */
    getAudits(fileCode: number, page: number = 1, pageSize: number = 5): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/DataView/files/${fileCode}/audits?page=${page}&pageSize=${pageSize}`);
    }

    /**
     * Get file payments
     */
    getPayments(fileCode: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/DataView/files/${fileCode}/payments`);
    }

    /**
     * Get additional amounts
     */
    getAdditionalAmounts(fileCode: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/DataView/files/${fileCode}/additional-amounts`);
    }

    /**
     * Get auto numbers
     */
    getAutoNumbers(fileCode: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/DataView/files/${fileCode}/auto-numbers`);
    }

    /**
     * Get client notes
     */
    getNotes(fileCode: number, page: number = 1, pageSize: number = 5): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/DataView/mainfiles/${fileCode}/notes?page=${page}&pageSize=${pageSize}`);
    }

    /**
     * Get client contacts
     */
    getContacts(cid: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/DataView/files/${cid}/contacts`);
    }

    addContact(cid: string, payload: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/DataView/files/${cid}/contacts`, payload);
    }

    /**
     * Get call center statements with pagination
     */
    getCallcenterStatements(fileCode: number, page: number = 1, pageSize: number = 5): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/DataView/files/${fileCode}/callcenter-statements?page=${page}&pageSize=${pageSize}`);
    }

    /**
     * Search call center statements across all files
     */
    searchCallcenterStatements(params: { cid?: string, name?: string, fromDate?: string, toDate?: string, page: number, pageSize: number }): Observable<any> {
        let query = `page=${params.page}&pageSize=${params.pageSize}`;
        if (params.cid) query += `&cid=${params.cid}`;
        if (params.name) query += `&name=${params.name}`;
        if (params.fromDate) query += `&fromDate=${params.fromDate}`;
        if (params.toDate) query += `&toDate=${params.toDate}`;
        
        return this.http.get<any>(`${this.apiUrl}/DataView/callcenter-statements/search?${query}`);
    }

    addStatement(payload: any): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/DataView/files/callcenter-statements`, payload);
    }

    /**
     * Get file classifications
     */
    getClassifications(fileCode: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/DataView/files/${fileCode}/classifications`);
    }

    /**
     * Get file statuses
     */
    getStatusesHistory(fileCode: number, page: number = 1, pageSize: number = 5): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/DataView/files/${fileCode}/statuses?page=${page}&pageSize=${pageSize}`);
    }

    /**
     * Get file-specific dashboard stats
     */
    getDashboardStats(fileCode: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/DataView/files/${fileCode}/dashboard-stats`);
    }
}
