// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('We are unable to connect to MongoDB server');
    }
    console.log('connect to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59cc618ca445fb1258fef434')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, 4, 4));
    // }).catch(err => {
    //     console.log('Unable to fetch todo', err);
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }).catch(err => {
    //     console.log('Unable to fetch todo', err);
    // })

    db.collection('Users').find({
        name: 'Celeste'
    }).count().then((count) => {
        console.log(`Users count: ${count}`);
    }).catch(err => {
        console.log('Unable to fetch todo', err);
    })

    // db.close();
});
