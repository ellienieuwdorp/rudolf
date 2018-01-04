const electron = require('electron')
const { app, BrowserWindow } = require('electron')
var os = require('os')

app.on('ready', () => {
	var fs = require('fs');

	let win = new BrowserWindow({ width: 800, height: 600, icon: __dirname + '/../assets/WhatsApp-icon.png' })
	win.loadURL('https://web.whatsapp.com')
	let content = win.webContents

	if (os.platform() !== 'darwin') {
		win.setMenu(null);
	}

	win.webContents.on('did-finish-load', function () {
		
		//win.webContents.insertCSS(css)
		fs.readFile(__dirname+ '/theme.css', "utf-8", function(error, data) {
			if(!error) {
			var formatedData = data.replace(/\s{2,10}/g, ' ').trim()
			win.webContents.insertCSS(formatedData)
			}})
		})

	app.on('window-all-closed', app.quit);
	// app.on('before-quit', () => {
	// 	win.removeAllListeners('close');
	// 	win.close();
	// })

})
