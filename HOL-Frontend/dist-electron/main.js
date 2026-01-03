"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require("path");
const url = require("url");
let win = null;
const isDev = !electron_1.app.isPackaged || process.env.IS_DEV === '1';
const ANGULAR_INDEX = path.join(__dirname, '../dist/houseoflaw/browser/index.html');
function createWindow() {
    win = new electron_1.BrowserWindow({
        width: 1200,
        height: 800,
        minWidth: 1200,
        minHeight: 800,
        frame: false,
        titleBarStyle: 'hidden',
        backgroundColor: '#202c33',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: false,
            preload: path.join(__dirname, 'preload.js'),
        },
    });
    win.maximize();
    if (isDev) {
        const devUrl = process.env.NG_APP_URL || 'http://localhost:4200';
        win.loadURL(devUrl);
        // win.webContents.openDevTools({ mode: 'left' });
    }
    else {
        win.loadURL(url.pathToFileURL(ANGULAR_INDEX).toString());
    }
    electron_1.ipcMain.on('window:minimize', () => win?.minimize());
    electron_1.ipcMain.on('window:toggle-maximize', () => {
        if (!win)
            return;
        win.isMaximized() ? win.unmaximize() : win.maximize();
        win.webContents.send('window:maximize-changed', win.isMaximized());
    });
    electron_1.ipcMain.on('window:close', () => win?.close());
    electron_1.ipcMain.handle('window:isMaximized', () => win?.isMaximized() ?? false);
    win.on('closed', () => (win = null));
}
electron_1.app.whenReady().then(createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});
electron_1.app.on('activate', () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
//# sourceMappingURL=main.js.map