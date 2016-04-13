var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Token = new Schema({
    username: {
        type: String,
        index: true,
        require: true
    },
    token: String,
    expired_at: String
});

module.exports = mongoose.model('Token', Token);
