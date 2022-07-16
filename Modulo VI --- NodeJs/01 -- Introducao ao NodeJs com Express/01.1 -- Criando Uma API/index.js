const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoutes')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
const port = 3000

userRoute(app)


app.get('/', (req, res) => res.send('Ola Mundo Pelo Express'))
app.listen(port, () =>console.log("Api Rodando na Porta 3000"))