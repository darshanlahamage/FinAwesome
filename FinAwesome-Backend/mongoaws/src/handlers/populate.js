const mongoose=require('mongoose')
const connectDatabase=require('../database/db')
const Offer=require('../models/offer')
const axios=require('axios')
module.exports.handler=async(event,context)=>{
    context.callbackWaitForEmptyEventLoop=false
    await connectDatabase()
        await Offer.deleteMany({})
        let responses=[];
        let count=6;
       
        const set=new Set()
        while(count<=48){
        const response=await axios.get(`link-for-offers`)
       
       
        response.data.forEach(el=>{
            responses.push(el)
            set.add(el)
           
        })
     
      count=count+6;
      
    }
    // set.forEach(async o =>{
    //     await Offer.create(o)
    // })
    await Offer.create(responses);
    console.log(set)
    console.log("populating....")
    return set;
   
    
   
    
}