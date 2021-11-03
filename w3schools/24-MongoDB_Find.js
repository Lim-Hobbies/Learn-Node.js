var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("mydb");
    
    // Find One (first record found).
    dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log('List the 1st record found in "customers"');
        console.log(result);
        //db.close();
    });

    // Find all.
    dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log('List all record in "customers"');
        console.log(result);
        //db.close();
    });

    // Find specific column
    dbo.collection("customers").find({}, 
        { projection: { _id: 0, name: 1, addr: 1 }
        }).toArray(
            function(err, result) {
                console.log('List only "name" column.');
                console.log(result);
                //db.close();
            }
    );
});
