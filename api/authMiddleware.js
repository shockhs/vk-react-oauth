module.exports.redirectLogin = function Auth(req, res, next) {
    const { currentUser } = req.session
    
    if (currentUser) {
        next()
    } else {
        res.redirect('/login')
    }
}

module.exports.redirectHome = function Auth(req, res, next) {
    const { currentUser } = req.session

    if (currentUser) {
        res.redirect('/')
    } else {
        next()
    }
}
