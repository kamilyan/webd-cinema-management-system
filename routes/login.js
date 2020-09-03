var express = require('express');
const loginController = require('../controllers/loginController');
var router = express.Router();

/* GET home page. */
router.get('/', loginController.display );
router.post('/', loginController.processAuthentication );

module.exports = router;