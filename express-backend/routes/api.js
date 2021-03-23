var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Working.... this is a backend API. Don't exect it to be pretty.")
});

router.get('/userName', function(req, res, next) {
  if((!req.session.username)){
    req.session.username = "Unknown User";
  }
  res.send({'username':req.session.username});
});

router.post('/userName', function(req, res, next) {
  if(req.body.username && typeof(req.body.username) == "string")
    req.session.username = req.body.username;
  else{
    res.send("err");
  }
  res.send();
});

router.get('/poll/:game', function(req, res, next) {
  //if(req.body.username && typeof(req.body.username) == "string")
  //  req.session.username = req.body.username;
  //else{
  //  res.send("err");
  //}
  if(!req.param.game) res.send("Game Id is Required");
  g = Game.find(req.param.game)
  if(!g) res.send("Game not found");
  res.send();
});

router.post('/poll/:game', function(req, res, next) {
  //if(req.body.username && typeof(req.body.username) == "string")
  //  req.session.username = req.body.username;
  //else{
  //  res.send("err");
  //}
  if(!req.param.game) res.send("Game Id is Required");
  g = Game.find(req.param.game)
  if(!g) res.send("Game not found");
  res.send();
});

module.exports = router;
