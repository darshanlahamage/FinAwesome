const connectDatabase=require('../database/db')
const User=require('../models/user')
module.exports.handler=async(event,context)=>{
    context.callbackWaitForEmptyEventLoop=false
    try {
        await connectDatabase()
        const {name,email,password}=JSON.parse(event.body)
        const user=await User.create({
            name,email,password
        })
    
    return{
        statusCode:201,
        body:JSON.stringify(user)
    }
    } catch (error) {
        console.log(error);
        return{
            statusCode:error.statusCode||500,
            body:JSON.stringify({error:error.message})
        }
    }
}