const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {type:String,require:true},
  email:  {type:String,require:true},
  age: Number,
  address:String,
  bio: String,
  hobbies:[String],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("User", userSchema);
