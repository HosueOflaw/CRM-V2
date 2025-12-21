import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sub-tabs',
  imports: [CommonModule],
  templateUrl: './sub-tabs.html',
  styleUrl: './sub-tabs.css'
})
export class SubTabs {
@Input() tabs: string[] = [];
  @Output() tabChange = new EventEmitter<string>();
  selectedTab = '';

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.tabChange.emit(tab);
  }
}
