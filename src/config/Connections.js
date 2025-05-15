require('dotenv').config();
const mongoose = require("mongoose");
const MONGO_DB = process.env.MONGO_DB || `mongodb+srv://nagarajansridhar48:ammusridhar@cluster0.bh6tk.mongodb.net/`;

const connect = () =>{
try {
    mongoose.connect(MONGO_DB);
    console.log("Mongo Db connected");    
} catch (error) {
    console.log(error.message);
}
}

module.exports = connect;


