import express from 'express'
import { resolve, join } from 'path'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import session from 'express-session'
import cors from 'cors'
import http from 'http'
import authRoute from './api/auth/routes'
import userRoute from './api/user/routes'
import { redirectHome, redirectLogin } from './api/authMiddleware'

dotenv.config()

const app = express()
const { PORT = 5000, SESSION_TIME, SESSION_NAME, SESSION_SECRET, NODE_ENV } = process.env
const server = http.createServer(app)

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(
    session({
        name: SESSION_NAME,
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: Number(SESSION_TIME),
            sameSite: true,
            secure: false,
        },
    })
)

app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

app.use('/static', express.static(resolve(__dirname, 'client/build/static')))

app.get('/callback', (req: { query: { [key: string]: string } }, res: { sendFile: (arg0: any) => void; redirect: (arg0: string) => void }) => {
    if (req.query && req.query.code) {
        res.sendFile(join(__dirname + '/client/build/index.html'))
    } else res.redirect('/login')
})

app.get('/', redirectLogin, (req: any, res: { sendFile: (arg0: any) => void }) => {
    res.sendFile(join(__dirname + '/client/build/index.html'))
})

app.get('/login', redirectHome, (req: any, res: { sendFile: (arg0: any) => void }) => {
    res.sendFile(join(__dirname + '/client/build/index.html'))
})

server.listen(PORT, () => {
    console.log('Server up and running')
})
