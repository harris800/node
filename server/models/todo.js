const mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Sleep',
    completed: false,
    completedAt: 112
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}).catch( e=> {
    console.log('Unable to save todo');
});

module.exports = {Todo};
