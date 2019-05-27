


const players = [];
const games = {};
const cardsFromDb = [];
const mediaFromDb = [];

module.exports = {
  joinRoom: (data, socket, io) => {
    // console.log('games before user joins' , games)

    console.log(data, "---> data at JOIN ROOM");
    console.log(data.avatar.url)
    socket.join(data.gamePin);
    players.push(data.username);
    // console.log(players, data.gamePin, "players");
    io.in(data.gamePin).emit("welcome to the game", data.username);

    let newPlayer = {
          username: data.username,
          hand: [],
          avatar: data.avatar.url,
          judge: false,
          score: 0,
          chosen_card: {}
    }

    // newGame.players.push(newPlayer)

    let objectKey = data.gamePin
    games[objectKey].players.push(newPlayer)
    // console.log('game after player joins', games)

    io.in(data.gamePin).emit("send updated game", games[objectKey]);



  },

  getCardsToObject: (req, res) => {
    // var newCards = [];
    const db = req.app.get("db");
    db.get_cards().then(cardsdb => {
      cardsFromDb.push(cardsdb);
    });
  },
  getCardsToFront: (req, res) => {
    const db = req.app.get("db");
    db.get_cards().then(cards => res.status(200).send(cards));
  },

  getMedia: (req, res) => {
    const db = req.app.get("db");
    db.get_media().then(mediadb => {
      mediaFromDb.push(mediadb);
    });
  },

  gameObjectCreator: (data, socket, io) => {
    console.log('hit gameobject creator')
    socket.join(data.gamePin);

    io.in(data.gamePin).emit("welcome to");

    var shuffledCards = cardsFromDb[0].sort(function (a, b) {return Math.random() - 0.5;});
    // console.log(shuffledCards)

    var shuffledMedia = mediaFromDb[0].sort(function (a, b) {return Math.random() - 0.5;});
    // console.log('shuffledCards', shuffledCards)
    // console.log('shuffled media', shuffledCards)

    let newGame = {
      cards: shuffledCards,
      turn: 1,
      images: shuffledMedia,
      current_image: "",
      players: [],
      active: true
    };

    let theGame = data.gamePin;
    games[theGame] = newGame;
    // console.log(data, "am I getting the data from the frontend?");

    io.in(theGame).emit("send new game", newGame);
    // console.log(newGame);
  },


  prepareGame: (data, socket, io) => {

    console.log('hit prepare game!')
    // console.log('cards from db index 0',cardsFromDb[0])
    
    
    let gamePin = data.gamePin
    console.log('GAME PIN AT PREPARE GAME', gamePin)
    // console.log('game before changes', games[gamePin])

    // console.log('cards before adding to hand', games[gamePin].cards.length)

    let cards = games[gamePin].cards
    let players = games[gamePin].players
    // console.log('PLAYERS', players)

    for (var i = 0; i < players.length; i++){
      games[gamePin].players[i].hand = games[gamePin].cards.splice(0, 7)
    }

    //chose a judge

    players[0].judge = true 

    // games[gamePin].images.splice(0,1) 

    games[gamePin].current_image = games[gamePin].images.splice(0,1)




    // console.log('cards after adding to hand', games[gamePin].cards.length)

  

    // console.log('PLAYERS after card shuffle', players)

    

   





    //  console.log('game after changes', games[gamePin])
    //  console.log('card deck length after changes', games[gamePin].cards.length)

     let preparedGame = games[gamePin]
    //  console.log(preparedGame)
      socket.join(data.gamePin);
     io.in(gamePin).emit("get prepared game",preparedGame )

  }
};