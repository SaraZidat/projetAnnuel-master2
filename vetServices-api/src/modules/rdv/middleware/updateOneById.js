const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const rdvToUpdate = req.body;
  const { rdvId } = req.params;

  updateOneById(rdvId, rdvToUpdate)
    .then((rdv) => {
      res.json(rdv);
    })
    .catch((err) => {
      next(err);
    });
};
