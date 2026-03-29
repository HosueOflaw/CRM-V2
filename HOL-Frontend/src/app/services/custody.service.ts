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

    getByStatementNo(statementNo: string): Observable<CustodyStatement[]> {
        return this.http.get<CustodyStatement[]>(`${this.apiUrl}/statement/${statementNo}`);
    }

    getByAutoNo(autoNo: number | string): Observable<CustodyStatement[]> {
        return this.http.get<CustodyStatement[]>(`${this.apiUrl}/auto-number/${autoNo}`);
    }

    getByUserId(userId: number): Observable<CustodyStatement[]> {
        return this.http.get<CustodyStatement[]>(`${this.apiUrl}/by-user/${userId}`);
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

    sendToAcc(id: number): Observable<any> {
        return this.http.put(`${this.apiUrl}/${id}/send-to-acc`, {});
    }

    delete(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    uploadAttachment(files: File[], fileCode?: number, deptCode?: number): Observable<{ code: string }> {
        const formData = new FormData();
        files.forEach(file => formData.append('files', file));
        if (fileCode) formData.append('fileCode', fileCode.toString());
        if (deptCode) formData.append('deptCode', deptCode.toString());

        return this.http.post<{ code: string }>(`${this.apiUrl}/upload-attachment`, formData);
    }
}
