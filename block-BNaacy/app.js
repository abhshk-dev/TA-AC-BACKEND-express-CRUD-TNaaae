const express = require("express");
const path = require("path");
const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// entry route
app.get("/", (req, res) => {
  res.send("Welcome to port 3000");
});

// Error handler middleware
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Server listening
app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
