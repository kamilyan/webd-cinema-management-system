module.exports = (req,res,next) => {
    if(req.session.isAuthenticated) {
        next();
    }else {
        req.session.error = 'Please login';
        res.redirect('/login');
    }
}