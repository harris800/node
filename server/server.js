const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./db/mongoose.js');
const {Todo}= require('./models/todo.js');
const {User}= require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then(doc => {
        res.send(doc);
    }).catch(e => {
        res.status(400).send(e);
    })
});



app.listen(3000, () => {
    console.log('Start on port 3000');
})
