const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/mern-chat-app",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
