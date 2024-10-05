const mongoose=require("mongoose")
let conn=null
module.exports=connectDatabase=async()=>{
    if(conn==null){
        console.log("Creating new connection")
        await mongoose.connect("your-mongo-url",{
            serverSelectionTimeoutMS:1000,
        })
        return conn;
    }
    console.log("Connection already established")
}