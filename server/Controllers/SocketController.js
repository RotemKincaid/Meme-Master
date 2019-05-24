const players = [];
const games = {};
const cardsFromDb = [];
const mediaFromDb = [];

module.exports = {
  joinRoom: (data, socket, io) => {
    console.log('games before user joins' , games)

    console.log(data, "---> data");
    socket.join(data.gamePin);
    players.push(data.username);
    console.log(players, data.gamePin, "players");
    io.in(data.gamePin).emit("welcome to the game", data.username);

    let newPlayer = {
          username: data.username,
          hand: [],
          avatar: '',
          judge: false,
          score: 0,
          chosen_card: {}
    }

    // newGame.players.push(newPlayer)

    let objectKey = data.gamePin
    games[objectKey].players.push(newPlayer)
    console.log('game after player joins', games)

    io.in(data.gamePin).emit("send updated game", games[objectKey]);



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

    games[data.gamePin] = newGame;
    console.log(data);

    io.in(data.gamePin).emit("send new game", newGame);
    console.log();
  }
};