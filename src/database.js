const mongoose = require("mongoose");

async function databaseConnect() {
  try {
    console.log("Connecting to: " + process.env.DB_URI);
    await mongoose.connect(process.env.DB_URI);
    console.log("Database connected.");
  } catch (error) {
    console.error(`Failed to connect to database: ${JSON.stringify(error)}`);
  }
}

module.exports = {
  databaseConnect,
};
