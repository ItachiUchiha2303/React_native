const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    role: { type: String, default: "user" },

    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    dob: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
    googleId: {
      type: String,
      unique: true,
    },
    facebookId: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: { type: String },
    profile: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const UserDummy = mongoose.model("UserDummy", userSchema);

module.exports = UserDummy;
