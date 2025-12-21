import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-tabs',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './main-tabs.html',
  styleUrl: './main-tabs.css'
})
export class MainTabs{
  activeTab: string = 'procedures';

  cases = [];
}
