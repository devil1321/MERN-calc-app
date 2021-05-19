const mongoose = require('mongoose')


const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const FakturySchema = new mongoose.Schema({
    userId:ObjectId,
    file:{
        data: Buffer, contentType: String 
    },
    data:{
        type:Date
    },
    imie:{
        type:String,
        required:true
    },
    nazwisko:{
        type:String,
        required:true
    },
    nrFaktury:{
        type:Number
    },
    ip:{
        type:Number
    },
    nrDowodu:{
        type:String
    },
    link:{
        type:String
    },
    kwota:{
        type:Number
    },
    nip:{
        type:Number
    },
    formaPlatnosci:{
        uber:{  
            type:Boolean
        },
        bolt:{  
            type:Boolean
        },
        freeNow:{  
            type:Boolean
        }
    },
 
},{timestamps:true})

const Faktury = mongoose.model('Faktury',FakturySchema)

module.exports = Faktury