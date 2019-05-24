const players = [];
const games = {};
const cardsFromDb = [];
const mediaFromDb = [];

module.exports = {
  joinRoom: (data, socket, io) => {
    console.log(data, "---> data");
    socket.join(data.gamePin);
    players.push(data.username);
    console.log(players, data.gamePin, "players");
    io.in(data.gamePin).emit("welcome to", players);

    let newPlayer = {
      username: data.username,
      hand: [],
      avatar: "",
      judge: false,
      score: 0,
      chosen_card: {}
    };
    let theGame = data.gamePin;
    games[theGame].players.push(newPlayer);

    io.in(data.gamePin).emit(
      "send game after player joined",
      games[data.gamePin]
    );
  },

  getCards: (req, res) => {
    var newCards = [];
    const db = req.app.get("db");
    db.get_cards().then(cardsdb => {
      cardsFromDb.push(cardsdb);
    });
  },
  getMedia: (req, res) => {
    const db = req.app.get("db");
    db.get_media().then(mediadb => {
      mediaFromDb.push(mediadb);
    });
  },

  gameObjectCreator: (data, socket, io) => {
    socket.join(data.gamePin);
    io.to(data.gamePin).emit("welcome to");

    let newGame = {
      cards: cardsFromDb,
      turn: 1,
      images: mediaFromDb,
      current_image: "",
      players: [],
      active: true
    };

    let theGame = data.gamePin;
    games[theGame] = newGame;
    console.log(data, "am I getting the data from the frontend?");

    io.to(theGame).emit("send new game", newGame);
    console.log(newGame);
  }
};
