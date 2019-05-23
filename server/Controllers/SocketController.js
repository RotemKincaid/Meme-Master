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
      cardsFromDb.push(cardsdb[0])

      // console.log(cardsdb)
      // console.log(cardsdb)
      // newCards.push(cardsdb)
      // res.status(200).send(cardsdb)
      
    })
    // console.log('cardsFromDb', cardsFromDb)

  },

  getMedia: (req, res) => {
    const db = req.app.get('db')
    db.get_media().then(mediadb => {
      mediaFromDb.push(mediadb[0])
    })
    
  },

  gamesObjectCreator: (data,socket,io, app) => {
    console.log(data, 'data coming to gamesObjectCreator')

   

    console.log('cardsFromDb', cardsFromDb)
    console.log('cardsFromDb', mediaFromDb)

    socket.join(data.gamePin);
    io.to(data.gamePin).emit("welcome to");
    
    
    let newGame = {
      cards: cardsFromDb,
      turn: 1,
      images: mediaFromDb,
      current_image: "",
      players : [
        {
            username: "",
            hand: [],
            avatar:"",
            judge: false,
            score: 0,
            chosen_card: {}
        }
      ],
      active: true
    }

    // games[gamePin] = newGame
  }


  

  






};