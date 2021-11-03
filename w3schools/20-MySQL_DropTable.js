var mysql = require('mysql');

// Connect parameters
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

// Connect DB
con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    
    // Query DB
    var sql = "DROP TABLE customers";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Table deleted");
    });
});