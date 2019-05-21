const express = require("express");
const app = express();
const controller = require("./Controllers/controller");
const massive = require("massive");
const session = require("express-session");
require("dotenv").config();

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

app.post('/api/newgame', controller.createGame)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  // Run init once
  // app.init();
  console.log('Connected to db')
}).catch(err => console.log('cannot connect to db', err))


app.listen(SERVER_PORT, () =>
  console.log(SERVER_PORT, `server running on port ${SERVER_PORT}`)
);
