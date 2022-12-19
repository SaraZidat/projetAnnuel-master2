const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { veterinaireId } = req.params;

  deleteOneById(veterinaireId)
    .then((veterinaire) => {
      res.json(veterinaire);
    })
    .catch((err) => {
      next(err);
    });
};
