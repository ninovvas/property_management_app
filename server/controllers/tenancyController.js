const  {tenancyModel,tenantModel,propertyModel, userModel} = require("../models");
const { getAllTenants } = require("./tenantController");



function newTenancy(contractNumber, securityGuaranty, startTenancy, endTenancy, comment, userId, tenantId, propertyId) {
    return tenancyModel.create({contractNumber, securityGuaranty, startTenancy, endTenancy, comment, userId, tenantId, propertyId})
        .then(tenancy => {
            console.log(tenancy);
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { tenancies: tenancy._id } }),
                //tenancyModel.updateOne({ _id: tenantId }, { $push: { tenancies: tenantId } }),
                tenantModel.findByIdAndUpdate({ _id: tenantId },{ $push: { tenancies: tenancy._id }}, { new: true }),
                propertyModel.findByIdAndUpdate({ _id: propertyId },{ $push: { tenancies: tenancy._id }}, { new: true }),
                //tenancyModel.updateOne({ _id: propertyId }, { $push: { tenancies: propertyId } }),
                //thumbnailModel.findByIdAndUpdate({ _id: thumbnailId },{ $push: { thumbnailId: thumbnailId}}, { new: true }),

            ])
        })
}


function getAllTenancies(req, res, next) {
    const { _id: userId } = req.user;
    //const { userId } = req.user;
    console.log(userId);
    tenancyModel.find({userId})
        .sort({ created_at: -1 })
        //.populate('thumbnailId userId')
        .then(tenancies => {
            res.status(200).json(tenancies)
        })
        .catch(next);
}


function createTenancy(req, res, next) {
    const { contractNumber } = req.body;
    const { securityGuaranty } = req.body;
    const { startTenancy } = req.body;
    const { endTenancy } = req.body;
    const { comment } = req.body;
    const { tenantId } = req.body;
    const { propertyId } = req.body;
    const { _id: userId } = req.user;


    console.log("-----------createTenancy------------")
    console.log(req.body);

    newTenancy(contractNumber, securityGuaranty, startTenancy, endTenancy, comment, userId, tenantId, propertyId)
        .then((updatedTenancy) => {
            console.log(updatedTenancy);
            res.status(200).json(updatedTenancy);
            
        })
        .catch(next);
        
}


function getTenancy(req, res, next) {
    //console.log(req.params);
    const { tenancyId } = req.params;

    console.log(tenancyId);

    tenancyModel.findById(tenancyId)
        .populate({
            path : 'userId',
          })
          .populate({
            path : 'tenantId',
          })
          .populate({
            path : 'propertyId'
          })
        .then(tenancy => res.json(tenancy))
        .catch(next);
}



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
    createTenancy,
    getTenancy,
    getAllTenancies
}