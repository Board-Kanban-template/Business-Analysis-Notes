In VSCODE, install **'live server'** extension, and goto the settings for it. Open the json file names 'settings.json' and insert the following code into it:


"liveServer.settings.host": "localhost",

"liveServer.settings.AdvanceCustomBrowserCmdLine": "chrome",

"liveServer.settings.ChromeDebuggingAttachment": false,

"liveServer.settings.port": 8080

Note - you may need to change your port number to the correct one, but this should work as the default.


In VSCODE, after pasting all the files with assosciated with the commit **'Demo Project Files'**, right click in the 'index.html' file, and click 'Open with Live Server'. Then,
it should automatically open the demo inside your browser. You can change the web-browser (line 4) to another browser if you prefer.
