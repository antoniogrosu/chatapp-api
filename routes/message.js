const { getMessages, sendMessage } = require("../controllers/message");

const express = require("express");
const router = express.Router();

router.route("/").get(getMessages).post(sendMessage);

module.exports = router;
