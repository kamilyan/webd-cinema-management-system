const moviesDataFile = require('../../models/dals/moviesDataFile');
const moviesDataREST = require('../../models/dals/moviesDataREST');

module.exports.display = (req,res,next) => {
    res.render('layout', { page : "movies/createMovie", isAdmin: req.session.isAdmin});
}

module.exports.save = async (req,res,next) => {
    let moviesData = await moviesDataFile.getMovies();
    let moviesFromWeb = await moviesDataREST.getMovies();
    let movies = moviesFromWeb.data; // change to be more reusable.
    let startID = movies[movies.length - 1].id;
    let idMovie = moviesData.movies.length + startID + 1;

    let genres = [];
    genres.push(req.body.genres);
    let newMovie = {
        id : idMovie,
        name : req.body.name,
        language : req.body.languages,
        genre : genres
    };
    moviesData.movies.push(newMovie);
    moviesDataFile.saveMovies(moviesData).then(data => {
        res.redirect('/menu');
        }
    );
}
