const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

const signUpController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(201).json({ message: "Signup successful." });
  } catch (error) {
    console.error("Error in signup controller:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
module.exports = { signUpController };
