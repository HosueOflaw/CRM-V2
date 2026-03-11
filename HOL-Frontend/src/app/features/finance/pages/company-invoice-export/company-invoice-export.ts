import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustodyService, CustodyStatement } from '../../../../services/custody.service';
import { ClientService } from '../../services/ClientService';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-company-invoice-export',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './company-invoice-export.html',
    styleUrls: ['./company-invoice-export.css']
})
export class CompanyInvoiceExport implements OnInit {
    companies: any[] = [];
    reportData: CustodyStatement[] = [];
    selectedCompanyCode: number | null = null;
    selectedExpenseType: number | null = null;
    selectedIds: Set<number> = new Set<number>();
    totalSelectedAmount: number = 0;

    expenseTypes: { [key: number]: string } = {
        1: 'اجراءات قضائية',
        2: 'شهادات - معلومات مدنية',
        3: 'رسوم قضائية',
        4: 'تصوير ومصروفات ادارية',
        5: 'ايجار كرين',
        6: 'مصروفات غير مستردة'
    };

    constructor(
        private custodyService: CustodyService,
        private clientService: ClientService
    ) { }

    ngOnInit(): void {
        this.loadCompanies();
    }

    loadCompanies(): void {
        this.clientService.getAllClients().subscribe({
            next: (res) => this.companies = res,
            error: (err) => console.error('Error fetching companies', err)
        });
    }

    search(): void {
        this.custodyService.getReportData(this.selectedCompanyCode || undefined, this.selectedExpenseType || undefined).subscribe({
            next: (res) => {
                this.reportData = res;
                this.selectedIds.clear();
                this.updateTotal();
            },
            error: (err) => Swal.fire('Error', 'فشل جلب البيانات', 'error')
        });
    }

    toggleSelection(id?: number): void {
        if (id === undefined || id === null) return;

        if (this.selectedIds.has(id)) {
            this.selectedIds.delete(id);
        } else {
            this.selectedIds.add(id);
        }
        this.updateTotal();
    }

    toggleAllSelection(): void {
        if (this.isAllSelected()) {
            this.selectedIds.clear();
        } else {
            this.reportData.forEach(item => {
                if (item.id !== undefined && item.id !== null) {
                    this.selectedIds.add(item.id);
                }
            });
        }
        this.updateTotal();
    }

    isAllSelected(): boolean {
        const selectable = this.reportData.filter(item => item.id !== undefined && item.id !== null);
        return selectable.length > 0 && this.selectedIds.size === selectable.length;
    }

    updateTotal(): void {
        this.totalSelectedAmount = this.reportData
            .filter(item => item.id !== undefined && item.id !== null && this.selectedIds.has(item.id))
            .reduce((sum, item) => sum + (item.amount || 0), 0);
    }

    bulkUpdate(toCompany: boolean, toOffice: boolean): void {
        const ids = Array.from(this.selectedIds);
        if (ids.length === 0) return;

        const actionText = toCompany ? 'تم التسليم للشركة' : 'يتحملها المكتب';

        Swal.fire({
            title: 'هل أنت متأكد؟',
            text: `سيتم تحديد ${ids.length} سجل كـ ${actionText}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'نعم، نفذ',
            cancelButtonText: 'إلغاء'
        }).then((result) => {
            if (result.isConfirmed) {
                this.custodyService.bulkUpdateStatus(ids, toCompany, toOffice).subscribe({
                    next: () => {
                        Swal.fire('تم بنجاح', 'تم تحديث الحالات بنجاح', 'success');
                        this.search(); // Refresh
                    },
                    error: (err) => Swal.fire('Error', 'حدث خطأ أثناء التحديث', 'error')
                });
            }
        });
    }

    downloadSelected(): void {
        const ids = Array.from(this.selectedIds);
        if (ids.length === 0) return;

        this.custodyService.downloadZip(ids).subscribe({
            next: (blob) => {
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `Custody_Attachments_${new Date().getTime()}.zip`;
                link.click();
                window.URL.revokeObjectURL(url);
            },
            error: (err) => Swal.fire('Error', 'فشل تحميل الملفات', 'error')
        });
    }

    viewAttachment(content: string): void {
        const byteCharacters = atob(content);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const file = new Blob([byteArray], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
    }

    printReport(): void {
        window.print();
    }
}
