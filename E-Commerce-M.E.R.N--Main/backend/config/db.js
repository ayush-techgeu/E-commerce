import mongoose from 'mongoose';
const connectionstr = "mongodb+srv://ayushsingh22041:adminadmin@cluster0.wnr7k.mongodb.net/new-store?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(connectionstr || process.env.MONGO_URI);
    console.log(`MongoDB connected to ${connection.connection.db.databaseName}`);

    // console.log(
    //   `MongoDB connected successfully on host: ${connection.connection.host}, database: ${connection.connection.db.databaseName}`
    // );
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
