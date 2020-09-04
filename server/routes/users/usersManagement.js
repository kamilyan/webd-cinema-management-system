var express = require('express');
var router = express.Router();
const usersManagementController = require('../../controllers/users/usersManagementController');


/* GET users listing. */
router.get('/', usersManagementController.displayUsers);
router.get('/delete/:id', usersManagementController.performDelete);

module.exports = router;