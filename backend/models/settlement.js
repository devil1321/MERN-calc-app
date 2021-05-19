const mongoose = require('mongoose')

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId

const SettlementSchema = new mongoose.Schema({
    userId:ObjectId,
    data:{
        type:Date
    },
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

const Settlement = mongoose.model('Rozliczenia',SettlementSchema)

module.exports = Settlement