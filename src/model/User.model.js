const mongoose = require("mongoose");

const User_Schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "is invalid"],
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  bloodGroup: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  dob: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User_data", User_Schema);
module.exports = User;
