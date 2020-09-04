var express = require('express');
const createMovieController = require('../../controllers/movies/createMovieController');
var router = express.Router();
const hasCredit = require('../../middlewares/credits.js')

/* GET home page. */
router.get('/', createMovieController.display );
router.post('/',hasCredit, createMovieController.save );

module.exports = router;
