var express = require('express');
var router = express.Router();
const userDataController = require('../../controllers/users/userDataController');


/* GET users listing. */
router.get('/edit/:id', userDataController.displayUserInfo);
router.get('/displayAddPage', userDataController.displayAddPage);
router.post('/performAddNewUser/:id*?', userDataController.performAddNewUser);

//router.get('/delete/:id', userDataController.performDelete);

module.exports = router;