const  {tenantModel, userModel, tenancyModel} = require("../models");




function newTenant(firstName, lastName, email, phone, iban, bic, address, userId) {
    return tenantModel.create({firstName, lastName, email, phone, iban, bic, address, userId })
        .then(tenant => {
            console.log(tenant);
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { tenants: tenant._id } }),
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

function getTenantByName(req, res, next){
    const { _id: userId } = req.user;
    const { tenantName } = req.params;
    //const { lastName } = req.params;

    const firstAndLastName = tenantName.split(", ");
    const firstName = firstAndLastName[0];
    const lastName = firstAndLastName[1];

    // console.log("First and Last name");
    // console.log(firstName);
    // console.log(lastName);

     
    const searchFirstName = new RegExp(firstName, 'i');
    const searchLastName = new RegExp(lastName, 'i');

    tenantModel.find({userId}).and([{'firstName': {$regex: searchFirstName}}, {'lastName': {$regex: searchLastName}}]).lean()
    .then(tenants => {
        res.status(200).json(tenants)
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
          .populate({
            path : 'tenancies'
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

function deleteTenant(req, res, next) {
    const { tenantId } = req.params;
    const { _id: userId } = req.user;

    console.log('userId ' + userId)
    console.log('tenantId ' + tenantId)
    console.log(req.params);
 


    Promise.all([
        tenantModel.findOneAndDelete({ _id: tenantId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { tenants:  tenantId} }),
        //tenancyModel.findOneAndUpdate({ _id: tenancyId }, { $pull: { tenantId: tenantId } }),
        // propertyModel.findOneAndUpdate({ _id: propertyId }, { $pull: { tenancies: tenancyId } }),

    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed! to edit the page` });
            }
        })
        .catch(next);
}



module.exports = {
    createTenant,
    getAllTenants,
    editTenant,
    getTenant,
    getTenantByName,
    deleteTenant
}