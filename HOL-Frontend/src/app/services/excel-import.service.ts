import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ImportJob {
    id: number;
    fileName: string;
    status: string;
    progress: number;
    totalRows: number;
    processedRows: number;
    errorMessage?: string;
    createdAt: string;
    completedAt?: string;
    createdBy?: string;
}

export interface PagedResponse<T> {
    data: T[];
    pageNumber: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ExcelImportService {
    private apiUrl = `${environment.apiUrl}/ExcelImport`;

    constructor(private http: HttpClient) { }

    uploadMainfiles(file: File): Observable<{ jobId: number, message: string }> {
        return this.uploadFile(file, 'upload-mainfiles');
    }

    uploadAutoNumbers(file: File): Observable<{ jobId: number, message: string }> {
        return this.uploadFile(file, 'upload-autonumbers');
    }

    uploadFileDetails(file: File): Observable<{ jobId: number, message: string }> {
        return this.uploadFile(file, 'upload-filedetails');
    }

    private uploadFile(file: File, endpoint: string): Observable<{ jobId: number, message: string }> {
        const formData = new FormData();
        formData.append('file', file);

        const userStr = localStorage.getItem('user');
        if (userStr) {
            const user = JSON.parse(userStr);
            formData.append('addedBy', user.id || user.Id);
        }

        return this.http.post<{ jobId: number, message: string }>(`${this.apiUrl}/${endpoint}`, formData);
    }

    getMyJobs(pageNumber: number = 1, pageSize: number = 10, jobType?: string): Observable<PagedResponse<ImportJob>> {
        const params: any = {
            pageNumber: pageNumber.toString(),
            pageSize: pageSize.toString()
        };
        if (jobType) params.jobType = jobType;

        return this.http.get<PagedResponse<ImportJob>>(`${this.apiUrl}/jobs`, { params });
    }

    getJobStatus(jobId: number): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/status/${jobId}`);
    }

    downloadTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-template`, 'Mainfiles_Template.xlsx');
    }

    downloadAutoNumbersTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-autonumbers-template`, 'AutoNumbers_Template.xlsx');
    }

    downloadFileDetailsTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-filedetails-template`, 'FileDetails_Template.xlsx');
    }

    downloadOriginal(jobId: number, jobType: string): void {
        this.downloadFile(`${this.apiUrl}/download-original/${jobId}`, `Original_${jobType}_${jobId}.xlsx`);
    }

    revertImport(jobId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/revert/${jobId}`);
    }

    getJobData(jobId: number): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/job-data/${jobId}`);
    }

    private downloadFile(url: string, fileName: string): void {
        this.http.get(url, { responseType: 'blob' }).subscribe({
            next: (blob) => {
                const link = document.createElement("a");
                const blobUrl = URL.createObjectURL(blob);
                link.href = blobUrl;
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(blobUrl);
            },
            error: (err) => {
                console.error('Download failed', err);
            }
        });
    }
}
