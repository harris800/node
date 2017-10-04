// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('We are unable to connect to MongoDB server');
    }
    console.log('connect to MongoDB server');
    // db.collection('Todos').deleteMany({
    //     text: 'Something to do'
    // }).then( result => {
    //     console.log(result);
    // });
    // db.collection('Todos').deleteOne({
    //     text: 'Walk the dog'
    // }).then( result => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('59cc69607828cc57e3aed082')
    }).then(result => console.log(result))
    // db.close();
});
