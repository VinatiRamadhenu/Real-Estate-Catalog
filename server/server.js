const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
const { router } = require("./router/router");

const port = process.env.PORT || 3000;
const { connection } = require("./dbConnection/connection");
connection();
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
