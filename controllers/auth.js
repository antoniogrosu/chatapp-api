const User = require("../models/User");

const register = async (req, res) => {
  const user = await User.create(req.body);
  const token = user.createToken();
  res.status(200).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new Error("Invalid Credentials");
  }
  // compare password
  const token = user.createToken();
  res.status(200).json({ user: { id: user.id, name: user.name }, token });
};

module.exports = { register, login };
