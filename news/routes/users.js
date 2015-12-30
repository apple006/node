var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/article' , function(req, res) {
	res.send('respond from user/article');
});

router.get('/article/info/:id',function(req, res) {
	res.send('article ' + req.params.id);
});

module.exports = router;
