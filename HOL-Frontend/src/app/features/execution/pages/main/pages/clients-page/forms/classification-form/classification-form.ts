import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-classification-form',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './classification-form.html',
  styleUrl: './classification-form.css'
})
export class ClassificationForm {
 @ViewChild('actionModal') actionModal!: ElementRef<HTMLDialogElement>;
  @ViewChild('sectionModal') sectionModal!: ElementRef<HTMLDialogElement>;

  selectedAction: string = '';
  selectedClientStatus: string = '';
  selectedSection: string = '';

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
    this.selectedAction = action;
this.close(this.actionModal.nativeElement);
  }

  selectSection(section: string) {
    this.selectedSection = section;
    this.close(this.sectionModal.nativeElement);

  }

  save() {
    console.log('Saved classification:', {
      action: this.selectedAction,
      clientStatus: this.selectedClientStatus,
      section: this.selectedSection
    });
    alert('✅ تم حفظ التصنيف بنجاح');
  }
}
