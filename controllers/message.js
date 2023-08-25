const Message = require("../models/Message");

const getMessages = async (req, res) => {
  const messages = await Message.find({}).sort({});
  res.status(200).json({ messages });
};

const sendMessage = async (req, res) => {
  req.body.name = req.user.name;
  const message = await Message.create(req.body);
  res.status(200).json({ message });
};

module.exports = { getMessages, sendMessage };
