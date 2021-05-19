const mongoose = require('mongoose')

const User = new mongoose.Schema({
    isAdmin:{
        type:Boolean
    },
    isActive:{
        type:Boolean
    },
    login:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    haslo:{
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
        type:Boolean
    },
    region:{
        type:String,
        required:true
    },
    umowy:[
            {
                naSwoimAucie:{
                    umowaZlecenie:{
                        data: Buffer, contentType: String
                    },
                    umowaNajmuSamochodu:{
                        data: Buffer, contentType: String
                    },
                    OswiadczenieNaCelePodatkowe:{
                        data: Buffer, contentType: String
                    },
                },
                naMoimAucie:{
                    umowaZlecenie:{
                        data: Buffer, contentType: String
                    },
                    OswiadczeniePrawaJazdy:{
                        data: Buffer, contentType: String
                    },
                    OswiadczenieNaCelePodatkowe:{
                        data: Buffer, contentType: String
                    }
                }
            }
    ]
},{timestamps:true})

const User = mongoose.model('Users',UserSchema)

module.exports = User