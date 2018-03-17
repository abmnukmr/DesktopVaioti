'use strict';


const setupEvents = require('./installers/setupEvents')
if (setupEvents.handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}







const electron = require('electron');
const path=require('path')
const nativeImage=electron.nativeImage;
//  Module to control application life.
const {
  app } = electron;
// Module to create native browser window.
const {
  BrowserWindow
} = electron;
var {Menu} = electron;
let win;

function createWindow() {
  // Create the browser window.
  let demoIcon=nativeImage.createFromPath(path.join(__dirname ,'/../src/assets/icon/png/icon.png'))
  win = new BrowserWindow({
    width: 400,
    height: 700,
    webPreferences: {
      devTools: false
    },
    icon:  path.join(__dirname ,'/icon.icns')
  });

  var url = 'file://' + __dirname + '/../www/index.html';

  var Args = process.argv.slice(2);
      Args.forEach(function (val) {
      if (val === "test") {
        url = 'http://localhost:8100'
       }
  });

  // and load the index.html of the app.
  win.loadURL(url);

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });


  var template = [{
    label: "VAIOTI",
    submenu: [
      { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]},
    {
      label: "Help",
      }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});
