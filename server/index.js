var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
require("dotenv").config();
const massive = require("massive");

const SocketController = require("./Controllers/SocketController");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("connected to db");
  })
  .catch(err => console.log("error connecting to db", err));

io.on("connection", function(socket) {
  socket.emit("news", " hello world");
  
  socket.on("name", function(data) {
    console.log(data, "AHHHH MONSTERS");
    socket.emit("welcome", data.playerName);
  });

  socket.on("Join Room", data => SocketController.joinRoom(data, socket, io));

  socket.on("create game", data =>
    SocketController.gameObjectCreator(data, socket, io)
  );

  socket.on("prepare game", data =>
    SocketController.prepareGame(data, socket, io)
  );

  socket.on("change turn", data =>
    SocketController.changeTurn(data, socket, io)
  );

  socket.on("choose card", data =>
    SocketController.chooseCard(data, socket, io)
  );
  socket.on("join room at player view", data =>
    SocketController.joinRoomAtPlayerView(data, socket, io)
  );

  


});
// getting cards into the game object
app.get("/api/cards1", SocketController.getCardsToObject);
// get the cards to frontend
app.get("/api/cards2", SocketController.getCardsToFront);
app.get("/api/media", SocketController.getMedia);

server.listen(SERVER_PORT, () =>
  console.log(`server running on port ${SERVER_PORT}`)
);