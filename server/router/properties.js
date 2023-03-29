
const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { propertyController} = require('../controllers');

router.get('/',  auth(), propertyController.getAllProperties);
router.post('/', auth(), propertyController.createProperty);

router.get('/details/:propertyId', auth(), propertyController.getProperty);

router.put('/edit/:propertyId', auth(), propertyController.editProperty);

module.exports = router