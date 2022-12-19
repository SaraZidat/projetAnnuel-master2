const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { rdvId } = req.params;

  deleteOneById(rdvId)
    .then((rdv) => {
      res.json(rdv);
    })
    .catch((err) => {
      next(err);
    });
};
