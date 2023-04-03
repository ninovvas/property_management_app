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

function getProperty(req, res, next) {
    console.log(req.params);
    const { propertyId } = req.params;

    console.log(propertyId);

    propertyModel.findById(propertyId)
        .populate({
            path : 'userId'
          })
        .then(property => res.json(property))
        .catch(next);
}


function getPropertyByName(req, res, next){
    const { _id: userId } = req.user;
    const { propertyName } = req.params;
   
    const splitPropertyName = propertyName.split(" ");
    const street = splitPropertyName[0];
    const streetNumber = splitPropertyName[1];
    const city = splitPropertyName[2];
    const country = splitPropertyName[3];

    console.log("First and Last name");
    console.log(street);
    console.log(streetNumber);
    console.log(city);
    console.log(country);

     
    const searchStreet = new RegExp(street, 'i');
    const searchStreetNumber = new RegExp(streetNumber, '\d');
    const searchCity = new RegExp(city, 'i');
    const searchCountry = new RegExp(country, 'i');

    propertyModel.find({userId}).and([{'street': {$regex: searchStreet}}, {'streetNumber': streetNumber}, {'city': {$regex: searchCity}},
    {'country': {$regex: searchCountry}}]).lean()
    .then(properties => {
        res.status(200).json(properties)
    })
    .catch(next);
}




function editProperty(req, res, next){
 

    const { _id: propertyId } = req.body;
    const { street } = req.body;
    const { streetNumber } = req.body;
    const { country } = req.body;
    const { state } = req.body;
    const { city } = req.body;
    const { objectType } = req.body;
    const { objectRelation } = req.body;
    const { _id: userId } = req.user;

    console.log("Edit")


    propertyModel.findOneAndUpdate({ _id: propertyId, userId }, {street, streetNumber, country, state, city, objectRelation, objectType}, { new: true })
    .then(updatedProperty => {
        if (updatedProperty) {
            res.status(200).json(updatedProperty);
        }
        else {
            res.status(401).json({ message: `Not allowed! to edit the page` });
        }
    })
    .catch(next);

}

module.exports = {
    createProperty,
    getAllProperties,
    getProperty,
    editProperty,
    getPropertyByName
}