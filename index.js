require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes.js");

const { MONGO_USER, MONGO_PASS, MONGO_URI, MONGO_DB } = process.env;

main();

function main() {
  mongoose
    .connect(`mongodb://${MONGO_URI}/${MONGO_DB}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => {
      const app = express();
      app.set("view engine", "ejs");
      app.set("views", path.join(__dirname, "pages"));
      app.use("/", routes);
      app.listen(5000);
    });
}
