const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const veterinaireToCreate = req.body;

  console.log(veterinaireToCreate);

  createOne(veterinaireToCreate)
    .then((veterinaire) => {
      res.json(veterinaire);
    })
    .catch((err) => {
      next(err);
    });
};
