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

    updateFileClassification(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/fileclassifications/${id}`, data);
    }

    updateMail(id: number, data: any): Observable<any> {
        return this.http.put(`${environment.apiUrl}/DataView/mails/${id}`, data);
    }

    updateNote(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/notes/${id}`, data);
    }

    updateAdditionalAmount(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/additionalamounts/${id}`, data);
    }

    updateAttachment(id: number, data: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/attachments/${id}`, data);
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

    getMainfileClassifications(id: number | string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/mainfiles/${id}/fileclassifications`);
    }

    getMainfileNotes(id: number | string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/mainfiles/${id}/notes`);
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

    getFileClassificationById(id: number | string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/fileclassifications/${id}`);
    }

    getNoteById(id: number | string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/notes/${id}`);
    }

    getAdditionalAmountById(id: number | string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/additionalamounts/${id}`);
    }

    getAttachmentById(id: number | string): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/attachments/${id}`);
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

    searchFileClassifications(term: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/fileclassifications/search/${term}`);
    }

    searchNotes(term: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/notes/search/${term}`);
    }

    searchAdditionalAmounts(term: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/additionalamounts/search/${term}`);
    }

    searchAttachments(term: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/attachments/search/${term}`);
    }

    getMainfileAttachments(id: number | string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/mainfiles/${id}/attachments`);
    }

    getMainfileMails(id: number | string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/mainfiles/${id}/mails`);
    }

    getMainfileAdditionalAmounts(id: number | string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/mainfiles/${id}/additionalamounts`);
    }

    getMainfilePaymentsByFileCode(id: number | string): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/mainfiles/${id}/payments`);
    }
}
