const mongoose =require('mongoose');
const { create } = require('./offerAlert');
const Schema=mongoose.Schema

const storeVisitSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    shopName:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    } ,
    time:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports= mongoose.model('StoreVisit',storeVisitSchema);