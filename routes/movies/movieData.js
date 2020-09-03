var express = require('express');
const movieDataController = require('../../controllers/movies/movieDataController');
var router = express.Router();
const hasCredit = require('../../middlewares/credits.js')

/* GET home page. */
router.get('/:id',hasCredit, movieDataController.processAndDisplay);

module.exports = router;
