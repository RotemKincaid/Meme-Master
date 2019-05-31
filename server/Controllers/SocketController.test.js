const sockFuncs = require("./SocketController");

const testDb = require("../test/init");

// var clientIo = require('socket.io-client');
// var serverIo = require("socket.io")(server);

// var socketURL = 'http://0.0.0.0:5000';

// var options ={
//   transports: ['websocket'],
//   'force new connection': true
// };

describe("Integration tests", () => {
  let db;

  beforeAll(() => {
    return testDb.initDb().then(database => {
      return (db = database);
    });
  });

  describe("describe the get media function", () => {
    it("SHould be sending the media up from db", () => {
      let req = {
        app: {
          get() {
            return db;
          }
        }
      };
      let res = {
        send(media) {
          // console.log(media);
          expect(media.length).not.toEqual(0);
          expect(media.length).toEqual(10);
        }
      };
      // const media = "this is themedia, this is dumb";

      return sockFuncs.getMedia(req, res);
    });
  });

  describe("describe the get cards to object function", () => {
    it("should be sending the cards to the object ", () => {
      let req = {
        app: {
          get() {
            return db;
          }
        }
      };
      let res = {
        send(cards) {
          // console.log(cards);
          expect(cards.length).not.toEqual(0);
          expect(cards.length).toEqual(49);
          expect(cards).toEqual(expect.any(Array));
        }
      };

      return sockFuncs.getCardsToObject(req, res);
    });
  });
});

// Francisca's testing

// describe('JOIN ROOM:', () => {
//   it('should create a new player object', () => {
//     var socket = serverIo.connect(socketURL, options)
//     console.log(socket)

//     var data = {
//       username: 'usernametest',
//       avatar: {url: 'avatarurl'},
//       gamePin: 'gamepin'

//     }
//     var newPlayer = {
//       username: data.username,
//       hand: [],
//       avatar: data.avatar.url,
//       judge: false,
//       score: 0,
//       chosen_card: {}
//     }

//     console.log(sockFuncs.joinRoom(data, socket, socket))
//     expect (sockFuncs.joinRoom().toEqual())
//     return sockFuncs.joinRoom(data, socket, io);
//   })
// })