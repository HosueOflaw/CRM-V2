import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win: BrowserWindow | null = null;
const isDev = !app.isPackaged || process.env.IS_DEV === '1';

const ANGULAR_INDEX = path.join(
  __dirname,
  '../dist/houseoflaw/browser/index.html'
);

function createWindow() {
  win = new BrowserWindow({
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
  } else {
    win.loadURL(url.pathToFileURL(ANGULAR_INDEX).toString());
  }

  ipcMain.on('window:minimize', () => win?.minimize());
  ipcMain.on('window:toggle-maximize', () => {
    if (!win) return;
    win.isMaximized() ? win.unmaximize() : win.maximize();
    win.webContents.send('window:maximize-changed', win.isMaximized());
  });
  ipcMain.on('window:close', () => win?.close());
  ipcMain.handle('window:isMaximized', () => win?.isMaximized() ?? false);

  win.on('closed', () => (win = null));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
