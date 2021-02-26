const { Router } = require("express");

module.exports = new Router().get("/", (req, res) => {
  res.render("index.ejs");
});
