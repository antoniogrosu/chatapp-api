const mongoose = require("mongoose");

const connectDB = async (url) => {
  console.log("Connected");
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
