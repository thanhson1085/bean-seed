'use strict';
var express = require('express'), 
    db = require('../models'),
    router = express.Router();

// create a new user
router.post('/create', function(req, res){
    var user = new db.User(req.body);
    user.save(function(error, new_user){
        if (error) {
            return res.status(406).send(JSON.stringify({error}));
        }
        delete new_user['salt'];
        delete new_user['password'];
        res.send(JSON.stringify(new_user));
    });
});

module.exports = router;
