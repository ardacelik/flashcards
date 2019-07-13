const express = require("express");

const app = express();

app.set("view engine", "pug"); // Pug will be used as the template engine

app.get("/", (req, res) => {
  res.render("index"); // renders index.pug
});

app.get("/cards", (req, res) => {
  res.render("card", {
    prompt: "Who is buried in Grant's tomb?"
  });
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
