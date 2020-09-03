module.exports = (req,res,next) => {
    if(!req.session.isAdmin) {
    if(req.session.creditCount > req.session.numOfTransactions ) {
            req.session.error = "No credits left";
           return res.redirect('/login');
        }
        req.session.creditCount++;

    }
    next();
}