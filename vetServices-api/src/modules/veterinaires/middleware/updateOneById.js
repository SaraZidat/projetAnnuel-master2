const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const veterinaireToUpdate = req.body;
  const { veterinaireId } = req.params;

  updateOneById(veterinaireId, veterinaireToUpdate)
    .then((veterinaire) => {
      res.json(veterinaire);
    })
    .catch((err) => {
      next(err);
    });
};
