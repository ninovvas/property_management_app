const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { tenantController} = require('../controllers');

router.get('/',  auth(), tenantController.getAllTenants);
router.post('/', auth(), tenantController.createTenant);

router.get('/info/:tenantName',  auth(), tenantController.getTenantByName);

router.put('/edit/:tenantId', auth(), tenantController.editTenant);

router.get('/details/:tenantId', auth(), tenantController.getTenant);
router.delete('/delete/:tenantId', auth(), tenantController.deleteTenant);


module.exports = router