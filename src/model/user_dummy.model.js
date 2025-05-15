const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String },
    role: { type: String, default: "user" },
    bloodGroup: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      default: "",
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
      default: "",
    },
    dob: {
      type: String,
      required: true,
      default: "",
    },
    phoneNumber: {
      type: Number,
      required: true,
      default: "",
    },
    googleId: { type: String, unique: true },
    facebookId: { type: String, unique: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, default: "" },
    profile: {
      type: String,
      default: "",
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const UserDummy = mongoose.model("UserDummy", userSchema);

module.exports = UserDummy;
