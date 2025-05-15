const mongoose = require("mongoose");

const userData_Schema = mongoose.Schema({
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
  role: {
    type: String,
    default: "user",
  },
  bloodGroup: {
    type: String,
    required: true,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    default:""
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
    default:""
  },
  dob: {
    type: String,
    required: true,
    default:""
  },
  phoneNumber:{
    type:Number,
    required:true,
    default:""
  },
  googleId:{
    type:String,
    default:""
  },
  facebook:{
    type:String,
    default:""
  },
  createdAt: { type: Date, default: Date.now }
},{ timestamps: true });

const UserData = mongoose.model('UserData',userData_Schema);

module.exports = UserData;