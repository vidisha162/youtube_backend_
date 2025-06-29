// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async ()=>{
//     try{
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n mongoDB connected!! DB HOST:${connectionInstance.connection.host}`);
//     }catch(error){
//         console.log("MONGODB connection error",error);
//         process .exit(1)
//     }
// }

// export default connectDB

import mongoose from "mongoose";

// The connectDB function to establish a connection with MongoDB
const connectDB = async () => {
    try {
        // Connect using the MONGODB_URI directly from the .env file
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1);  // Exit if the connection fails
    }
};

export default connectDB;
