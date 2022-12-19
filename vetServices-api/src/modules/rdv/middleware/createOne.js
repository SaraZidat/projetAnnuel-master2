const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const rdvToCreate = req.body;

  console.log(rdvToCreate);

  createOne(rdvToCreate)
    .then((rdv) => {
      res.json(rdv);
    })
    .catch((err) => {
      next(err);
    });
};
