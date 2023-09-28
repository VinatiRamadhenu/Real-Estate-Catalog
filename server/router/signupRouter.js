const express = require("express");
const signUpRouter = express.Router();
const { signUpController } = require("../controllers/signUpController");
signUpRouter.post("/signup", signUpController);
module.exports = { signUpRouter };
