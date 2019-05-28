const sockFuncs = require("./SocketController");

const testDb = require("../test/init");

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
          console.log(media);
          expect(media.length).not.toEqual(0);
          expect(media.length).toEqual(10);
        }
      };
      // const media = "this is themedia, this is dumb";

      return sockFuncs.getMedia(req, res);
    });
  });
});
