import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-titlebar',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="electron-titlebar" *ngIf="isElectron">
      <div class="drag-region">
        <span class="app-title">⚖️ بيت القانون</span>
      </div>
      <div class="window-controls">
        <button class="control-btn minimize" (click)="minimize()" title="تصغير">
          <i class="pi pi-minus"></i>
        </button>
        <button class="control-btn maximize" (click)="toggleMaximize()" [title]="isMaximized ? 'استعادة' : 'تكبير'">
          <i [class]="isMaximized ? 'pi pi-clone' : 'pi pi-stop'"></i>
        </button>
        <button class="control-btn close" (click)="close()" title="إغلاق">
          <i class="pi pi-times"></i>
        </button>
      </div>
    </div>
  `,
    styles: [`
    .electron-titlebar {
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #1e293b;
      color: #f8fafc;
      user-select: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9999;
    }

    .app-dark .electron-titlebar {
      background: #0f172a;
    }

    .drag-region {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      padding-right: 12px;
      -webkit-app-region: drag;
    }

    .app-title {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.5px;
      opacity: 0.7;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
    }

    .window-controls {
      display: flex;
      height: 100%;
      -webkit-app-region: no-drag;
    }

    .control-btn {
      width: 48px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      color: inherit;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .control-btn.close:hover {
      background: #ef4444;
      color: white;
    }

    .control-btn i {
      font-size: 10px;
    }

    :host-context(.app-dark) .control-btn:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  `]
})
export class AppTitlebar implements OnInit {
    isElectron = false;
    isMaximized = false;

    ngOnInit() {
        this.isElectron = !!(window as any).appWindow;
        if (this.isElectron) {
            const appWindow = (window as any).appWindow;

            appWindow.onMaximizeChanged((v: boolean) => {
                this.isMaximized = v;
            });

            appWindow.isMaximized().then((v: boolean) => {
                this.isMaximized = v;
            });
        }
    }

    minimize() {
        (window as any).appWindow?.minimize();
    }

    toggleMaximize() {
        (window as any).appWindow?.toggleMaximize();
    }

    close() {
        (window as any).appWindow?.close();
    }
}
