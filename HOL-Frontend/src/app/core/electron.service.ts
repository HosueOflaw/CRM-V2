import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ElectronService {
  get isElectron() { return !!window.appWindow?.isElectron; }
  minimize() { window.appWindow?.minimize(); }
  toggleMaximize() { window.appWindow?.toggleMaximize(); }
  close() { window.appWindow?.close(); }
  isMaximized() { return window.appWindow?.isMaximized?.() ?? Promise.resolve(false); }
  onMaximizeChanged(cb: (m: boolean) => void) { window.appWindow?.onMaximizeChanged?.(cb); }
}
