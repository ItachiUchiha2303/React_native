require('dotenv').config();
const PORT = process.env.PORT || 7004;
const express = require("express");
const connect = require('./config/Connections');
const routes = require("./router/route");
const cors = require('cors');

const app = express();


connect();
app.listen(PORT,(()=>console.log("Activated",PORT)));
app.use(cors());
app.use(express.json());
app.use("/",routes);