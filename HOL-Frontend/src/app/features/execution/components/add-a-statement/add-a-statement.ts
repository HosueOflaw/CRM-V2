import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { StatementForm } from '../shared/statement-form/statement-form';
import { CustodyStatement } from '../../../../services/custody.service';

@Component({
  selector: 'app-add-a-statement',
  imports: [CommonModule, StatementForm],
  templateUrl: './add-a-statement.html',
  styleUrl: './add-a-statement.css'
})
export class AddAStatement {
  statements: CustodyStatement[] = [];
  @Output() filePreview = new EventEmitter<string | null>();

  onFilePreview(url: string | null) {
    this.filePreview.emit(url);
  }
}
