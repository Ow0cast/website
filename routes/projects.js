var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
    res.sendFile('../views/projects.pug')
});

module.exports = router;