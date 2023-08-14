const express = require("express");
const messageController = require("../controller/messageController");
const MessageList = require("../models/messageList");
const router = express.Router(); // Changed 'var' to 'const'
const arrimp = require("../scripts/arrayManipulation");

// GET home page.
router.get("/", async (req, res) => {
  try {
    // Fetches a message list and its associated messages from the database
    let messageList = await MessageList.findById(
      "64d6943f0177deb9a064f179"
    ).populate("messages");

    // Manipulates the messages array
    const messagesArray = arrimp.arrayManipulation(messageList.messages);

    // Renders the home page with the manipulated message list
    res.render("index", {
      message_list: messagesArray,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error fetching data: " + error.message);
  }
});

// POST route to handle message creation
router.post("/", messageController.create_message_post);

module.exports = router;
