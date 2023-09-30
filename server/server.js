const express = require("express");
const app = express();
require("dotenv").config();
const { router } = require("./router/router");

const port = process.env.PORT || 3000;
const { connection } = require("./dbConnection/connection");
connection();
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
