const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { veterinaireId } = req.params;
  findOneById(veterinaireId)
    .then((veterinaire) => {
      res.json(veterinaire);
    })
    .catch((err) => {
      next(err);
    });
};
