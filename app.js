require("dotenv").config();
const authenticateUser = require("./middleware/authenticate");
const connectDB = require("./db/connect");
const cors = require("cors");
const notFoundMiddleware = require("./errors/not-found");
//routers
const messagesRouter = require("./routes/message");
const authRouter = require("./routes/auth");

const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/messages", authenticateUser, messagesRouter);
app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
