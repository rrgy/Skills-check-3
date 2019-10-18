require('dotenv').config()
const ctrl = require('./controller')
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env
const port = SERVER_PORT
const app = express()

app.use(express.json())

app.get('/api/houses', ctrl.getHouses)
app.post('/api/house', ctrl.postHouse)
app.delete(`/api/house/:id`, ctrl.deleteHouse)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected')
    app.listen(port, () => console.log(`${port}`))
})
app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))
