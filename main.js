const { app, BrowserWindow } = require('electron')

let win;
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';


function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#ffffff',
    // frame: false,

  })


  win.loadURL(`file://${__dirname}/dist/smart-ssh/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
