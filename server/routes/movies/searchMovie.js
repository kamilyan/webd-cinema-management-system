var express = require('express');
var router = express.Router();
const searchMovieController = require('../../controllers/movies/searchMovieController');
const hasCredit = require('../../middlewares/credits.js')

//var setRole = require('../middlewares/roles');

/* GET users listing. */
router.get('/', searchMovieController.display);
router.post('/',hasCredit, searchMovieController.searchMovie);

module.exports = router;
