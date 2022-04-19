const { app, BrowserWindow } = require('electron');


const createWindow = () => {
	const win = new BrowserWindow({
		width: 220,
		height: 66,
		frame: false,
		alwaysOnTop: true,
		focusable: true,
		transparent: true,
		movable: true,
	})

	win.loadFile('index.html');
}

app.whenReady().then(() => {
	createWindow();
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})