const usersDataFile = require('../../models/dals/usersDataFile');

module.exports.displayUserInfo =  async (req,res,next) => {
        let user = await usersDataFile.getUserById(req.params.id);
        res.render('layout', { page: 'users/userData' ,isAdmin: req.session.isAdmin, user : user})
}

module.exports.displayAddPage =  async (req,res,next) => {
    let user = { username : "", password : "", createDate : "", numOfTransactions: ""}
    res.render('layout', { page: 'users/userData' ,isAdmin: req.session.isAdmin, user : user})
}

module.exports.performAddNewUser =  async (req,res,next) => {
    let usersObj = await usersDataFile.getUsers();
    let users = usersObj.users;
    let indexUser = users.findIndex(user => user.id == req.params.id)
    if (indexUser != -1){
        users[indexUser] = { id : users[indexUser].id, username : req.body.username, password : req.body.password, createDate : req.body.createDate, numOfTransactions : req.body.numOfTransactions };
    }
    else{
        let newUser = { id : users.length + 1, username : req.body.username, password : req.body.password, createDate : req.body.createDate, numOfTransactions : req.body.numOfTransactions };
        users.push(newUser)
    }
 
    await usersDataFile.saveUsers(usersObj);
    res.redirect("/users/usersManagement");
}