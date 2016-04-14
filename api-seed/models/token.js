var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CreateUpdatedAt = require('mongoose-timestamp');

var Token = new Schema({
    username: {
        type: String,
        index: true,
        require: true
    },
    token: {
        type: String,
        index: true,
        require: true
    },
    expired_at: String
});

Token.plugin(CreateUpdatedAt);

module.exports = mongoose.model('Token', Token);
