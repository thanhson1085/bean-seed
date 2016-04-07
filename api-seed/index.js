'use strict';

var express = require('express');
var fs = require('fs');
var config = require('config');
var app = express();
var bodyParser = require('body-parser');
var logger = require('./helpers/logger');

// body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// import routers
app.use(require('./apis'));

// start server
var server = app.listen(config.get('server.port'), config.get('server.host'), function () {
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Server start at http://%s:%s', host, port);
});
