import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empty-layout',
  imports: [ RouterModule, CommonModule],
  templateUrl: './empty-layout.html',
  styleUrl: './empty-layout.css'
})
export class EmptyLayout {

}
