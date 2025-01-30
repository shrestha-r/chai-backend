import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    console.log(DB_NAME)
    try{
        const connectMe = await mongoose.connect(`mongodb+srv://rahul123:rahul123@rahul.vnax2.mongodb.net/?retryWrites=true&w=majority&appName=Rahul/${DB_NAME}`)
        console.log(`MongoDB connected!!! DB HOSTED: ${connectMe.connection.host}`)
    }
    catch(error){
        console.log("MMONGODB CONNNECTINO ERROR: ", error)
        process.exit(1)
    } 
}

export default connectDB;