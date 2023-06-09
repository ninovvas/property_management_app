const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const tenantSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    iban: {
        type: String,
        required: false
    },
    bic: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    tenancies: [{
        type: ObjectId,
        ref: "Tenancy"
    }]
    
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Tenant', tenantSchema);