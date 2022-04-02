const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test1", {})
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const schema = new mongoose.Schema({
  src: String,
  title: String,
});

const Testing = new mongoose.model("Testing", schema);

module.exports = Testing;
