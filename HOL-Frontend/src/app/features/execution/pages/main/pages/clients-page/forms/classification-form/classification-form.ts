import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateClientDto } from '../../../../../../../finance/services/ClientService';

@Component({
  selector: 'app-classification-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './classification-form.html',
  styleUrl: './classification-form.css'
})
export class ClassificationForm {
  @Input() client!: CreateClientDto;
  @ViewChild('actionModal') actionModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('sectionModal') sectionModal!: ElementRef<HTMLDialogElement>;

  actions = ['إجراء قانوني', 'مراجعة عقد', 'تحضير جلسة', 'تقديم طعن'];
  sections = ['شركات', 'أسرة', 'أفراد'];

  // Open/Close modals
  openActionModal() {
    this.actionModal.nativeElement.showModal();
  }

  openSectionModal() {
    this.sectionModal.nativeElement.showModal();
  }

  close(modal: HTMLDialogElement) {
    modal.close();
  }


  selectAction(action: string) {
    this.client.note = action;
    this.close(this.actionModal.nativeElement);
  }

  selectSection(section: string) {
    this.client.sector = section;
    this.close(this.sectionModal.nativeElement);
  }

  save() {
    console.log('Saved classification:', {
      action: this.client.note,
      clientStatus: this.client.registerType,
      section: this.client.sector
    });
  }
}
