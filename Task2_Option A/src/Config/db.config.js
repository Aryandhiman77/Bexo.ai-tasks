import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const instance = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to Database : ${instance.connection.host} `);
  } catch (error) {
    console.log("Cannot connect to database:", error.message);
    process.exit(1);
  }
};
export default connectDb;
