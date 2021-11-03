var http = require('http');
var fs = require('fs');
var dt = require('./0201-myDateTime');
const { Console } = require('console');

http.createServer(function(req, res){
    console.log('Nodejs server running at port 8080.');
    console.log('URL: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
        if (req.url == '/') {
        // Read File
        console.log('Reading... 0401-FileToRead.html');
        fs.readFile('0401-FileToRead.html', function(err, data){
            res.write(data);
        });
    } else if (req.url == '/open') {
        // Open or creat new file to read.
        console.log('Open or create 0402-FileToOpen.txt');
        fs.open('0402-FileToOpen.txt', 'w', function(err, file){
            if (err) throw err;
            console.log('Saved!');
        });
    } else if (req.url == '/append') {
        // Append or create new file.
        console.log('Append or create 0402-FileToOpen.txt');
        fs.appendFile('0402-FileToOpen.txt', 
            'Append this file at ' + dt.myDateTime() + '\n',
            function(err) {
                if (err) throw err;
                console.log('Append data and saved!');
            }
        );
    } else if (req.url == '/write') {
        // Write to existing or new file.
        console.log('Wring some data to 0402-FileToOpen.txt');
        fs.writeFile('0402-FileToOpen.txt', 'This file was replace with write method!!', 
            function(err){
                if (err) throw err;
                console.log('Writed at ' + dt.myDateTime());
            });
    } else if (req.url == '/delete') {
        // Delete file.
        console.log('Deleting 0403-FileToDelete.txt');
        fs.unlink('0403-FileToDelete.txt', function(err) {
            if (err) throw err;
            console.log('File was deleted!');
        });
    } else if (req.url == '/rename') {
        // Rename file.
        console.log('Rename file 0402-FileToOpen.txt to 0403-FileRename.txt');
        fs.rename('0402-FileToOpen.txt', '0403-FileToDelete.txt',
            function(err) {
                if (err) throw err;
                console.log ('File renamed!');
            }
        );
    };
    res.write('Current date/time: ' + dt.myDateTime());
}).listen(8080);