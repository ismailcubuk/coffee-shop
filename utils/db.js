import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Coffee-Shop",
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.log(err.message);
  }
};
