const { Router } = require('express');
const findOneById = require('./middleware/findOneById');
const findOneByEmail = require('./middleware/findOneByEmail');

const updateOneById = require('./middleware/updateOneById');
const find = require('./middleware/find');
const createOne = require('./middleware/createOne');
const deleteOneById = require('./middleware/deleteOneById');
const veterinaireCtrl = require('./veterinairesCtrl');

const router = new Router();

router.route('/veterinaires')
  .get(find)
  .post(createOne);

router.route('/veterinaires/register').post(veterinaireCtrl.register);
router.route('/veterinaires/login').post(veterinaireCtrl.login);
router.route('/veterinaires/mail/:veterinaireEmail').get(findOneByEmail);
router.route('/veterinaires/:veterinaireId')
  .get(findOneById)
  .patch(updateOneById)
  .delete(deleteOneById);


module.exports = router;
