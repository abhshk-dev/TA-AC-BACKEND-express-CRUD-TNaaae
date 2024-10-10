const express = require("express");
const path = require("path");
const userRouter=require('./routes/user');
const mongoose=require('mongoose');


const app = express();

// Db connection

mongoose
.connect("mongodb://127.0.0.1:27017/users")
.then(() => {
  console.log(`mongodb connection established`);
})
.catch((err) => {
  console.log(err);
});


// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: false }));

// entry route
app.get('/',(req,res)=>{
  res.render('index')
})
app.use('/users',userRouter);

// Error handler middleware
app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

// Custom error handler middleware
app.use((err,req,res,next)=>{
  res.send(err);
})

// Server listening
app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
