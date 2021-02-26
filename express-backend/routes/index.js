var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Working.... this is a backend API. Don't exect it to be pretty.")
});

module.exports = router;
