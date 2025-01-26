// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/db.js";

dotenv.config({
    path:'./env'
})

app.on("error",(error)=>{
    console.log("Some Error: ",error);
})
connectDB()
.then(()=>{
app.listen(process.env.PORT || 8000,()=>{
    console.log(`Server is running at port:${process.env.PORT}`);
})
})
.catch((error)=>{
    console.log("Mongodb Connection failed!!!",error);
    process.exit(1)
})






// import express from "express";
// const app = express();

// ( async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.log("Error: ",error);
//         throw error;
//     }
// })
// ()