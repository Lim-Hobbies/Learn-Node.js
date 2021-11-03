var http = require('http');
var dt = require('./0201-myDateTime');

http.createServer(function(req, res){
    console.log('Nodejs server listen at port 8080.');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);