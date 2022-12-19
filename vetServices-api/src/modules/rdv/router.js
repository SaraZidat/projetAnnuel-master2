const { Router } = require('express');
const findOneById = require('./middleware/findOneById');
const updateOneById = require('./middleware/updateOneById');
const find = require('./middleware/find');
const findByCabinet = require('./middleware/findByCabinet');

const createOne = require('./middleware/createOne');
const deleteOneById = require('./middleware/deleteOneById');

const router = new Router();

router.route('/rdvs')
  .get(find)
  .post(createOne);

router.route('/rdvs/:rdvId')
  .get(findOneById)
  .patch(updateOneById)
  .delete(deleteOneById);
/** **expérimental */
router.route('/cabinets/:cabinetId/rdvs')
  .post(createOne)
  .get(findByCabinet);

router.route('/cabinets/:cabinetId/rdvs/:rdvId')
  .delete(deleteOneById)
  .patch(updateOneById)
  .get(findOneById);
/** ** */
module.exports = router;
