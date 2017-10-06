const mongoose = require('mongoose');

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

module.exports = {User};
