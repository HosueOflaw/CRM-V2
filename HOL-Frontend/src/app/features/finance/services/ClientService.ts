import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface CreateClientDto {
  id?: number;
  code: number;
  name: string;
  cid?: string;
  address?: string;
  nationality?: string;
  work?: string;
  membership?: string;
  companyEmail?: string;
  companyFax?: string;
  companyRegister?: string;
  partner1?: string;
  partner2?: string;
  partner3?: string;
  registerType?: string;
  note?: string;
  contractNumber?: string;
  contractYear?: number;
  contractNo?: string;
  sector?: string;
  department?: string;
  deptCode?: number;
  legalClaimant?: string;
  legalPlaintiff?: string;
  contractDetails?: string;
  patchNo?: string;
  dateFinished?: Date;
  deptAmount?: number;
  lawyerUser?: number;
  courtUser?: number;
  mdUser?: number;
  legalAdvisorUser?: number;
  phone1?: string;
  phone1Owner?: string;
  phone2?: string;
  phone2Owner?: string; // Legacy
  financialAmount?: number;
  financialType?: string;
  financialEntries?: any[];
  contacts?: ClientContactDto[];
  financialDetails?: ClientFinancialDetailDto[];
  userAdded?: number;
  dateAdded?: Date;
  userUpdated?: number;
  dateUpdated?: Date;
}

export interface ClientContactDto {
  id?: number;
  phone: string;
  relation: string;
}

export interface ClientFinancialDetailDto {
  id?: number;
  category: string;
  downPayment?: number;
  finalPayment?: number;
  collectionCommission?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = `${environment.apiUrl}/Clients`;
  constructor(private http: HttpClient) { }

  createClient(clientData: CreateClientDto): Observable<any> {
    return this.http.post(this.apiUrl, clientData);
  }

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateClient(id: number, clientData: CreateClientDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, clientData);
  }

  getClientByCode(code: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/code/${code}`);
  }

  getClientById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
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
