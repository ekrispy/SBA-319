const mongoose = require('mongoose');

const Schema =  mongoose.Schema

const newResturants = new Schema({
   
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Restaurant', newResturants)
