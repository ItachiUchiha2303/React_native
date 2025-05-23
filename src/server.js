const express = require("express");
const connect = require("./config/Connections");
const router = require("./router/routers");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect to the database
connect();

// Middleware
app.use(cors());
app.use(express.json()); // for JSON
app.use(express.urlencoded({ extended: true })); // for form-urlencoded

// Routes
app.use("/v1", router);

// Default route
app.use("/", (req, res) => {
  res.send("API is Working");
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`Server is running on : http://localhost:${port}`)
);
