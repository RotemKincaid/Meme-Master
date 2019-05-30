var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
require("dotenv").config();
const massive = require("massive");
const express = require('express')

const SocketController = require("./Controllers/SocketController");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use( express.static( `${__dirname}/../build` ) );

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("connected to db");
  })
  .catch(err => console.log("error connecting to db", err));

io.on("connection", function(socket) {
  console.log("a user connected");
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
  socket.on("choose winner card", data =>
    SocketController.chooseWinnerCard(data, socket, io)
  );
  socket.on("join room at player view", data =>
    SocketController.joinRoomAtPlayerView(data, socket, io)
  );
  socket.on("join room only", data =>
    SocketController.joinRoomOnly(data, socket, io)
  );

  socket.on("get chosen cards", data =>
    SocketController.getAllChosenCardsFromPlayers(data, socket, io)
  );

  socket.on("1234", function(data) {
    console.log("TESTY", data);
    socket.emit("4321", data);
  });
});
// getting cards into the game object
app.get("/api/cards1", SocketController.getCardsToObject);
// get the cards to frontend
// app.get("/api/cards2", SocketController.getCardsToFront);
app.get("/api/media", SocketController.getMedia);




const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

server.listen(SERVER_PORT, () =>
  console.log(`server running on port ${SERVER_PORT}`)
);
