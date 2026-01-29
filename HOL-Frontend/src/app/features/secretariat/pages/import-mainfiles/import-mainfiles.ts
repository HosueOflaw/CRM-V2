import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExcelImportService, ImportJob } from '../../../../services/excel-import.service';
import { Signalr } from '../../../../services/signalr';
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
import { CheckboxModule } from 'primeng/checkbox';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-import-mainfiles',
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
        CheckboxModule
    ],
    templateUrl: './import-mainfiles.html'
})
export class ImportMainfilesPage implements OnInit, OnDestroy {
    @ViewChild('jobsTable') jobsTable!: Table;

    selectedFile: File | null = null;
    uploading = false;
    jobs: ImportJob[] = [];
    activeJobId: number | null = null;
    activeJobProgress = 0;
    activeJobStatus = '';

    // Pagination
    currentPage = 1;
    pageSize = 10;
    totalRecords = 0;
    loadingJobs = false;

    // View Data
    showDataDialog = false;
    viewingJob: any = null;
    jobData: any[] = [];
    loadingJobData = false;

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
        private swal: SweetAlertService
    ) { }

    ngOnInit() {
        // Table with lazy load will trigger its own initial load
        this.listenToProgress();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    loadJobs() {
        this.loadingJobs = true;
        this.importService.getMyJobs(this.currentPage, this.pageSize, 'Mainfile').subscribe({
            next: (result) => {
                this.jobs = result.data;
                this.totalRecords = result.totalCount;
                this.loadingJobs = false;

                // Check if there's any active job
                const activeJob = result.data.find(j => j.status === 'Processing' || j.status === 'Pending');
                if (activeJob) {
                    this.activeJobId = activeJob.id;
                    this.activeJobProgress = activeJob.progress;
                    this.activeJobStatus = activeJob.status;
                }
            },
            error: () => {
                this.loadingJobs = false;
            }
        });
    }

    refresh() {
        this.currentPage = 1;
        if (this.jobsTable) {
            this.jobsTable.first = 0;
        }
        this.loadJobs();
    }

    onPageChange(event: any) {
        this.currentPage = Math.floor(event.first / event.rows) + 1;
        this.pageSize = event.rows;
        this.loadJobs();
    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
    }

    uploadFile() {
        if (!this.selectedFile) return;

        this.uploading = true;
        this.importService.uploadMainfiles(this.selectedFile).subscribe({
            next: (res) => {
                this.activeJobId = res.jobId;
                this.activeJobStatus = 'Pending';
                this.activeJobProgress = 0;
                this.uploading = false;
                this.selectedFile = null;

                // Force reset to first page and reload after a tiny delay
                setTimeout(() => {
                    this.refresh();
                }, 500);

                this.swal.toast({ icon: 'info', title: 'بدأت المعالجة', text: 'يتم الآن رفع ومعالجة الملف في الخلفية' });
            },
            error: (err) => {
                this.uploading = false;
                this.swal.error({ title: 'خطأ في الرفع', text: err.error || 'فشل رفع الملف' });
            }
        });
    }

    listenToProgress() {
        this.signalr.message$.pipe(takeUntil(this.destroy$)).subscribe(msg => {
            if (msg.type === 'excel_import_progress' && msg.data.jobType === 'Mainfile') {
                if (msg.data.jobId === this.activeJobId) {
                    this.activeJobProgress = msg.data.progress;
                    this.activeJobStatus = 'Processing';
                }

                const job = this.jobs.find(j => j.id === msg.data.jobId);
                if (job) {
                    job.progress = msg.data.progress;
                    job.status = 'Processing';
                    job.processedRows = msg.data.processed;
                    job.totalRows = msg.data.total;
                }
            } else if (msg.type === 'excel_import_complete' && msg.data.jobType === 'Mainfile') {
                if (msg.data.jobId === this.activeJobId) {
                    this.activeJobId = null;
                    this.activeJobProgress = 100;
                }
                this.loadJobs();
            }
        });
    }

    downloadTemplate() {
        this.importService.downloadTemplate();
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
        this.loadingJobData = true;
        this.jobData = [];

        this.importService.getJobData(job.id).subscribe({
            next: (data) => {
                this.jobData = data;
                this.loadingJobData = false;
            },
            error: (err) => {
                this.loadingJobData = false;
                this.swal.error({ title: 'خطأ', text: err.error?.message || 'فشل تحميل بيانات العملية' });
            }
        });
    }

    editItem(item: any) {
        this.editingItem = { ...item };
        this.showEditDialog = true;
    }

    saveEdit() {
        if (!this.editingItem) return;

        this.savingEdit = true;
        this.dataViewService.updateMainfile(this.editingItem.id, this.editingItem).subscribe({
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
