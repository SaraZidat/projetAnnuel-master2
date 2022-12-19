const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../../model');
const findOneByEmail = require('../../../veterinaires/services/findOneByEmail');

const jwtSecret = 'veterinaires_key';
module.exports = (veterinaireToCreate) => {
  return userModel.validate(veterinaireToCreate)
    .then(() => {
      const veterinaire = {
        ...veterinaireToCreate,
      };
      return veterinaire;
    })

    .then((veterinaire) => {
      return findOneByEmail(veterinaire.email).then((veterinaireDB) => {
        const match = bcrypt.compareSync(veterinaire.password, veterinaireDB.password);
        if (match) {
          const token = jwt.sign({ id: veterinaireDB.id }, jwtSecret, { expiresIn: '60m' });
          const veterinaireAuth = {
            ...veterinaireDB,
            token,
          };
          return veterinaireAuth;
        }
        const err = { error: 'authentication failed', status: 403 };
        return err;
      });
    });
};
