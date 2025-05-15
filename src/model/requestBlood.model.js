const mongoose = require("mongoose");

const requestBlood_Schema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    selectedGroup: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    patientName: {
      type: String,
      required: true,
    },
    patientAge: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: Number,
      required: true,
    },
    patientInfo: {
      type: String,
      required: true,
    },
    critical: {
      type: Boolean,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const requestBlood = mongoose.model("RequestBlood", requestBlood_Schema);

module.exports = requestBlood;
