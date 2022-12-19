const bcrypt = require('bcrypt');
const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteVeterinairePrivateKeys = require('../../../helpers/deleteUserPrivateKeys');
const findOneByEmail = require('./findOneByEmail');

module.exports = (veterinaireToCreate) => {
  return createModel.validate(veterinaireToCreate)
    .then(() => {
      const veterinaire = {
        ...veterinaireToCreate,
        password: bcrypt.hashSync(veterinaireToCreate.password, 10),
      };
      return veterinaire;
    })
    .then((veterinaire) => {
      return findOneByEmail(veterinaire.email)
        .catch((err) => {
          if (err.status !== 404) {
            throw err;
          }

          return connect()
            .then(db => db.collection(collections.VETERINAIRES))
            .then(collection => collection.insertOne(veterinaire))
            .then(dbResponse => deleteVeterinairePrivateKeys(dbResponse.ops[0]));
        });
    });
};
