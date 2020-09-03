/*
module.exports.display = (req,res,next) => {
    let isAdmin = req.session.isAdmin
    let isVisible = isAdmin ? "visible" : "hidden";
   
    res.render('menu',{ isElementVisible : isVisible });
}
*/

module.exports.display = (req,res,next) => {
    let isAdmin = req.session.isAdmin
    let isVisible = isAdmin ? "visible" : "hidden";
   
    res.render('layout',{ page: "menu", isAdmin: req.session.isAdmin });
}

//module.exports.redirectSearchMovies = (req,res,next) => res.render('search');
//module.exports.redirectCreateMovie = (req,res,next) => res.redirect('createMovie');
//module.exports.redirectEditUsers = (req,res,next) => res.render('editUsers');
