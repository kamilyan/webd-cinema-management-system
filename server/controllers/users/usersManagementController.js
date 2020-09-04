const usersDataFile = require('../../models/dals/usersDataFile');

module.exports.displayUsers =  async (req,res,next) => {
        let usersList = await usersDataFile.getUsers();

        res.render('layout', { page: 'users/usersManagement' ,isAdmin: req.session.isAdmin, users : usersList.users})
}

module.exports.performDelete =  async (req,res,next) => {
        let usersList = await usersDataFile.getUsers();
        let index = usersList.users.findIndex(x => x.id == req.params.id)
        usersList.users.splice(index, 1);
        await usersDataFile.saveUsers(usersList);
        res.render('layout', { page: 'users/usersManagement' ,isAdmin: req.session.isAdmin, users : usersList.users})
}