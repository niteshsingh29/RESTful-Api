const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Testing = require("./mongoose/connection");
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(cors())

app.get("/", (req, res, next) => {
  res.send("sending from backend...");
});

app.get("/videos", async (req, res, next) => {
  try {
    const videosData = await Testing.find();

    if (!videosData) {
      return res.status(404).send();
    } else {
      res.send(videosData);
    }
    // console.log(videosData);
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
