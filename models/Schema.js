const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, unique: true, lowercase: true, required: true}, 
    password: { type: String, required: true }, 
    timestamp: {type: Date, default: Date.now}
})

module.exports = mongoose.model('data', DataSchema)