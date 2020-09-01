const express = require('express')
const { resolve, join } = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const session = require('express-session')
const cors = require('cors')
const http = require('http')

dotenv.config()

const app = express()
const { PORT = 5000, SESSION_TIME, SESSION_NAME, SESSION_SECRET, NODE_ENV } = process.env
const server = http.createServer(app)
const authRoute = require('./api/auth/routes')
const userRoute = require('./api/user/routes')
const authMiddleware = require('./api/authMiddleware')

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
            secure: NODE_ENV === 'production',
        },
    })
)

app.use('/static', express.static(resolve(__dirname, 'client/build/static')))

app.get('/', authMiddleware.redirectLogin, (req, res) => {
    res.sendFile(join(__dirname + '/client/build/index.html'))
})
app.get('/login', authMiddleware.redirectHome, (req, res) => {
    res.sendFile(join(__dirname + '/client/build/index.html'))
})
app.get('/:callback', (req, res) => {
    res.sendFile(join(__dirname + '/client/build/index.html'))
})

app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

server.listen(PORT, () => {
    console.log('Server up and running')
})
