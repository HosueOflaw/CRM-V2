import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Attachment {
    id?: number;
    attachCode?: string;
    attachType?: string;
    fileContent?: string; // Base64 string from backend byte[]
}

export interface CustodyStatement {
    id?: number;
    fileCode?: number;
    deptCode?: number;
    codeAttach?: string;
    codeExpense?: number;
    statementNo?: string;
    amount?: number;
    codeAutoNo?: number;
    codeStatus?: string;
    sendToACC?: boolean;
    sendToCompany?: boolean;
    receiveSec?: boolean;
    receiveAcc?: boolean;
    dateAdded?: string;
    userAdded?: number;
    expenseName?: string;
    clientName?: string;
    notes?: string;
    companyOrOffice?: boolean;
    companyCode?: number;
    civilId?: string;
    phoneNumber?: string;
    court?: string;
    contractNo?: string;
    personName?: string;
    attachments?: Attachment[];
}

@Injectable({
    providedIn: 'root'
})
export class CustodyService {
    private apiUrl = `${environment.apiUrl}/CustodyStatements`;

    constructor(private http: HttpClient) { }

    create(statement: CustodyStatement): Observable<CustodyStatement> {
        return this.http.post<CustodyStatement>(this.apiUrl, statement);
    }

    updateStatement(id: number, statement: CustodyStatement): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/update/${id}`, statement);
    }

    getPending(page: number = 1, pageSize: number = 5): Observable<{ items: CustodyStatement[], totalCount: number }> {
        return this.http.get<{ items: CustodyStatement[], totalCount: number }>(`${this.apiUrl}/pending`, {
            params: { page: page.toString(), pageSize: pageSize.toString() }
        });
    }

    getTransferred(page: number = 1, pageSize: number = 5): Observable<{ items: CustodyStatement[], totalCount: number }> {
        return this.http.get<{ items: CustodyStatement[], totalCount: number }>(`${this.apiUrl}/transferred`, {
            params: { page: page.toString(), pageSize: pageSize.toString() }
        });
    }

    getByStatementNo(statementNo: string): Observable<CustodyStatement[]> {
        return this.http.get<CustodyStatement[]>(`${this.apiUrl}/statement/${statementNo}`);
    }

    getByAutoNo(autoNo: number | string): Observable<CustodyStatement[]> {
        return this.http.get<CustodyStatement[]>(`${this.apiUrl}/by-auto/${autoNo}`);
    }

    deleteStatement(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    sendToAcc(id: number): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/${id}/send-to-acc`, {});
    }

    receiveAcc(id: number): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/${id}/receive-acc`, {});
    }

    getByUserId(userId: number, page: number = 1, pageSize: number = 10, filters: any = {}): Observable<{ items: CustodyStatement[], totalCount: number }> {
        let params: any = { page: page.toString(), pageSize: pageSize.toString() };
        if (filters.fromDate) params.fromDate = filters.fromDate;
        if (filters.toDate) params.toDate = filters.toDate;
        if (filters.isReceived !== undefined && filters.isReceived !== null && filters.isReceived !== '') 
            params.isReceived = filters.isReceived.toString();

        return this.http.get<{ items: CustodyStatement[], totalCount: number }>(`${this.apiUrl}/by-user/${userId}`, {
            params: params
        });
    }

    getNextStatementNo(): Observable<{ statementNo: string }> {
        return this.http.get<{ statementNo: string }>(`${this.apiUrl}/next-statement-no`);
    }

    getReportData(companyCode?: number, expenseType?: number): Observable<CustodyStatement[]> {
        let params: any = {};
        if (companyCode) params.companyCode = companyCode.toString();
        if (expenseType) params.expenseType = expenseType.toString();
        return this.http.get<CustodyStatement[]>(`${this.apiUrl}/report`, { params });
    }

    bulkUpdateStatus(ids: number[], toCompany: boolean, toOffice: boolean): Observable<any> {
        return this.http.post(`${this.apiUrl}/bulk-update`, { ids, toCompany, toOffice });
    }

    downloadZip(ids: number[]): Observable<Blob> {
        return this.http.post(`${this.apiUrl}/download-zip`, ids, { responseType: 'blob' });
    }

    uploadAttachment(files: File[], fileCode?: number, deptCode?: number): Observable<{ code: string }> {
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));
        if (fileCode) formData.append('fileCode', fileCode.toString());
        if (deptCode) formData.append('deptCode', deptCode.toString());

        return this.http.post<{ code: string }>(`${this.apiUrl}/upload-attachment`, formData);
    }
}
