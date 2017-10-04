// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('We are unable to connect to MongoDB server');
    }
    console.log('connect to MongoDB server');
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('59cc618ca445fb1258fef435')
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( result => {
        console.log(result);
    });
    // db.collection('Todos').deleteOne({
    //     text: 'Walk the dog'
    // }).then( result => {
    //     console.log(result);
    // });

    // db.close();
});
