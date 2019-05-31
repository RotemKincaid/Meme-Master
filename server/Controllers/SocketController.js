const players = [];
const games = {};
var cardsFromDb = [];
var mediaFromDb = [];
const functions = require('./dataFunctions')

module.exports = {
  joinRoom: (data, socket, io) => {
    console.log(data, "---> data at JOIN ROOM");

    let { avatar, gamePin, username } = data

    socket.join(gamePin);

    players.push(username);
   
    let newPlayer = functions.newPlayer(data)

    let initialPlayerScore = {
      username,
      score: 0,
      avatar: avatar.url
    };

    games[gamePin].scores.push(initialPlayerScore);

    games[gamePin].players.push(newPlayer);

    io.in(gamePin).emit("send updated game", games[gamePin]);
  },

  joinRoomOnly: (data, socket, io) => {
    console.log(data, "---> data at JOIN ROOM ONLY");

    socket.join(data.gamePin);

    let objectKey = data.gamePin;

    // console.log('game after player joins', games)

    // io.in(data.gamePin).emit("send game", games[objectKey]);
  },

  getCardsToObject: (req, res) => {
    // var newCards = [];
    const db = req.app.get("db");

    // db.get_cards().then(cardsdb => {
    //   console.log('HIT GET CARDS TO OBJECT', cardsdb.length)
    //   cardsFromDb.push(cardsdb);

    db.get_cards().then(res => {
      console.log("res at get cards to object", res);
      // console.log('cardsdb', cardsdb)
      cardsFromDb.push(res);
      // res.status(200).send(cardsdb);
      // console.log('cardsFromDb', cardsFromDb)
    });
  },
  // getCardsToFront: (req, res) => {
  //   const db = req.app.get("db");
  //   db.get_cards().then(cards => res.status(200).send(cards));
  // },

  getMedia: (req, res) => {
    const db = req.app.get("db");
    return db.get_media().then(res => {
      // mediaFromDb = mediadb;
      // res.send("media are on db", mediaFromDb);
      mediaFromDb.push(res);
    });
  },

  gameObjectCreator: (data, socket, io) => {
    console.log("data at GAME OBJECT CREATOR", data);

    const { gamePin } = data

    socket.join(gamePin);

    io.in(gamePin).emit("welcome to");

    if (cardsFromDb.length && mediaFromDb) {

      var newGame = functions.newGame(cardsFromDb, mediaFromDb)

      games[gamePin] = newGame;

      io.in(gamePin).emit("send new game", newGame);

    } else {
      console.log('error at getting media and cards from db')
    }
  
  },

  prepareGame: (data, socket, io) => {
    console.log("hit prepare game!");

    let gamePin = data.gamePin;
    console.log("GAME PIN AT PREPARE GAME", gamePin);

    let cards = games[gamePin].cards;
    let players = games[gamePin].players;

    if (cards) {
      for (var i = 0; i < players.length; i++) {
        games[gamePin].players[i].hand = games[gamePin].cards.splice(0, 7);
      }
      //chose a judge
  
      games[gamePin].judge = [players[0]];
  
      games[gamePin].active = true;
  
      players[0].judge = true;
  
      games[gamePin].current_image = games[gamePin].images.splice(0, 1);
  
      let preparedGame = games[gamePin];
  
      socket.join(data.gamePin);
      io.in(gamePin).emit("get prepared game", preparedGame);
    } else {
      console.log('error at creating new object, no cards from db')
    }
    

    

  },

  changeTurn: (data, socket, io) => {
    // console.log('HIT CHANGE TURN', data)

    //this will add a card to each player, pick a new judge

    let gamePin = data.gamePin;
    let changedTurnGame = games[gamePin];
    console.log("GAME BEFEORE BEING  TURNED", changedTurnGame);
    let players = games[gamePin].players;
    let cards = games[gamePin].cards;

    let game = games[gamePin];

    for (var i = 0; i < players.length; i++) {
      games[gamePin].players[i].hand.push(games[gamePin].cards.splice(0, 1)[0]);
    }

    game.winnerCard = [];
    game.chosenCards = [];

    games[gamePin].current_image = games[gamePin].images.splice(0, 1);

    socket.join(data.gamePin);

    // for (var i = 0; i < players.length; i++){
    //   for (var j = i + 1; j < players.length - 1; j++){
    //   //change the players judge
    //     if (players[i].judge === true) {
    //       players[j].judge = true
    //       players[i].judge = false
    //     }
    //   }
    // }

    let indexOfJudge = players.findIndex(player => {
      console.log("PLAYER.JUDGE?", player.judge);
      return player.judge;
    });

    console.log("INDEX OF JUDGE AT TURN GAME", indexOfJudge);
    players[indexOfJudge].judge = false;

    console.log("INDEX OF JUDGE AT TURN GAME", indexOfJudge);

    // let newIndex = indexOfJudge + 1

    // game.judge = players[newIndex]

    console.log("GAME.JUDGE BEFORE Change", game.judge);

    for (var i = 0; i < (players.length - 1); i++) {
      if (indexOfJudge === i) {
        game.judge = [players[i + 1]];
      } else if (indexOfJudge === players.length) {
        game.judge = [players[0]];
      }
    }

    // console.log("game.judge[0].username", game.judge[0].username);

    let indexOfJudgeByUsername = players.findIndex(player => {
      console.log("PLAYER.username?", player.username);
      return player.username === game.judge[0].username;
    });

    players[indexOfJudgeByUsername].judge = true;

    console.log("index of judge by username", indexOfJudgeByUsername);

    console.log("GAME.JUDGE after change", game.judge);

    console.log("indexofJudge at turn game", indexOfJudge);

    // console.log('indexofJudge at turn game', indexOfJudge)

    // for (var i = 0; i < players.length; i++){
    //   if (players[i].judge){
    //     players[i].judge = false
    //   }
    // }
    // }
    // else if (players[1].judge === true) {
    //   players[1].judge = false
    //   players[2].judge = true
    // }
    // else if (players[2].judge === true) {
    //   players[2].judge = false
    //   players[3].judge = true
    // }

    console.log(changedTurnGame);
    io.in(gamePin).emit("get changed turn", changedTurnGame);
    let url = "/playerview";
    io.in(gamePin).emit("redirect", url);
  },

  chooseCard: (data, socket, io) => {
    console.log("hit choose card", data);
    let gamePin = data.gamePin;
    let players = games[gamePin].players;

    let playerIndex = players.findIndex(
      player => player.username === data.username
    );

    let handOfPlayer = players[playerIndex].hand;

    let cardIndex = handOfPlayer.findIndex(
      card => card.card_id === data.card.card_id
    );

    let playerUsername = players[playerIndex].username;

    let chosenCard = handOfPlayer[cardIndex];

    let chosenCardAndPlayer = { ...chosenCard, playerUsername };
    console.log("chosen card and player", chosenCardAndPlayer);

    games[gamePin].chosenCards.push(chosenCardAndPlayer);

    players[playerIndex].chosen_card = chosenCard;

    console.log(cardIndex, "cardindex");

    console.log("player index at choosechard", playerIndex);

    handOfPlayer = handOfPlayer.splice(cardIndex, 1);

    console.log("chosen card in player", players[playerIndex].chosen_card);

    let chosenCardGame = games[gamePin];

    console.log("players hand after change", players[playerIndex].hand);

    io.in(gamePin).emit("get update game with chosen card", chosenCardGame);
  },

  chooseWinnerCard: (data, socket, io) => {
    console.log("hit winner choose card", data);
    let gamePin = data.gamePin;

    games[gamePin].winnerCard.push(data.card);

    //update player object first

    let playerUsername = data.card.playerUsername;

    let players = games[gamePin].players;

    let playerIndex = players.findIndex(
      player => player.username === playerUsername
    );

    let playerScore = players[playerIndex].score;

    players[playerIndex].score = playerScore + 1;

    console.log(players[playerIndex].score);

    //update game score object
    let playerScores = games[gamePin].scores;

    let playerIndexInScores = playerScores.findIndex(
      player => player.playerUsername === playerUsername
    );

    let newPlayerScore = playerScores[playerIndex].score;

    playerScores[playerIndexInScores].score = newPlayerScore + 1;

    // players[playerIndex].score = playerScore + 1

    let chosenWinnerCardGame = games[gamePin];

    // let playerScoreObject = {playerUsername, newPlayerScore}

    // console.log('playerScoreObject',playerScoreObject)
    // games[gamePin].scores.push(playerScoreObject)

    // console.log('players hand after change',players[playerIndex].hand)

    io.in(gamePin).emit(
      "get update game with winner card",
      chosenWinnerCardGame
    );
  },

  changeScore: (data, socket, io) => {
    console.log("hit change score", data);

    let gamePin = data.gamePin;

    let players = games[gamePin].players;

    //need to find which player needs to be updated

    currentGameAfterScoreChange = games[gamePin];

    players.score = players.score + 1;

    io.in(gamePin).emit("change player score", currentGameAfterScoreChange);
  },

  joinRoomAtPlayerView: (data, socket, io) => {
    console.log("data at hitjoinroom at player view", data);
    let gamePin = parseInt(data.gamePin);
    console.log("gamepin at join room at player view", gamePin);
    let game = games[gamePin];
    socket.join(data.gamePin);
    io.in(gamePin).emit("get game after join room", game);
  },

  getAllChosenCardsFromPlayers: (data, socket, io) => {}
};
