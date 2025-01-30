import connectDB from "./db/index.js"

// import connectDB from "./db/index.js";
// require('dotenv').config({path:"./env"})


connectDB()














// // console.log("Hello Express.js");
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";

// const app = express();

// (
//     async () => {
//         try {
//             await mongoose.connect(`mongodb+srv://cccontactme1:pIHywDQgdeEW3DeU@rahul.vnax2.mongodb.net/?retryWrites=true&w=majority&appName=Rahul`)
//             app.on("error", (error) => {
//                 console.error("ERROR: ", error)
//                 throw error
//             })
//             app.listen(process.env.PORT, () => {
//                 console.log(`app is listening on port ${process.env.PORT}`)
//             })
//         }
//         catch (error) {
//             console.error("ERROR : ", error)
//             throw error
//         }
//     }
// )()