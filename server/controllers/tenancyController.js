const  {tenancyModel,tenantModel,propertyModel, userModel} = require("../models");



function newTenancy(securityGuaranty, startTenancy, endTenancy, comment, userId, tenantId, propertyId) {
    return tenancyModel.create({securityGuaranty, startTenancy, endTenancy, comment, userId, tenantId, propertyId})
        .then(tenancy => {
            console.log(tenancy);
            return Promise.all([
                tenancyModel.updateOne({ _id: userId }, { $push: { tenancies: tenancy._id } }),
                tenancyModel.updateOne({ _id: tenantId }, { $push: { tenancies: tenantId } }),
                tenancyModel.updateOne({ _id: propertyId }, { $push: { tenancies: propertyId } }),
                //thumbnailModel.findByIdAndUpdate({ _id: thumbnailId },{ $push: { thumbnailId: thumbnailId}}, { new: true }),

            ])
        })
}


// function getAllTenants(req, res, next) {
//     const { _id: userId } = req.user;
//     //const { userId } = req.user;
//     console.log(userId);
//     tenantModel.find({userId})
//         .sort({ created_at: -1 })
//         //.populate('thumbnailId userId')
//         .then(tenants => {
//             res.status(200).json(tenants)
//         })
//         .catch(next);
// }


function createTenancy(req, res, next) {
    const { securityGuaranty } = req.body;
    const { startTenancy } = req.body;
    const { endTenancy } = req.body;
    const { comment } = req.body;
    const { tenantId } = req.body;
    const { propertyId } = req.body;
    const { _id: userId } = req.user;


    console.log("-----------createTenancy------------")
    console.log(req.body);

    newTenancy(securityGuaranty, startTenancy, endTenancy, comment, userId, tenantId, propertyId)
        .then((updatedTenancy) => {
            console.log(updatedTenancy);
            res.status(200).json(updatedTenancy);
            
        })
        .catch(next);
        
}


// function getTenant(req, res, next) {
//     //console.log(req.params);
//     const { tenantId } = req.params;

//     console.log(tenantId);

//     tenantModel.findById(tenantId)
//         .populate({
//             path : 'userId'
//           })
//         .then(tenant => res.json(tenant))
//         .catch(next);
// }



// function editTenant(req, res, next){
//     const { _id: tenantId } = req.body;
//     const { firstName } = req.body;
//     const { lastName } = req.body;
//     const { email } = req.body;
//     const { phone } = req.body;
//     const { iban } = req.body;
//     const { bic } = req.body;
//     const { address } = req.body;
//     const { _id: userId } = req.user;


//     console.log("Edit Tenant")


//     tenantModel.findOneAndUpdate({ _id: tenantId, userId }, {firstName, lastName, email, phone, iban, bic, address}, { new: true })
//     .then(updatedTenant => {
//         if (updatedTenant) {
//             res.status(200).json(updatedTenant);
//         }
//         else {
//             res.status(401).json({ message: `Not allowed! to edit the page` });
//         }
//     })
//     .catch(next);

// }


module.exports = {
    createTenancy
}