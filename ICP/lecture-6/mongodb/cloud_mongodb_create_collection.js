/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://bhargavisandhyapodile:Bha123@ds163850.mlab.com:63850/webcloud';
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("webcloud");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
