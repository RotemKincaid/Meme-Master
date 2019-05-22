const express = require("express");
const app = express();
const controller = require("./Controllers/controller");
const massive = require("massive");
const session = require("express-session");
require("dotenv").config();
// const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const socketController = require('./Controllers/socketController');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
      //miliseconds - seconds - minutes - hours - week
      maxAge: 1000 * 60 * 60 * 24 * 14
  }
}))




//post to create a game pin
app.post('/api/newgame', controller.createGame)
//post to create a username
app.post('/api/createuser', controller.createUser)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  // Run init once
  // app.init();
  console.log('Connected to db')
}).catch(err => console.log('cannot connect to db', err))


//sockets 

io.on('connection', function(socket) {
  console.log('a user connected')

  socket.emit('news', 'hello world')

  socket.on('my other event', function(data) {
    console.log(data);

    socket.emit('custom message', 'Complete')
  })

  socket.on('Join Room', function(data){        socketController.joinRoom(data, socket, io)
    console.log(data)

    socket.emit('custom message', 'new user joined with the pin')
  })
})







server.listen(SERVER_PORT, () =>
  console.log(SERVER_PORT, `server running on port ${SERVER_PORT}`)
);
