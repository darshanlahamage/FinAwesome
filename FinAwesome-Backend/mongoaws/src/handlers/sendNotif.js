const Offer=require('../models/offer')
const axios=require('axios')
const connectDatabase=require('../database/db')
module.exports.handler=async(event,context)=>{
    context.callbackWaitForEmptyEventLoop=false
    await connectDatabase()
    const offer=await Offer.findOne({})
    console.log(offer)
    await axios.post('********.amazonaws.com/publish',{
        message:`${offer?.OfferDescription1} ${offer?.OfferDescription2} at ${offer?.ShopName}`
    })
}