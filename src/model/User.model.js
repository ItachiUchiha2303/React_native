const mongoose = require("mongoose");

const User_Schema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        match:[/\S+@\S+\.\S+/, 'is invalid']
    },
    name:{
        type:String,
        required:true
    }    
})

module.exports = mongoose.model("User_data",User_Schema);