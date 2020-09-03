module.exports = (req,res,next) => {
    if(!req.session.isAdmin) {
        req.session.creditCount++;
    }
    
    if(req.session.creditCount > req.session.numOfTransactions ) {
        req.session.error = 'No credits left';
        res.redirect('/login');
    }
    next();
}