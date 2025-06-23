const mongoose = require('mongoose');

const BodySchema = new mongoose.Schema({
    aboutTitle: {
        type: String,
        required: true
    },
    aboutSubtitle: {
        type: String,
        required: true
    },
    aboutText: {
        type: String,
        required: true
    },
    aboutImageUrl: {
        type: String,
        required: false
    },
    featuredTitle: {
        type: String,
        required: true
    },
    featuredSubtitle: {
        type: String,
        required: true
    },
    featuredText: {
        type: String,
        required: true
    },
    featuredImageUrl: {
        type: String,
        required: false
    },
})
module.exports = mongoose.model('Body', BodySchema);