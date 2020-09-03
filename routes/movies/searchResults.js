var express = require('express');
var router = express.Router();
const searchResultsController = require('../../controllers/movies/searchResultsController');
//var setRole = require('../middlewares/roles');

/* GET users listing. */
router.post('/', searchResultsController.processAndDisplay);

module.exports = router;
