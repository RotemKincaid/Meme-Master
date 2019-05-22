const players = [];

module.exports = {
  joinRoom: (data, socket, io) => {
    console.log(data, "W");
    socket.join(data.gamePin);
    players.push(data.username);
    console.log(players, "players");
    io.to(data.gamePin).emit("welcome to", players);
  }
};
