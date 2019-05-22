<<<<<<< HEAD
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
    resave: false,
    saveUninitialized: true,
    cookie: {
      //miliseconds - seconds - minutes - hours - week
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  }),
  sharedsession = require("express-socket.io-session");

=======
var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
>>>>>>> f5160a7a27153bb0eba1453dc879eba26019f8fc

io.on("connection", function(socket) {
  socket.emit("news", " hello world");
  socket.on("name", function(data) {
    console.log(data);
    socket.emit("welcome", data.playerName);
  });
  socket.on("Join Room", data => SocketController.joinRoom(data, socket, io));
});

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

var sesh = {}





// Use express-session middleware for express


io.use(sharedsession(session, {
  autoSave: true
}))

io.on("connection", function(socket) {
  // Accept a login event with user's data
  console.log('a user connected')

  let data = null
  socket.handshake.session.data = sesh

  socket.emit('welcome', 'Welcome to the Meme Master Game!')

  socket.on('Check Session', function(data) {
    socket.handshake.session.data = sesh
    console.log('SESH before adding AT check session', socket.handshake.session.data)

    console.log('data at check session', data)

    console.log('socket.handshake.session.data.gamePin', socket.handshake.session.data.gamePin)

    console.log('sesh', sesh)

    console.log('sesh.data.gamepin', sesh.data.gamePin)
    
    if (sesh.data.gamePin === data.gamePin) {
      socket.handshake.session.data = sesh
      console.log('continue with session')
    }else{
      console.log('there is no session')
    }
  })

  socket.on('Create Game', function(data) {
    console.log('data at create game',data)
    console.log('SESH before adding AT create game', socket.handshake.session.data)
    
    
      socket.handshake.session.data = {...socket.handshake.session.data, data};
      socket.handshake.session.save();

      console.log('SESH after adding AT create game', socket.handshake.session.data)

      sesh = socket.handshake.session.data

      
    
});


  socket.on('Add User', function(data) {
    socket.handshake.session.data = sesh
    console.log('sesh at beginning of add user', sesh)
    console.log('data at add user', data)
    console.log('SESH before adding AT ADD USER SOCKET', socket.handshake.session.data)
      
      // let newUsers = [...sesh.users, data.users]

      // console.log('newusers', newUsers)
      
      let newData ={...sesh, users: [data.users]}
      console.log('newData at add user', newData)

      socket.handshake.session.data = newData;
      socket.handshake.session.save();
      
      
      sesh = socket.handshake.session.data
      
      console.log(sesh.users)
      // let users = sesh.users
      // console.log('sesh.users', users)
      

      console.log('SHARED SESH after adding AT ADD USER SOCKET', socket.handshake.session.data)
    
  });
  

  socket.on('Join Game', function(data) {
      console.log('data at join game',data)

      socket.handshake.session.data = sesh

      console.log('SESH before join game', socket.handshake.session.data)

      if (sesh.data.gamePin === data.gamePin) {
        socket.handshake.session.data = sesh
        console.log('continue with session')
      }else{
        console.log('there is no session')
      }
      
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
require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const SocketController = require("./Controllers/SocketController");
server.listen(SERVER_PORT, () =>
  console.log(`server running on port ${SERVER_PORT}`)
);
