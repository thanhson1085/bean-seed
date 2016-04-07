var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    firstname: String,
    lastname: String,
    password: {
        type: String,
        require: true
    },
    salt: {
        type: String
    }
});

module.exports = mongoose.model('User', User);
