const express = require("express");
const path = require("path");
const { send } = require("process");
const studentsRouter = require("./routes/students");
// Intitializing App
const app = express();

//middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/students", studentsRouter);

// Error handler middleware
app.use((req, res, next) => {
  res.status(404).send("page not found");
});

app.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
