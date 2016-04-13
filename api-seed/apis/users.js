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
                    var tomorrow = moment(today).add('seconds', config.get('token_expire'));
                    var token = new db.Token({
                        username: username,
                        token: token,
                        expiredAt: tomorrow
                    });
                    token.save(function(error, to){
                        res.send(JSON.stringify(to));
                    });
                });
            }
            res.send(JSON.stringify({
                token: t.token,
                id: user.id,
                expiredAt: t.expiredAt
            }));
        });
    }).catch(function(e){
        res.status(401).send(JSON.stringify(e));
    });
});

module.exports = router;
