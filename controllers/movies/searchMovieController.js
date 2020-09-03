const moviesDataFile = require('../../models/dals/moviesDataFile');

module.exports.display = (req,res,next) => {
    res.render('layout', {page: "movies/searchMovie", isAdmin: req.session.isAdmin});
}

module.exports.searchMovie = async (req,res,next) => {
   /* let moviesData = await moviesDataFile.getMovies();
    let displayMovies = moviesData.movies.filter(movie => {
            if(movie.name.includes(req.body.name) ||
                movie.genre === req.body.genres ||
                movie.language === req.body.languages)
                    return true;
            else
                    return false;
        })
        req.session.requiredMovies = displayMovies;
        res.send(displayMovies);
        */
       res.redirect(307,'/movies/searchResults');
    }