const moviesDataFile = require('../../models/dals/moviesDataFile');

module.exports.display = (req,res,next) => {
    res.render('layout', {page: "movies/searchMovie", isAdmin: req.session.isAdmin});
}

module.exports.searchMovie = async (req,res,next) => {

       res.redirect(307,'/movies/searchResults');
}