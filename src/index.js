const { app, Menu, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const electron = require('electron');
const Tray = electron.Tray;
const iconPath = path.join(__dirname, "Assets/icon.png");
const { is } = require('electron-util');

let tray = null;

const Store = require('./store.js');

// initialize the store
const store = new Store({
  configName: 'user-preferences',
  defaults: {
    windowBounds: {
      width: 800,
      height: 600 ,
      x: 0,
      y: 0
    },
    intervals: {
      work: 12,
      break: 2
    }
  }
});

console.log(store.get('windowBounds'));
console.log(store.get('intervals'));

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 650,
    height: 400,
    icon: 'Assets/icon.png',
    minimizable: false,
    maximizable: false,
    resizable: false,
    titleBarStyle: 'hidden',
    isVisible: true
  });
  if (is.development) {
    mainWindow.webContents.openDevTools();
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../../index.html')}`);
  }
  var x = 10;
  tray = new Tray(iconPath)
  tray.setToolTip('Mindful Pomodoro')
  tray.setIgnoreDoubleClickEvents(true)
  tray.setTitle(x + '')

   tray.on('click', function(){
    if (mainWindow.isVisible()) {
      mainWindow.hide()
    } else {
      mainWindow.show()
    }
  });

  if (process.platform === 'darwin') {
  var forceQuit = false;
  app.on('before-quit', function() {
    forceQuit = true;
  });
  mainWindow.on('close', function(event) {
    if (!forceQuit) {
      event.preventDefault();
      mainWindow.hide()
    }
  });
}

  const titleBarHack =
    'var div = document.createElement("div");' +
    'div.style.position = "absolute";' +
    'div.style.top = 0;' +
    'div.style.height = "23px";' +
    'div.style.width = "100%";' +
    'div.style["-webkit-app-region"] = "drag";' +
    'document.body.appendChild(div);';


    // make the transparent title bar draggable
    mainWindow.webContents.on('did-finish-load', function() {
        if (process.platform === 'darwin') {
            mainWindow.webContents.executeJavaScript(titleBarHack);
        }
    });
    const ret = globalShortcut.register('CommandOrControl+U', () => {
      mainWindow.show();
    })

    if (!ret) {
      console.log('registration failed')
    }

    // Check whether a shortcut is registered.
    console.log(globalShortcut.isRegistered('CommandOrControl+U'))
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function(){
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  };
  console.log('this works');
  console.log(store.get('work'));
  app.dock.hide();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// menu bar
