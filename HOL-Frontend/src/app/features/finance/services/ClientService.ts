import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CreateClientDto {
  code: number;
  name: string;
  cid?: string;
  work?: string;
  address?: string;
  nationality?: string;
  contractNumber?: string;
  companyFax?: string;
  contractYear?: number;
  sector?: string;
  companyRegister?: string;
  partner1?: string;
  partner2?: string;
  partner3?: string;
  companyEmail?: string;
  membership?: string;
  registerType?: string;
  note?: string;
  patchNo?: string;
  lawyerUser?: number;
  dateFinished?: Date;
  deptAmount?: number;
  courtUser?: number;
  mdUser?: number;
  legalAdvisorUser?: number;
  legalClaimant?: string;
  contractDetails?: string;
  contacts: Array<{ phone: string; relation: string }>;
  financialEntries: any[];
  deptCode?: number;
  userAdded?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'https://localhost:7112/api/Clients';
  constructor(private http: HttpClient) { }

  createClient(clientData: CreateClientDto): Observable<any> {
    return this.http.post(this.apiUrl, clientData);
  }

  uploadAttachment(fileCode: number, file: File, note: string, deptCode: number = 1, userAdded: number = 1): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('note', note);
    formData.append('attachType', 'document');
    formData.append('deptCode', deptCode.toString());
    formData.append('userAdded', userAdded.toString());

    return this.http.post(`${this.apiUrl}/${fileCode}/attachments`, formData);
  }

  getClientAttachments(fileCode: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${fileCode}/attachments`);
  }

  getClientContacts(fileCode: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${fileCode}/contacts`);
  }

  deleteAttachment(attachmentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/attachments/${attachmentId}`);
  }

  downloadAttachment(attachmentId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/attachments/${attachmentId}/download`, {
      responseType: 'blob'
    });
  }
}
