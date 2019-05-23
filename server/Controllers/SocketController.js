const players = [];
const games = {}

const cardsFromDb = []
const mediaFromDb = []


//getting cards from db


    

module.exports = {
  joinRoom: (data, socket, io) => {
    console.log(data, "W");
    socket.join(data.gamePin);
    players.push(data.username);
    console.log(players, "players");
    io.to(data.gamePin).emit("welcome to", players);
  },

  getCards: (req, res) => {
    var newCards = []
    const db = req.app.get('db')
    db.get_cards().then(cardsdb => {
      cardsFromDb.push(cardsdb)
    })
  },

  getMedia: (req, res) => {
    const db = req.app.get('db')
    db.get_media().then(mediadb => {
      mediaFromDb.push(mediadb)
    })
  },

  gamesObjectCreator: (data,socket,io, app) => {
    console.log(data, 'data coming to gamesObjectCreator')
    console.log('cardsFromDb', cardsFromDb)
    console.log('mediaFromDb', mediaFromDb)

    socket.join(data.gameNumber);
    io.to(data.gameNumber).emit("welcome to");
    
    
    let newGame = {
      cards: cardsFromDb,
      turn: 1,
      images: mediaFromDb,
      current_image: "",
      players : [
        {
            username: "Francisca",
            hand: [],
            avatar:"https://s3-us-west-1.amazonaws.com/memes-project/Mocking-Spongebob.jpg",
            judge: false,
            score: 0,
            chosen_card: {}
        }
      ],
      active: true
    }

    games[data.gameNumber] = newGame
    console.log(games)

    io.to(data.gameNumber).emit("Send New Game", newGame);
  }


  

  






};