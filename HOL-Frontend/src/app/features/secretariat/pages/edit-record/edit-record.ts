import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataViewService } from '../../../../services/data-view.service';
import { SweetAlertService } from '../../../../shared/services/sweet-alert.service';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
    selector: 'app-edit-record',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        InputTextModule,
        InputNumberModule,
        CheckboxModule,
        CardModule,
        DividerModule,
        PanelModule,
        TextareaModule,
        TooltipModule,
        ToastModule,
        TableModule,
        TagModule
    ],
    providers: [MessageService],
    templateUrl: './edit-record.html',
    styleUrls: ['./edit-record.css']
})
export class EditRecordPage implements OnInit {
    searchCode: string = '';
    searchDetail: string = '';
    searchAutoNumber: string = '';
    searchPayment: string = '';
    searchClassification: string = '';
    searchNote: string = '';
    loading = false;
    saving = false;
    record: any = null;

    details: any[] = [];
    autoNumbers: any[] = [];
    payments: any[] = [];
    classifications: any[] = [];
    notes: any[] = [];
    selectedDetail: any = null;
    selectedAutoNumber: any = null;
    loadingDetails = false;
    loadingAutoNumbers = false;
    savingDetail = false;
    savingAutoNumber = false;
    selectedPayment: any = null;
    savingPayment = false;
    selectedClassification: any = null;
    savingClassification = false;
    selectedNote: any = null;
    savingNote = false;
    activeTab: number = 0;

    constructor(
        private dataViewService: DataViewService,
        private swal: SweetAlertService,
        private messageService: MessageService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.fragment.subscribe(frag => {
            if (frag === 'details') this.activeTab = 1;
            else if (frag === 'numbers') this.activeTab = 2;
            else if (frag === 'payments') this.activeTab = 3;
            else if (frag === 'classifications') this.activeTab = 4;
            else if (frag === 'notes') this.activeTab = 5;
            else this.activeTab = 0;
        });
    }

    setActiveTab(tabIndex: number) {
        this.activeTab = tabIndex;
        let fragment = 'main';
        if (tabIndex === 1) {
            fragment = 'details';
            // Lazy load details if a record is loaded and details are empty
            if (this.record && this.details.length === 0) {
                this.fetchRelatedData(this.record.id);
            }
        }
        else if (tabIndex === 2) {
            fragment = 'numbers';
            // Lazy load autoNumbers if a record is loaded and autoNumbers are empty
            if (this.record && this.autoNumbers.length === 0) {
                this.fetchRelatedData(this.record.id);
            }
        }
        else if (tabIndex === 3) {
            fragment = 'payments';
        }
        else if (tabIndex === 4) {
            fragment = 'classifications';
            // Lazy load classifications if a record is loaded and classifications are empty
            if (this.record && this.classifications.length === 0) {
                this.fetchRelatedData(this.record.id);
            }
        }
        else if (tabIndex === 5) {
            fragment = 'notes';
            // Lazy load notes if a record is loaded and notes are empty
            if (this.record && this.notes.length === 0) {
                this.fetchRelatedData(this.record.id);
            }
        }

        this.router.navigate([], { fragment: fragment, relativeTo: this.route });
    }

    onSearch() {
        if (!this.searchCode || this.searchCode.trim() === '') {
            this.messageService.add({ severity: 'warn', summary: 'تنبيه', detail: 'يرجى إدخال الكود أولاً' });
            return;
        }

        this.loading = true;
        this.record = null;

        this.dataViewService.getMainfileByCode(this.searchCode.trim()).subscribe({
            next: (data) => {
                this.record = data;
                this.loading = false;
                this.messageService.add({ severity: 'success', summary: 'تم العثور', detail: 'تم تحميل بيانات الملف بنجاح' });
                // Sub-tab data is now strictly independent and not cleared or loaded by main search
            },
            error: (err) => {
                this.loading = false;
                const errorMsg = err.error?.message || 'لا يوجد ملف بهذا الكود أو الرقم التعريفي';
                this.swal.error({ title: 'غير موجود', text: errorMsg });
            }
        });
    }

    fetchRelatedData(mainfileId: any, findType?: string, findValue?: string) {
        this.loadingDetails = true;
        this.loadingAutoNumbers = true;

        this.dataViewService.getMainfileDetails(mainfileId).subscribe({
            next: (details) => {
                this.details = details;
                this.loadingDetails = false;
                if (findType === 'detail' && findValue) {
                    // Prioritize exact ID match
                    let match = details.find(d => d.id.toString() === findValue);
                    if (!match) {
                        match = details.find(d => d.contractNo?.toLowerCase().includes(findValue.toLowerCase()));
                    }
                    this.selectedDetail = match ? { ...match } : null;
                }
            },
            error: () => this.loadingDetails = false
        });

        this.dataViewService.getMainfileClassifications(mainfileId).subscribe({
            next: (classifications) => {
                this.classifications = classifications;
                if (findType === 'classification' && findValue) {
                    let match = classifications.find(c => c.id.toString() === findValue);
                    this.selectedClassification = match ? { ...match } : null;
                }
            },
            error: () => { }
        });

        this.dataViewService.getMainfileAutoNumbers(mainfileId).subscribe({
            next: (nums) => {
                this.autoNumbers = nums;
                this.loadingAutoNumbers = false;
                if (findType === 'autonumber' && findValue) {
                    // Prioritize exact ID match
                    let match = nums.find(n => n.id.toString() === findValue);
                    if (!match) {
                        match = nums.find(n => n.autoNumberValue?.toLowerCase().includes(findValue.toLowerCase()));
                    }
                    this.selectedAutoNumber = match ? { ...match } : null;
                }
            },
            error: () => this.loadingAutoNumbers = false
        });

        this.dataViewService.getMainfileNotes(mainfileId).subscribe({
            next: (notes) => {
                this.notes = notes;
                if (findType === 'note' && findValue) {
                    let match = notes.find(n => n.id.toString() === findValue);
                    this.selectedNote = match ? { ...match } : null;
                }
            },
            error: () => { }
        });
    }

    onSave() {
        if (!this.record) return;

        this.saving = true;
        this.dataViewService.updateMainfile(this.record.id, this.record).subscribe({
            next: () => {
                this.saving = false;
                this.swal.success({ title: 'تم الحفظ', text: 'تم تحديث البيانات بنجاح' });
                this.messageService.add({ severity: 'success', summary: 'نجاح', detail: 'تم الحفظ' });
            },
            error: (err) => {
                this.saving = false;
                this.swal.error({ title: 'فشل الحفظ', text: err.error?.message || 'حدث خطأ أثناء التحديث' });
            }
        });
    }

    onSearchDetail() {
        if (!this.searchDetail?.trim()) {
            this.messageService.add({ severity: 'warn', summary: 'تنبيه', detail: 'يرجى إدخال بيانات البحث' });
            return;
        }
        this.loading = true;
        this.selectedDetail = null;

        const val = this.searchDetail.trim();

        // Strictly independent search for file details
        this.dataViewService.searchFileDetails(val).subscribe({
            next: (results: any[]) => {
                this.details = results;
                this.activeTab = 1;
                this.loading = false;
                if (results.length > 0) {
                    this.messageService.add({ severity: 'success', summary: 'تم العثور', detail: `تم العثور على ${results.length} سجل` });
                    if (results.length === 1) {
                        this.selectedDetail = { ...results[0] };
                    }
                } else {
                    this.messageService.add({ severity: 'info', summary: 'تنبيه', detail: 'لم يتم العثور على نتائج' });
                }
            },
            error: () => {
                this.loading = false;
                this.messageService.add({ severity: 'error', summary: 'خطأ', detail: 'حدث خطأ أثناء البحث' });
            }
        });
    }

    onSearchAutoNumber() {
        if (!this.searchAutoNumber?.trim()) {
            this.messageService.add({ severity: 'warn', summary: 'تنبيه', detail: 'يرجى إدخال الرقم الآلي' });
            return;
        }
        this.loading = true;
        this.selectedAutoNumber = null;

        const val = this.searchAutoNumber.trim();

        // Strictly independent search for auto numbers
        this.dataViewService.searchAutoNumbers(val).subscribe({
            next: (results: any[]) => {
                this.autoNumbers = results;
                this.activeTab = 2;
                this.loading = false;
                if (results.length > 0) {
                    this.messageService.add({ severity: 'success', summary: 'تم العثور', detail: `تم العثور على ${results.length} سجل` });
                    if (results.length === 1) {
                        this.selectedAutoNumber = { ...results[0] };
                    }
                } else {
                    this.messageService.add({ severity: 'info', summary: 'تنبيه', detail: 'لم يتم العثور على نتائج' });
                }
            },
            error: () => {
                this.loading = false;
                this.messageService.add({ severity: 'error', summary: 'خطأ', detail: 'حدث خطأ أثناء البحث' });
            }
        });
    }

    onSaveDetail() {
        if (!this.selectedDetail) return;
        this.savingDetail = true;
        this.dataViewService.updateFileDetail(this.selectedDetail.id, this.selectedDetail).subscribe({
            next: () => {
                this.savingDetail = false;
                this.swal.success({ title: 'تم الحفظ', text: 'تم تحديث بيانات العقد بنجاح' });
            },
            error: (err) => {
                this.savingDetail = false;
                this.swal.error({ title: 'فشل الحفظ', text: err.error?.message || 'حدث خطأ أثناء التحديث' });
            }
        });
    }

    onSaveAutoNumber() {
        if (!this.selectedAutoNumber) return;
        this.savingAutoNumber = true;
        this.dataViewService.updateAutoNumber(this.selectedAutoNumber.id, this.selectedAutoNumber).subscribe({
            next: () => {
                this.savingAutoNumber = false;
                this.swal.success({ title: 'تم الحفظ', text: 'تم تحديث الرقم الآلي بنجاح' });
            },
            error: (err) => {
                this.savingAutoNumber = false;
                this.swal.error({ title: 'فشل الحفظ', text: err.error?.message || 'حدث خطأ أثناء التحديث' });
            }
        });
    }

    selectDetail(detail: any) {
        this.selectedDetail = { ...detail };
    }

    selectAutoNumber(num: any) {
        this.selectedAutoNumber = { ...num };
    }

    onSearchPayment() {
        if (!this.searchPayment?.trim()) {
            this.messageService.add({ severity: 'warn', summary: 'تنبيه', detail: 'يرجى إدخال كود السداد' });
            return;
        }
        this.loading = true;
        this.selectedPayment = null;

        const val = this.searchPayment.trim();

        this.dataViewService.searchPayments(val).subscribe({
            next: (results: any[]) => {
                this.payments = results; // Added to update payments array
                this.activeTab = 3;
                this.loading = false;
                if (results.length > 0) {
                    this.messageService.add({ severity: 'success', summary: 'تم العثور', detail: `تم العثور على ${results.length} سجل` });
                    if (results.length === 1) {
                        this.selectedPayment = { ...results[0] };
                    }
                } else {
                    this.messageService.add({ severity: 'info', summary: 'تنبيه', detail: 'لم يتم العثور على نتائج' });
                }
            },
            error: () => {
                this.loading = false;
                this.messageService.add({ severity: 'error', summary: 'خطأ', detail: 'حدث خطأ أثناء البحث' });
            }
        });
    }

    onSavePayment() {
        if (!this.selectedPayment) return;
        this.savingPayment = true;
        this.dataViewService.updatePayment(this.selectedPayment.id, this.selectedPayment).subscribe({
            next: () => {
                this.savingPayment = false;
                this.swal.success({ title: 'تم الحفظ', text: 'تم تحديث بيانات السداد بنجاح' });
            },
            error: (err) => {
                this.savingPayment = false;
                this.swal.error({ title: 'فشل الحفظ', text: err.error?.message || 'حدث خطأ أثناء التحديث' });
            }
        });
    }

    onSearchClassification() {
        if (!this.searchClassification?.trim()) {
            this.messageService.add({ severity: 'warn', summary: 'تنبيه', detail: 'يرجى إدخال بيانات البحث' });
            return;
        }
        this.loading = true;
        this.selectedClassification = null;

        const val = this.searchClassification.trim();

        this.dataViewService.searchFileClassifications(val).subscribe({
            next: (results: any[]) => {
                this.classifications = results;
                this.activeTab = 4;
                this.loading = false;
                if (results.length > 0) {
                    this.messageService.add({ severity: 'success', summary: 'تم العثور', detail: `تم العثور على ${results.length} سجل` });
                    if (results.length === 1) {
                        this.selectedClassification = { ...results[0] };
                    }
                } else {
                    this.messageService.add({ severity: 'info', summary: 'تنبيه', detail: 'لم يتم العثور على نتائج' });
                }
            },
            error: () => {
                this.loading = false;
                this.messageService.add({ severity: 'error', summary: 'خطأ', detail: 'حدث خطأ أثناء البحث' });
            }
        });
    }

    onSaveClassification() {
        if (!this.selectedClassification) return;
        this.savingClassification = true;
        this.dataViewService.updateFileClassification(this.selectedClassification.id, this.selectedClassification).subscribe({
            next: () => {
                this.savingClassification = false;
                this.swal.success({ title: 'تم الحفظ', text: 'تم تحديث التصنيف بنجاح' });
            },
            error: (err) => {
                this.savingClassification = false;
                this.swal.error({ title: 'فشل الحفظ', text: err.error?.message || 'حدث خطأ أثناء التحديث' });
            }
        });
    }

    selectClassification(item: any) {
        this.selectedClassification = { ...item };
    }

    onSearchNote() {
        if (!this.searchNote?.trim()) {
            this.messageService.add({ severity: 'warn', summary: 'تنبيه', detail: 'يرجى إدخال بيانات البحث' });
            return;
        }
        this.loading = true;
        this.selectedNote = null;

        const val = this.searchNote.trim();

        this.dataViewService.searchNotes(val).subscribe({
            next: (results: any[]) => {
                this.notes = results;
                this.activeTab = 5;
                this.loading = false;
                if (results.length > 0) {
                    this.messageService.add({ severity: 'success', summary: 'تم العثور', detail: `تم العثور على ${results.length} سجل` });
                    if (results.length === 1) {
                        this.selectedNote = { ...results[0] };
                    }
                } else {
                    this.messageService.add({ severity: 'info', summary: 'تنبيه', detail: 'لم يتم العثور على نتائج' });
                }
            },
            error: () => {
                this.loading = false;
                this.messageService.add({ severity: 'error', summary: 'خطأ', detail: 'حدث خطأ أثناء البحث' });
            }
        });
    }

    onSaveNote() {
        if (!this.selectedNote) return;
        this.savingNote = true;
        this.dataViewService.updateNote(this.selectedNote.id, this.selectedNote).subscribe({
            next: () => {
                this.savingNote = false;
                this.swal.success({ title: 'تم الحفظ', text: 'تم تحديث الملاحظة بنجاح' });
            },
            error: (err) => {
                this.savingNote = false;
                this.swal.error({ title: 'فشل الحفظ', text: err.error?.message || 'حدث خطأ أثناء التحديث' });
            }
        });
    }

    selectNote(note: any) {
        this.selectedNote = { ...note };
    }

    selectPayment(payment: any) {
        this.selectedPayment = { ...payment };
    }

    onClear() {
        this.record = null;
        this.selectedDetail = null;
        this.selectedAutoNumber = null;
        this.selectedPayment = null;
        this.selectedClassification = null;
        this.selectedNote = null;
        this.searchCode = '';
        this.searchDetail = '';
        this.searchAutoNumber = '';
        this.searchPayment = '';
        this.searchClassification = '';
        this.searchNote = '';
        this.details = [];
        this.autoNumbers = [];
        this.payments = [];
        this.classifications = [];
        this.notes = [];
        this.setActiveTab(0);
    }
}
