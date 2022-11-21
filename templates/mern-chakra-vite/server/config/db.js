const mongoose = require("mongoose");
require("dotenv").config;

// add your MongoDB connection url in the .env file with the key name as MONGO_URL.
const connection = mongoose.connect(process.env.MONGO_URL);

module.exports = connection;
