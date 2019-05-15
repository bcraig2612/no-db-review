let memeCollection = require("../db.json");

module.exports = {
  getAllMemes: (req, res, next) => {
    res.status(200).send(memeCollection);
  },
  postMemeToCollection: (req, res, next) => {
    const { id, name, url } = req.body;
    memeCollection.push({ id, name, url });
    res.status(200).send(memeCollection);
  },
  updateMemeTitle: (req, res, next) => {
    const { id } = req.params;
    const { new_name } = req.query;

    const index = memeCollection.findIndex(element => {
      return element.id === id;
    });
    if (index !== -1) {
      memeCollection[index].name = new_name;
    }
    res.status(200).send(memeCollection);
  },
  deleteMeme: (req, res, next) => {}
};
