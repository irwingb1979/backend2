const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    heroTitle: {
        type: String,
        required: true
    },
    textBody: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Hero', HeroSchema);