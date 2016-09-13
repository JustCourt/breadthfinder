var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/school/:school', function(req, res) {
  //res.render('index', { title: 'BreadthFinder', school: 'UofT' });
  console.log(req.params.school);
  res.render('index', req.params);
});

module.exports = router;
