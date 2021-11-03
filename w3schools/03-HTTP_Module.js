var http = require('http');
var url = require('url');
var dt = require('./0201-myDateTime');

http.createServer(function(req, res){
    console.log('Nodejs server running at port 8080.');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Your URL: ' + req.url + '<br>');

    var q = url.parse(req.url, true).query;
    var txt = 'Year: ' + q.year + 'Month: ' + q.month + '<br>';
    res.write(txt);
    txt = 'Current date/time: ' + dt.myDateTime() + '<br>';
    res.end(txt);
}).listen(8080);
