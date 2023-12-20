import mongoose from "mongoose";

   const connectDB = async() =>{
    try {
        if(global.mongoose && global.mongoose.conn){
            console.log('Using existing Database connection');
            return global.mongoose.conn;
        }else{
            const connection = await mongoose.connect(process.env.DB_URL);
            console.log('Database connected');
            global.mongoose = { conn: connection }; // Cache the connection

            return connection;
        }
       
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connectDB;

