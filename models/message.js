// Importing mongoose library
const mongoose = require("mongoose");

// Defining a schema for the 'Message' collection
const messageSchema = new mongoose.Schema({
  // Defining fields 'username' and 'message' with data type String
  username: String,
  message: String,
});

// Creating a model named 'Message' using the messageSchema
const Message = mongoose.model("Message", messageSchema);

// Exporting the Message model for use in other parts of the application
module.exports = Message;
