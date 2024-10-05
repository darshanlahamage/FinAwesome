const mongoose =require('mongoose')
const Schema=mongoose.Schema

const offerAlertSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    product:{
        type:String,
        required:true,
    },
    discount:{
        type:String,
        required:true,
    },
    expiry:{
        type:Date,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports= mongoose.model('OfferAlert',offerAlertSchema);