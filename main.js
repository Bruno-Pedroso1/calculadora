const { app, BrowserWindow } = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater');

app.on('ready', () => {
    autoUpdater.checkForUpdatesAndNotify();
});
function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 500,
        webPreferences: {
            preload: path.join(__dirname, 'calculadora.js')  
        }
    });

    win.loadFile('calc.html');  
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
