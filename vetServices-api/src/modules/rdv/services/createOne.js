const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (rdvToCreate) => {
  return createModel.validate(rdvToCreate)
    .then(() => {
      const rdv = {
        ...rdvToCreate,
      };
      return rdv;
    })
    .then((rdv) => {
      return connect()
        .then(db => db.collection(collections.RDVS))
        .then(collection => collection.insertOne(rdv))
        .then(dbResponse => dbResponse.ops[0]);
    });
};
