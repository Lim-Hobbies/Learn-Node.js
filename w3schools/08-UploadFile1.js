var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req, res){
    console.log('Server running at port: 8080');
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetoupload.value;
            console.log('oldpath: ' + oldpath);

            // for Windows
            // var newpath = 'D:/dev_win/Lim-Hobbies/Learn-Node.js/w3schools/08-upload/' + files.filetoupload.name;
            // for Ubuntu
            // var newpath = '/mnt/d/dev_win/Lim-Hobbies/Learn-Node.js/w3schools/08-upload/' + files.filetoupload.name;
            // console.log('newpath: ' + newpath);
            // fs.rename(oldpath, newpath, function(err){
            //     if (err) throw err;
            //     res.write('File uploaded and moved!');
            //     res.end();
            // });
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action="fileupload" method="post" enctype="multiparty/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    };
}).listen(8080);