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

    io.in(data.gamePin).emit("welcome to");

    let newGame = {
      cards: cardsFromDb,
      turn: 1,
      images: mediaFromDb,
      current_image: "",
      players: [
        {
          username: "",
          hand: [],
          avatar: "",
          judge: false,
          score: 0,
          chosen_card: {}
        }
      ],
      active: true
    };

    games[data.gamePin] = newGame;
    console.log(data," line 53 SC");

    io.in(data.gamePin).emit("send new game", newGame);
    console.log();
  }
};
