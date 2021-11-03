var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('Hello World!');
    console.log('This example is different');
    console.log('The result is displayed in the Command Line Interface.');
}).listen(8080);
