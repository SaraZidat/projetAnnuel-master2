const findOneByEmail = require('../services/findOneByEmail');

module.exports = (req, res, next) => {
  const { veterinaireEmail } = req.params;
  findOneByEmail(veterinaireEmail)
    .then((veterinaire) => {
      res.json(veterinaire);
    })
    .catch((err) => {
      next(err);
    });
};
