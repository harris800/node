const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     },
//     completedAt: {
//         type: Number
//     }
// });
//
// var newTodo = new Todo({
//     text: 'Sleep',
//     completed: false,
//     completedAt: 112
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }).catch( e=> {
//     console.log('Unable to save todo');
// });

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

var newUser = new User({
    email: 'asasad     '
})

newUser.save().then((doc) => {
    console.log('Saved User', doc);
}).catch( e=> {
    console.log('Unable to save User');
});
