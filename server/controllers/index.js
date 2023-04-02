const authController = require('./auth');
const propertyController = require('./propertyController');
const bookController = require('./bookController');
const tenantController = require('./tenantController');
const tenancyController = require('./tenancyController');

module.exports = {
    authController,
    propertyController,
    tenantController,
    tenancyController,
    bookController
}