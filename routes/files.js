var express = require('express');
var router = express.Router();
var path = require('path');

/* GET file */
router.get('/', function(req, res, next) {
  res.send(path.join('../files/', req.params.file));
});

module.exports = router;