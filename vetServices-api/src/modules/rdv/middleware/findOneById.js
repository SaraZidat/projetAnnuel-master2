const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { rdvId } = req.params;
  findOneById(rdvId)
    .then((rdv) => {
      res.json(rdv);
    })
    .catch((err) => {
      next(err);
    });
};
