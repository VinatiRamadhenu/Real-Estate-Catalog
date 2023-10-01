const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

const secretKey = process.env.SECRET_KEY;

async function signInController(req, res) {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, {
    expiresIn: "1h",
  });

  res.status(200).json({ message: "Login successful", token });
}

module.exports = { signInController };
