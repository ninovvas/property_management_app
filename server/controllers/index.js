const authController = require('./auth');
const propertyController = require('./propertyController');
const bookController = require('./bookController');
const tenantController = require('./tenantController');

module.exports = {
    authController,
    propertyController,
    tenantController,
    bookController
}