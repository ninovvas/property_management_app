const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { tenancyController } = require('../controllers');

router.get('/',  auth(), tenancyController.getAllTenancies);
router.post('/', auth(), tenancyController.createTenancy);

router.put('/edit/:tenancyId', auth(), tenancyController.editTenancy);

router.get('/details/:tenancyId', auth(), tenancyController.getTenancy);
router.delete('/delete/:tenancyId/:propertyId/:tenantId', auth(), tenancyController.deleteTenancy);


module.exports = router