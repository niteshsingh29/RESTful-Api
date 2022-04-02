const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;

app.get("/", (req, res, next) => {
  res.send("sending from backend...");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
