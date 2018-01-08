const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/local';

MongoClient.connect(url, function(err, db) {
    if (err) {
        return console.dir(err);
    }
    console.log('Connected to mongodb');

    InsertDocument(db, function() {
        db.close();
    });
});

const InsertDocument = function(db, cb) {

    const collection = db.collection('users');

    collection.insert({
        name: 'Georgi',
        email: 'vega_95@abv.bg'
    }, function(err, result) {
        if (err) {
            return console.dir(err);
        }
        console.log('Inserted Doc');
        console.log(result);
        cb(result);
    });

}