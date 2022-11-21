const express = require("express");
const connection = require("./config/db");

const app = express();
require("dotenv").config;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server ready!");
});

// add your port number in the .env file with the key name as PORT.
app.listen(process.env.PORT || 8000, async () => {
  try {
    await connection;
    console.log("Database connection established!");
  } catch (err) {
    // after you have successfully established the database connection, replace console.log(err) with throw err.
    console.log(err);
  }
  console.log("Server listening at http:localhost:8000/");
});
