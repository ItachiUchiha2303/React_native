const express = require("express");
const connect = require("./config/Connections");
const routers = require("./router/routers");
const cors = require("cors");
require("dotenv").config();

const app = express();

//DB COnncetion
connect();

app.use(cors());
app.use(express.json());

app.use("/v1", routers);

//checking port sever is running
app.use("/", (req, res) => {
  res.send("API is Working");
});

//port Listen
const port = process.env.PORT || 7004;
app.listen(port, () =>
  console.log(`Server is running on : http://localhost:${port} `)
);
