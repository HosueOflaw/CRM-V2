import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../core/electron.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.html',
  styleUrls: ['./topbar.css']
})
export class Topbar implements OnInit {
  isMax = false;
  constructor(public es: ElectronService) {}
  async ngOnInit() {
    this.isMax = await this.es.isMaximized();
    this.es.onMaximizeChanged(v => this.isMax = v);
  }
}
