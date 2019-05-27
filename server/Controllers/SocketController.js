


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
  
    let gamePin = data.gamePin
    console.log('GAME PIN AT PREPARE GAME', gamePin)

    let cards = games[gamePin].cards
    let players = games[gamePin].players


    for (var i = 0; i < players.length; i++){
      games[gamePin].players[i].hand = games[gamePin].cards.splice(0, 7)
    }
    //chose a judge

    players[0].judge = true 

    games[gamePin].current_image = games[gamePin].images.splice(0,1)

     let preparedGame = games[gamePin]

      socket.join(data.gamePin);
     io.in(gamePin).emit("get prepared game",preparedGame )

  },

  changeTurn: (data, socket, io) => {
    console.log('HIT CHANGE TURN', data)

    //this will add a card to each player, pick a new judge

    let gamePin = data.gamePin
    let players = games[gamePin].players
    let cards = games[gamePin].cards

    for (var i = 0; i < players.length; i++){
      games[gamePin].players[i].hand.push(games[gamePin].cards.splice(0, 1)[0])
    }

    changedTurnGame = games[gamePin]

    games[gamePin].current_image = games[gamePin].images.splice(0,1)
    socket.join(data.gamePin);


    for (var i = 0; i < players.length; i++){
      for (var j = i + 1; j < players.length; j++){
      //change the players judge
        if (players[i].judge === true) {
          players[j].judge = true
          players[i].judge = false
        }
      }
    }
      // }
      // else if (players[1].judge === true) {
      //   players[1].judge = false
      //   players[2].judge = true
      // }
      // else if (players[2].judge === true) {
      //   players[2].judge = false
      //   players[3].judge = true
      // }
    
     

    console.log(changedTurnGame)
    io.in(gamePin).emit("get changed turn", changedTurnGame)






  },

  chooseCard: (data, socket, io) => {
    console.log('hit choose card', data)

    let gamePin = data.gamePin

    let players = games[gamePin].players

    players.chosen_card = data.card
    
    const fileteredCards = players.hand.filter(card => card.card_id  === card.id)

    chosenCardGame = games[gamePin]

    io.in(gamePin).emit("get chosen card", chosenCardGame)


  },

  changeScore: (data, socket, io) => {
    console.log('hit change score', data)

    let gamePin = data.gamePin

    let players = games[gamePin].players

    //need to find which player needs to be updated

    currentGameAfterScoreChange = games[gamePin]

    players.score = players.score + 1


    io.in(gamePin).emit("change player score", currentGameAfterScoreChange)


  },

  joinRoomAtPlayerView: (data, socket, io) => {
    console.log('hitjoinroom at player view')
    let gamePin = data.gamePin
    let game = games[gamePin]
    socket.join(data.gamePin);
    io.in(gamePin).emit("get game after join room", game)




  }




};