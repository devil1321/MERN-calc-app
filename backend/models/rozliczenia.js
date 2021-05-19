const mongoose = require('mongoose')


var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

const RozliczeniaSchema = new mongoose.Schema({
    userId:ObjectId,
    imie:{
        type:String,
    },
    nazwisko:{
        type:String,
    },
    nrRozliczenia:{
        type:Number
    },
    email:{
        type:String,
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
    napiwek:{
        type:Number
    },
    bonusy:{
        type:Number
    },
    potracenia:{
        type:Number
    },
    dodatek:{
        type:Number
    },
    zus:{
        type:Number
    },
    kwotaKoncowa1:{
        type:Number
    },
    kwotaKoncowa2:{
        type:Number
    },
    doWyplaty:{
        type:Number
    },
 
},{timestamps:true})

const Rozliczenia = mongoose.model('Rozliczenia',RozliczeniaSchema)

module.exports = Rozliczenia