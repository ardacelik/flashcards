const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from the home route</h1>");
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello from the hello route</h1>");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});
