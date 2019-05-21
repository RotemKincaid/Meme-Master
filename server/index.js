const express = require("express");
const app = express();
const controller = require("./Controllers/controller");
const massive = require("massive");
const session = require("express-session");
require("dotenv").config();

var server = require("http").Server(app);
var io = require("socket.io")(server);

// server.listen(80);
// WARNING: app.listen(80) will NOT work here!

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

io.on("connection", function(socket) {
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function(data) {
    console.log(data);
  });
});

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

massive("db", db);

server.listen(SERVER_PORT, () =>
  console.log(SERVER_PORT, `server running on port ${SERVER_PORT}`)
);
