const players = [];
const games = {};

module.exports = {
  joinRoom: (data, socket, io) => {
    console.log(data, "W");
    socket.join(data.gamePin);
    players.push(data.username);
    console.log(players, "players");
    io.in(data.gamePin).emit("welcome to", players);
  },

  gameObjectCreator: (data, socket, io) => {
    let newGame = {
      cards: [],
      turn: 1,
      images: [],
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

    games[gamePin] = newGame;
    console.log(data);

    io.in(data.gamePin).emit("message", "did everyone join?");
  }
};
