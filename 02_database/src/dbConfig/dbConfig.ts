import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error: " + err.message);
      process.exit();
    });
  } catch (error:any) {
    console.log("Something goes wrong!: " + error.message);
  }
}