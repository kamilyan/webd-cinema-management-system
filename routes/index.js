var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { page: 'menu' , isAdmin: req.session.isAdmin});
});

module.exports = router;
