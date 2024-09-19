const express = require("express");
const ejs = require("ejs");
const app = express();

const path = require("path");
//middlewares

// setup of view engine
app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  const user = {
    name: "Abhishek",
    age: 27,
  };
  res.render("index.ejs", { user: user });
});

app.get("/about", (req, res) => {
  res.locals.message = "Hello World";
  const sports = ["cricket", "golf", "football"];
  res.render("about.ejs", { sports: sports });
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
