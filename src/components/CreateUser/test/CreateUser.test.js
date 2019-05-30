const sinon = require("sinon");

const cRFuncs = require("./FunctionsCreateUser");

describe("Create User test Container", () => {
  describe("avatarSet function", () => {
    it("Should check avatar exists", () => {
      expect(cRFuncs.avatarSet().length).not.toEqual(0);
    });
    it("Should check that the avatar is a string", () => {
      console.log(cRFuncs.avatarSet());
      expect(cRFuncs.avatarSet()).toEqual(expect.any(String));
    });
    it("should check that avatar is a url", () => {
      let str = cRFuncs.avatarSet();
      let correct = str.includes("https://") || str.includes("http://");
      expect(correct).toEqual(true);
    });
  });
  describe("random number generator", () => {
    it("Should check to make sure it is a number", () => {
      let number = cRFuncs.generateRandom();
      expect(number).toEqual(expect.any(Number));
    });
    it("Should check to make sure it is 6 digits long", () => {
      var doodle = cRFuncs.generateRandom();

      console.log(`${doodle}`);
      expect(`${doodle}`).toHaveLength(6);
    });
  });
});
