const express = require("express");
const router = express.Router();
const { signUpController } = require("../controllers/signUpController");
const { signInController } = require("../controllers/signInController");
const { addNewPropController } = require("../controllers/addNewPropController");
router.post("/signup", signUpController);
router.post("/signin", signInController);
router.post("/addnewprop", addNewPropController);
module.exports = { router };
