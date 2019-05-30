var avatars =
  "https://s3-us-west-1.amazonaws.com/memes-project/avatars/chinaman.jpeg";

module.exports = {
  avatarSet() {
    return avatars;
  },

  generateRandom() {
    return Math.floor(100000 + Math.random() * 900000);
  },
};
