const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
};

module.exports = dbConnection;