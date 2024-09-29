const express = require("express");
const router = express.Router();
const User = require("../models/User");
// list all users
router.get("/", (req, res) => {
  // handle Action
  res.render("usersList");
});

router.get("/new", (req, res) => {
  // render the create form
  res.render("userForm.ejs");
});

router.post("/", (req, res) => {
  // capture form data
  User.create(req.body)
    .then((data) => res.redirect("/"))
    .catch((err) => res.redirect("/users/new"));
});

router.get("/:id", (req, res) => {
  // single user detail
  res.render("singleUser.ejs");
});

router.get("/:id/edit", (req, res) => {
  // edit form
  res.render("userForm.ejs");
});

router.put("/:id", (req, res) => {
  // capture data from the update form
});
router.delete("/:id", (req, res) => {
  // delete that user
});

module.exports = router;
