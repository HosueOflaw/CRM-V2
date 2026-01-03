import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';
// import { Header } from '../header/header';

@Component({
  selector: 'app-layout',
  templateUrl: './layout-with-sidebar.html',
  imports: [SidebarComponent, RouterModule, CommonModule  ],
  styleUrls:['./layout-with-sidebar.css']
})
export class LayoutWithSidebar {}
