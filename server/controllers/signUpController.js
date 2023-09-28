const { User } = require("../models/userModel");
const mongoose = require("mongoose");

const signUpController = (req, res) => {
  console.log(req.body);
  res.send("Hi responce from user api");
};
module.exports = { signUpController };
