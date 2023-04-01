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


function getTenant(req, res, next) {
    //console.log(req.params);
    const { tenantId } = req.params;

    console.log(tenantId);

    tenantModel.findById(tenantId)
        .populate({
            path : 'userId'
          })
        .then(tenant => res.json(tenant))
        .catch(next);
}



function editTenant(req, res, next){
    const { _id: tenantId } = req.body;
    const { firstName } = req.body;
    const { lastName } = req.body;
    const { email } = req.body;
    const { phone } = req.body;
    const { iban } = req.body;
    const { bic } = req.body;
    const { address } = req.body;
    const { _id: userId } = req.user;


    console.log("Edit Tenant")


    tenantModel.findOneAndUpdate({ _id: tenantId, userId }, {firstName, lastName, email, phone, iban, bic, address}, { new: true })
    .then(updatedTenant => {
        if (updatedTenant) {
            res.status(200).json(updatedTenant);
        }
        else {
            res.status(401).json({ message: `Not allowed! to edit the page` });
        }
    })
    .catch(next);

}


module.exports = {
    createTenant,
    getAllTenants,
    editTenant,
    getTenant
}