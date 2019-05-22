module.exports = {
    joinRoom: (data, socket, io) => {
        console.log('data at join room',data);
        socket.join(data.gamePin);
        io.to(data.gamePin).emit('welcome to the room', data.gamePin);
    }
};