import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-tabs',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './top-tabs.html',
  styleUrl: './top-tabs.css'
})
export class TopTabs {
}
