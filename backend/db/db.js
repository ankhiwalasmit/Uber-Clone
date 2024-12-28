import mongoose from "mongoose";

function connectDB() {
    try {
        mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log("Connected  to DB"))
    } catch (error) {
        console.log(error)
    }
}

export default connectDB