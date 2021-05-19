const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    isAdmin:{
        type:Boolean
    },
    isActive:{
        type:Boolean
    },
    login:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    imie:{
        type:String,
        required:true
    },
    nazwisko:{
        type:String,
        required:true
    },
    pesel:{
        type:Number
    },
    nrDowodu:{
        type:String
    },
    auto:{
        type:Boolean,
        required:true
    },
    region:{
        type:String,
        required:true
    }
},{timestamps:true})

const User = mongoose.model('Users',UserSchema)

module.exports = User