'use strict';
var express = require('express'), 
    db = require('../models'),
    router = express.Router();

// list users
router.get('/list/:page/:limit', function(req, res){
    res.send(JSON.stringify({}));
});

module.exports = router;
