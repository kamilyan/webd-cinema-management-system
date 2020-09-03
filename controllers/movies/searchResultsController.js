
const moviesDataFile = require('../../models/dals/moviesDataFile');
const moviesDataREST = require('../../models/dals/moviesDataREST');

module.exports.processAndDisplay = async (req,res,next) => {
    
    let moviesDataFromFile = await moviesDataFile.getMovies();
    let moviesFromWebService = await moviesDataREST.getMovies();
  
    moviesREST = moviesFromWebService.data;

    let moviesFromREST = moviesREST.map(movie => { return { id : movie.id, name : movie.name, genres: movie.genres, language : movie.language };});
    let moviesFromFile = moviesDataFromFile.movies.map(movie => { return { id : movie.id, name : movie.name, genres : movie.genre, language : movie.language};});
    let mergedMovies = moviesFromREST.concat(moviesFromFile);

    
    let filteredMovies = mergedMovies.filter(movie => {
            if(movie.name.toLowerCase().includes(req.body.name.toLowerCase())&&
                (movie.genres.map(v => v.toLowerCase()).includes(req.body.genres.toLowerCase()) || req.body.genres === "genre" ) &&
                (movie.language.toLowerCase() === req.body.languages || req.body.languages === "language")){
                    return true;
                }
            else {
                return false;
            }
                
        }).map(movie => { return { id : movie.id, name : movie.name, genres : movie.genres };});
        let moviesWithSameGenre = [];
        let j = 0;
        while(j< filteredMovies.length){
            // store all the IDs of the relevant movies (filtered by genre)
            moviesWithSameGenre.push(mergedMovies.filter(movie => {
                // condition for finding intersections between genres
                // selected movie array and all movies from database
                if([movie.genres.map(v => v.toLowerCase()),filteredMovies[j].genres.map(v => v.toLowerCase())]
                .reduce((a,c)  => a.filter(i => c.includes(i))).length !== 0 ){
                        return true;
                    }
                else {
                    return false;
                }
                    
            }).map(movie => { return { id : movie.id, name : movie.name };}));
            j++;
        }
       // res.send(moviesWithSameGenre[0][1]);
       res.render('layout', { page: "movies/searchResults",  isAdmin: req.session.isAdmin, data : {
            selectedMovies : filteredMovies ,
            sameGenersMovies : moviesWithSameGenre }});
    }