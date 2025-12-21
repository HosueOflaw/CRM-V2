"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('appWindow', {
    minimize: () => electron_1.ipcRenderer.send('window:minimize'),
    toggleMaximize: () => electron_1.ipcRenderer.send('window:toggle-maximize'),
    close: () => electron_1.ipcRenderer.send('window:close'),
    isMaximized: () => electron_1.ipcRenderer.invoke('window:isMaximized'),
    onMaximizeChanged: (cb) => electron_1.ipcRenderer.on('window:maximize-changed', (_e, v) => cb(v)),
    isElectron: true
});
//# sourceMappingURL=preload.js.map