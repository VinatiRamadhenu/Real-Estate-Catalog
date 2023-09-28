const mongoose = require("mongoose");
const MongoUrl = process.env.MONGO_URL;

function connection() {
  mongoose
    .connect(MongoUrl)
    .then(console.log("Database connection successfull"))
    .catch((err) => {
      console.log(err);
    });
}
module.exports = { connection };
