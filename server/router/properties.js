
const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { propertyController} = require('../controllers');


router.post('/', auth(), propertyController.createProperty);

module.exports = router