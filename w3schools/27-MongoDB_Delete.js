var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
/*
// Insert target record to be delted
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc.", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
});
*/
// Delete 1 record out
MongoClient.connect(url, function(err, db) {
    console.log ('deleting');
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").deleteMany({ name: 'Company Inc'},
        function(err, obj) {
            if (err) throw err;
            console.log ("1 document deleted!");
            db.close();
        }
    );
});
