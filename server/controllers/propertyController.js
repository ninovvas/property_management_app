const  {propertyModel, userModel} = require("../models");


function newProperty(street, streetNumber, country, state, city, objectRelation, objectType, userId) {
    return propertyModel.create({street, streetNumber, country, state, city, objectRelation, objectType, userId })
        .then(property => {
            console.log(property);
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { properties: property._id } }),
                //thumbnailModel.findByIdAndUpdate({ _id: thumbnailId },{ $push: { thumbnailId: thumbnailId}}, { new: true }),

            ])
        })
}

function getAllProperties(req, res, next) {
    const { _id: userId } = req.user;
    //const { userId } = req.user;
    console.log(userId);
    propertyModel.find({userId})
        .sort({ created_at: -1 })
        //.populate('thumbnailId userId')
        .then(properties => {
            res.status(200).json(properties)
        })
        .catch(next);
}


function createProperty(req, res, next) {
    const { street } = req.body;
    const { streetNumber } = req.body;
    const { country } = req.body;
    const { state } = req.body;
    const { city } = req.body;
    const { objectType } = req.body;
    const { objectRelation } = req.body;
    const { _id: userId } = req.user;

    console.log("------------")
    console.log(req.body);

    newProperty(street, streetNumber, country, state, city, objectRelation, objectType, userId)
        .then((updatedProperty) => {
            console.log(updatedProperty);
            res.status(200).json(updatedProperty);
            
        })
        .catch(next);
        
}

module.exports = {
    createProperty,
    getAllProperties
}