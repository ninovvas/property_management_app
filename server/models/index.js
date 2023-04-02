const userModel = require('./userModel');
const tokenBlacklistModel = require('./tokenBlacklistModel');
const bookModel = require('./bookModel');
const propertyModel = require('./propertyModel')
const tenantModel = require('./tenantModel')
const tenancyModel = require('./tenancyModel')

module.exports = {
    userModel,
    tokenBlacklistModel,
    propertyModel,
    tenantModel,
    tenancyModel
    //bookModel,
}