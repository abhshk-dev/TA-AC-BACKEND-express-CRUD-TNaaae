const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { send } = require("process");
const usersRouter = require("./routes/users");

// Connecting to Database
mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => {
    console.log(`mongodb connection established`);
  })
  .catch((err) => {
    console.log(err);
  });

// Initializing App
const app = express();

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

// Router
app.use("/users", usersRouter);

// error handler
app.use((req, res, next) => {
  res.status(404).send("page not found");
});

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
