// requires
const dotenv = require('dotenv')
// const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)
// src imports
import ChatApiController  from './../WhatsAppBot/controller/ChatApiController'

dotenv.config()

const normalizePort = (val) => {
  let port = parseInt(val, 10)
  if (isNaN(port)) {
    return val // named pipe
  }
  if (port >= 0) {
    return port // port number
  }
  return false
}
let port = normalizePort(process.env.MYPORT || '3000')

server.listen(port, () => {
  console.log(`The server nodejs listen in ${process.env.MYAPIURL}:${process.env.MYPORT}`)
})

// tell express where to serve static files from
app.use(express.static('public'))


app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use((req, res, next) => {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', `${process.env.MYAPIURL}:${process.env.MYPORT}`)
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With')
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   // Pass to next layer of middleware
//   next()
// })

ChatApiController.load(app)

// app.get('/chat', (req, res) => {
//   // res.send(req.query.name)
//   res.send(`alex christian`)
//   // res.render(express.static('views'))
// })


// app.get('/home', function (req, res) {
//   res.send('It\'s working')
//   // res.render(express.static('views'))
// })
