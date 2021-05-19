 
 const mongoose = require('mongoose')

 const Schema = mongoose.Schema 
 const ObjectId = Schema.ObjectId
 const AgreementSchema = new mongoose.Schema({
    userId:ObjectId,
    naSwoimAucie:{
        umowaZlecenie:{
            data:{
                type:Date,
            },
            umowaZlecenie:{
                data: Buffer, contentType: String 
            }
        },
        umowaNajmuSamochodu:{
            data:{
                type:Date,
            },
            umowaNajmuSamochodu:{
                data: Buffer, contentType: String
            }
        },
        OswiadczenieNaCelePodatkowe:{
            data:{
                type:Date,
            },
            oswiadczenieNaCelePodatkowe:{
                data: Buffer, contentType: String 
            }
        },
    },
    naMoimAucie:{
        umowaZlecenie:{
            data:{
                type:Date,
            },
            umowaZlecenie:{
                data: Buffer, contentType: String 
            }
        },
        oswiadczeniePrawaJazdy:{
            data:{
                type:Date,
            },
            oswiadczeniePrawaJazdy:{
                data: Buffer, contentType: String
            }
        },
        OswiadczenieNaCelePodatkowe:{
            data:{
                type:Date,
            },
            oswiadczenieNaCelePodatkowe:{
                data: Buffer, contentType: String 
            }
        },
    }
 },{timestamps:true})
 
 const Agreement = mongoose.model('Umowy',AgreementSchema)
 
 module.exports = Agreement
 