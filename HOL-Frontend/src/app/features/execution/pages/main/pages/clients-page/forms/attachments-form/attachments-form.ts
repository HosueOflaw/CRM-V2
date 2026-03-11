import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ClientService, CreateClientDto } from '../../../../../../../finance/services/ClientService';
import { SweetAlertService } from '../../../../../../../../shared/services/sweet-alert.service';

@Component({
  selector: 'app-attachments-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attachments-form.html',
  styleUrl: './attachments-form.css'
})
export class AttachmentsForm implements OnInit {
  @Input() client!: CreateClientDto;
  attachments: any[] = [];
  loadingVisible: boolean = false;

  constructor(
    private clientService: ClientService,
    private swal: SweetAlertService
  ) { }

  ngOnInit() {
    if (this.client?.code) {
      this.loadAttachments();
    }
  }

  loadAttachments() {
    this.clientService.getClientAttachments(this.client.code).subscribe({
      next: (data) => this.attachments = data,
      error: () => console.error('Failed to load attachments')
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && this.client?.code) {
      this.loadingVisible = true;
      this.clientService.uploadAttachment(this.client.code, file, 'مرفق موكل').subscribe({
        next: () => {
          this.loadingVisible = false;
          this.swal.success({ title: 'تم الرفع', text: 'تم رفع الملف بنجاح' });
          this.loadAttachments();
        },
        error: () => {
          this.loadingVisible = false;
          this.swal.error({ title: 'خطأ', text: 'فشل رفع الملف' });
        }
      });
    }
  }

  deleteAttachment(id: number) {
    this.swal.fire({
      title: 'هل أنت متأكد؟',
      text: 'هل أنت متأكد من حذف هذا المرفق؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم، احذف',
      cancelButtonText: 'إلغاء'
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.clientService.deleteAttachment(id).subscribe({
          next: () => {
            this.swal.success({ title: 'تم الحذف', text: 'تم حذف المرفق بنجاح' });
            this.loadAttachments();
          },
          error: () => this.swal.error({ title: 'خطأ', text: 'فشل حذف المرفق' })
        });
      }
    });
  }

  downloadAttachment(id: number, fileName: string) {
    this.clientService.downloadAttachment(id).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    });
  }
}
