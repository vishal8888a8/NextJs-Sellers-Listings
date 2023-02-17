import mongoose from "mongoose";
require("dotenv").config();
let DB_URL: string = process.env.MONGO_URI!;

const connectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("db connected already!");
    } else {
        mongoose.set("strictQuery", true);
        mongoose.connect(DB_URL, () => console.log("DB is connected"));
    }
};

export default connectDB;
