let memeCollection = require("../db.json");

module.exports = {
  getAllMemes: (req, res, next) => {
    res.status(200).send(memeCollection);
  },
  postMemeToCollection: (req, res, next) => {
    const { id, name, url } = req.body;
    memeCollection.push({ id, name, url });
    res.status(200).send(memeCollection);
  }
};
