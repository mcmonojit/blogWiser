const mongoose = require("mongoose");
// const MONGODB_URL = "mongodb://localhost:27017/BlogWiserDB";

const connectDB = async () => {
    try {
      await mongoose.connect(String(process.env.MONGODB_URL), {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
  
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;
  