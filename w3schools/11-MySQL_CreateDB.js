var mysql = require('mysql');

// Connect parameters
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

// Connect DB
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    
    // Query DB
    var sql = "CREATE DATABASE mydb CHARACTER SET utf8 COLLATE utf8_thai_520_w2";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Database created");
    });
});
