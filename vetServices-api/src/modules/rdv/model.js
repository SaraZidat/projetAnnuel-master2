const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  libelle: joi.string(),
  price: joi.number(),
  cabinet: joi.string(),
  isDispo: joi.boolean(),
  description: joi.string(),
});

const updateModel = joi.object().keys({
  libelle: joi.string(),
  cabinet: joi.string(),
  price: joi.number(),
  isDispo: joi.boolean(),
  description: joi.string(),
});

module.exports = {
  createModel,
  updateModel,
};
