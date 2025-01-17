const mongoose = require('mongoose')

//Creating a schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

// creating user model
const userModel = mongoose.model('user', userSchema) //('modelName', 'schemaName')

// exporting model
module.exports = userModel 