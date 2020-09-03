const axios = require('axios')

module.exports.getMovies = function()
{
    return axios.get('https://api.tvmaze.com/shows')
}

/*
exports.getUser = function(id)
{
    return axios.get('https://api.tvmaze.com/shows/' + id)
}
*/