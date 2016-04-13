'use strict';
var express = require('express'), 
    db = require('../models'),
    logger = require('../helpers/logger'),
    moment = require('moment'),
    config = require('config'),
    crypto = require('crypto'),
    router = express.Router();

// create a new user
router.post('/create', function(req, res){
    var user = new db.User(req.body);
    user.save(function(error, new_user){
        if (error) {
            return res.status(406).send(JSON.stringify({error}));
        }
        res.send(JSON.stringify(new_user));
    });
});

// login
router.post('/login', function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    db.User.findOne({
        username: username
    }).then(function(user){
        if (!user.authenticate(password)) {
            throw false;
        }
        db.Token.findOne({
            username: username
        }).then(function(t){
            if (!t){
                crypto.randomBytes(64, function(ex, buf) {
                    var token = buf.toString('base64');
                    var today = moment.utc();
                    var tomorrow = moment(today).add(config.get('token_expire'), 'seconds').format(config.get('time_format'));
                    var token = new db.Token({
                        username: username,
                        token: token,
                        expired_at: tomorrow.toString()
                    });
                    token.save(function(error, to){
                        return res.send(JSON.stringify(to));
                    });
                });
            }
            res.send(JSON.stringify({
                token: t.token,
                id: user.id,
                expired_at: t.expired_at
            }));
        });
    }).catch(function(e){
        res.status(401).send(JSON.stringify(e));
    });
});

module.exports = router;
