const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { tenantController} = require('../controllers');

router.get('/',  auth(), tenantController.getAllTenants);
router.post('/', auth(), tenantController.createTenant);


module.exports = router