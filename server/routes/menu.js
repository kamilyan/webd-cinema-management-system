var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController');

//var setRole = require('../middlewares/roles');

/* GET users listing. */
router.get('/', menuController.display);
//router.post('/', menuController.redirectCreateMovie);

module.exports = router;
