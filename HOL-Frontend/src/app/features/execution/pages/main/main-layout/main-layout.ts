import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopTabs } from '../shared/top-tabs/top-tabs';
import { Sidebar } from '../shared/sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet,TopTabs,Sidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
