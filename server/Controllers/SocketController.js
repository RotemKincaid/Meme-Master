module.exports = {
  joinRoom: (data, socket, io) => {
    console.log(data);
    socket.join(data.gamePin);
    io.to(data.gamePin).emit("welcome to", data.gamePin);
  }
};
