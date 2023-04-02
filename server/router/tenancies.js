const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { tenancyController } = require('../controllers');

// router.get('/',  auth(), tenantController.getAllTenants);
router.post('/', auth(), tenancyController.createTenancy);

// router.put('/edit/:tenantId', auth(), tenantController.editTenant);

// router.get('/details/:tenantId', auth(), tenantController.getTenant);


module.exports = router