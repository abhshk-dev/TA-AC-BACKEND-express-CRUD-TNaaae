const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, default: 0 },
  email: { type: String, lowercase: true },
  marks: [Number],
  password: {
    type: String,
    minlength: 5,
    maxlength: 15,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("User", userSchema);
