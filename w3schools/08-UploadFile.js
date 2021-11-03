var http = require('http');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log("Server running at: http://localhost:8080")
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            //console.log(files);
            var oldpath = files.filetoupload.filepath;
            console.log('oldpath: ' + oldpath);
            var newpath = path.join(__dirname, '08-Upload/' + files.filetoupload.originalFilename);
            console.log('newparth: ' + newpath);
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);