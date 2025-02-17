import mongoose from "mongoose"
import {DB_NAME} from "../constatns.js"
// import express from "express"
// const app = express()


const connectDB= async ()=>{
  try {
    const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n mongodb connected DB host:${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongodp connection error", error);
    process.exit(1) 
  }
}

export default connectDB



// ;(async()=>{
//   try {
//     mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (error)=>{
//       console.log("err:", error);
//       throw error
//     })

//     app.listen(process.env.PORT, ()=>{
//       console.log(`app is listening on port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.error("ERROR: ", error);
//     throw error
//   }
// })()