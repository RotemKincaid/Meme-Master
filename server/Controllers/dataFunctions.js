module.exports = {
    newPlayer: (data) => {
        return {
          username: data.username,
          hand: [],
          avatar: data.avatar.url,
          judge: false,
          score: 0,
          chosen_card: {}
        };
    },

    shuffleCards: (cardsFromDb) => {
         cardsFromDb.sort(function(a, b) {
            return Math.random() - 0.5;
        });
       
    },

    newGame: (cardsFromDb, mediaFromDb) => {

        console.log('MEDIA FROM DB AT DATA FUNCTIONS', mediaFromDb)

        var shuffledCards = cardsFromDb[0].sort(function(a, b) {
            return Math.random() - 0.5;
        });

        var shuffledMedia = mediaFromDb[0].sort(function(a, b) {
            return Math.random() - 0.5;
        });

        let newGame = {
            cards: shuffledCards,
            turn: 1,
            images: shuffledMedia,
            current_image: "",
            players: [],
            active: false,
            chosenCards: [],
            winnerCard: [],
            scores: [],
            judge: []
          };

        return newGame
    }
}