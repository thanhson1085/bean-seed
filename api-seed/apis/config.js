'use strict';
var express = require('express'), 
    db = require('../models'),
    logger = require('../helpers/logger'),
    router = express.Router();

// get app config
router.get('/get', function(req, res){
    db.AppConfig
    .findOne()
    .then(function(cfg) {
        res.send(JSON.stringify(cfg));
    }).catch(function(e) {
        res.status(500).send(JSON.stringify(e));
    });
});

// create app config
router.post('/create', function(req, res){
    var config = new db.AppConfig(req.body);
    config.save(function(error, new_config){
        if (error) {
            return res.status(406).send(JSON.stringify({error}));
        }
        res.send(JSON.stringify(new_config));
    });
});

module.exports = router;
