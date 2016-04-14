'use strict';
var db = require('../models');
var _ = require('lodash');
var config = require('config');
var logger = require('../helpers/logger');
var moment = require('moment');

module.exports = function(req, res, next) {
    if (req.method === 'OPTIONS') {
        return next();
    }
    var t = req.get('Authorization');
    var unauthorization = config.get('unauthorization');
    if (_.indexOf(unauthorization, req.url) < 0) {
        if (t === undefined) {
            logger.debug('Access Denied');
            return res.status(401).send(JSON.stringify({}));
        }
        t = t.replace('Bearer ', '');
        db.Token.findOne({
            token: t
        }).then(function(token){
            if (!token){
                throw('');
            }
            var today = moment.utc();
            var expired_at = moment(token.expired_at, config.get('time_format'));
            if (expired_at.isBefore(today)) {
                throw('');
            } else {
                return next();
            }
        }).catch(function(){
            logger.debug('Access Denied %s !!!', t);
            return res.status(401).send(JSON.stringify({}));
        });
    } else {
        return next();
    }
};
