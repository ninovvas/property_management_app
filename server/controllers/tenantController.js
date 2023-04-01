const  {tenantModel, userModel} = require("../models");




function newTenant(firstName, lastName, email, phone, iban, bic, address, userId) {
    return tenantModel.create({firstName, lastName, email, phone, iban, bic, address, userId })
        .then(tenant => {
            console.log(tenant);
            return Promise.all([
                tenantModel.updateOne({ _id: userId }, { $push: { tenants: tenant._id } }),
                //thumbnailModel.findByIdAndUpdate({ _id: thumbnailId },{ $push: { thumbnailId: thumbnailId}}, { new: true }),

            ])
        })
}


function getAllTenants(req, res, next) {
    const { _id: userId } = req.user;
    //const { userId } = req.user;
    console.log(userId);
    tenantModel.find({userId})
        .sort({ created_at: -1 })
        //.populate('thumbnailId userId')
        .then(tenants => {
            res.status(200).json(tenants)
        })
        .catch(next);
}


function createTenant(req, res, next) {
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { iban } = req.body;
    const { bic } = req.body;
    const { address } = req.body;
    const { _id: userId } = req.user;

    console.log("-----------createTenant------------")
    console.log(req.body);

    newTenant(firstName, lastName, email, phone, iban, bic, address, userId)
        .then((updatedTenant) => {
            console.log(updatedTenant);
            res.status(200).json(updatedTenant);
            
        })
        .catch(next);
        
}


module.exports = {
    createTenant,
    getAllTenants
}