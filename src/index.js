// require('dotenv').config({path:'./env'})
// import dotenv from 'dotenv'
// import connectDB from "./db/index.js";
// import app from './app.js';


// dotenv.config({
//     path: './.env'
// })

// connectDB()
// .then(()=>{
//     app.listen(process.env.PORT||8000,()=>{
//         console.log(`server is running at port:${process.env.PORT}`)
//     })
// })
// .catch((err)=>{
//     console.log("MONGO DB onnected failed",err)
// })
 




// import express from "express"
// const app = express()
// ( async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("Error",error);
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {
//         console.log("ERROR:",error)
//         throw err
//     }
// })()



import dotenv from 'dotenv';  // To load environment variables
import connectDB from './db/index.js';  // Import the DB connection function
import app from './app.js';  // Import your Express app

// Load environment variables from the .env file
dotenv.config({
    path: './.env'
});

// Connect to MongoDB
connectDB()
    .then(() => {
        // Start the server once DB connection is established
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed", err);
    });
