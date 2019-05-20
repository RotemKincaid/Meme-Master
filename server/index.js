const express = require("express");
const app = express();
const controller = require("./Controllers/controller");
const massive = require("massive");
const session = require("express-session");
require("dotenv").config();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(express.json());

massive("db", db);

app.listen(SERVER_PORT, () =>
  console.log(SERVER_PORT, `server running on port ${SERVER_PORT}`)
);
