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
    var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
    con.query(sql, function(err, result, fields){
        if (err) throw err;
        console.log(result);
    });
});