'use strict';
var express = require('express'), 
    db = require('../models'),
    logger = require('../helpers/logger'),
    cache = require('../helpers/cache'),
    router = express.Router();

// get app config
router.get('/get', function(req, res){
    // get from cache
    cache.get('AppConfig', function(err, reply) {
        if (!err && reply) {
            logger.debug('Get AppConfig from cache');
            return res.send(reply);
        }

        // find AppConfig in Database
        db.AppConfig
        .findOne()
        .then(function(cfg) {
            // save to cache
            cache.set('AppConfig', JSON.stringify(cfg));
            res.send(JSON.stringify(cfg));
        }).catch(function(e) {
            res.status(500).send(JSON.stringify(e));
        });
    });

});

// create app config
router.post('/create', function(req, res){
    var config = new db.AppConfig(req.body);

    // remove data before insert new config
    db.AppConfig.remove({}, function() {
        config.save(function(error, new_config){
            if (error) {
                return res.status(406).send(JSON.stringify({error}));
            }
            // remove cache AppConfig value
            logger.debug('Remove AppConfig from Cache');
            cache.del('AppConfig');
            res.send(JSON.stringify(new_config));
        });
    });
});

module.exports = router;
