const jsonfile = require('jsonfile')

module.exports.saveMovies = function(movies)
{
    return new Promise(resolve =>
        {
            jsonfile.writeFile(__dirname + '/../dataSource/newMovies.json',movies, (err) =>
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                   resolve();
                }
            });
        });
   
}

module.exports.getMovies = function()
{
    return new Promise(resolve =>
        {
            jsonfile.readFile(__dirname + '/../dataSource/newMovies.json',(err,data) =>
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                   resolve(data);
                }
            });
        });
   
}