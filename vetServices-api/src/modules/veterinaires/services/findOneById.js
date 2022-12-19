const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteVeterinairePrivateKeys = require('../../../helpers/deleteUserPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.VETERINAIRES))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((veterinaire) => {
      if (veterinaire) {
        return deleteVeterinairePrivateKeys(veterinaire);
      }

      const err = new Error(`List not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
