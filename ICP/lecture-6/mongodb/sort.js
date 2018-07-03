/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bhargavisandhyapodile:Bha123@ds163850.mlab.com:63850/webcloud';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("webcloud");
    //Sort the result by name:
    var sort = { name: 1 };
    dbo.collection("newCollection").find().sort(sort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});