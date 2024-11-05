//Contains all the routes for endpoints that are internal to LCS.
//Routes are seperated so different policies and security can be applied.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/index.html');
});

module.exports = router;
