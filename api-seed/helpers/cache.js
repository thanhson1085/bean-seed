var redis = require('redis');
var config = require('config');

var options = {
    host: config.get('redis.host'),
    port: config.get('redis.port'),
    prefix: config.get('redis.prefix')
}
if (config.get('redis.password')) {
    options.password = config.get('redis.password');
}
var cache = redis.createClient(options);


module.exports = cache;
