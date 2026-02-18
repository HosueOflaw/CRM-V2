import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExcelImportService, ImportJob } from '../../../../services/excel-import.service';
import { Signalr } from '../../../../services/signalr';
import { AuthService } from '../../../../core/services/auth';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { Table, TableModule } from 'primeng/table';
import { DataViewService } from '../../../../services/data-view.service';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TextareaModule } from 'primeng/textarea';
import { Subject, takeUntil } from 'rxjs';
import { ImportDashboardComponent } from "../../components/import-dashboard/import-dashboard.component";

@Component({
    selector: 'app-import-attachments',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        ButtonModule,
        ProgressBarModule,
        TagModule,
        DialogModule,
        TooltipModule,
        InputTextModule,
        InputNumberModule,
        TextareaModule,
        ImportDashboardComponent
    ],
    templateUrl: './import-attachments.html'
})
export class ImportAttachmentsPage implements OnInit, OnDestroy {
    @ViewChild('jobsTable') jobsTable!: Table;

    selectedFile: File | null = null;
    uploading = false;
    jobs: ImportJob[] = [];
    activeJobId: number | null = null;
    activeJobProgress = 0;
    activeJobStatus = '';
    activeJobProcessedRows = 0;
    activeJobTotalRows = 0;
    activeJobErrorCount = 0;

    // Pagination
    currentPage = 1;
    pageSize = 10;
    totalRecords = 0;
    loadingJobs = false;
    jobSearch = '';

    // View Data
    showDataDialog = false;
    viewingJob: any = null;
    jobData: any[] = [];
    loadingJobData = false;

    // Data View Modal Pagination
    jobDataPage = 1;
    jobDataPageSize = 10;
    jobDataTotalRecords = 0;
    jobDataSearch = '';

    // Row Editing
    showEditDialog = false;
    editingItem: any = null;
    savingEdit = false;

    // Job Editing
    showJobEditDialog = false;
    editingJob: any = null;
    savingJobEdit = false;

    private destroy$ = new Subject<void>();

    constructor(
        private importService: ExcelImportService,
        private dataViewService: DataViewService,
        private signalr: Signalr,
        private authService: AuthService,
        private swal: SweetAlertService
    ) { }

    get isAdmin(): boolean {
        return this.authService.isAdmin();
    }

    get isSupervisor(): boolean {
        return this.authService.isSupervisor();
    }

    ngOnInit() {
        this.loadJobs();
        this.listenToProgress();
        this.listenToUploadState();

        if (this.importService.currentUploadState.status === 'Failed') {
            this.importService.resetUploadState();
        }
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    listenToUploadState() {
        this.importService.uploadState$.pipe(takeUntil(this.destroy$)).subscribe((state: any) => {
            if (state.jobType === 'Attachment') {
                if (state.status === 'Uploading') {
                    this.uploading = true;
                } else if (state.status === 'Processing') {
                    this.uploading = false;
                    this.activeJobId = state.jobId;
                    this.activeJobStatus = 'Pending';
                    this.activeJobProgress = state.progress || 0;
                    this.activeJobProcessedRows = state.processedRows || 0;
                    this.activeJobTotalRows = state.totalRows || 0;
                    this.activeJobErrorCount = state.errorCount || 0;

                    if (this.selectedFile) {
                        this.swal.toast({ icon: 'info', title: 'بدأت المعالجة', text: 'يتم الآن رفع ومعالجة ملف المرفقات في الخلفية' });
                        this.selectedFile = null;
                        setTimeout(() => this.refresh(), 500);
                    }
                } else if (state.status === 'Failed') {
                    this.uploading = false;
                    this.swal.error({
                        title: 'خطأ في الرفع',
                        text: state.errorMessage || 'فشل رفع الملف'
                    }).then(() => {
                        this.importService.resetUploadState();
                    });
                }
            }
        });
    }

    loadJobs() {
        this.loadingJobs = true;
        this.importService.getMyJobs(this.currentPage, this.pageSize, 'Attachment', this.jobSearch).subscribe({
            next: (result) => {
                this.jobs = result.data;
                this.totalRecords = result.totalCount;
                this.loadingJobs = false;

                const activeJob = result.data.find(j => j.status === 'Processing' || j.status === 'Pending');
                if (activeJob) {
                    this.activeJobId = activeJob.id;
                    this.activeJobProgress = activeJob.progress;
                    this.activeJobStatus = activeJob.status;
                    this.activeJobProcessedRows = activeJob.processedRows;
                    this.activeJobTotalRows = activeJob.totalRows;
                    this.activeJobErrorCount = activeJob.errorCount;
                } else {
                    this.activeJobId = null;
                }
            },
            error: () => {
                this.loadingJobs = false;
            }
        });
    }

    refresh() {
        this.currentPage = 1;
        if (this.jobsTable) this.jobsTable.first = 0;
        this.loadJobs();
    }

    onPageChange(event: any) {
        this.currentPage = (event.first / event.rows) + 1;
        this.pageSize = event.rows;
        this.loadJobs();
    }

    onJobSearch() {
        this.currentPage = 1;
        this.loadJobs();
    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
    }

    uploadFile() {
        if (!this.selectedFile) return;
        this.importService.startUpload(this.selectedFile, 'Attachment');
    }

    listenToProgress() {
        this.signalr.message$.pipe(takeUntil(this.destroy$)).subscribe(msg => {
            if (msg.type === 'excel_import_progress' && msg.data.jobType === 'Attachment') {
                if (msg.data.jobId === this.activeJobId) {
                    this.activeJobProgress = msg.data.progress;
                    this.activeJobStatus = 'Processing';
                    this.activeJobProcessedRows = msg.data.processed;
                    this.activeJobTotalRows = msg.data.total;
                    this.activeJobErrorCount = msg.data.errorCount;

                    this.importService.updateProgress(
                        msg.data.jobId,
                        msg.data.progress,
                        'Processing',
                        msg.data.processed,
                        msg.data.total,
                        msg.data.errorCount
                    );
                }

                const job = this.jobs.find(j => j.id === msg.data.jobId);
                if (job) {
                    job.progress = msg.data.progress;
                    job.status = 'Processing';
                    job.processedRows = msg.data.processed;
                    job.totalRows = msg.data.total;
                    job.errorCount = msg.data.errorCount;
                }
            } else if (msg.type === 'excel_import_complete' && msg.data.jobType === 'Attachment') {
                if (msg.data.jobId === this.activeJobId) {
                    this.activeJobId = null;
                    this.activeJobProgress = 100;
                }
                this.loadJobs();
            }
        });
    }

    downloadErrorLog(job: any): void {
        this.importService.downloadErrorLog(job.id, job.fileName);
    }

    downloadTemplate() {
        this.importService.downloadAttachmentsTemplate();
    }

    getStatusSeverity(status: string) {
        switch (status) {
            case 'Completed': return 'success';
            case 'Processing': return 'info';
            case 'Pending': return 'warn';
            case 'Failed': return 'danger';
            default: return 'secondary';
        }
    }

    getStatusLabel(status: string) {
        switch (status) {
            case 'Completed': return 'مكتمل';
            case 'Processing': return 'جاري المعالجة';
            case 'Pending': return 'في الانتظار';
            case 'Failed': return 'فشل';
            default: return status;
        }
    }

    downloadOriginal(job: any) {
        this.importService.downloadOriginal(job.id, job.jobType);
    }

    exportJobData(job: any) {
        this.importService.exportJobData(job.id, job.fileName);
    }

    revertImport(job: any) {
        this.swal.question({
            title: 'هل أنت متأكد؟',
            text: `ستقوم هذه العملية بحذف العملية رقم (${job.id}) وجميع البيانات المرتبطة بها نهائياً!`,
            confirmButtonText: 'نعم، احذف',
            cancelButtonText: 'إلغاء'
        }).then(result => {
            if (result.isConfirmed) {
                this.swal.showLoading();
                this.importService.revertImport(job.id).subscribe({
                    next: () => {
                        this.swal.success({ title: 'تم الحذف', text: 'تم التراجع عن العملية وحذف البيانات بنجاح.' });
                        this.refresh();
                    },
                    error: (err) => {
                        this.swal.error({ title: 'فشل التراجع', text: err.error?.message || 'حدث خطأ أثناء محاولة التراجع.' });
                    }
                });
            }
        });
    }

    viewData(job: any) {
        this.viewingJob = job;
        this.showDataDialog = true;
        this.jobDataPage = 1;
        this.jobDataSearch = '';
        this.loadJobData();
    }

    loadJobData() {
        if (!this.viewingJob) return;
        this.loadingJobData = true;
        this.importService.getJobData(this.viewingJob.id, this.jobDataPage, this.jobDataPageSize, this.jobDataSearch).subscribe({
            next: (result) => {
                this.jobData = result.data;
                this.jobDataTotalRecords = result.totalCount;
                this.loadingJobData = false;
            },
            error: (err) => {
                console.error('Error fetching job data', err);
                this.loadingJobData = false;
                this.swal.error({ title: 'خطأ', text: 'فشل تحميل بيانات العملية' });
            }
        });
    }

    onJobDataPageChange(event: any) {
        this.jobDataPage = (event.first / event.rows) + 1;
        this.jobDataPageSize = event.rows;
        this.loadJobData();
    }

    onJobDataSearch() {
        this.jobDataPage = 1;
        this.loadJobData();
    }

    editItem(item: any) {
        this.editingItem = { ...item };
        this.showEditDialog = true;
    }

    saveEdit() {
        if (!this.editingItem) return;

        this.savingEdit = true;
        this.dataViewService.updateAttachment(this.editingItem.id, this.editingItem).subscribe({
            next: (updatedItem) => {
                const index = this.jobData.findIndex(i => i.id === updatedItem.id);
                if (index !== -1) {
                    this.jobData[index] = updatedItem;
                }
                this.showEditDialog = false;
                this.editingItem = null;
                this.savingEdit = false;
                this.swal.toast({ icon: 'success', title: 'تم التحديث بنجاح' });
            },
            error: (err) => {
                this.savingEdit = false;
                this.swal.error({ title: 'فشل التحديث', text: err.error?.message || 'حدث خطأ أثناء حفظ التعديلات' });
            }
        });
    }

    cancelEdit() {
        this.showEditDialog = false;
        this.editingItem = null;
    }

    editJobName(job: any) {
        this.editingJob = { ...job };
        this.showJobEditDialog = true;
    }

    saveJobName() {
        if (!this.editingJob) return;

        this.savingJobEdit = true;
        this.importService.updateJobFileName(this.editingJob.id, this.editingJob.fileName).subscribe({
            next: (updatedJob) => {
                const index = this.jobs.findIndex(j => j.id === updatedJob.id);
                if (index !== -1) {
                    this.jobs[index].fileName = updatedJob.fileName;
                }
                this.showJobEditDialog = false;
                this.editingJob = null;
                this.savingJobEdit = false;
                this.swal.toast({ icon: 'success', title: 'تم تحديث اسم الملف بنجاح' });
            },
            error: (err) => {
                this.savingJobEdit = false;
                this.swal.error({ title: 'فشل التحديث', text: err.error || 'حدث خطأ أثناء حفظ الاسم الجديد' });
            }
        });
    }

    cancelJobName() {
        this.showJobEditDialog = false;
        this.editingJob = null;
    }
}
