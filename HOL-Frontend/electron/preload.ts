import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('appWindow', {
  minimize: () => ipcRenderer.send('window:minimize'),
  toggleMaximize: () => ipcRenderer.send('window:toggle-maximize'),
  close: () => ipcRenderer.send('window:close'),
  isMaximized: () => ipcRenderer.invoke('window:isMaximized'),
  onMaximizeChanged: (cb: (v: boolean) => void) =>
    ipcRenderer.on('window:maximize-changed', (_e, v) => cb(v)),
  isElectron: true
});
