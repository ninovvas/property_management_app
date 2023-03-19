const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [{type: String}],
        required: true
    },
    published: {
        type: Date,
        required: false
    },
    subtitle: {
        type: String,
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    thumbnails : [],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    description: {
        type: String,
        required: false
    },
    read: {
        type: Boolean,
        required: false
    }
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Book', bookSchema);