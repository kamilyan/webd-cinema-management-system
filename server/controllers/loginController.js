
const userDataDAL = require('../models/dals/usersDataFile');

module.exports.display = function(req, res, next) {
        res.render('layout', { page: 'login' , isAdmin: req.session.isAdmin, error: req.session.error});
}

module.exports.processAuthentication = async function(req, res, next) {
        let userDataDALObj = await userDataDAL.getUsers();
        let usersData = userDataDALObj.users;
 
        let currentUser = usersData.find(user => user.username === req.body.username);
        req.session.creditCount=1;
        if(!currentUser){
                res.render('layout', { page: 'login', isAdmin: req.session.isAdmin, error: "User not found." });
        }
        else if(currentUser.password !== req.body.password){
                res.render('layout', { page: 'login', isAdmin: req.session.isAdmin, error: "Incorrect password." });
        }
        else {
                // check if the user is admin.
                req.session.isAdmin = currentUser.username === "admin" ? true : false;
                req.session.isAuthenticated = true;
                req.session.numOfTransactions = currentUser.numOfTransactions;
                res.redirect("/menu");
        }
 }
 