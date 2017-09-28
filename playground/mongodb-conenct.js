// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('We are unable to connect to MongoDB server');
    }
    console.log('connect to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Add database failed', err);
    //     }
    //     console.log('success added data', JSON.stringify(result.ops, 2, 4));
    // });
    // db.collection('Users').insertOne({
    //     name: 'Harris',
    //     age: 29,
    //     location: 'NJ, USA'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Add database failed', err);
    //     }
    //     console.log('success added data', JSON.stringify(result.ops, 2, 4));
    // });
    db.close();
});
