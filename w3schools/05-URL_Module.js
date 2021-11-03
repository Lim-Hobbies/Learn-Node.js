var http = require('http');
var url = require('url');
var fs = require('fs');
var addr = 'http://localhost:8080/default.html?year=2020&month=December';
var q = url.parse(addr, true);

console.log('HOST: ' + q.hostname);
console.log('Pathname: ' + q.pathname);
console.log('Search: ' + q.search);

var qdata = q.query;
console.log('qdata.month: ' + qdata.month);

http.createServer(function(req, res){
    q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
