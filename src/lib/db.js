import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection.");
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.log("MONGODB_URI is not defined in environment variables");
    // ("MONGODB_URI is not defined in environment variables");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    console.log("Failed to connect to MongoDB");
  }
};

export default connectDB;
