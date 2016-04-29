var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppConfig = new Schema({
}, {strict: false});

module.exports = mongoose.model('AppConfig', AppConfig);
