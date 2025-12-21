import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './address-form.html',
  styleUrl: './address-form.css'
})
export class AddressForm {
addresses: any[] = [];
  selectedFile: File | null = null;
}
