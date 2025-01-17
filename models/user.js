const mongoose = require('mongoose')

//Creating a schema
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: Number
})

// creating user model
const userModel = mongoose.model('user', 'userSchema') //('modelName', 'schemaName')

// exporting model
module.exports = userModel 