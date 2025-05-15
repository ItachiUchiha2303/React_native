const { Router } = require("express"); // Import Express Router
const route = Router();                // Create a new Router instance
const UserLogin = require("../controllers/Userlogin"); // Import controller

route.post("/Userlogin", UserLogin);  // Define POST route

module.exports = route;               // Export the router

