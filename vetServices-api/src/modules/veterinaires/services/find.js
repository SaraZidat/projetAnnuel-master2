const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteVeterinairesPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');

module.exports = (first = 20, offset = 0, term) => {
  return connect()
    .then(db => db.collection(collections.VETERINAIRES))
    .then(collection => collection.find(
      term ? { $text: { $search: term } } : null,
    ).limit(first).skip(offset))
    .then(cursor => cursor.toArray())
    .then((veterinaires) => {
      return veterinaires.map((veterinaire) => {
        return deleteVeterinairesPrivateKeys(veterinaire);
      });
    });
};
