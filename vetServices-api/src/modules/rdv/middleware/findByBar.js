const isUndefined = require('lodash/isUndefined');
const findByCabinet = require('../services/findByCabinet');

module.exports = (req, res, next) => {
  const { cabinetId } = req.params;

  const {
    first,
    offset,
    term,
  } = req.query;
  let firstInt;
  let offsetInt;

  if (!isUndefined(first)) firstInt = parseInt(first, 10);
  if (!isUndefined(offset)) offsetInt = parseInt(offset, 10);

  findByCabinet(cabinetId, firstInt, offsetInt, term)
    .then((bdd) => {
      res.json(bdd);
    })
    .catch((err) => {
      next(err);
    });
};
