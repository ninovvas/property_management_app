const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const tenancySchema = new mongoose.Schema({

    contractNumber: {
        type: String,
        required: true
    },
    securityGuaranty: {
        type: Number,
        required: true
    },
    startTenancy: {
        type: Date,
        required: true
    },
    endTenancy: {
        type: Date,
        required: false
    },
    comment: {
        type: String,
        required: false
    },
    userId: {
        type: ObjectId,
        ref: "User"
    },
    tenantId: {
        type: ObjectId,
        ref: "Tenant"
    },
    propertyId: {
        type: ObjectId,
        ref: "Property"
    },
    
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Tenancy', tenancySchema);