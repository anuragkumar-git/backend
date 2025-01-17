const mongoose = require('mongoose')

const connection = mongoose.connect("mongodb://0.0.0.0/men").then((mongo)=>{ //localhost: 0.0.0.0, collectionName: men 
    console.log(`DataBase connected collection: ${mongo.connections[0].name}`);
}).catch((err)=>{
    console.log(`Database connection ${err}`);
    
})

module.exports = connection