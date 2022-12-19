const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (cabinetId, first = 20, offset = 0) => {
  const cabinet = {
    cabinet: cabinetId,
  };
  return connect()
    .then(db => db.collection(collections.RDVS))
    .then(collection => collection.find(cabinet,
      { limit: first, skip: offset }))
    .then(cursor => cursor.toArray());
};
