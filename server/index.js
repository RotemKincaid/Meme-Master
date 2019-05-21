var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

io.on("connection", function(socket) {
  socket.emit("news", " hello world");
  socket.on("name", function(data) {
    console.log(data);
    socket.emit("welcome", data.playerName);
  });
  socket.on("Join Room", data => SocketController.joinRoom(data, socket, io));
});

require("dotenv").config();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const SocketController = require("./Controllers/SocketController");
server.listen(SERVER_PORT, () =>
  console.log(`server running on port ${SERVER_PORT}`)
);
