const express = require("express");
const app = express();
const { signUpRouter } = require("./router/signupRouter");
require("dotenv").config();

const port = process.env.PORT || 3000;
const { connection } = require("./dbConnection/connection");
connection();
app.use(express.json());
app.use("/", signUpRouter);
app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
