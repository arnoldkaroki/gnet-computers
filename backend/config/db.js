require('dotenv').config();
const mongoose = require('mongoose');
const config = require('config');
require("dotenv").config();

const connectDB = async () => {
  const db = process.env.MONGODB_URI;
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    
    process.exit(1);
  }
};

module.exports = connectDB;