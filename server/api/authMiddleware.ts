import * as express from 'express';

const redirectLogin = (req: express.Request, res: express.Response, next: () => void) => {
    const { currentUser } = req.session

    if (currentUser) {
        next()
    } else {
        res.redirect('/login')
    }
}
const redirectHome = (req: express.Request, res: express.Response, next: () => void) => {
    const { currentUser } = req.session

    if (currentUser) {
        res.redirect('/')
    } else {
        next()
    }
}

export { redirectLogin, redirectHome }