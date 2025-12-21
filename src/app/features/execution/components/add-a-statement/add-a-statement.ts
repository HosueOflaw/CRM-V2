import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StatementForm } from '../shared/statement-form/statement-form';

@Component({
  selector: 'app-add-a-statement',
  imports: [StatementForm],
  templateUrl: './add-a-statement.html',
  styleUrl: './add-a-statement.css'
})
export class AddAStatement {
  
  statements: any[] = [];

}
