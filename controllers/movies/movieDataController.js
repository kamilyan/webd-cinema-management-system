
const moviesDataFile = require('../../models/dals/moviesDataFile');
const moviesDataREST = require('../../models/dals/moviesDataREST');

module.exports.processAndDisplay = async (req,res,next) => {
    
    let moviesDataFromFile = await moviesDataFile.getMovies();
    let moviesFromWebService = await moviesDataREST.getMovies();
    moviesREST = moviesFromWebService.data;
    let displayMovieDetails;
    if(req.params.id <= moviesREST[moviesREST.length - 1].id) {
        displayMovieDetails =  moviesREST.filter(movie => movie.id == req.params.id)
        .map(movie => { return { id : movie.id , name : movie.name,
             genres : movie.genres, language : movie.language,
            url : movie.image.medium }; });
    }
    else {
        displayMovieDetails =  moviesDataFromFile.movies.filter(movie => movie.id == req.params.id)
        .map(movie => { return { id : movie.id , name : movie.name,
             genres : movie.genre, language : movie.language,
            url : null }; });
    }
        res.path
        res.render('layout', { page: "movies/movieData", isAdmin : req.session.isAdmin, data : { id : displayMovieDetails[0].id,
            genres : displayMovieDetails[0].genres,
            language : displayMovieDetails[0].language,
            name : displayMovieDetails[0].name,
            url : displayMovieDetails[0].url} });
    }