import { log } from "console"
import mongoose from "mongoose"
export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL as string)
    console.log("Mongo Connected");

}