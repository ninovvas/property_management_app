const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const propertySchema = new mongoose.Schema({

    street: {
        type: String,
        required: true
    },
    streetNumber: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    objectType: {
        type: String,
        required: true
    },
    objectRelation: {
        type: String,
        required: true
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Property', propertySchema);