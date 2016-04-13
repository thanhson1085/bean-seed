var mongoose = require('mongoose');
var crypto = require('crypto');
var logger = require('../helpers/logger');
var Schema = mongoose.Schema;
var CreateUpdatedAt = require('mongoose-timestamp');

// Define User Schema
var User = new Schema({
    username: {
        type: String,
        index: true,
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
    hashed_password: {
        type: String,
        require: true
    },
    salt: {
        type: String
    }
});

User.plugin(CreateUpdatedAt);

// Define virtual fullname attribute 
User.virtual('fullname').get(function() {
    return this.fistname + ' ' + this.lastname;
});

User.virtual('password')
.set(function(password) {
    this._password = password
    this.salt = this.makeSalt()
    this.hashed_password = this.encryptPassword(password)
})
.get(function() { return this._password })

User.path('username').validate(function (username) {
    return username.length;
}, 'Username cannot be blank');

User.path('username').validate(function (username, fn) {
    var User = mongoose.model('User')
    // Check only when it is a new user or when email field is modified
    if (this.isNew || this.isModified('username')) {
        User.find({ username: username }).exec(function (err, users) {
            fn(!err && users.length === 0)
        })
    } else fn(true)
}, 'Username already exists');


User.path('email').validate(function (email) {
    return email.length
}, 'Email cannot be blank');

User.path('email').validate(function (email, fn) {
    var User = mongoose.model('User')
    // Check only when it is a new user or when email field is modified
    if (this.isNew || this.isModified('email')) {
        User.find({ email: email }).exec(function (err, users) {
            fn(!err && users.length === 0)
        })
    } else fn(true)
}, 'Email already exists');

User.path('hashed_password').validate(function (password) {
    return password.length
}, 'Password cannot be blank');

// Do some thing before saving data
User.pre('save', function(next) {
    logger.debug('Starting saving user data');
    next();
});

// Do some thing after saving data
User.post('save', function(obj, next) {
    logger.debug('Finished %s', obj._id.toString());
    next();
});

// Define methods for User Model
User.methods = {

    // Authenticate - check if the passwords are the same
    authenticate: function (password) {
        return this.encryptPassword(password) === this.hashed_password
    },

    // Make salt
    makeSalt: function () {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    },

    // Encrypt password
    encryptPassword: function (password) {
        if (!password) return ''
            var encrypred
        try {
            encrypred = crypto.createHmac('sha1', this.salt).update(password).digest('hex')
            return encrypred
        } catch (err) {
            return ''
        }
    }
}

module.exports = mongoose.model('User', User);
