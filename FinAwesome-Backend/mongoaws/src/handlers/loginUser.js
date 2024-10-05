const connectDatabase=require('../database/db')
const User=require('../models/user')
const bcrypt=require('bcryptjs')
module.exports.handler=async(event,context)=>{
    context.callbackWaitForEmptyEventLoop=false
    await connectDatabase()
    try {

        const body = JSON.parse(event.body)
        const user = await User.findOne({email: body.email})
        if(user===null) throw new Error("User does'nt exist",401)
        console.log(user)
        console.log(body.password)
        console.log(user.password)
        const res=await bcrypt.compare(body.password,user.password)
            if(res){
            return{
                statusCode:201,
                body:JSON.stringify("Logged in")
            }
        }else{
                throw new Error("Invalid Login Credential",401)
            }
       
        
    }
    catch (error) {
        console.log(error);
        return{
            statusCode:error.statusCode||500,
            body:JSON.stringify({error:error.message})
        }
    }

}