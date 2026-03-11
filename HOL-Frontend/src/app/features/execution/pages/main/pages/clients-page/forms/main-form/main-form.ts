import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateClientDto } from '../../../../../../../finance/services/ClientService';

@Component({
  selector: 'app-main-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-form.html',
  styleUrl: './main-form.css'
})
export class MainForm {
  @Input() client!: CreateClientDto;
}
