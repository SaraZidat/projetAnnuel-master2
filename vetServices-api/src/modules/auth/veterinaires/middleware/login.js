const login = require('../services/login');

module.exports = (req, res, next) => {
  const veterinaireToCreate = req.body;

  // console.log(userToCreate);

  login(veterinaireToCreate)
    .then((veterinaire) => {
      res.json(veterinaire);
    })
    .catch((err) => {
      next(err);
    });
};
