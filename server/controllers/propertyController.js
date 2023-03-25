const  {propertyModel, userModel} = require("../models");


function newProperty(street, streetNumber, country, state, city, objectType, objectRelation, userId) {
    return propertyModel.create({street, streetNumber, country, state, city, objectType, objectRelation, userId })
        .then(property => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { properties: property._id } }),
                //thumbnailModel.findByIdAndUpdate({ _id: thumbnailId },{ $push: { thumbnailId: thumbnailId}}, { new: true }),

            ])
        })
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

    newProperty(street, streetNumber, country, state, city, objectType, objectRelation, userId)
        .then(([_, updatedProperty]) => res.status(200).json(updatedProperty))
        .catch(next);
        
}

module.exports = {
    createProperty,
}