var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
require("dotenv").config();

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// ------------------------this is th eblock cam added in order to make socket rooms dynamically----
// handle incoming connections from clients
io.sockets.on("room_connection", function(socket) {
  // once a client has connected, we expect to get a ping from them saying what room they want to join
  socket.on("room", function(room) {
    console.log(room);
    socket.join(room.gameNumber);
  });
});
// now, it's easy to send a message to just the clients in a given room
room = "abc123";
io.sockets.in(room).emit("message", "what is going on, party people?");
// this message will NOT go to the client defined above
io.sockets.in("foobar").emit("message", "anyone in this room yet?");
// --

io.on("connection", function(socket) {
  socket.emit("news", " hello world");
  socket.on("name", function(data) {
    console.log(data);
    socket.emit("welcome", data.playerName);
  });
  socket.on("Join Room", data => SocketController.joinRoom(data, socket, io));
});

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const SocketController = require("./Controllers/SocketController");
server.listen(SERVER_PORT, () =>
  console.log(`server running on port ${SERVER_PORT}`)
);
