'use strict';

var express = require('express');
var fs = require('fs');
var path = require('path');
var config = require('config');
var app = express();
var yaml = require('js-yaml');
var bodyParser = require('body-parser');
var logger = require('./helpers/logger');

// body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// add-on swagger-editor
app.use('/swagger', express.static('./node_modules/swagger-editor'));
app.use('/', express.static('./docs'));
app.get('/docs', function(req, res){
    var docs = yaml.safeLoad(fs.readFileSync('./docs/swagger.yml', 'utf8'));
    res.send(JSON.stringify(docs));
});

// import middlewares
app.use(require('./middlewares/auth'));

// import routers
app.use(require('./apis'));

// start server
var server = app.listen(config.get('server.port'), config.get('server.host'), function () {
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Server start at http://%s:%s', host, port);
});

module.exports = app;
