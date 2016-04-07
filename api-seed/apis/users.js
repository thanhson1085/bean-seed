'use strict';
var express = require('express'), 
    db = require('../models'),
    router = express.Router();

// list users
router.get('/create', function(req, res){
    var user = new db.User({});
    user.save(function(err){
        console.log(err);
    });
    res.send(JSON.stringify({}));
});

module.exports = router;
