const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.render("index", { name }); // renders index.pug
  } else {
    res.redirect("/hello");
  }
});

router.get("/hello", (req, res) => {
  const name = req.cookies.username;
  if (name) {
    res.redirect("/"); // renders index.pug
  } else {
    res.render("hello");
  }
});

router.post("/hello", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect("/");
});

router.post("/goodbye", (req, res) => {
  res.clearCookie("username");
  res.redirect("/hello");
});

// router.use((req, res, next) => {
//   const err = new Error("Not found");
//   err.status = 404;
//   next(err);
// });

module.exports = router;
