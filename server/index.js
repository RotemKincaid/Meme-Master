require('dotenv').config()
const express = require('express')

const controller = require("./Controllers/controller");
const massive = require("massive");



// const app = require('express')();


const socketController = require('./Controllers/socketController');


const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
var app = require('express')(),
  server  = require("http").createServer(app),
  io = require("socket.io")(server),
  session = require("express-session")({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true
  }),
  sharedsession = require("express-socket.io-session");


app.use(express.json());

app.use(session)






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





// Use express-session middleware for express


io.use(sharedsession(session))

io.on("connection", function(socket) {
  // Accept a login event with user's data
  console.log('a user connected')

  socket.emit('welcome', 'Welcome to the Meme Master Game!')


  socket.on('Add User', function(data) {
    console.log('data at join game',data)
      socket.handshake.session.data = {...socket.handshake.session.data, data};
      socket.handshake.session.save();
    
  });
  

  socket.on('Join Game', function(data) {
      console.log('data at join game',data)
      
      
        socket.handshake.session.data = {...socket.handshake.session.data, data};
        socket.handshake.session.save();
      
  });
  
  socket.on("logout", function(data) {
      if (socket.handshake.session.data) {
          delete socket.handshake.session.data;
          socket.handshake.session.save();
      }
  });        
});


// io.on('connection', function(socket) {
//   console.log('a user connected')

//   socket.emit('news', 'hello world')

//   socket.on('my other event', function(data) {
//     console.log(data);

//     socket.emit('custom message', 'Complete')
//   })

//   socket.on('Join Room', function(data){        socketController.joinRoom(data, socket, io)
//     console.log(data)

//     socket.emit('custom message', 'new user joined with the pin')
//   })
// })







server.listen(SERVER_PORT, () =>
  console.log(SERVER_PORT, `server running on port ${SERVER_PORT}`)
);
