const { Router } = require("express");
const Userroute = require("./User.route");

const route = Router();

route.use("/User", Userroute); // Now /Userlogin inside Userroute becomes /User/Userlogin

module.exports = route;