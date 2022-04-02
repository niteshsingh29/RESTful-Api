const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:/test1", {})
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
