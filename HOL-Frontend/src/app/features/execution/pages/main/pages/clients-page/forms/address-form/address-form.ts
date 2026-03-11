import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateClientDto } from '../../../../../../../finance/services/ClientService';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './address-form.html',
  styleUrl: './address-form.css'
})
export class AddressForm {
  @Input() client!: CreateClientDto;
  addresses: any[] = [];
  selectedFile: File | null = null;
}
