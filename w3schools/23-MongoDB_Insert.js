var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, 
    function(err, db){
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = [
            { name: 'John', addr: 'Highway 71' },
            { name: 'Peter', addr: 'Lowstreet 4' },
            { name: 'Amy', addr: 'Apple st 652' },
            { name: 'Hannah', addr: 'Mountain 21' },
            { name: 'Michael', addr: 'Valley 345' },
            { name: 'Sandy', addr: 'Ocean blvd 2' },
            { name: 'Betty', addr: 'Green Grass 1' },
            { name: 'Richard', addr: 'Sky st 331' },
            { name: 'Susan', addr: 'One way 98' },
            { name: 'Vicky', addr: 'Yellow Garden 2' },
            { name: 'Ben', addr: 'Park Lane 38' },
            { name: 'William', addr: 'Central st 954' },
            { name: 'Chuck', addr: 'Main Road 989' },
            { name: 'Viola', addr: 'Sideway 1633' }
        ];
        dbo.collection("customers").insertMany(
            myobj, 
            function(err, res){
                if (err) throw err;
                console.log("Number of documents inserted: " + res.insertedCount);
                db.close();
            }
        );
    }
);