// Importing mongoose library
const mongoose = require("mongoose");
// Importing Schema class from mongoose
const Schema = mongoose.Schema;

// Creating a schema for the message list
const messageListSchema = new Schema({
  // Defining the 'messages' field as an array of ObjectIds that references the 'Message' model
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

// Creating a model named 'MessageList' using the messageListSchema
const MessageList = mongoose.model("MessageList", messageListSchema);

// Exporting the MessageList model
module.exports = MessageList;
