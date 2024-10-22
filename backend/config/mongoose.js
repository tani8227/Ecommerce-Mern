import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config(); 


mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;

db.on('open', () => {
    console.log("successfully connected to db");
})
db.on('error', () => {
    console.log("error in connecting to db");
})

export default db;   
