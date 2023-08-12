// Importing the necessary modules and models
const Message = require("../models/message"); // Importing the 'Message' model
const MessageList = require("../models/messageList"); // Importing the 'MessageList' model
const { body, validationResult } = require("express-validator"); // Importing required validation tools

// Exporting a middleware function for handling the POST request to create a new message
exports.create_message_post = [
  // Validation rules for the POST request body using express-validator
  [
    body("username")
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ max: 24 })
      .withMessage("Username cannot be longer than 24 characters"),
    body("message")
      .notEmpty()
      .withMessage("Message cannot be empty.")
      .isLength({ max: 1000 })
      .withMessage("Message cannot be longer than 1000 characters"),
  ],
  async (req, res) => {
    // Validate the request using the previously defined validation rules
    const errors = validationResult(req);

    // If there are validation errors, redirect back to the index page
    if (!errors.isEmpty()) {
      res.redirect("/");
      return;
    }

    // Extracting username and message from the request body
    const { username, message } = req.body;

    // Creating a new 'Message' instance
    const newMessage = new Message({
      username: username,
      message: message,
    });

    try {
      // Update the 'MessageList' document's messages array by pushing the new message
      await MessageList.findOneAndUpdate(
        { _id: "64d6943f0177deb9a064f179" },
        { $push: { messages: newMessage } }
      );

      // Save the new message
      await newMessage.save();

      // Redirect to Index and Updated List
      res.redirect("/");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Error saving data: " + error.message);
    }
  },
];
