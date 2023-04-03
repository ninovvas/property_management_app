const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { tenancyController } = require('../controllers');

router.get('/',  auth(), tenancyController.getAllTenancies);
router.post('/', auth(), tenancyController.createTenancy);

// router.put('/edit/:tenantId', auth(), tenantController.editTenant);

router.get('/details/:tenancyId', auth(), tenancyController.getTenancy);


module.exports = router