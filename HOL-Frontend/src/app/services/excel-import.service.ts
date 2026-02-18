import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ImportJob {
    id: number;
    fileName: string;
    status: string;
    progress: number;
    totalRows: number;
    processedRows: number;
    errorCount: number;
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

export interface UploadState {
    jobId: number | null;
    status: string;
    progress: number;
    jobType: string | null;
    totalRows?: number;
    processedRows?: number;
    errorCount?: number;
    errorMessage?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ExcelImportService {
    private apiUrl = `${environment.apiUrl}/ExcelImport`;

    private uploadStateSubject = new BehaviorSubject<UploadState>({
        jobId: null,
        status: 'Idle',
        progress: 0,
        jobType: null
    });
    uploadState$ = this.uploadStateSubject.asObservable();

    get currentUploadState(): UploadState {
        return this.uploadStateSubject.value;
    }

    constructor(private http: HttpClient) { }

    startUpload(file: File, type: 'Mainfile' | 'AutoNumber' | 'FileDetail' | 'Payment' | 'FileClassification' | 'Note' | 'AdditionalAmount' | 'Mail' | 'Attachment') {
        if (this.uploadStateSubject.value.status === 'Uploading') return;

        let endpoint = '';
        switch (type) {
            case 'Mainfile': endpoint = 'upload-mainfiles'; break;
            case 'AutoNumber': endpoint = 'upload-autonumbers'; break;
            case 'FileDetail': endpoint = 'upload-filedetails'; break;
            case 'Payment': endpoint = 'upload-payments'; break;
            case 'FileClassification': endpoint = 'upload-fileclassifications'; break;
            case 'Note': endpoint = 'upload-notes'; break;
            case 'AdditionalAmount': endpoint = 'upload-additionalamounts'; break;
            case 'Mail': endpoint = 'upload-mails'; break;
            case 'Attachment': endpoint = 'upload-attachments'; break;
        }

        this.uploadStateSubject.next({ jobId: null, status: 'Uploading', progress: 0, jobType: type });

        this.uploadFile(file, endpoint).subscribe({
            next: (res) => {
                this.uploadStateSubject.next({ jobId: res.jobId, status: 'Processing', progress: 0, jobType: type });
            },
            error: (err) => {
                console.error('Upload failed', err);
                const errorMsg = err.error?.message || err.error || err.message || 'فشل رفع الملف';
                this.uploadStateSubject.next({
                    jobId: null,
                    status: 'Failed',
                    progress: 0,
                    jobType: type,
                    errorMessage: errorMsg
                });
            }
        });
    }

    // Signals from SignalR will update this state
    updateProgress(jobId: number, progress: number, status: string, processed?: number, total?: number, errorCount?: number) {
        const current = this.uploadStateSubject.value;
        if (current.jobId === jobId) {
            this.uploadStateSubject.next({
                ...current,
                progress,
                status,
                processedRows: processed ?? current.processedRows,
                totalRows: total ?? current.totalRows,
                errorCount: errorCount ?? current.errorCount
            });
        }
    }

    resetUploadState() {
        this.uploadStateSubject.next({ jobId: null, status: 'Idle', progress: 0, jobType: null });
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

    getMyJobs(pageNumber: number = 1, pageSize: number = 10, jobType?: string, search?: string): Observable<PagedResponse<ImportJob>> {
        const params: any = {
            pageNumber: pageNumber.toString(),
            pageSize: pageSize.toString()
        };
        if (jobType) params.jobType = jobType;
        if (search) params.search = search;

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

    downloadPaymentsTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-payments-template`, 'Payments_Template.xlsx');
    }

    downloadFileDetailsTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-filedetails-template`, 'FileDetails_Template.xlsx');
    }

    downloadFileClassificationsTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-fileclassifications-template`, 'FileClassifications_Template.xlsx');
    }

    downloadNotesTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-notes-template`, 'Notes_Template.xlsx');
    }

    downloadAdditionalAmountsTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-additionalamounts-template`, 'AdditionalAmounts_Template.xlsx');
    }

    downloadMailsTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-mails-template`, 'Mails_Template.xlsx');
    }

    downloadAttachmentsTemplate(): void {
        this.downloadFile(`${this.apiUrl}/download-attachments-template`, 'Attachments_Template.xlsx');
    }

    downloadOriginal(jobId: number, jobType: string): void {
        this.downloadFile(`${this.apiUrl}/download-original/${jobId}`, `Original_${jobType}_${jobId}.xlsx`);
    }

    revertImport(jobId: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/revert/${jobId}`);
    }

    downloadErrorLog(jobId: number, fileName: string): void {
        this.downloadFile(`${this.apiUrl}/download-error-log/${jobId}`, `Errors_${fileName}`);
    }

    getJobData(jobId: number, pageNumber: number = 1, pageSize: number = 10, search?: string): Observable<PagedResponse<any>> {
        const params: any = {
            pageNumber: pageNumber.toString(),
            pageSize: pageSize.toString(),
            _t: new Date().getTime().toString()
        };
        if (search) params.search = search;

        return this.http.get<PagedResponse<any>>(`${this.apiUrl}/job-data/${jobId}`, { params });
    }

    updateJobFileName(jobId: number, fileName: string): Observable<any> {
        return this.http.put(`${this.apiUrl}/job/${jobId}`, { fileName });
    }

    getImportStats(jobType?: string): Observable<any> {
        const params: any = {};
        if (jobType) params.jobType = jobType;
        return this.http.get<any>(`${this.apiUrl}/stats`, { params });
    }

    exportJobData(jobId: number, fileName: string): void {
        const timestamp = new Date().toISOString().slice(0, 10);
        const finalName = `Current_Data_${fileName}_${timestamp}.xlsx`;
        this.downloadFile(`${this.apiUrl}/export-job-data/${jobId}`, finalName);
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
