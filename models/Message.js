const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  message: {
    type: String,
    minlength: 1,
    required: [true, "please provide a message"],
  },
});
module.exports = mongoose.model("Message", MessageSchema);
